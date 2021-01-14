<template>
  <div class="cfp">
    <h1>info</h1>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class Info extends Vue {
  @Prop() private msg!: string;
}
</script>
