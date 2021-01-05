import axios from "axios";

export const namespaced = true;

const apiClient = axios.create({
    baseURL: "/api/24h_volume"
});


export const state = {
    volumes: null
};

export const mutations = {
    SUCCESS_FETCH(state, payload){
        state.volumes = payload
    },
    // SUCCESS_FETCH_GENRES(state, payload){
    //     state.genres = payload
    // }
};

export const actions = {
    async fetchVolumes({commit}){
        try {
            const response = await apiClient.get('');
            console.log(response.data)
            // commit('SUCCESS_FETCH', response.data);
            // commit('SUCCESS_FETCH_GENRES', response.data.genres);
            // commit('NOW_PLAYING_MOVIES', response.data.playing);
            // console.log(response.data.genres);
        } catch (e) {
            console.log(e.response.data.msg);
        }
    }
};
