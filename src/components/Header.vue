<script>
export default {
  name: "Header",
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand text-success fw-bold">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6108/6108476.png"
          alt=""
          width="30"
          height="24"
        />
        Recipes Page
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link text-success">Home</router-link>
          <router-link to="/about" class="nav-link text-success"
            >About</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
