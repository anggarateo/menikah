<template>
    <div class="w-full h-full">
        <div
            class="absolute md:top-1/3 top-1/4 left-1/2 transform -translate-x-1/2 md:-translate-y-1/3 -translate-y-2/3 z-30 text-6xl font-black text-center nama text-white">
            Ema Ruly Pratiwi
        </div>
        <div
            class="absolute md:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-6xl font-black text-center nama text-white">
            <br />
            <br />
            &
        </div>
        <div
            class="absolute top-2/3 left-[40%] transform -translate-x-[30%] -translate-y-1/3 z-30 text-6xl font-black text-center nama text-white">
            Teo Anggara Nur Ramadhana
        </div>
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-enabled="false" :speed="3000"
                :autoplay-timeout="6000" :autoplay-hover-pause="false" :mouse-drag="false" :touch-drag="false">
                <slide v-for="(image, i) in images" :key="i" class="bg-slate-700">
                    <!-- <div class="w-full h-screen bg-center bg-contain bg-repeat brightness-50"
                        :style="{ backgroundImage: `url(${image})` }">
                    </div> -->
                    <div class="flex justify-center">
                        <nuxt-img preload :src="image" fit="cover" class="h-screen opacity-50" />
                    </div>
                </slide>
            </carousel>
        </ClientOnly>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: null
        }
    },
    async fetch() {
        this.images = this.$store.state.bgUndangan.webp
    }
}
</script>