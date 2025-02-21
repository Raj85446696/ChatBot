Chatbot using Gemini API with React and Hooks

Overview

This project is a simple chatbot built using React and the Gemini API. It utilizes React Hooks for state management and handles API interactions efficiently. The chatbot provides intelligent responses based on user queries.

Features

Real-time chatbot responses using Gemini API

React functional components with Hooks

User-friendly UI

Async API handling with error management

Technologies Used

React (useState, useEffect, useRef)

Gemini API

Fetch API/Axios

Tailwind CSS (optional, for styling)

Installation

1. Clone the Repository

git clone https://github.com/your-username/chatbot-gemini.git
cd chatbot-gemini

2. Install Dependencies

npm install

3. Set Up Environment Variables

Create a .env file in the root directory and add your Gemini API key:

REACT_APP_GEMINI_API_KEY=your_api_key_here

4. Start the Development Server

npm start

Usage

Type a message in the input field.

Press "Send" to get a response from the chatbot.

The chatbot will display intelligent responses based on the input.

Folder Structure

chatbot-gemini/
├── src/
│   ├── components/
│   │   ├── Chatbot.js
│   ├── App.js
│   ├── index.js
├── public/
├── .env
├── package.json
├── README.md

API Integration

The chatbot sends user queries to the Gemini API and displays responses using the following logic:

const fetchResponse = async (userInput) => {
  const response = await fetch("https://api.gemini.com/v1/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`
    },
    body: JSON.stringify({ message: userInput })
  });
  const data = await response.json();
  return data.reply;
};

Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

License

This project is licensed under the MIT License.

Author: Your Name
