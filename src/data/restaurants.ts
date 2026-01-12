export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  rating: number;
  priceRange: string;
  deliveryTime: string;
  tags: string[];
  iconType: 'local' | 'rice' | 'pizza' | 'burger' | 'grill' | 'cafe';
  description: string;
  categories: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: 'snackit',
    name: 'SnackIt!',
    slug: 'snackit',
    emoji: '🌭',
    rating: 4.8,
    priceRange: 'KSh 50 - 200',
    deliveryTime: '15-25 min',
    tags: ['Street Food', 'Drinks', 'Fast'],
    iconType: 'local',
    description: 'Your favorite street food spot in Bungoma',
    categories: ['Street Food', 'Drinks', 'Snacks']
  },
  {
    id: 'noor',
    name: 'Noor Restaurant Bungoma',
    slug: 'noor-restaurant',
    emoji: '🍛',
    rating: 4.6,
    priceRange: 'KSh 200 - 500',
    deliveryTime: '25-35 min',
    tags: ['Swahili', 'Rice', 'Traditional'],
    iconType: 'rice',
    description: 'Authentic Swahili and coastal cuisine',
    categories: ['Swahili', 'Rice Dishes', 'Traditional']
  },
  {
    id: 'tuutis',
    name: 'Tuutis Restaurant',
    slug: 'tuutis-restaurant',
    emoji: '🍗',
    rating: 4.7,
    priceRange: 'KSh 250 - 600',
    deliveryTime: '20-30 min',
    tags: ['Chicken', 'Grill', 'Local'],
    iconType: 'grill',
    description: 'Grilled chicken and local favorites',
    categories: ['Chicken', 'Grill', 'Local Dishes']
  },
  {
    id: 'roma',
    name: 'Roma Cafe',
    slug: 'roma-cafe',
    emoji: '🍕',
    rating: 4.5,
    priceRange: 'KSh 300 - 800',
    deliveryTime: '30-40 min',
    tags: ['Pizza', 'Pasta', 'Cafe'],
    iconType: 'pizza',
    description: 'Italian-inspired dishes and coffee',
    categories: ['Pizza', 'Pasta', 'Coffee']
  },
  {
    id: 'solitaire',
    name: 'Solitaire Restaurant',
    slug: 'solitaire-restaurant',
    emoji: '🍔',
    rating: 4.6,
    priceRange: 'KSh 250 - 700',
    deliveryTime: '25-35 min',
    tags: ['Burgers', 'Fast Food', 'Fries'],
    iconType: 'burger',
    description: 'Burgers, fries, and fast food favorites',
    categories: ['Burgers', 'Fast Food', 'Fries']
  },
  {
    id: 'aljazeera',
    name: 'Al Jazeera Restaurant',
    slug: 'al-jazeera-restaurant',
    emoji: '🍲',
    rating: 4.7,
    priceRange: 'KSh 200 - 550',
    deliveryTime: '25-35 min',
    tags: ['Halal', 'Rice', 'Stew'],
    iconType: 'rice',
    description: 'Halal meals and traditional stews',
    categories: ['Halal', 'Rice', 'Stews']
  },
  {
    id: 'ekero',
    name: 'Ekero Choma Place',
    slug: 'ekero-choma-place',
    emoji: '🍖',
    rating: 4.8,
    priceRange: 'KSh 300 - 900',
    deliveryTime: '30-40 min',
    tags: ['Nyama Choma', 'Grill', 'BBQ'],
    iconType: 'grill',
    description: 'The best nyama choma in Bungoma',
    categories: ['Nyama Choma', 'Grill', 'BBQ']
  }
];