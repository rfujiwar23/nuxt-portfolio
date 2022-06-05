<template>
  <div id="app" class="fill-height">
    
    <div class="container relative">
      <Navbar />

      <div class="lg:w-2/3 mx-auto text-center">
        <div class="lg:w-1/6 md:w-1/5 sm:w-1/3 w-1/3 mx-auto my-5">
          <img
            src="~/assets/images/ryo-fujiwara.png"
            alt="Ryo Fujiwara"
            style="border-radius: 50%"
          />
        </div>
        <div>
          <h1 class="text-white md:text-3xl text-xl">
            <span class="bg-gray-800 bg-opacity-75 px-5"
              >RYO FUJIWARA<fa icon="rotate-left" class="icon"
            /></span>
          </h1>
        </div>
        <div>
          <h2 class="my-3">
            <span class="kanji bg-gray-800 bg-opacity-75 px-3">藤原亮</span>
          </h2>
        </div>
        <div class="mt-5">
          <h2 class="md:text-3xl sm:text-3xl text-xl px-4 bg-gray-800 bg-opacity-75">
            I am
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h2>
        </div>
      </div>

      <SocialLinks />
      <!-- <div class="social-links fixed bottom-5 right-5 bg-teal-800 bg-opacity-60 py-2 px-3">
        <ul>
          <li class="inline pr-5"><a href="https://github.com/rfujiwar23" class="text-white"><i class="text-2xl devicon-github-original"></i></a></li>
          <li class="inline pr-5"><a href="https://www.linkedin.com/in/rfujiwara276/" class="text-white"><i class="text-2xl devicon-linkedin-plain"></i></a></li>
          <li class="inline pr-5"><a href="mailto:rfujiwar@gmail.com" class="text-white"><fa icon="envelope" class="text-2xl icon" /></a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
// export default {};
import { setTimeout } from "timers";
export default {
  head: {
    htmlAttrs: {
      class: "html-class",
    },
    bodyAttrs: {
      class: "body-class",
    },
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "a Front-End Developer",
        "a Video Creator",
        "a JP/ENG Bilingual",
        "like a Swiss Army Knife",
        "obsessed with Vue/Nuxt",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
.html-class {
  height: 100%;
}
.body-class {
  height: 100%;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://res.cloudinary.com/rfujiwar23/image/upload/v1654312548/portfolio/tokyo1.png) no-repeat;
  background-position: center;
  background-size: cover;
}
h2 {
  /* font-size: 3rem; */
  font-weight: normal;
  color: #fff;
}
h2 span.typed-text {
  color: #82e00f;
  text-shadow: 1px 3px 6px rgb(150, 241, 37);
}
h2 span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
h2 span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

.me-myself-ryo {
  font-size: 1.25em;
  color: #fff;
}

.kanji {
  font-family: "Zen Kaku Gothic New", sans-serif;
}

@media screen and (max-width: 768px) {
  /* .me-myself-ryo {
    margin:0 auto;
  } */
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 2em;
    padding: 0 3vw;
  }

  .me-myself-ryo {
    padding: 0 3vw;
  }
}
</style>
