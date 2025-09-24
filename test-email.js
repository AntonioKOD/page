// Test Gmail configuration
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testGmail() {
  console.log('🔍 Testing Gmail configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length + ' characters' : 'Not set');
  console.log('EMAIL_PASS starts with:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.substring(0, 4) + '...' : 'Not set');
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Missing EMAIL_USER or EMAIL_PASS in .env.local');
    console.log('💡 Make sure your .env.local file contains:');
    console.log('EMAIL_USER=your-gmail@gmail.com');
    console.log('EMAIL_PASS=your-16-character-app-password');
    return;
  }

  if (process.env.EMAIL_PASS.length !== 16) {
    console.error('❌ EMAIL_PASS should be exactly 16 characters');
    console.log('Current length:', process.env.EMAIL_PASS.length);
    return;
  }

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

    console.log('Verifying Gmail connection...');
    await transporter.verify();
    console.log('✅ Gmail connection successful!');
    
    console.log('Sending test email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'antonio_kodheli@icloud.com',
      subject: 'Test Email from Spells Website',
      text: 'This is a test email to verify Gmail configuration.',
      html: '<p>This is a test email to verify Gmail configuration.</p>'
    });
    
    console.log('✅ Test email sent successfully!');
    
  } catch (error) {
    console.error('❌ Gmail test failed:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Authentication failed. Check:');
      console.log('1. Is 2-Factor Authentication enabled on your Gmail?');
      console.log('2. Did you generate an App Password (not your regular password)?');
      console.log('3. Is the App Password exactly 16 characters?');
      console.log('4. Are there any spaces in the App Password?');
    }
  }
}

testGmail();
