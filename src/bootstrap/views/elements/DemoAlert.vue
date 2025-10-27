<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-3">
      <BsAlert> Simple alert with <span class="font-weight-semibold">primary color</span> </BsAlert>
      <BsAlert color="secondary">
        Simple alert with <span class="font-weight-semibold">secondary color</span>
      </BsAlert>
      <BsAlert color="success">
        Simple alert with <span class="font-weight-semibold">success color</span>
      </BsAlert>
      <BsAlert color="danger">
        Simple alert with <span class="font-weight-semibold">danger color</span>
      </BsAlert>
      <BsAlert color="warning">
        Simple alert with <span class="font-weight-semibold">warning color</span>
      </BsAlert>
      <BsAlert color="info">
        Simple alert with <span class="font-weight-semibold">info color</span>
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Solid Fill Style</h2>
    <DemoBlock class="mt-3">
      <BsAlert filled>
        Solid alert with <span class="font-weight-semibold">primary color</span>
      </BsAlert>
      <BsAlert color="secondary" filled>
        Solid alert with <span class="font-weight-semibold">secondary color</span>
      </BsAlert>
      <BsAlert color="success" filled>
        Solid alert with <span class="font-weight-semibold">success color</span>
      </BsAlert>
      <BsAlert color="danger" filled>
        Solid alert with <span class="font-weight-semibold">danger color</span>
      </BsAlert>
      <BsAlert color="warning" filled>
        Solid alert with <span class="font-weight-semibold">warning color</span>
      </BsAlert>
      <BsAlert color="info" filled>
        Solid alert with <span class="font-weight-semibold">info color</span>
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Outline Style</h2>
    <DemoBlock class="mt-3">
      <BsAlert outlined> Outlined alert with primary color </BsAlert>
      <BsAlert color="secondary" outlined> Outlined alert with secondary color </BsAlert>
      <BsAlert color="success" outlined> Outlined alert with success color </BsAlert>
      <BsAlert color="danger" outlined> Outlined alert with danger color </BsAlert>
      <BsAlert color="warning" outlined> Outlined alert with warning color </BsAlert>
      <BsAlert color="info" outlined> Outlined alert with info color </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Predefined Contextual Alert</h2>
    <DemoBlock class="mt-3">
      <BsAlert filled icon-variant="filled" variant="success">
        {{ content }} a predefined contextual
        <span class="font-weight-semibold">Success Alert</span>.
      </BsAlert>
      <BsAlert filled icon-variant="filled" variant="info">
        {{ content }} a predefined contextual <span class="font-weight-semibold">Info Alert</span>.
      </BsAlert>
      <BsAlert filled icon-variant="filled" variant="warning">
        {{ content }} a predefined contextual
        <span class="font-weight-semibold">Warning Alert</span>.
      </BsAlert>
      <BsAlert filled variant="danger">
        {{ content }} a predefined contextual
        <span class="font-weight-semibold">Danger Alert</span>.
      </BsAlert>
      <BsAlert filled variant="help">
        {{ content }} a predefined contextual <span class="font-weight-semibold">Help Alert</span>.
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Custom Icon</h2>
    <DemoBlock class="mt-3">
      <BsAlert color="success" icon="verified">
        {{ content }} alert with <span class="font-weight-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="default" icon="help_center" icon-variant="filled">
        {{ content }} alert with <span class="font-weight-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="danger" icon="dangerous" icon-variant="filled">
        {{ content }} alert with <span class="font-weight-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="primary" icon-variant="filled">
        <template #icon>
          <icon-circle-nodes class="md-spin" />
        </template>
        {{ content }} alert with <span class="font-weight-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="warning" icon-variant="filled">
        {{ content }} alert with <span class="font-weight-semibold">custom Icon</span>.
        <template #icon>
          <icon-bullhorn />
        </template>
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Additional content inside alerts</h2>
    <DemoBlock class="mt-3">
      <BsAlert filled icon-variant="filled" variant="success">
        <h5 class="mt-2">Well done!</h5>
        <p>
          Aww yeah, you successfully read this important alert message. This is an example how to
          construct <b>Alerts</b> from other predefined colors.
        </p>
        <hr />
        <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Dismissible alerts</h2>
    <DemoBlock class="mt-3">
      <BsAlert color="primary" dismissible filled>
        Simple alert with primary color. Click the close button over there
        <BsFontawesomeIcon icon="hand-pointer" rotate="90" />
      </BsAlert>
      <BsAlert color="success" dismissible filled>
        Simple alert with success color. Click the close button over there
      </BsAlert>
      <BsAlert color="danger" dismissible outlined>
        Simple alert with danger color. Click the close button over there
      </BsAlert>
    </DemoBlock>

    <h2 class="mt-5">Controlling dismissible alert</h2>
    <DemoBlock class="mt-3">
      <BsAlert v-model="showDismissibleAlert1" color="danger" dismissible>
        This is a dismissible alert.
      </BsAlert>
      <BsAlert v-model="showDismissibleAlert2" dismissible @close="closeAlert">
        <div class="pb-2">This alert will dismiss after {{ dismissCountDown }} seconds...</div>
        <bs-progress v-model="percentProgress" mode="determinate" type="bar" />
      </BsAlert>
      <div class="row gy-3">
        <div class="col-12 col-md-6">
          <BsButton @click="toggleAlert">
            {{ showDismissibleAlert1 ? 'Hide' : 'Show' }} dismissible Alert
          </BsButton>
        </div>
        <div class="col-12 col-md-6">
          <BsButton @click="showAlert"> Show Alert with timer </BsButton>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { IconBullhorn, IconCircleNodes } from '@shares/sharedApi.ts';

// prettier-ignore
const content = 'Aww yeah, you successfully read this alert message. This is an example how to construct';

const dismissSecs = 10;
const dismissCountDown = ref(0);
const showDismissibleAlert1 = ref(false);
const showDismissibleAlert2 = ref(false);
const timerInterval = ref<number | undefined>(undefined);
const percentProgress = computed(() => (dismissCountDown.value / dismissSecs) * 100);

watch(
  () => dismissCountDown.value,
  (value: number) => {
    if (value < 1) {
      clearInterval(timerInterval.value);
      showDismissibleAlert2.value = false;
    }
  }
);

function showAlert() {
  dismissCountDown.value = dismissSecs;
  showDismissibleAlert2.value = true;
  startTimer();
}

function startTimer() {
  timerInterval.value = window.setInterval(() => (dismissCountDown.value -= 1), 1000);
}

function toggleAlert() {
  showDismissibleAlert1.value = !showDismissibleAlert1.value;
}

function closeAlert() {
  clearInterval(timerInterval.value);
}
</script>
