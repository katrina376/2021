<template>
  <div id="cfp">
    <!--h1>cfp</h1-->
    <IntrodContainer></IntrodContainer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// components
import IntrodContainer from '@/components/cfp/IntrodContainer.vue';

@Component({
  components: { IntrodContainer }
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
