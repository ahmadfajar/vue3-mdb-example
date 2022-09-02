<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="color in colorVariants" :key="color">
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
      <template v-for="color in colorVariants" :key="color">
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
      <template v-for="color in colorVariants" :key="color">
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
      <template v-for="color in colorVariants.slice(0, 10)" :key="color">
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
      <template v-for="color in colorVariants.slice(0, 10)" :key="color">
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
          <icon-bullhorn height="18" width="18"/>
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
import { colorVariants, IconBullhorn, toTitleCase } from '@/sharedApi'

const chipDefaultActive = ref(false)
const chipPrimaryActive = ref(false)
const chipSuccessActive = ref(false)
const chipDangerActive = ref(false)
const showDismissibleChip = ref(true)

function toggleChip () {
  showDismissibleChip.value = !showDismissibleChip.value
}
</script>

<style scoped>
</style>
