<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import api from "@/api/api.js";

export default {
  name: "Receipt",
  components: { Card },
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

    return { receiptData, route, searchData, gotoPageSearchData, keyword };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search bar -->
    <p class="text-center fs-1 fw-bold text-success mt-5">
      {{ route.params.category || route.query.keyword }}
    </p>

    <div class="row mt-2 mb-4">
      <div class="col-10">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Search here..."
          v-model="keyword"
        />
      </div>
      <div class="col-2">
        <button
          @click="gotoPageSearchData"
          type="button"
          class="btn btn-outline-success btn-lg w-100"
        >
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
        :link="`/detail/${data.idMeal}`"
      />
    </div>
  </div>
</template>
