<script setup lang="ts">
import { ref } from 'vue';

const miniOpen = ref(false);
</script>

<template>
  <BsApp class="md-shadow-2 rounded-3">
    <BsSideDrawer v-model:open="miniOpen" mini>
      <div class="flex flex-row p-2" style="width: 250px">
        <img
          alt="image"
          class="rounded-circle md-link"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          style="width: 40px; height: 40px"
          @click="miniOpen = true"
        />
        <transition name="fade">
          <div v-if="miniOpen" class="flex items-center flex-fill text-nowrap h5 mb-0 ps-3">
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
        <ul class="nav nav-pills flex-column" style="--bs-nav-link-padding-x: 0.5rem">
          <li class="nav-item">
            <a class="nav-link d-flex active" href="#">
              <BsIcon icon="home_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Home</span>
              </transition>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="view_list_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Orders</span>
              </transition>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="redeem_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Products</span>
              </transition>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex" href="#">
              <BsIcon icon="account_circle_outlined" />
              <transition name="fade">
                <span v-if="miniOpen" class="ps-3">Customers</span>
              </transition>
            </a>
          </li>
        </ul>
      </div>
    </BsSideDrawer>
    <BsContainer app class="bg-blue-grey-800" style="height: 280px" />
  </BsApp>
</template>
