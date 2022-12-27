<template>
  <div class="bg-gray-200">
    <div v-if="!open">
      <div
        class="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-40 text-2xl text-white text-center leading-none">
        Kepada Yth Bapak/Ibu/Saudara(i):
      </div>
      <div
        class="fixed top-[37%] md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[37%] md:-translate-y-1/3 z-40 text-3xl text-white text-center leading-none font-bold">
        {{ $route.query.to }}
      </div>
      <div @click="opened()"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-xl text-gray-500 text-center cursor-pointer bg-white opacity-50 hover:opacity-75 rounded-full p-2 md:p-4">
        Buka Undangan
      </div>
      <ClientOnly>
        <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-enabled="false" :speed="3000"
          :autoplay-timeout="6000" :autoplay-hover-pause="false" :mouse-drag="false" :touch-drag="false">
          <slide v-for="(image, i) in images" :key="i" class="bg-slate-700">
            <!-- <div class="h-screen bg-center bg-contain bg-no-repeat brightness-50"
              :style="{ backgroundImage: `url(${image})` }">
              <div class="h-screen bg-center bg-contain bg-repeat opacity-50"
                :style="{ backgroundImage: `url(${image})` }">
              </div>
            </div> -->
            <div class="flex justify-center">
              <nuxt-img preload :src="image" fit="cover" class="h-screen opacity-50" />
            </div>
          </slide>
        </carousel>
      </ClientOnly>
    </div>

    <Transition>
      <div v-if="open">
        <showAt breakpoint="mediumAndAbove">
          <Header />
          <Page />
        </showAt>
        <hideAt breakpoint="mediumAndBelow">
          <Page />
          <Header />
        </hideAt>
        <showAt breakpoint="mediumAndBelow">
          <Page />
          <Header />
        </showAt>
        <hideAt breakpoint="mediumAndAbove">
          <Header />
          <Page />
        </hideAt>
      </div>
    </Transition>
  </div>
</template>

<script>
import Page from "../components/Page.vue";
import { showAt, hideAt } from 'vue-breakpoints'

export default {
  name: "IndexPage",
  components: {
    Page,
    showAt,
    hideAt
  },
  data() {
    return {
      open: false,
      images: null
    }
  },
  async fetch() {
    this.images = this.$store.state.bgUndangan.webp
  },
  methods: {
    opened() {
      this.open = !this.open
    }
  }
}
</script>
<style>
.mapouter {
  position: relative;
  text-align: right;
  /* height: 500px;
    width: 500px; */
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  /* height: 500px;
    width: 500px; */
}

.courier {
  font-family: 'Courier Prime', monospace;
}

html,
body {
  font-family: 'Poppins', sans-serif;
}

.nama {
  font-family: 'Tangerine', cursive;
}

/* style transisi buka */
.v-enter-active,
.v-leave-active {
  transition-duration: 1600ms;
}

.v-enter-active::before,
.v-leave-active::before,
.v-enter-active::after,
.v-leave-active::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-v: 2;
  display: block;
  width: 100%;
  height: 50%;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
}

.v-enter-active::before,
.v-leave-active::before {
  background-color: #2e2e2e;
}

.v-enter-active::after,
.v-leave-active::after {
  top: 50%;
  background-color: #2e2e2e;
}

.v-leave::before,
.v-leave::after {
  transform: scaleX(0);
}

.v-leave-active::before {
  transition-duration: 800ms;
}

.v-leave-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}

.v-leave-to::before,
.v-leave-to::after {
  transform: scale(1);
  transform-origin: right;
}

.v-enter::before,
.v-enter::after {
  transform: scaleX(1);
}

.v-enter-active::before {
  transition-duration: 800ms;
}

.v-enter-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}

.v-enter-to::before,
.v-enter-to::after {
  transform: scaleX(0);
  transform-origin: left;
}

/* style transisi buka */
</style>