<script>
import { ref } from "vue";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  setup() {
    const categoryData = ref([]);

    async function getData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const payload = await response.json();
      categoryData.value = payload.categories;
    }

    getData();

    return { Card, categoryData };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search bar -->
    <p class="text-center fs-1 fw-bold text-success mt-5">Receipt Site</p>

    <div class="row mt-2 mb-4">
      <div class="col-10">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-success btn-lg w-100">
          🔍 Search
        </button>
      </div>
    </div>

    <!-- Card component list -->
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <Card
        v-for="data in categoryData"
        :key="data.idCategory"
        :category="data.strCategory"
        :description="data.strCategoryDescription"
        :image="data.strCategoryThumb"
      />
    </div>
  </div>
</template>

<style></style>
