import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { title: string } }) {
    const slug = params.title

    const post = await prisma.post.findFirst({
        where: {
            title: slug
        }
    })

    if (post) {
        return NextResponse.json(post)
    }

    return NextResponse.json({ message: 'No posts found' }, { status: 400})
}