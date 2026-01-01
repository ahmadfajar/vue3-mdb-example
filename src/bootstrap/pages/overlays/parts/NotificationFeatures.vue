<script setup lang="ts">
import {
  applyNotificationTemplate,
  dsNotificationPositions,
  dsNotificationVariants,
  useShowNotification,
} from '@shares/notificationApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import type { TNotificationPosition, TNotificationVariant } from 'vue-mdbootstrap';
import Example from '../examples/NotificationExample1.vue?raw';

const fmtVueTpl = ref<string>();
const notificationVariant = ref<TNotificationVariant>('default');
const notificationPosition = ref<TNotificationPosition>('bottom-right');
const showProgressBar = ref(false);
const hideIcon = ref(false);
const hideTitle = ref(false);

const rawTemplate = parseVueTemplateTag(Example);

useWatcherDefaultValue(
  { refObj: notificationVariant, default: 'default' },
  { refObj: notificationPosition, default: 'bottom-right' }
);

watchEffect(() => {
  const rawCode = applyNotificationTemplate(
    notificationVariant.value,
    notificationPosition.value,
    showProgressBar.value,
    hideIcon.value,
    hideTitle.value,
    rawTemplate
  );

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const notificationVariantSrc = dsNotificationVariants();
const notificationPositionSrc = dsNotificationPositions();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];

onBeforeUnmount(() => {
  notificationVariantSrc.proxy.destroy();
  notificationPositionSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Features Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox
          v-model="notificationPosition"
          :data-source="notificationPositionSrc"
          filled
          floating-label
        >
          <label>Display Placement:</label>
        </BsCombobox>
        <BsCombobox
          v-model="notificationVariant"
          :data-source="notificationVariantSrc"
          filled
          floating-label
        >
          <label>Type Variant:</label>
        </BsCombobox>
        <div class="ps-2 mb-2">
          <BsSwitch
            v-model="showProgressBar"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Show ProgressBar
          </BsSwitch>
          <BsSwitch
            v-model="hideIcon"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Hide Icon
          </BsSwitch>
          <BsSwitch
            v-model="hideTitle"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Hide Title
          </BsSwitch>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsButton
            :color="notificationVariant === 'error' ? 'danger' : notificationVariant"
            @click="
              useShowNotification(
                $notification,
                notificationVariant,
                notificationPosition,
                showProgressBar,
                hideIcon,
                hideTitle
              )
            "
          >
            Show Notification
          </BsButton>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
