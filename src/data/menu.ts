export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  restaurantId: string;
  restaurantName: string;
  description: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  // SnackIt! Menu
  {
    id: 'snackit-1',
    name: 'Smokie Pasua',
    price: 70,
    image: '/images/smokie-pasua.jpg',
    restaurantId: 'snackit',
    restaurantName: 'SnackIt!',
    description: 'Grilled smokie with kachumbari',
    category: 'Street Food'
  },
  {
    id: 'snackit-2',
    name: 'Chips Mayai',
    price: 100,
    image: '/images/chips-mayai.jpg',
    restaurantId: 'snackit',
    restaurantName: 'SnackIt!',
    description: 'Fries mixed with eggs',
    category: 'Street Food'
  },
  {
    id: 'snackit-3',
    name: 'Mandazi (4 pcs)',
    price: 40,
    image: '/images/mandazi.jpg',
    restaurantId: 'snackit',
    restaurantName: 'SnackIt!',
    description: 'Fresh fried mandazi',
    category: 'Snacks'
  },
  {
    id: 'snackit-4',
    name: 'Samosa (3 pcs)',
    price: 60,
    image: '/images/samosa.jpg',
    restaurantId: 'snackit',
    restaurantName: 'SnackIt!',
    description: 'Crispy beef samosas',
    category: 'Snacks'
  },
  {
    id: 'snackit-5',
    name: 'Soda (500ml)',
    price: 50,
    image: '/images/soda.jpg',
    restaurantId: 'snackit',
    restaurantName: 'SnackIt!',
    description: 'Assorted sodas',
    category: 'Drinks'
  },

  // Noor Restaurant Menu
  {
    id: 'noor-1',
    name: 'Pilau Beef',
    price: 250,
    image: '/images/pilau.jpg',
    restaurantId: 'noor',
    restaurantName: 'Noor Restaurant Bungoma',
    description: 'Spiced rice with tender beef',
    category: 'Rice Dishes'
  },
  {
    id: 'noor-2',
    name: 'Biryani Chicken',
    price: 280,
    image: '/images/biryani.jpg',
    restaurantId: 'noor',
    restaurantName: 'Noor Restaurant Bungoma',
    description: 'Aromatic biryani with chicken',
    category: 'Rice Dishes'
  },
  {
    id: 'noor-3',
    name: 'Coconut Rice',
    price: 200,
    image: '/images/coconut-rice.jpg',
    restaurantId: 'noor',
    restaurantName: 'Noor Restaurant Bungoma',
    description: 'Rice cooked in coconut milk',
    category: 'Rice Dishes'
  },
  {
    id: 'noor-4',
    name: 'Fish in Coconut Sauce',
    price: 350,
    image: '/images/fish-coconut.jpg',
    restaurantId: 'noor',
    restaurantName: 'Noor Restaurant Bungoma',
    description: 'Fresh fish in creamy coconut sauce',
    category: 'Swahili'
  },

  // Tuutis Restaurant Menu
  {
    id: 'tuutis-1',
    name: 'Quarter Chicken',
    price: 300,
    image: '/images/quarter-chicken.jpg',
    restaurantId: 'tuutis',
    restaurantName: 'Tuutis Restaurant',
    description: 'Grilled quarter chicken with sides',
    category: 'Chicken'
  },
  {
    id: 'tuutis-2',
    name: 'Half Chicken',
    price: 550,
    image: '/images/half-chicken.jpg',
    restaurantId: 'tuutis',
    restaurantName: 'Tuutis Restaurant',
    description: 'Grilled half chicken with sides',
    category: 'Chicken'
  },
  {
    id: 'tuutis-3',
    name: 'Chicken Wings (6 pcs)',
    price: 280,
    image: '/images/chicken-wings.jpg',
    restaurantId: 'tuutis',
    restaurantName: 'Tuutis Restaurant',
    description: 'Crispy grilled chicken wings',
    category: 'Chicken'
  },
  {
    id: 'tuutis-4',
    name: 'Ugali & Chicken',
    price: 320,
    image: '/images/ugali-chicken.jpg',
    restaurantId: 'tuutis',
    restaurantName: 'Tuutis Restaurant',
    description: 'Ugali with grilled chicken',
    category: 'Local Dishes'
  },

  // Roma Cafe Menu
  {
    id: 'roma-1',
    name: 'Margherita Pizza',
    price: 450,
    image: '/images/margherita.jpg',
    restaurantId: 'roma',
    restaurantName: 'Roma Cafe',
    description: 'Classic tomato and cheese pizza',
    category: 'Pizza'
  },
  {
    id: 'roma-2',
    name: 'Pepperoni Pizza',
    price: 550,
    image: '/images/pepperoni.jpg',
    restaurantId: 'roma',
    restaurantName: 'Roma Cafe',
    description: 'Pizza with pepperoni and cheese',
    category: 'Pizza'
  },
  {
    id: 'roma-3',
    name: 'Spaghetti Bolognese',
    price: 380,
    image: '/images/spaghetti.jpg',
    restaurantId: 'roma',
    restaurantName: 'Roma Cafe',
    description: 'Pasta with meat sauce',
    category: 'Pasta'
  },
  {
    id: 'roma-4',
    name: 'Cappuccino',
    price: 150,
    image: '/images/cappuccino.jpg',
    restaurantId: 'roma',
    restaurantName: 'Roma Cafe',
    description: 'Fresh brewed cappuccino',
    category: 'Coffee'
  },

  // Solitaire Restaurant Menu
  {
    id: 'solitaire-1',
    name: 'Classic Burger',
    price: 300,
    image: '/images/classic-burger.jpg',
    restaurantId: 'solitaire',
    restaurantName: 'Solitaire Restaurant',
    description: 'Beef burger with lettuce and tomato',
    category: 'Burgers'
  },
  {
    id: 'solitaire-2',
    name: 'Chicken Burger',
    price: 320,
    image: '/images/chicken-burger.jpg',
    restaurantId: 'solitaire',
    restaurantName: 'Solitaire Restaurant',
    description: 'Grilled chicken burger',
    category: 'Burgers'
  },
  {
    id: 'solitaire-3',
    name: 'French Fries',
    price: 150,
    image: '/images/fries.jpg',
    restaurantId: 'solitaire',
    restaurantName: 'Solitaire Restaurant',
    description: 'Crispy golden fries',
    category: 'Fries'
  },
  {
    id: 'solitaire-4',
    name: 'Loaded Fries',
    price: 250,
    image: '/images/loaded-fries.jpg',
    restaurantId: 'solitaire',
    restaurantName: 'Solitaire Restaurant',
    description: 'Fries with cheese and toppings',
    category: 'Fries'
  },

  // Al Jazeera Restaurant Menu
  {
    id: 'aljazeera-1',
    name: 'Beef Stew & Rice',
    price: 250,
    image: '/images/beef-stew.jpg',
    restaurantId: 'aljazeera',
    restaurantName: 'Al Jazeera Restaurant',
    description: 'Tender beef stew with rice',
    category: 'Stews'
  },
  {
    id: 'aljazeera-2',
    name: 'Chicken Curry',
    price: 280,
    image: '/images/chicken-curry.jpg',
    restaurantId: 'aljazeera',
    restaurantName: 'Al Jazeera Restaurant',
    description: 'Spiced chicken curry with rice',
    category: 'Halal'
  },
  {
    id: 'aljazeera-3',
    name: 'Matoke & Beef',
    price: 220,
    image: '/images/matoke-beef.jpg',
    restaurantId: 'aljazeera',
    restaurantName: 'Al Jazeera Restaurant',
    description: 'Cooked bananas with beef stew',
    category: 'Stews'
  },
  {
    id: 'aljazeera-4',
    name: 'Chapati (2 pcs)',
    price: 60,
    image: '/images/chapati.jpg',
    restaurantId: 'aljazeera',
    restaurantName: 'Al Jazeera Restaurant',
    description: 'Soft layered chapati',
    category: 'Halal'
  },

  // Ekero Choma Place Menu
  {
    id: 'ekero-1',
    name: 'Goat Choma (1/4 kg)',
    price: 400,
    image: '/images/goat-choma.jpg',
    restaurantId: 'ekero',
    restaurantName: 'Ekero Choma Place',
    description: 'Grilled goat meat',
    category: 'Nyama Choma'
  },
  {
    id: 'ekero-2',
    name: 'Beef Choma (1/4 kg)',
    price: 350,
    image: '/images/beef-choma.jpg',
    restaurantId: 'ekero',
    restaurantName: 'Ekero Choma Place',
    description: 'Grilled beef',
    category: 'Nyama Choma'
  },
  {
    id: 'ekero-3',
    name: 'Pork Ribs (1/2 kg)',
    price: 500,
    image: '/images/pork-ribs.jpg',
    restaurantId: 'ekero',
    restaurantName: 'Ekero Choma Place',
    description: 'Grilled pork ribs',
    category: 'BBQ'
  },
  {
    id: 'ekero-4',
    name: 'Kachumbari',
    price: 80,
    image: '/images/kachumbari.jpg',
    restaurantId: 'ekero',
    restaurantName: 'Ekero Choma Place',
    description: 'Fresh tomato and onion salad',
    category: 'Grill'
  }
];
