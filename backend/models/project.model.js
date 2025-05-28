const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
          client:
            {
              type:mongoose.Schema.Types.ObjectId,
              ref: "Client",
              required:true
            }
          ,
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
})