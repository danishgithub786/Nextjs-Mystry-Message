import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Your verification code is here</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>Hello, {username} 👋</Text>
          <Text style={paragraph}>Here is your verification code:</Text>
          <Text>{otp}</Text>
          <Text style={paragraph}>
            This code is valid for 10 minutes. Do not share it with anyone.
          </Text>
          <Text style={footer}>Thank you for using our service 🙏</Text>
        </Container>
      </Body>
    </Html>
  );
}

//styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px auto',
  width: '100%',
  maxWidth: '480px',
};

const heading = {
  fontSize: '22px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  margin: '12px 0',
};

const otpBox = {
  fontSize: '32px',
  fontWeight: 'bold',
  backgroundColor: '#f0f0f0',
  padding: '15px',
  textAlign: 'center',
  borderRadius: '6px',
  margin: '20px 0',
  letterSpacing: '4px',
};

const footer = {
  fontSize: '14px',
  color: '#777',
  marginTop: '32px',
};