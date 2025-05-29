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
     userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

const Client = new mongoose.model("Client", ClientSchema);

module.exports = { Client };
