<template>
    <div>
        <sui-list>
            <sui-list-item v-for="card in data" :key="card.id">
                <card :data="card"
                      :id="card.id"
                      :date="card.data.date"/>
            </sui-list-item>
        </sui-list>
    </div>
</template>

<script>
    import card from './card'

    export default {
        name: "cardContainer",
        props: {
            data: Array
        },
        methods: {},
        components: {
            card
        }
    }
</script>

<style scoped>

</style>