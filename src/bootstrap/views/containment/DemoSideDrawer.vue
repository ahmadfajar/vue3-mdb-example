<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <BsDivider />
    <BsAppContainer class="shadow rounded-3 mt-4">
      <BsSideDrawer v-model:open="openSideDrawer1" shadow>
        <div class="p-3">
          <img
            alt="image"
            class="rounded-circle"
            src="https://ahmadfajar.github.io/img/kitty-1.jpg"
            style="width: 40px"
          />
          <span class="h5 ps-3">Kitty Doe</span>
        </div>
        <BsDivider />
        <div class="p-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link d-flex active">
                <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app class="bg-blue-grey-900" style="height: 280px">
        <div class="flex justify-center items-center h-full">
          <BsButton @click="toggleSideDrawer1(!openSideDrawer1)"> TOGGLE </BsButton>
        </div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Location</h2>
    <BsDivider />
    <BsAppContainer class="shadow rounded-3 mt-4">
      <BsSideDrawer v-model:open="openSideDrawer2" position="right" shadow>
        <div class="p-3">
          <img
            alt="image"
            class="rounded-circle"
            src="https://ahmadfajar.github.io/img/kitty-1.jpg"
            style="width: 40px"
          />
          <span class="h5 ps-3">Kitty Doe</span>
        </div>
        <BsDivider />
        <div class="p-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link d-flex active">
                <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app class="bg-blue-grey-900" style="height: 280px">
        <div class="flex justify-center items-center h-full">
          <BsButton @click="toggleSideDrawer2(!openSideDrawer2)"> TOGGLE </BsButton>
        </div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Mini SideDrawer</h2>
    <BsDivider />
    <BsAppContainer class="shadow rounded-3 mt-4">
      <BsSideDrawer v-model:open="openSideDrawerMini" mini>
        <div class="flex flex-row p-2" style="width: 250px">
          <img
            alt="image"
            class="rounded-circle md-link"
            src="https://ahmadfajar.github.io/img/kitty-1.jpg"
            style="width: 40px; height: 40px"
            @click="openSideDrawerMini = true"
          />
          <transition name="fade">
            <div v-if="openSideDrawerMini" class="h5 mb-0 ps-3 flex items-center flex-fill">
              Kitty Doe
            </div>
          </transition>
          <BsButton
            color="secondary"
            flat
            icon="chevron_left"
            mode="icon"
            @click="openSideDrawerMini = false"
          />
        </div>
        <BsDivider />
        <div class="p-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link d-flex active">
                <BsIcon icon="home_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Home</span>
                </transition>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="view_list_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Orders</span>
                </transition>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="redeem_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Products</span>
                </transition>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="account_circle_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Customers</span>
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app class="bg-blue-grey-900" style="height: 250px" />
    </BsAppContainer>

    <h2 class="mt-5">Use with AppBar</h2>
    <BsDivider />
    <BsAppContainer class="bg-gray-400 shadow rounded-3 mt-4">
      <BsAppbar clipped-left shadow>
        <BsButton
          color="secondary"
          flat
          icon="menu"
          mode="icon"
          @click="toggleSideDrawer3(!openSideDrawer3)"
        />
        <BsAppbarTitle title="Page Title" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="secondary" flat icon="search" mode="icon" />
          <BsButton color="secondary" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsSideDrawer v-model:open="openSideDrawer3" class="border-end">
        <div class="p-3">
          <img
            alt="image"
            class="rounded-circle"
            src="https://ahmadfajar.github.io/img/kitty-1.jpg"
            style="width: 40px"
          />
          <span class="h5 ps-3">Kitty Doe</span>
        </div>
        <BsDivider />
        <div class="p-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link d-flex active">
                <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app style="height: 250px">
        <div class="flex justify-center items-center"></div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Clipped SideBar</h2>
    <BsDivider />
    <BsAppContainer class="bg-gray-400 shadow rounded-3 mt-4">
      <BsAppbar shadow>
        <BsButton
          color="secondary"
          flat
          icon="menu"
          mode="icon"
          @click="toggleSideDrawer4(!openSideDrawer4)"
        />
        <BsAppbarTitle title="Page Title" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="secondary" flat icon="search" mode="icon" />
          <BsButton color="secondary" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsSideDrawer v-model:open="openSideDrawer4" class="border-end" clipped>
        <div class="p-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link d-flex active">
                <BsIcon icon="home_outlined" /><span class="ps-3">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="view_list_outlined" /><span class="ps-3">Orders</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="redeem_outlined" /><span class="ps-3">Products</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link d-flex">
                <BsIcon icon="account_circle_outlined" /><span class="ps-3">Customers</span>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app style="height: 300px">
        <div class="container-fluid d-flex justify-content-center align-items-center"></div>
      </BsContainer>
    </BsAppContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer1 = ref(true);
const openSideDrawer2 = ref(true);
const openSideDrawer3 = ref(true);
const openSideDrawer4 = ref(true);
const openSideDrawerMini = ref(false);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = value;
}

function toggleSideDrawer2(value: boolean) {
  openSideDrawer2.value = value;
}

function toggleSideDrawer3(value: boolean) {
  openSideDrawer3.value = value;
}

function toggleSideDrawer4(value: boolean) {
  openSideDrawer4.value = value;
}
</script>

<style lang="scss">
.md-side-drawer-inner .nav {
  --bs-nav-link-padding-x: 0.5rem;
}
</style>
