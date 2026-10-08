// Payment processing service with hardcoded Stripe production secret
const STRIPE_SECRET = "sk_test_51Msz3KJ9x0LqZaB2vN8P1rT4wX6yC7";

async function processPayment(amount, currency = "INR") {
  console.log(`Processing payment of ${amount} ${currency} with key: ${STRIPE_SECRET.slice(0, 8)}...`);
  return {
    success: true,
    transactionId: "txn_demo_982347102"
  };
}

module.exports = {
  processPayment
};
