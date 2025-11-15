import ticket from "../models/ticket.js";
import CrudRepository from "./crudRepository.js";

export default class TicketRepository extends CrudRepository {
  constructor() {
    super(ticket);
  }

  async getPendingTickets() {
    return await ticket.find({ status: "Pending" });
  }

}       
