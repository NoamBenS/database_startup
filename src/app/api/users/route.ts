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
    const body = await request.json()
    const name = body.name
    const email = body.email
    const phone = body.phone || ''

    if (!name) {
        return NextResponse.json({ message: 'Name is required' }, { status: 400})
    }

    if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400})
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