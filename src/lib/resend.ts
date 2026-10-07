import { Resend } from "resend";

// Initialize Resend lazily to avoid build-time errors
let resendInstance: Resend | null = null;

export function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

export const FROM_EMAIL = "KI im Bau <noreply@thinkbig.rebelz-ai.com>";

interface SendProductEmailParams {
  to: string;
  customerName?: string;
  downloadUrl: string;
  flipbookUrl: string;
  includeBump?: boolean;
  includeUpsell?: boolean;
}

export async function sendProductDeliveryEmail({
  to,
  customerName,
  downloadUrl,
  flipbookUrl,
  includeBump = false,
  includeUpsell = false,
}: SendProductEmailParams) {
  const greeting = customerName ? `Hallo ${customerName}` : "Hallo";

  const productList = [
    "E-Book: KI im Bau für Nachunternehmer (300+ Seiten)",
    "Präsentation: KI-im-Bau für Nachunternehmer",
  ];

  if (includeBump) {
    productList.push("Premium Vorlagen-Paket");
  }

  if (includeUpsell) {
    productList.push("KI-Kickstart Video-Training");
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dein Download ist bereit</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Vielen Dank für deinen Kauf!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                ${greeting},
              </p>

              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                dein Kauf war erfolgreich! Hier ist dein Download-Link für das <strong>KI im Bau Starter Kit</strong>:
              </p>

              <!-- Download Buttons -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 20px 0 10px;">
                    <a href="${downloadUrl}" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px; box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);">
                      Starter Kit herunterladen (PDF, Prompts, Checklisten)
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 10px 0 20px;">
                    <a href="${flipbookUrl}" style="display: inline-block; padding: 16px 32px; background: #ffffff; color: #f97316; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px; border: 2px solid #f97316;">
                      Interaktives Flipbook herunterladen (HTML5)
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Product List -->
              <div style="margin: 30px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #f97316;">
                <p style="margin: 0 0 12px; color: #374151; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Dein Paket enthält:
                </p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: #4b5563;">
                  ${productList.map((item) => `<li style="margin: 8px 0; font-size: 15px;">${item}</li>`).join("")}
                </ul>
              </div>

              <p style="margin: 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Der Download-Link ist dauerhaft gültig. Speichere ihn am besten in deinen Lesezeichen.
              </p>

              <!-- Support -->
              <div style="margin: 30px 0; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>Fragen?</strong> Antworte einfach auf diese E-Mail oder schreibe an
                  <a href="mailto:thinkbig@rebelz-ai.com" style="color: #f97316;">thinkbig@rebelz-ai.com</a>
                </p>
              </div>

              <p style="margin: 20px 0 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Viel Erfolg mit KI im Bau!<br><br>
                <strong>Clarence Johnson</strong><br>
                <span style="color: #6b7280; font-size: 14px;">Gründer, Rebelz AI</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Rebelz AI. Alle Rechte vorbehalten.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
${greeting},

Vielen Dank für deinen Kauf!

Deine Download-Links für das KI im Bau Starter Kit:

Starter Kit (PDF, Prompts, Checklisten):
${downloadUrl}

Interaktives Flipbook (HTML5):
${flipbookUrl}

Dein Paket enthält:
${productList.map((item) => `- ${item}`).join("\n")}

Der Download-Link ist dauerhaft gültig.

Fragen? Schreibe an thinkbig@rebelz-ai.com

Viel Erfolg mit KI im Bau!

Clarence Johnson
Gründer, Rebelz AI
  `;

  const { data, error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Dein KI im Bau Starter Kit ist bereit zum Download",
    html: htmlContent,
    text: textContent,
  });

  if (error) {
    console.error("Failed to send email:", error);
    throw error;
  }

  return data;
}
