import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Log the form data to console
    console.log('=== NEW SPELL REQUEST ===');
    console.log('Customer:', formData.fullName, formData.email);
    console.log('Spell:', formData.spellType, formData.spellName, `$${formData.price}`);
    console.log('Intention:', formData.intention);
    console.log('========================');
    
    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Spells Website <onboarding@resend.dev>', // You can change this
          to: ['antonio_kodheli@icloud.com'],
          subject: `New ${formData.spellType} Spell Request from ${formData.fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
                🔮 New Spell Request
              </h2>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
                <p><strong>Name:</strong> ${formData.fullName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
                <p><strong>Location:</strong> ${formData.location}</p>
                <p><strong>Contact Method:</strong> ${formData.contactMethod}</p>
              </div>

              <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Spell Details</h3>
                <p><strong>Type:</strong> ${formData.spellType}</p>
                <p><strong>Name:</strong> ${formData.spellName}</p>
                <p><strong>Price:</strong> $${formData.price}</p>
                <p><strong>Intention:</strong> ${formData.intention}</p>
                <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
                <p><strong>Previous Experience:</strong> ${formData.previousExperience || 'None'}</p>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Spell-Specific Information</h3>
                <p><strong>Current Status:</strong> ${formData.currentStatus || 'Not provided'}</p>
                <p><strong>Specific Target:</strong> ${formData.specificTarget || 'Not provided'}</p>
                <p><strong>Current Situation:</strong> ${formData.currentSituation || 'Not provided'}</p>
                <p><strong>Specific Goals:</strong> ${formData.specificGoals || 'Not provided'}</p>
                <p><strong>Obstacles:</strong> ${formData.obstacles || 'Not provided'}</p>
                <p><strong>Previous Work:</strong> ${formData.previousWork || 'Not provided'}</p>
              </div>

              <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Additional Information</h3>
                <p><strong>Special Instructions:</strong> ${formData.specialInstructions || 'None'}</p>
                <p><strong>Preferred Timing:</strong> ${formData.preferredTiming || 'Not specified'}</p>
                <p><strong>Consent:</strong> ${formData.consent ? '✅ Yes' : '❌ No'}</p>
                <p><strong>Submitted At:</strong> ${new Date(formData.submittedAt).toLocaleString()}</p>
              </div>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px; text-align: center;">
                This form was submitted through your spells website.
              </p>
            </div>
          `,
        });

        if (error) {
          console.error('Resend error:', error);
        } else {
          console.log('✅ Email sent successfully via Resend:', data);
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    } else {
      console.log('No Resend API key configured - form data logged to console');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Spell request submitted successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting spell request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit spell request. Please try again.' 
      },
      { status: 500 }
    );
  }
}
