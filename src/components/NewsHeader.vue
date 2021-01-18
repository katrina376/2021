<template>
  <header>
    <div class="top-bar">
      <div class="return-wrapper">
        <a class="shape-wrapper diamond" href="#"
          ><span class="text-wrapper">返回</span></a
        >
      </div>
      <div class="title-wrapper text-center">
        <img src="~@/assets/image/burnfont/news.svg" class="svg svg-cfp-news" />
      </div>
      <div class="contribute-wrapper"><span>我要投稿</span></div>
    </div>
    <div class="cfp-body">
      <div class="spot-wrapper">
        <h1 class="text-center">現正徵稿中<span class="ignore">！</span></h1>
        <!-- TODO counter -->
        <p class="text-center countdown">
          距離投稿截止還有 129 天 12 小時 12 分 12 秒
        </p>
      </div>
      <div class="time-wrapper">
        <div class="start-time-wrapper">
          <h2>投稿開始</h2>
          <p>2021/01/15（五）</p>
        </div>
        <div class="tilde-wrapper">
          <h2><!-- pseudo element --></h2>
          <p>～</p>
          <p></p>
        </div>

        <div class="end-time-wrapper">
          <h2>投稿結束</h2>
          <p>2021/02/22（一）日出<small>（清晨 06：23）</small></p>
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
