// GET, PUT, DELETE

import { PrismaClient, User } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';


const prisma = new PrismaClient();

interface query {
    userId: string
}

export async function GET(request: NextRequest, { params }: { params: query }) {
    const foundUser = await prisma.user.findUnique({
        where: {
            id: parseInt(params.userId)
        }
    }) as User

    if (foundUser) {
        return NextResponse.json(foundUser)
    }

    return NextResponse.json({ message: 'User not found' }, { status: 400})
}

export async function PUT(request: Request, { params }: { params: query }) {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string || ''

    if (!name) {
        return NextResponse.json({ message: 'Name is required' }, { status: 400})
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(params.userId)
        },
        data: {
            name,
            phone
        }
    })

    if (updatedUser) {
        return NextResponse.json(updatedUser)
    }

    return NextResponse.json({ message: 'User not found' }, { status: 400})
}