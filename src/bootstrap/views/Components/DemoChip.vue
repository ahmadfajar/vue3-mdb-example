<template>
  <div class="docs-body container-lg mx-auto">
    <h2 id="overview">Overview</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <template v-for="color in colorVariants" :key="color">
        <BsChip href="javascript:;" :color="color" class="mb-3">
          {{ StringHelper.titleCase(color) }}
        </BsChip>
      </template>
    </DemoBlock>
    <h4 class="mt-5" id="pill-styles">Pill Styles</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <template v-for="color in colorVariants" :key="color">
        <BsChip href="javascript:void(0)" :color="color" class="mb-3" pill>
          {{ StringHelper.titleCase(color) }}
        </BsChip>
      </template>
    </DemoBlock>
    <h4 class="mt-5" id="outlined-styles">Outlined Styles</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <template v-for="color in colorVariants" :key="color">
        <BsChip href="javascript:void(0)" :color="color" class="mb-3" outlined>
          {{ StringHelper.titleCase(color) }}
        </BsChip>
      </template>
    </DemoBlock>
    <h2 class="mt-5" id="chip-states">Chip States</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="mt-2">
        <BsChip class="mb-3" color="primary" disabled> Primary Color : Disabled </BsChip>
        <BsChip class="mb-3" color="success" disabled pill> Success Color : Disabled </BsChip>
      </div>
      <div class="mt-2">
        <template v-for="color in colorVariants.slice(0, 10)" :key="color">
          <BsChip href="javascript:void(0)" :color="color" active class="mb-3">
            {{ StringHelper.titleCase(color) }} : Active
          </BsChip>
        </template>
      </div>
      <div class="h5 mt-3">Outline styles</div>
      <div>
        <template v-for="color in colorVariants.slice(0, 10)" :key="color">
          <BsChip href="javascript:void(0)" :color="color" active class="mb-3" outlined>
            {{ StringHelper.titleCase(color) }} : Active
          </BsChip>
        </template>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Click events</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip
          :active="chipDefaultActive"
          outlined
          @click="chipDefaultActive = !chipDefaultActive"
        >
          Default {{ chipDefaultActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipPrimaryActive"
          color="primary"
          outlined
          @click="chipPrimaryActive = !chipPrimaryActive"
        >
          Primary {{ chipPrimaryActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipSuccessActive"
          color="success"
          outlined
          @click="chipSuccessActive = !chipSuccessActive"
        >
          Success {{ chipSuccessActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipDangerActive"
          color="danger"
          outlined
          @click="chipDangerActive = !chipDangerActive"
        >
          Danger {{ chipDangerActive ? ': Active' : '' }}
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip :active="chipDefaultActive" @click="chipDefaultActive = !chipDefaultActive">
          Default {{ chipDefaultActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipPrimaryActive"
          color="primary"
          @click="chipPrimaryActive = !chipPrimaryActive"
        >
          Primary {{ chipPrimaryActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipSuccessActive"
          color="success"
          @click="chipSuccessActive = !chipSuccessActive"
        >
          Success {{ chipSuccessActive ? ': Active' : '' }}
        </BsChip>
        <BsChip
          :active="chipDangerActive"
          color="danger"
          @click="chipDangerActive = !chipDangerActive"
        >
          Danger {{ chipDangerActive ? ': Active' : '' }}
        </BsChip>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Chip Size</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip color="primary" size="sm"> Small Chip </BsChip>
        <BsChip color="success"> Normal Chip </BsChip>
        <BsChip color="danger" size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="primary" pill size="sm"> Small Chip </BsChip>
        <BsChip color="success" pill> Normal Chip </BsChip>
        <BsChip color="danger" pill size="lg"> Large Chip </BsChip>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Chip Icon</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip color="primary" icon="done" size="sm"> Small Chip </BsChip>
        <BsChip color="success" icon="help_center"> Normal Chip </BsChip>
        <BsChip color="danger" icon="notifications" size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="primary" icon="done" pill size="sm"> Small Chip </BsChip>
        <BsChip color="success" icon="help_center" pill> Normal Chip </BsChip>
        <BsChip color="danger" icon="notifications" pill size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="primary" icon="done" outlined size="sm"> Small Chip </BsChip>
        <BsChip color="success" icon="help_center" icon-variant="outlined" outlined>
          Normal Chip
        </BsChip>
        <BsChip color="danger" icon="notifications" icon-variant="outlined" outlined size="lg">
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="primary">
          <template #icon>
            <BsIconSpinner pulse size="18" />
          </template>
          Custom Icon
        </BsChip>
        <BsChip color="success" icon-position="right">
          <template #icon>
            <icon-bullhorn height="18" width="18" />
          </template>
          Custom Icon
        </BsChip>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Avatar</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip color="primary" img-src="https://ahmadfajar.github.io/img/1.jpg" size="sm">
          Small Chip
        </BsChip>
        <BsChip color="success" img-src="https://ahmadfajar.github.io/img/1.jpg">
          Normal Chip
        </BsChip>
        <BsChip color="danger" img-src="https://ahmadfajar.github.io/img/1.jpg" size="lg">
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          color="primary"
          img-circle
          img-src="https://ahmadfajar.github.io/img/1.jpg"
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip color="success" img-circle img-src="https://ahmadfajar.github.io/img/1.jpg" pill>
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-circle
          img-src="https://ahmadfajar.github.io/img/1.jpg"
          pill
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="primary" img-src="https://ahmadfajar.github.io/img/1.jpg" outlined size="sm">
          Small Chip
        </BsChip>
        <BsChip color="success" img-src="https://ahmadfajar.github.io/img/1.jpg" outlined>
          Normal Chip
        </BsChip>
        <BsChip color="danger" img-src="https://ahmadfajar.github.io/img/1.jpg" outlined size="lg">
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          color="primary"
          img-circle
          img-src="https://ahmadfajar.github.io/img/1.jpg"
          outlined
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          color="success"
          img-circle
          img-src="https://ahmadfajar.github.io/img/1.jpg"
          outlined
          pill
        >
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-circle
          img-src="https://ahmadfajar.github.io/img/1.jpg"
          outlined
          pill
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Adjusting Avatar Size</h4>
    <DemoBlock class="mt-4">
      <div>
        <BsChip
          :img-padding="false"
          color="primary"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="success"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
        >
          Normal Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="danger"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          :img-padding="false"
          color="primary"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="success"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
        >
          Normal Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="danger"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          :img-padding="false"
          color="primary"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="success"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
        >
          Normal Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="danger"
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          :img-padding="false"
          color="primary"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="success"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          pill
        >
          Normal Chip
        </BsChip>
        <BsChip
          :img-padding="false"
          color="danger"
          img-circle
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          pill
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Dismissible Chip</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip dismissible size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible>Normal Chip</BsChip>
        <BsChip color="success" dismissible size="lg">Large Chip</BsChip>
      </div>
      <div class="mt-3">
        <BsChip dismissible outlined size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible outlined>Normal Chip</BsChip>
        <BsChip color="success" dismissible outlined size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="purple" dismissible outlined pill size="sm">Small Chip</BsChip>
        <BsChip color="unique" dismissible outlined pill>Normal Chip</BsChip>
        <BsChip color="default-color" dismissible outlined pill size="lg">Large Chip</BsChip>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Controlling Dismissible Chip</h4>
    <DemoBlock class="mt-4">
      <bs-button class="me-4" color="default-color" style="width: 130px" @click="toggleChip">
        {{ showDismissibleChip ? 'Hide' : 'Show' }} Chip
      </bs-button>
      <BsChip v-model="showDismissibleChip" color="dark-blue" dismissible outlined>
        Dismissible Chip
      </BsChip>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StringHelper } from 'vue-mdbootstrap';
import { colorVariants, IconBullhorn } from '@shares/sharedApi';

const chipDefaultActive = ref(false);
const chipPrimaryActive = ref(false);
const chipSuccessActive = ref(false);
const chipDangerActive = ref(false);
const showDismissibleChip = ref(true);

function toggleChip() {
  showDismissibleChip.value = !showDismissibleChip.value;
}
</script>
