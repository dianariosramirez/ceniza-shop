// Config
import { SERVER_URL } from "../../../config";

export class ProductService {

    static getProduct =  async (productType, productId) => {
        const productData = await fetch(`${SERVER_URL}/product?productType=${productType}&productId=${productId}`);
        const product = await productData.json();
        return product;
    };
}