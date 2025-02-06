
import { useState } from "react";
import { ArrowLeft, Send, Image, Video } from "lucide-react";

interface ChatWindowProps {
  chatId: string;
  onClose: () => void;
}

const ChatWindow = ({ chatId, onClose }: ChatWindowProps) => {
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="glass-effect p-4 flex items-center gap-4">
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="font-semibold">Dr. Sarah</h2>
          <p className="text-sm text-gray-500">Family Care</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat messages will go here */}
      </div>

      <div className="p-4 glass-effect border-t border-gray-100">
        <div className="flex gap-2">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Image size={24} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Video size={24} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="p-2 text-[#4A90E2] hover:text-[#4A90E2]/80">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
