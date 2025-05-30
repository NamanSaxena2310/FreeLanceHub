

import { Client } from "../models/client.model";
import { Project } from "../models/project.model";


// Get All projects for a client
const getAllProjects = async(req,res,next)=>{
  
  try {
    const clientId = req.headers['clientid']
    const userId = req.userId
  if (!clientId) {
    return res.json({
      success:false,
      message:"Invalid Client Id"
    })
  }

  const client = await Client.findOne({ _id:clientId,userId})
  if (!client) {
    return res.json({ success: false, message: "Unauthorized" });
  }

  const allProjects = await Project.find({clientId}).populate('clientId')

  if (allProjects.length === 0) {
     return res.json({
      success:false,
      message:"No Projects found for this client"
    })
  }

  res.json({
    success:true,
    data:allProjects
  })

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
 
}

// Create a new Project
const createProject = async (req, res, next) => {
  try {
    const clientId = req.headers['clientid'];
    const { title, description, status, deadline } = req.body;
    const userId = req.userId;

    const client = await Client.findOne({ _id: clientId, userId });
    if (!client) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    if (!title?.trim() || !status?.trim() || !deadline) {
      return res.json({
        success: false,
        message: "Title, status and deadline are required."
      });
    }

    
    const validStatuses = ["Not Started", "In Progress", "Completed", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.json({
        success: false,
        message: "Invalid status value"
      });
    }

    const newProject = new Project({
      title: title.trim(),
      description: description?.trim() || "",
      status,
      deadline: new Date(deadline),
      clientId
    });

    await newProject.save();

    res.json({
      success: true,
      message: "Project Created",
      data: newProject
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};


// Update Project

const updateProject = async (req, res, next) => {
  try {
    const projectId = req.headers['projectid']; 
    const userId = req.userId;
    const { title, description, status, deadline } = req.body;

    
    const project = await Project.findOne({ _id: projectId }).populate('clientId');

    if (!project) {
      return res.json({
        success: false,
        message: "Project not found!"
      });
    }

    
    if (userId.toString() !== project.clientId.userId.toString()) {
      return res.json({
        success: false,
        message: "Not Authorized"
      });
    }

    
    const updateData = {};
    if (title?.trim()) updateData.title = title.trim();
    if (description?.trim()) updateData.description = description.trim();

    if (status?.trim()) {
      const validStatuses = ["Not Started", "In Progress", "Completed", "Cancelled"];
      if (!validStatuses.includes(status.trim())) {
        return res.json({ success: false, message: "Invalid status value" });
      }
      updateData.status = status.trim();
    }

    if (deadline) updateData.deadline = new Date(deadline);

    if (Object.keys(updateData).length === 0) {
      return res.json({
        success: false,
        message: "No valid fields to update"
      });
    }

    
    const updatedProject = await Project.findOneAndUpdate(
      { _id: projectId },
      updateData,
      { new: true }
    );

    res.json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Delete project
const deleteProject = async(req,res,next) =>{
  try {
  const projectId = req.headers['projectid']
  const userId = req.userId
  
  const project = await Project.findOne({ _id: projectId }).populate('clientId');

    if (!project) {
      return res.json({
        success: false,
        message: "Project not found!"
      });
    }


    if (userId.toString() !== project.clientId.userId.toString()) {
      return res.json({
        success: false,
        message: "Not Authorized"
      });
    }

    const deletedProject = await Project.findByIdAndDelete(projectId)

    res.json({
      success:true,
      message:"Project Deleted",
      data:deletedProject
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
  

}



module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject
}