
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "signup";
  onSwitchType: () => void;
}

const AuthModal = ({ isOpen, onClose, type, onSwitchType }: AuthModalProps) => {
  const [role, setRole] = useState<"donor" | "hospital">("donor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === "signup" && !name) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // In a real app, this would connect to your authentication system
    toast.success(type === "login" ? "Login successful!" : "Account created successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {type === "login" ? "Login to Your Account" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>
        
        {type === "signup" && (
          <div className="flex rounded-lg overflow-hidden mb-4">
            <button
              className={`flex-1 py-2 text-center ${
                role === "donor" 
                  ? "bg-donor-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setRole("donor")}
            >
              I'm a Donor
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                role === "hospital" 
                  ? "bg-donor-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setRole("hospital")}
            >
              I'm a Hospital/NGO
            </button>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder={role === "donor" ? "John Doe" : "Hospital/Organization Name"} 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {type === "signup" && role === "donor" && (
            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              <select 
                id="bloodType"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          )}

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button 
              type="submit" 
              className="w-full bg-donor-600 hover:bg-donor-700"
            >
              {type === "login" ? "Login" : "Create Account"}
            </Button>
            <div className="text-center text-sm">
              {type === "login" ? "Don't have an account?" : "Already have an account?"}
              <button 
                type="button"
                className="ml-1 text-donor-600 hover:underline"
                onClick={onSwitchType}
              >
                {type === "login" ? "Sign up" : "Login"}
              </button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
