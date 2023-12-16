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
    <div>
        <input type="text" placeholder="Cerca film o serie TV" v-model="this.store.searchKey" id="search">
        <button @click="$emit('search')">Search</button>
    </div>
</template>

<style scoped lang="scss">
input {
    width: 250px;
    margin-right: 20px;
}

button {
    padding: 0 15px;
}
</style>