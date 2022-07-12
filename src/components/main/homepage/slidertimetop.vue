<template>
  <div class="part_slider_top_mainpage">
    <flickity class="carousel carousel-main" :options="flickityOptions">
      <div class="carousel-cell">
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
      <div class="carousel-cell S-all-flex">
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
      <div class="carousel-cell">
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
      <div class="carousel-cell">
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
      <div class="carousel-cell">
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
    </flickity>
  </div>
</template>

<script>
// import Flickity from "vue-flickity";

export default {
  name: "NovincharmSlidertimetop",
  // components: { Flickity },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 6000,
        pauseAutoPlayOnHover: false,
        lazyLoad: true,
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.carousel {
  background: #fafafa;
  width: 94.5%;
  height: 80vh;
  margin: 0 auto;
}

.carousel-cell {
  width: 100%;
  height: 100%;
  margin-right: 10px;
  background: red;
  border-radius: 5px;
  counter-increment: carousel-cell;
}

.carousel-cell:nth-child(1) {
  display: flex;
  justify-content: center;
  background-image: url("https://s6.uupload.ir/files/1650450409_inpq.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-cell:nth-child(2) {
  display: flex;
  justify-content: center;
  background-image: url("https://s6.uupload.ir/files/1650883008_8kro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-cell:nth-child(2) {
  text-align: center;
}

.carousel-cell:nth-child(2) img {
  width: 700px;
  margin: 0 auto;
}

.carousel-cell:nth-child(3) {
  background-image: url("https://s6.uupload.ir/files/1646628253_(1)_sgi8.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-cell:nth-child(4) {
  background-image: url("https://s6.uupload.ir/files/1650450409_inpq.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-cell:nth-child(5) {
  background-image: url("https://s6.uupload.ir/files/1650883008_8kro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-nav .carousel-cell {
  height: 500px;
  width: 100px;
}

.carousel-nav .carousel-cell:before {
  font-size: 50px;
  line-height: 80px;
}

.carousel-nav .carousel-cell.is-nav-selected {
  background: #ed2;
}

[data-ca3_icon]::before {
  font-weight: normal;
  content: attr(data-ca3_icon);
}

.ca3-scroll-down-arrow {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
  background-size: contain;
  background-repeat: no-repeat;
}

.ca3-scroll-down-link {
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin: 0px 0 0 -40px;
  line-height: 60px;
  position: absolute;
  left: 52%;
  bottom: 0px;
  color: #fff;
  text-align: center;
  font-size: 150px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
  -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
  animation: ca3_fade_move_down 2s ease-in-out infinite;
}

/*animated scroll arrow animation*/
@-webkit-keyframes ca3_fade_move_down {
  0% {
    -webkit-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
}
@-moz-keyframes ca3_fade_move_down {
  0% {
    -moz-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(0, 20px);
    opacity: 0;
  }
}
@keyframes ca3_fade_move_down {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}

@media screen and (max-width: 1000px) {
  .carousel {
    height: 50vh;
    margin: 1.5rem auto;
  }
}
</style>
