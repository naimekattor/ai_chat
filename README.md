# 🧠 AI Chat Platform (React + Redux + RTK Query)

This project is a **role-based AI chat interface** built with **React.js**, **Tailwind CSS**, **Redux Toolkit**, and **RTK Query**. Users can create AI chat threads (e.g., "Chartwright"), send messages, and receive contextual replies.

---

## 🧰 Technologies Used

- React.js (Vite or CRA)
- Tailwind CSS
- Redux Toolkit
- RTK Query
- React Router
- Axios (for auth if needed)

---

## ✨ Key Features

- 🔐 JWT Login (email/password)
- 🧠 Chat with AI agents (`Chartwright`, `TranscriptX`, etc.)
- 📩 Message submission & reply handling
- 📥 Chat history (loaded from backend)
- 🌙 Dark mode-ready Tailwind styling
- 🧪 API error handling with status feedback

---

## ⚙️ Setup Instructions

### 1. 📦 Clone the Project

```bash
git clone https://github.com/naimekattor/ai_chat.git
cd ai_chat
```

## 2. 📥 Install Dependencies

```bash
npm install
```

## 3.🚀 Start Development Server

```bash
npm run dev
```

The app should open at http://localhost:5173 or similar.

## 🔗 API Integration

🔐 Login: /authentication_app/signin/

📩 Create Chat: /chat/create_chat/

💬 Send Message: /chat/add_message_to_chat/

📚 Get Chat List: /chat/get_users_chat_list/

Make sure you pass Authorization: Bearer <token> in all authenticated routes via RTK Query.

📞 Contact
Naim Hossen
📧 naimekattor@gmail.com
