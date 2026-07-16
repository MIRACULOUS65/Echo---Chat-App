# Echo Chat App

<div align="center">

## Simple Room-Based Chat App


[![Echo Demo Video](./Frontend/public/logo.png)](https://youtu.be/QyZqO8wyNBA)

▶️ **[Watch Demo Video on Youtube](https://youtu.be/QyZqO8wyNBA)**


A lightweight real-time chat app built with a React + Vite frontend and a Node.js WebSocket backend.

<br/>

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
[![ws](https://img.shields.io/badge/ws-2.0-4A90E2?style=for-the-badge)](https://www.npmjs.com/package/ws)
[![MIT License](https://img.shields.io/badge/License-MIT-0A0A0A?style=for-the-badge)](./LICENSE)

</div>

---

## What It Does

- Opens a WebSocket connection from the frontend to the backend.
- Joins users into a fixed room (`red`) on connect.
- Broadcasts chat messages to everyone in the same room.
- Renders incoming messages in a simple chat UI.

---

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, TypeScript, `ws`

---

## Project Structure

```
Echo---Chat-App/
├── Backend/
│   ├── src/index.ts
│   ├── package.json
│   └── tsconfig.json
├── Frontend/
│   ├── src/App.tsx
│   ├── src/main.tsx
│   ├── src/App.css
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

---

## Run Locally

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

> Start the backend first so the frontend can connect to the WebSocket server on port `8080`.

---

## Notes

- The chat flow is intentionally simple and room-based.
- The frontend currently keeps the UI minimal and focuses on message exchange.
- This project is a small learning/demo app rather than a deployed production product.
