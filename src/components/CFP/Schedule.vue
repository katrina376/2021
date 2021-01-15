<template>
    <div id="info-schedule">
        <!-- 重要時程 -->
        <h1>重要時程</h1>
        <p>
            <ul>
                <li>2021/01/15（五）投稿開始</li>
                <li>2021/02/22（一）日出（清晨 06:23）投稿截止</li>
                <li>3月上旬第一階段審稿結束，公告入選結果並開始收取第二階段補充資料</li>
                <li>3月下旬第二階段補充資料截止收取</li>
                <li>4月中旬第二階段審稿結束，隨後公佈完整議程</li>
                <li>2021/05/29（六）SITCON 2021</li>
            </ul>
        </p>
        <!-- 重要時程 -->
        <!-- 投稿主題範例 -->
        <h1>投稿主題範例</h1>
        <p>
            SITCON 作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
            除此之外，任何與資訊科技、電腦技術相關的講題，也都歡迎投稿！以下為幾個我們最近覺得有趣、和時事相關的主題範疇，可作為主題發想的靈感來源，提供給您參考：
        </p>
            <!-- there is a object arr named 'themeExample', each object have two value ie. title and content -->
        <p>
            除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（2013、 2014、 2015、 2016、 2017、2018、2019、2020）查看過去的議程。
            以下是我們以往的熱門議程，提供給您參考：
        </p>
        <h2>Presentation</h2>
            <!-- there is a object arr name 'presentation', each object have 'title' 'ytLink' 'introdLink' 'img' -->
        <h2>Espresso</h2>
            <!-- there is a object arr name 'espresso', each object have 'title' 'ytLink' 'introdLink' 'img' -->

        <!-- 投稿主題範例 -->
        <!-- Code of Conduct -->
        <h1>Code of Conduct</h1>
        <p>SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的<a><u>行為守則（Code of Conduct）</u></a>，共同創造一個友善的環境。</p>
        <!-- Code of Conduct -->
        {{themeExample[0].title}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import data
import themeExample from '../../../template/themeExample.cfp';
import espresso from '../../../template/espresso.cfp';
import presentation from '../../../template/presentation.cfp';
@Component({})
export default class Agenda extends Vue {
    private themeExample = themeExample;
    private espresso = espresso;
    private presentation = presentation;
}

</script>
