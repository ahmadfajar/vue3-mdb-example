<script setup lang="ts">
import { createShikiInstance, disposeShiki, highlightCode } from '@shares/shikiApi.ts';
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { PopupManager, useBreakpointMax } from 'vue-mdbootstrap';

const props = defineProps<{ tpl?: string; tsc?: string; open?: boolean }>();
const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const zIndex = 1024;
const templateActive = ref(false);
const scriptActive = ref(false);
const panelOpen = ref(true);
const isMobile = ref(true);
const fmtCodeTpl = ref<string>();
const fmtCodeTsc = ref<string>();
const sourceVisible = computed(() => templateActive.value || scriptActive.value);

// initialize side-panel state
isMobile.value = useBreakpointMax('md');
const initialState = !isMobile.value;
panelOpen.value = initialState;

function toggleTemplate(state: boolean) {
  templateActive.value = !state;
  if (templateActive.value) {
    scriptActive.value = false;
  }
}

function toggleScript(state: boolean) {
  scriptActive.value = !state;
  if (scriptActive.value) {
    templateActive.value = false;
  }
}

function toggleSidePanel(state: boolean) {
  const newState = !state;

  if (newState) {
    openHandler();
  } else {
    closeOverlay();
  }
}

function openHandler() {
  if (isMobile.value) {
    PopupManager.preventScrolling();
  }

  panelOpen.value = true;
  emit('update:open', true);
}

function closeOverlay() {
  if (isMobile.value) {
    PopupManager.allowScrolling();
  }

  panelOpen.value = false;
  emit('update:open', false);
}

function resizeHandler() {
  isMobile.value = useBreakpointMax('md');

  if (isMobile.value) {
    panelOpen.value = false;
    emit('update:open', false);
  } else {
    PopupManager.allowScrolling();
    panelOpen.value = initialState;
    emit('update:open', initialState);
  }
}

watch(
  () => [props.tpl, props.tsc],
  async ([tpl, tsc]) => {
    if (tpl) {
      fmtCodeTpl.value = await highlightCode(tpl, 'vue');
    }
    if (tsc) {
      fmtCodeTsc.value = await highlightCode(tsc, 'vue');
    }
  }
);

onBeforeMount(async () => {
  await createShikiInstance();
  window.addEventListener('resize', resizeHandler);
});

onMounted(async () => {
  // Highlight input source codes after this component is fully mounted
  if (props.tpl) {
    fmtCodeTpl.value = await highlightCode(props.tpl, 'vue');
  }
  if (props.tsc) {
    fmtCodeTsc.value = await highlightCode(props.tsc, 'vue');
  }
});

onBeforeUnmount(() => {
  disposeShiki();
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <div class="showcase-container relative rounded-3 border overflow-hidden">
    <div :class="['flex relative', sourceVisible ? 'rounded-top-3' : 'rounded-3']">
      <div class="showcase-body flex flex-col flex-fill">
        <div class="showcase-content flex-fill text-bg-surface-secondary border-b">
          <slot name="content">
            <h5>Put example component here</h5>
          </slot>
        </div>
        <div class="showcase-toolbar bg-gray-100 flex w-full md-gap-x-2 px-3 py-2">
          <BsButton
            :active="templateActive"
            color="secondary"
            flat
            size="sm"
            @click="toggleTemplate(templateActive)"
          >
            Template
          </BsButton>
          <BsButton
            v-if="fmtCodeTsc"
            :active="scriptActive"
            color="secondary"
            flat
            size="sm"
            @click="toggleScript(scriptActive)"
          >
            Script
          </BsButton>
          <BsSpacer />
          <BsTooltip :content="panelOpen ? 'Close side panel' : 'Open side panel'" placement="top">
            <BsButton
              :icon="panelOpen ? 'right_panel_close' : 'right_panel_open'"
              color="secondary"
              flat
              mode="icon"
              style="margin-right: -6px"
              aria-label="Toggle right panel"
              @click="toggleSidePanel(panelOpen)"
            />
          </BsTooltip>
        </div>
      </div>
      <template v-if="isMobile">
        <Teleport to="body">
          <BsOverlay :show="panelOpen" :z-index="zIndex - 1" fixed @click="closeOverlay()" />
          <div
            :class="[
              'showcase-side text-bg-surface-secondary border-s fixed',
              panelOpen ? 'open' : 'close',
            ]"
          >
            <div class="flex flex-col md-gap-y-4 text-nowrap overflow-x-hidden p-3">
              <slot name="side-panel">
                <h6>Put showcase options here</h6>
              </slot>
            </div>
          </div>
        </Teleport>
      </template>
      <template v-else>
        <div
          :class="[
            'showcase-side text-bg-surface-secondary border-s',
            panelOpen ? 'open' : 'close',
          ]"
        >
          <div class="flex flex-col md-gap-y-4 text-nowrap overflow-x-hidden p-3">
            <slot name="side-panel">
              <h6>Put showcase options here</h6>
            </slot>
          </div>
        </div>
      </template>
    </div>
    <BsExpandTransition>
      <div v-if="sourceVisible" class="showcase-source border-t">
        <Transition mode="out-in" name="fade-fast">
          <div v-if="templateActive" v-html="fmtCodeTpl" class="p-3"></div>
          <div v-else v-html="fmtCodeTsc" class="p-3"></div>
        </Transition>
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
  padding: 1.5rem 1rem;
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

  &.fixed {
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1024;
  }

  &.open {
    margin-right: 0;
  }

  &.close {
    margin-right: -301px;
  }
}

.showcase-source {
  background-color: oklch(0.18 0.019 274.649);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  pre {
    margin-bottom: 0;
  }
}
</style>
