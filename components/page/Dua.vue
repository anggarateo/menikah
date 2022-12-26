<template>
    <div class="w-full h-full md:p-8 p-4">
        <div class="md:flex md:flex-wrap items-center">
            <div class="md:flex md:flex-col h-screen md:w-1/2">
                <div data-aos="fade-right" data-aos-duration="1500" class="flex h-full sm:flex-row w-full">
                    <div class="w-full h-full bg-center bg-contain bg-no-repeat"
                        :style="{ backgroundImage: `url(${mempelai.putri})` }">
                        <div class="block md:hidden text-2xl font-medium p-4 text-center">Mempelai Perempuan</div>
                    </div>
                </div>
            </div>
            <div class="md:flex md:flex-col sm:h-1/2 p-4 md:w-1/2 text-center md:text-left">
                <div data-aos="fade-up" data-aos-duration="1500"
                    class="flex flex-row md:text-4xl text-2xl font-bold justify-center">
                    Ema Ruly Pratiwi
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Putri ke-empat dari pasangan (Alm.) Bapak Purwaji dan Ibu Suryani
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex justify-center py-8">
            <font-awesome-icon icon="fa-solid fa-venus-mars" class="text-6xl text-slate-500" />
        </div>
        <div class="md:flex md:flex-wrap items-center">
            <div class="md:flex md:flex-col sm:h-1/2 p-4 md:w-1/2 text-center md:text-right">
                <div data-aos="fade-up" data-aos-duration="1500" class="flex flex-row md:text-4xl text-2xl font-bold">
                    Teo Anggara Nur Ramadhana
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Putra pertama dari pasangan Bapak Sumaryono dan Ibu Titin Sunarminingsih
                </div>
            </div>
            <div class="md:hidden block py-20"></div>
            <div class="md:flex md:flex-col h-screen md:w-1/2">
                <div data-aos="fade-down" data-aos-duration="1500" class="flex h-full sm:flex-row w-full">
                    <div class="w-full h-full bg-center bg-contain bg-no-repeat"
                        :style="{ backgroundImage: `url(${mempelai.putra})` }">
                        <div class="block md:hidden text-2xl font-medium p-4 text-center">Mempelai Laki-laki</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import aos from '~/plugins/aos'

export default {
    mixins: [aos],
    data() {
        return {
            mempelai: null
        };
    },
    async fetch() {
        this.mempelai = this.$store.state.bgUndangan.mempelai
    }
}
</script>