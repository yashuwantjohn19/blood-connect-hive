
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AuthModal from "./auth/AuthModal";

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");

  const handleSignupClick = () => {
    setAuthType("signup");
    setIsAuthModalOpen(true);
  };

  return (
    <section className="pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-heading">
                Connect Blood Donors with Those in Need
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Donor Hive connects blood donors with hospitals, NGOs, and recipients in real-time. 
                Save lives with a simple donation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-donor-600 hover:bg-donor-700 text-white px-8 py-6 text-lg"
                onClick={handleSignupClick}
              >
                Join as a Donor
              </Button>
              <Button
                variant="outline"
                className="border-donor-600 text-donor-600 hover:bg-donor-50 px-8 py-6 text-lg"
                onClick={() => {setAuthType("login"); setIsAuthModalOpen(true);}}
              >
                Hospital & NGO Portal
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((id) => (
                  <div 
                    key={id} 
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium">
                      {["JD", "SM", "RK", "AT"][id-1]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500">Joined by 20,000+ donors nationwide</p>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-donor-200 rounded-full opacity-70 blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-donor-200 rounded-full opacity-70 blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1000"
                alt="Blood donation"
                className="mx-auto aspect-square rounded-full object-cover border-8 border-white shadow-xl w-[350px] h-[350px] relative z-10"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        type={authType}
        onSwitchType={() => setAuthType(authType === "login" ? "signup" : "login")}
      />
    </section>
  );
};

export default Hero;
