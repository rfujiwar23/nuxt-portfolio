<template>
  <div id="app">
    
    <div class="container">
      <Navbar />
      <div class="me-myself-ryo md:w-1/6">
        <h2 class="text-center">RYO FUJIWARA</h2>
        <div class="img">
          <img
                
                src="~/assets/images/ryo-fujiwara.png"
                alt="Ryo Fujiwara"
            />
        </div>
        
      </div>
    
    <h1>I am 
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
        typeArray: ['an UIUX Developer', 'a Video Creator', 'a Japanese Bilingual', 'like a Swiss Army Knife'],
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


#app {
	 width: 100%;
	 height: 100vh;
	 display: flex;
	 justify-content: center;
	 align-items: center;
   background:url(https://res.cloudinary.com/rfujiwar23/image/upload/v1654312548/portfolio/tokyo1.png) no-repeat;
   background-position:center;
   /* background-size: cover; */

}
 h1 {
	 font-size: 3rem;
	 font-weight: normal;
   color:#fff;
}
 h1 span.typed-text {
	 color: #82e00f;
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

.me-myself-ryo {
  font-size: 1.25em;
  color:#fff;
}

@media screen and (max-width:500px) {
  h1 {
    font-size: 2em;
    padding:0 3vw;
  }

  .me-myself-ryo {
    padding: 0 3vw;
  }
}
 
</style>
