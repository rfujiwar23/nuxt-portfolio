<template>
  <div class="wrapper">
    <Navbar />
    <IntroVideo />
    <SocialLinks />
    <h5 class="text-center" ref="title">VIDEO LIST</h5>
    
    <div class="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div class="grid lg:grid-cols-3 gap-4">
        <div
          class="shadow-lg bg-white m-3 w-full max-w-md mx-auto"
          v-for="article of articles"
          :key="article.slug"
        >
          <NuxtLink
            :to="{ name: 'video-slug', params: { slug: article.slug } }"
          >
            <div>
              <h2 class="text-sm py-3 pl-2 underline italic bg-stone-700 text-white font-bold">{{ article.title }}</h2>
              <img
                :src="require(`~/assets/images/${article.img}`)"
                alt="article.title"
              />
              <p class="text-xs py-3 pl-2 bg-stone-700 text-white">{{ formatDate(article.createdAt) }}</p>
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
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "video",
        "slug",
        "author",
        "createdAt",
      ])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
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
.wrapper {
  padding: 4vh 0;
  font-family: "Montserrat", sans-serif;
  position: relative;
}

.wrapper h5 {
  color: #f00;
}
</style>
