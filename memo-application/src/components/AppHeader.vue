<template>
  <div class="app-header">
    <h1>메모 어플리케이션</h1>
    <p>
      <strong>{{ getMemoCount }}</strong>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppHeader",

  props: {
    // App 컴포넌트로 부터 memoCount를 내려받는다.
    memoCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(["getMemoCount"])
  }
};
</script>

<style scoped>
.app-header p {
  float: right;
  padding-top: 6px;
  font-size: 18px;
  vertical-align: bottom;
}
.app-header p strong {
  color: #ff5a00;
}
</style> 