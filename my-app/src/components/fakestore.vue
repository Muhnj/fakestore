<template>
  <div class="products-container">
  <div v-for="product in products" :key="product.id" class="product">
    <h3>{{ product.title }}</h3>
    <img :src="product.image" alt="product image" />
    <p>{{ product.description }}</p>
    <p><strong>${{ product.price }}</strong></p>

    <!-- Action Buttons -->
    <div class="button-group">
      <button @click="updateProduct(product)">Update</button>
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "fakestore",
  data() {
    return {
      categories: [],
      products: [], // New data property for all products
    };
  },
  async mounted() {
    let response = await axios.get("https://fakestoreapi.com/products");
    this.products = response.data; // Store all products
    const categories = [...new Set(response.data.map((p) => p.category))];
    this.categories = categories;
    console.log(this.categories);
  },
  methods: {
  updateProduct(product) {
    console.log("Update clicked for:", product);
    // Logic to update (e.g., open modal to edit)
  },
  deleteProduct(productId) {
    console.log("Delete clicked for ID:", productId);
    this.products = this.products.filter(p => p.id !== productId);
  }
}
};
</script>

<style scoped>
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

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.button-group button {
  padding: 6px 12px;
  font-size: 0.85rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.button-group button:nth-child(1) {
  background-color: #4caf50;
  color: white;
}

.button-group button:nth-child(2) {
  background-color: #2196f3;
  color: white;
}

.button-group button:nth-child(3) {
  background-color: #f44336;
  color: white;
}

.button-group button:hover {
  opacity: 0.9;
}
</style>
