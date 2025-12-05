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
              I am a Japanese–English bilingual UI/UX designer (and front-end developer). My career began in the broadcast industry, an experience that shaped how I think about storytelling, visuals, and user engagement. That foundation naturally guided me into web design and later front-end development, where I also gained practical back-end experience with PHP and Ruby on Rails.
              <br>
              While I enjoy development, I consider myself first and foremost a hands-on UIUX designer/developer. I’m passionate about turning ideas into tangible products—creating prototypes, building wireframes, and coding websites and apps that solve real user problems. 
            </p>
            <p class="py-2 px-3">My creativity is rooted in music. Having played piano since childhood and composed since junior high, I’ve carried that same mindset into my professional work: understanding rhythm, structure, and emotion, and translating them into digital experiences. I’m constantly exploring new technologies and trends, always looking for ways to create something meaningful and new.</p>
          <hr>
          <p class="py-2 px-3">日英バイリンガルのUI/UXデザイナー (兼フロントエンド開発者)。キャリアの出発点である放送業界で培ったストーリーテリングやビジュアル表現の感覚が、Webデザインとフロントエンド開発へ進む基盤となった。PHPやRuby on Railsによるバックエンド開発にも一定の経験を持つ。</p>
          <p class="py-2 px-3">UI/UXデザインにもっとも強い情熱があり、プロトタイプやワイヤーフレームの制作、Webサイト・アプリの構築といった“手を動かして形にする”プロセスを得意としている。</p>
          <p class="py-2 px-3">創造性の源は幼少期から続けているピアノと、中学時代からの作曲経験にあり、その感性をデジタルプロダクトづくりにも活かしている。常に新しい技術やトレンドに目を向け、ユーザーに価値ある体験を届けることを目指している。</p>
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
  background: rgb(21,43,68);
background: linear-gradient(180deg, rgba(21,43,68,1) 0%, rgba(34,82,93,0.6) 100%);
  /* background: url(https://res.cloudinary.com/rfujiwar23/image/upload/v1654312548/portfolio/tokyo1.png) no-repeat;
  background-position: center;
  background-size: cover; */
}


</style>
