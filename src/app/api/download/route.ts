import { NextRequest, NextResponse } from "next/server";
import { sendProductDeliveryEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein.", success: false },
        { status: 400 }
      );
    }

    // Google Drive download links
    const downloadUrl =
      "https://drive.google.com/file/d/1ZTQJhqwzIkv35OKY52c4PxloQ41dluD4/view?usp=drive_link";
    const flipbookUrl =
      "https://drive.google.com/file/d/1Uag-CD5k-SFLFBfFmgLfHj-F_sjJ3BYO/view?usp=sharing";

    // Send product delivery email
    try {
      await sendProductDeliveryEmail({
        to: email,
        downloadUrl,
        flipbookUrl,
      });
      console.log("Download email sent to:", email);
    } catch (emailError) {
      console.error("Failed to send download email:", emailError);
      // Still allow download even if email fails
    }

    // Set access cookie so /danke page is accessible
    const response = NextResponse.json({ success: true });
    response.cookies.set("download_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 30, // 30 minutes
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen.", success: false },
      { status: 500 }
    );
  }
}
