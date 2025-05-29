const { Client } = require("../models/client.model");
const { User } = require("../models/user.model");
const validator = require("validator");

// Add a new Client
const addClient = async (req, res, next) => {
  try {
    const { name, company, email, phone, notes } = req.body;
    const userId = req.userId;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      return res.json({
        success: false,
        message: "name email or phone fields cannot be empty ",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email ",
      });
    }

       if (!validator.isMobilePhone(phone)) {
       return res.json({
        success:false,
        message:"Please Enter a Valid Phone Number"
      })
    }


    const clientExist = await Client.findOne({ email });
    if (clientExist) {
      return res.json({
        success: false,
        message: "Client Already Exists",
      });
    }

    const newClient = new Client({
      name,
      company,
      email,
      phone,
      notes,
      userId,
    });
    await newClient.save();

    res.json({
      success: true,
      message: "Client Added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Clients Details
const getClients = async (req, res, next) => {
  try {
    
    const userId = req.userId;

    
    const clientDetails = await Client.find({ userId });

    if (clientDetails.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No clients found",
      });
    }

    res.json({
      success: true,
      data: clientDetails,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Edit Client Details
const updateClient = async (req, res, next) => {
  try {
    const { name, company, phone, email, notes } = req.body;
    const userId = req.userId;

    const clientId  = req.headers['clientid'];

    console.log(clientId,userId)
    if (!validator.isEmail(email)) {
      return res.json({
        success:false,
        message:"Please Enter a Valid Email"
      })
    }

    if (!validator.isMobilePhone(phone)) {
       return res.json({
        success:false,
        message:"Please Enter a Valid Phone Number"
      })
    }

    const updatedClient = await Client.findOneAndUpdate(
      { _id: clientId, userId: (userId) },
      { name, company, phone, email, notes },
      { new: true }
    );

    res.json({
      success: true,
      data: updatedClient,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a client

const deleteClient = async (req, res, next) => {
  try {
    const userId = req.userId;
    
    const clientId = req.headers['clientid'];

    const clientDeleted = await Client.findOneAndDelete({
      _id: clientId,
      userId: userId,
    });

    
    if (!clientDeleted) {
      return res.json({
        success: false,
        message: "Client not found or unauthorized",
      });
    }

    res.json({
      success: true,
      message: "Client Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get Details of single client

const getDetailsOfSingleClient = async (req, res, next) => {
  try {
    const userId = req.userId;
    
    const clientId  = req.headers['clientid'];
    const details = await Client.findOne({ _id: clientId, userId: userId });

    if (!details) {
      return res.json({
        success: false,
        message: "Client Does Not Exists",
      });
    }
    res.json({
      success: true,
      data: details,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addClient,
  getClients,
  updateClient,
  deleteClient,
  getDetailsOfSingleClient,
};
