<template>
    <div class="w-full h-full">
        <div
            class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-30 md:text-6xl text-4xl font-black text-center nama">
            Ema Ruly Pratiwi
        </div>
        <div
            class="absolute md:top-1/2 top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 md:text-6xl text-4xl font-black text-center nama">
            &
        </div>
        <div
            class="absolute top-2/3 left-[40%] transform -translate-x-[30%] -translate-y-2/3 z-30 md:text-6xl text-4xl font-black text-center nama">
            Teo Anggara Nur Ramadhana
        </div>
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-enabled="false" :speed="3000"
                :autoplay-timeout="6000" :autoplay-hover-pause="false" :mouse-drag="false" :touch-drag="false">
                <slide v-for="(image, i) in images" :key="i" class="bg-slate-300">
                    <!-- <div class="w-full h-screen bg-center bg-contain bg-repeat brightness-50"
                        :style="{ backgroundImage: `url(${image})` }">
                    </div> -->
                    <nuxt-img :src="image" fit="cover" class="h-screen opacity-75" />
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