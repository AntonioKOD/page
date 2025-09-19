import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconStar, IconHeart, IconShield, IconCoins, IconSparkles } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    name: "Love & Romance Spell",
    category: "Love",
    price: 25,
    description: "Attract your soulmate and strengthen existing relationships with this powerful love enchantment.",
    features: ["Soulmate attraction", "Relationship healing", "Self-love enhancement"],
    icon: IconHeart,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    popular: true
  },
  {
    id: 2,
    name: "Abundance & Wealth Ritual",
    category: "Money",
    price: 45,
    description: "Open the channels of prosperity and attract financial abundance into your life.",
    features: ["Money attraction", "Career success", "Debt elimination"],
    icon: IconCoins,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    popular: false
  },
  {
    id: 3,
    name: "Protection & Cleansing",
    category: "Protection",
    price: 35,
    description: "Shield yourself from negative energy and cleanse your spiritual aura.",
    features: ["Negative energy removal", "Psychic protection", "Aura cleansing"],
    icon: IconShield,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    popular: false
  },
  {
    id: 4,
    name: "Healing & Wellness Spell",
    category: "Healing",
    price: 40,
    description: "Promote physical, emotional, and spiritual healing through ancient wisdom.",
    features: ["Physical healing", "Emotional recovery", "Spiritual balance"],
    icon: IconStar,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    popular: false
  },
  {
    id: 5,
    name: "Luck & Success Charm",
    category: "Luck",
    price: 30,
    description: "Enhance your luck and attract success in all areas of your life.",
    features: ["Good fortune", "Success attraction", "Opportunity opening"],
    icon: IconSparkles,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    popular: false
  },
];

const categories = [
  { name: "All", count: 6 },
  { name: "Love", count: 1 },
  { name: "Money", count: 1 },
  { name: "Protection", count: 1 },
  { name: "Healing", count: 1 },
  { name: "Luck", count: 1 },
  { name: "Bundle", count: 1 }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Mystical Spells & Rituals"
            subtitle="Shop"
            description="Discover our collection of powerful spells and rituals designed to transform your life. Each spell is carefully crafted using ancient wisdom and modern energy work."
            centered
          />
        </div>
      </Section>

      {/* Categories */}
      <Section className="py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="rounded-full"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </Section>

      {/* Products Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} hover className="relative">
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${product.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${product.bgColor} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-3xl font-bold text-foreground mb-4">
                    ${product.price}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-3">
                  <Button 
                    variant="mystical" 
                    className="w-full"
                    size="lg"
                  >
                    Purchase Spell
                  </Button>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By purchasing this spell, you agree to our{" "}
                    <a href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and acknowledge that mystical services are for entertainment purposes. 
                    Results may vary and are not guaranteed.
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Service Commitment Section */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Our Service Commitment"
            description="We are committed to providing authentic mystical services. If you are not satisfied with our service delivery, we offer a refund within 30 days of purchase."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authentic Spells</h3>
              <p className="text-muted-foreground">All spells are based on ancient traditions and modern energy work</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconStar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Experience</h3>
              <p className="text-muted-foreground">Each spell is tailored to your specific needs and intentions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCoins className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Service Refund Policy</h3>
              <p className="text-muted-foreground">30-day refund policy on service delivery</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

