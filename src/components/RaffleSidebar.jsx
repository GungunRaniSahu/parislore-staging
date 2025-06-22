import { useState } from 'react';

const RaffleSidebar = () => {
  const [referralCode, setReferralCode] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [status, setStatus] = useState('Loading...');

  const handleJoinRaffle = () => {
    setStatus('✅ You have joined the raffle!');
  };

  const handleRefresh = () => {
    setStatus('🔄 Refreshed raffle status!');
  };

  const handlePayment = () => {
    window.location.href = 'payment.html';
  };

  return (
    <aside className="bg-white p-6 rounded-md shadow-md max-w-md mx-auto my-6 font-lora space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#006BA6] font-playfair mb-1">Join the Raffle</h3>
        <p className="text-sm text-gray-600 mb-4">{status}</p>

        <div className="mb-4">
          <label htmlFor="referral-token-input" className="block text-sm font-medium text-gray-700 mb-1">
            Referral Code (Optional):
          </label>
          <input
            type="text"
            id="referral-token-input"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            placeholder="Enter referral code"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006BA6]"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleJoinRaffle}
            className="bg-[#006BA6] text-white px-4 py-2 rounded hover:bg-[#E63946] transition"
          >
            Join the Raffle
          </button>
          <button
            onClick={handleRefresh}
            className="border border-[#006BA6] text-[#006BA6] px-4 py-2 rounded hover:bg-[#E63946] hover:text-white transition"
          >
            Refresh
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#006BA6] font-playfair mb-2">💳 Purchase more Tickets</h3>
        <div className="mb-4">
          <label htmlFor="ticket-quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Tickets:
          </label>
          <input
            type="number"
            id="ticket-quantity"
            min="1"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006BA6]"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handlePayment}
          className="bg-[#006BA6] text-white px-4 py-2 rounded hover:bg-[#E63946] transition w-full"
        >
          Pay Now
        </button>
      </div>
    </aside>
  );
};

export default RaffleSidebar;
