import Vue from 'vue';
import Modal from '@/components/Modal';
let vm;

const ContextModal = {
  isActive: false,
  install(Vue) {
    Vue.prototype.$dialog = this;
  },
  show(dialogOptions) {
    this.isActive = true;
    const node = document.createElement('div');
    document.getElementById('app').appendChild(node);
    vm = new Vue({
      name: 'Dialog',
      el: node,
      render: (h) => {
        return this.isActive === true ? h(Modal, {
          props: {
            visible: true,
            options: dialogOptions.options,
          },
          on: {
            close: () => {
              this.isActive = false;
              vm.$forceUpdate();
            },
          },
        }) : null;
      },
    });
  },
};

export default ContextModal;