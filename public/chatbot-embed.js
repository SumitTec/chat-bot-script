(function () {
  const script = document.createElement("script");
  // Use the correct Vercel path for the chatbot bundle
  const scriptSrc =
    "https://chat-bot-script.vercel.app/static/js/main.fea408ad.js";

  console.log("Loading script from:", scriptSrc); // Debugging line

  script.src = scriptSrc;

  script.onload = function () {
    console.log("Chatbot script loaded successfully.");
  };

  script.onerror = function (error) {
    console.error("Failed to load the chatbot script:", error);
  };

  document.head.appendChild(script);
})();
