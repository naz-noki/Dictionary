import { createStore } from 'vuex'

export const store = createStore({
    state:{
        link: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
    },

    mutations:{
        
    },

    actions:{
        
    },

    getters:{
        getLink(state){
            return state.link
        },
    }
})