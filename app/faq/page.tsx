'use client';

import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconChevronDown, IconChevronUp, IconHelp, IconShield, IconClock, IconStar } from "@tabler/icons-react";
import { useState } from "react";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: IconHelp
  },
  {
    id: "spells",
    title: "About Spells",
    icon: IconStar
  },
  {
    id: "process",
    title: "Process & Timing",
    icon: IconClock
  },
  {
    id: "safety",
    title: "Safety & Ethics",
    icon: IconShield
  },
  {
    id: "etsy",
    title: "Etsy & Similar Services",
    icon: IconShield
  }
];

const faqs = {
  general: [
    {
      question: "What is spell casting and how does it work?",
      answer: "Spell casting is an ancient practice that harnesses natural energies and cosmic forces to create positive change in your life. Our spells work by aligning your personal energy with universal forces to manifest your desires. We use traditional techniques combined with modern energy work to create powerful, personalized experiences."
    },
    {
      question: "Are your spells real and effective?",
      answer: "Yes, our spells are based on authentic ancient traditions and have helped over 10,000 clients achieve their goals. We maintain a 98% success rate and have countless testimonials from satisfied clients. Our master practitioners have decades of experience and use only genuine, time-tested methods."
    },
    {
      question: "Do I need to believe in magic for the spells to work?",
      answer: "While belief can enhance the effectiveness, it's not strictly necessary. Our spells work on energy levels that exist regardless of personal beliefs. Many of our most successful clients were initially skeptical but experienced remarkable results. The key is being open to positive change."
    },
    {
      question: "What makes your spells different from others?",
      answer: "Our spells are personalized to your specific situation and energy signature. We use authentic ancient techniques, not generic templates. Our master practitioners have decades of experience and we maintain the highest ethical standards. Each spell is cast during optimal cosmic alignments for maximum effectiveness."
    },
    {
      question: "Are your services similar to what I can find on Etsy?",
      answer: "Yes, our mystical services are similar to the spiritual and metaphysical offerings you might find on Etsy. Like many Etsy sellers who offer spiritual services, we provide personalized spell casting, energy work, and mystical consultations. However, we focus exclusively on spell casting services with a more comprehensive approach and dedicated practitioner support."
    },
    {
      question: "Do you follow similar policies to Etsy sellers?",
      answer: "We follow similar ethical guidelines to reputable Etsy spiritual sellers. Like Etsy's policies for metaphysical services, we provide clear descriptions of our services, maintain transparency about our practices, offer refunds for service delivery issues, and never guarantee specific outcomes. We also respect client privacy and provide personalized, authentic spiritual services."
    }
  ],
  spells: [
    {
      question: "What types of spells do you offer?",
      answer: "We offer spells in five main categories: Love & Romance (attracting soulmates, healing relationships), Money & Abundance (financial success, career advancement), Protection & Cleansing (removing negative energy, psychic protection), Healing & Wellness (physical, emotional, spiritual healing), and Luck & Success (opportunities, good fortune). We also offer a Complete Mystical Package that combines all five."
    },
    {
      question: "How do I choose the right spell for me?",
      answer: "Consider what area of your life needs the most attention or change. Read the detailed descriptions of each spell and trust your intuition. If you're unsure, our Complete Mystical Package covers all areas of life transformation. You can also contact us for a personalized consultation to help determine the best approach."
    },
    {
      question: "Can I order multiple spells at once?",
      answer: "Yes, you can order multiple individual spells or choose our Complete Mystical Package which includes all five spell categories. When ordering multiple spells, we'll coordinate the timing to ensure optimal energy flow and avoid conflicts between different types of magic."
    },
    {
      question: "Are there any spells you don't offer?",
      answer: "We don't offer spells that harm others, manipulate free will, or use dark magic. We also don't offer spells for illegal activities or to cause harm to anyone. All our spells are based on positive energy and are designed to bring about positive change in your life."
    }
  ],
  process: [
    {
      question: "How long does the spell casting process take?",
      answer: "The entire process typically takes 3-7 days from purchase to completion. This includes personalization (24 hours), preparation (1-3 days), and casting during optimal cosmic alignment. You'll receive updates at each stage of the process."
    },
    {
      question: "When will I see results?",
      answer: "Most clients begin to see results within 7-30 days, though some experience changes immediately. The timing depends on your specific situation, the type of spell, and how open you are to receiving the energy. We provide guidance on how to maintain and enhance the spell's effects."
    },
    {
      question: "Do I need to do anything after the spell is cast?",
      answer: "We'll provide you with specific guidance for maintaining your spell's effects. This may include meditation, affirmations, or simple rituals. The key is to stay positive and open to receiving the changes the spell is bringing into your life."
    },
    {
      question: "What if I don't see results?",
      answer: "If you don't see results within 30 days, we offer a free consultation to assess the situation. Sometimes a different approach or additional energy work is needed. We are committed to providing quality service and will work with you to address any concerns."
    }
  ],
  safety: [
    {
      question: "Are your spells safe?",
      answer: "Yes, all our spells are completely safe and based on positive energy work. We never use dark magic or harmful practices. Our spells are designed to bring about positive change and healing in your life. We follow strict ethical guidelines and only use ancient, time-tested methods."
    },
    {
      question: "Will the spells have any negative side effects?",
      answer: "Our spells are designed to bring positive changes. We use only positive energy and never work with dark forces. You may experience increased positivity, better energy, and a general sense of well-being as your life improves."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely. We take your privacy very seriously. All personal information is kept completely confidential and secure. We never share your details with third parties and only use your information to personalize your spell and provide updates on the process."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "We offer a 30-day refund policy for our service delivery. If you're not satisfied with our service, we'll provide a full refund. We want you to feel satisfied with your experience with our mystical services."
    },
    {
      question: "How do your policies compare to Etsy's spiritual services?",
      answer: "Our policies align with Etsy's guidelines for spiritual and metaphysical services. Like Etsy sellers, we provide clear service descriptions, maintain ethical practices, offer appropriate refund policies, and never make unrealistic promises. We follow the same principles of transparency, authenticity, and client protection that reputable Etsy spiritual sellers maintain."
    },
    {
      question: "Are your services legal and compliant like Etsy offerings?",
      answer: "Yes, our services are provided in compliance with applicable laws and regulations, similar to legitimate spiritual services on Etsy. We operate as a spiritual consultation service, providing energy work and mystical guidance. Like Etsy's policy for metaphysical services, we make no medical claims and recommend consulting healthcare professionals for health-related concerns."
    }
  ],
  etsy: [
    {
      question: "How are your services similar to Etsy spiritual sellers?",
      answer: "Our services are very similar to what you'd find from reputable spiritual sellers on Etsy. We offer personalized spell casting, energy work, and mystical consultations just like many Etsy metaphysical shops. The main difference is that we focus exclusively on spell casting services with dedicated practitioner support, rather than selling physical items alongside services."
    },
    {
      question: "Do you follow Etsy's policies for spiritual services?",
      answer: "Yes, we follow similar guidelines to Etsy's policies for spiritual and metaphysical services. Like Etsy sellers, we provide clear descriptions, maintain transparency, offer appropriate refunds, never guarantee specific outcomes, and operate as spiritual consultation services. We also respect client privacy and provide authentic, personalized services."
    },
    {
      question: "Why choose you over Etsy spiritual sellers?",
      answer: "While Etsy has many great spiritual sellers, we offer some advantages: dedicated focus on spell casting (not mixed with physical products), comprehensive practitioner support, coordinated multi-spell packages, and specialized expertise in ancient traditions. However, we respect and acknowledge the quality work done by many Etsy spiritual sellers."
    },
    {
      question: "Are your prices competitive with Etsy spiritual services?",
      answer: "Our pricing is competitive with quality spiritual services on Etsy. Individual spells range from $25-$45, similar to Etsy's spiritual consultation services. Our Complete Mystical Package at $125 offers significant value compared to purchasing multiple services separately, which is common practice among Etsy sellers."
    },
    {
      question: "Do you have the same legal protections as Etsy sellers?",
      answer: "Yes, we operate with the same legal framework as legitimate Etsy spiritual sellers. We provide spiritual consultation services, make no medical claims, recommend professional healthcare for health issues, and follow applicable laws and regulations. Like Etsy sellers, we maintain appropriate disclaimers and ethical practices."
    }
  ]
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const currentFaqs = faqs[activeCategory as keyof typeof faqs];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Find answers to the most common questions about our spell casting services, process, and what to expect from your mystical experience."
            centered
          />
        </div>
      </Section>

      {/* Category Navigation */}
      <Section className="py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "mystical" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                {category.title}
              </Button>
            );
          })}
        </div>
      </Section>

      {/* FAQ Items */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <IconChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <IconChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help with any questions about our spells or process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="mystical" size="lg" className="text-lg px-8 py-4">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Browse Spells
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
