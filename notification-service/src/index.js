import Express from "express";
import { SERVER_CONFIG } from "./config/serverConfig.js";
import transporter from "./config/emailConfig.js";
import apiRouter from "./routes/index.js";
import Middlewares from "./middlewares/index.js";
// import "./models/associations.js";
import amqp from "amqplib";
import EmailService from "./services/emailService.js";

async function connectQueue() {
  try {
    const emailService = new EmailService();

    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("notifications");
    await channel.consume("notifications", (msg) => {
      console.log("Received message:", msg.content.toString());
      emailService.sendEmail(
        SERVER_CONFIG.GMAIL_USER,
        JSON.parse(msg.content).recipientEmail,
        JSON.parse(msg.content).subject,
        JSON.parse(msg.content).text
      );
      channel.ack(msg);
    });
    console.log("Connected to the queue service");
  } catch (error) {
    console.error("Error connecting to the queue service:", error);
  }
}
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(Middlewares.errorHandler);

app.listen(SERVER_CONFIG.PORT, async () => {
  console.log(`Server running on port ${SERVER_CONFIG.PORT}`);
  connectQueue();
});
