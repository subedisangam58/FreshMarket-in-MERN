import { MailtrapClient } from "mailtrap";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender, recipients } from "./mailtrap.config.js";
export const sendVerificationEmail = async(email, verificationToken) =>{
    const recipient = [{email}]

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);
    } catch(error){
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async(email,name) =>{
    const recipient = [{email}];

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "1506ec94-3f30-498e-ad93-97df6854cb24",
            template_variables: {
                "company_info_name": "FreshMarket",
                "name": name,
              },
        });
    } catch(error){
        throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendPasswordResetEmail = async(email, resetURL) =>{
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
    } catch (error) {
        console.log(error);
        throw new Error(`Error sending password reset: ${error}`);
    }
}

export const sendResetSuccessEmail = async(email, resetURL) =>{
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
    } catch (error) {
        console.log(error);
        throw new Error(`Error sending password reset: ${error}`);
    }
}