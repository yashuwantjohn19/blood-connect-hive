
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface BloodRequestCardProps {
  bloodType: string;
  urgency: "High" | "Medium" | "Low";
  location: string;
  hospital: string;
  distance: string;
  postedTime: string;
  requiredBy: string;
}

const BloodRequestCard = ({
  bloodType,
  urgency,
  location,
  hospital,
  distance,
  postedTime,
  requiredBy,
}: BloodRequestCardProps) => {
  const urgencyColor = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-amber-100 text-amber-800",
    Low: "bg-green-100 text-green-800",
  }[urgency];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-donor-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {bloodType}
            </div>
            <div>
              <Badge variant="outline" className={`${urgencyColor} border-0`}>
                {urgency} Urgency
              </Badge>
              <h3 className="font-semibold mt-1">{hospital}</h3>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location} ({distance})</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Posted {postedTime}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">Required by {requiredBy}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="default" className="w-full">Respond</Button>
          <Button variant="outline" className="w-full">Details</Button>
        </div>
      </div>
    </div>
  );
};

export default BloodRequestCard;
