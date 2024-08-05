// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./chatbot-web-component";
import ChatBot from "./components/ChatBot";

const urlParams = new URLSearchParams(window.location.search);

// Check if 'chat-bot' is already defined
if (!customElements.get("chat-bot")) {
  customElements.define(
    "chat-bot",
    class extends HTMLElement {
      connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<ChatBot />);
      }
    }
  );
}

if (urlParams.has("chatbot")) {
  // Here you can add any additional initialization if needed
} else {
  // Load the main App if not in chatbot mode
  import("./App").then(({ default: App }) => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(<App />);
    }
  });
}
