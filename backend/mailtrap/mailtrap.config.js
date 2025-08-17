import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";

dotenv.config();
const TOKEN = process.env.MAILTRAP_API_TOKEN;
console.log(`Mailtrap configuration loaded ${TOKEN}`);

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "subedshahxi@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);