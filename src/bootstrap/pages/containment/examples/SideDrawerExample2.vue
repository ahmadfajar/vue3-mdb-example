<script setup lang="ts">
import { ref } from 'vue';

const navPillCls = ['flex flex-col list-none'];
const navItemCls = ['flex px-2 py-2 rounded-3', 'not-[.active]:hover:bg-blue-100'];

const sideDrawerOpen = ref(true);

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = value;
}
</script>

<template>
  <BsApp class="md-shadow-2 rounded-3">
    <BsSideDrawer v-model:open="sideDrawerOpen" position="right" shadow>
      <div class="p-3">
        <img
          alt="image"
          class="inline rounded-circle size-10"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <span class="text-xl ps-3">Kitty Doe</span>
      </div>
      <BsDivider />
      <div class="p-2">
        <ul :class="navPillCls">
          <li class="nav-item">
            <a :class="[...navItemCls, 'active text-bg-primary']" href="#">
              <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
            </a>
          </li>
        </ul>
      </div>
    </BsSideDrawer>
    <BsContainer app class="bg-slate-400 h-70">
      <div class="h-full flex justify-center items-center">
        <BsButton @click="toggleSideDrawer(!sideDrawerOpen)"> TOGGLE </BsButton>
      </div>
    </BsContainer>
  </BsApp>
</template>
