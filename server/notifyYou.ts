import nodemailer from "nodemailer";

const notifyYou = async (msg: { name?: string; message?: string }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NOTIFY_EMAIL,
            pass: process.env.NOTIFY_PASS,
        }
    });

    await transporter.sendMail({
        from: `"Portfolio Bot" <${process.env.NOTIFY_EMAIL}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: "📩 New Message Received!",
        text: `Message: ${msg.message || "No content"}\nFrom: ${msg.name || "Anonymous"}`
    });
}
export default notifyYou;