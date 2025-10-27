<template>
  <BsApp viewport-height>
    <BsAppbar clipped-left sticky-top>
      <BsButton
        color="secondary"
        flat
        icon="menu"
        mode="icon"
        @click="toggleSideDrawer(!openSideDrawer)"
      />
      <BsAppbarTitle :title="$route.meta.title as string" />
    </BsAppbar>
    <BsSideDrawer v-model:open="openSideDrawer" class="border-end" fixed-layout>
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

const openSideDrawer = ref(true);

function onContainerResize() {
  if (useBreakpointMax('lg')) {
    openSideDrawer.value = false;
  }
}

function toggleSideDrawer(value: boolean) {
  openSideDrawer.value = value;
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
//@use 'vue-mdbootstrap/scss/mixins/css3/borders';
//@use 'vue-mdbootstrap/scss/variables' as vars;

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
    padding-bottom: 2rem;

    //@media (min-width: 992px) {
    //  @include borders.top-start-radius(36px);
    //}
  }
}

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

.mobi-card {
  //--md-card-border-radius: 0.375rem;
  max-width: 25rem; // 400px;
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

  //.card {
  //  &.rounded-sm {
  //    --bs-card-border-radius: 0.375rem;
  //  }
  //
  //  > .md-appbar:first-child {
  //    @include borders.top-radius(var(--bs-card-border-radius));
  //  }
  //}
}

.demo-block-content {
  .md-breadcrumb {
    --md-breadcrumb-padding-x: 0;
  }
}
</style>
