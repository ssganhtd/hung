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
    <section class="posts">
      <div class="container">
        <div class="rows">
          <div class="col-new" v-for="(item, index) in posts" :key="index">
            <a :href="item.slug">
              <img
                :src="item.yoast_head_json.og_image[0].url"
                :alt="item.title.rendered"
              />
              <h3>{{ item.title.rendered }}</h3>
              <p v-html="item.excerpt.rendered"></p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  middleware: "ref",
  async asyncData({ $http, params }) {
    const posts = await $http.$get(
      `https://congvangvietnam.com/wp-json/wp/v2/posts?per_page=20`
    );
    return { posts };
  },
  head() {
    return {
      title: "News update",
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
  