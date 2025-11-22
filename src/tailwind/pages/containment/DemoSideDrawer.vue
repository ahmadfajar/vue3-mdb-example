<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer1 = ref(true);
const openSideDrawer2 = ref(true);
const openSideDrawer3 = ref(true);
const openSideDrawer4 = ref(true);
const openSideDrawerMini = ref(false);

const navPillCls = ['flex flex-col list-none'];
const navItemCls = ['flex px-2 py-2 rounded-lg', 'not-[.active]:hover:bg-blue-100'];

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

<template>
  <div class="docs-body mx-auto mb-8" style="--sidedrawer-background: var(--background-secondary)">
    <h2>Basic Examples</h2>
    <BsDivider />
    <BsAppContainer class="shadow-lg rounded-lg mt-4">
      <BsSideDrawer v-model:open="openSideDrawer1" shadow>
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
            <li>
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
      <BsContainer app class="bg-slate-400 h-[280px]">
        <div class="h-full flex justify-center items-center">
          <BsButton @click="toggleSideDrawer1(!openSideDrawer1)"> TOGGLE </BsButton>
        </div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Location</h2>
    <BsDivider />
    <BsAppContainer class="shadow-lg rounded-lg mt-4">
      <BsSideDrawer v-model:open="openSideDrawer2" position="right" shadow>
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
      <BsContainer app class="bg-slate-400 h-[280px]">
        <div class="h-full flex justify-center items-center">
          <BsButton @click="toggleSideDrawer2(!openSideDrawer2)"> TOGGLE </BsButton>
        </div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Mini SideDrawer</h2>
    <BsDivider />
    <BsAppContainer class="shadow-lg rounded-lg mt-4">
      <BsSideDrawer v-model:open="openSideDrawerMini" mini>
        <div class="flex flex-row p-2 w[250px]">
          <img
            alt="image"
            class="rounded-circle md-link size-10"
            src="https://ahmadfajar.github.io/img/kitty-1.jpg"
            @click="openSideDrawerMini = true"
          />
          <transition name="fade">
            <div
              v-if="openSideDrawerMini"
              class="flex items-center flex-fill text-xl text-nowrap mb-0 ps-3"
            >
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
          <ul :class="navPillCls">
            <li class="nav-item">
              <a :class="[...navItemCls, 'active text-bg-primary']" href="#">
                <BsIcon icon="home_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Home</span>
                </transition>
              </a>
            </li>
            <li class="pt-1">
              <a :class="navItemCls" href="#">
                <BsIcon icon="view_list_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Orders</span>
                </transition>
              </a>
            </li>
            <li class="pt-1">
              <a :class="navItemCls" href="#">
                <BsIcon icon="redeem_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Products</span>
                </transition>
              </a>
            </li>
            <li class="pt-1">
              <a :class="navItemCls" href="#">
                <BsIcon icon="account_circle_outlined" />
                <transition name="fade">
                  <span v-if="openSideDrawerMini" class="ps-3">Customers</span>
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </BsSideDrawer>
      <BsContainer app class="bg-slate-400 h-[280px]" />
    </BsAppContainer>

    <h2 class="mt-5">Use with AppBar</h2>
    <BsDivider />
    <BsAppContainer class="bg-gray-400 shadow-lg rounded-lg mt-4">
      <BsAppbar clipped-left shadow>
        <BsButton
          color="dark"
          flat
          icon="menu"
          mode="icon"
          @click="toggleSideDrawer3(!openSideDrawer3)"
        />
        <BsAppbarTitle title="Page Title" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="dark" flat icon="search" mode="icon" />
          <BsButton color="dark" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsSideDrawer v-model:open="openSideDrawer3" class="border-e">
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
      <BsContainer app class="h-[280px]">
        <div class="flex justify-center items-center"></div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Clipped SideBar</h2>
    <BsDivider />
    <BsAppContainer class="bg-gray-400 shadow-lg rounded-lg mt-4">
      <BsAppbar shadow>
        <BsButton
          color="dark"
          flat
          icon="menu"
          mode="icon"
          @click="toggleSideDrawer4(!openSideDrawer4)"
        />
        <BsAppbarTitle title="Page Title" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="dark" flat icon="search" mode="icon" />
          <BsButton color="dark" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsSideDrawer v-model:open="openSideDrawer4" class="border-e" clipped>
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
    </BsAppContainer>
  </div>
</template>

<style lang="scss">
.md-side-drawer-inner .nav {
  --bs-nav-link-padding-x: 0.5rem;
}
</style>
