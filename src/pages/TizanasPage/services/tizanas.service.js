// Config
import { SERVER_URL } from "../../../config";

export class TizanasService {

    static getTizanas =  async () => {
        const tizanasData = await fetch(`${SERVER_URL}/tizanas`);
        const tizanas = await tizanasData.json();
        return tizanas;
    };
}
