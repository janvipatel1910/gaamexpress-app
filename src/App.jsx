import { useState } from 'react';

export default function VillageDeliveryPrototype() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const restaurants = [
    {
      name: 'Shree Krishna Restaurant',
      food: 'Punjabi • Gujarati • Fast Food',
      time: '25-35 mins',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Jay Ambe Tea & Snacks',
      food: 'Tea • Sandwich • Snacks',
      time: '15-20 mins',
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Village Fresh Grocery',
      food: 'Daily Essentials • Grocery',
      time: '30-40 mins',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const whatsappNumber = '919999999999';

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      'Hello GaamExpress! I would like to place an order.'
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 text-gray-800">

      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">GaamExpress</h1>
            <p className="text-sm text-gray-600">
              Local Village Delivery Platform
            </p>
          </div>

          <nav className="flex gap-6 text-sm md:text-base font-medium items-center">
            <a href="#home" className="hover:text-orange-600 transition">
              Home
            </a>

            <a href="#restaurants" className="hover:text-orange-600 transition">
              Restaurants
            </a>

            <a href="#how" className="hover:text-orange-600 transition">
              How It Works
            </a>

            <a href="#contact" className="hover:text-orange-600 transition">
              Contact
            </a>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow-lg transition font-semibold">
              Order Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Delicious Food Delivered Across Your Village 🍛
          </h2>

          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-medium shadow-sm">
            🚀 Fast Local Delivery • Trusted Village Service
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
            Order food, snacks, groceries and more from your favorite local
            shops and restaurants. Fast delivery. Trusted local service.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
              Order Now
            </button>

            <button className="bg-white hover:bg-gray-100 transition px-6 py-3 rounded-2xl shadow-lg font-semibold border border-gray-200">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40">
          <h3 className="text-2xl font-bold mb-6 text-orange-600">
            Quick Order
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="text"
              placeholder="Village / Address"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="What would you like to order?"
              rows="4"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-4 rounded-2xl font-semibold shadow-lg"
            >
              Send Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">
              500+
            </h3>

            <p className="text-gray-600 font-medium">
              Orders Delivered
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">
              20+
            </h3>

            <p className="text-gray-600 font-medium">
              Restaurant Partners
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">
              4.9★
            </h3>

            <p className="text-gray-600 font-medium">
              Customer Rating
            </p>
          </div>

        </div>
      </section>

      {/* Restaurants */}
      <section
        id="restaurants"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Popular Local Partners
          </h2>

          <p className="text-gray-600 text-lg">
            Trusted restaurants and shops from your nearby area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">
                    {restaurant.name}
                  </h3>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {restaurant.rating}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {restaurant.food}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    ⏱ {restaurant.time}
                  </span>
                   <button
  onClick={() => setSelectedRestaurant(restaurant)}
  className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-xl font-medium"
>
  View Menu
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="bg-white/60 backdrop-blur-lg py-20 mt-10"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It Works
            </h2>

            <p className="text-gray-600 text-lg">
              Simple ordering process for village customers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Customer places order',
              'Restaurant accepts order',
              'Delivery partner picks up food',
              'Food delivered to home'
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>
{/* Premium Menu Modal */}
{selectedRestaurant && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">

    <div className="bg-white rounded-3xl max-w-xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">

      {/* Close Button */}
      <button
        onClick={() => setSelectedRestaurant(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl"
      >
        ×
      </button>

      {/* Restaurant Image */}
      <img
        src={selectedRestaurant.image}
        alt={selectedRestaurant.name}
        className="w-full h-60 object-cover rounded-2xl mb-6"
      />

      {/* Restaurant Info */}
      <h2 className="text-4xl font-bold mb-2">
        {selectedRestaurant.name}
      </h2>

      <p className="text-gray-600 mb-8">
        {selectedRestaurant.food}
      </p>

      {/* Menu Items */}
      <div className="space-y-5">

        {/* Item 1 */}
        <div className="flex justify-between items-center bg-orange-50 p-5 rounded-2xl hover:shadow-lg transition">

          <div>
            <h3 className="text-xl font-semibold">
              Paneer Pizza 🍕
            </h3>

            <p className="text-gray-500 text-sm">
              Loaded with cheese and fresh paneer
            </p>
          </div>

          <div className="text-right">
            <p className="font-bold text-orange-600 text-lg">
              ₹199
            </p>

            <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm">
              Add
            </button>
          </div>

        </div>

        {/* Item 2 */}
        <div className="flex justify-between items-center bg-orange-50 p-5 rounded-2xl hover:shadow-lg transition">

          <div>
            <h3 className="text-xl font-semibold">
              Gujarati Thali 🥘
            </h3>

            <p className="text-gray-500 text-sm">
              Traditional homemade Gujarati meal
            </p>
          </div>

          <div className="text-right">
            <p className="font-bold text-orange-600 text-lg">
              ₹249
            </p>

            <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm">
              Add
            </button>
          </div>

        </div>

        {/* Item 3 */}
        <div className="flex justify-between items-center bg-orange-50 p-5 rounded-2xl hover:shadow-lg transition">

          <div>
            <h3 className="text-xl font-semibold">
              Masala Tea ☕
            </h3>

            <p className="text-gray-500 text-sm">
              Fresh hot village style chai
            </p>
          </div>

          <div className="text-right">
            <p className="font-bold text-orange-600 text-lg">
              ₹30
            </p>

            <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm">
              Add
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Button */}
      <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold shadow-lg transition text-lg">
        Proceed to Checkout
      </button>

    </div>
  </div>
)}
{/* Footer */}
<footer
  id="contact"
  className="bg-gray-900 text-white py-12 mt-10"
>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">
              GaamExpress
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Connecting villages with fast and trusted local delivery services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Restaurants</li>
              <li>Become a Partner</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-300">
              Email: hello@gaamexpress.com
            </p>

            <p className="text-gray-300 mt-2">
              WhatsApp: +91 99999 99999
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          © 2026 GaamExpress • Built by Janvi Patel
        </div>
      </footer>
    </div>
  );
}