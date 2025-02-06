import React, { useState } from "react";
import { Search, Plus, Home, Calendar, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="max-w-2xl mx-auto h-screen bg-[#E8E5DF] flex flex-col">
      {/* Header */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#FBF9F8] border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavButton icon={<Home size={24} />} to="/" label="Home" />
          <NavButton icon={<Calendar size={24} />} to="/appointments" label="Appointments" />
          <div className="bg-[#FF8D6E] text-[#004852] rounded-full p-4 -mt-2 shadow-lg hover:shadow-xl transition-all">
            <Plus size={24} />
          </div>
          <NavButton
            icon={<MessageSquare size={24} />}
            label="Messages"
            to="/messages"
          />
          <NavButton icon={<User size={24} />} label="Profile"  to="/profile" />
        </div>
      </div>
    </div>
  );
};

const NavButton = ({
  icon,
  label,
  to,
  isActive = false,
  activeColor = "#417E86",
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
  activeColor?: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(to);
  isActive = (location.pathname === to)

  return (
    <button
      className={cn(
        "flex flex-col items-center gap-1",
        isActive ? `text-[${activeColor}]` : "text-gray-400"
      )}
      onClick={handleClick}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
};

export default Layout;

