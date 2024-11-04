// src/app/api/subscribe/route.ts
// este componente soporta la conección del formulario emergente con la bd
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Evitar crear múltiples instancias de Prisma en desarrollo
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Almacenar la instancia de Prisma en `global` para evitar conexiones múltiples en desarrollo
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function POST(request: Request) {
  const { email } = await request.json();

  // Validar que el email no esté vacío y que tenga un formato válido
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email no válido.' }, { status: 400 });
  }

  try {
    // Verificar si el correo ya está registrado
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ error: 'El email ya está suscrito.' }, { status: 400 });
    }

    // Almacenar el correo en la base de datos
    const newSubscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    return NextResponse.json({
      message: '¡Te has suscrito exitosamente!',
      subscriber: newSubscriber,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error en el servidor. Intenta de nuevo más tarde.' }, { status: 500 });
  }
}
