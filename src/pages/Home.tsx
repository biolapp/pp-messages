import { AppCard } from "@/components/AppCard";
import { HealthMetric } from "@/components/HealthMetric";
import { StatusBadge } from "@/components/StatusBadge";
import { Bell, Calendar, Home, MessageSquare, User, Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-2xl mx-auto h-screen bg-[#F0EEE8] flex flex-col">
      {/* Header */}
      <div className="p-6 bg-[#F0EEE8] sticky top-0 z-10">
        <header className="flex justify-between items-center animate-slide-in">
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
            <div
              className="bg-white rounded-xl p-4 mb-3 cursor-pointer hover:shadow-md transition-all message-transition slide-in"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg"
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
                    src="/placeholder.svg"
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
