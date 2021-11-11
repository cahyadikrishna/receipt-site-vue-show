<script>
import { ref } from "vue";
import Card from "@/components/Card.vue";
import api from "@/api/api.js";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: { Card },
  setup(_, { emit }) {
    const router = useRouter();
    const categoryData = ref([]);
    const keyword = ref("");

    async function gotoPageSearchData() {
      if (keyword.value !== "") {
        router.push(`/receipt?keyword=${keyword.value}`);
      }
    }

    async function getCategoryData() {
      emit("loadingStatus", true);
      const payload = await api("/categories.php", "GET");
      categoryData.value = payload.categories;
      emit("loadingStatus", false);
    }
    getCategoryData();

    return { Card, categoryData, gotoPageSearchData, keyword };
  },
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center">
    <!-- Search bar -->
    <p class="text-center fs-1 fw-bold text-success mt-5">Receipt Site</p>

    <div class="row mt-2 mb-md-4">
      <div class="col-12 col-md-10">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Search here..."
          v-model="keyword"
        />
      </div>
      <div class="col-12 col-md-2 mt-2 mt-md-0">
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
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <Card
        v-for="data in categoryData"
        :key="data.idCategory"
        :category="data.strCategory"
        :description="data.strCategoryDescription"
        :image="data.strCategoryThumb"
        :link="`/receipt/${data.strCategory}`"
      />
    </div>
  </div>
</template>

<style></style>
