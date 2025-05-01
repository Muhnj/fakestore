<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to FakeStore</h1>
        <p>Your one-stop shop for amazing products at great prices!</p>
        <button @click="goToProducts" class="cta-btn">Shop Now</button>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="categories">
      <h2>Browse Our Categories</h2>
      <div class="category-cards">
        <div class="category-card" @click="goToCategory('products')">
          <h3>Products</h3>
          
        </div>
        <div class="category-card" @click="goToCategory('services')">
          <h3>Services</h3>
          
        </div>
        <div class="category-card" @click="goToCategory('about')">
          <h3>About Us</h3>
          
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products">
      <h2>Featured Products</h2>
      <div class="products-grid">
        <div v-for="product in featuredProducts" :key="product.id" class="product-card">
          <img :src="product.image" alt="Product Image" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>${{ product.price }}</strong></p>
          <button @click="goToProductDetails(product.id)">View Details</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>© 2025 FakeStore. All rights reserved.</p>
        <p><a href="#">Contact Us</a> | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const featuredProducts = ref([
  { id: 1, title: 'Product 1', description: 'Description for product 1', price: 29.99, image: 'https://via.placeholder.com/200x150' },
  { id: 2, title: 'Product 2', description: 'Description for product 2', price: 19.99, image: 'https://via.placeholder.com/200x150' },
  { id: 3, title: 'Product 3', description: 'Description for product 3', price: 39.99, image: 'https://via.placeholder.com/200x150' },
  { id: 4, title: 'Product 4', description: 'Description for product 4', price: 49.99, image: 'https://via.placeholder.com/200x150' }
])

function goToProducts() {
  // Navigate to Products page
  console.log('Navigating to Products')
}

function goToCategory(category) {
  // Handle category navigation
  console.log('Navigating to category:', category)
}

function goToProductDetails(productId) {
  // Navigate to product details page
  console.log('Navigating to product details for:', productId)
}
</script>

<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
}

.hero {
  background-color: #f4f4f4;
  text-align: center;
  padding: 80px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  font-size: 3rem;
  color: #333;
}

.hero-content p {
  font-size: 1.2rem;
  color: #666;
}

.cta-btn {
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 20px;
}

.cta-btn:hover {
  background-color: #45a049;
}

.categories {
  text-align: center;
  padding: 40px 20px;
}

.category-cards {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.category-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.category-card h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.featured-products {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.products-grid {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-card h3 {
  font-size: 1.1rem;
  margin-top: 10px;
}

.product-card p {
  font-size: 0.9rem;
  margin: 8px 0;
}

.product-card button {
  background-color: #4caf50;
  color: white;
  font-size: 0.85rem;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

.product-card button:hover {
  opacity: 0.9;
}

.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer a {
  color: #4caf50;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>