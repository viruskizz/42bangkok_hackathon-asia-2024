import React from 'react';

const orderSteps = [
  "Accept",
  "Delivery",
  "Complete"
];

export const OrderTrackingTimeline: React.FC = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg max-w-sm">
      <div className="relative">
        {orderSteps.map((step, index) => (
          <div key={index} className="flex items-start mb-6 last:mb-0">
            <div className="absolute left-2 top-0 w-0.5 mt-2 h-28 bg-pink-600" />
            <div className="relative z-10 w-4 h-4 rounded-full bg-pink-600 mr-4 mt-1" />
            <span className="text-lg">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};