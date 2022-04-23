<template>
  <div id="app">
    
    <div class="container">
      <Navbar />
    
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
        typeArray: ['an UIUX Developer', 'a Video Producer', 'like an Swiss Army Knife'],
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
	 font-size: 3rem;
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
