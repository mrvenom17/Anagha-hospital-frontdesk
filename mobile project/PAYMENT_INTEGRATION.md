# Payment Gateway Integration Guide

## ✅ Complete Payment System Implemented

### Features:
1. **Razorpay Integration** - Primary payment gateway
2. **UPI Fallback** - Works without Razorpay credentials
3. **Payment Verification** - Secure signature verification
4. **Payment Management** - Status tracking, refunds, history
5. **Database Integration** - All payments stored in Supabase

## 📋 Setup Instructions

### 1. Razorpay Setup (Optional but Recommended)

1. **Create Razorpay Account:**
   - Go to https://razorpay.com
   - Sign up and complete KYC
   - Get your API keys from Dashboard → Settings → API Keys

2. **Add to `.env` file:**
   ```env
   RAZORPAY_KEY_ID=your_key_id_here
   RAZORPAY_KEY_SECRET=your_key_secret_here
   ```

3. **Configure Webhook:**
   - In Razorpay Dashboard → Settings → Webhooks
   - Add webhook URL: `https://your-domain.com/api/payments/webhook`
   - Enable events: `payment.captured`, `payment.failed`

### 2. Database Setup

Run the updated SQL schema in Supabase:
```bash
# The payments table is already in supabase_schema.sql
# Just run the migration if you haven't already
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

## 🔄 Payment Flow

### Appointment/Operation Booking Flow:

1. **User fills booking form** → Selects hospital, date, time
2. **Click "Proceed to Payment"** → System calculates fee
3. **Create Payment Order** → API creates Razorpay order
4. **User makes payment** → Via Razorpay checkout or UPI
5. **Payment Verification** → Server verifies payment signature
6. **Booking Confirmed** → Appointment/Operation saved with payment status

## 📊 Payment Endpoints

### Create Payment Order
```
POST /api/payments/create-order
Body: {
  "type": "appointment" | "operation",
  "hospital_id": 1,
  "patient_name": "John Doe",
  "patient_mobile": "9876543210",
  "amount": 500.0,  // Optional, will calculate if not provided
  "metadata": {
    "specialty": "surgery"  // For operations
  }
}
```

### Verify Payment
```
POST /api/payments/verify
Body: {
  "order_id": "order_xxx",
  "payment_id": "pay_xxx",
  "signature": "signature_xxx"
}
```

### Get Payment Status
```
GET /api/payments/status/{order_id}
```

### Get Payment History
```
GET /api/payments/history/{patient_mobile}
```

### Request Refund
```
POST /api/payments/refund
Body: {
  "payment_id": "pay_xxx",
  "amount": 500.0,  // Optional, full refund if not provided
  "reason": "Cancellation"
}
```

## 💰 Fee Calculation

### Default Fees:
- **Appointment:** ₹500
- **Operation:** ₹5000 (base)
  - Surgery: ₹7,500 (1.5x)
  - Ortho: ₹6,500 (1.3x)
  - Gyn: ₹6,000 (1.2x)
  - Cardio: ₹10,000 (2.0x)

### Customization:
Update `payment_gateway.py` → `calculate_fee()` method to:
- Fetch fees from database
- Set per-hospital pricing
- Add dynamic pricing based on date/time

## 🔒 Security Features

1. **Signature Verification** - All payments verified using HMAC SHA256
2. **Webhook Support** - Automatic payment confirmation
3. **Transaction Tracking** - All payments logged in database
4. **Refund Management** - Secure refund processing

## 📱 Flutter Integration

### Using Payment Service:

```dart
import '../services/payment_service.dart';

// Create payment order
final order = await PaymentService.createPaymentOrder(
  type: 'appointment',
  hospitalId: hospitalId,
  patientName: name,
  patientMobile: mobile,
  amount: 500.0,
);

// After payment, verify
final verified = await PaymentService.verifyPayment(
  orderId: order['order_id'],
  paymentId: paymentId,
  signature: signature,
);
```

### Razorpay Flutter SDK (Optional):

For better UX, integrate Razorpay Flutter SDK:
```yaml
dependencies:
  razorpay_flutter: ^1.3.0
```

## 🧪 Testing

### Test Mode:
1. Use Razorpay test keys
2. Test cards: https://razorpay.com/docs/payments/test-cards/
3. Test UPI: Use test UPI IDs

### Test Payment Flow:
```bash
# 1. Create order
curl -X POST http://127.0.0.1:8000/api/payments/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "type": "appointment",
    "hospital_id": 1,
    "patient_name": "Test User",
    "patient_mobile": "9876543210",
    "amount": 500.0
  }'

# 2. Verify payment (after payment)
curl -X POST http://127.0.0.1:8000/api/payments/verify \
  -H "Content-Type: application/json" \
  -d '{
    "order_id": "order_xxx",
    "payment_id": "pay_xxx",
    "signature": "signature_xxx"
  }'
```

## 📊 Payment Status

- **pending** - Order created, payment not completed
- **completed** - Payment successful and verified
- **failed** - Payment failed
- **refunded** - Full refund processed
- **partially_refunded** - Partial refund processed

## 🔄 Refund Process

1. **Request Refund** → Call `/api/payments/refund`
2. **Process Refund** → Razorpay processes refund
3. **Update Status** → Payment status updated to "refunded"
4. **Notify User** → Email/SMS notification sent

## 🚨 Important Notes

1. **Non-Refundable Policy** - Display clearly to users
2. **Payment Verification** - Always verify on server side
3. **Webhook Security** - Verify webhook signatures
4. **Error Handling** - Handle payment failures gracefully
5. **Logging** - Log all payment attempts for audit

## 📝 Next Steps

1. ✅ Payment gateway integrated
2. ✅ Database schema updated
3. ✅ API endpoints created
4. ⏳ Update Flutter screens (in progress)
5. ⏳ Add Razorpay Flutter SDK (optional)
6. ⏳ Configure webhooks
7. ⏳ Test payment flow

## 🆘 Troubleshooting

### Payment Not Verifying:
- Check Razorpay keys in `.env`
- Verify signature calculation
- Check webhook configuration

### UPI Not Working:
- Ensure UPI IDs are configured in hospital settings
- Check UPI app is installed on device
- Verify UPI deep link format

### Database Errors:
- Run SQL migration for payments table
- Check Supabase connection
- Verify table permissions

## ✅ Status

- ✅ Payment gateway module created
- ✅ Payment endpoints implemented
- ✅ Database schema updated
- ✅ Payment service (Flutter) created
- ⏳ Booking screens update (next step)

