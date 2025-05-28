const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    projects: {
      type: [
        {
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
        },
      ],
    },
  },
  { timestamps: true }
);

const Client = new mongoose.model("Client", ClientSchema);

module.exports = { Client };
