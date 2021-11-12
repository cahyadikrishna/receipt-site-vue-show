<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api/api.js";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Receipt",
  components: { Card, Search },
  setup(_, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const receiptData = ref([]);
    const keyword = ref("");

    async function searchData(query = "") {
      emit("loadingStatus", true);
      const payload = await api(`/search.php?s=${query}`, "GET");
      receiptData.value = payload.meals;
      emit("loadingStatus", false);
    }

    async function gotoPageSearchData() {
      router.push(`/receipt?keyword=${keyword.value}`);
      searchData(keyword.value);
    }

    async function getReceipt() {
      emit("loadingStatus", true);
      const payload = await api(
        `/filter.php?c=${route.params.category}`,
        "GET"
      );
      receiptData.value = payload.meals;
      emit("loadingStatus", false);
    }

    if (route.query && route.query.keyword) {
      searchData(route.query.keyword);
    } else {
      getReceipt();
    }

    return { receiptData, keyword, route, searchData, gotoPageSearchData };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search Section -->
    <p class="text-center fs-1 fw-bold text-success mt-5">
      {{ route.params.category || route.query.keyword }}
    </p>

    <Search />

    <!-- Card List Section -->
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-3">
      <Card
        v-for="data in receiptData"
        :key="data.idMeal"
        :category="data.strMeal"
        :image="data.strMealThumb"
        :link="`/detail/${data.idMeal}`"
      />
    </div>
  </div>
</template>
