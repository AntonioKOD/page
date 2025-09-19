import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconStar, IconHeart, IconShield, IconSparkles, IconMoon } from "@tabler/icons-react";

const values = [
  {
    title: "Authenticity",
    description: "We use only genuine ancient techniques and never compromise on the integrity of our practices.",
    icon: IconShield,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10"
  },
  {
    title: "Compassion",
    description: "Every spell is cast with love and genuine care for your wellbeing and transformation.",
    icon: IconHeart,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in our practice and continuously improve our methods.",
    icon: IconStar,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10"
  },
  {
    title: "Transformation",
    description: "Our ultimate goal is to help you achieve lasting positive change in your life.",
    icon: IconSparkles,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const team = [
  {
    name: "Master Elena",
    title: "Lead Spell Caster",
    experience: "15 years",
    specialties: ["Love Spells", "Healing Rituals", "Protection Magic"],
    description: "Elena has been practicing the ancient arts for over 15 years, specializing in love and healing magic. She studied under master practitioners in Tibet and Peru.",
    image: "👩‍🦳"
  },
  {
    name: "Sage Marcus",
    title: "Energy Healer",
    experience: "12 years",
    specialties: ["Abundance Magic", "Career Success", "Financial Spells"],
    description: "Marcus is a certified energy healer who combines ancient wisdom with modern techniques to help clients achieve financial and career success.",
    image: "🧙‍♂️"
  },
  {
    name: "Priestess Luna",
    title: "Crystal Specialist",
    experience: "10 years",
    specialties: ["Crystal Healing", "Moon Magic", "Protection Spells"],
    description: "Luna is a master of crystal healing and moon magic, using the natural energies of stones and celestial bodies to enhance spell potency.",
    image: "🌙"
  }
];

const timeline = [
  {
    year: "2008",
    title: "The Beginning",
    description: "Master Elena began her journey into the mystical arts, studying under ancient practitioners in remote monasteries."
  },
  {
    year: "2015",
    title: "First Practice",
    description: "Elena opened her first practice, helping friends and family with simple spells and energy work."
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Sage Marcus and Priestess Luna joined the practice, bringing their unique specialties and expertise."
  },
  {
    year: "2020",
    title: "Online Platform",
    description: "We launched our online platform, making our services accessible to people worldwide."
  },
  {
    year: "2023",
    title: "10,000+ Spells",
    description: "We reached the milestone of casting over 10,000 spells with high client satisfaction."
  }
];

const principles = [
  {
    title: "Ethical Practice",
    description: "We never use dark magic or harmful practices. All our spells are based on positive energy and ancient wisdom."
  },
  {
    title: "Personalized Approach",
    description: "Every spell is tailored to your specific needs, intentions, and energy signature for enhanced effectiveness."
  },
  {
    title: "Respect for Tradition",
    description: "We honor the ancient traditions and respect the sacred nature of spell casting and energy work."
  },
  {
    title: "Client Confidentiality",
    description: "Your personal information and spell details are kept completely confidential and secure."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="About Our Mystical Practice"
            subtitle="Our Story"
            description="Discover the ancient wisdom and modern expertise behind our powerful spell casting services. Learn about our master practitioners and the values that guide our mystical work."
            centered
          />
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that everyone deserves to live a life filled with love, abundance, healing, and success. 
              Our mission is to harness the ancient power of spell casting and energy work to help you transform 
              your life and achieve your deepest desires.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Through years of study and practice, we have mastered the art of combining ancient mystical traditions 
              with modern energy work to create powerful, personalized spells that deliver real results. Similar to 
              the quality spiritual services you might find on Etsy, we provide authentic, personalized mystical 
              experiences with the added benefit of dedicated practitioner support.
            </p>
            <div className="flex items-center gap-4">
              <IconMoon className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-foreground">Ancient Wisdom</span>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <IconSparkles className="w-32 h-32 text-primary/30" />
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Our Core Values"
          description="The principles that guide everything we do"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionHeader
          title="Meet Our Master Practitioners"
          description="The skilled practitioners behind our powerful spells"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} hover>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-accent mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.experience} of experience
                </p>
                <p className="text-muted-foreground mb-6">
                  {member.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Specialties:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Our Journey"
          description="The evolution of our mystical practice over the years"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles Section */}
      <Section>
        <SectionHeader
          title="Our Principles"
          description="The ethical foundation of our practice"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our master practitioners guide you through your mystical transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="mystical" size="lg" className="text-lg px-8 py-4">
              Browse Our Spells
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
