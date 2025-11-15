import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js"; // adjust path if needed

export class Ticket extends Model {}

Ticket.init(
  {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Success", "Failed"),
      defaultValue: "Pending",
    },
  },
  {
    sequelize,
    modelName: "Ticket",
    tableName: "Tickets", // optional but recommended
    timestamps: true, // if you want createdAt & updatedAt
  }
);

export default Ticket;
