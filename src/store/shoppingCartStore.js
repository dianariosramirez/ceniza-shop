import { create } from 'zustand';

export const useShoppingCartStore = create( ( set ) => ({
    productsCart: {},
    // add to cart
    addToCart: ( product ) => set( ( state ) => {
        const productId = product.id;
  
        if ( state.productsCart.hasOwnProperty( productId ) ) {
            return {
                productsCart: {
                    ...state.productsCart,
                    [productId] : {
                        ...state.productsCart[productId],
                        count: state.productsCart[productId].count + 1,
                    },
                }
            };
        } else {
            return {
                productsCart: {
                    ...state.productsCart,
                    [productId]: {
                        productData: product,
                        count: 1,
                    },
                }
            };
        }
    }),
    // Buttons to add and remove
    removeProduct: ( id ) => set( (state) => {
        if(state.productsCart[id].count > 1) {
            return {
                productsCart: {
                    ...state.productsCart,
                    [id]: {
                        ...state.productsCart[id],
                        count: state.productsCart[id].count - 1
                    }
                }
            }
        } else {
            const updatedProductsCart = { ...state.productsCart };
            delete updatedProductsCart[id];
    
            return {
            productsCart: updatedProductsCart
            }
        }
    }),

    addProduct: ( id ) => set( (state) => ({
        productsCart: {
            ...state.productsCart,
            [id]: {
                ...state.productsCart[id],
                count: state.productsCart[id].count + 1
            }
        }
    })),

    // Remove to cart
    removeToCart: ( id ) => set( (state) => {
        const updatedProductsCart = { ...state.productsCart };
        delete updatedProductsCart[id];

        return {
            productsCart: updatedProductsCart
        }
    })
}));
  