# Next Admin Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

run next commands:

1. `npm install` to install all dependencies.
2. `npm run dev` to run project in local server.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Connect [`MongoDB`](https://www.mongodb.com/) to store users and products and to access the dashboard.

Inside `.env` file create the following variables:

1. `MONGODB` here you have to paste the mongo database connection string.
2. `AUTH_SECRET` you can generate it running the following command in your terminal `openssl rand -base64 32`
3. `AUTH_URL` can be "<http://localhost:3000/api/auth>" (Use it only in development)

This project uses [`Next.js`](https://nextjs.org/) as development Framework, css module, [`Recharts`](https://recharts.org/en-US/) to visualize charts, [`MongoDB`](https://www.mongodb.com/) as database, and [`Authjs`](https://authjs.dev/reference/nextjs) to authentication.

**_This project can serve as a template for you. You are free to add or change the code._**
