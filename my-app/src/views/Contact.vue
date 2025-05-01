<template>
  <div class="contact-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
      </div>
    </section>

    <section class="contact-form">
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" type="text" id="name" placeholder="Your Name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" placeholder="Your Email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <p>© 2025 FakeStore. All rights reserved.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  alert('Thank you for reaching out! We will get back to you soon.');
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
};
</script>

<style scoped>
.contact-page {
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

.contact-form {
  padding: 40px 20px;
  text-align: center;
}

.contact-form h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.form-group textarea {
  height: 150px;
  resize: none;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-submit:hover {
  background-color: #45a049;
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
