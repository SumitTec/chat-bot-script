// src/chatbot-web-component.js
import React from "react";
import { createRoot } from "react-dom/client";
import ChatBot from "./components/ChatBot";

class ChatBotElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<ChatBot />);
  }
}

customElements.define("chat-bot", ChatBotElement);
