import { PrismaClient, Post } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface query {
    title: string
}

export async function GET(request: Request, { params }: { params: query }) {

    const post = await prisma.post.findUnique({
        where: {
            title: params.title.replace(/-/g, ' ')
        }
    }) as Post

    if (post) {
        return NextResponse.json(post)
    }

    return NextResponse.json({ message: 'No posts found' }, { status: 400})
}