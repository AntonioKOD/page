import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Store submitted requests to prevent duplicates
const submittedRequests = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Create a unique identifier for this submission
    const submissionId = `${formData.email}-${formData.spellType}-${Date.now()}`;
    
    // Check if this is a duplicate submission
    if (submittedRequests.has(submissionId)) {
      console.log('Duplicate submission prevented:', submissionId);
      return NextResponse.json(
        { success: true, message: 'Request already processed' },
        { status: 200 }
      );
    }
    
    // Add to submitted requests
    submittedRequests.add(submissionId);
    
    // Log the form data to console for now
    console.log('=== NEW SPELL REQUEST ===');
    console.log('Customer:', formData.fullName, formData.email);
    console.log('Spell:', formData.spellType, formData.spellName, `$${formData.price}`);
    console.log('Intention:', formData.intention);
    console.log('Submission ID:', submissionId);
    console.log('========================');
    
    // Try to send email if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      console.log('📧 Attempting to send email...');
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS length:', process.env.EMAIL_PASS.length);
      
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

    // Format the email content
    const emailContent = `
New Spell Request Received

Customer Information:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Date of Birth: ${formData.dateOfBirth}
- Location: ${formData.location}
- Preferred Contact: ${formData.contactMethod}

Spell Details:
- Spell Type: ${formData.spellType}
- Spell Name: ${formData.spellName}
- Price: $${formData.price}
- Intention: ${formData.intention}
- Timeline: ${formData.timeline || 'Not specified'}
- Previous Experience: ${formData.previousExperience || 'None'}

Spell-Specific Information:
- Current Status: ${formData.currentStatus || 'Not provided'}
- Specific Target: ${formData.specificTarget || 'Not provided'}
- Current Situation: ${formData.currentSituation || 'Not provided'}
- Specific Goals: ${formData.specificGoals || 'Not provided'}
- Obstacles: ${formData.obstacles || 'Not provided'}
- Previous Work: ${formData.previousWork || 'Not provided'}

Additional Information:
- Special Instructions: ${formData.specialInstructions || 'None'}
- Preferred Timing: ${formData.preferredTiming || 'Not specified'}

Consent: ${formData.consent ? 'Yes' : 'No'}
Submitted At: ${formData.submittedAt}

---
This form was submitted through your spells website.
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'antonio_kodheli@icloud.com',
      subject: `New ${formData.spellType} Spell Request from ${formData.fullName}`,
      text: emailContent,
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
    };

        // Test connection first
        await transporter.verify();
        console.log('Gmail connection verified successfully');
        
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to antonio_kodheli@icloud.com');
      } catch (emailError) {
        console.error('❌ Gmail authentication failed:');
        console.error('Error details:', emailError);
        console.log('💡 Make sure:');
        console.log('1. EMAIL_USER is your full Gmail address (e.g., yourname@gmail.com)');
        console.log('2. EMAIL_PASS is your 16-character App Password (not your regular password)');
        console.log('3. 2-Factor Authentication is enabled on your Gmail account');
        console.log('4. You generated an App Password specifically for this application');
        console.log('Form data logged to console instead');
      }
    } else {
      console.log('No email credentials configured - form data logged to console');
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
