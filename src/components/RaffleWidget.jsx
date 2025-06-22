import { useState } from 'react';

const RaffleWidget = () => {
  const BASE_URL = "https://parislore-backend.onrender.com";
  const [message, setMessage] = useState("");

  const handleBuyTicket = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/raffle-ticket`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setMessage(`✅ You have ${data.tickets} ticket(s)`);
      } else {
        throw new Error();
      }
    } catch (err) {
      setMessage("❌ Error, try again.");
    }
  };

  const handleStripeCheckout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/create-checkout-session`, { method: 'POST' });
      const data = await res.json();
      if (data.sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
      } else {
        throw new Error();
      }
    } catch (err) {
      setMessage("❌ Stripe error.");
    }
  };

  return (
    <div className="p-6 my-6 bg-white rounded-md shadow-md space-y-4 font-lora">
      <h2 className="text-xl font-bold text-[#006BA6] font-playfair">ParisLore Raffle Widget</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleBuyTicket}
          className="bg-[#006BA6] text-white px-4 py-2 rounded hover:bg-[#E63946] transition"
        >
          Buy €1 Raffle Ticket
        </button>
        <button
          onClick={handleStripeCheckout}
          className="text-[#006BA6] border border-[#006BA6] px-4 py-2 rounded hover:bg-[#E63946] hover:text-white transition"
        >
          Proceed to Payment
        </button>
      </div>
      {message && <p className="text-sm text-gray-700 font-medium">{message}</p>}
    </div>
  );
};

export default RaffleWidget;
