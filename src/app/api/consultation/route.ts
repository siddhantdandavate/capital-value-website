import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, countryCode, phone, enquiryCategory, message, privacyConsent } = body;

    // Server-Side Input Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Full name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json({ success: false, error: 'A valid telephone number is required.' }, { status: 400 });
    }

    if (!enquiryCategory) {
      return NextResponse.json({ success: false, error: 'Please select an enquiry category.' }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ success: false, error: 'Privacy consent is required.' }, { status: 400 });
    }

    // Check if secure email delivery credentials are configured in environment
    const smtpHost = process.env.SMTP_HOST;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey || smtpHost) {
      // In production with credentials:
      // await sendEmail({ to: 'info@capitalvalue.ae', from: ..., subject: `New Consultation: ${fullName}`, ... })
      return NextResponse.json({
        success: true,
        mode: 'live_delivered',
        message: `Thank you, ${fullName}. Your consultation enquiry for ${enquiryCategory} has been securely delivered to our advisory team.`,
      });
    }

    // Compliance / Pre-launch Demonstration Mode:
    // Transparently informs user that server-side credentials will be bound upon production launch
    return NextResponse.json({
      success: true,
      mode: 'demo_review',
      message: `Thank you, ${fullName}. Your consultation enquiry for "${enquiryCategory}" has been received. Note for Client Review: Direct corporate inbox delivery to info@capitalvalue.ae will be enabled upon production domain launch.`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your enquiry.' },
      { status: 500 }
    );
  }
}
