# Setting up EmailJS for the Contact Form

1. Create an account at https://www.emailjs.com/
2. In the EmailJS dashboard create a new **Service** (e.g., Gmail, SMTP provider) — copy the **Service ID**.
3. Create an **Email Template** and note the **Template ID**. Use variables like `from_name`, `from_email`, `phone`, `subject`, `message`.
4. From the EmailJS dashboard get your **Public Key** (the JS public key).
5. Copy `.env.example` to `.env` or `.env.local` in the project root and set:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

6. Restart the dev server (Vite) so environment variables load.

Notes:
- The site uses `@emailjs/browser` to send emails from the browser. Keep your public key private enough (do not commit secrets).
- In your EmailJS template ensure the parameter names match what the form sends: `from_name`, `from_email`, `phone`, `subject`, `message`.
