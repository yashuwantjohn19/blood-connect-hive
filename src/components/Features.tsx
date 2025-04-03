
import { Bell, Calendar, Heart, MapPin, Search, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-donor-600" />,
      title: "Smart Search & Matching",
      description: "Find blood donation requests filtered by blood type, location, and urgency for perfect matches.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-donor-600" />,
      title: "Appointment Scheduling",
      description: "Book donation slots directly with hospitals and NGOs through our simple calendar interface.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-donor-600" />,
      title: "Location-Based Alerts",
      description: "Receive notifications about urgent blood donation needs in your area.",
    },
    {
      icon: <Heart className="h-10 w-10 text-donor-600" />,
      title: "Donation Impact Tracking",
      description: "See how your donations have helped patients and track your donation history.",
    },
    {
      icon: <Bell className="h-10 w-10 text-donor-600" />,
      title: "Emergency Alerts",
      description: "Get notified immediately when your blood type is urgently needed nearby.",
    },
    {
      icon: <Users className="h-10 w-10 text-donor-600" />,
      title: "Community Engagement",
      description: "Connect with other donors and participate in blood donation drives and events.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading mb-4">Key Features</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our platform connects blood donors with those in need through these powerful features designed to make the donation process seamless and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
