# Contact Form Setup Guide

The contact form is configured to send emails directly to `rahmanhamad36@gmail.com` using Formspree.

## Quick Setup (5 minutes):

1. **Go to [Formspree.io](https://formspree.io)** and sign up with your Gmail account
2. **Create a new form** and set the email to `rahmanhamad36@gmail.com`
3. **Copy your form endpoint** (it will look like `https://formspree.io/f/XXXXXXXX`)
4. **Update the form URL** in `src/pages/ContactPage.jsx` line 67:
   ```javascript
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT_HERE', {
   ```
   Replace `YOUR_FORMSPREE_ENDPOINT_HERE` with your actual Formspree endpoint.

5. **Deploy the changes** by committing and pushing to GitHub

## That's it! 
Your contact form will now send emails directly to your Gmail inbox whenever someone fills it out on your portfolio.

## Free Plan Limits:
- 50 submissions per month (upgrade for more)
- Email notifications included
- Spam protection included

The form is already styled and includes:
- ✅ Input validation
- ✅ Loading states  
- ✅ Success/error handling
- ✅ Beautiful animations
- ✅ Responsive design