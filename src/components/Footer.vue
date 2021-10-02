<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="footer py-3 text-center mt-5 mb-4">
    <div class="d-flex justify-content-center">
      <router-link to="/" class="mb-3 text-success fw-bold">Home</router-link>
      <p class="mx-2 mb-3">|</p>
      <router-link to="/about" class="mb-3 text-success fw-bold"
        >About</router-link
      >
    </div>
    <p class="m-0">Create with ❤️‍🔥 and 🖐 in Denpasar</p>
    <small
      ><a
        href="https://github.com/primakara-developers"
        target="blank"
        class="text-success"
        >Primakara Developers {{ new Date().getFullYear() }}</a
      ></small
    >
  </footer>
</template>

<style></style>
