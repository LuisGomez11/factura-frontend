import axios from 'axios'

const API_BASE_URL = 'http://localhost:8090/api/producto';

export default {
  async getProductos() {
    try {
      const res = await axios.get(API_BASE_URL);
      return res.data;
    } catch (err) {
      return console.error('Error al obtener los productos:', err);
    }
  },

  async postProducto(producto) {
    try {
      const res = await axios
        .post(API_BASE_URL, producto);
      return res.data;
    } catch (err) {
      return console.error('Error al guardar producto:', err);
    }
  }
}
