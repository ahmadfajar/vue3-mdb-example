<script setup lang="ts">
import type { IMyAppProvider } from '@shares/provider.ts';
import { inject, ref } from 'vue';

const provider = inject('MyApp') as IMyAppProvider;
const menuOpen = ref(false);
</script>

<template>
  <BsAppbar
    :class="
      provider.screenSize === 'desktop' || provider.linksCount === 0
        ? provider.appbarClass
        : 'border-b'
    "
    :fixed-top="provider.screenSize === 'desktop' || provider.linksCount === 0"
    :sticky-top="provider.linksCount === 0 ? false : provider.screenSize === 'tablet'"
    clipped-left
  >
    <BsButton
      :class="provider.linksCount > 0 ? ['hidden lg:inline'] : undefined"
      color="dark"
      flat
      icon="menu"
      mode="icon"
      aria-label="Menu"
      @click="provider.toggleSidebar()"
    />
    <BsAppbarTitle :title="$route.meta.title as string" />
    <BsAppbarItems class="items-center ms-auto">
      <div class="hidden md:flex md-gap-x-6 me-3">
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
      <div class="hidden md:block mx-2 border-s" style="width: 1px; height: 26px"></div>
      <div class="flex">
        <BsButton
          class="md:hidden"
          color="dark"
          flat
          icon="home_rounded"
          mode="icon"
          aria-label="Home"
          @click="async () => await $router.push({ name: 'home' })"
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
  <div
    v-if="provider.screenSize === 'mobile' && provider.linksCount > 0"
    :class="[
      'header-navbar w-full flex items-center justify-between sticky px-3 py-1',
      ...provider.appbarClass,
    ]"
  >
    <BsButton
      color="dark"
      flat
      icon="menu"
      mode="icon"
      aria-label="Menu"
      @click="provider.toggleSidebar()"
    />
    <BsDropdownMenu v-model:open="menuOpen" placement="bottom-right" space="5">
      <div
        :class="[
          'local-navbar-menu inline-flex items-center md-link select-none p-2',
          menuOpen ? 'active' : '',
        ]"
      >
        <span class="pe-2">On this page</span>
        <BsIcon icon="chevron-right" />
      </div>
      <template #content>
        <BsListView class="text-sm" style="--md-tile-minheight: 1.5rem">
          <BsListTile
            v-for="[text, location] in provider.pageLinks"
            :key="text"
            :location="location"
          >
            <BsListTileTitle> {{ text }}</BsListTileTitle>
          </BsListTile>
        </BsListView>
      </template>
    </BsDropdownMenu>
  </div>
</template>
