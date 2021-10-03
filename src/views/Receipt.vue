<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Card from "@/components/Card.vue";

export default {
  name: "Receipt",
  components: { Card },
  setup() {
    const route = useRoute();

    const receiptData = ref([]);

    async function getReceipt() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`
      );
      const payload = await response.json();
      receiptData.value = payload.meals;
    }

    getReceipt();

    return { receiptData, route };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search bar -->
    <p class="text-center fs-1 fw-bold text-success mt-5">
      {{ route.params.category }}
    </p>

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
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-3">
      <Card
        v-for="data in receiptData"
        :key="data.idMeal"
        :category="data.strMeal"
        :image="data.strMealThumb"
      />
    </div>
  </div>
</template>
