
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AuthModal from "./auth/AuthModal";

const CTASection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");

  return (
    <section className="py-16 bg-donor-600 text-white" id="cta">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Life-Saving Difference?</h2>
            <p className="mb-6 text-donor-100">
              Join our platform today and be part of a community dedicated to saving lives through blood donation. 
              Whether you're a donor or a hospital, Donor Hive connects you with those who need help the most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-donor-600 hover:bg-donor-100"
                onClick={() => {setAuthType("signup"); setIsAuthModalOpen(true);}}
              >
                Sign Up as a Donor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white hover:bg-donor-700"
                onClick={() => {setAuthType("signup"); setIsAuthModalOpen(true);}}
              >
                Register a Hospital or NGO
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-donor-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">120K+</div>
              <p className="text-donor-100">Registered Donors</p>
            </div>
            <div className="bg-donor-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-donor-100">Partner Hospitals</p>
            </div>
            <div className="bg-donor-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-donor-100">Lives Saved</p>
            </div>
            <div className="bg-donor-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">250+</div>
              <p className="text-donor-100">Cities Covered</p>
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

export default CTASection;
