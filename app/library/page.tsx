import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconBook, IconCrystalBall, IconMoon, IconStar, IconFlame, IconEye } from "@tabler/icons-react";

const ancientKnowledge = [
  {
    id: 1,
    title: "The Book of Shadows",
    category: "Ancient Wisdom",
    description: "A collection of spells passed down through generations of wise women and men. Each page whispers secrets of the old ways.",
    icon: IconBook,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    excerpt: "In the quiet hours before dawn, when the veil between worlds grows thin, the ancient ones speak through these sacred texts..."
  },
  {
    id: 2,
    title: "Crystal Visions",
    category: "Divination Arts",
    description: "Learn the ancient art of scrying and crystal gazing. See beyond the physical realm into the mysteries of fate.",
    icon: IconCrystalBall,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    excerpt: "The crystal holds within it the memory of the earth, the wisdom of the stars, and the dreams of those who came before..."
  },
  {
    id: 3,
    title: "Lunar Mysteries",
    category: "Celestial Magic",
    description: "Discover how the moon's phases influence magic and learn to harness lunar energy for your rituals.",
    icon: IconMoon,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
    excerpt: "Each phase of the moon carries its own power - from the new moon's potential to the full moon's peak energy..."
  },
  {
    id: 4,
    title: "Stellar Alignments",
    category: "Astrological Arts",
    description: "Understand how the stars guide our destinies and learn to read the cosmic patterns that shape our lives.",
    icon: IconStar,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    excerpt: "The stars are not merely lights in the sky, but ancient beings who watch over us and whisper our destinies..."
  },
  {
    id: 5,
    title: "Elemental Forces",
    category: "Natural Magic",
    description: "Master the four elements - earth, air, fire, and water - and learn to work with their primal energies.",
    icon: IconFlame,
    color: "text-red-600",
    bgColor: "bg-red-100",
    excerpt: "Before the world was made, there were only the elements, dancing in the void, creating all that we know..."
  },
  {
    id: 6,
    title: "The Third Eye",
    category: "Psychic Development",
    description: "Awaken your inner sight and develop your psychic abilities through ancient meditation and visualization techniques.",
    icon: IconEye,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    excerpt: "Within each of us lies a dormant power, a way of seeing that transcends the physical eyes and touches the soul..."
  }
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="The Ancient Library"
            subtitle="Hidden Knowledge of Ages"
            description="Welcome, seeker of wisdom. Within these sacred halls lie the accumulated knowledge of countless generations of mystics, healers, and wise ones. Each tome holds secrets that have been carefully preserved and passed down through the ages."
            centered
          />
        </div>
      </Section>

      {/* Library Introduction */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">A Message from the Keeper</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;In the quiet corners of this library, where dust motes dance in shafts of golden light, 
              you will find more than mere words on pages. Here, knowledge lives and breathes, 
              waiting for the right soul to unlock its mysteries. Each book you touch has been 
              blessed by the hands of those who came before, and each spell you learn carries 
              the weight of centuries of wisdom.&rdquo;
            </p>
            <p className="text-sm text-gray-600 mt-4 italic">
              — The Keeper of Ancient Knowledge
            </p>
          </div>
        </div>
      </Section>

      {/* Knowledge Categories */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sacred Tomes & Ancient Wisdom</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the different branches of mystical knowledge that have been preserved in our ancient library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ancientKnowledge.map((knowledge) => {
            const IconComponent = knowledge.icon;
            return (
              <Card key={knowledge.id} hover className="relative group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${knowledge.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${knowledge.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {knowledge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {knowledge.category}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {knowledge.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-purple-300">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      &ldquo;{knowledge.excerpt}&rdquo;
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
