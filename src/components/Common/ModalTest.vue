<template>
  <VButton @click="openModal"> Open Modal </VButton>
  <ModalsContainer />
</template>

<script setup>
import { useModal } from "vue-final-modal";
import VModal from "./VModal.vue";

const { open, close } = useModal();

// 모달 열기 함수
function openModal() {
  open({
    component: VModal,
    props: {
      title: "Hello World!",
      onClose: close,
    },
    slots: {
      default: "<p>ModalBottom: The content of the modal</p>",
    },
  });
}
</script>
