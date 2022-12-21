<template>
    <div class="w-full h-full">
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :speed="3000" :autoplay-timeout="6000"
                :autoplay-hover-pause="false">
                <slide v-for="(image, i) in images" :key="i">
                    <nuxt-img :src="image" sizes="sm:100vw md:25vw" loading="lazy" @click="index = i" />
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
            images: [
                'DSC00063.webp',
                'DSC00076.webp',
                'DSC00109.webp',
                'DSC00151.webp',
                'DSC00161.webp',
                'DSC00164.webp',
                'DSC00167.webp',
            ],
            index: null
        }
    }
}
</script>