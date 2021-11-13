<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api/api.js";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Recipe",
  components: { Card, Search },
  setup(_, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const recipeData = ref([]);
    const keyword = ref("");

    async function searchData(query = "") {
      emit("loadingStatus", true);
      const payload = await api(`/search.php?s=${query}`, "GET");
      recipeData.value = payload.meals;
      emit("loadingStatus", false);
    }

    async function getRecipe() {
      emit("loadingStatus", true);
      const payload = await api(
        `/filter.php?c=${route.params.category}`,
        "GET"
      );
      recipeData.value = payload.meals;
      emit("loadingStatus", false);
    }

    if (route.query && route.query.keyword) {
      searchData(route.query.keyword);
    } else {
      getRecipe();
    }

    return { recipeData, keyword, route, searchData };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search Section -->
    <p class="text-center fs-1 fw-bold text-success mt-5">
      {{ route.params.category || route.query.keyword }}
    </p>

    <Search @search="searchData" />

    <!-- Card List Section -->
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-3">
      <Card
        v-for="data in recipeData"
        :key="data.idMeal"
        :category="data.strMeal"
        :image="data.strMealThumb"
        :link="`/detail/${data.idMeal}`"
      />
    </div>
  </div>
</template>
