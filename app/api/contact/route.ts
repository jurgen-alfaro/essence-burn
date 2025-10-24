import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import ContactReplyEmail from '@/app/components/emails/ContactReplyEmail';
import ContactNotificationEmail from '@/app/components/emails/ContactNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, subscribe } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // 1. Enviar email al equipo
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'dev.jurgen.alfaro@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      react: ContactReplyEmail({ firstName: 'Jurgen' }),
    });

    if (error) {
      return NextResponse.json({ error: error }, { status: 400 });
    }

    // 2. Enviar email de confirmación al usuario
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Hemos recibido tu mensaje 💜',
      react: ContactNotificationEmail({ name, email, phone, subject, message, subscribe }),
    });

    // 3. Si se suscribió al newsletter, agregarlo
    // if (subscribe) {
    //   await fetch(`${process.env.NEXT_PUBLIC_URL}/api/newsletter`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, source: 'contact_form' }),
    //   });
    // }

    // 4. Guardar en base de datos (opcional)
    // await db.contactMessage.create({
    //   data: { name, email, phone, subject, message, createdAt: new Date() }
    // });

    // 5. Notificar en Slack/Discord (opcional)
    // if (process.env.SLACK_WEBHOOK_URL) {
    //   await fetch(process.env.SLACK_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       text: `🆕 Nuevo mensaje de contacto de ${name} (${email})\nAsunto: ${subject}`,
    //     }),
    //   });
    // }

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado exitosamente',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
