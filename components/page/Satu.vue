<template>
    <div class="w-full h-full">
        <div
            class="absolute md:top-1/3 top-1/4 left-1/2 transform -translate-x-1/2 md:-translate-y-1/3 -translate-y-2/3 z-30 text-6xl font-black text-center nama text-white">
            Ema Ruly Pratiwi
        </div>
        <div
            class="absolute md:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-6xl font-black text-center nama text-white">
            <br class="md:hidden block" />
            <br class="md:hidden block" />
            &
        </div>
        <div
            class="absolute top-2/3 left-[40%] md:left-1/2 transform -translate-x-[30%] md:-translate-x-1/2 -translate-y-1/3 z-30 text-6xl font-black text-center nama text-white">
            Teo Anggara Nur Ramadhana
        </div>
        <div class="flex justify-center bg-gray-800">
            <nuxt-img preload :src="image" fit="cover" class="h-screen opacity-50" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image: null
        }
    },
    async fetch() {
        this.image = this.$store.state.bgUndangan.home
    }
}
</script>