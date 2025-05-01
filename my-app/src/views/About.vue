<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>About Us</h1>
        <p>Learn more about our mission, values, and how we aim to revolutionize the shopping experience.</p>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="mission">
      <h2>Our Mission</h2>
      <p>At FakeStore, our mission is to provide high-quality products with excellent customer service, making your shopping experience effortless and enjoyable. We are committed to offering a diverse range of products at affordable prices, with fast delivery and top-notch support.</p>
    </section>

    <!-- Our Story -->
    <section class="story">
      <h2>Our Story</h2>
      <p>FakeStore started with a simple idea: to create an online store that offers a seamless shopping experience while providing products that people love. From humble beginnings, we have grown into a trusted brand, offering an extensive catalog of items for every need. Our goal has always been to help customers discover the best products with ease.</p>
    </section>

    <!-- Our Team -->
    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
          <p>Jane founded FakeStore with a passion for e-commerce and customer satisfaction. She oversees the operations and leads the team towards innovation.</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>John Smith</h3>
          <p>COO</p>
          <p>John is the backbone of our operations, ensuring everything runs smoothly. His expertise in logistics helps us deliver products efficiently.</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Sarah Lee</h3>
          <p>Head of Customer Support</p>
          <p>Sarah leads our customer support team, ensuring every customer has the best experience with FakeStore. She loves helping solve problems and improve services.</p>
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
import { ref } from 'vue';
// You can add more functionality here if needed in the future
</script>

<style scoped>
.about-page {
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

.mission,
.story {
  padding: 40px 20px;
  text-align: center;
}

.mission h2,
.story h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.mission p,
.story p {
  font-size: 1.2rem;
  color: #555;
}

.team {
  background-color: #f9f9f9;
  padding: 40px 20px;
  text-align: center;
}

.team h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.team-member {
  background-color: #fff;
  padding: 20px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 1.5rem;
  margin-top: 10px;
}

.team-member p {
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
