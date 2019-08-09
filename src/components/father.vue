<template>
  <div>
    <button @click="onClick">change fatherItems by concat</button>
    <Children :childItems="fatherItems" />
  </div>
</template>

<script>
import Children from "./children.vue";

export default {
  components: {
    Children
  },
  data() {
    return {
      fatherItems: [
        {
          id: 1,
          content: "第一条通知"
        },
        {
          id: 2,
          content: "第二条通知"
        }
      ]
    };
  },
  methods: {
    onClick() {
      this.fatherItems = this.fatherItems.concat([
        {
          id: 3,
          content: "第三条通知"
        }
      ]);
    }
  }
};
</script>

