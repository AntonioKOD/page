import Hero from "@/components/hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconHeart, IconCoins, IconShield, IconStar, IconSparkles, IconMoon, IconDiamond, IconWand } from "@tabler/icons-react";

const spellCategories = [
  {
    name: "Love Spells",
    description: "Desire is the oldest spell, whispered since the dawn of fire. Our enchantments do not simply attract, they entwine. Whether to draw a soulmate from the unknown, bind a faltering heart, or awaken passion long thought buried, these spells are woven from threads of obsession, devotion, and fate itself. Love, once called, does not easily release its grip.",
    icon: IconHeart,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    keywords: "love spells, soulmate attraction, relationship healing, love magic, romance spells"
  },
  {
    name: "Money Spells",
    description: "From famine’s hunger was born the craft of calling abundance. These rites bend fortune’s gaze toward you, pulling coin, prosperity, and opportunity as if by unseen hands. With incantations older than kings and secrets carried through bloodlines, our wealth spells open doors to success, secure prosperity, and guard what you claim.",
    icon: IconCoins,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    keywords: "money spells, wealth attraction, financial abundance, prosperity spells, career success"
  },
  {
    name: "Protection Spells",
    description: "Shadows are not always enemies — they can also stand guard. These spells form unseen barriers against malice, envy, and wandering spirits, shielding your path from harm. The wards are ancient, the charms strong — a circle of silence around your life where no curse, no jealous eye, no hidden strike may enter.",
    icon: IconShield,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    keywords: "protection spells, psychic protection, negative energy removal, spiritual cleansing, aura protection"
  },
  {
    name: "Healing Spells",
    description: "Illness, grief, and weariness are not always of the body alone. These spells call on old remedies and lunar rites to restore balance to flesh, heart, and spirit. Blending forgotten cures with energy as primal as the night, our healing enchantments draw out decay and replenish what was taken, leaving strength where weakness lingered.",
    icon: IconStar,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    keywords: "healing spells, energy healing, spiritual healing, wellness magic, emotional healing"
  },
  {
    name: "Success Spells",
    description: "Power is not given, it is taken — or summoned. These enchantments tip the scales in your favor, bending decisions, opening doors, and silencing rivals. Whether you seek to rise in career, dominate in ambition, or simply command the respect you are owed, success spells carve your name into fate’s script with unshakable ink.",
    icon: IconSparkles,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    keywords: "success spells, career spells, opportunity attraction, manifestation spells, life transformation"
  }
];

const mysticalFeatures = [
  {
        title: "Ancient Lineage",
        description:
          "These rites are not inventions of the present, but inheritances. Passed from night-witches, seers, and covens long hidden, every spell carries the weight of centuries.",
        icon: IconMoon,
      },
      {
        title: "The Personal Thread",
        description:
          "No two castings are the same. Each spell is stitched to the seeker’s own spirit, hunger, and circumstance — ensuring the magic binds where it must, and only to you.",
        icon: IconDiamond,
      },
      {
        title: "Keepers of the Craft",
        description:
          "Our practitioners are not merchants of charms, but guardians of forgotten pacts. Decades in shadowed study and living practice make their work unbroken, untainted, and alive.",
        icon: IconWand,
      },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Spell Categories Section */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Powerful Spells"
          subtitle="Ancient Magic"
          description="Discover our collection of authentic spells crafted by master practitioners using ancient wisdom and modern energy work techniques."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spellCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Mystical Features Section */}
      <Section>
        <SectionHeader
          title="Authentic Magic"
    description="Not tricks, not illusions — but whispers carried through centuries, shaped by shadows, and bound by those who still remember the old ways."
    centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mysticalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Life with Ancient Magic?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join thousands of satisfied clients who have experienced the life-changing power of our authentic spell casting services. 
            Whether you need love spells, money spells, healing spells, protection spells, or success spells, our master practitioners 
            are ready to help you manifest your deepest desires and unlock your true potential.
          </p>
        </div>
      </Section>

    </div>
  );
}
