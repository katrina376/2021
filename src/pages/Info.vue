<template>
  <div class="info">
    
    <Schedule/>
    <Agenda/>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// components
import Schedule from '../components/CFP/Schedule.vue';
import Agenda from '../components/CFP/Agenda.vue';

@Component({
  components: {
    Agenda,
    Schedule
  }
})
export default class Info extends Vue {
  @Prop() private msg!: string;
}
</script>
