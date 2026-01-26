<script setup lang="ts">
import { highlightCode } from '@shares/shikiApi.ts';
import { themeNameFrom, useTheme } from '@shares/themeApi.ts';
import { onBeforeMount, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import { Helper, PopupManager, useBreakpointMax } from 'vue-mdbootstrap';

const props = defineProps<{
  tpl?: string;
  tsc?: string;
  styl?: string;
  open?: boolean;
  expanded?: boolean;
}>();

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const { theme } = useTheme();

const zIndex = 1024;
const templateActive = ref(false);
const scriptActive = ref(false);
const styleActive = ref(false);
const panelOpen = ref(true);
const isTablet = ref(true);
const showTplBtn = ref(true);
const fmtCodeTpl = ref<string>();
const fmtCodeTsc = ref<string>();
const fmtStyle = ref<string>();
const sourceVisible = ref(false);
const color = ref('secondary');

// initialize side-panel state
isTablet.value = useBreakpointMax('lg');
const initialState = !isTablet.value;
panelOpen.value = initialState;

function toggleTemplate(state: boolean) {
  templateActive.value = !state;
  if (templateActive.value) {
    scriptActive.value = false;
    styleActive.value = false;
  }

  sourceVisible.value = templateActive.value;
}

function toggleScript(state: boolean) {
  scriptActive.value = !state;
  if (scriptActive.value) {
    templateActive.value = false;
    styleActive.value = false;
  }

  sourceVisible.value = scriptActive.value;
}

function toggleStyle(state: boolean) {
  styleActive.value = !state;
  if (styleActive.value) {
    templateActive.value = false;
    scriptActive.value = false;
  }

  sourceVisible.value = styleActive.value;
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
  if (isTablet.value) {
    PopupManager.preventScrolling();
  }

  panelOpen.value = true;
  emit('update:open', true);
}

function closeOverlay() {
  if (isTablet.value) {
    PopupManager.allowScrolling();
  }

  panelOpen.value = false;
  emit('update:open', false);
}

function resizeHandler() {
  isTablet.value = useBreakpointMax('lg');

  if (isTablet.value) {
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
    styleActive.value && props.styl
      ? props.styl
      : scriptActive.value && props.tsc
        ? props.tsc
        : templateActive.value && props.tpl
          ? props.tpl
          : props.tsc && !props.tpl && !props.styl
            ? props.tsc
            : props.styl && !props.tpl && !props.tsc
              ? props.styl
              : props.tpl;

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
  () => [props.tpl, props.tsc, props.styl],
  async ([tpl, tsc, styl]) => {
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
    if (styl) {
      fmtStyle.value = await highlightCode(styl, 'vue');
    } else {
      fmtStyle.value = undefined;
    }
  }
);
watch(
  () => props.open,
  (value) => {
    panelOpen.value = value;
  }
);

watchEffect(() => {
  const name = themeNameFrom(theme.value);
  if (name === 'dark') {
    color.value = 'light';
  } else {
    color.value = 'secondary';
  }
});

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
  if (props.styl) {
    fmtStyle.value = await highlightCode(props.styl, 'vue');
  }

  if (fmtCodeTpl.value && props.expanded && !fmtCodeTsc.value && !fmtStyle.value) {
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
  <div class="shoutbox-container relative md:rounded-lg rounded-3 border overflow-hidden">
    <div
      :class="[
        'flex relative',
        sourceVisible ? 'md:rounded-t-lg rounded-top-3' : 'md:rounded-lg rounded-3',
      ]"
    >
      <div class="shoutbox-body flex flex-col flex-fill overflow-x-hidden">
        <div class="h-full flex-fill p-1 md:rounded-lg rounded-3">
          <div class="shoutbox-content h-full border md:rounded-lg rounded-3">
            <slot name="content">
              <h5>Put example component here</h5>
            </slot>
          </div>
        </div>
        <div
          :class="[
            'shoutbox-toolbar flex items-center w-full px-3',
            showTplBtn || fmtCodeTsc || fmtStyle ? 'py-2' : 'py-1',
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
            <BsButton
              v-if="fmtStyle"
              :active="styleActive"
              class="ms-1"
              color="secondary"
              flat
              size="sm"
              @click="toggleStyle(styleActive)"
            >
              Style
            </BsButton>
          </div>
          <BsSpacer />
          <template v-if="$slots['side-panel']">
            <BsTooltip
              :content="panelOpen ? 'Close side panel' : 'Open side panel'"
              placement="top"
            >
              <BsButton
                :color="color"
                :icon="panelOpen ? 'right_panel_close' : 'right_panel_open'"
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
        <template v-if="isTablet">
          <Teleport to="body">
            <BsOverlay :show="panelOpen" :z-index="zIndex - 1" fixed @click="closeOverlay()" />
            <div
              :class="[
                'shoutbox-side text-bg-surface-secondary border-s fixed',
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
              'shoutbox-side text-bg-surface-secondary border-s',
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
      <div v-if="sourceVisible" class="shoutbox-source relative">
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
        <div class="md:rounded-lg rounded-3 p-1 pt-0">
          <Transition mode="out-in" name="fade-fast">
            <div v-if="styleActive" v-html="fmtStyle" class="text-sm"></div>
            <div v-else-if="scriptActive" v-html="fmtCodeTsc" class="text-sm"></div>
            <div v-else v-html="fmtCodeTpl" class="text-sm"></div>
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

.shoutbox-container {
  --md-border-color: #{colors.$gray-300};
  --bs-border-color: var(--md-border-color);
  --bs-border-radius-lg: 0;

  @include media.breakpoint-up(md) {
    --bs-border-radius-lg: 0.5rem;
  }
}

.shoutbox-content {
  --md-border-color: #{colors.$neutral-lighten-2};
  --bs-border-color: var(--md-border-color);
  background-color: var(--background-secondary);
  color: var(--foreground-secondary);
}

.shoutbox-body {
  background-color: oklch(92.8% 0.006 264.531);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.shoutbox-side {
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
    --md-tab-md3-indicator-active-color: var(--md-field-active-indicator);
    --md-tab-md3-indicator-border: 4px;
    --md-tab-md3-indicator-radius: 6px;
    --md-tab-md3-padding: 0.75rem 1.25rem;
    --md-tab-content-padding: 1.25rem 0.875rem;

    .tab-sliding {
      border-bottom: thin solid var(--border-translucent);
    }
  }

  .md-tabs-md3 {
    position: relative;

    .tab-item-link {
      background-color: transparent;
      border: 0 solid transparent;
      position: relative;
      transition: vars.$transition-default;

      > .#{vars.$prefix}ripple {
        padding: var(--md-tab-md3-padding);
      }
    }

    &.md-tab-top {
      //box-shadow: var(--md-tab-placement-top-shadow);

      .tab-item-link {
        &:before {
          content: '';
          border-top-left-radius: var(--md-tab-md3-indicator-radius);
          border-top-right-radius: var(--md-tab-md3-indicator-radius);
          left: 0.75rem;
          right: 0.75rem;
          bottom: -1px;
          position: absolute;
          height: var(--md-tab-md3-indicator-border);
        }

        &.active {
          &:before {
            background-color: var(--md-tab-md3-indicator-active-color);
          }
        }
      }
    }
  }
}

.shoutbox-source {
  background-color: oklch(92.8% 0.006 264.531);
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
    border: 1px solid var(--border-translucent);
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

.dark {
  $border-color: color.change(colors.$gray-300, $alpha: 0.15);

  .shoutbox-container {
    --md-border-color: #{$border-color};
  }

  .shoutbox-content {
    --md-border-color: #{$border-color};
    background-color: oklch(0.2 0 0);
    color: var(--foreground);
  }

  .shoutbox-body,
  .shoutbox-source {
    background-color: oklch(0.22 0 0);
  }

  .shoutbox-source {
    .text-sm {
      border-color: $border-color;
    }
  }
}
</style>
