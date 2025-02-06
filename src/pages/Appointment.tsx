import { useState } from "react";
import { ArrowLeft, Clock, MapPin, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(4);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedVisitType, setSelectedVisitType] = useState<"in-person" | "video" | null>(null);

  const dates = [
    { day: "Tue", date: 4 },
    { day: "Wed", date: 5 },
    { day: "Thu", date: 6 },
    { day: "Fri", date: 7 },
    { day: "Sat", date: 8 },
  ];

  const times = [
    "9:00 AM",
    "10:30 AM",
    "11:30 AM",
    "2:00 PM",
    "3:30 PM",
  ];

  return (
    <div className="max-w-2xl mx-auto h-screen bg-[#E8E5DF] flex flex-col">
      {/* Header */}
      <div className="p-6 bg-[#F0EEE8] sticky top-0 z-10">
        <header className="flex justify-between items-center animate-slide-in">
          <div className="flex items-center mb-6">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-semibold ml-2">Schedule Appointment</h1>
          </div>
        </header>
      </div>
      <div className="bg-[#F0EEE8] p-6">
        <p className="text-gray-600 mb-6">Select date and time</p>

        {/* Doctor Profile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/642101f0-889a-412f-980d-52073d226f67.png"
              alt="Dr. Sarah"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <h2 className="font-semibold">Dr. Sarah</h2>
              <p className="text-gray-600">Medicine</p>
            </div>
          </div>
          <span className="bg-[#C3E7C0] text-[#004852] px-4 py-2 rounded-full text-sm">
            Available Today
          </span>
        </div>

        {/* Date Selection */}
        <h3 className="text-xl font-semibold mb-4">Select Date</h3>
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {dates.map(({ day, date }) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={cn(
                "flex flex-col items-center min-w-[72px] p-4 rounded-xl transition-all transform hover:scale-105",
                selectedDate === date
                  ? "bg-[#83CDD9] text-white"
                  : "bg-white text-black"
              )}
            >
              <span className="text-sm">{day}</span>
              <span className="text-xl font-semibold mt-1">{date}</span>
            </button>
          ))}
        </div>

        {/* Time Selection */}
        <h3 className="text-xl font-semibold mb-4">Available Times</h3>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={cn(
                "flex items-center gap-2 p-4 rounded-xl transition-all hover:scale-105",
                selectedTime === time
                  ? "bg-[#83CDD9] text-white"
                  : "bg-white text-black"
              )}
            >
              <Clock className="w-5 h-5" />
              {time}
            </button>
          ))}
        </div>

        {/* Visit Type */}
        <h3 className="text-xl font-semibold mb-4">Visit Type</h3>
        <div className="space-y-3 mb-8">
          <button
            onClick={() => setSelectedVisitType("in-person")}
            className={cn(
              "w-full flex items-start gap-3 p-4 rounded-xl transition-all text-left",
              selectedVisitType === "in-person"
                ? "bg-[#83CDD9] text-white"
                : "bg-white text-black"
            )}
          >
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <div className="font-semibold">In-Person Visit</div>
              <div className="text-sm opacity-75">123 Medical Center Dr.</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedVisitType("video")}
            className={cn(
              "w-full flex items-start gap-3 p-4 rounded-xl transition-all text-left",
              selectedVisitType === "video"
                ? "bg-[#83CDD9] text-white"
                : "bg-white text-black"
            )}
          >
            <Video className="w-5 h-5 mt-1" />
            <div>
              <div className="font-semibold">Video Visit</div>
              <div className="text-sm opacity-75">Virtual appointment</div>
            </div>
          </button>
        </div>

        {/* Confirm Button */}
        <button
          className="w-full bg-[#FF8D6E] text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          onClick={() => {
            console.log("Appointment confirmed:", {
              date: selectedDate,
              time: selectedTime,
              visitType: selectedVisitType,
            });
          }}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
