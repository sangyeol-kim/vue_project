<template>
  <div class="memo-app">
    <memo-form @addMemo="addMemo"/>
    <memo/>
  </div>
</template>

<script>
import MemoForm from "./MemoForm";
import Memo from "./Memo";

export default {
  name: "MemoApp",
  created() {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
  },
  components: {
    MemoForm,
    Memo
  },
  methods: {
    // emit을 부모로 발생시킨 후 v-on 디렉티브를 이용하여 자식 컴포넌트에 콜백으로 연결
    addMemo(payload) {
      // MemoForm에서 올려받은 데이터를 먼저 컴포넌트 내부 데이터에 추가한다.
      this.memos.push(payload);
      // 내부 데이터를 문자열로 변환 후, 로컬 스토리지에 저장한다.
      this.storeMemo();
    },
    storeMemo() {
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem("memos", memosToString);
    }
  }
};
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>