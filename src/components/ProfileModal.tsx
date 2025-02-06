
import { X } from "lucide-react";

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  const userProfile = {
    name: "John Doe",
    mobile: "+1 234 567 8900",
    birthdate: "15 Jan 1990",
    address: "123 Health Street, Medical City, MC 12345",
    reminders: [
      { id: 1, title: "Annual Checkup", date: "March 15, 2024" },
      { id: 2, title: "Vaccination", date: "April 1, 2024" },
    ],
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="p-6 flex justify-between items-start border-b">
          <h2 className="text-xl font-semibold">Profile</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#4A90E2] flex items-center justify-center text-white text-2xl">
              {userProfile.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{userProfile.name}</h3>
              <p className="text-gray-500">Patient</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Mobile Number</label>
              <p className="font-medium">{userProfile.mobile}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Birth Date</label>
              <p className="font-medium">{userProfile.birthdate}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Address</label>
              <p className="font-medium">{userProfile.address}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Upcoming Reminders</h4>
            <div className="space-y-3">
              {userProfile.reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="font-medium">{reminder.title}</span>
                  <span className="text-sm text-gray-500">{reminder.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
