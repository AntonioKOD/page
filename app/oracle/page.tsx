import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconCrystalBall, IconEye, IconMoon, IconStar, IconFlame, IconHeart } from "@tabler/icons-react";

const oracleWisdom = [
  {
    id: 1,
    title: "The Crystal Seer",
    category: "Divination",
    description: "Peer into the depths of the crystal sphere and receive guidance from the ancient spirits who dwell within its depths.",
    icon: IconCrystalBall,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    message: "The mists of time part before you, revealing paths yet untraveled. Trust in the wisdom that flows through the crystal's heart, for it speaks with the voice of ages.",
    guidance: "Focus your question in your heart, then gaze into the crystal's depths. The answer will come not in words, but in feelings and images that arise within your soul."
  },
  {
    id: 2,
    title: "The All-Seeing Eye",
    category: "Insight",
    description: "Open your third eye and receive profound insights about your life's journey and the choices that lie ahead.",
    icon: IconEye,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    message: "Your inner vision awakens, showing you truths that the physical eyes cannot perceive. The path forward becomes clear when you see with the eyes of the soul.",
    guidance: "Close your physical eyes and breathe deeply. Ask your question silently, then wait for the images and feelings that arise in your mind's eye."
  },
  {
    id: 3,
    title: "Lunar Oracle",
    category: "Timing",
    description: "Consult the moon's wisdom to understand the perfect timing for your endeavors and the cycles that govern your life.",
    icon: IconMoon,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
    message: "The moon whispers secrets of timing and cycles. She knows when to plant seeds and when to harvest, when to act and when to wait in patient silence.",
    guidance: "Consider the current phase of the moon and how it relates to your question. New moons are for beginnings, full moons for culmination, and waning moons for release."
  },
  {
    id: 4,
    title: "Stellar Guidance",
    category: "Destiny",
    description: "Seek counsel from the stars themselves, who have watched over human destiny since time began.",
    icon: IconStar,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    message: "The stars are ancient beings who remember all that has been and see all that will be. They speak in the language of light and shadow, of hope and possibility.",
    guidance: "Look to the night sky and find your guiding star. Ask your question while focusing on its light, and let the cosmic wisdom flow through you."
  },
  {
    id: 5,
    title: "Flame of Truth",
    category: "Clarity",
    description: "Gaze into the dancing flames and receive clear, direct answers to your most pressing questions.",
    icon: IconFlame,
    color: "text-red-600",
    bgColor: "bg-red-100",
    message: "Fire burns away illusion and reveals the pure truth beneath. In its flickering light, all deception falls away, leaving only what is real and essential.",
    guidance: "Light a candle and focus on the flame. Ask your question aloud, then watch how the flame dances. Its movements will reveal the truth you seek."
  },
  {
    id: 6,
    title: "Heart's Wisdom",
    category: "Emotional Guidance",
    description: "Connect with the deepest wisdom of your heart to receive guidance on matters of love, relationships, and emotional healing.",
    icon: IconHeart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    message: "Your heart knows truths that your mind cannot comprehend. It speaks in the language of feeling, of love, of the deep knowing that comes from the soul.",
    guidance: "Place your hand over your heart and breathe deeply. Ask your question from this place of love and compassion, then listen to what your heart whispers back."
  }
];

const dailyGuidance = [
  {
    day: "Monday",
    message: "The week begins with new possibilities. Plant seeds of intention today, for they will grow throughout the week.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    day: "Tuesday",
    message: "Mars energy flows strong today. Take bold action on matters that require courage and determination.",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    day: "Wednesday",
    message: "Mercury's influence brings clarity to communication. Speak your truth with wisdom and grace.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    day: "Thursday",
    message: "Jupiter's expansive energy opens doors of opportunity. Say yes to new experiences and growth.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    day: "Friday",
    message: "Venus blesses this day with love and beauty. Focus on relationships and creative expression.",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    day: "Saturday",
    message: "Saturn's wisdom calls for reflection and discipline. Review your progress and make necessary adjustments.",
    color: "text-gray-600",
    bgColor: "bg-gray-50"
  },
  {
    day: "Sunday",
    message: "The Sun's radiant energy brings joy and vitality. Celebrate your achievements and rest in gratitude.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

export default function OraclePage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayGuidance = dailyGuidance.find(g => g.day === today) || dailyGuidance[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="The Oracle's Wisdom"
            subtitle="Seek Guidance from Ancient Spirits"
            description="Welcome, seeker of truth. The ancient oracles have gathered here to share their wisdom with those brave enough to ask. Each oracle speaks with the voice of ages, offering guidance that transcends the limitations of ordinary understanding."
            centered
          />
        </div>
      </Section>

      {/* Daily Guidance */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-center text-gray-800">Today&apos;s Guidance</h2>
              <p className="text-center text-gray-600">{today}</p>
            </CardHeader>
            <CardContent>
              <div className={`${todayGuidance.bgColor} rounded-lg p-6 border-l-4 border-purple-300`}>
                <p className={`text-lg ${todayGuidance.color} text-center leading-relaxed`}>
                  &ldquo;{todayGuidance.message}&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Oracle Introduction */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">A Message from the Oracle</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;In the silence between heartbeats, in the space between thoughts, 
              there exists a realm where all knowledge dwells. The oracles who serve here 
              are but channels for this ancient wisdom, speaking truths that have echoed 
              through eternity. Approach with an open heart and a clear question, 
              and you will receive the guidance you seek.&rdquo;
            </p>
            <p className="text-sm text-gray-600 mt-4 italic">
              — The Voice of the Oracle
            </p>
          </div>
        </div>
      </Section>

      {/* Oracle Chambers */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Chambers of Ancient Wisdom</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each oracle chamber offers a different path to wisdom. Choose the one that calls to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oracleWisdom.map((oracle) => {
            const IconComponent = oracle.icon;
            return (
              <Card key={oracle.id} hover className="relative group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${oracle.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${oracle.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {oracle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {oracle.category}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {oracle.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-purple-300 mb-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      &ldquo;{oracle.message}&rdquo;
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                    <p className="text-xs font-medium text-blue-800 mb-2">Guidance:</p>
                    <p className="text-sm text-blue-700 leading-relaxed">
                      {oracle.guidance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

    </div>
  );
}
