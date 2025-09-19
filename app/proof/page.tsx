import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconStar, IconQuote, IconHeart, IconCoins, IconShield, IconSparkles, IconUsers, IconAward } from "@tabler/icons-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "New York, NY",
    spell: "Love & Romance Spell",
    rating: 5,
    text: "I was skeptical at first, but within two weeks of the love spell, I met my soulmate. We've been together for 8 months now and I've never been happier. The energy shift was incredible.",
    date: "2 months ago",
    verified: true
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Los Angeles, CA",
    spell: "Abundance & Wealth Ritual",
    rating: 5,
    text: "The abundance spell worked beyond my expectations. I got a promotion and a 40% salary increase within 6 weeks. The financial opportunities just started flowing to me naturally.",
    date: "1 month ago",
    verified: true
  },
  {
    id: 3,
    name: "Emma L.",
    location: "Chicago, IL",
    spell: "Healing & Wellness Spell",
    rating: 5,
    text: "I was struggling with chronic anxiety and depression. The healing spell helped me find peace and balance. I feel like a completely different person - more confident and at ease.",
    date: "3 months ago",
    verified: true
  },
  {
    id: 4,
    name: "David K.",
    location: "Miami, FL",
    spell: "Protection & Cleansing",
    rating: 5,
    text: "I was dealing with a lot of negative energy from a toxic work environment. The protection spell created a shield around me and the negative people just started avoiding me.",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: 5,
    name: "Jessica T.",
    location: "Seattle, WA",
    spell: "Complete Mystical Package",
    rating: 5,
    text: "I ordered the complete package and my life has transformed completely. New job, new relationship, better health - everything aligned perfectly. Worth every penny.",
    date: "1 month ago",
    verified: true
  },
  {
    id: 6,
    name: "Robert H.",
    location: "Austin, TX",
    spell: "Luck & Success Charm",
    rating: 5,
    text: "The luck spell helped me land my dream job and win a small lottery prize. The opportunities just keep coming. I feel like I'm living in a different reality now.",
    date: "3 weeks ago",
    verified: true
  }
];

const stats = [
  {
    number: "10,000+",
    label: "Spells Cast",
    icon: IconSparkles,
    description: "Spell castings performed for our clients"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: IconAward,
    description: "Client satisfaction with our service delivery"
  },
  {
    number: "5,000+",
    label: "Happy Clients",
    icon: IconUsers,
    description: "Transformed lives through our mystical services"
  },
  {
    number: "15",
    label: "Years Experience",
    icon: IconStar,
    description: "Master practitioners with decades of experience"
  }
];

const successStories = [
  {
    category: "Love",
    title: "From Single to Soulmate",
    description: "Sarah went from being single for 5 years to meeting her soulmate within 2 weeks of our love spell.",
    icon: IconHeart,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10"
  },
  {
    category: "Money",
    title: "Career Breakthrough",
    description: "Michael received a promotion and 40% salary increase after our abundance ritual.",
    icon: IconCoins,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10"
  },
  {
    category: "Healing",
    title: "Anxiety to Peace",
    description: "Emma overcame chronic anxiety and depression through our healing spell work.",
    icon: IconShield,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10"
  }
];

const certifications = [
  {
    title: "Certified Energy Healer",
    organization: "International Association of Energy Healers",
    year: "2023"
  },
  {
    title: "Master Practitioner",
    organization: "Ancient Mystical Arts Institute",
    year: "2022"
  },
  {
    title: "Crystal Therapy Specialist",
    organization: "Crystal Healing Academy",
    year: "2021"
  },
  {
    title: "Reiki Master Teacher",
    organization: "Usui Reiki Ryoho",
    year: "2020"
  }
];

export default function ProofPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Proof of Our Power"
            subtitle="Evidence"
            description="Real testimonials, success stories, and evidence of our spell casting effectiveness. See how we've transformed thousands of lives through ancient mystical arts."
            centered
          />
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <SectionHeader
          title="Our Track Record"
          description="Numbers that speak to our success and client satisfaction"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Client Testimonials"
          description="Real stories from real people who have experienced our spell casting power"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <IconQuote className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{testimonial.spell}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success Stories Section */}
      <Section>
        <SectionHeader
          title="Success Stories"
          description="Detailed accounts of how our spells have transformed lives"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card key={index} hover>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${story.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 ${story.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Our Credentials"
          description="Professional certifications and qualifications of our master practitioners"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {cert.organization}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
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
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied clients who have transformed their lives through our powerful spells.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="mystical" size="lg" className="text-lg px-8 py-4">
              Browse Our Spells
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
