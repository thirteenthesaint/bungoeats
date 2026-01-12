'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/src/contexts/AuthContext';
import RestaurantCard from '@/src/components/RestaurantCard';
import { restaurants } from '@/src/data/restaurants';
import { Restaurant } from '@/src/data/restaurants';

export default function Home() {
  const { user } = useAuth();
  const [sortedRestaurants, setSortedRestaurants] = useState<Restaurant[]>(restaurants);

  useEffect(() => {
    if (!user) {
      setSortedRestaurants(restaurants);
      return;
    }
    
    const favs = user.favourites || [];
    if (favs.length > 0) {
      const favorites = restaurants.filter(r => favs.includes(r.id));
      const others = restaurants.filter(r => !favs.includes(r.id));
      setSortedRestaurants([...favorites, ...others]);
    } else {
      setSortedRestaurants(restaurants);
    }
  }, [user]);

  const hasFavorites = user && user.favourites && user.favourites.length > 0;

  return (
    <div className="px-4 md:px-10 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Delicious Food,
          <br />
          <span className="text-primary">Delivered Fast</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Order from the best restaurants in Bungoma and get your favorite meals delivered to your doorstep.
        </p>
      </div>

      {/* Restaurants Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {hasFavorites ? 'Your Favorites & More' : 'Popular Restaurants'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRestaurants.map((restaurant) => {
            const isFav = user && user.favourites ? user.favourites.includes(restaurant.id) : false;
            return (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                isFavorite={isFav}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
