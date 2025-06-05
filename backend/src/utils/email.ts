import nodemailer from "nodemailer";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL as string,
      pass: process.env.PASS as string,
    },
  });

  await transporter.sendMail({
    from: `'TraumaCare' <${process.env.EMAIL}>`,
    to,
    subject,
    html,
  });
};
