<template>
  <div id="app">
    <!-- First Modal -->
    <Modal :visible="showModal1" @close="showModal1 = false">
      <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </Modal>
    <!-- Second Modal -->
    <Modal :visible="showModal2" @close="showModal2 = false">
      <div>
        <h4>This is the second dialog</h4>
      </div>
      <template v-slot:closeButton>
        <a href="#" @click="showModal2 = false">Dismiss</a>
      </template>
    </Modal>
    <button @click="showModal1 = true">Show Modal 1</button>
    <a href="#" @click="showModal1 = true">Or click the link</a><br/>
    <button @click="showModal2 = true">Show Modal 2</button><br/>
    <br/><br/>
    <button @click="showCustomContent(1)">Show Custom Component Content1</button>
    <button @click="showCustomContent(2)">Show Custom Component Content2</button>
    <Modal :visible="showCustom" @close="showCustom = false">
      <component v-bind:is="customComponent"></component>
    </Modal>

    <br/>
    <!-- Single component modal -->
    <Modal :visible="showSingleModal" @close="showSingleModal = false" :options="singleModalOptions">
      <template v-slot:options="props">
        <div style="color: green">{{ props.options.title }}</div>
      </template>
    </Modal>
    <button @click="displaySingleModal('Just a sample title')">Show Single Modal</button><br/>
    <button @click="displaySingleModal('Another sample title')">Show Another Modal</button><br/>
    <br/><br/><br/>



    <!-- Plugin Dialog -->
    <button @click="displayPluginModal('Context 1', 'Message one')">Show Context Modal 1</button>
    <button @click="displayPluginModal('Context 2', 'Message two')">Show Context Modal 2</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Modal  from './components/Modal';
import CustomContent1 from './components/CustomContent1';
import CustomContent2 from './components/CustomContent2';

export default {
  name: 'App',
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showSingleModal: false,
      showCustom: false,
      singleModalOptions: {},
      customComponent: '',
    };
  },
  methods: {
    displaySingleModal(text) {
      this.singleModalOptions = {
        title: text,
      };
      this.showSingleModal = true;
    },
    displayPluginModal(title, message) {
      this.$dialog.show({
        options: {
          title,
          message,
        },
      });
    },
    showCustomContent(n) {
      this.customComponent = `CustomContent${n}`;
      this.showCustom = true;
    },
  },
  components: {
    HelloWorld,
    Modal,
    CustomContent1,
    CustomContent2,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: #0d919d;
  color: #ffffff;
  border: 0;
  padding: 4px;
  margin: 2px;
}
</style>
