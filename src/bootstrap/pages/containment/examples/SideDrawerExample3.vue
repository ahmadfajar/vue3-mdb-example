<script setup lang="ts">
import { ref } from 'vue';

const navPillCls = ['flex flex-col list-none'];
const navItemCls = ['flex px-2 py-2 rounded-3', 'not-[.active]:hover:bg-blue-100'];

const miniOpen = ref(false);
</script>

<template>
  <BsApp class="md-shadow-2 rounded-3">
    <BsSideDrawer v-model:open="miniOpen" mini>
      <div class="flex flex-row p-2 w[250px]">
        <img
          alt="image"
          class="rounded-circle md-link size-10"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          @click="miniOpen = true"
        />
        <transition name="fade">
          <div v-if="miniOpen" class="flex items-center flex-fill text-xl text-nowrap mb-0 ps-3">
            Kitty Doe
          </div>
        </transition>
        <BsButton
          color="secondary"
          flat
          icon="chevron_left"
          mode="icon"
          @click="miniOpen = false"
        />
      </div>
      <BsDivider />
      <div class="p-2">
        <ul :class="navPillCls">
          <li class="nav-item">
            <a :class="[...navItemCls, 'active text-bg-primary']" href="#">
              <BsIcon icon="home_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Home</span>
              </transition>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="view_list_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Orders</span>
              </transition>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="redeem_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Products</span>
              </transition>
            </a>
          </li>
          <li class="pt-1">
            <a :class="navItemCls" href="#">
              <BsIcon icon="account_circle_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Customers</span>
              </transition>
            </a>
          </li>
        </ul>
      </div>
    </BsSideDrawer>
    <BsContainer app class="bg-slate-400 h-70" />
  </BsApp>
</template>
