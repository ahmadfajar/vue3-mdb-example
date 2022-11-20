<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded mt-3">
      <BsAppContainer>
        <BsSideDrawer
          :open="openSideBar1"
          shadow
          @open="toggleSideBar1">
          <div class="p-3">
            <img
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              alt="image"
              style="width: 40px;"
              class="rounded-circle"/>
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider/>
          <div class="p-2">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link d-flex active">
                  <BsIcon icon="home_outlined"/><span class="ps-3">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="view_list_outlined"/><span class="ps-3">Orders</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="redeem_outlined"/><span class="ps-3">Products</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="account_circle_outlined"/><span class="ps-3">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </BsSideDrawer>
        <BsContainer
          class="bg-blue-grey darken-3"
          style="height: 250px"
          app>
          <div class="container-fluid d-flex justify-content-center align-items-center">
            <BsButton @click="toggleSideBar1(!openSideBar1)">
              TOGGLE
            </BsButton>
          </div>
        </BsContainer>
      </BsAppContainer>
    </div>
    <h2 class="mt-5">
      Location
    </h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded mt-3">
      <BsAppContainer>
        <BsSideDrawer
          :open="openSideBar2"
          position="right"
          shadow
          @open="toggleSideBar2">
          <div class="p-3">
            <img
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              alt="image"
              style="width: 40px;"
              class="rounded-circle"/>
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider/>
          <div class="p-2">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link d-flex active">
                  <BsIcon icon="home_outlined"/><span class="ps-3">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="view_list_outlined"/><span class="ps-3">Orders</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="redeem_outlined"/><span class="ps-3">Products</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="account_circle_outlined"/><span class="ps-3">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </BsSideDrawer>
        <BsContainer
          class="bg-blue-grey darken-3"
          style="height: 250px"
          app>
          <div class="container-fluid d-flex justify-content-center align-items-center">
            <BsButton @click="toggleSideBar2(!openSideBar2)">
              TOGGLE
            </BsButton>
          </div>
        </BsContainer>
      </BsAppContainer>
    </div>
    <h2 class="mt-5">
      Mini SideDrawer
    </h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded mt-3">
      <BsAppContainer>
        <BsSideDrawer :mini="miniSideBar1">
          <div class="d-flex flex-row p-2" style="width: 250px">
            <img
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              alt="image"
              style="width: 40px; height: 40px"
              class="rounded-circle md-link"
              @click="miniSideBar1 = false"/>
            <transition name="fade">
              <div
                v-if="!miniSideBar1"
                class="h5 mb-0 ps-3 d-flex align-items-center flex-fill">
                Kitty Doe
              </div>
            </transition>
            <BsButton
              color="stylish-color-dark"
              icon="chevron_left"
              mode="icon"
              flat
              @click="miniSideBar1 = true"/>
          </div>
          <BsDivider/>
          <div class="p-2">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link d-flex active">
                  <BsIcon icon="home_outlined"/>
                  <transition name="fade">
                    <span v-if="!miniSideBar1" class="ps-3">Home</span>
                  </transition>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="view_list_outlined"/>
                  <transition name="fade">
                    <span v-if="!miniSideBar1" class="ps-3">Orders</span>
                  </transition>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="redeem_outlined"/>
                  <transition name="fade">
                    <span v-if="!miniSideBar1" class="ps-3">Products</span>
                  </transition>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="account_circle_outlined"/>
                  <transition name="fade">
                    <span v-if="!miniSideBar1" class="ps-3">Customers</span>
                  </transition>
                </a>
              </li>
            </ul>
          </div>
        </BsSideDrawer>
        <BsContainer
          class="bg-blue-grey darken-3"
          style="height: 233px"
          app/>
      </BsAppContainer>
    </div>
    <h2 class="mt-5">
      Use with AppBar
    </h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded mt-3">
      <BsAppContainer class="bg-grey-400">
        <BsAppbar clipped-left shadow>
          <BsButton
            color="secondary"
            icon="menu"
            mode="icon"
            flat
            @click="toggleSideBar3(!openSideBar3)"/>
          <BsAppbarTitle title="Page Title"/>
          <BsSpacer/>
          <BsAppbarItems>
            <BsButton
              color="secondary"
              icon="search"
              mode="icon"
              flat/>
            <BsButton
              color="secondary"
              icon="notifications"
              mode="icon"
              flat/>
          </BsAppbarItems>
        </BsAppbar>
        <BsSideDrawer
          :open="openSideBar3"
          class="border-end"
          @open="toggleSideBar3">
          <div class="p-3">
            <img
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              alt="image"
              style="width: 40px;"
              class="rounded-circle"/>
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider/>
          <div class="p-2">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link d-flex active">
                  <BsIcon icon="home_outlined"/><span class="ps-3">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="view_list_outlined"/><span class="ps-3">Orders</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="redeem_outlined"/><span class="ps-3">Products</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="account_circle_outlined"/><span class="ps-3">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </BsSideDrawer>
        <BsContainer app style="height: 250px">
          <div class="container-fluid d-flex justify-content-center align-items-center"></div>
        </BsContainer>
      </BsAppContainer>
    </div>
    <h2 class="mt-5">
      Clipped SideBar with AppBar
    </h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded mt-3">
      <BsAppContainer class="bg-grey-400">
        <BsAppbar shadow>
          <BsButton
            color="secondary"
            icon="menu"
            mode="icon"
            flat
            @click="toggleSideBar4(!openSideBar4)"/>
          <BsAppbarTitle title="Page Title"/>
          <BsSpacer/>
          <BsAppbarItems>
            <BsButton
              color="secondary"
              icon="search"
              mode="icon"
              flat/>
            <BsButton
              color="secondary"
              icon="notifications"
              mode="icon"
              flat/>
          </BsAppbarItems>
        </BsAppbar>
        <BsSideDrawer
          :open="openSideBar4"
          class="border-end"
          clipped
          @open="toggleSideBar4">
          <div class="p-3">
            <img
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              alt="image"
              style="width: 40px;"
              class="rounded-circle"/>
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider/>
          <div class="p-2">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link d-flex active">
                  <BsIcon icon="home_outlined"/><span class="ps-3">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="view_list_outlined"/><span class="ps-3">Orders</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="redeem_outlined"/><span class="ps-3">Products</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link d-flex">
                  <BsIcon icon="account_circle_outlined"/><span class="ps-3">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </BsSideDrawer>
        <BsContainer app style="height: 250px">
          <div class="container-fluid d-flex justify-content-center align-items-center"></div>
        </BsContainer>
      </BsAppContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openSideBar1 = ref(true)
const openSideBar2 = ref(true)
const openSideBar3 = ref(true)
const openSideBar4 = ref(true)
const miniSideBar1 = ref(true)

function toggleSideBar1 (value: boolean) {
  openSideBar1.value = value
}

function toggleSideBar2 (value: boolean) {
  openSideBar2.value = value
}

function toggleSideBar3 (value: boolean) {
  openSideBar3.value = value
}

function toggleSideBar4 (value: boolean) {
  openSideBar4.value = value
}
</script>

<style lang="scss">
.nav {
  --bs-nav-link-padding-x: 0.5rem;
}
</style>
