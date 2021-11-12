<script>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Footer, Loading, Header },
  setup() {
    const loading = ref(false);

    function updateLoadingStatus(status) {
      console.log(status);
      loading.value = status;
    }

    return { loading, updateLoadingStatus };
  },
};
</script>

<template>
  <Loading v-if="loading" />
  <div v-show="loading === false">
    <Header />
    <router-view @loadingStatus="updateLoadingStatus" />
    <Footer />
  </div>
</template>
