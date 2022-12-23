<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </div>
        <div class="menu">
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </header>
    <article class="container">
      <h1 v-html="post[0].title.rendered"></h1>
      <div v-html="post[0].date"></div>
      <section>
        <div class="" v-html="post[0].content.rendered"></div>
      </section>
    </article>
  </div>
</template>
  <script>
export default {
  mounted() {
    const query = this.$route.query;
    const slug = this.$route.params.slug;
    console.log(slug);
    if (query["fbclid"] != undefined) {
      console.log("facebook");
    //   this.$router.push("https://newspaper24hr.com/" + slug);
        location.href = 'https://newspaper24hr.com/' + slug
    }
  },

  async asyncData({ $http, params }) {
    const post = await $http.$get(
      `https://newspaper24hr.com/wp-json/wp/v2/posts?slug=${params.slug}`
    );
    return { post };
  },
  head() {
    return {
      title: this.post[0].title.rendered,
      meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post[0].yoast_head_json.og_description
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.post[0].yoast_head_json.og_title
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.post[0].yoast_head_json.og_description
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.post[0].yoast_head_json.og_image['url']
          }
        ]
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style>
body,
html {
  margin: 0 !important;
  padding: 0 !important;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
}
header {
  background: #000;
  padding: 15px;
}
header .logo img {
  max-width: 150px;
  height: 100%;
}
header .container {
  display: flex;
  align-items: center;
}
header .menu {
  margin-left: 30px;
}
header .menu a {
  color: #fff;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
h1 {
  margin-top: 1rem;
  font-size: 2.5rem;
}
img {
  width: 100%;
  height: 100%;
}
p {
  text-align: left;
}
</style>
  