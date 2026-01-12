'use client';

import { useParams, useRouter } from 'next/navigation';
import { restaurants } from '@/src/data/restaurants';
import { menuItems } from '@/src/data/menu';
import { useCart } from '@/src/contexts/CartContext';
import { useAuth } from '@/src/contexts/AuthContext';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import { useState } from 'react';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '@/src/lib/firebase';

export default function RestaurantPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [addingFavorite, setAddingFavorite] = useState(false);

  const restaurantId = params.id as string;
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const menu = menuItems.filter(item => item.restaurantId === restaurantId);

  const isFavorite = user?.favourites?.includes(restaurantId) || false;
  const canAddFavorite = !isFavorite && (user?.favourites?.length || 0) < 3;

  if (!restaurant) {
    return (
      <div className="px-4 md:px-10 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Restaurant not found</h1>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }

  async function toggleFavorite() {
    if (!user) {
      router.push('/login');
      return;
    }

    setAddingFavorite(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      
      if (isFavorite) {
        await updateDoc(userRef, {
          favourites: arrayRemove(restaurantId)
        });
      } else if (canAddFavorite) {
        await updateDoc(userRef, {
          favourites: arrayUnion(restaurantId)
        });
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
    } finally {
      setAddingFavorite(false);
    }
  }

  function handleAddToCart(item: typeof menu[0]) {
    addToCart(item);
  }

  return (
    <div className="px-4 md:px-10 py-8 md:py-12">
      {/* Restaurant Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-primary hover:text-primary-dark mb-4 flex items-center gap-2"
        >
          ← Back
        </button>
        
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">{restaurant.emoji}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {restaurant.name}
              </h1>
            </div>
            <p className="text-gray-600 mb-3">{restaurant.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {restaurant.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>⭐ {restaurant.rating}</span>
              <span>•</span>
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
          
          {user && (
            <Button
              variant={isFavorite ? 'primary' : 'secondary'}
              onClick={toggleFavorite}
              disabled={addingFavorite || (!isFavorite && !canAddFavorite)}
            >
              {isFavorite ? '❤️ Favorite' : canAddFavorite ? '🤍 Add to Favorites' : '❤️ Max Favorites (3)'}
            </Button>
          )}
        </div>
      </div>

      {/* Menu */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => (
            <Card key={item.id} className="flex flex-col">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">KSh {item.price}</span>
                <Button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
