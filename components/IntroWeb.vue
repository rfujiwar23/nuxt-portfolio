<template>
  <div class="intro m-5 py-8 px-2 bg-white-500">
    <SocialLinks />
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
      myself on full-stack development, learning about HTML/CSS, Bootstrap,
      JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails, and creating
      AirBnb clone, and also creating an English-Speaking App with the team.  I'm most comfortable with 
      front-end development through my prior experience as a web designer, but my role in my current job calls upon to do back-end as well, as I am proficient
      with php and Rails as a back-end.  <br>
      <strong style="text-decoration:underline;">Got a mix of front-end development of apps and also web designs, most of those that are up in business, and have created since 2019. I've got more created prior to 2019, would share some of those privately.</strong>  

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
