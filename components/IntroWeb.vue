<template>
  <div class="intro m-5 p-8 bg-white-500">
    <h2>Summary</h2>
    <p>
      I've always wanted to create a web service that allows online streaming to
      happen, and I took some classes in college on web design, mostly HTML/CSS
      basics. However, I eventually learned HTML/CSS, jQuery/JavaScript on my
      own in creating e-commerce and corporate page designs, getting a
      certificate in Web Designs back in 2014. <br />
      Though I made websites, I eventually figured that I couldn't create some
      websites, as they were really web-apps, as my initial attempts at Vue.js
      and React.js were almost complete disaster. I attended
      <a href="https://www.lewagon.com/tokyo">Le Wagon Tokyo</a> to educate
      myself on full-stack development, learning about HTML, CSS, Bootstrap,
      JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails, and creating
      AirBnb clone, and also creating an English-Speaking App with the team.
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
    <div class="list">
      <ul>
        <li v-for="type in prototypes" :key="type.id">
          <i :class="type.text" class="colored"></i>
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
      ],
      prototypes: [
        { text: "devicon-figma-plain", id: 1 },
        { text: "devicon-aftereffects-plain", id: 2 },
        { text: "devicon-xd-plain", id: 3 },
        { text: "devicon-photoshop-plain", id: 4 },
        { text: "devicon-illustrator-plain", id: 5 },
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
