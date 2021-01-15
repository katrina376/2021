<template>
  <div class="cfp">
    <CfpHeader id="cfp-header"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CfpHeader from '@/components/CFP/Header.vue';

@Component({ components: { CfpHeader } })
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "@/assets/scss/CFP/CFP.scss";
</style>

