<!-- 각각의 메모의 상태를 표현할 수 있는 컴포넌트 -->

<template>
  <li class="memo-item">
    <!-- 등록된 props를 각 DOM에 위치시킨다.-->
    <strong>{{ memo.title }}</strong>
    <p>{{ memo.content }}</p>
    <button type="button">
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: "Memo",
  // 부모에게 내려받은 props를 등록한다.
  props: {
    memo: {
      type: Object
    }
  }
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
</style>