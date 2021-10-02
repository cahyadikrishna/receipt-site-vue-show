<script>
export default {
  name: "Card",
  props: {
    category: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  setup() {
    const truncateText = (str, length, ending) => {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };

    return { truncateText };
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img :src="image" class="card-img-top" alt="nice pic" />
      <div class="card-body">
        <h5 class="card-title">{{ category }}</h5>
        <p class="card-text">
          {{ truncateText(description, 100) }}
        </p>
      </div>
      <div class="card-footer">
        <p class="text-end mb-0">
          <router-link :to="link" class="text-success">
            <small>Read more</small>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
