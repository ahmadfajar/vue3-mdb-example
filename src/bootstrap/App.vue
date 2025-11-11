<template>
  <BsApp viewport-height>
    <BsAppbar
      :class="screenSize === 'desktop' || linkItems.length === 0 ? appbarCls : 'border-b'"
      :fixed-top="screenSize === 'desktop' || linkItems.length === 0"
      :sticky-top="linkItems.length === 0 ? false : screenSize === 'tablet'"
      clipped-left
    >
      <BsButton
        :class="linkItems.length > 0 ? ['d-none d-lg-inline'] : undefined"
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
            class="d-md-none"
            color="dark"
            flat
            icon="home_rounded"
            mode="icon"
            aria-label="Home"
            @click="$router.push({ name: 'home' })"
          />
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
          <BsListNavItem v-for="navItem in routeNavA" :key="navItem.text" :label="navItem.text">
            <BsListNav child>
              <template v-for="child in navItem.children" :key="child.name || child.text">
                <BsListNavItem
                  v-if="!child.hidden"
                  :label="child.text"
                  :path-name="StringHelper.kebabCase(child.text)"
                />
              </template>
            </BsListNav>
          </BsListNavItem>
        </BsListNav>
        <BsDivider class="my-2" />
        <BsListNav>
          <BsListNavItem
            v-for="navItem in routeNavB"
            :key="navItem.text"
            :label="navItem.text"
            :path-name="StringHelper.kebabCase(navItem.text)"
          />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <div
      :class="screenSize === 'mobile' ? appbarCls : 'border-b'"
      class="header-navbar w-full flex items-center justify-between d-lg-none sticky px-3 py-1"
    >
      <BsButton
        color="dark"
        flat
        icon="menu"
        mode="icon"
        aria-label="Menu"
        @click="toggleSideDrawer(!sideDrawerOpen)"
      />
      <div class="local-navbar-menu inline-flex items-center md-link select-none p-2">
        <span class="pe-2">On this page</span>
        <BsIcon icon="chevron-right" />
      </div>
    </div>
    <BsContainer v-scroll="onScroll" app @resize="resizeHandler">
      <Suspense>
        <RouterView v-slot="{ Component }">
          <Transition mode="out-in" name="fade-fast">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </Suspense>
    </BsContainer>
  </BsApp>
</template>

<script setup lang="ts">
import type { TMainNavigation } from '@bs/router/navigation';
import { menuNavs } from '@bs/router/navigation';
import { provide, type Ref, ref } from 'vue';
import { StringHelper, useBreakpointMin } from 'vue-mdbootstrap';
import type { RouteLocationAsRelativeGeneric } from 'vue-router';

declare type ScreenSize = 'desktop' | 'tablet' | 'mobile';

const sideDrawerOpen = ref(true);
const screenSize = ref<ScreenSize>('mobile');
const appbarCls = ref(['border-b']);
const linkItems = ref<{ text: string; location: string | RouteLocationAsRelativeGeneric }[]>([]);

export declare type AppInjection = {
  screenSize: Ref<ScreenSize>;
  appbarCls: Ref<string[]>;
};

provide('MyApp', { screenSize, appbarCls } as AppInjection);

function onScroll(target: Element | Window) {
  if ((target as Window).scrollY >= 60) {
    appbarCls.value = ['border-b', 'md-shadow'];
  } else {
    appbarCls.value = ['border-b'];
  }
}

function resizeHandler() {
  if (useBreakpointMin('xl')) {
    screenSize.value = 'desktop';
  } else if (useBreakpointMin('lg')) {
    screenSize.value = 'tablet';
  } else {
    screenSize.value = 'mobile';
  }
}

function toggleSideDrawer(value: boolean) {
  sideDrawerOpen.value = value;
}

function compareFn(a: TMainNavigation, b: TMainNavigation) {
  const labelA = a.text.toUpperCase();
  const labelB = b.text.toUpperCase();
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
resizeHandler();
</script>

<style lang="scss">
@use 'vue-mdbootstrap/scss/mixins/css3/borders';
@use 'vue-mdbootstrap/scss/mixins/css3/breakpoints' as media;
@use 'vue-mdbootstrap/scss/color_vars' as colors;
@use 'vue-mdbootstrap/scss/variables' as vars;

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s ease;
}

.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}

// Override UI aspect global css variables
:root {
  --background: oklch(0.976 0 89.876);
  --appbar-background: oklch(1 0 0);
  --appbar-height: 4rem;
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
        border-radius: vars.$radius;
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
    padding-bottom: vars.$padding-xl;

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

.header-navbar {
  background-color: var(--appbar-background);
  top: 0;
  left: 0;
  z-index: 1000;
}

.local-navbar {
  background-color: var(--appbar-background);
  top: var(--appbar-height);
  z-index: 2;
}

.local-navbar-menu {
  &.active,
  &:hover {
    font-weight: var(--font-weight-medium);
    background-color: var(--navigation-item-hover-background);
    border-radius: vars.$radius-sm;
  }
}

.local-nav-aside {
  padding-top: vars.$padding-xl + 0.5;
  width: 11.875rem; // 190px;
  min-width: 11.875rem;

  .local-nav-items {
    top: vars.$padding-xl + 4;
    padding-left: vars.$padding-sm;
    z-index: 2;
  }

  .md-list {
    --md-tile-minheight: 1.5rem;
    --md-tile-padding-x: #{vars.$padding-sm};
    --md-tile-padding-y: #{vars.$padding-xs};

    .md-list-tile {
      font-size: 0.875em;

      &.active {
        font-weight: var(--font-weight-semibold);
      }
      + .md-list-tile {
        margin-top: 3px;
      }
    }
  }

  h6 {
    font-weight: var(--font-weight-semibold);
    padding-left: var(--md-tile-padding-x);
  }
}

.docs-body {
  padding-top: vars.$padding-xl;
  max-width: 53.75rem; //860px;

  > h2 {
    font-weight: var(--font-weight-medium);
  }

  // screen: 801px
  @include media.breakpoint-up(md) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

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
  @include media.breakpoint-up(xl) {
    padding-left: 2rem;
    padding-right: 2rem;

    .card-mw-65 {
      max-width: 65%;
    }
  }
}

.section-content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

@include media.breakpoint-up(md) {
  .section-content {
    padding-left: 0;
    padding-right: 0;
  }
}

.demo-block-content {
  .md-breadcrumb {
    --md-breadcrumb-padding-x: 0;
  }
}

// Utilities
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
