<template>
  <h1 class="text-2xl text-center mb-5">Lista de productos</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <CardProducto
      v-for="(producto, index) in productos"
      :key="index"
      :nombre="producto.nombre"
      :valor="producto.valor"
    ></CardProducto>
  </div>
</template>

<script>
import CardProducto from '@/components/CardProducto.vue'
import ProductoService from '@/services/ProductoService'

export default {
  name: 'ProductoView',
  components: {
    CardProducto,
  },
  data() {
    return {
      productos: [],
      formProducto: {
        nombre: '',
        valor: 0,
      },
    }
  },
  created() {
    this.getProductos()
  },
  methods: {
    getProductos() {
      ProductoService.getProductos().then((data) => {
        this.productos = data
      })
    },
  },
}
</script>

<style scoped></style>
