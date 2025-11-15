import nodemailer from 'nodemailer';
import { SERVER_CONFIG } from "./serverConfig.js";


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SERVER_CONFIG.GMAIL_USER,
    pass: SERVER_CONFIG.GMAIL_APP_PASSWORD
  }
});


export default transporter;