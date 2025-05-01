<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark border-bottom shadow-sm">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, i) in navItems" :key="i">
              <router-link
                :to="item.to"
                class="nav-link"
                :class="{ 'fw-bold text-white': route.path === item.to }"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
<form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Admin', to: '/admin' }
]
</script>
<style scoped>
.nav-link {
  color: rgba(255, 255, 255, 0.75);
}
.nav-link.fw-bold.text-white {
  font-weight: bold;
  color: #fff !important;
}
</style>