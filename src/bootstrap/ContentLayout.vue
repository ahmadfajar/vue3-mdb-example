<script setup lang="ts">
import { type IMyAppProvider, type LinkItem } from '@shares/provider.ts';
import { inject, onBeforeUnmount, ref, unref } from 'vue';

const props = defineProps<{ links?: Readonly<LinkItem[]> }>();

const provider = inject('MyApp') as IMyAppProvider;
const menuOpen = ref(false);

provider.setPageLinks(unref(props.links) || []);

onBeforeUnmount(() => {
  // console.log('Clearing link items.');
  provider.clearPageLinks();
});
</script>

<template>
  <BsContent class="max-w-full" tag="div">
    <div
      v-if="provider.screenSize === 'tablet' && links && links.length > 0"
      :class="['local-navbar w-full flex justify-end sticky px-3 py-1', ...provider.appbarClass]"
      style="z-index: 2"
    >
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
            <BsListTile v-for="item in links" :key="item.text" :location="item.location">
              <BsListTileTitle> {{ item.text }}</BsListTileTitle>
            </BsListTile>
          </BsListView>
        </template>
      </BsDropdownMenu>
    </div>
    <div class="flex flex-row">
      <main class="docs-body flex-fill mx-auto overflow-x-hidden">
        <slot></slot>
      </main>
      <div v-if="provider.screenSize === 'desktop'" class="local-nav-aside">
        <aside
          v-if="links && links.length > 0"
          class="local-nav-items border-s fixed"
          style="z-index: 2"
        >
          <h6>On this page</h6>
          <BsListView style="font-size: 0.875rem">
            <BsListTile v-for="item in links" :key="item.text" :location="item.location">
              <BsListTileTitle> {{ item.text }}</BsListTileTitle>
            </BsListTile>
          </BsListView>
        </aside>
      </div>
    </div>
  </BsContent>
</template>
