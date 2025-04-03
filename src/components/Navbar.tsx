
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Heart, Menu, X } from "lucide-react";
import AuthModal from "./auth/AuthModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const handleOpenLogin = () => {
    setAuthType("login");
    setIsAuthModalOpen(true);
  };

  const handleOpenSignup = () => {
    setAuthType("signup");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="border-b border-gray-100 py-4 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-donor-600" fill="#dc2626" />
            <span className="font-bold text-xl">Donor Hive</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-donor-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-donor-600">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-donor-600">About</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-600 hover:text-donor-600">Resources</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>For Donors</DropdownMenuItem>
                <DropdownMenuItem>For Hospitals</DropdownMenuItem>
                <DropdownMenuItem>For NGOs</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={handleOpenLogin}>Login</Button>
            <Button variant="default" className="bg-donor-600 hover:bg-donor-700" onClick={handleOpenSignup}>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-6 border-t border-gray-100 bg-white flex flex-col gap-4">
            <a href="#features" className="py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#about" className="py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#resources" className="py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Resources</a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" onClick={() => {handleOpenLogin(); setIsMenuOpen(false);}}>Login</Button>
              <Button className="bg-donor-600 hover:bg-donor-700" onClick={() => {handleOpenSignup(); setIsMenuOpen(false);}}>Sign Up</Button>
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        type={authType}
        onSwitchType={() => setAuthType(authType === "login" ? "signup" : "login")}
      />
    </>
  );
};

export default Navbar;
