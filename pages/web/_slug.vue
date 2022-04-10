<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <img :src="post.img" :alt="post.alt" />
    <p>post last updated: {{ formatDate(post.updatedAt) }}</p>

    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();

    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
