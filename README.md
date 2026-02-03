# Frontend Mentor - Personal finance app solution

This is a solution to the [Personal finance app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/personal-finance-app-JfjtZgyMt1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all of the personal finance app data at-a-glance on the overview page
- View all transactions on the transactions page with pagination for every ten transactions IN PROGRESS
- Search, sort, and filter transactions DONE
- Create, read, update, delete (CRUD) budgets and saving pots
- View the latest three transactions for each budget category created
- View progress towards each pot
- Add money to and withdraw money from pots
- View recurring bills and the status of each for the current month
- Search and sort recurring bills
- Receive validation messages if required form fields aren't completed
- Navigate the whole app and perform all actions using only their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Save details to a database (build the project as a full-stack app) PRISMA
- **Bonus**: Create an account and log in (add user authentication to the full-stack app)

### Screenshot

![](./preview.jpg)

### Links

- Live Site URL: not ready yet

## My process

### Built with

- Next.js
- TypeScript
- TailwindCSS
- Prisma

### What I want to learn/develop

* Learn how to properly use Server Components vs Client Components and when each should be used
* Learn how to separate data fetching (Server Components) from UI logic (Client Components) in Next.js
* Improve working with strict typing to make UI logic safer and more predictable
* Gain more confience in typing component props, utility functions and complex state combinations
* Work with Prisma to fetch and shape data on the server site
* Built reusable UI components using TailwindCSS
* Learn how to balance Tailwind utility classes with readability and maintainability in larger components

### Continued development

### Useful resources

## Author

Agus

Notes:

Prisma workflow:

- pnpm prisma format
- pnpm prisma validate
- pnpm prisma migrate dev -n <change>
- pnpm prisma studio

Start app:

- pnpm dev
