<template>
  <div class="memo-app">
    <memo-form @addMemo="addMemo"/>
    <ul class="memo-list">
      <memo
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo"
        @deleteMemo="deleteMemo"
        @updateMemo="updateMemo"
      />
    </ul>
  </div>
</template>

<script>
import MemoForm from "./MemoForm";
import Memo from "./Memo";
import { mapActions, mapState } from "vuex";

import axios from "axios";

export default {
  name: "MemoApp",
  components: {
    MemoForm,
    Memo
  },
  created() {
    this.fetchMemos();
  },
  computed: {
    ...mapState(["memos"])
  },
  methods: {
    ...mapActions(["fetchMemos", "addMemo", "deleteMemo", "updateMemo"])
  }
};
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>