import { motion } from "framer-motion";
import { MapPin, Utensils, Clock } from "lucide-react";

const HERO_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/dqhmlFDpERSr2EdHxAjEpQ/sandbox/AaDSZfEm6z0VKsSpNCtyGx-img-1_1770173051000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZHFobWxGRHBFUlNyMkVkSHhBakVwUS9zYW5kYm94L0FhRFNaZkVtNnowVktzU3BOQ3R5R3gtaW1nLTFfMTc3MDE3MzA1MTAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LN9SweJ2-GvMKdFDJbO5ub1VhBHNvI7AaQGt41KVFX~hj92DQzVDm2M753Dt~jA8hNmuIEct~a7vWdYD0YBUFjmGOsbrXnS5MDD69wuOMCMX-fqlhMkwwHhep6HAMCOte5cFnoIhLC9Y4j37j5xxCJpS8rAnM-d9ES8~ObRE6tZpS1~XdtPnKFmgifEf6rlGzaeLTDx7FN~Mto-qEdtXwixvvhoXXN85QvV13-W7sfYflOrF8D4nvbDgAyrmsUljeh6puR95vo0aN-i1SfbH9Zo4iZI6uxvUFy0tOjDj9AdVAJ3xq95ZL2J9axEr4pd1HEJ631FBIQHsLUv0AN5PEQ__";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Meeple Icon */}
          <motion.div
            className="inline-block mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <span className="text-4xl">🎲</span>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg">
            미플 카페 주변
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              맛집 가이드
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            보드게임 모임 후 즐거운 저녁 식사!
            <br className="hidden sm:block" />
            도보 10분 이내 엄선된 맛집 TOP 10
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <motion.div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">청주 대성동</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">도보 10분 이내</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Utensils className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">엄선된 10곳</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
