<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import api from "@/api/api.js";

export default {
  name: "Detail",
  setup(_, { emit }) {
    const route = useRoute();

    const data = ref([]);
    const ingredients = ref([]);

    async function getDetailData() {
      emit("loadingStatus", true);

      const payload = await api(`/lookup.php?i=${route.params.id}`);
      data.value = payload.meals[0];
      for (let i = 1; i <= 20; i++) {
        if (data.value[`strIngredient${i}`]) {
          ingredients.value.push(
            data.value[`strIngredient${i}`] +
              " (" +
              data.value[`strMeasure${i}`] +
              ")"
          );
        }
      }
      console.log(data.value.strInstructions);

      emit("loadingStatus", false);
    }
    getDetailData();

    return { data, ingredients };
  },
};
</script>

<template>
  <div class="container">
    <p class="text-center fs-1 fw-bold text-success my-5">{{ data.strMeal }}</p>
    <div class="row">
      <div class="col-12 col-md-8">
        <img
          class="detail-img-size"
          :src="data.strMealThumb"
          alt="receipt image"
        />
      </div>
      <div class="col-12 col-md-4">
        <li v-for="ingredients in ingredients">
          {{ ingredients }}
        </li>
        <p class="mt-4">{{ data.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.detail-img-size {
  width: 100%;
  height: auto;
}
</style>
