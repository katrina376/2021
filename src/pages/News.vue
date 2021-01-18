<template>
  <div class="news">
      <NewsHeader id="news-header" />
      <h1>news</h1>
    <!-- <Footer></Footer> should be put at App.vue (?) -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NewsHeader from '@/components/NewsHeader.vue';

@Component({ components: { NewsHeader } })
export default class News extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "@/assets/scss/news.scss";
</style>
