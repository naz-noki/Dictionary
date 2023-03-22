<template @created="lolkek">
    <div class="wrapper">
       <form class="searchWord_block" @submit.prevent="getInfo">
            <input class="searchWord_inp" v-model="word">
            <button class="searchWord_btn">
                <img src="../img/icons8-search-ios-16-32.png" alt="" class="searchWord_btn_img">
            </button>   
       </form>
       <div class="wordInfo__block">
            <div class="wordInfo__block_name">
                {{ name }}
            </div>
            <div class="wordInfo__block_audio">
                <button class="wordInfo__block_audio-btn" @click="playAudio">
                    <img src="../img/icons8-громкий-звук-64.png" alt="" class="wordInfo__block_audio-img">
                </button>
            </div>
            <div 
                class="wordInfo__block__info"
                v-for="(el, idx) of wordInfo"
                :key="idx">
                    <div class="wordInfo__block__info__word" >
                            <span>Part Of Speach:</span>
                            <div class="__info__word">
                                {{ el.partOfSpeech }}
                            </div>
                    </div>
                    <div class="wordInfo__block__info__word"  v-if="el.antonyms.length>=1">
                        <span>antonyms:</span>
                        <div 
                            class="__info__word"
                            v-for="(antonym, idx) of el.antonyms"
                            :key="idx">
                                {{ antonym }}
                        </div>
                    </div>
                    <div class="wordInfo__block__info__word" v-if="el.synonyms.length>=1">
                        <span>synonyms:</span>
                        <div 
                            class="__info__word"
                            v-for="(synonym, idx) of el.synonyms"
                            :key="idx">
                                {{ synonym }}
                        </div>
                    </div>
                    <div class="wordInfo__block__info__word" v-if="el.definitions.length>=1">
                        <span>definitions:</span>
                        <div 
                            class="__info__word"
                            v-for="(definition, idx) of el.definitions"
                            :key="idx">
                                {{ definition.definition }}
                        </div>
                    </div>
            </div>
       </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default{
    setup(){

        const store: any = useStore();

        const link: any = computed((): string=>{return store.getters.getLink});
        const word: any = ref('hello');
        let wordInfo: any = ref([]);
        let name: any = ref(word.value);

        const getInfo = async () => {
            const res: Response = await fetch (`${link.value}${word.value}`);
            const data: any[] = await res.json();
            wordInfo.value = data[0].meanings;  
            name.value = word.value;
        }

        const playAudio = async () => {
            const res: Response = await fetch (`${link.value}${word.value}`);
            const data: any[] = await res.json();
            const { 0:{phonetics:{0:{audio:wordAudio}}} } = data;
            const audio = new Audio(`${wordAudio}`);
            audio.play();
        }

        onMounted(()=>{getInfo()})
        
        return { getInfo, word, playAudio, wordInfo, name, }
    }
}
</script>
