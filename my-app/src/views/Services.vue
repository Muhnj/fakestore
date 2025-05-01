<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Our Services</h1>
        <p>Discover the variety of services we offer to enhance your experience with FakeStore.</p>
      </div>
    </section>

    <!-- Services List -->
    <section class="service-list">
      <h2>What We Offer</h2>
      <div class="service-cards">
        <div class="service-card">
          <h3>Product Maintenance</h3>
          <p>Ensure your products stay in perfect condition with our comprehensive maintenance services.</p>
        </div>
        <div class="service-card">
          <h3>Customer Support</h3>
          <p>Our friendly and knowledgeable support team is here to help with any questions or issues you may have.</p>
        </div>
        <div class="service-card">
          <h3>Fast Delivery</h3>
          <p>We offer fast and reliable delivery to ensure your products arrive on time and in excellent condition.</p>
        </div>
        <div class="service-card">
          <h3>Custom Orders</h3>
          <p>We can help you create custom orders tailored to your specific needs. Get in touch with us for more information.</p>
        </div>
      </div>
    </section>

    <!-- Service Benefits -->
    <section class="service-benefits">
      <h2>Why Choose Us?</h2>
      <div class="benefit-cards">
        <div class="benefit-card">
          <h3>Expert Knowledge</h3>
          <p>Our team has extensive knowledge and expertise to provide the best possible service to you.</p>
        </div>
        <div class="benefit-card">
          <h3>Affordable Prices</h3>
          <p>We offer competitive pricing to ensure our services are accessible and affordable to all customers.</p>
        </div>
        <div class="benefit-card">
          <h3>Customer Satisfaction</h3>
          <p>Your satisfaction is our priority. We aim to deliver top-quality services with excellent customer support.</p>
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
// You can add more functionality if needed in the future
</script>

<style scoped>
.services-page {
  font-family: 'Arial', sans-serif;
}

.hero {
  background-color: #4caf50;
  text-align: center;
  padding: 80px 20px;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
}

.hero-content p {
  font-size: 1.2rem;
}

.service-list {
  text-align: center;
  padding: 40px 20px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.service-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 1rem;
  color: #555;
}

.service-benefits {
  background-color: #f9f9f9;
  text-align: center;
  padding: 40px 20px;
}

.benefit-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.benefit-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.benefit-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.benefit-card p {
  font-size: 1rem;
  color: #555;
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
