import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center pattern-bg py-16 rounded-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Discover Authentic <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Artisanal Crafts</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
          Connect with skilled artisans, explore unique handcrafted products, and support local traditions.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="artisan-card animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b"
            alt="Artisan crafting"
            className="artisan-card-image"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Meet Our Artisans</h3>
            <p className="text-gray-600 mb-4">
              Discover the stories and skills behind each handcrafted piece.
            </p>
            <Link
              to="/artisans"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Explore artisans <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>

        <div className="artisan-card animate-fade-in [animation-delay:200ms]">
          <img
            src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad"
            alt="Handcrafted products"
            className="artisan-card-image"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Shop Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Browse unique handcrafted products and support local artisans directly.
            </p>
            <Link
              to="/marketplace"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View products <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>

        <div className="artisan-card animate-fade-in [animation-delay:400ms]">
          <img
            src="https://images.unsplash.com/photo-1516727003284-a96541e51e9c"
            alt="Online workshop"
            className="artisan-card-image"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Join Workshops</h3>
            <p className="text-gray-600 mb-4">
              Learn traditional crafts and business skills from expert artisans.
            </p>
            <Link
              to="/workshops"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Browse workshops <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-clay-50 to-turmeric-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose CraftSense?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Direct Impact</h3>
              <p className="text-gray-600">90% of your purchase goes directly to artisans</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Authentic Crafts</h3>
              <p className="text-gray-600">Handmade products with cultural significance</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join a growing community of craft enthusiasts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}