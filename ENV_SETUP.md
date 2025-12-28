# Environment Setup

## .env File Location

The `.env` file should be placed in the **Hospital** folder (parent directory):

```
Hospital/
├── .env                    ← Place .env file here
├── mobile project/
└── hospital project/
```

Both projects are configured to look for `.env` in:
1. Their own directory first
2. The parent directory (Hospital folder)

## Required Environment Variables

Create a `.env` file in the `Hospital` folder with:

```env
# Supabase Configuration (REQUIRED)
SUPABASE_URL=your_supabase_url_here
SUPABASE_KEY=your_supabase_key_here

# JWT Configuration (shared between projects)
JWT_SECRET=anagha-hospital-solutions-secret-key-2024

# Server Configuration
SERVER_HOST=127.0.0.1
# Mobile project uses port 8000 (default)
# Web project uses port 3000 (default)

# Razorpay (optional)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email Configuration (optional)
SMTP_HOST=mail.anaghasafar.com
SMTP_PORT=587
SMTP_USERNAME=info@anaghasafar.com
SMTP_PASSWORD=your_password
```

## Verification

Both projects will automatically detect the `.env` file in the parent directory and use it.

To verify:
1. Place `.env` in `/Users/rahulsharma/Desktop/Hospital/`
2. Run either project - it should connect to Supabase

