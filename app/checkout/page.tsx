'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/src/contexts/CartContext';
import { useAuth } from '@/src/contexts/AuthContext';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const deliveryFee = 100;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  useEffect(() => {
    if (user?.phone) {
      setPhone(user.phone);
    }
  }, [user]);

  if (!user) {
    router.push('/login');
    return null;
  }

  if (cart.length === 0) {
    router.push('/cart');
    return null;
  }

  function formatWhatsAppMessage() {
    if (!user) return '';
    
    let message = '🍔 NEW ORDER FROM BUNGOEATS\n\n';
    message += '📦 ORDER DETAILS:\n';
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Restaurant: ${item.restaurantName}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: KSh ${item.price} x ${item.quantity} = KSh ${item.price * item.quantity}\n\n`;
    });
    
    message += '💰 PAYMENT SUMMARY:\n';
    message += `Subtotal: KSh ${subtotal}\n`;
    message += `Delivery Fee: KSh ${deliveryFee}\n`;
    message += `Total: KSh ${total}\n\n`;
    
    message += '📍 DELIVERY DETAILS:\n';
    message += `Name: ${user.name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n`;
    if (notes) {
      message += `Notes: ${notes}\n`;
    }
    
    return encodeURIComponent(message);
  }

  function handlePlaceOrder() {
    if (!address || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Format WhatsApp message
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/254795588857?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after a short delay
    setTimeout(() => {
      clearCart();
      router.push('/');
    }, 1000);
  }

  return (
    <div className="px-4 md:px-10 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery Details */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={user.name}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl bg-gray-50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0712345678"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full delivery address"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any special instructions?"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-gray-900">KSh {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>KSh {subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>KSh {deliveryFee}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">KSh {total}</span>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={handlePlaceOrder}
                disabled={loading || !address || !phone}
              >
                {loading ? 'Processing...' : 'Place Order via WhatsApp'}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                You'll be redirected to WhatsApp to confirm your order
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
