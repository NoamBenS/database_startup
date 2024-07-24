import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { getAuth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { userId } = getAuth(request);

    console.log("clerkUserID: ", userId);

    const posts = await prisma.post.findMany({
    })

    if (posts && posts.length) {
        return NextResponse.json(posts)
    }
    
    return NextResponse.json({ message: 'No posts found' }, { status: 400})
}

export async function POST(request: Request) {
    const formData = await request.formData()

    const title =  formData.get('title') as string
    const content = formData.get('content') as string

    if (!title || !content) {
        return NextResponse.json({ message: 'Title and content are required' }, { status: 400})
    }

    if (await prisma.post.findUnique({ where: { title } })) {
        return NextResponse.json({ message: 'Post already exists' }, { status: 400})
    }

    const post = await prisma.post.create({
        data: {
            title,
            content
        }
    })

    return NextResponse.json(post)
}

export async function DELETE(request: Request) {
    const formData = await request.formData()

    const title = formData.get('title') as string

    const deletedPost = await prisma.post.delete({
        where: {
            title
        }
    })

    if (deletedPost) {
        return NextResponse.json(deletedPost)
    }

    return NextResponse.json({ message: 'Post not found' }, { status: 400})
}