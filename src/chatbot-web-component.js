// src/chatbot-web-component.js
import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "./components/ChatBot";

class ChatBotElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<ChatBot />, this);
  }
}

customElements.define("chat-bot", ChatBotElement);
