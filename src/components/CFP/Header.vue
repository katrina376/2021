<template>
  <header class="sitcon-burnfont">
    <div class="spot-box text-center">
      <div class="sitcon-2021">
        <img alt="SITCON2021" src="~@/assets/image/burnfont/2021.svg" />
      </div>
      <div class="sitcon-name">
        <img alt="學生計算機年會" src="~@/assets/image/burnfont/sitcon.svg" />
      </div>
      <h1 class="sitcon-topic">
        <img alt="算盤的後裔" src="~@/assets/image/burnfont/topic.svg" />
      </h1>
    </div>
    <div class="info-box">
      <div class="cfp"><img src="~@/assets/image/burnfont/cfp.svg" /></div>
      <div class="date-location-wrapper">
        <div class="date"><img src="~@/assets/image/burnfont/date.svg" /></div>
        <div class="location">
          <img src="~@/assets/image/burnfont/location.svg" />
        </div>
      </div>
      <div class="info-wrapper">
        <div class="hexagon">
          <a rel="noopener" class="btn"
            ><img src="~@/assets/image/burnfont/info.svg"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CfpHeader extends Vue {}
</script>
