require("dotenv").config(); // Cargar las variables de entorno

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const EMAIL_USER = "romyvs01@gmail.com";
const EMAIL_PASS = "musa lfwq bynj cpjp";

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, phone, email, requestType, language } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: EMAIL_USER, // Usar variable de entorno
      pass: EMAIL_PASS, // Usar variable de entorno
    },
  });

  const COMPANY_EMAIL = email;
  const CEO_EMAIL = email;

  // Correo de confirmación al usuario
  const userMailOptions = {
    from: EMAIL_USER, // Usar variable de entorno
    to: email,
    subject:
      language === "en" ? "Request Confirmation" : "Confirmación de solicitud",
    html: `
      <html lang="${language}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sura:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Sura', serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .email-container { max-width: 500px; margin: 20px auto; background-color: #ffffff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px 0; text-align: center; border: 1px solid #dddddd; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); }
          .logo { width: 200px; margin: 10px auto 30px; }
          .message { font-size: 18px; color: #333333; }
          .saludo { font-size: 18px; color: #333333; margin-bottom: 30px; }
          .advice { font-size: 15px; color: #747373; margin-bottom: 40px; max-width: 300px; margin: 0 auto; }
          .divider { margin: 30px 0; margin-top: 5em; border-top: 1px solid #dddddd; }
          .watermark { font-size: 12px; color: #888888; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <img src="cid:companyLogo" alt="Company Logo" class="logo">
          <p class="saludo">${
            language === "en" ? "Hey" : "Hola"
          } <u><em>${firstName}</em></u>,</p>
          <p class="message">${
            language === "en" ? "Your request for" : "Tu solicitud de"
          } <em><u>${requestType}</u></em> ${
      language === "en"
        ? "was received successfully."
        : "fue recibida correctamente."
    }</p>
          <p class="advice">${
            language === "en"
              ? "Our team will contact you as soon as possible."
              : "Nuestro equipo se pondrá en contacto lo más pronto posible."
          }</p>
          <div class="divider"></div>
          <p class="watermark">&copy; 2024 Global Communications Link</p>
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: "GCL-logo-wname.png",
        path: "../src/images/GCL-logo-wname.png", // Ruta al logo local
        cid: "companyLogo", // Debe coincidir con el cid en el HTML
      },
    ],
  };

  // Correo a la empresa y al personal del CEO
  const companyMailOptions = {
    from: EMAIL_USER, // Usar variable de entorno
    to: `${COMPANY_EMAIL}, ${CEO_EMAIL}`, // Usar variables de entorno
    subject: language === "en" ? "New Request" : "Nueva Solicitud",
    html: `
      <html lang="${language}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sura:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Sura', serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .email-container { max-width: 500px; margin: 20px auto; background-color: #ffffff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px 0; text-align: center; border: 1px solid #dddddd; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); }
          .logo { width: 200px; margin: 10px auto 30px; }
          .title { font-size: 25px; }
          .client-information-title { margin: 30px 30px; text-align: left; font-size: 25px; }
          .client-information {
            margin: 40px 40px;
            text-align: left;
            font-size: 20px;
        }
        span {
            font-style: italic;
            font-size: 20px;
            margin-left: 5px;
        }
          .divider { margin: 30px 0; margin-top: 4em; border-top: 1px solid #dddddd; }
          .watermark { font-size: 12px; color: #888888; text-align: center; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <img src="cid:companyLogo" alt="Company Logo" class="logo">
          <h4 class="title">${
            language === "en" ? "NEW REQUEST" : "NUEVA SOLICITUD"
          }</h4>
          <h4 class="client-information-title">${
            language === "en" ? "Client Information" : "Información del Cliente"
          }</h4>
          <div class="client-information">
            <p>${
              language === "en" ? "Name" : "Nombre"
            }: <span class="client-name"><em>${firstName} ${lastName}</em></span></p>
            <p>${
              language === "en" ? "Email" : "Correo"
            }: <span class="client-email"><em>${email}</em></span></p>
            <p>${
              language === "en" ? "Phone" : "Teléfono"
            }: <span class="client-phone"><em>${phone}</em></span></p>
            <p>${
              language === "en" ? "Request Type" : "Tipo de Solicitud"
            }: <span class="client-request-type"><em>${requestType}</em></span></p>
            <div class="divider"></div>
            <p class="watermark">&copy; 2024 Global Communications Link</p>
          </div>
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: "GCL-logo-wname.png",
        path: "../src/images/GCL-logo-wname.png", // Ruta al logo local
        cid: "companyLogo", // Debe coincidir con el cid en el HTML
      },
    ],
  };

  try {
    await transporter.sendMail(userMailOptions); // Enviar correo al usuario
    await transporter.sendMail(companyMailOptions); // Enviar correo a la empresa y al CEO
    res.status(200).send("Correos enviados exitosamente");
  } catch (error) {
    console.error("Error al enviar los correos:", error);
    res.status(500).send("Error al enviar los correos");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
