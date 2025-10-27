<template>
  <div class="docs-body container-lg mx-auto">
    <h2 id="overview">Basic Examples</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name">
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5" id="href-element">Element Type</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" href="javascript:void(0)" :color="name">
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5" id="variants">Style Variants</h2>
    <h4 class="mt-4" id="pill-styles">Rounded Pill</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" pill>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5" id="outlined-styles">Outlined</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" outlined>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5" id="chip-states">Chip States</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="h6 mt-3">Disabled</div>
      <div class="flex">
        <BsChip color="primary" disabled> Primary </BsChip>
        <BsChip color="success" disabled pill> Success </BsChip>
      </div>
      <div class="h6 mt-3">Readonly</div>
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" readonly>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
      <div class="h6 mt-3">Active</div>
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" active>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
      <hr />
      <div class="h6 mt-4">Outlined Disabled</div>
      <div class="flex">
        <BsChip color="primary" disabled outlined> Primary </BsChip>
        <BsChip color="success" disabled outlined pill> Success </BsChip>
      </div>
      <div class="h6 mt-3">Outlined Readonly</div>
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" outlined readonly>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
      <div class="h6 mt-3">Outlined Active</div>
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip v-if="name !== 'dark'" :color="name" active outlined>
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Click events</h2>
    <DemoBlock class="mt-4">
      <div class="flex flex-wrap mb-3">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip
            v-if="name !== 'dark'"
            :active="chipState[name] as boolean"
            :color="name"
            @click="toggleState(name, !chipState[name])"
          >
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
      <div class="flex flex-wrap">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsChip
            v-if="name !== 'dark'"
            :active="chipState[name] as boolean"
            :color="name"
            outlined
            @click="toggleState(name, !chipState[name])"
          >
            {{ StringHelper.titleCase(name) }}
          </BsChip>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Chip Size</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsChip color="default" size="sm"> Small Chip </BsChip>
        <BsChip color="primary"> Normal Chip </BsChip>
        <BsChip color="danger" size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="default" pill size="sm"> Small Chip </BsChip>
        <BsChip color="primary" pill> Normal Chip </BsChip>
        <BsChip color="danger" pill size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="default" outlined pill size="sm"> Small Chip </BsChip>
        <BsChip color="primary" outlined pill> Normal Chip </BsChip>
        <BsChip color="danger" outlined pill size="lg"> Large Chip </BsChip>
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
            <IconBullhorn height="18" width="18" />
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
          color="primary"
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip color="success" img-padding-off img-src="https://ahmadfajar.github.io/img/2.jpg">
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          color="primary"
          img-circle
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          color="success"
          img-circle
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
        >
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-circle
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          pill
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          color="primary"
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          color="success"
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
        >
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          size="lg"
        >
          Large Chip
        </BsChip>
      </div>
      <div class="mt-3">
        <BsChip
          color="primary"
          img-circle
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          pill
          size="sm"
        >
          Small Chip
        </BsChip>
        <BsChip
          color="success"
          img-circle
          img-padding-off
          img-src="https://ahmadfajar.github.io/img/2.jpg"
          outlined
          pill
        >
          Normal Chip
        </BsChip>
        <BsChip
          color="danger"
          img-circle
          img-padding-off
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
        <BsChip color="default" dismissible size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible>Normal Chip</BsChip>
        <BsChip color="danger" dismissible size="lg">Large Chip</BsChip>
      </div>
      <div>
        <BsChip color="default" dismissible pill size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible pill>Normal Chip</BsChip>
        <BsChip color="danger" dismissible pill size="lg">Large Chip</BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="default" dismissible outlined size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible outlined>Normal Chip</BsChip>
        <BsChip color="danger" dismissible outlined size="lg"> Large Chip </BsChip>
      </div>
      <div class="mt-3">
        <BsChip color="default" dismissible outlined pill size="sm">Small Chip</BsChip>
        <BsChip color="primary" dismissible outlined pill>Normal Chip</BsChip>
        <BsChip color="danger" dismissible outlined pill size="lg">Large Chip</BsChip>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Controlling Dismissible Chip</h4>
    <DemoBlock class="mt-4">
      <bs-button class="me-4" style="width: 130px" @click="toggleDismissibleChip">
        {{ showDismissibleChip ? 'Hide' : 'Show' }} Chip
      </bs-button>
      <BsChip v-model="showDismissibleChip" color="primary" dismissible> Dismissible Chip </BsChip>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { StringHelper, type TRecord } from 'vue-mdbootstrap';
import { contextColors } from '@shares/themeColors.ts';
import { IconBullhorn } from '@shares/sharedApi.ts';

const chipState = reactive<TRecord>({
  default: false,
  primary: false,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
});

const showDismissibleChip = ref(true);

function toggleState(name: string, state: boolean) {
  chipState[name] = state;
}

function toggleDismissibleChip() {
  showDismissibleChip.value = !showDismissibleChip.value;
}
</script>
