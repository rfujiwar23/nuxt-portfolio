<template>
  <!-- <div class="wrap">
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

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5"
      >
        <div class="p-5 rounded-lg">
          <p>Hello There!</p>
          <h1>Ryo Fujiwara</h1>
          <h3>UI UX Designer/Developer</h3>
          <h3>Video Producer</h3>
          <p>Site Built with Nuxt.js and Tailwind CSS</p>
          <h1>Coding is
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
        </div>
        <div class="text-lg font-bold text-center p-14 rounded-lg">
          <img
            src="~/assets/images/ryo-fujiwara.png"
            alt="Ryo Fujiwara"
            class="profile-pic"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div> -->
  
  <div id="app">
    <Navbar />
    <div class="container">
    
    <h1>I am a 
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
  </div>
  </div>
</template>

<script>
// export default {};
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['UIUX Developer', 'Video Producer'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>



<style scoped>

/* .wrap {
  background: rgb(7, 17, 66);
  background: linear-gradient(
    0deg,
    rgba(7, 17, 66, 1) 0%,
    rgba(133, 137, 240, 1) 100%
  );
}

.profile-pic {
  border-radius: 50%;
  box-shadow: 1px 3px 6px rgba(50, 50, 50, 0.66);
} */
.container {
	 width: 100%;
	 height: 100vh;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 h1 {
	 font-size: 6rem;
	 font-weight: normal;
}
 h1 span.typed-text {
	 color: #d2b94b;
}
 h1 span.cursor {
	 display: inline-block;
	 margin-left: 3px;
	 width: 4px;
	 background-color: #fff;
	 animation: cursorBlink 1s infinite;
}
 h1 span.cursor.typing {
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
 
</style>
