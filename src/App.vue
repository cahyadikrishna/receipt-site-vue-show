<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const truncateText = (str, length, ending) => {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };

    return { truncateText };
  },
});
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search bar -->
    <p class="text-center fs-1 fw-bold text-primary mt-5">Foody Receipt</p>

    <div class="row mt-2 mb-4">
      <div class="col-10">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-primary btn-lg w-100">
          🔍 Search
        </button>
      </div>
    </div>

    <!-- Card component list -->
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <div v-for="i in 14" class="col">
        <div class="card h-100">
          <img
            src="https://www.themealdb.com/images/category/chicken.png"
            class="card-img-top"
            alt="nice pic"
          />
          <div class="card-body">
            <h5 class="card-title">Chiken</h5>
            <p class="card-text">
              {{
                truncateText(
                  `Chicken is a type of domesticated fowl, a subspecies of the red
              junglefowl. It is one of the most common and widespread domestic
              animals, with a total population of more than 19 billion as of
              2011.[1] Humans commonly keep chickens as a source of food
              (consuming both their meat and eggs) and, more rarely, as pets.`,
                  100
                )
              }}
            </p>
            <p class="text-end mb-0">
              <a href="#">
                <small>Read more...</small>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer component -->
    <footer class="footer py-3 text-center mt-5 mb-4">
      <p class="m-0">Create with ❤️‍🔥 and 🖐 in Denpasar</p>
      <small
        ><a href="https://github.com/primakara-developers"
          >Primakara Developers {{ new Date().getFullYear() }}</a
        ></small
      >
    </footer>
  </div>
</template>

<style></style>
