import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface SpellFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  location: string;
  contactMethod: string;
  intention: string;
  timeline: string;
  previousExperience: string;
  currentStatus: string;
  specificTarget: string;
  currentSituation: string;
  specificGoals: string;
  obstacles: string;
  previousWork: string;
  specialInstructions: string;
  preferredTiming: string;
  consent: boolean;
  spellType: string;
  spellName: string;
  price: number;
  submittedAt: string;
}

interface SpellFormProps {
  spellType: string;
  spellName: string;
  price: number;
  onSubmit: (data: SpellFormData) => void;
  onClose: () => void;
}

// Payment links for each spell type
const paymentLinks = {
  'Love': 'https://buy.stripe.com/bJecN5fUT4Xr6BMaBtcjS04',
  'Money': 'https://buy.stripe.com/28E8wP8sr2Pje4e7phcjS03', // Abundance & Wealth Ritual
  'Protection': 'https://buy.stripe.com/14A00j0ZZ1Lf6BMaBtcjS02', // Protection & Cleansing
  'Healing': 'https://buy.stripe.com/7sYaEXdML4XrgcmfVNcjS01', // Healing & Wellness Spell
  'Luck': 'https://buy.stripe.com/fZu9ATgYX0Hbd0a4d5cjS00', // Luck & Success Charm
};

export function SpellForm({ spellType, spellName, price, onSubmit, onClose }: SpellFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Customer Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    location: '',
    contactMethod: 'email',
    
    // Spell Details
    intention: '',
    timeline: '',
    previousExperience: '',
    
    // Personal Information
    currentStatus: '',
    specificTarget: '',
    currentSituation: '',
    specificGoals: '',
    obstacles: '',
    previousWork: '',
    
    // Additional
    specialInstructions: '',
    preferredTiming: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Get the payment link for this spell type
    const paymentLink = paymentLinks[spellType as keyof typeof paymentLinks];
    
    if (paymentLink) {
      // Store form data in localStorage for after payment completion
      const formSubmissionData = {
        ...formData,
        spellType,
        spellName,
        price,
        submittedAt: new Date().toISOString()
      };
      
      localStorage.setItem('spellFormData', JSON.stringify(formSubmissionData));
      
      // Submit form data to your email first
      try {
        const response = await fetch('/api/submit-spell', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmissionData),
        });
        
        if (response.ok) {
          // Redirect to Stripe payment
          window.open(paymentLink, '_blank');
          
          // Close modal after a short delay
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          alert('There was an error submitting your form. Please try again.');
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
        setIsSubmitting(false);
      }
    } else {
      // Fallback for spells without payment links - still submit to email
      const formSubmissionData = {
        ...formData,
        spellType,
        spellName,
        price,
        submittedAt: new Date().toISOString()
      };
      
      try {
        const response = await fetch('/api/submit-spell', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmissionData),
        });
        
        if (response.ok) {
          onSubmit(formSubmissionData);
        } else {
          alert('There was an error submitting your form. Please try again.');
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
        setIsSubmitting(false);
      }
    }
  };

  const getSpellSpecificFields = () => {
    switch (spellType) {
      case 'Love':
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Love & Relationship Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Relationship Status *
                </label>
                <select
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select your status</option>
                  <option value="single">Single</option>
                  <option value="dating">Dating</option>
                  <option value="in-relationship">In a relationship</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Target Person Details (if applicable)
                </label>
                <input
                  type="text"
                  name="specificTarget"
                  value={formData.specificTarget}
                  onChange={handleInputChange}
                  placeholder="Name, age, relationship to you"
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Specific Love Goals *
                </label>
                <select
                  name="specificGoals"
                  value={formData.specificGoals}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select your goal</option>
                  <option value="attract-new-love">Attract new love</option>
                  <option value="strengthen-existing">Strengthen existing relationship</option>
                  <option value="reconciliation">Reconcile with ex</option>
                  <option value="self-love">Enhance self-love</option>
                  <option value="marriage">Move toward marriage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What obstacles are you facing?
                </label>
                <textarea
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleInputChange}
                  placeholder="Describe any challenges in your love life"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
          </>
        );

      case 'Money':
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Financial & Career Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Income Level *
                </label>
                <select
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select income range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-75k">$50,000 - $75,000</option>
                  <option value="75k-100k">$75,000 - $100,000</option>
                  <option value="100k-plus">$100,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Financial Goals *
                </label>
                <textarea
                  name="specificGoals"
                  value={formData.specificGoals}
                  onChange={handleInputChange}
                  placeholder="Specific amount, timeline, what you want to achieve"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Income Sources
                </label>
                <input
                  type="text"
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  placeholder="Job, business, investments, etc."
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Career Goals
                </label>
                <textarea
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleInputChange}
                  placeholder="Promotion, new job, business success, etc."
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
          </>
        );

      case 'Protection':
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Protection & Cleansing Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Type of Protection Needed *
                </label>
                <select
                  name="specificGoals"
                  value={formData.specificGoals}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select protection type</option>
                  <option value="psychic">Psychic protection</option>
                  <option value="physical">Physical protection</option>
                  <option value="emotional">Emotional protection</option>
                  <option value="spiritual">Spiritual protection</option>
                  <option value="general">General protection</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Specific Threats or Situations
                </label>
                <textarea
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleInputChange}
                  placeholder="Negative people, situations, entities, etc."
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Previous Protection Methods
                </label>
                <textarea
                  name="previousWork"
                  value={formData.previousWork}
                  onChange={handleInputChange}
                  placeholder="What protection methods have you tried before?"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Living/Work Environment
                </label>
                <input
                  type="text"
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  placeholder="Home, work, or other environments that need protection"
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
          </>
        );

      case 'Healing':
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Healing & Wellness Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Health Conditions (Physical, Mental, Emotional) *
                </label>
                <textarea
                  name="specificGoals"
                  value={formData.specificGoals}
                  onChange={handleInputChange}
                  placeholder="Describe what you're healing from"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Medical Treatment
                </label>
                <textarea
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  placeholder="Medications, therapies, treatments you're currently receiving"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Healing Goals *
                </label>
                <textarea
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleInputChange}
                  placeholder="Specific improvements you want to achieve"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Previous Healing Work
                </label>
                <textarea
                  name="previousWork"
                  value={formData.previousWork}
                  onChange={handleInputChange}
                  placeholder="Therapy, alternative treatments, energy work, etc."
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
          </>
        );

      case 'Luck':
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Luck & Success Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Areas Needing Luck *
                </label>
                <select
                  name="specificGoals"
                  value={formData.specificGoals}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select areas</option>
                  <option value="career">Career</option>
                  <option value="relationships">Relationships</option>
                  <option value="health">Health</option>
                  <option value="finances">Finances</option>
                  <option value="opportunities">Opportunities</option>
                  <option value="all-areas">All areas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Specific Goals
                </label>
                <textarea
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleInputChange}
                  placeholder="Job promotion, business success, new opportunities, etc."
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Challenges
                </label>
                <textarea
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  placeholder="What's currently blocking your success?"
                  rows={3}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline for Results
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within days)</option>
                  <option value="week">Within a week</option>
                  <option value="month">Within a month</option>
                  <option value="quarter">Within 3 months</option>
                  <option value="flexible">Flexible timing</option>
                </select>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      {/* Customer Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customer Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Location/Country *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Contact Method
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spell Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Spell Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Intention/Goal *
            </label>
            <textarea
              name="intention"
              value={formData.intention}
              onChange={handleInputChange}
              placeholder="Describe in detail what you want to achieve with this spell"
              rows={4}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Previous Spell Experience
            </label>
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
              placeholder="Have you had spells cast before? What was your experience?"
              rows={3}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      {/* Spell-Specific Fields */}
      {getSpellSpecificFields()}

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
              placeholder="Any specific requests or instructions for the spell"
              rows={3}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Preferred Timing
            </label>
            <input
              type="text"
              name="preferredTiming"
              value={formData.preferredTiming}
              onChange={handleInputChange}
              placeholder="Specific dates, moon phases, or timing preferences"
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      {/* Consent */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-primary"
              required
            />
            <label className="text-sm text-foreground">
              I agree to the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and acknowledge that mystical services are for entertainment purposes. 
              Results may vary and are not guaranteed. *
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      {paymentLinks[spellType as keyof typeof paymentLinks] && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm">💳</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Secure Payment Process</h4>
                <p className="text-sm text-muted-foreground">
                  After submitting this form, you&apos;ll be redirected to our secure Stripe payment page. 
                  Your spell request will be processed once payment is confirmed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6 border-t">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button 
          type="submit" 
          variant="mystical"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Processing...
            </>
          ) : (
            paymentLinks[spellType as keyof typeof paymentLinks] ? 
              `Proceed to Payment - $${price}` : 
              `Submit Spell Request - $${price}`
          )}
        </Button>
      </div>
    </form>
  );
}
