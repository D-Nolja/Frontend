<template>
  <a-dropdown>
    <div class="dropdownBtn" @click.prevent="openDropdown">
      {{ selectedName }}
      <!-- <DownOutlined /> -->
    </div>
    <template #overlay>
      <a-menu @click="handleMenuItemClick">
        <a-menu-item v-for="item in items" :key="item.id">
          <a>{{ item.name }}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup>
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

const placeStore = usePlaceStore();

const { updateCurrentLocation, selectSearchMethod } = placeStore;

const props = defineProps({
  name: String,
  items: Array,
});

const { searchParams } = storeToRefs(placeStore);

onMounted(() => {
  searchParams.value.category = "";
  searchParams.value.keyword = "";
  searchParams.value.limit = "";
  // console.log("start ", searchParams.value);
});

const selectedName = ref(props.name);

function handleMenuItemClick(event) {
  console.log("!!! ", event);
  const clickedItem = props.items.find((item) => item.id === event.key);

  console.log("clickedItem ", clickedItem);

  // if (clickedItem) {
  //   selectedName.value = clickedItem.name;
  // }
  selectMethod(clickedItem);
}

async function selectMethod(clickedItem) {
  console.log("clicked!!!! in selectMethod");
  if (clickedItem.type == 0) {
    searchParams.value.category =
      clickedItem.name == "전체" ? null : clickedItem.name;
    console.log("search ", searchParams.value);
  } else if (clickedItem.type == 1) {
    console.log("거리거리거리거리");
    await updateCurrentLocation();

    // 현재 위치 중심 (제주도에서만 사용 가능)
    searchParams.value.limit = parseFloat(clickedItem.id);
    // searchParams.value.x = currentLatLng.value.x;
    // searchParams.value.y = currentLatLng.value.y;

    searchParams.value.x = 126.6456514;
    searchParams.value.y = 33.473645;
    console.log("파람파람파람 ", searchParams.value);
  }
  selectSearchMethod(searchParams.value);
}

function openDropdown() {}
</script>

<style>
.dropdownBtn {
  width: 85px;
  height: 30px;
  border: 1px solid #e2e2e2;
  padding: 3px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 14px;
  margin-left: 1px;
  text-align: center;
  line-height: 22px;
}

.dropdownBtn .ant-dropdown-link {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.dropdownBtn:hover {
  background-color: #f5f5f5;
}

.a-menu {
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.a-menu-item a {
  color: #333;
}

.a-menu-item a:hover {
  color: #0056b3;
}
</style>
