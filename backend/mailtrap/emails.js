// import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";
import {mailtrapClient, sender} from "./mailtrap.config.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject: "Email Verification",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: " Email verification",

        })
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send verification email: ${error}`);
    }
} 

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    console.log({name})
    try {
        const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        template_uuid: "e239efb9-1116-44f0-9bd8-3f995cd46f47",
    template_variables: {
      company_info_name: "Subed.Co",
      name: name,
    }
  })
  console.log("Welcome Email successfully",response)
    } catch (error) {
        console.error(`error sending welcome email`, error)
        throw new Error(`Error sending welcome email: ${error}`)
    }
}
