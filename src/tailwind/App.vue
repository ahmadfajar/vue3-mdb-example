<script setup lang="ts">
import AppNavbar from '@tw/AppNavbar.vue';
import type { TMainNavigation } from '@tw/router/navigation';
import { menuNavs } from '@tw/router/navigation';
import { type IMyAppProvider, MyAppProvider } from '@shares/provider.ts';
import { createShikiInstance, disposeShiki } from '@shares/shikiApi.ts';
import { onBeforeUnmount, onMounted, provide } from 'vue';
import { StringHelper, useBreakpointMin } from 'vue-mdbootstrap';

const provider = new MyAppProvider('mobile', ['border-b']);
// const sideDrawerOpen = ref(true);

provide('MyApp', provider as IMyAppProvider);

function onScroll(target: Element | Window) {
  if ((target as Window).scrollY >= 60) {
    provider.appbarClass = ['md-shadow'];
  } else {
    provider.appbarClass = ['border-b'];
  }
}

function resizeHandler() {
  if (useBreakpointMin('xl')) {
    provider.screenSize = 'desktop';
  } else if (useBreakpointMin('lg')) {
    provider.screenSize = 'tablet';
  } else {
    provider.screenSize = 'mobile';
  }
}

// function toggleSideDrawer(value: boolean) {
//   sideDrawerOpen.value = value;
// }

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

onMounted(async () => {
  await createShikiInstance();
  window.addEventListener('unload', () => disposeShiki());
});

onBeforeUnmount(() => {
  disposeShiki();
});
</script>

<template>
  <BsApp viewport-height>
    <AppNavbar />
    <BsSideDrawer v-model:open="provider.sidebar.open" class="border-e" fixed-layout>
      <div class="flex justify-center mt-4">
        <RouterLink to="/home">
          <img alt="Vue logo" src="/assets/logo.png" style="width: 96px" />
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
//-----------------------------------------
:root {
  --background: oklch(0.976 0 89.876);
  --appbar-background: oklch(1 0 0);
  --appbar-height: 4rem;
  --sidedrawer-background: oklch(0.921 0.009 264.52);
}

// Customize side-drawer menu styles
//-----------------------------------
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
  // Change floating sidebar background to white
  > .md-side-drawer {
    --sidedrawer-background: oklch(1 0 0);
  }
}

// Application layout and styles
//-------------------------------
#app {
  .md-content-wrap {
    padding-bottom: vars.$padding-xl;
  }
}

.md-appbar {
  --border-translucent: oklch(87.2% 0.01 258.338deg);

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
  }

  .md-list {
    --md-tile-minheight: 1.5rem;
    --md-tile-padding-x: #{vars.$padding-sm};
    --md-tile-padding-y: #{vars.$padding-xs};

    .md-list-tile {
      border-radius: vars.$radius-sm;

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
  max-width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-medium);
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  h5 {
    font-size: 1.25rem;
  }

  // screen: 801px
  @include media.breakpoint-up(md) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @include media.breakpoint-up(xl) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }

  // screen: 1328px
  @media (min-width: 83rem) {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 56.25rem; //900px;
  }
}

.demo-block-content {
  .md-breadcrumb {
    --md-breadcrumb-padding-x: 0;
  }
}

// Utilities
//----------
.section-content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  @include media.breakpoint-up(md) {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
