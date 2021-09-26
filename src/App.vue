<script>
import Footer from "@/components/Footer.vue";

export default {
  components: { Footer },
  setup() {
    return { Footer };
  },
};
</script>

<template>
  <router-view />
  <!-- Footer component -->
  <Footer />
</template>
