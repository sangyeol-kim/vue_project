<template>
  <div id="app">
    <!-- 등록한 컴포넌트를 Template 영역에 커스텀 엘레먼트로 추가한다. -->
    <app-header/>
    <memo-app/>
  </div>
</template>

<script>
// App 컴포넌트에서 AppHeader를 Custom element로 사용이 가능하다.
// 우리가 필요한 컴포넌트를 가져온다.
import AppHeader from "./components/AppHeader";
import MemoApp from "./components/MemoApp";

export default {
  name: "app",
  components: {
    // 위에서 등록한 컴포터넌트를 등록해준다.
    AppHeader,
    MemoApp
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
