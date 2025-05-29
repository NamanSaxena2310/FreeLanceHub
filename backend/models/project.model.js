const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
          
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
          },
          status: {
            type: String,
            required: true,
            enum: ["Not Started", "In Progress", "Completed", "Cancelled"],
          },
          deadline: {
            type: Date,
          },
          client:
            {
              type:mongoose.Schema.Types.ObjectId,
              ref: "Client",
              required:true
            }
          
})

const Project = new mongoose.model('Project',ProjectSchema)
module.exports = {Project}