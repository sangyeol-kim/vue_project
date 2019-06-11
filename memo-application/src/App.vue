<template>
  <div id="app">
    <!-- 등록한 컴포넌트를 Template 영역에 커스텀 엘레먼트로 추가한다. -->
    <app-header :memo-count="memoCount" />
    <memo-app @change="updateMemoCount" />
  </div>
</template>

<script>
// App 컴포넌트에서 AppHeader를 Custom element로 사용이 가능하다.
// 우리가 필요한 컴포넌트를 가져온다.
import AppHeader from "./components/AppHeader";
import MemoApp from "./components/MemoApp";

export default {
  name: "app",

  data () {
    return {
      memoCount: 0
    }
  },
  components: {
    // 위에서 등록한 컴포터넌트를 등록해준다.
    AppHeader,
    MemoApp
  },
  method: {
    // MemoApp에서 change 이벤트가 발생되면 updateMemoCount 실행
    updateMemoCount (count) {
      this.memoCount = count
    }
  }
};
</script>

<style>
@import "./styles/reset.css";

#app {
  width: 560px;
  margin: 0 auto;
}
</style>
