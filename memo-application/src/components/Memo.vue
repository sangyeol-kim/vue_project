<!-- 각각의 메모의 상태를 표현할 수 있는 컴포넌트 -->

<template>
  <li class="memo-item">
    <!-- 등록된 props를 각 DOM에 위치시킨다.-->
    <strong>{{ memo.title }}</strong>
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">
        {{memo.content}}
      </template>
        <input 
          v-else
          type="text"
          ref="content"
          :value="memo.content"
          @blur="handleBlur"
          @keydown.enter="updateMemo"
        />
      </p>
    <!-- 감싸준 p 태그에 더블클릭에 대한 이벤트를 추가해준다 -->
    <!-- 클릭 이벤트 리스너로 deleteMemo 함수를 등록해준다.-->
    <button type="button" @click="deleteMemo">
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
// Memo 컴포넌트 추가
import Memo from './Memo';

export default {
  name: "Memo",
  // 부모에게 내려받은 props를 등록한다.
  data () {
    //현재 메모에 대한 수정 상태에 대한 데이터를 저장한다.
    return {
      isEditing: false
    }
  },
  components: {
    Memo
  },
  props: {
    memo: {
      type: Object
    }
  },
  methods: {
    deleteMemo() {
      // 부모로부터 props로 내려받은 memo id를 부모 컴포넌트의 사용자 정의 이벤트인
      // deleteMemo 함수의 파라미터로 전달해준다.
      const id = this.memo.id;
      this.$emit("deleteMemo", id);
      // Memo에서 직접 삭제를 하지 않고 부모 컴포넌트로 올린다.
    },
    handleDblClick () {
      // 더블 클릭을 했을 때, 클릭한 메모의 수정 상태를 true로 변경한다.
      this.isEditing = true;
      this.$nextTick(() =>{
        this.$refs.content.focus()
      })
    },
    handleBlur () {
      this.isEditing = false;
    },
    updateMemo (e) {
      console.log(e)
      const id = this.memo.id;
      const content = e.target.value.trim();
      if (content.length <= 0) {
        return false;
      }
      this.$emit('updateMemo', { id, content });
      this.isEditing = false;
    }
  },
};
</script>

<style scoped>
.memo-item {
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  padding: 24px;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  list-style: none;
}
.memo-item input[type="text"] {
  border: 1px solid #ececec;
  font-size: inherit;
}
.memo-item button {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  color: #e5e5e5;
  border: 0;
}
.memo-item strong {
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: normal;
  word-break: break-all;
}
.memo-item p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #666;
}
.memo-item p input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
}
.memo-item p input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
}
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>