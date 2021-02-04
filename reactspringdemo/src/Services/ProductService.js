
import axios from "axios";
const REST_API_URL = "http://localhost:8080";
class ProductService {
  getProducts() {
    return axios.get(REST_API_URL);
  }
}
 
export default new ProductService();