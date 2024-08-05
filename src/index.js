// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./chatbot-web-component";
import Modal from "react-modal";
import ChatBot from "./components/ChatBot";

// Check for query parameter to decide what to render
const urlParams = new URLSearchParams(window.location.search);
const isChatBot = urlParams.has("chatbot");

if (isChatBot) {
  // We are loading the chatbot
  customElements.define(
    "chat-bot",
    class extends HTMLElement {
      connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<ChatBot />);
      }
    }
  );
} else {
  // We are loading the main app
  Modal.setAppElement("#root");
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}
