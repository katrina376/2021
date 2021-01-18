<template>
    <div class="agenda card">
        <a class="image container" :href="ytlink" target="_blank" rel="noopener">
            <img :src="img">
        </a>
        <a class="description" :href="introd" target="_blank" rel="noopener">{{ title }}</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AgendaCard extends Vue {
    @Prop({ required: true }) private ytlink!: string;
    @Prop({ required: true }) private introd!: string;
    @Prop({ required: true }) private title!: string;
    @Prop({ required: true }) private img!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/card.scss';
</style>