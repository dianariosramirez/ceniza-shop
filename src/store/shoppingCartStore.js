import { create } from 'zustand';

export const useShoppingCartStore = create( ( set ) => ({
    productsCart: {},
    totalPrice:0,
    totalProducts: 0,
  
    addToCart: ( product ) => set( ( state ) => {
        const productId = product.id;
        const priceProduct = product.price;
  
        if ( state.productsCart.hasOwnProperty( productId ) ) {
            return {
                productsCart: {
                    ...state.productsCart,
                    [productId] : {
                        ...state.productsCart[productId],
                        count: state.productsCart[productId].count + 1,
                    },
                },
                totalPrice: state.totalPrice + ( priceProduct * state.productsCart[ productId ].count ),
                totalProducts: state.totalProducts + 1
            };
        } else {
            return {
                productsCart: {
                    ...state.productsCart,
                    [productId]: {
                        productData: product,
                        count: 1,
                    },
                },
                totalPrice: state.totalPrice + priceProduct ,
                totalProducts: state.totalProducts + 1
            };
        }
    })
}));
  