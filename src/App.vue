<template>
  <BsAppContainer class="bg-mdb-color" viewport-height>
    <BsAppbar
      class="bg-mdb-color"
      clipped-left
      fixed-top>
      <BsButton
        color="light"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer(!openSideDrawer)"/>
      <BsAppbarTitle
        :title="$route.meta.title"
        class="text-white"/>
    </BsAppbar>
    <BsSideDrawer
      v-model:open="openSideDrawer"
      color="mdb-color"
      fixed-layout>
      <div class="text-center mb-2">
        <img
          alt="Vue logo"
          src="./assets/vue-mdb.png"
          style="width: 96px"/>
      </div>
      <BsDivider dark/>
      <BsListView
        color="mdb-color"
        item-border-variant="left"
        item-rounded
        space-around="both">
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavA"
            :key="navItem.label"
            :path="navItem.path"
            :disabled="navItem.disabled"
            :label="navItem.label"/>
        </BsListNav>
        <BsDivider class="my-2"/>
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavB"
            :key="navItem.label"
            :path="navItem.path"
            :disabled="navItem.disabled"
            :label="navItem.label"/>
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <div v-if="openSideDrawer" class="side-decoration"></div>
    <BsContainer app>
      <div :class="classNames">
        <RouterView v-slot="{ Component }">
          <Transition name="fastFade" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </RouterView>
      </div>
    </BsContainer>
  </BsAppContainer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TNavigationMenu, menuNavs } from '@/navigation'

const openSideDrawer = ref(true)

const classNames = computed(() => ({
  'body-content': true,
  open: openSideDrawer.value === true
}))

function toggleSideDrawer (value: boolean) {
  openSideDrawer.value = value
}

function compareFn (a: TNavigationMenu, b: TNavigationMenu) {
  const labelA = a.label.toUpperCase()
  const labelB = b.label.toUpperCase()
  if (labelA < labelB) {
    return -1
  }
  if (labelA > labelB) {
    return 1
  }
  // label is equal
  return 0
}

const routeNavA = menuNavs.filter(it => it.group === 'Components').sort(compareFn)
const routeNavB = menuNavs.filter(it => it.group === 'Reference').sort(compareFn)
</script>

<style lang="scss">
@import "~compass-mixins/lib/compass/css3";

#app {
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100%;
  max-height: 100vh;

  .side-decoration {
    background-color: #fff;
    position: fixed;
    top: 64px;
    bottom: 0;
    z-index: 1020;

    @media (min-width: 992px) {
      @include border-top-left-radius(36px);
      left: 250px;
      width: 38px;
    }
  }

  .body-content {
    background-color: white;
    padding-bottom: 2rem;
    position: relative;
    width: 100%;

    @media (min-width: 992px) {
      &.open {
        margin-left: 38px;
      }
    }

    .demo-wrapper {
      padding-top: 3rem;

      .h4, h4 {
        &:not(.card-title) {
          font-weight: normal;
        }
      }

      @media (min-width: 1200px) {
        max-width: 1080px;
      }

      @media (min-width: 1480px) {
        padding-left: 2rem;
      }
    }
  }
}

.demo-wrapper {
  > h2 {
    font-weight: 400;
  }

  .card {
    &.mobi-card {
      --bs-card-border-radius: .375rem;
      --bs-card-inner-border-radius: calc(.375rem - 1px);
      max-width: 400px;
    }

    &.rounded-sm {
      --bs-card-border-radius: .375rem;
      --bs-card-inner-border-radius: calc(.375rem - 1px);
    }

    > .md-appbar:first-child {
      @include border-top-radius(var(--bs-card-border-radius));
    }
  }
}

.fastFade-enter-active,
.fastFade-leave-active {
  transition: opacity 0.2s ease;
}

.fastFade-enter-from,
.fastFade-leave-to {
  opacity: 0;
}
</style>
