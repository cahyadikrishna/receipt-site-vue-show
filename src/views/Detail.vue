<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import api from "@/api/api.js";

export default {
  name: "Detail",
  setup(_, { emit }) {
    const data = ref([]);
    const route = useRoute();

    async function getDetailData() {
      emit("loadingStatus", true);
      const payload = await api(`/lookup.php?i=${route.params.id}`);
      data.value = payload.meals[0];
      emit("loadingStatus", false);
    }
    getDetailData();

    return { data };
  },
};
</script>

<template>
  <div class="container">
    <p class="text-center">
      {{ data.idMeal }}
    </p>
    <p class="text-center">{{ data.strMeal }}</p>
    <img :src="data.strMealThumb" alt="" />
  </div>
</template>
