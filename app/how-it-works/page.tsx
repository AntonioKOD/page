import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconUser, IconShoppingCart, IconWand, IconSparkles, IconCheck, IconClock } from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Spell",
    description: "Browse our collection of powerful spells and select the one that resonates with your intentions.",
    icon: IconWand,
    details: [
      "Read detailed descriptions of each spell",
      "Understand the energy and purpose",
      "Choose based on your specific needs",
      "Consider our Complete Mystical Package for maximum effect"
    ]
  },
  {
    number: "02",
    title: "Purchase & Provide Details",
    description: "Complete your purchase and share your specific intentions and personal details.",
    icon: IconShoppingCart,
    details: [
      "Secure payment processing",
      "Share your full name and birth date",
      "Describe your specific situation",
      "Set your intentions clearly"
    ]
  },
  {
    number: "03",
    title: "Personalized Ritual Preparation",
    description: "Our master practitioners prepare your spell with personalized energy work and ancient techniques.",
    icon: IconUser,
    details: [
      "Personalized energy alignment",
      "Ancient ritual preparation",
      "Crystal and herb selection",
      "Sacred timing consideration"
    ]
  },
  {
    number: "04",
    title: "Spell Casting & Activation",
    description: "Your spell is cast during the optimal cosmic alignment for maximum effectiveness.",
    icon: IconSparkles,
    details: [
      "Performed during optimal moon phases",
      "Sacred timing for your specific spell",
      "Master practitioner energy work",
      "Cosmic alignment activation"
    ]
  },
  {
    number: "05",
    title: "Results & Follow-up",
    description: "Experience the transformation and receive guidance for maintaining the spell's effects.",
    icon: IconCheck,
    details: [
      "Results typically manifest within 7-30 days",
      "Receive detailed guidance for maintenance",
      "Ongoing support and consultation",
      "Additional rituals if needed"
    ]
  }
];

const timeline = [
  {
    time: "Immediate",
    title: "Purchase Confirmation",
    description: "You'll receive an email confirmation with your order details and next steps."
  },
  {
    time: "Within 24 hours",
    title: "Personalization Process",
    description: "Our practitioners begin personalizing your spell based on your specific intentions."
  },
  {
    time: "1-3 days",
    title: "Spell Preparation",
    description: "Your spell is prepared with all necessary materials and energy work."
  },
  {
    time: "3-7 days",
    title: "Spell Casting",
    description: "Your spell is cast during optimal cosmic alignment for enhanced effectiveness."
  },
  {
    time: "7-30 days",
    title: "Results Manifestation",
    description: "You may begin to see the effects of your spell in your daily life."
  }
];

const faqs = [
  {
    question: "How long do the effects last?",
    answer: "The effects of our spells may last 3-6 months, depending on the specific spell and your personal energy. Some spells may have lasting effects, while others may require periodic renewal."
  },
  {
    question: "Do I need to do anything after the spell is cast?",
    answer: "We'll provide you with specific guidance for maintaining your spell's effects. This may include meditation, affirmations, or simple rituals to keep the energy flowing."
  },
  {
    question: "What if I don't see results?",
    answer: "Results vary from person to person, but many clients report changes within 7-30 days. If you don't see results within 30 days, we offer a free consultation and may recast the spell at no additional cost."
  },
  {
    question: "Are the spells safe?",
    answer: "Yes, all our spells are based on positive energy work and ancient wisdom. We never use dark magic or harmful practices. Our spells are designed to bring positive change and healing."
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="How Our Spells Work"
            subtitle="Process"
            description="Discover the ancient art of spell casting and how our master practitioners create powerful, personalized mystical experiences for your transformation."
            centered
          />
        </div>
      </Section>

      {/* Steps Section */}
      <Section>
        <SectionHeader
          title="The 5-Step Process"
          description="From selection to manifestation, here's how we create your personalized mystical experience"
        />
        
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {step.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-primary/30" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-accent" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Timeline & Expectations"
          description="What to expect after you place your order"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <IconClock className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Common questions about our spell casting process"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
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
            Ready to Begin Your Mystical Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your spell and let our master practitioners guide you through your transformation.
          </p>
          <Button variant="mystical" size="lg" className="text-lg px-8 py-4">
            Browse Our Spells
          </Button>
        </div>
      </Section>
    </div>
  );
}

