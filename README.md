This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Usage

This page uses a custom Clerk account to store logins. Feel free to substitute the authentification keys for your own and attach it to a personal application.
> Keys are put into the .env (or .env.local) file. To get keys, generate them for your project on the [Clerk](https://clerk.com/) website.

Create posts using the user page. This part is stored into a custom database which is stored as a db sqllite file and is managed through prisma.
> If using a file to store data, place it in the /prisma directory. Otherwise, make sure the url matches up. Regardless, make sure the format is consistent with the provider listed in the schema.prisma file.

For Files:

`DATABASE_URL="file:[your_file_directory]"`

For URLS:

`DATABASE_URL="your_database_url"`
