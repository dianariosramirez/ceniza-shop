import { create } from 'zustand';

export const useShoppingCartStore = create( set => ({
    productsCart: [],
    totalPrice: 0,
    addToCart: ( product ) => set( state => ({
        productsCart: [...state.productsCart, product],
        totalPrice: state.totalPrice + product.price
    }))
}))