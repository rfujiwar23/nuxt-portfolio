<template>
  <div class="web-wrapper">
    <Navbar />
    <IntroWeb />
    <div
      class="h-full px-6 pt-0 pb-12 lg:flex lg:justify-center lg:items-center"
    >
      <div class="grid lg:grid-cols-3 gap-4 md:grid-cols-2 gap-12">
        <div
          class="shadow-lg bg-orange-100 rounded-sm w-full"
          v-for="post of posts"
          :key="post.slug"
        >
          <NuxtLink :to="{ name: 'web-slug', params: { slug: post.slug } }">
            <div>
              <h2 class="text-sm py-3 pl-2 underline italic">{{ post.title }}</h2>
              <img
                :src="require(`~/assets/images/${post.img}`)"
                alt="post.title"
              />
              <p class="text-xs py-3 pl-2">{{ formatDate(post.createdAt) }}</p>
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


<style scoped>
.web-wrapper {
  font-family: 'Montserrat', sans-serif;
  padding:5vh 0 0;
  background: rgb(182, 214, 230);
}
</style>