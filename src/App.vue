<template>
  <BsAppContainer class="bg-mdb-color" viewport-height>
    <BsAppbar class="bg-mdb-color" clipped-left>
      <BsButton
        color="light"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer(!openSideDrawer)"
      />
      <BsAppbarTitle :title="($route.meta.title as string)" class="text-white" />
    </BsAppbar>
    <BsSideDrawer v-model:open="openSideDrawer" color="mdb-color" fixed-layout>
      <div class="text-center mb-2">
        <img alt="Vue logo" src="./assets/vue-mdb.png" style="width: 96px" />
      </div>
      <BsDivider dark />
      <BsListView color="mdb-color" item-border-variant="left" item-rounded space-around="both">
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavA"
            :key="navItem.label"
            :path="navItem.path"
            :disabled="navItem.disabled"
            :label="navItem.label"
          />
        </BsListNav>
        <BsDivider class="my-2" />
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavB"
            :key="navItem.label"
            :path="navItem.path"
            :disabled="navItem.disabled"
            :label="navItem.label"
          />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app @resize="onContainerResize">
      <main class="body-content">
        <RouterView v-slot="{ Component }">
          <Transition name="fastFade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </BsContainer>
  </BsAppContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TNavigationRecord } from '@/router/navigation';
import { menuNavs } from '@/router/navigation';
import { useBreakpointMax } from 'vue-mdbootstrap';

const openSideDrawer = ref(true);

function onContainerResize() {
  if (useBreakpointMax('xl')) {
    openSideDrawer.value = false;
  }
}

function toggleSideDrawer(value: boolean) {
  openSideDrawer.value = value;
}

function compareFn(a: TNavigationRecord, b: TNavigationRecord) {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();
  if (labelA < labelB) {
    return -1;
  }
  if (labelA > labelB) {
    return 1;
  }
  // label is equal
  return 0;
}

const routeNavA = menuNavs.filter((it) => it.group === 'Components').sort(compareFn);
const routeNavB = menuNavs.filter((it) => it.group === 'Reference').sort(compareFn);
</script>

<style lang="scss">
@import 'compass-mixins/lib/compass/css3';

.fastFade-enter-active,
.fastFade-leave-active {
  transition: opacity 0.2s ease;
}

.fastFade-enter-from,
.fastFade-leave-to {
  opacity: 0;
}

#app {
  max-width: 100%;
  max-height: 100vh;

  .md-container-wrap {
    height: calc(100vh - 64px);
  }

  .body-content {
    background-color: white;
    padding-bottom: 2rem;
    position: relative;
    overflow: auto;
    width: 100%;

    @media (min-width: 992px) {
      @include border-top-left-radius(36px);
    }
  }
}

.docs-body {
  padding-top: 3rem;

  > h2 {
    font-weight: 400;
  }

  .h3,
  h3,
  .h4,
  h4 {
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

  .card {
    &.mobi-card {
      --bs-card-border-radius: 0.375rem;
      --bs-card-inner-border-radius: calc(0.375rem - 1px);
      max-width: 400px;
    }

    &.rounded-sm {
      --bs-card-border-radius: 0.375rem;
      --bs-card-inner-border-radius: calc(0.375rem - 1px);
    }

    > .md-appbar:first-child {
      @include border-top-radius(var(--bs-card-border-radius));
    }
  }
}
</style>
