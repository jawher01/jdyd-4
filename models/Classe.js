const mongoose = require("mongoose");

const ClasseSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
    },
    cours: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cours",
      }
    ],
    formation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "formation",
    },
    etudiant: {
        type: [String],
    },
    proffeseur: {
        type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("classe", ClasseSchema);
