import React, { useState, useEffect } from 'react';
import { AppCard } from "@/components/AppCard";
import { HealthMetric } from "@/components/HealthMetric";
import { StatusBadge } from "@/components/StatusBadge";
import { Bell, Calendar, Home, MessageSquare, User, Plus } from "lucide-react";
import axios from 'axios';

interface Message {
  id: number;
  sender: {
    name: string;
    image: string;
    role: string;
  };
  content: string;
  timestamp: string;
  isNew: boolean;
}

const Index = () => {
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoadingMessages(true);
      setMessageError(null);
      try {
        const baseUrl = 'https://pleasantly-ample-corgi.ngrok-free.app'
        const myHeaders = new Headers();
        myHeaders.append("ngrok-skip-browser-warning", "true");
        const response = await fetch(
          `${baseUrl}/messaging-domain/api/Conversation/participantConversationIDs?participantId=e8965f84-be20-48ec-96b1-9f874a0601e3&userId=7aa42743-588a-4f94-93cc-c4ed66fa973f&practiceGuid=48a28360-22bd-4daa-b493-f08e51fcfbc6`,
          {
            method: "get",
            headers: myHeaders,
          }
        ); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setMessageError('Failed to load messages. Please try again later.');
        // Fallback to demo data if API fails
        // setMessages([
        //   {
        //     id: 1,
        //     sender: {
        //       name: 'Emma Thompson',
        //       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //       role: 'Nurse'
        //     },
        //     content: 'Your lab results are ready for review...',
        //     timestamp: '5 minutes ago',
        //     isNew: true
        //   },
        //   {
        //     id: 2,
        //     sender: {
        //       name: 'Dr. Michael Chen',
        //       image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //       role: 'Doctor'
        //     },
        //     content: 'Please remember to bring your medical history...',
        //     timestamp: '2 hours ago',
        //     isNew: false
        //   }
        // ]);
      } finally {
        setTimeout(() => setIsLoadingMessages(false), 5000);
      }
    };

    fetchMessages();
  }, []);

  const MessageSkeleton = () => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-3 bg-gray-200 rounded w-48"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto h-screen bg-[#F0EEE8] flex flex-col">
      {/* Header */}
      <div className="p-6 bg-[#F0EEE8] sticky top-0 z-10">
        <header className="flex justify-between items-center animate-slide-in">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-lg font-semibold">Hi, John</h1>
              <p className="text-sm text-gray-700">Welcome back</p>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-gray-800" />
          </button>
        </header>
      </div>

      <div className="bg-[#F0EEE8] p-6">
        {/* Next Appointment */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Next Appointment</h2>
            <button className="text-sm text-view-all hover:opacity-80">View All</button>
          </div>
          <div
            className="bg-white rounded-xl p-4 mb-3 cursor-pointer hover:shadow-md transition-all message-transition slide-in"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=300"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Dr. Sarah Smith</h3>
                    <p className="text-gray-600 mt-1">Annual Check-up</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-[#CBDDE0] text-white rounded-full">
                      Confirmed
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Tomorrow at 10:30 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Messages */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Messages</h2>
            <button className="text-sm text-view-all hover:opacity-80">View All</button>
          </div>
          <div className="space-y-3">
            {isLoadingMessages && (
              <div className="space-y-3">
                <MessageSkeleton />
                <MessageSkeleton />
              </div>
            )}
            {!isLoadingMessages && (
              <>
                <div
                  className="bg-white rounded-xl p-4 mb-3 cursor-pointer hover:shadow-md transition-all message-transition slide-in"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=300"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Dr. Smith</h3>
                          <p className="text-gray-600 mt-1">Your lab results are ready to view</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs font-medium bg-[#CBDDE0] text-white rounded-full">
                            New
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">2 mins ago</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white rounded-xl p-4 mb-3 cursor-pointer hover:shadow-md transition-all message-transition slide-in"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Nurse Johnson</h3>
                          <p className="text-gray-600 mt-1">Follow-up on your medication</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs font-medium bg-[#CBDDE0] text-white rounded-full">
                            New
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Health Summary */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Health Summary</h2>
          <div className="grid grid-cols-3 gap-3">
            <HealthMetric
              title="Blood Pressure"
              value="120/80"
              status="stable"
            />
            <HealthMetric
              title="Heart Rate"
              value="72 bpm"
              status="up"
            />
            <HealthMetric
              title="Weight"
              value="150 lbs"
              status="down"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
