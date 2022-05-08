<template>
  <div class="video-wrapper">
    <Navbar />
    <div class="sm:m-0 md:m-6">
        <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
        </nav>

      <article>
        <h2 class="underline ml-3">{{ article.title }}</h2>
        <p class="ml-3 mt-2 pb-5">{{ article.description }}</p>
        
        <div class="video-player shadow-xl">
            <!-- <img :src="require(`~/assets/images/${article.img}`)" alt=""> -->
            <video-player :src="article.video"/>
            <p class="text-sm leading-8"><a v-bind:href="article.url">Main Video Page</a></p>
            <p class="text-sm text-green-900 leading-8">Project Posted At: {{formatDate(article.createdAt)}}<br>
            Post last Updated: {{ formatDate(article.updatedAt) }}</p>
            <div class="rounded mx-auto bg-slate-200 p-3 my-5">
            <p class="body leading-8"><span class="text-green-900 italic text-xl">Description:</span></p>
            <p class="body leading-8" v-html="article.bodyText"></p>
            </div>
        </div>

        
        <!-- <nuxt-content :document="article" /> -->
        <!-- <author :author="article.author" /> -->
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

.video-wrapper {
  padding:8vh 0;
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
article {
      font-family: 'Montserrat', sans-serif;
}

article h2 {
    /* font-weight: bold; */
    font-size: 2em;
        font-family: 'Montserrat', sans-serif;
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
