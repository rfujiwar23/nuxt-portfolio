<template>
  <div>
    <Navbar />
    <h1>Video List</h1>
    
    <div class="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div class="grid lg:grid-cols-3 gap-12 lg:gap-0">
      <div class="w-full max-w-md mx-auto" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'video-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
           <img :src="require(`~/assets/images/${article.img}`)" alt="article.title">
          </div>
        </NuxtLink>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'video','slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()
        
      return {
        articles,
        
      }
      
    }
  }
</script>