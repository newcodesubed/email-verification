// import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";
import {mailtrapClient, sender} from "./mailtrap.config.js"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

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

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
        console.log("Password reset email sent successfully:", response);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Failed to send password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) =>{
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Success",
        });
        console.log("Reset success email sent successfully:", response);
        
    } catch (error) {
        console.error("Error sending reset success email:", error);
        throw new Error(`Failed to send reset success email: ${error}`);
    }
}