<script setup lang="ts">
import AppNavbar from '@bs/AppNavbar.vue';
import type { TMainNavigation } from '@bs/router/navigation';
import { menuNavs } from '@bs/router/navigation';
import { type IMyAppProvider, MyAppProvider } from '@shares/provider.ts';
import { createShikiInstance, disposeShiki } from '@shares/shikiApi.ts';
import { initializeTheme } from '@shares/themeApi.ts';
import { onBeforeUnmount, onMounted, provide } from 'vue';
import { StringHelper, useBreakpointMin } from 'vue-mdbootstrap';

const provider = new MyAppProvider('mobile', ['border-b']);

provide('MyApp', provider as IMyAppProvider);

function onScroll(target: Element | Window) {
  if ((target as Window).scrollY >= 60) {
    provider.appbarClass = ['border-b', 'md-shadow'];
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
initializeTheme();

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
      <BsDivider class="mt-4" />
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
          <template v-for="navItem in routeNavB" :key="navItem.path || navItem.text">
            <BsListNavItem
              v-if="!navItem.hidden"
              :label="navItem.text"
              :path-name="StringHelper.kebabCase(navItem.text)"
            />
          </template>
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer v-scroll="onScroll" app @resize="resizeHandler">
      <RouterView v-slot="{ Component }">
        <Transition mode="out-in" name="fade-fast">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </BsContainer>
  </BsApp>
</template>

<style lang="scss">
@use 'sass:color';
@use 'vue-mdbootstrap/scss/mixins/css3/borders';
@use 'vue-mdbootstrap/scss/mixins/css3/breakpoints' as media;
@use 'vue-mdbootstrap/scss/color_vars' as colors;
@use 'vue-mdbootstrap/scss/variables' as vars;

// Page animation transition
//---------------------------
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
  &:not(.dark) {
    --background: oklch(0.976 0 89.876);
    --appbar-background: oklch(1 0 0);
    --appbar-height: 4rem;
    --sidedrawer-background: oklch(0.921 0.009 264.52);
  }
}

// Customize side-drawer menu styles
//-----------------------------------
.md-side-drawer {
  .md-nav-item:not(.md-expanded) {
    &.active > .md-nav-border-left > .md-ripple:before {
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

// Change floating sidebar background to white
:not(.dark) {
  body {
    > .md-side-drawer {
      --sidedrawer-background: oklch(1 0 0);
    }
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
  //--border-translucent: oklch(87.2% 0.01 258.338deg);

  a.menu-item {
    color: var(--foreground);
    font-weight: var(--font-weight-medium);
    text-decoration: none;

    &:hover {
      color: colors.$blue-accent-4;
    }
  }
}

.md-popover-dropdown-menu {
  .md-list-tile {
    &.active {
      .md-list-tile-title {
        font-weight: var(--font-weight-medium);
      }
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

.md-card-header {
  .h4 {
    font-weight: var(--font-weight-normal);
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
  font-size: 0.9rem;

  &.active,
  &:hover {
    font-weight: var(--font-weight-medium);
    background-color: var(--navigation-item-hover-background);
    border-radius: vars.$radius-sm;
  }
}

.local-nav-aside {
  padding-top: vars.$padding-xl + 0.5;
  width: 13rem; // 208px;
  min-width: 13rem;

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
    font-size: 0.9rem;
    font-weight: var(--font-weight-semibold);
    padding-left: var(--md-tile-padding-x);
    margin-bottom: 0;
  }
}

.home-body {
  margin-top: 2rem;

  .section-content {
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include media.breakpoint-up(md) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @include media.breakpoint-up(xl) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

.displayed-item {
  border-color: colors.$gray-200;

  &:hover {
    background-color: oklch(92.9% 0.013 255.508);

    > img {
      opacity: 0.5;
    }
  }

  &.has-img-h-32 {
    > img {
      height: 128px;
    }
  }

  &.has-img-h-36 {
    > img {
      height: 144px;
    }
  }

  > img {
    object-fit: cover;
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

  // screen: 801px
  @include media.breakpoint-up(md) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  // screen: 1328px
  @media (min-width: 83rem) {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 56.25rem; //900px;
  }
}

//.demo-block-content {
//  .md-breadcrumb {
//    --md-breadcrumb-padding-x: 0;
//  }
//}

// Utilities
//----------
.min-h-40 {
  min-height: 10rem; // 160px
}

.decoration-none {
  text-decoration: none;
}

.section-content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  @include media.breakpoint-up(md) {
    padding-left: 0;
    padding-right: 0;
  }
}

.table {
  --bs-table-color: var(--foreground);
  --bs-table-bg: inherit;
}

.picked-color {
  @include borders.radius(50%);
  background-image:
    repeating-linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 75%, #aaa 75%, #aaa),
    repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);

  // prettier-ignore
  background-position: 0 0, 4px 4px;
  background-size: 8px 8px;
  border: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap;

  &:after {
    background-color: currentColor;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: block;
    position: absolute;
    pointer-events: none;
  }
}

.dark {
  .#{vars.$prefix}side-drawer {
    @media (min-width: calc(50rem + 1px)) {
      &:hover {
        ::-webkit-scrollbar-thumb {
          background: oklch(0.344 0.01 260.718);

          &:hover {
            background: oklch(0.492 0.007 264.503);
          }
        }
      }
    }
  }

  .#{vars.$prefix}appbar {
    a.menu-item {
      &:hover {
        color: colors.$blue-accent-3;
      }
    }
  }

  .#{vars.$prefix}btn {
    .#{vars.$prefix}badge {
      &.bg-gray-200 {
        background-color: colors.$gray-600;
        color: colors.$gray-200 !important;
      }
    }
  }

  .displayed-item {
    background-color: oklch(44.6% 0.043 257.281 / 0.2);
    border-color: oklch(37.2% 0.044 257.287 / 0.1);

    &:hover {
      background-color: oklch(55.4% 0.046 257.417 / 0.4);
    }
  }

  :not(.color-table-body) {
    > .bg-blue-grey-800 {
      background-color: color.change(colors.$blue-grey-darken-4, $alpha: 0.15);
    }

    > .bg-gray-200,
    > .bg-gray-400 {
      background-color: color.change(colors.$gray-700, $alpha: 0.3);
    }
  }
}
</style>
