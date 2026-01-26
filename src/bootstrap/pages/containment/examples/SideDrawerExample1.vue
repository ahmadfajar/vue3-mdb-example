<script setup lang="ts">
import { ref } from 'vue';

const sideDrawerOpen = ref(true);

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = !value;
}
</script>

<template>
  <BsApp class="md-shadow-2 rounded-4">
    <BsSideDrawer v-model:open="sideDrawerOpen" class="border-e">
      <div class="p-3">
        <img
          alt="image"
          class="rounded-circle"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          style="width: 40px; height: 40px"
        />
        <span class="h5 ps-3">Kitty Doe</span>
      </div>
      <BsDivider />
      <div class="p-2">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link d-flex active" href="#">
              <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
            </a>
          </li>
        </ul>
      </div>
    </BsSideDrawer>
    <BsContainer app class="bg-blue-grey-800" style="height: 280px">
      <div class="h-full flex justify-center items-center">
        <BsButton @click="toggleSideDrawer(sideDrawerOpen)"> TOGGLE </BsButton>
      </div>
    </BsContainer>
  </BsApp>
</template>
