<template>
    
    <div class="wrapper">
        <Navbar />
        <SocialLinks />
        <div class="profile sm:w-2/3 w-11/12 py-4 mx-auto bg-lime-200 bg-opacity-75">
            <div class="sm:w-1/3 w-1/2 mx-auto">
                <h1><img src="https://res.cloudinary.com/rfujiwar23/image/upload/v1594200193/portfolio-page/logo_ryo_fujiwara.png" alt="Ryo Fujiwara" class="img"></h1>
            </div>
            <h6 class="py-3 px-3 text-sm font-bold italic text-sm"><span class="underline">Bachelor of Arts:</span> Indiana University '07</h6>
            <p class="py-2 px-3">
              I am JP/ENG bilingual, based in Tokyo, Japan. <br>
              I've initially started my career in the broadcast industry, and I attribute that part of my career very important in my path to becoming a web designer first, and then 
              becoming a front-end developer, though I am proficient in back-end (php and Ruby on Rails) to some extent. 
              <br>
              I consider myself more hands-on UIUX designer because I love designing so much.  But attending Le Wagon Coding Bootcamp and my experience in directing and producing home-shopping videos, I
              developed entrepreneurial skills.  
            </p>
            <p class="py-2 px-3">I attribute a lot of my interests to piano, and constantly have my eyes opened for new trends in technology, and why I find myself creating
                websites, videos, and big band charts with my MacBook a good chunk of my time.</p>

                <div class="pt-3 mb-4 px-3 text-sm text-pink-600 underline"><NuxtLink to="./"><span>&#8592;</span> Back</NuxtLink ></div>
        </div>
    </div>
</template>

<script>
export default {
  head: {
    htmlAttrs: {
      class: 'html-class'
    },
    bodyAttrs: {
      class: 'body-class'
    }
  }
}
</script>


<style scoped>

.html-class {
  height: 100%;
}
.body-class {
  height: 100%;
  background:#0ff3d0;
}
.wrapper {
    width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://res.cloudinary.com/rfujiwar23/image/upload/v1654312548/portfolio/tokyo1.png) no-repeat;
  background-position: center;
  background-size: cover;
}


</style>