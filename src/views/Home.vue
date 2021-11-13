<script>
import { ref } from "vue";
import api from "@/api/api.js";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: { Card, Search },
  setup(_, { emit }) {
    const categoryData = ref([]);

    async function getCategoryData() {
      emit("loadingStatus", true);
      const payload = await api("/categories.php", "GET");
      categoryData.value = payload.categories;
      emit("loadingStatus", false);
    }
    getCategoryData();

    return { categoryData };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search Section -->
    <p class="text-center fs-1 fw-bold text-success mt-5">Food Recipes</p>
    <Search />

    <!-- Card List Section -->
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <Card
        v-for="data in categoryData"
        :key="data.idCategory"
        :category="data.strCategory"
        :description="data.strCategoryDescription"
        :image="data.strCategoryThumb"
        :link="`/recipe/${data.strCategory}`"
      />
    </div>
  </div>
</template>

<style></style>
