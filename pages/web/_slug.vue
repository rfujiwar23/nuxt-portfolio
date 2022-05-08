<template>
  


  <div class="web-wrapper">
    <Navbar />
    <div class="sm:m-0 md:m-6">
        <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
        </nav>

      <!-- <article>
        <h2 class="underline ml-3">{{ article.title }}</h2>
        <p class="ml-3 mt-2 pb-5">{{ article.description }}</p>
        <div class="video-player shadow-xl">
            <video-player :src="article.video"/>
            <p class="text-sm leading-8"><a v-bind:href="article.url">Main Video Page</a></p>
            <p class="text-sm text-green-900 leading-8">Project Posted At: {{formatDate(article.createdAt)}}<br>
            Post last Updated: {{ formatDate(article.updatedAt) }}</p>
            <div class="rounded mx-auto bg-slate-200 p-3 my-5">
            <p class="body leading-8"><span class="text-green-900 italic text-xl">Description:</span></p>
            <p class="body leading-8" v-html="article.bodyText"></p>
            </div>
        </div>
      </article> -->
      <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <img :src="post.img" :alt="post.alt" />
    <p>post last updated: {{ formatDate(post.updatedAt) }}</p>

    <nuxt-content :document="post" />
    </article>
    </div>
    <Footer />
  </div>
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

<style scoped>
.web-wrapper {
  padding:4vh 0 0;
}
</style>
