<template>
  <div class="intro m-5 py-8 px-2 bg-white-500">
    <SocialLinks />
    <h2>Summary</h2>
    <p>
      Prior to 2019, I was a web designer, I eventually figured that I couldn't create some websites, as they were really web-apps, as my initial attempts at Vue.js and React.js were almost complete disaster. I attended Le Wagon Tokyo to educate myself on full-stack development, learning about HTML/CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails, and creating AirBnb clone, and also creating an English-Speaking App with the team. I'm most comfortable with front-end development through my prior experience as a web designer.  I am a UIUX designer more, but my current job has called me to be a front-developer as well.  With programming, I am most comfortable with Vue.js/Nuxt.js, and Rails and PHP.  With my experience in web designs, I love using SASS and Tailwind.
<br><br>
2019年以前はWebデザイナーとして働いていましたが、当時取り組んでいたサイトの中には、実質的には「Webアプリ」であるために、自分では作りきれないものがあることに気づきました。Vue.js や React.js に初めて挑戦したときは、ほぼ自滅するほどでした。<br>
そこで、フルスタック開発を学ぶのが一番だとわかり、2019年の1月に Le Wagon Tokyo に通い、HTML/CSS、Bootstrap、JavaScript ES6、SQL、Git、GitHub、Heroku、Ruby on Rails を習得し、Airbnb のクローン制作や、チームで英会話アプリを開発。<br>
以前にWebデザイナーとしての経験があるため、フロントエンド開発とUIUXデザインが最も得意です。現職はUIUXデザイナーとして入社しましたが、2023年末あたりから Springer Nature Group でプロダクトマネジメント寄りの仕事が増え、アクセシビリティ、ユーザージャーニー、ユーザーリサーチに基づいたページ開発に携わっています。
プログラミングでは Vue.js / Nuxt.js、Rails、PHP が最も得意です。Webデザインの経験から、SASS や Tailwind を使うことも好んでいます。<br>そして何よりも、日常生活にも通じますが、ユーザーエクスペリエンス（UX）、デジタルトランスフォーメーション（DX）、ユーザーフィードバックを重視し、「わかりやすい（Web）プロダクト」を作ることができれば良いと思っています。
    </p>
    <h2 class="mt-5">Skills</h2>
    <p>Mark-Up/Programming</p>
    <div class="list">
      <ul>
        <li v-for="icon in devIcons" :key="icon.id">
          <i :class="icon.text" class="colored"></i>
        </li>
      </ul>
    </div>
    <p>Image Editing/Prototype</p>
    <!-- <div class="list">
      <ul>
        <li v-for="type in prototypes" :key="type.id">
          <i :class="type.text" class="colored"></i>
        </li>
      </ul>
    </div> -->
    <div class="list">
      <ul>
        <li v-for="item in prototypes" :key="item.id">
          <i :class="item.text" class="colored"></i>
        </li>
      </ul>
    </div>
    <p>Others</p>
    <div class="list">
      <ul>
        <li v-for="icon in others" :key="icon.id">
          <i :class="icon.text" class="colored"></i>
        </li>
      </ul>
    </div>
    <h2 class="mt-5">Websites and Apps</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devIcons: [
        { text: "devicon-html5-plain", id: 1 },
        { text: "devicon-css3-plain", id: 2 },
        { text: "devicon-sass-original", id: 3 },
        { text: "devicon-tailwindcss-plain", id: 4 },
        { text: "devicon-bootstrap-plain", id: 5 },
        { text: "devicon-vuejs-plain-wordmark", id: 6 },
        { text: "devicon-nuxtjs-plain-wordmark", id: 7 },
        { text: "devicon-javascript-plain", id: 8 },
        { text: "devicon-ruby-plain", id: 9 },
        { text: "devicon-php-plain", id: 10 },
        { text: "devicon-drupal-plain", id: 11 },
        { text: "devicon-typescript-plain", id: 12 },
        { text: "devicon-wordpress-plain", id: 12 },
      ],
      prototypes: [
        { text: "devicon-figma-plain", id: 1 },
        { text: "devicon-aftereffects-plain", id: 2 },
        { text: "devicon-xd-plain", id: 3 },
        { text: "devicon-photoshop-plain", id: 4 },
        { text: "devicon-illustrator-plain", id: 5 },
        { text: "devicon-sketch-line", id: 6 },
        { text: "devicon-canva-original", id: 7 },
      ],
      others: [
        { text: "devicon-github-original", id: 1 },
        // { text: "devicon-canva-original", id: 2 },
        { text: "devicon-filezilla-plain", id: 2 },
      ],
    };
  },
};
</script>

<style scoped>
.intro h2 {
  font-size: 2em;
}

.intro p {
  line-height: 2em;
}

.intro p a {
  color: blue;
  text-decoration: underline;
}

.intro .list ul li {
  display: inline-block;
  font-size: 48px;
  margin-right: 10px;
}
</style>
