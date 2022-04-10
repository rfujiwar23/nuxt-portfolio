<template>
  <div>
    <Navbar />
    <IntroWeb />
    <div
      class="h-full px-6 pt-0 pb-12 lg:flex lg:justify-center lg:items-center"
    >
      <div class="grid lg:grid-cols-3 gap-12 lg:gap-0">
        <div
          class="shadow-lg bg-white m-3 w-full max-w-md mx-auto"
          v-for="post of posts"
          :key="post.slug"
        >
          <NuxtLink :to="{ name: 'web-slug', params: { slug: post.slug } }">
            <div>
              <h2>{{ post.title }}</h2>
              <img
                :src="require(`~/assets/images/${post.img}`)"
                alt="post.title"
              />
              <p>{{ formatDate(post.createdAt) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts")
      .only(["title", "description", "img", "slug", "createdAt"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
