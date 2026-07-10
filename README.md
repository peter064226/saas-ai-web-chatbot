## command 
postgres: docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:16
shadcn: npx shadcn@latest add separator
prisma: npx prisma db push
    npx prisma studio

## third party
clerk: https://dashboard.clerk.com/
prisma: https://www.prisma.io/docs/guides/frameworks/nextjs
openai: https://platform.openai.com/home
neon
pusher: https://dashboard.pusher.com/apps/2177525/getting_started
stripe: https://dashboard.stripe.com/
uploadcare

## Challenges

1. when click login submit , result.status === "needs_second_factor"
https://stackoverflow.com/questions/79885531/expo-and-clerk-needs-second-factor
I'm sure second factor for sign in is disabled, but when I try to sign in (something usual when I change device or environment) I get needs_second_factor.

The code you posted needs to handle second factors in order to support the client trust feature, which is critical for preventing credential stuffing attacks. You could turn off this feature in your Clerk dashboard (not recommended as it's a security risk), or update your auth code to support second factor.

Docs with a full code example on second factor handling are right here!

2.  A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:
               <html  lang="en" className="geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__varia..."
                   style={{color-scheme:"light"}}  
                  >  
            ...  
    This is a classic next-themes hydration mismatch. The server renders the <html> tag without knowing the user's theme preference, but next-themes adds style={{color-scheme:"light"}} on the client, causing a mismatch.

    The fix is to add suppressHydrationWarning to the <html> tag:
    https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    Note! If you do not add suppressHydrationWarning to your <html> you will get warnings because next-themes updates that element. This property only applies one level deep, so it won't block hydration warnings on other elements.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
