<script setup lang="ts">
import { computed, ref } from 'vue';

const tplActive = ref(false);
const scriptActive = ref(false);
const panelOpen = ref(true);
const sourceVisible = computed(() => tplActive.value || scriptActive.value);

function toggleTemplate(state: boolean) {
  tplActive.value = !state;
  if (tplActive.value) {
    scriptActive.value = false;
  }
}

function toggleScript(state: boolean) {
  scriptActive.value = !state;
  if (scriptActive.value) {
    tplActive.value = false;
  }
}
</script>

<template>
  <div class="showcase-container relative rounded-3 border overflow-hidden">
    <div :class="['flex relative', sourceVisible ? 'rounded-top-3' : 'rounded-3']">
      <div class="showcase-body flex flex-col flex-fill">
        <div class="showcase-content flex-fill text-bg-surface-secondary border-b p-3">
          <slot name="content">
            <h5>Put example component here</h5>
          </slot>
        </div>
        <div class="showcase-toolbar bg-gray-100 flex w-full md-gap-x-2 px-3 py-2">
          <BsButton
            :active="tplActive"
            color="secondary"
            flat
            size="sm"
            @click="toggleTemplate(tplActive)"
          >
            Template
          </BsButton>
          <BsButton
            :active="scriptActive"
            color="secondary"
            flat
            size="sm"
            @click="toggleScript(scriptActive)"
          >
            Script
          </BsButton>
          <BsSpacer />
          <BsButton
            :icon="panelOpen ? 'right_panel_close' : 'right_panel_open'"
            color="secondary"
            flat
            mode="icon"
            style="margin-right: -6px"
            aria-label="Toggle right panel"
            @click="panelOpen = !panelOpen"
          />
        </div>
      </div>
      <div
        :class="['showcase-side text-bg-surface-secondary border-s', panelOpen ? 'open' : 'closed']"
      >
        <div class="flex flex-col md-gap-y-4 text-nowrap overflow-x-hidden p-3">
          <slot name="side-panel">
            <h6>Put showcase options here</h6>
          </slot>
        </div>
      </div>
    </div>
    <BsExpandTransition>
      <div v-if="sourceVisible" class="showcase-source border-t bg-neutral-800 text-light">
        <div class="p-3">
          <div>Put example source code here</div>
          <div>Put example source code here</div>
          <div>Put example source code here</div>
          <div>Put example source code here</div>
        </div>
      </div>
    </BsExpandTransition>
  </div>
</template>

<style lang="scss">
@use 'vue-mdbootstrap/scss/mixins/css3/breakpoints' as media;
@use 'vue-mdbootstrap/scss/color_vars' as colors;

.showcase-container {
  --border-translucent: #{colors.$gray-300};
  --bs-border-color: var(--border-translucent);
  --bs-border-radius-lg: 0;

  @include media.breakpoint-up(md) {
    --bs-border-radius-lg: 0.5rem;
  }
}

//.showcase-toolbar {
//  //background-color: oklch(0 0 0 / 0.2);
//  border-bottom-left-radius: inherit;
//}

.showcase-content {
  border-top-left-radius: inherit;
}

.showcase-body {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.showcase-side {
  //background-color: oklch(0 0.01 15 / 0.05);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  width: 300px;
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  &.open {
    margin-right: 0;
  }

  &.closed {
    margin-right: -301px;
  }
}

.showcase-source {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
</style>
