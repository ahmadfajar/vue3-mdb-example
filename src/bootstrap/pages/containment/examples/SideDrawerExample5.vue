<script setup lang="ts">
import { ref } from 'vue';

const navPillCls = ['flex flex-col list-none'];
const navItemCls = ['flex px-2 py-2 rounded-lg', 'not-[.active]:hover:bg-blue-100'];

const sideDrawerOpen = ref(true);

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = value;
}
</script>

<template>
  <BsApp class="bg-gray-400 md-shadow-2 rounded-lg">
    <BsAppbar shadow>
      <BsButton
        color="dark"
        flat
        icon="menu"
        mode="icon"
        @click="toggleSideDrawer(!sideDrawerOpen)"
      />
      <BsAppbarTitle title="Page Title" />
      <BsSpacer />
      <BsAppbarItems>
        <BsButton color="dark" flat icon="search" mode="icon" />
        <BsButton color="dark" flat icon="notifications" mode="icon" />
      </BsAppbarItems>
    </BsAppbar>
    <BsSideDrawer v-model:open="sideDrawerOpen" class="border-e" clipped>
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
    <BsContainer app class="h-[280px]">
      <div class="flex justify-center items-center"></div>
    </BsContainer>
  </BsApp>
</template>
