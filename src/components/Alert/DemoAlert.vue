<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="mt-4">
      <BsAlert>
        Simple alert with primary color
      </BsAlert>
      <BsAlert color="secondary">
        Simple info alert with secondary color
      </BsAlert>
      <BsAlert color="success">
        Simple alert with success color
      </BsAlert>
      <BsAlert color="danger">
        Simple alert with danger color
      </BsAlert>
      <BsAlert color="warning">
        Simple alert with warning color
      </BsAlert>
      <BsAlert color="info">
        Simple info alert with info color
      </BsAlert>
    </div>
    <h2 class="mt-5">
      Solid Fill Style
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsAlert filled>
        Solid alert with primary color
      </BsAlert>
      <BsAlert color="success" filled>
        Solid alert with success color
      </BsAlert>
      <BsAlert color="danger" filled>
        Solid alert with danger color
      </BsAlert>
      <BsAlert color="warning" filled>
        Solid alert with warning color
      </BsAlert>
      <BsAlert color="info" filled>
        Solid info alert with info color
      </BsAlert>
    </div>
    <h2 class="mt-5">
      Outline Style
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsAlert outlined>
        Outlined alert with primary color
      </BsAlert>
      <BsAlert color="success" outlined>
        Outlined alert with success color
      </BsAlert>
      <BsAlert color="danger" outlined>
        Outlined alert with danger color
      </BsAlert>
      <BsAlert color="warning" outlined>
        Outlined alert with warning color
      </BsAlert>
      <BsAlert color="info" outlined>
        Outlined info alert with info color
      </BsAlert>
    </div>
    <h2 class="mt-5">
      Predefined Contextual Alert
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsAlert
        filled
        variant="success"
        icon-variant="outlined">
        {{ content }} a predefined <span class="md-fw-semibold">Contextual Alert</span>.
      </BsAlert>
      <BsAlert
        filled
        variant="info"
        icon-variant="outlined">
        {{ content }} a predefined <span class="md-fw-semibold">Contextual Alert</span>.
      </BsAlert>
      <BsAlert
        filled
        variant="warning"
        icon-variant="round">
        {{ content }} a predefined <span class="md-fw-semibold">Contextual Alert</span>.
      </BsAlert>
      <BsAlert filled variant="danger">
        {{ content }} a predefined <span class="md-fw-semibold">Contextual Alert</span>.
      </BsAlert>
      <BsAlert filled variant="help">
        {{ content }} a predefined <span class="md-fw-semibold">Contextual Alert</span>.
      </BsAlert>
    </div>
    <h2 class="mt-5">
      Custom Icon
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsAlert
        icon="verified"
        icon-variant="outlined"
        color="green">
        {{ content }} alert with <span class="md-fw-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert icon="help_center" color="orange">
        {{ content }} alert with <span class="md-fw-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert icon="dangerous" color="danger">
        {{ content }} alert with <span class="md-fw-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="deep-purple">
        <template #alertIcon>
          <fnSvgIcon1/>
        </template>
        {{ content }} alert with <span class="md-fw-semibold">custom Icon</span>.
      </BsAlert>
      <BsAlert color="blue">
        {{ content }} alert with <span class="md-fw-semibold">custom Icon</span>.
        <template #alertIcon>
          <fnSvgIcon2/>
        </template>
      </BsAlert>
    </div>
    <h2 class="mt-5">
      Additional content inside alerts
    </h2>
    <BsDivider/>
    <BsAlert
      class="mt-4"
      filled
      variant="success">
      <h5>Well done!</h5>
      <p>
        Aww yeah, you successfully read this important alert message. This is an example how to
        construct <b>Alerts</b> from other predefined colors.
      </p>
      <hr/>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </BsAlert>
    <h2 class="mt-5">
      Dismissible alerts
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <bs-alert
        color="primary"
        filled
        dismissible>
        Simple alert with primary color. Click the close button over there
      </bs-alert>
      <bs-alert color="info" dismissible>
        Simple info alert with info color. Click the close button over there
      </bs-alert>
      <bs-alert
        color="danger"
        outlined
        dismissible>
        Simple alert with success color. Click the close button over there
      </bs-alert>
    </div>
    <h2 class="mt-5">
      Controlling dismissible alert
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <bs-alert
        v-model="showDismissibleAlert"
        color="teal"
        dismissible>
        This is a dismissible alert.
      </bs-alert>
      <bs-alert
        :model-value="dismissCountDown > 0"
        @update-model-value="dismissCountDown === 0"
        dismissible>
        <div class="pb-2">
          This alert will dismiss after {{ dismissCountDown }} seconds...
        </div>
        <bs-progress
          v-model="percentProgress"
          color="pink"
          mode="determinate"
          type="bar"/>
      </bs-alert>
      <div class="row">
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <BsButton
            color="default-color"
            @click="toggleAlert">
            {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissible Alert
          </BsButton>
        </div>
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <BsButton
            color="default-color"
            @click="showAlert">
            Show Alert with timer
          </BsButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCreateSvgComponent } from '../../../../vue-mdbootstrap/src/components/Icon/mixins/SvgApi'
import { computed, ref, watch } from 'vue'

const content = 'Aww yeah, you successfully read this alert message. This is an example how to construct'
const svgIcon1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M380.6 365.6C401.1 379.9 416 404.3 416 432C416 476.2 380.2 512 336 512C291.8 512 256 476.2 256 432C256 423.6 257.3 415.4 259.7 407.8L114.1 280.4C103.8 285.3 92.21 288 80 288C35.82 288 0 252.2 0 208C0 163.8 35.82 128 80 128C101.9 128 121.7 136.8 136.2 151.1L320 77.52C321.3 34.48 356.6 0 400 0C444.2 0 480 35.82 480 80C480 117.9 453.7 149.6 418.4 157.9L380.6 365.6zM156.3 232.2L301.9 359.6C306.9 357.3 312.1 355.4 317.6 354.1L355.4 146.4C351.2 143.6 347.4 140.4 343.8 136.9L159.1 210.5C159.7 218 158.5 225.3 156.3 232.2V232.2z"/></svg>'
const svgIcon2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"/></svg>'
const fnSvgIcon1 = useCreateSvgComponent(svgIcon1, 32, 32, 'md-svg-inline md-spin')
const fnSvgIcon2 = useCreateSvgComponent(svgIcon2, 32, 32, 'md-svg-inline')

const dismissSecs = 10
const dismissCountDown = ref(0)
const showDismissibleAlert = ref(false)
const timerInterval = ref<number | undefined>(undefined)
const percentProgress = computed(() => (dismissCountDown.value / dismissSecs) * 100)

watch(
  () => dismissCountDown.value,
  (value: number) => {
    if (value < 1) {
      clearInterval(timerInterval.value)
    }
  }
)

function showAlert () {
  dismissCountDown.value = dismissSecs
  startTimer()
}

function startTimer () {
  timerInterval.value = setInterval(() => (dismissCountDown.value -= 1), 1000)
}

function toggleAlert () {
  showDismissibleAlert.value = !showDismissibleAlert.value
}

</script>

<style scoped>
</style>
