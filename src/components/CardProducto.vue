<template>
  <div>
    <article class="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl p-4 border border-gray-200">
      <h2 class="text-lg font-semibold text-gray-800 mb-2">
        {{ nombre }}
      </h2>
      <p class="text-gray-600">
        Precio: <span class="font-medium text-green-600">${{ valor }}</span>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CardProducto',
  props: {
    nombre: String,
    valor: Number,
  },
}
</script>
