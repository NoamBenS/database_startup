//DEFINE GET, POST

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const users = await prisma.user.findMany({
    })
    if (users && users.length) {
        return NextResponse.json(users)
    }
    return NextResponse.json({ message: 'No users found' }, { status: 400})
}

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url)

    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const phone = searchParams.get('phone') || ''

    if (!name || !email) {
        return NextResponse.json({ message: 'Name and email are required' }, { status: 400})
    }

    const emailExists = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (emailExists) {
        return NextResponse.json({ message: 'Email already exists' }, { status: 400})
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            phone
        }
    })

    return NextResponse.json(user)
}