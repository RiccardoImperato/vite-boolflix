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
        <input type="text" placeholder="Cerca film o serie TV" v-model="this.store.searchKey">
        <button @click="$emit('search')">Cerca</button>
    </div>
</template>

<style></style>