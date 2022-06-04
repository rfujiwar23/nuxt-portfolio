import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ryo Fujiwara Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", type:"text/css", href:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500;1,600&display=swap' }
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,400;1,500;1,600;1,700&family=Noto+Sans+JP:wght@100;500;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faClock', 'faFolder', 'faEnvelope']
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
