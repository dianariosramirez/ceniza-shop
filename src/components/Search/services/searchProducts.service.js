// Config
import { SERVER_URL } from "../../../config";

export class ProductsService {

    static getProducts = async () => {
        const productsData = await fetch(`${SERVER_URL}/products`);
        const products = await productsData.json();
        return products;
    }
}