import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/data/restaurants";
import { MapPin, Clock, Utensils, Navigation, X } from "lucide-react";

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
}

const getRankLabel = (rank: number) => {
  switch (rank) {
    case 1:
      return { emoji: "🥇", text: "1위", color: "bg-yellow-100 text-yellow-800 border-yellow-300" };
    case 2:
      return { emoji: "🥈", text: "2위", color: "bg-gray-100 text-gray-800 border-gray-300" };
    case 3:
      return { emoji: "🥉", text: "3위", color: "bg-orange-100 text-orange-800 border-orange-300" };
    default:
      return { emoji: "🎯", text: `${rank}위`, color: "bg-slate-100 text-slate-800 border-slate-300" };
  }
};

export default function RestaurantModal({ restaurant, isOpen, onClose }: RestaurantModalProps) {
  if (!restaurant) return null;

  const rankInfo = getRankLabel(restaurant.rank);
  
  const handleNaverMap = () => {
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(restaurant.name + " " + restaurant.address)}`;
    window.open(url, "_blank");
  };

  const handleKakaoMap = () => {
    const url = `https://map.kakao.com/?q=${encodeURIComponent(restaurant.name + " " + restaurant.address)}`;
    window.open(url, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 rounded-full text-sm font-bold border ${rankInfo.color}`}>
                {rankInfo.emoji} {rankInfo.text}
              </span>
              <Badge variant="secondary">{restaurant.category}</Badge>
            </div>
          </div>
          <DialogTitle className="text-2xl font-display mt-3">
            {restaurant.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Walk Time & Signature */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">
                미플에서 도보 <strong className="text-primary">{restaurant.walkTime}분</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-accent/20 px-3 py-2 rounded-lg">
              <Utensils className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{restaurant.signature}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-muted/50 p-4 rounded-xl">
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">추천 이유</h4>
            <p className="text-foreground leading-relaxed">
              {restaurant.description}
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">주소</p>
              <p className="text-sm text-muted-foreground">{restaurant.address}</p>
            </div>
          </div>

          {/* Map Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={handleNaverMap}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              <Navigation className="w-4 h-4 mr-2" />
              네이버 지도
            </Button>
            <Button 
              onClick={handleKakaoMap}
              variant="outline"
              className="flex-1 border-yellow-400 text-yellow-700 hover:bg-yellow-50"
            >
              <Navigation className="w-4 h-4 mr-2" />
              카카오맵
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
