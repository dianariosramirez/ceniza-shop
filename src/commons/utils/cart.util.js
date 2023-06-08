
export const getTotalPrice = (productsCart) => {
    let totalPrice= 0;

    for( let i = 0; i < productsCart.length; i++ ) {
        let priceProduct = productsCart[i].productData.price * productsCart[i].count;
        totalPrice += priceProduct;
    }

    return totalPrice;
}

export const getTotalProducts = (productsCart) => {
    let totalProducts = 0;
    for( let i = 0; i < productsCart.length; i++ ) {
        let products = productsCart[i].count;
        
        totalProducts += products;
    }

    return totalProducts;
}