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
      loading.value = status;
    }

    return { loading, updateLoadingStatus };
  },
};
</script>

<template>
  <Header />
  <Loading v-if="loading" />
  <div v-show="loading === false">
    <router-view @loadingStatus="updateLoadingStatus" />
    <Footer />
  </div>
</template>
