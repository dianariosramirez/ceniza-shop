// Config
import { SERVER_URL } from "../../../config";

export class FavoritesService {

    static getAccesorios = async () => {
        const favoritesData = await fetch(`${SERVER_URL}/favorites`);
        const favorites = await favoritesData.json();
        return favorites;
    }
}