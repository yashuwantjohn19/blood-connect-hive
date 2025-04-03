
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BloodRequestCard from "@/components/BloodRequestCard";

const Index = () => {
  const recentRequests = [
    {
      bloodType: "O+",
      urgency: "High" as const,
      location: "Manhattan, NY",
      hospital: "City General Hospital",
      distance: "2.3 miles away",
      postedTime: "2 hours ago",
      requiredBy: "Today"
    },
    {
      bloodType: "A-",
      urgency: "Medium" as const,
      location: "Brooklyn, NY",
      hospital: "Community Medical Center",
      distance: "4.8 miles away",
      postedTime: "6 hours ago",
      requiredBy: "Tomorrow"
    },
    {
      bloodType: "AB+",
      urgency: "Low" as const,
      location: "Queens, NY",
      hospital: "Queens Medical Center",
      distance: "7.2 miles away",
      postedTime: "1 day ago",
      requiredBy: "In 3 days"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-16 container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading mb-4">Urgent Blood Requests</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These are the most urgent blood donation requests in your area. Your donation could save a life today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentRequests.map((request, index) => (
            <BloodRequestCard key={index} {...request} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-donor-600 hover:underline font-medium">View all requests in your area →</a>
        </div>
      </section>
      
      <section className="py-16 bg-white" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-heading mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Donor Hive makes the blood donation process simple and efficient for both donors and recipients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-donor-100 flex items-center justify-center mb-4">
                <span className="text-donor-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-500">
                Sign up as a donor or a hospital/NGO and complete your profile with all necessary details.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-donor-100 flex items-center justify-center mb-4">
                <span className="text-donor-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find or Post Requests</h3>
              <p className="text-gray-500">
                Donors can find nearby blood requests, while hospitals can post new requests specifying blood type and urgency.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-donor-100 flex items-center justify-center mb-4">
                <span className="text-donor-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule & Donate</h3>
              <p className="text-gray-500">
                Schedule your donation time, receive reminders, and help save lives through your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      <CTASection />
      
      <section className="py-16 bg-white" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold gradient-heading mb-4">About Donor Hive</h2>
              <p className="text-gray-500 mb-6">
                Donor Hive was founded with a simple mission: to bridge the gap between blood donors and those in critical need. 
                Our platform leverages technology to create a seamless connection that saves lives.
              </p>
              <p className="text-gray-500 mb-6">
                We believe that everyone should have access to life-saving blood when they need it most. 
                By creating a community of dedicated donors and partnering with hospitals and NGOs nationwide, 
                we're working to ensure that no one has to wait for critical blood supplies in emergency situations.
              </p>
              <div className="flex gap-4">
                <div>
                  <div className="text-3xl font-bold text-donor-600">98%</div>
                  <p className="text-gray-500">Request Fulfillment Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-donor-600">15min</div>
                  <p className="text-gray-500">Average Response Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-donor-600">24/7</div>
                  <p className="text-gray-500">Emergency Support</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500"
                alt="Blood donation team" 
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
