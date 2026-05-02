import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCart = create(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, quantity = 1) => {
                const currentItems = get().items;
                const existingItem = currentItems.find(item => item.product.id === product.id);

                if (existingItem) {
                    set({
                        items: currentItems.map(item =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        )
                    });
                } else {
                    set({ items: [...currentItems, { product, quantity }] });
                }
            },

            removeItem: (productId) => {
                set({ items: get().items.filter(item => item.product.id !== productId) });
            },

            updateQuantity: (productId, quantity) => {
                if (quantity < 1) return;
                set({
                    items: get().items.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    )
                });
            },

            clearCart: () => set({ items: [] }),

            get totalItems() {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            get totalPrice() {
                return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            }
        }),
        {
            name: 'maayad-cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
