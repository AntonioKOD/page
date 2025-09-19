import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeader
            title="Terms of Service"
            subtitle="Sacred Agreement"
            description="By engaging with our mystical services, you enter into a sacred agreement that honors both ancient wisdom and modern legal protections."
            centered
          />
        </div>
      </Section>

      {/* Terms Content */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader>
              <h2 className="text-xl font-bold text-orange-800">Important Notice</h2>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 leading-relaxed">
                Our mystical services are provided for entertainment and spiritual guidance purposes only. 
                We do not guarantee specific outcomes, and results may vary from person to person. 
                All services are based on ancient wisdom traditions and modern energy work practices.
              </p>
            </CardContent>
          </Card>

          {/* Service Agreement */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">Service Agreement</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">1. Nature of Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services include spell casting, ritual guidance, spiritual consultation, and mystical products. 
                  These services are based on ancient traditions, energy work, and spiritual practices. 
                  We approach our work with respect for traditional wisdom while acknowledging that results are not scientifically verifiable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">2. Entertainment Purposes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By purchasing our services, you acknowledge and agree that all mystical services are provided 
                  for entertainment and spiritual guidance purposes only. We make no claims about the scientific 
                  validity of our practices or guaranteed outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">3. Personal Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You understand that you are responsible for your own life choices and decisions. 
                  Our services are intended to provide guidance and support, but you maintain full 
                  responsibility for your actions and their consequences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">4. No Medical or Legal Advice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services do not constitute medical, legal, financial, or professional advice. 
                  If you have concerns about medical, legal, or financial matters, please consult 
                  with qualified professionals in those fields.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">5. Refund Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 30-day refund policy for service delivery issues. If you are not satisfied 
                  with the quality of our service delivery (not the results), you may request a refund 
                  within 30 days of purchase. Refunds are not available based on results or outcomes, 
                  as these cannot be guaranteed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">6. Age Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old to purchase our services. If you are under 18, 
                  you must have parental consent to engage with our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">7. Privacy and Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We respect your privacy and maintain confidentiality regarding all personal information 
                  and consultations. Your information will not be shared with third parties without your consent, 
                  except as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">8. Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, we shall not be liable for any direct, indirect, 
                  incidental, special, or consequential damages arising from your use of our services. 
                  Our total liability shall not exceed the amount you paid for the specific service in question.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">9. Modifications to Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page, 
                  and your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">10. Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws. 
                  Any disputes shall be resolved through binding arbitration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sacred Commitment */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <h2 className="text-xl font-bold text-purple-800">Our Sacred Commitment</h2>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 leading-relaxed mb-4">
                While we provide these legal protections, we also make a sacred commitment to you:
              </p>
              <ul className="text-purple-700 space-y-2">
                <li>• We approach our work with integrity, respect, and genuine care for your wellbeing</li>
                <li>• We honor the ancient traditions that guide our practices</li>
                <li>• We maintain the highest standards of service delivery and customer care</li>
                <li>• We respect your spiritual journey and individual beliefs</li>
                <li>• We provide honest guidance based on our knowledge and experience</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-foreground">Contact Information</h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these terms or our services, please contact us. 
                We are committed to addressing your concerns with respect and understanding.
              </p>
            </CardContent>
          </Card>

        </div>
      </Section>
    </div>
  );
}
