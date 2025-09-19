import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconHeart, IconCoins, IconShield, IconStar, IconSparkles, IconMoon } from "@tabler/icons-react";

const transformationStories = [
  {
    id: 1,
    name: "Sarah's Love Awakening",
    category: "Love & Relationships",
    spell: "Soulmate Attraction Ritual",
    icon: IconHeart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    story: "After years of failed relationships, Sarah felt hopeless about finding true love. She discovered our Soulmate Attraction Ritual and decided to try one last time. Within three weeks, she met her now-husband at a coffee shop - the same one she'd been visiting for months, but this time their eyes met across the room and she knew instantly. 'It was like the universe finally aligned,' she says. They've been married for two years now.",
    result: "Found soulmate within 3 weeks",
    timeframe: "3 weeks"
  },
  {
    id: 2,
    name: "Marcus's Financial Breakthrough",
    category: "Abundance & Wealth",
    spell: "Prosperity Flow Ritual",
    icon: IconCoins,
    color: "text-green-600",
    bgColor: "bg-green-100",
    story: "Marcus was drowning in debt and struggling to make ends meet. After performing our Prosperity Flow Ritual, he received an unexpected promotion at work, followed by a significant bonus. But the real magic happened when he started a side business that took off beyond his wildest dreams. 'I went from barely surviving to thriving in just six months,' he shares. His debt is now completely cleared.",
    result: "Debt-free and thriving business",
    timeframe: "6 months"
  },
  {
    id: 3,
    name: "Elena's Spiritual Protection",
    category: "Protection & Cleansing",
    spell: "Aura Shield Ritual",
    icon: IconShield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    story: "Elena was constantly feeling drained and negative, as if she was absorbing everyone else's energy. After our Aura Shield Ritual, she noticed an immediate shift. 'I felt lighter, more protected,' she explains. Her relationships improved as she stopped taking on others' problems, and she found the strength to set healthy boundaries. 'I finally feel like myself again.'",
    result: "Restored energy and healthy boundaries",
    timeframe: "2 weeks"
  },
  {
    id: 4,
    name: "David's Career Transformation",
    category: "Success & Opportunities",
    spell: "Success Magnet Ritual",
    icon: IconStar,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    story: "David was stuck in a dead-end job, feeling unfulfilled and undervalued. After performing our Success Magnet Ritual, opportunities began appearing from unexpected places. He was headhunted for his dream job, received recognition for his work, and even started getting speaking opportunities in his field. 'It's like the universe finally noticed me,' he says with a smile.",
    result: "Dream job and industry recognition",
    timeframe: "1 month"
  },
  {
    id: 5,
    name: "Maya's Healing Journey",
    category: "Healing & Wellness",
    spell: "Emotional Healing Ritual",
    icon: IconSparkles,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    story: "Maya was carrying years of emotional trauma from past relationships and family issues. The Emotional Healing Ritual helped her release deep-seated pain she didn't even realize she was holding onto. 'I cried for three days straight, but it was a cleansing cry,' she shares. 'I feel like a new person - lighter, freer, and ready to love again.'",
    result: "Complete emotional healing and renewal",
    timeframe: "2 months"
  },
  {
    id: 6,
    name: "Alex's Intuitive Awakening",
    category: "Psychic Development",
    spell: "Third Eye Opening Ritual",
    icon: IconMoon,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    story: "Alex always felt different, like they could sense things others couldn't, but never knew how to develop their abilities. Our Third Eye Opening Ritual helped them unlock their natural psychic gifts. 'I started having vivid dreams that came true, and I could sense people's emotions before they spoke,' Alex explains. 'Now I use my gifts to help others and feel truly aligned with my purpose.'",
    result: "Developed psychic abilities and life purpose",
    timeframe: "3 months"
  }
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Tales of Transformation"
            subtitle="Real Stories of Mystical Journeys"
            description="These are the true stories of ordinary people who discovered extraordinary power within themselves. Each tale is a testament to the ancient wisdom that still flows through our world, waiting to be awakened in those brave enough to seek it."
            centered
          />
        </div>
      </Section>

      {/* Introduction */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Power of Belief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;Every transformation begins with a single step into the unknown. These brave souls 
              took that step, opening their hearts to possibilities beyond what their eyes could see. 
              Their stories remind us that magic isn&apos;t just in ancient texts or distant lands - 
              it&apos;s in the courage to believe in something greater than ourselves.&rdquo;
            </p>
            <p className="text-sm text-gray-600 mt-4 italic">
              — The Keeper of Stories
            </p>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stories of Real Transformation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each story is unique, but they all share one thing in common: the moment when everything changed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformationStories.map((story) => {
            const IconComponent = story.icon;
            return (
              <Card key={story.id} hover className="relative group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${story.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${story.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {story.name}
                      </h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {story.category}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          ✓ {story.result}
                        </span>
                        <span className="text-muted-foreground">
                          {story.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Spell Used:</p>
                    <p className="text-sm text-muted-foreground bg-gray-50 px-3 py-2 rounded-lg">
                      {story.spell}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-purple-300">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      &ldquo;{story.story}&rdquo;
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
