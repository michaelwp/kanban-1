<template>
    <div id="app">
        <div id="dimmed">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import './assets/firebaseConfig';

    export default {}
</script>

<style>
    #app {
        height: 100vh;
        width: 100vw;
        background-image: url("./assets/main-bg.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #dimmed{
        padding: 50px;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
