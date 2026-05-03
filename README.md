# SkillSphere - Online Learning Platform

This is my submission for Assignment 8. It's an online learning platform built with Next.js, featuring user authentication and dynamic routing.

## Live Demo
Live Link: https://assigment-8-t64x.onrender.com

> Important Note for the Examiner: 
> I used SQLite as the database for this project. Since free hosting platforms like Render or Vercel have a read-only file system, the SQLite database can't save new users or sessions on the live site. 
> Because of this, the login and register features work perfectly on my localhost, but they might not work on the live link. I kindly request you to clone the repo and test the authentication features on your local machine (localhost:3000). Thanks for understanding!

## Features I have added
* Authentication: Users can login, register, and logout (implemented using better-auth).
* Protected Routes: Course detail pages are locked. You must be logged in to view them.
* Dynamic Pages: Clicking on a course takes you to its specific details page.
* Animations: Added some page transitions using framer-motion.
* Responsive Design: Fully responsive UI built with Tailwind CSS and DaisyUI.

## Tech Stack
* Next.js
* Tailwind CSS & DaisyUI
* Better Auth
* Prisma & SQLite
* Framer Motion

## How to run this locally

If you want to test the project on your machine, just follow these simple steps:

1. Clone the repo:
   ```bash
   git clone [https://github.com/Rashad123456/assigment-8-.git](https://github.com/Rashad123456/assigment-8-.git)
   
