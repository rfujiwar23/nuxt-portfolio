<template>
  <div class="wrap">
    <Navbar />
    <div class="jumbotron">
      <div class="intro">
        
        <div class="message">
          <p>
            I am a UIUX Designer/Developer and Video Producer/Editor based in
            Tokyo, Japan. Born in Japan, but US made. I enjoy jogging, boxing,
            and jazz: my love for jazz big band composition will never go away.
            &#128521;
          </p>
        </div>
      </div>
      
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
    <div class="p-5 rounded-lg">
      <h1>Ryo Fujiwara</h1>
      <h3>UI UX Designer/Developer</h3>
      <h3>Video Producer</h3>
      <p>Site Built with Nuxt.js and Tailwind CSS</p>      
      </div>
    <div class="text-lg font-bold text-center p-14 rounded-lg">
      <img src="~/assets/images/ryo-fujiwara.png" alt="Ryo Fujiwara" class="profile-pic">
    </div>
    <!-- <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg col-span-2">
       I am a UIUX Designer/Developer and Video Producer/Editor based in
            Tokyo, Japan. Born in Japan, but US made. I enjoy jogging, boxing,
            and jazz: my love for jazz big band composition will never go away.
            &#128521;
    </div> -->
    <!-- <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg col-span-4">4</div> -->
</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* html, body {
  height:100%;
} */
.wrap {
  background: rgb(7, 17, 66);
  background: linear-gradient(
    0deg,
    rgba(7, 17, 66, 1) 0%,
    rgba(133, 137, 240, 1) 100%
  );
  height: 100%;
}

.profile-pic {
  border-radius: 50%;
  box-shadow: 1px 3px 6px rgba(50,50,50,0.66);
}
</style>
