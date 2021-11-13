<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Search",
  setup(_, { emit }) {
    const router = useRouter();
    const keyword = ref("");

    async function gotoPageSearchData() {
      if (keyword.value !== "") {
        router.push(`/recipe?keyword=${keyword.value}`);
        emit("search", keyword.value);
      }
    }

    return {
      keyword,
      gotoPageSearchData,
    };
  },
};
</script>

<template>
  <form @submit.prevent="gotoPageSearchData" class="row mt-2 mb-md-4">
    <div class="col-12 col-md-10">
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Search here..."
        v-model="keyword"
      />
    </div>
    <div class="col-12 col-md-2 mt-2 mt-md-0">
      <button type="submit" class="btn btn-outline-success btn-lg w-100">
        🔍 Search
      </button>
    </div>
  </form>
</template>
