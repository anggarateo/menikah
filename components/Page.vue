<template>
    <div class="bg-gray-100">
        <div id="satu" class="flex flex-row w-screen h-screen pb-16">
            <Satu />
        </div>
        <div id="dua" class="flex pb-16">
            <Dua />
        </div>
        <div id="tiga" class="flex pb-16">
            <Tiga />
        </div>
        <div id="empat" class="flex flex-row w-screen h-screen py-16 md:py-2">
            <Empat />
        </div>
        <div class="md:block hidden text-3xl courier text-center">
            {{ '&lt;ema & teo /&gt;' }}
        </div>
    </div>
</template>
<script>
import aos from '~/plugins/aos'
import Satu from './page/Satu.vue';
import Dua from './page/Dua.vue';
import Tiga from './page/Tiga.vue';
import Empat from './page/Empat.vue';

export default {
    mixins: [aos],
    components: {
        Satu,
        Dua,
        Tiga,
        Empat
    }
}
</script>