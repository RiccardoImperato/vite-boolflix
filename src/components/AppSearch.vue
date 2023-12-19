<script >
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <!-- Serach input -->
    <div>
        <input @keyup.enter="$emit('search')" type="text" placeholder="Cerca film o serie TV" v-model="store.searchKey"
            id="search">
        <button @click="$emit('search')">Search</button>
    </div>
    <!--/ Serach input -->
</template>

<style scoped lang="scss">
input {
    all: unset;
    width: 250px;
    margin-right: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #222222;
}

button {
    all: unset;
    padding: 3px 15px;
    border: 2px solid white;
    border-radius: 5px;
}
</style>