export default function VillageDeliveryPrototype() {
  const restaurants = [
    {
      name: 'Shree Krishna Restaurant',
      food: 'Punjabi • Gujarati • Fast Food',
      time: '25-35 mins',
      rating: '4.8'
    },
    {
      name: 'Jay Ambe Tea & Snacks',
      food: 'Tea • Sandwich • Snacks',
      time: '15-20 mins',
      rating: '4.6'
    },
    {
      name: 'Village Fresh Grocery',
      food: 'Daily Essentials • Grocery',
      time: '30-40 mins',
      rating: '4.7'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 text-gray-800">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">GaamExpress</h1>
            <p className="text-sm text-gray-600">Local Village Delivery Platform</p>
          </div>

          <nav className="flex gap-6 text-sm md:text-base font-medium">
            <a href="#home" className="hover:text-orange-600 transition">Home</a>
            <a href="#restaurants" className="hover:text-orange-600 transition">Restaurants</a>
            <a href="#how" className="hover:text-orange-600 transition">How It Works</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Delicious Food Delivered Across Your Village 🍛
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Order food, snacks, groceries and more from your favorite local shops and restaurants.
            Fast delivery. Trusted local service.
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

        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40">
          <h3 className="text-2xl font-bold mb-6 text-orange-600">Quick Order</h3>

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

            <button className="w-full bg-green-500 hover:bg-green-600 transition text-white py-4 rounded-2xl font-semibold shadow-lg">
              Send Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant Cards */}
      <section id="restaurants" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Popular Local Partners</h2>
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
              <div className="h-52 bg-gradient-to-r from-orange-400 to-yellow-400"></div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">{restaurant.name}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {restaurant.rating}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{restaurant.food}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">⏱ {restaurant.time}</span>

                  <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-xl font-medium">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white/60 backdrop-blur-lg py-20 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
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

                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Business Model</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Delivery Fees</h3>
              <p>
                Earn delivery charges from each successful order.
              </p>
            </div>

            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Restaurant Commission</h3>
              <p>
                Small commission percentage from restaurant partners.
              </p>
            </div>

            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Subscription Plans</h3>
              <p>
                Monthly premium listings and promotions for local shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">GaamExpress</h2>
            <p className="text-gray-300 leading-relaxed">
              Connecting villages with fast and trusted local delivery services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Restaurants</li>
              <li>Become a Partner</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: hello@gaamexpress.com</p>
            <p className="text-gray-300 mt-2">WhatsApp: +91 99999 99999</p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          © 2026 GaamExpress • Built by Janvi Patel
        </div>
      </footer>
    </div>
  );
}
