import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import * as React from 'react';

interface ContactReplyEmailProps {
  firstName: string;
}

export default function ContactReplyEmail({ firstName }: ContactReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Gracias por contactarnos 🌸</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Gracias por escribirnos 💜</Heading>

          <Section style={contentSection}>
            <Text style={paragraph}>Hola {firstName},</Text>
            <Text style={paragraph}>
              Tu mensaje ha llegado a nuestro espacio y ya forma parte de la energía que compartimos
              en <strong>Essence Burn</strong>. Nos tomamos el tiempo para leer cada palabra con
              atención y cariño, porque creemos en la conexión auténtica y en el valor de cada
              historia.
            </Text>

            <Text style={paragraph}>
              ✨ <strong>¿Qué sigue?</strong>
              <br />
              En breve, nuestro equipo se pondrá en contacto con vos para responder tu consulta,
              compartir ideas o simplemente continuar esta conversación que acabás de iniciar.
            </Text>

            <Text style={paragraph}>
              Mientras tanto, te invitamos a seguir explorando nuestros rituales, leer el blog o
              descubrir el tuyo propio:
            </Text>

            <Section style={buttonRow}>
              <Button
                href="https://essenceburn.com/rituales"
                style={{ ...button, backgroundColor: '#e3b2a1' }}
              >
                DESCUBRÍ TU RITUAL
              </Button>
            </Section>

            <Section style={buttonRow}>
              <Button
                href="https://essenceburn.com/blog"
                style={{ ...button, backgroundColor: '#b68187' }}
              >
                LEÉ NUESTRO BLOG
              </Button>
            </Section>

            <Text style={paragraph}>
              Gracias por ser parte de este viaje.
              <br />
              Tu esencia importa. Tu voz también.
            </Text>

            <Text style={signature}>
              Con amor,
              <br />
              <strong>Maria Jose & el equipo Essence Burn</strong>
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
  borderRadius: '14px',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '40px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const heading = {
  color: '#b68187',
  textAlign: 'center' as const,
  fontWeight: 400,
  fontSize: '28px',
  marginBottom: '30px',
};

const contentSection = {
  textAlign: 'left' as const,
};

const paragraph = {
  lineHeight: '1.8',
  fontSize: '16px',
  margin: '16px 0',
};

const buttonRow = {
  textAlign: 'center' as const,
  marginTop: '20px',
};

const button = {
  color: 'white',
  padding: '14px 32px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: 500,
  letterSpacing: '0.5px',
};

const signature = {
  marginTop: '30px',
  textAlign: 'center' as const,
  fontSize: '15px',
  color: '#a27d79',
};
