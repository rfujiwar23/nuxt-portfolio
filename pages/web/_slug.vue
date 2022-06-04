<template>
  


  <div class="web-wrapper">
    <Navbar />
    
    
    <div class="inner">

      <div class="pt-5 mb-4 px-3 text-sm text-pink-600 underline"><NuxtLink to="./">Go Back</NuxtLink ></div>

      <article class="pt-8">
        
        <h2 class="underline ml-3 text-2xl">{{ post.title }}</h2>
        <p class="ml-3 mt-2 pb-5" v-html="post.description"></p>
        <div class="video-player shadow-xl py-3 px-5 bg-white mb-10">
            <!-- <video-player :src="post.video"/> -->
            <img
                :src="require(`~/assets/images/${post.img}`)"
                alt="post.title"
                class="mx-auto my-3 px-4"
              />
            <p class="text-sm leading-8"><a v-bind:href="post.url">Click for Link</a></p>
            <p class="text-sm text-green-900 leading-8">Project Posted At: {{formatDate(post.createdAt)}}<br>
            Post last Updated: {{ formatDate(post.updatedAt) }}</p>
            <div class="rounded mx-auto bg-slate-200 p-3 my-5">
            
            <p class="body leading-8"><span class="text-green-900 italic text-xl">Description:</span></p>
            <p class="body leading-8" v-html="post.bodyText"></p>
            </div>
        </div>
      </article>
      <article>
    

    <nuxt-content :document="post" />
    </article>
    </div>
    
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import SlugFooter from '../../components/SlugFooter.vue';

library.add(faSpinner, faAlignLeft)

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
    components: { SlugFooter }
};
</script>

<style scoped>
.web-wrapper {
  padding:4vh 0 2vh;
  background:rgb(216, 237, 212);
}

.web-wrapper .inner {
  padding-top: 4vh;
  padding-left: 3vw;
  padding-right: 3vw;
  
}
</style>
