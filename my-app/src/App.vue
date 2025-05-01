<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  components: {
    HeaderSection
  }
}
</script>

<template>
  <div id="app">
    <HeaderSection />
    <router-view />
  </div>
</template>
