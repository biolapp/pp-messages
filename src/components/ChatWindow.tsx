
import { useState } from "react";
import { ArrowLeft, Send, Image, Video } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "doctor";
  timestamp: string;
}

interface ChatWindowProps {
  chatId: string;
  onClose: () => void;
}

const ChatWindow = ({ chatId, onClose }: ChatWindowProps) => {
  const [message, setMessage] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: "1",
      content: "Your lab results are ready to view",
      sender: "doctor",
      timestamp: "09:30 AM",
    },
    {
      id: "2",
      content: "Thank you, I'll check them right away",
      sender: "user",
      timestamp: "09:35 AM",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Add message handling logic here
    setMessage("");
  };

  const handleAttachment = (type: "image" | "video") => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = type === "image" ? "image/*" : "video/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Handle file upload logic here
        console.log(`Uploading ${type}:`, file.name);
      }
    };
    input.click();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col animate-fade-in">
      <div className="glass-effect p-4 flex items-center gap-4">
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="font-semibold">Dr. Sarah</h2>
          <p className="text-sm text-gray-500">Family Care</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-[#4A90E2] text-white rounded-tr-none"
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              }`}
            >
              <p>{msg.content}</p>
              <span
                className={`text-xs mt-1 block ${
                  msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 glass-effect border-t border-gray-100">
        <div className="flex gap-2">
          <button 
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={() => handleAttachment("image")}
          >
            <Image size={24} />
          </button>
          <button 
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={() => handleAttachment("video")}
          >
            <Video size={24} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button 
            className="p-2 text-[#4A90E2] hover:text-[#4A90E2]/80"
            onClick={handleSendMessage}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
