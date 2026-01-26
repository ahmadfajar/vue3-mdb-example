<script setup lang="ts">
import type { IMyAppProvider } from '@shares/provider.ts';
import { themeNameFrom, useTheme } from '@shares/themeApi.ts';
import { inject, ref, watchEffect } from 'vue';

const { theme, saveTheme } = useTheme();
const provider = inject('MyApp') as IMyAppProvider;
const menuOpen = ref(false);
const icon = ref('dark_mode');
const color = ref('dark');

function changeTheme() {
  const value = themeNameFrom(theme.value) === 'light' ? 'dark' : 'light';
  saveTheme(value);
}

watchEffect(() => {
  const name = themeNameFrom(theme.value);

  if (name === 'dark') {
    icon.value = 'light_mode';
    color.value = 'light';
  } else {
    icon.value = 'dark_mode';
    color.value = 'dark';
  }
});
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
      :class="provider.linksCount > 0 ? ['d-none d-lg-inline'] : undefined"
      :color="color"
      flat
      icon="menu"
      mode="icon"
      aria-label="Menu"
      @click="provider.toggleSidebar()"
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
      <div class="d-none d-md-block mx-2 border-s" style="width: 1px; height: 26px"></div>
      <div class="flex">
        <BsButton
          :color="color"
          class="d-md-none"
          flat
          icon="home_rounded"
          mode="icon"
          aria-label="Home"
          @click="async () => await $router.push({ name: 'home' })"
        />
        <BsButton
          :color="color"
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
        <BsButton :color="color" :icon="icon" flat mode="icon" @click="changeTheme()" />
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
      :color="color"
      flat
      icon="menu_open"
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
        <BsListView style="--md-tile-minheight: 1.5rem; font-size: 0.875rem">
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
