<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="color in variants" :key="color">
        <BsChip
          :color="color"
          class="mb-3"
          href="#/components/chip">
          {{ toTitleCase(color) }}
        </BsChip>
      </template>
    </div>
    <h4 class="mt-4">
      Pill Styles
    </h4>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="color in variants" :key="color">
        <BsChip
          :color="color"
          class="mb-3"
          href="#/components/chip"
          pill>
          {{ toTitleCase(color) }}
        </BsChip>
      </template>
    </div>
    <h4 class="mt-4">
      Outlined Styles
    </h4>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="color in variants" :key="color">
        <BsChip
          :color="color"
          href="#/components/chip"
          class="mb-3"
          outlined>
          {{ toTitleCase(color) }}
        </BsChip>
      </template>
    </div>
    <h2 class="mt-4">
      Chip States
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsChip
        color="primary"
        class="mb-3"
        disabled>
        Primary Color : Disabled
      </BsChip>
      <BsChip
        color="success"
        class="mb-3"
        disabled
        pill>
        Success Color : Disabled
      </BsChip>
    </div>
    <div class="mt-2">
      <template v-for="color in variants.slice(0, 9)" :key="color">
        <BsChip
          :color="color"
          href="#/components/chip"
          class="mb-3"
          active>
          {{ toTitleCase(color) }} : Active
        </BsChip>
      </template>
    </div>
    <div>
      <template v-for="color in variants.slice(0, 9)" :key="color">
        <BsChip
          :color="color"
          class="mb-3"
          href="#/components/chip"
          active
          outlined>
          {{ toTitleCase(color) }} : Active
        </BsChip>
      </template>
    </div>
    <h2 class="mt-4">
      Click events
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <BsChip
        :active="chipDefaultActive"
        outlined
        @click="chipDefaultActive = !chipDefaultActive">
        Default {{ chipDefaultActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipPrimaryActive"
        color="primary"
        outlined
        @click="chipPrimaryActive = !chipPrimaryActive">
        Primary {{ chipPrimaryActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipSuccessActive"
        color="success"
        outlined
        @click="chipSuccessActive = !chipSuccessActive">
        Success {{ chipSuccessActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipDangerActive"
        color="danger"
        outlined
        @click="chipDangerActive = !chipDangerActive">
        Danger {{ chipDangerActive ? ": Active" : "" }}
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        :active="chipDefaultActive"
        @click="chipDefaultActive = !chipDefaultActive">
        Default {{ chipDefaultActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipPrimaryActive"
        color="primary"
        @click="chipPrimaryActive = !chipPrimaryActive">
        Primary {{ chipPrimaryActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipSuccessActive"
        color="success"
        @click="chipSuccessActive = !chipSuccessActive">
        Success {{ chipSuccessActive ? ": Active" : "" }}
      </BsChip>
      <BsChip
        :active="chipDangerActive"
        color="danger"
        @click="chipDangerActive = !chipDangerActive">
        Danger {{ chipDangerActive ? ": Active" : "" }}
      </BsChip>
    </div>
    <h2 class="mt-5">
      Chip Size
    </h2>
    <BsDivider/>
    <div class="mt-3">
      <BsChip
        color="primary"
        size="sm">
        Small Chip
      </BsChip>
      <BsChip color="success">
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        size="lg">
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        size="sm"
        pill>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        size="lg"
        pill>
        Large Chip
      </BsChip>
    </div>
    <h2 class="mt-5">
      Chip Icon
    </h2>
    <BsDivider/>
    <div class="mt-3">
      <BsChip
        color="primary"
        icon="done"
        size="sm">
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        icon="help_center">
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        icon="notifications"
        size="lg">
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        icon="done"
        size="sm"
        pill>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        icon="help_center"
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        icon="notifications"
        size="lg"
        pill>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        icon="done"
        size="sm"
        outlined>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        icon="help_center"
        icon-variant="outlined"
        outlined>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        icon="notifications"
        size="lg"
        icon-variant="outlined"
        outlined>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip color="primary">
        <template #chipIcon>
          <BsIconSpinner pulse size="18"/>
        </template>
        Custom Icon
      </BsChip>
      <BsChip color="success">
        Custom Icon
        <template #chipIcon>
          <fnSvgIcon1/>
        </template>
      </BsChip>
    </div>
    <h2 class="mt-5">
      Avatar
    </h2>
    <BsDivider/>
    <div class="mt-3">
      <BsChip
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm">
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg">
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg">
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm"
        img-circle
        pill>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        img-circle
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg"
        img-circle
        pill>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm"
        outlined>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        outlined>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg"
        outlined>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm"
        img-circle
        outlined
        pill>
        Small Chip
      </BsChip>
      <BsChip
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        img-circle
        outlined
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg"
        img-circle
        outlined
        pill>
        Large Chip
      </BsChip>
    </div>
    <h4 class="mt-4">
      Adjusting Avatar Size
    </h4>
    <BsDivider/>
    <div class="mt-3">
      <BsChip
        :img-padding="false"
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="sm">
        Small Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg">
        Normal Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="lg">
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        :img-padding="false"
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="sm"
        img-circle
        pill>
        Small Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        img-circle
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="lg"
        img-circle
        pill>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        :img-padding="false"
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="sm"
        outlined>
        Small Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        outlined>
        Normal Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="lg"
        outlined>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        :img-padding="false"
        color="primary"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="sm"
        img-circle
        outlined
        pill>
        Small Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="success"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        img-circle
        outlined
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        :img-padding="false"
        color="danger"
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
        size="lg"
        img-circle
        outlined
        pill>
        Large Chip
      </BsChip>
    </div>
    <h2 class="mt-5">
      Dismissible Chip
    </h2>
    <BsDivider/>
    <div class="mt-3">
      <BsChip
        dismissible
        size="sm">
        small Chip
      </BsChip>
      <BsChip color="primary" dismissible>
        Normal Chip
      </BsChip>
      <BsChip
        color="success"
        dismissible
        size="lg">
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        size="sm"
        dismissible
        outlined>
        small Chip
      </BsChip>
      <BsChip
        color="primary"
        dismissible
        outlined>
        Normal Chip
      </BsChip>
      <BsChip
        color="success"
        size="lg"
        dismissible
        outlined>
        Large Chip
      </BsChip>
    </div>
    <div class="mt-3">
      <BsChip
        color="purple"
        size="sm"
        dismissible
        outlined
        pill>
        small Chip
      </BsChip>
      <BsChip
        color="unique"
        dismissible
        outlined
        pill>
        Normal Chip
      </BsChip>
      <BsChip
        color="default-color"
        size="lg"
        dismissible
        outlined
        pill>
        Large Chip
      </BsChip>
    </div>
    <h4 class="mt-4">
      Controlling Dismissible Chip
    </h4>
    <BsDivider/>
    <div class="mt-3">
      <bs-button
        color="default-color"
        class="me-4"
        @click="toggleChip">
        {{ showDismissibleChip ? 'Hide' : 'Show' }} Chip
      </bs-button>
      <BsChip
        v-model="showDismissibleChip"
        color="dark-blue"
        dismissible
        outlined>
        Dismissible Chip
      </BsChip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCreateSvgComponent } from '../../../../vue-mdbootstrap/src/components/Icon/mixins/svgApi'
import { toTitleCase } from '@/sharedApi'

const chipDefaultActive = ref(false)
const chipPrimaryActive = ref(false)
const chipSuccessActive = ref(false)
const chipDangerActive = ref(false)
const showDismissibleChip = ref(true)

const variants = [
  'default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light-grey', 'light', 'dark',
  'pink', 'indigo', 'purple', 'default-color', 'default-color-dark', 'primary-color-dark', 'secondary-color',
  'secondary-color-dark', 'info-color-dark', 'success-color-dark', 'danger-color-dark',
  'warning-color-dark', 'unique', 'unique-color'
]
const svgIcon1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"/></svg>'
const fnSvgIcon1 = useCreateSvgComponent(svgIcon1, 18, 18, 'md-svg-inline')

function toggleChip () {
  showDismissibleChip.value = !showDismissibleChip.value
}
</script>

<style scoped>
</style>
