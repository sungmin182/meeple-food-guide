import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantModal from "@/components/RestaurantModal";
import { restaurants, meepleLocation, Restaurant } from "@/data/restaurants";
import { MapPin, Info } from "lucide-react";

const PATTERN_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/dqhmlFDpERSr2EdHxAjEpQ/sandbox/AaDSZfEm6z0VKsSpNCtyGx-img-3_1770173053000_na1fn_Zm9vZC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZHFobWxGRHBFUlNyMkVkSHhBakVwUS9zYW5kYm94L0FhRFNaZkVtNnowVktzU3BOQ3R5R3gtaW1nLTNfMTc3MDE3MzA1MzAwMF9uYTFmbl9abTl2WkMxd1lYUjBaWEp1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GkZxldhK1q1UPthX8mCi816FBupx3Wlhbcw5dl2JHwK4TRK09TTf0u9fOJqBZ-MW1SNUdrC2yL11O92xE5qrRLr2IJrZ25EbkTDkvq-LsSHL~~wHWjsEJBe~ArQ7Qjd7pNNms9PqOQfbk-AxlW48di1qvbmtds5q0LZobi2Uhg1Zc4zoK0GxEqwvBI9jzHWlu1y6RNMxxXxlxPG4V8tKVEY9-22kGlASlMYNIifxYZIKpGMzPdVK0XukfOas2Lkqe79S1qzchfixnvoxfL3jy2SYRn6K3D3TGuI6hH57BYVC2jbpIfUraLIC8s6g0dIBAwqSz6x1OGxnMC-Z-kckoQ__";

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Meeple Location Info */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <div className="container">
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground">
                {meepleLocation.name}
              </h3>
              <p className="text-sm text-muted-foreground">{meepleLocation.address}</p>
            </div>
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(meepleLocation.name + " " + meepleLocation.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0 sm:ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              지도에서 보기
            </a>
          </motion.div>
        </div>
      </section>

      {/* Restaurant List Section */}
      <section 
        className="py-16 relative"
        style={{ 
          backgroundImage: `url(${PATTERN_BG_URL})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        
        <div className="container relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              🍽️ 맛집 TOP 10
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              미플 보드게임 카페에서 도보 10분 이내에 위치한 엄선된 맛집들입니다.
              <br />
              카드를 클릭하면 상세 정보와 지도 링크를 확인할 수 있습니다.
            </p>
          </motion.div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={() => handleCardClick(restaurant)}
                index={index}
              />
            ))}
          </div>

          {/* Info Note */}
          <motion.div 
            className="mt-12 p-4 bg-muted/50 rounded-xl border border-border flex items-start gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              도보 시간은 미플 보드게임 카페를 기준으로 측정되었습니다. 
              실제 이동 시간은 경로와 보행 속도에 따라 다를 수 있습니다.
              각 맛집의 영업시간은 방문 전 확인해 주세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🎲</span>
            <span className="font-display font-bold text-lg">미플 카페 맛집 가이드</span>
          </div>
          <p className="text-sm text-gray-400 mb-2">
            충북 청주시 상당구 대성동 · 미플 보드게임 카페 주변
          </p>
          <p className="text-xs text-gray-500">
            © 2025 Meeple Food Guide. 즐거운 보드게임과 맛있는 식사 되세요! 🎯
          </p>
        </div>
      </footer>

      {/* Restaurant Detail Modal */}
      <RestaurantModal
        restaurant={selectedRestaurant}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
