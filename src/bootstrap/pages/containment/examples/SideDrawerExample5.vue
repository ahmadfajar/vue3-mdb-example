<script setup lang="ts">
import { ref } from 'vue';

const sideDrawerOpen = ref(true);

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = !value;
}
</script>

<template>
  <BsApp class="bg-gray-400 md-shadow-2 rounded-4">
    <BsAppbar shadow>
      <BsButton
        color="dark"
        flat
        icon="menu"
        mode="icon"
        @click="toggleSideDrawer(sideDrawerOpen)"
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
    <BsContainer app style="height: 280px">
      <div class="flex justify-center items-center"></div>
    </BsContainer>
  </BsApp>
</template>
