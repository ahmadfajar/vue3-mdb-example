<template>
  <BsApp class="bg-mdb-color" viewport-height>
    <BsAppbar class="bg-mdb-color" clipped-left fixed-top>
      <BsButton
        color="light"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer(!openSideDrawer)"
      />
      <BsAppbarTitle :title="$route.meta.title as string" class="text-white" />
    </BsAppbar>
    <BsSideDrawer v-model:open="openSideDrawer" color="mdb-color" fixed-layout>
      <div class="text-center mb-2">
        <img alt="Vue logo" src="./assets/vue-mdb.png" style="width: 96px" />
      </div>
      <BsDivider dark />
      <BsListView color="mdb-color" space-around="both" item-border-variant="left" item-rounded>
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavA"
            :key="navItem.label"
            :path-name="StringHelper.kebabCase(navItem.label)"
            :disabled="navItem.disabled"
            :label="navItem.label"
          />
        </BsListNav>
        <BsDivider class="my-2" />
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavB"
            :key="navItem.label"
            :path-name="StringHelper.kebabCase(navItem.label)"
            :disabled="navItem.disabled"
            :label="navItem.label"
          />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer class="bg-mdb-color" app @resize="onContainerResize">
      <BsContent>
        <RouterView v-slot="{ Component }">
          <Transition name="fastFade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </BsContent>
    </BsContainer>
  </BsApp>
</template>

<script lang="ts" setup>
import type { TNavigationRecord } from '@/router/navigation';
import { menuNavs } from '@/router/navigation';
import { ref } from 'vue';
import { useBreakpointMax, StringHelper } from 'vue-mdbootstrap';

const openSideDrawer = ref(true);

function onContainerResize() {
  if (useBreakpointMax('lg')) {
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

// override compass-mixins global variables
$legacy-support-for-ie:                 false;
$legacy-support-for-mozilla:            false;
$experimental-support-for-opera:        false;
$experimental-support-for-mozilla:      false;
$experimental-support-for-webkit:       true;
$experimental-support-for-microsoft:    false;

.fastFade-enter-active,
.fastFade-leave-active {
  transition: opacity 0.2s ease;
}

.fastFade-enter-from,
.fastFade-leave-to {
  opacity: 0;
}

#app {
  .md-content-wrap {
    background-color: white;
    padding-bottom: 2rem;

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
  .h4,
  h3,
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
