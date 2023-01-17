// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/backend/**' : { ssr: false }  
    },
    build: {
      transpile: ["vuetify"],
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
  },
  modules: [
    // ต้องปิดถ้าทำบน Dev แต่ถ้า deploy จะใช้ได้
    // [
    //   '@nuxtjs/robots', 
    //   { 
    //     UserAgent: "*",
    //     Disallow: "",
    //     Sitemap: "http://a69702.sitemaphosting.com/3927666/sitemap.xml"
    //   },
    // ],
  ],
  });
  