import ChatBot from "../components/ChatBot";

const HomePage: React.FC = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Welcome to My Embedded App</h1>
      <ChatBot />
    </main>
  );
};

export default HomePage;
