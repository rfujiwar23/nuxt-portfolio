<template>
  <div class="web-wrapper relative">
    <Navbar />
    <IntroWeb />
    <SocialLinks />
    <div
      class="h-full px-6 pt-0 lg:flex lg:justify-center lg:items-center contents">
      <div class="grid lg:grid-cols-3 gap-4 md:grid-cols-2 gap-12">
        <div
          class="shadow-lg rounded-sm w-full"
          v-for="post of posts"
          :key="post.slug"
        >
          <NuxtLink :to="{ name: 'web-slug', params: { slug: post.slug } }">
            <div>
              <h2 class="text-sm py-3 pl-2 underline italic bg-teal-600 font-bold text-white">
                {{ post.title }}
              </h2>
              <img
                :src="require(`~/assets/images/${post.img}`)"
                alt="post.title"
              />
              <p class="text-xs py-3 pl-2 bg-teal-600 text-white">{{ formatDate(post.createdAt) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
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

<style scoped>
.web-wrapper {
  font-family: "Montserrat", sans-serif;
  padding: 5vh 0 0;
  background: rgb(216, 237, 212);
}

.contents {
  padding-bottom: 5vh;
}
</style>
