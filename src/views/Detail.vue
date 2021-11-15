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

    // Get the detail, ingredients list, and the measerure units
    // from API
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
      <div class="col-12 col-md-5">
        <img
          class="detail-img-size"
          :src="data.strMealThumb"
          alt="recipe image"
        />
      </div>
      <div class="col-12 col-md-7">
        <p class="mt-4 mt-md-0 mb-3 fw-bold fs-5">Ingredients:</p>
        <ul>
          <li v-for="ingredients in ingredients">
            {{ ingredients }}
          </li>
        </ul>
        <p class="mb-3 fw-bold fs-5">Steps:</p>
        <p>{{ data.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-img-size {
  width: 100%;
  height: auto;
}
</style>
