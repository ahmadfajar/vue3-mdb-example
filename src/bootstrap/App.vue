<template>
  <BsApp viewport-height>
    <BsAppbar v-scroll="onScroll" :class="appbarCls" clipped-left fixed-top>
      <BsButton
        color="dark"
        flat
        icon="menu"
        mode="icon"
        aria-label="Menu"
        @click="toggleSideDrawer(!sideDrawerOpen)"
      />
      <BsAppbarTitle :title="$route.meta.title as string" />
      <BsAppbarItems class="items-center ms-auto">
        <div class="d-none d-md-flex md-gap-x-6 me-3">
          <RouterLink class="menu-item" to="/home"> Home </RouterLink>
          <a
            class="menu-item"
            href="https://ahmadfajar.github.io/"
            target="_blank"
            aria-label="Component documentation"
          >
            Documentation
          </a>
        </div>
        <div class="d-none d-md-block mx-2 border" style="width: 1px; height: 26px"></div>
        <div class="flex">
          <BsButton
            color="dark"
            flat
            href="https://github.com/ahmadfajar/vue3-mdb-example"
            mode="icon"
            target="_blank"
            aria-label="GitHub Repo"
          >
            <template #icon>
              <BsFontawesomeIcon icon="github" mode="icon" variant="brands" />
            </template>
          </BsButton>
          <BsButton color="dark" flat icon="dark_mode" mode="icon" />
        </div>
      </BsAppbarItems>
    </BsAppbar>
    <BsSideDrawer v-model:open="sideDrawerOpen" class="border-e" fixed-layout>
      <div class="flex justify-center my-2">
        <RouterLink to="/home">
          <img alt="Vue logo" src="/assets/vue-mdb.png" style="width: 96px" />
        </RouterLink>
      </div>
      <BsDivider dark />
      <BsListView item-border-variant="left" item-rounded space-around="both">
        <BsListNav>
          <BsListNavItem v-for="navItem in routeNavA" :key="navItem.label" :label="navItem.label">
            <BsListNav child>
              <BsListNavItem
                v-for="child in navItem.children"
                :key="child.label"
                :label="child.label"
                :path-name="StringHelper.kebabCase(child.label)"
              />
            </BsListNav>
          </BsListNavItem>
        </BsListNav>
        <BsDivider class="my-2" />
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavB"
            :key="navItem.label"
            :label="navItem.label"
            :path-name="StringHelper.kebabCase(navItem.label)"
          />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app @resize="onContainerResize">
      <BsContent>
        <RouterView v-slot="{ Component }">
          <Transition mode="out-in" name="fastFade">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </BsContent>
    </BsContainer>
  </BsApp>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StringHelper, useBreakpointMax } from 'vue-mdbootstrap';
import type { TMainNavigation } from '@bs/router/navigation';
import { menuNavs } from '@bs/router/navigation';

const sideDrawerOpen = ref(true);
const appbarCls = ref(['border-b']);

function onContainerResize() {
  if (useBreakpointMax('lg')) {
    sideDrawerOpen.value = false;
  }
}

function onScroll(target: Element | Window) {
  if ((target as Window).scrollY >= 50) {
    appbarCls.value = ['border-b', 'md-shadow'];
  } else {
    appbarCls.value = ['border-b'];
  }
}

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = value;
}

function compareFn(a: TMainNavigation, b: TMainNavigation) {
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
@use 'vue-mdbootstrap/scss/mixins/css3/borders';
@use 'vue-mdbootstrap/scss/color_vars' as colors;

.fastFade-enter-active,
.fastFade-leave-active {
  transition: opacity 0.2s ease;
}

.fastFade-enter-from,
.fastFade-leave-to {
  opacity: 0;
}

// Override UI aspect global css variables
:root {
  --background: oklch(0.976 0 89.876);
  --appbar-background: oklch(1 0 0);
  --sidedrawer-background: oklch(0.921 0.009 264.52);
}

// Override side-drawer menu styles
.md-side-drawer {
  .md-nav-item:not(.md-expanded) {
    .md-tile-border-left.active > .md-ripple:before {
      --md-tile-indicator-border-width: 5px;
      height: 70%;
      top: 15%;
      border-radius: 12px;
    }
  }

  // screen: 801px
  @media (min-width: calc(50rem + 1px)) {
    ::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    &:hover {
      ::-webkit-scrollbar-track {
        background: var(--md-sidedrawer-background);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
        background: oklch(0.593 0.005 271.335);

        &:hover {
          background: oklch(0.492 0.007 264.503);
        }
      }
    }
  }
}

body {
  > .md-side-drawer {
    --sidedrawer-background: oklch(1 0 0);
  }
}

#app {
  .md-content-wrap {
    padding-bottom: 2rem;

    //@media (min-width: 992px) {
    //  @include borders.top-start-radius(36px);
    //}
  }
}

.md-appbar {
  a.menu-item {
    color: var(--foreground);
    font-weight: var(--font-weight-medium);
    text-decoration: none;

    &:hover {
      color: colors.$blue-accent-4;
    }
  }
}

.md-card {
  > .md-application-wrap:first-child {
    @include borders.radius(inherit);
  }

  .md-appbar:first-child {
    @include borders.top-radius(inherit);

    + .md-tabs {
      @include borders.top-radius(0);
    }
  }
}

.docs-body {
  padding-top: 2rem;

  > h2 {
    font-weight: var(--font-weight-medium);
  }

  // screen: 801px
  @media (min-width: calc(50rem + 1px)) {
    .card-mw-65 {
      max-width: 90%;
    }
  }

  // screen: 1024px
  @media (min-width: 64rem) {
    .card-mw-65 {
      max-width: 85%;
    }
  }

  // screen: 1200px
  @media (min-width: 75rem) {
    max-width: 1080px;
    .card-mw-65 {
      max-width: 65%;
    }
  }

  // screen: 1440px
  @media (min-width: 90rem) {
    padding-left: 2rem;
  }
}

.demo-block-content {
  .md-breadcrumb {
    --md-breadcrumb-padding-x: 0;
  }
}

// Utilities
.bg-background {
  background-color: var(--background);
}

.mobi-card {
  max-width: 25rem; // 400px;
}

.grid {
  display: grid;

  .sticky-top {
    z-index: 10;
  }
}

.grid-cols-auto {
  grid-template-columns: auto minmax(0, 1fr);
}

.grid-cols-11 {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}
</style>
