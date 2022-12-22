<template>
    <div class="w-full h-full">
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :speed="3000" :autoplay-timeout="6000"
                :autoplay-hover-pause="false">
                <slide v-for="(image, i) in images" :key="i">
                    <div class="w-full h-screen bg-center bg-contain" :style="{ backgroundImage: `url(${image})` }"
                        @click="index = i">
                    </div>
                </slide>
            </carousel>
            <vgs :images="images" :index="index" @close="index = null" />
        </ClientOnly>
    </div>
</template>
<script>
import vgs from 'vue-gallery-slideshow'

export default {
    components: {
        vgs
    },

    data() {
        return {
            images: null,
            index: null
        }
    },
    async fetch() {
        this.images = this.$store.state.bgUndangan.webp
    }
}
</script>