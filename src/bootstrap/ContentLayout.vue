<script setup lang="ts">
import type { AppInjection } from '@bs/App.vue';
import { inject, ref } from 'vue';
import type { RouteLocationAsRelativeGeneric } from 'vue-router';

export declare type LinkItem = { text: string; location: RouteLocationAsRelativeGeneric };

defineProps<{ linkItems?: LinkItem[] }>();

const { screenSize, appbarCls } = inject('MyApp') as AppInjection;

const menuRef = ref<HTMLElement>();
const popupOpen = ref(false);
</script>

<template>
  <BsContent class="relative" tag="div">
    <div
      v-if="linkItems && linkItems.length > 0"
      :class="screenSize === 'tablet' ? appbarCls : 'border-b'"
      class="local-navbar w-full d-none d-lg-flex d-xl-none justify-end sticky px-3 py-1"
    >
      <div
        ref="menuRef"
        :class="[
          'local-navbar-menu inline-flex items-center md-link select-none p-2',
          popupOpen ? 'active' : '',
        ]"
        @click="popupOpen = !popupOpen"
      >
        <span class="pe-2">On this page</span>
        <BsIcon icon="chevron-right" />
      </div>
      <BsPopover
        v-model:open="popupOpen"
        :trigger="menuRef"
        class="border shadow"
        placement="bottom-right"
        space="2"
      >
        <BsListView>
          <BsListTile
            v-for="item in linkItems"
            :key="item.text"
            :location="item.location"
            @click="popupOpen = false"
          >
            <BsListTileTitle> {{ item.text }}</BsListTileTitle>
          </BsListTile>
        </BsListView>
      </BsPopover>
    </div>
    <div class="flex flex-row">
      <main class="docs-body flex-fill mx-auto">
        <slot></slot>
      </main>
      <div v-if="linkItems && linkItems.length > 0" class="local-nav-aside d-none d-xl-block">
        <aside class="local-nav-items border-s fixed">
          <h6>On this page</h6>
          <BsListView>
            <BsListTile v-for="item in linkItems" :key="item.text" :location="item.location">
              <BsListTileTitle> {{ item.text }}</BsListTileTitle>
            </BsListTile>
          </BsListView>
        </aside>
      </div>
    </div>
  </BsContent>
</template>
