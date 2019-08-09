<style scoped>
</style>
<template>
<div>
  <!-- <Drawer v-model="show"></Drawer> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleNewMessage(data) {
      this.$emit("on-success-valid", data);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
    });
  }
};
</script>