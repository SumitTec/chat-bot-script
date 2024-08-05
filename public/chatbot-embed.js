// public/chatbot-embed.js
(function () {
  const script = document.createElement("script");
  const local = window.location.hostname === "localhost";
  const scriptSrc = local
    ? "http://localhost:3000/static/js/bundle.js" // Local path
    : "https://chat-bot-script.vercel.app/static/js/main.js"; // Update with the correct Vercel path
  script.src = scriptSrc;
  script.onload = function () {
    // Optionally, define the custom element here if not done in the main.js
  };
  document.head.appendChild(script);
})();
