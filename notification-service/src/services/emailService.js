import transporter from "../config/emailConfig.js";
import Repositories from "../repositories/index.js";

export default class EmailService {
  constructor() {
    this.ticketRepository = new Repositories.TicketRepository();
  }
  async getPendingEmails() {
    await this.ticketRepository.getPendingTickets();
  }

  async sendEmail(mailFrom, mailTo, subject, text) {
    const mailOptions = {
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    };

    try {
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
}
