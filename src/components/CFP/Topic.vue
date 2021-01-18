<template>
    <div class="topic-example">
        <h1 class="topic">{{ topic }}</h1>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Topic extends Vue {
    @Prop({ required: true }) private topic!: string;
    @Prop({ required: true }) private description!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/topic.scss';
</style>