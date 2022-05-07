<template>
  <div class="video-wrapper">
    <Navbar />
    <div class="m-6 bg-green-500 md:bg-red-500 lg:bg-green-500">
        <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
        </nav>

      <article>
        <h1 class="underline">{{ article.title }}</h1>
        <p class="ml-3 mt-2 pb-5">{{ article.description }}</p>
        
        <div class="video-player shadow-xl">
            <!-- <img :src="require(`~/assets/images/${article.img}`)" alt=""> -->
            <video-player :src="article.video"/>
            <p class="text-sm"><a v-bind:href="article.url">Click Here</a></p>
            <p class="text-sm text-blue">Project Posted At: {{formatDate(article.createdAt)}}<br>
            Post last Updated: {{ formatDate(article.updatedAt) }}</p>
            <p class="text-red-800">{{ article.bodyText }}</p>
        </div>

        <!-- <img
          :src="require(`~/assets/images/${article.img}`)"
          :alt="article.alt"
          class="p-4"
        /> -->
        
        
        
        <nuxt-content :document="article" />
        <author :author="article.author" />
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>

import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')

components: {
    VideoPlayer
}


export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
body {
  background:hsl(56, 49%, 93%);
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
/* article {
  background: #fff;
} */

article h1 {
    font-weight: bold;
}

.video-player {
    padding:30px;
    background: #fff;
}

.video-player p {
    margin-top: 20px;
    padding:0 20px;
}

.video-player p a {
  text-decoration: underline;
}
</style>
