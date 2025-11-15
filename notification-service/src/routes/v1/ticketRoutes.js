import Express from "express";
import { TicketController } from "../../controllers/index.js";
const ticketRouter = Express.Router();

ticketRouter.post("/", TicketController.createTicket);

export default ticketRouter;
