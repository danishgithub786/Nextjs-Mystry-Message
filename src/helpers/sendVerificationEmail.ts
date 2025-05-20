// helpers/sendVerificationEmail.ts
import { Resend } from 'resend';
import { ApiResponse } from '../types/ApiResponse';
import VerificationEmail from '../../emails/VerificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Mystry message | Verification code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: 'Verification email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send verification email' };
  }
}
