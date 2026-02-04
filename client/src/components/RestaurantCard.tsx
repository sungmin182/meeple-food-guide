import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Restaurant } from "@/data/restaurants";
import { MapPin, Clock, Utensils } from "lucide-react";
import { motion } from "framer-motion";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
  index: number;
}

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-br from-yellow-400 to-amber-500 text-amber-900";
    case 2:
      return "bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800";
    case 3:
      return "bg-gradient-to-br from-orange-400 to-orange-600 text-orange-900";
    default:
      return "bg-gradient-to-br from-slate-600 to-slate-700 text-white";
  }
};

const getRankEmoji = (rank: number) => {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return null;
  }
};

export default function RestaurantCard({ restaurant, onClick, index }: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card 
        className="h-full cursor-pointer overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card"
        onClick={onClick}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Rank Badge */}
          <div className="relative p-4 pb-2">
            <div className={`absolute -top-1 -left-1 w-14 h-14 ${getRankColor(restaurant.rank)} rounded-br-2xl flex items-center justify-center shadow-lg`}>
              <span className="text-xl font-bold font-display">
                {getRankEmoji(restaurant.rank) || restaurant.rank}
              </span>
            </div>
            
            {/* Category Badge */}
            <div className="flex justify-end">
              <Badge variant="secondary" className="text-xs">
                {restaurant.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pb-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold font-display text-foreground mb-2 mt-2">
              {restaurant.name}
            </h3>
            
            {/* Walk Time */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>도보 <strong className="text-primary">{restaurant.walkTime}분</strong></span>
            </div>

            {/* Signature Menu */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Utensils className="w-4 h-4 text-accent" />
              <span className="truncate">{restaurant.signature}</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground mt-auto">
              <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
              <span className="line-clamp-2">{restaurant.address}</span>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
