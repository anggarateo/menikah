<template>
    <div class="w-full h-full">
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :speed="3000" :autoplay-timeout="6000"
                pagination-active-color="#334155" pagination-color="#88aee3" :mouse-drag="false">
                <slide v-for="(image, i) in images" :key="i">
                    <div class="flex justify-center">
                        <nuxt-img :src="image" loading="lazy" @click="index = i"
                            class="cursor-pointer h-[30rem] md:h-[26rem]" />
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
        this.images = this.$store.state.bgUndangan.slideshow
    }
}
</script>