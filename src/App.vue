<script>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: { Footer, Loading },
  setup() {
    const loading = ref(false);

    function updateLoadingStatus(status) {
      console.log(status);
      loading.value = status;
    }

    return { loading, Footer, updateLoadingStatus, Loading };
  },
};
</script>

<template>
  <Loading v-if="loading" />
  <div v-show="loading === false">
    <router-view @loadingStatus="updateLoadingStatus" />
    <Footer />
  </div>
</template>
