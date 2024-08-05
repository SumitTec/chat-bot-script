(function () {
  const script = document.createElement("script");
  const local = window.location.hostname === "localhost";
  // Ensure these paths are correct
  const scriptSrc = local
    ? "http://localhost:3000/static/js/bundle.js" // Local development path
    : "https://chat-bot-script.vercel.app/static/js/main.js"; // Path for Vercel deployment

  script.src = scriptSrc;
  script.onload = function () {
    // Optionally, define the custom element here if not done in main.js
  };
  script.onerror = function () {
    console.error("Failed to load the chatbot script.");
  };
  document.head.appendChild(script);
})();
