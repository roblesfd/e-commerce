import nodemailer from "nodemailer";

interface EmailDatos {
  nombre: string;
  email: string;
  token: string;
}

const emailConfirmacion = async (datos: EmailDatos): Promise<void> => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { nombre, email, token } = datos;

  await transport.sendMail({
    from: "Helpdesk",
    to: email,
    subject: "Confirma tu cuenta de Helpdesk.com",
    text: "Confirma tu cuenta en Helpdesk.com",
    html: `
      <p>Hola ${nombre}, confirma tu cuenta en helpdesk.com</p>
      <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
      <a href="${process.env.FRONTEND_URL_DEV}/confirmar/${token}">Confirmar cuenta</a>
      <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

const emailOlvidePassword = async (datos: EmailDatos): Promise<void> => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;

  await transport.sendMail({
    from: "Helpdesk",
    to: email,
    subject: "Reestablece tu contraseña de Helpdesk.com",
    text: "Reestablece tu contraseña en Helpdesk.com",
    html: `
      <p>Hola ${nombre}, has solicitado reestablecer tu contraseña en helpdesk.com</p>
      <p>Haz clic en el siguiente enlace para generar una contraseña nueva:
      <a href="${process.env.FRONTEND_URL_PROD}/auth/olvide-password/${token}">Reestablecer contraseña</a>
      </p>
      <p>Si no solicitaste el cambio de contraseña puedes ignorar este correo.</p>
    `,
  });
};

export { emailConfirmacion, emailOlvidePassword };
