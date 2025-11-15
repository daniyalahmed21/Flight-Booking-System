import Repositories from "../repositories/index.js";
import { StatusCodes } from "http-status-codes";
import AppError from "../utils/errors/appError.js";

export default class TicketService {
  constructor() {
    this.ticketRepository = new Repositories.TicketRepository();
  }

  async createTicket(data) {
    try {
      const ticket = await this.ticketRepository.create(data);
      return ticket;
    } catch (error) {
      throw new AppError(
        "Unable to create ticket",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getTicketById(id) {
    try {
      const ticket = await this.ticketRepository.getById(id);
      if (!ticket) {
        throw new AppError("Ticket not found", StatusCodes.NOT_FOUND);
      }
      return ticket;
    } catch (error) {
      throw new AppError(
        "Unable to retrieve ticket",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateTicket(id, data) {
    try {
      const ticket = await this.ticketRepository.update(id, data);
      if (!ticket) {
        throw new AppError("Ticket not found", StatusCodes.NOT_FOUND);
      }
      return ticket;
    } catch (error) {
      throw new AppError(
        "Unable to update ticket",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteTicket(id) {
    try {
      const ticket = await this.ticketRepository.delete(id);
      if (!ticket) {
        throw new AppError("Ticket not found", StatusCodes.NOT_FOUND);
      }
      return ticket;
    } catch (error) {
      throw new AppError(
        "Unable to delete ticket",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}
