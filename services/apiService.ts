'https://www.googleapis.com/customsearch/v1?key=AIzaSyDWZbK9bjSE5kcSvhKhuZocTEW1kAM1QHg&cx=017576662512468239146:omuauf_lfve&q=lectures';
import axios from 'axios';
import { Config } from './config';

export class APIService {
  static async search(request: string) {
    const response = await axios.get(
      `${Config.BASE_URL}?key=${Config.API_KEY}&cx=${Config.CONTEXT}&q=${request}`
    );
    if (response.status === 200) {
      return response.data;
    }
  }
  // search: (request: string) => {

  // },
}

export default Object.freeze(APIService);
