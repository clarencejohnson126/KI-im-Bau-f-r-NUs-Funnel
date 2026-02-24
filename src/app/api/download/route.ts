import { NextRequest, NextResponse } from "next/server";
import {
  sendProductDeliveryEmail,
  addContactToAudience,
  sendNewLeadNotification,
} from "@/lib/resend";

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

    // Run all three tasks in parallel – none should block the others
    const results = await Promise.allSettled([
      // 1. Send download links to the user
      sendProductDeliveryEmail({ to: email, downloadUrl, flipbookUrl }),
      // 2. Save email to Resend Audience
      addContactToAudience(email),
      // 3. Notify owner about new lead
      sendNewLeadNotification(email),
    ]);

    // Log any failures (but don't block the user)
    results.forEach((result, index) => {
      const labels = ["delivery email", "audience contact", "lead notification"];
      if (result.status === "rejected") {
        console.error(`Failed: ${labels[index]}:`, result.reason);
      }
    });

    console.log("Download processed for:", email);

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
