<template>
    <div class="w-full h-full">
        <ClientOnly>
            <carousel :per-page="1" :autoplay="true" :loop="true" :speed="3000" :autoplay-timeout="6000"
                :autoplay-hover-pause="false">
                <slide v-for="(image, i) in images" :key="i">
                    <nuxt-img :src="image" sizes="sm:100vw md:50vw" loading="lazy" class="-rotate-90"
                        @click="index = i" />
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
                'DSC00063.JPG',
                'DSC00076.JPG',
                'DSC00109.JPG',
                'DSC00151.JPG',
                'DSC00161.JPG',
                'DSC00164.JPG',
                'DSC00167.JPG',
            ],
            index: null
        }
    }
}
</script>