import React from 'react';
import Link from 'next/link';
import { Restaurant } from '@/src/data/restaurants';
import Card from './Card';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <Card hover className="h-full">
        <div className="flex flex-col gap-4">
          {/* Emoji Badge */}
          <div className="flex justify-center">
            <div className="text-6xl">{restaurant.emoji}</div>
          </div>
          
          {/* Restaurant Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{restaurant.description}</p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {restaurant.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Meta Info */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            <span className="text-gray-600">{restaurant.deliveryTime}</span>
            <span className="text-gray-600">{restaurant.priceRange}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
