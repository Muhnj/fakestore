<template>
  <div class="products-container">
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.title }}</h3>
      <img :src="product.image" alt="product image" />
      <p>{{ product.description }}</p>
      <p><strong>${{ product.price }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const products = ref([])

onMounted(async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  products.value = response.data
})
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.product {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  background-color: #fff;
}

.product:hover {
  transform: scale(1.03);
}

.product img {
  max-width: 100%;
  height: auto;
  margin-bottom: 12px;
  border-radius: 8px;
}

.product h3 {
  font-size: 1.1rem;
  margin: 10px 0;
  color: #333;
}

.product p {
  font-size: 0.9rem;
  color: #555;
  margin: 8px 0;
}

.product strong {
  color: #111;
  font-size: 1rem;
}
</style>
