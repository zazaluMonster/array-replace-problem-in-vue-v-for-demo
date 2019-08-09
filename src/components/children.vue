<template>
  <div>
    <!-- 使用模板语法查看props数据是否已更新 -->
    {{childItems}}

    <p v-for="item in childItems" :key="item.id">{{item.content}}</p>

    <!-- 解开注释,上面的v-for才能正常工作. -->
    <!-- <div> -->
      <new-message></new-message>
    <!-- </div> -->
  </div>
</template>

<script>
import NewMessage from "./new-message.vue";

export default {
  name: "HelloWorld",
  components: {
    NewMessage
  },
  props: {
    childItems: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>

