<template>
  <div v-if="visible" class="mask">
    <div class="wrapper">
      <div class="container">
        <slot></slot>
        <slot name="options" v-bind="options">
          <div v-if="options">
            <h5>{{ options.title }}</h5>
            <h6>{{ options.message }}</h6>
          </div>
        </slot>
        <slot name="closeButton">
          <button @click="close">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    visible: Boolean,
    options: Object,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
}
.wrapper {
  display: block;
  margin: auto;
}
.container {
  width: 40vw;
  padding: 20px 30px;
  background-color: #fff;
}
</style>