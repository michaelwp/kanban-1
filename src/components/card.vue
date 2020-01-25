<template lang="html">
    <div>
        <sui-card-group :items-per-row="1" id="card">
            <sui-card class="card">
                <sui-card-content>
                    <sui-image
                            :src="data.data.imgProfile"
                            class="right floated imgProfile"
                    />
                    <sui-card-header>{{ data.data.title }}</sui-card-header>
                    <sui-card-meta>{{ formatDate }}</sui-card-meta>
                </sui-card-content>
                <sui-card-content>
                    <sui-card-description>
                        {{ data.data.content }}
                    </sui-card-description>
                </sui-card-content>
                <sui-card-content extra>
                    <sui-container text-align="center">
                        <sui-button-group>
                            <sui-button basic positive @click="updateData" v-if="isAction">{{ data.data.action }}</sui-button>
                            <sui-button basic negative @click="deleteData">Dismiss</sui-button>
                        </sui-button-group>
                    </sui-container>
                </sui-card-content>
            </sui-card>
        </sui-card-group>
    </div>
</template>

<script>
    const db = firebase.firestore();

    export default {
        name: "card",
        data() {
            return {
                isAction: true
            }
        },
        props: {
            data: Object,
            id: String,
            date: Object,
        },
        methods: {
            updateData: function () {
                let action = null;

                switch (this.action) {
                    case "In Progress":
                        action = "Ready";
                        break;
                    case "Ready":
                        action = "Completed";
                        break;
                }

                db.collection("kanban-list")
                    .doc(this.id)
                    .update({
                        status: this.action,
                        action: action
                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        this.$emit('loadNewData')
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            },
            deleteData: function () {
                db.collection("kanban-list")
                    .doc(this.id)
                    .delete()
                    .then(() => {
                        console.log("Document successfully deleted!");
                        this.$emit('loadNewData')
                    })
                    .catch(function (error) {
                        console.error("Error deleting document: ", error);
                    });
            },
            hideAction: function () {
                if (this.action === null) {
                    this.isAction = false;
                }
            }
        },
        mounted() {
            this.hideAction()
        },
        computed: {
            formatDate: function () {
                let oldFormatDate = new Date(this.date.seconds * 1000);
                let newFormatDate = oldFormatDate.getDate() +
                    "/" + oldFormatDate.getMonth() + "/" + oldFormatDate.getFullYear();
                return newFormatDate
            }
        }
    }
</script>

<style scoped>
    .imgProfile {
        width: 25px;
    }

    #card {
        min-width: 275px;
        max-width: 275px;
    }
</style>