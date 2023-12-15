import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    tvList: [],
    searchKey: '',
    apiKey: 'a01536814a9012d0b06fa934f49c4c7b',
    apiURL: 'https://api.themoviedb.org/3/search/movie',
    apiURLtv: 'https://api.themoviedb.org/3/search/tv',
})