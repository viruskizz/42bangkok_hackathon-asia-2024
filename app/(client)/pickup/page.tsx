const timeStam = [
  "Cooking",
  "Picked up from the resterant",
  "Delivery to dropbox 1",
  "Pick up from dropbox 1",
  "Delivery to dropbox 2",
  "complete"
]


export default function OrderListPage() {
  return(
    <div className="h-screen p-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Track your order</h2>
      <div className="relative">
        {timeStam.map((step, index) => (
          <div key={index} className="flex items-start mb-6 last:mb-0">
            <div className="absolute left-2 top-0 w-0.5 h-64 mt-2 bg-white" />
            <div className="relative z-10 w-4 h-4 rounded-full bg-white mr-3 mt-1" />
            <span className="text-lg text-white">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
