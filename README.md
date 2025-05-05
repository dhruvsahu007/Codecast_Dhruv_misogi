# 🎥 CodeCast – Developer-Centric Video Sharing Platform

CodeCast is a fullstack, role-aware video sharing platform built specifically for developers. It allows creators to upload or embed coding-related videos such as walkthroughs, system design sessions, and live debugging tutorials, while enabling anonymous viewer interaction and insightful engagement analytics.

---

## 🚀 Live Demo

🔗 [[Visit the Deployed App](https://newv.onrender.com/creator/upload)]<!-- Replace # with your deployed link -->

---

## 🧠 Problem Statement

Platforms like YouTube aren't optimized for dev-centric content. Discoverability is poor, tagging lacks specificity, and meaningful analytics around code-focused engagement is absent.

**CodeCast** solves this by offering:

- 🧑‍💻 Developer-first UI/UX
- 📹 Streamlined content upload & metadata tagging
- 🧩 Anonymous, frictionless viewer interactions
- 📊 Role-based dashboards & performance analytics
- 🔍 Real-time, debounced search and multi-level filtering

---

## 👤 Roles & Core Features

### 🧑‍🎨 Creator
- Register / Login
- Upload or embed video (YouTube/Vimeo)
- Add title, description, tags, difficulty, category
- View detailed engagement metrics (mocked data):
  - Views, Likes/Dislikes
  - Avg Watch Duration
  - Comment Count
- See anonymized comments
- Edit/Delete their videos

### 👀 Viewer
- Register / Login
- Explore videos (infinite scroll)
- Filter by tag, category, difficulty
- Debounced search by title
- Watch videos with creator info and tags
- Like/Dislike, comment anonymously
- Watch Later playlist *(optional bonus)*
- Video history *(recently watched)*

### 🛠️ Admin
- Admin dashboard for moderation and management

---

## 🛠️ Tech Stack

| Layer       | Tech Used                                   |
|-------------|---------------------------------------------|
| **Frontend**| React + TypeScript, Tailwind CSS            |
| **Backend** | Node.js + Express (TypeScript)              |
| **Auth**    | Supabase                                    |
| **Database**| PostgreSQL                                  |
| **ORM**     | Drizzle ORM                                 |
| **Deployment**| [Render]                                  |

---

## 🗂️ Project Structure

