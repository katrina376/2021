<template>
  <div class="info">
    
    <Agenda/>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


import Agenda from '../components/CFP/Agenda.vue';

@Component({
  components: {
    Agenda
  }
})
export default class Info extends Vue {
  @Prop() private msg!: string;
}
</script>
