import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import * as React from 'react';

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  subscribe?: boolean;
  submittedAt?: string;
}

export default function ContactNotificationEmail({
  name,
  email,
  phone,
  subject,
  message,
  subscribe = false,
  submittedAt,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje desde el formulario de contacto 🌿</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>📩 Nuevo mensaje de contacto</Heading>

          <Text style={paragraph}>
            Un nuevo mensaje ha sido recibido a través del formulario de contacto en
            <strong> essenceburn.com</strong>.
          </Text>

          <Section style={infoSection}>
            <Text style={infoText}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={infoText}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={infoText}>
                <strong>Teléfono:</strong> {phone}
              </Text>
            )}
            <Text style={infoText}>
              <strong>Asunto:</strong> {subject}
            </Text>
            {submittedAt && (
              <Text style={infoText}>
                <strong>Fecha:</strong> {new Date(submittedAt).toLocaleString('es-CR')}
              </Text>
            )}
          </Section>

          <Section style={messageSection}>
            <Heading as="h3" style={messageHeading}>
              Mensaje:
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          {subscribe && (
            <Section style={subscribeSection}>
              <Text style={subscribeText}>
                ✅ El usuario solicitó suscribirse al <strong>newsletter</strong>.
              </Text>
            </Section>
          )}

          <Section style={footer}>
            <Text style={footerText}>
              Este mensaje fue enviado automáticamente desde el formulario de contacto de
              <strong> essenceburn.com</strong>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f7eeed',
  fontFamily: 'sans-serif',
  color: '#6b5b5e',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '36px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const heading = {
  color: '#b68187',
  textAlign: 'center' as const,
  fontWeight: 500,
  fontSize: '24px',
  marginBottom: '24px',
};

const paragraph = {
  lineHeight: '1.6',
  fontSize: '15px',
  marginBottom: '20px',
};

const infoSection = {
  backgroundColor: '#f7eeed',
  padding: '16px 20px',
  borderRadius: '10px',
  marginBottom: '24px',
};

const infoText = {
  margin: '6px 0',
  fontSize: '14px',
  lineHeight: '1.5',
};

const messageSection = {
  backgroundColor: '#ffffff',
  border: '1px solid #e0bdb8',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '20px',
};

const messageHeading = {
  color: '#b68187',
  fontWeight: 500,
  fontSize: '18px',
  marginBottom: '12px',
};

const messageText = {
  color: '#6b5b5e',
  lineHeight: '1.6',
  fontSize: '15px',
  whiteSpace: 'pre-line' as const, // conserva saltos de línea del usuario
};

const subscribeSection = {
  margin: '20px 0',
  backgroundColor: '#fdf4f3',
  borderLeft: '4px solid #e3b2a1',
  borderRadius: '6px',
  padding: '10px 14px',
};

const subscribeText = {
  color: '#b68187',
  fontSize: '14px',
  fontStyle: 'italic',
};

const footer = {
  borderTop: '1px solid #eee',
  marginTop: '30px',
  paddingTop: '10px',
};

const footerText = {
  color: '#999',
  fontSize: '12px',
  textAlign: 'center' as const,
};
