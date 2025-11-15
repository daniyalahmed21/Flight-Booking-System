import Express from "express";

import ticketRouter from "./ticketRoutes.js";

const v1Router = Express.Router();

v1Router.use("/tickets", ticketRouter);

export default v1Router;
