import { StatusCodes } from "http-status-codes";
import Services from "../services/index.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import { sendSuccess } from "../utils/responseHandler.js";

const ticketService = new Services.TicketService();

export const createTicket = asyncHandler(async (req, res) => {
  const { subject, content, recipientEmail } = req.body;
  const ticket = await ticketService.createTicket({ subject, content, recipientEmail });
  sendSuccess(res, ticket, "Ticket created successfully", StatusCodes.CREATED);
});

// export const getTicketById = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const ticket = await ticketService.getTicketById(id);
//     sendSuccess(res, ticket, "Ticket retrieved successfully", StatusCodes.OK);
// });

// export const updateTicket = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const { title, description, status } = req.body;
//     const ticket = await ticketService.updateTicket(id, { title, description, status });
//     sendSuccess(res, ticket, "Ticket updated successfully", StatusCodes.OK);
// });

// export const deleteTicket = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     await ticketService.deleteTicket(id);
//     sendSuccess(res, null, "Ticket deleted successfully", StatusCodes.NO_CONTENT);
// }); 
