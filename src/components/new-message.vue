<style scoped>
</style>
<template>
    <Drawer v-model="show"></Drawer>
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
  }
};
</script>