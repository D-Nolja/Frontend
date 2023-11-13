<template>
    <a-card class="cardItem">
      <template #cover>
        <img alt="example" src="@/assets/img/dang.png" />
      </template>
      <a-card-meta title="안녕">
        <template #description>내용임</template>
      </a-card-meta>
    </a-card>
  </template>

<script setup>

</script>

<style scoped> 
.cardItem{
width: 310px;
height: 280px;

border-radius: 0.9375rem;
border: 1px solid #F0F0F0;
background: #fff;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
margin: 20px;
}
</style>