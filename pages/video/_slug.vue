<template>
  <div>
    <Navbar />
    <div class="m-6">
        <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
        </nav>

      <article>
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        
        <div class="video-player shadow-xl">
            <video-player :src="article.video"/>
            <p>{{ article.bodyText }}</p>
        </div>

        <!-- <img
          :src="require(`~/assets/images/${article.img}`)"
          :alt="article.alt"
          class="p-4"
        /> -->
        
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
        
        <nuxt-content :document="article" />
        <!-- <author :author="article.author" /> -->
      </article>
    </div>
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
</style>
