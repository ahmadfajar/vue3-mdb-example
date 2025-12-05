<script setup lang="ts">
import { highlightCode } from '@shares/shikiApi.ts';
import { onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Helper, PopupManager, useBreakpointMax } from 'vue-mdbootstrap';

const props = defineProps<{ tpl?: string; tsc?: string; open?: boolean; expanded?: boolean }>();
const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const zIndex = 1024;
const templateActive = ref(false);
const scriptActive = ref(false);
const panelOpen = ref(true);
const isMobile = ref(true);
const showTplBtn = ref(true);
const fmtCodeTpl = ref<string>();
const fmtCodeTsc = ref<string>();
const sourceVisible = ref(false);

// initialize side-panel state
isMobile.value = useBreakpointMax('md');
const initialState = !isMobile.value;
panelOpen.value = initialState;

function toggleTemplate(state: boolean) {
  templateActive.value = !state;
  if (templateActive.value) {
    scriptActive.value = false;
  }

  sourceVisible.value = templateActive.value;
}

function toggleScript(state: boolean) {
  scriptActive.value = !state;
  if (scriptActive.value) {
    templateActive.value = false;
  }

  sourceVisible.value = scriptActive.value;
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

const msgCls = 'copy-message absolute font-weight-medium';
const copyMsgCls = ref([msgCls, 'hidden']);

async function copyToClipboard() {
  const text =
    templateActive.value && props.tpl
      ? props.tpl
      : scriptActive.value && props.tsc
        ? props.tsc
        : props.tpl && !props.tsc
          ? props.tpl
          : props.tsc;

  if (text) {
    try {
      await navigator.clipboard.writeText(text);

      copyMsgCls.value = [msgCls];
      Helper.defer(() => {
        copyMsgCls.value = [msgCls, 'hidden'];
      }, 2500);
      // console.log('Text copied to clipboard successfully');
    } catch (error) {
      console.warn('Unable to copy text to clipboard:', error);
    }
  }
}

watch(
  () => [props.tpl, props.tsc],
  async ([tpl, tsc]) => {
    if (tpl) {
      fmtCodeTpl.value = await highlightCode(tpl, 'vue');
    } else {
      fmtCodeTpl.value = undefined;
    }
    if (tsc) {
      fmtCodeTsc.value = await highlightCode(tsc, 'vue');
    } else {
      fmtCodeTsc.value = undefined;
    }
  }
);
watch(
  () => props.open,
  (value) => {
    panelOpen.value = value;
  }
);

onBeforeMount(() => {
  // await createShikiInstance();
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

  if (fmtCodeTpl.value && props.expanded && !fmtCodeTsc.value) {
    templateActive.value = true;
    sourceVisible.value = true;
    showTplBtn.value = false;
  } else if (!fmtCodeTpl.value) {
    showTplBtn.value = false;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <div class="showcase-container relative md:rounded-lg rounded-3 border overflow-hidden">
    <div
      :class="[
        'flex relative',
        sourceVisible ? 'md:rounded-t-lg rounded-top-3' : 'md:rounded-lg rounded-3',
      ]"
    >
      <div class="showcase-body bg-gray-200 flex flex-col flex-fill overflow-x-hidden">
        <div class="h-full flex-fill p-1 md:rounded-lg rounded-3">
          <div
            class="showcase-content h-full text-bg-surface-secondary border md:rounded-lg rounded-3"
          >
            <slot name="content">
              <h5>Put example component here</h5>
            </slot>
          </div>
        </div>
        <div
          :class="[
            'showcase-toolbar flex items-center w-full px-3',
            showTplBtn || fmtCodeTsc ? 'py-2' : 'py-1',
          ]"
        >
          <div class="inline">
            <BsButton
              v-if="showTplBtn"
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
              class="ms-1"
              color="secondary"
              flat
              size="sm"
              @click="toggleScript(scriptActive)"
            >
              Script
            </BsButton>
          </div>
          <BsSpacer />
          <template v-if="$slots['side-panel']">
            <BsTooltip
              :content="panelOpen ? 'Close side panel' : 'Open side panel'"
              placement="top"
            >
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
          </template>
        </div>
      </div>

      <template v-if="$slots['side-panel']">
        <template v-if="isMobile">
          <Teleport to="body">
            <BsOverlay :show="panelOpen" :z-index="zIndex - 1" fixed @click="closeOverlay()" />
            <div
              :class="[
                'showcase-side text-bg-surface-tertiary border-s fixed',
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
      </template>
    </div>
    <BsExpandTransition>
      <div v-if="sourceVisible" class="showcase-source relative bg-gray-200">
        <div :class="copyMsgCls">Copied</div>
        <BsButton
          class="absolute"
          color="light"
          flat
          icon="content_copy"
          mode="icon"
          title="Copy code"
          aria-label="Copy code"
          @click="copyToClipboard()"
        />
        <div class="md:rounded-lg rounded-3 p-1">
          <Transition mode="out-in" name="fade-fast">
            <div v-if="templateActive" v-html="fmtCodeTpl" class="text-sm"></div>
            <div v-else v-html="fmtCodeTsc" class="text-sm"></div>
          </Transition>
        </div>
      </div>
    </BsExpandTransition>
  </div>
</template>

<style lang="scss">
@use 'sass:color';
@use 'vue-mdbootstrap/scss/mixins/css3/breakpoints' as media;
@use 'vue-mdbootstrap/scss/color_vars' as colors;
@use 'vue-mdbootstrap/scss/variables' as vars;

.showcase-container {
  --border-translucent: #{colors.$gray-300};
  --bs-border-color: var(--border-translucent);
  --bs-border-radius-lg: 0;

  @include media.breakpoint-up(md) {
    --bs-border-radius-lg: 0.5rem;
  }
}

.showcase-content {
  --md-border-color: #{colors.$neutral-lighten-2};
  //padding: 1.5rem 1rem;
}

.showcase-body {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.showcase-side {
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  min-width: 300px;
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

  .md-tabs {
    --md-tab-item-color: var(--foreground-subtle-secondary);
    --md-tab-item-active-color: var(--foreground);
    --md-tab-item-hover-color: var(--md-field-active-indicator);
    --md-tab-material-indicator-active-color: var(--md-field-active-indicator);
    --md-tab-content-padding: 1.25rem 0.875rem;

    .tab-sliding {
      border-bottom: thin solid var(--border-translucent);
    }
  }
}

.showcase-source {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  > .copy-message {
    background-color: color.change(colors.$neutral-lighten-2, $alpha: 0.2);
    border-radius: 6px;
    color: colors.$gray-300;
    font-size: 14px;
    line-height: 1;
    padding: 0.85rem;
    top: 15px;
    right: 60px;
    z-index: 2;
  }

  > .md-btn-icon {
    display: none;
    top: 15px;
    right: 15px;
    z-index: 2;
    transition: vars.$transition-default-easing;
  }

  &:hover {
    > .md-btn-icon {
      display: block;
    }
  }

  .text-sm {
    border-radius: inherit;
    overflow-x: hidden;
  }

  pre {
    background-color: oklch(0.187 0 89.876) !important;
    border-radius: inherit;
    margin: 0;
    padding: 1rem;
    overflow: auto;
  }
}
</style>
