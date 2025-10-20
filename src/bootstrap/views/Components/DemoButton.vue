<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name">
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Rounded Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" rounded>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Rectangle Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" pill-off>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Elevated Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" raised>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Outlined Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" outlined>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Flat Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" flat>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Tonal Style</h4>
    <DemoBlock class="docs-demo-ctrl mt-4">
      <div class="flex flex-wrap md-gap-x-3 md-gap-y-4 mb-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsButton :color="name" tonal>
            {{ StringHelper.titleCase(name) }}
          </BsButton>
        </template>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Button Size</h2>
    <DemoBlock class="mt-4">
      <div class="row items-center">
        <div class="col">
          <BsButton class="mb-3" size="xs"> Extra Small Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="primary" size="sm"> Small Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="success"> Normal Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="danger" size="lg"> Large Button </BsButton>
        </div>
      </div>
      <div class="row items-center">
        <div class="col">
          <BsButton class="mb-3" rounded size="xs"> Extra Small Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="primary" rounded size="sm"> Small Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="success" rounded> Normal Button </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="danger" rounded size="lg"> Large Button </BsButton>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Button with Icon</h2>
    <DemoBlock class="mt-4">
      <div class="row text-center">
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="primary" icon="shopping_cart"> Icon Left </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="secondary" icon="shopping_cart_outlined" icon-position="right">
            Icon Right
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="success" icon="shopping_cart_sharp" icon-flip="horizontal">
            Flip Horizontal
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="danger" icon="shopping_cart" icon-flip="vertical">
            Flip Vertical
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-flip="both"> Flip Both </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-rotation="90"> Rotate 90&deg; </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-rotation="180"> Rotate 180&deg; </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-rotation="270"> Rotate 270&deg; </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="rotate_right" icon-spin> Spin Animation </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="refresh" icon-position="right" icon-pulse> Pulse Animation </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton>
            <template #icon>
              <BsIconSpinner spin size="22" />
            </template>
            Custom Icon-Spin
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon-position="right">
            <template #icon>
              <BsIconSpinner pulse size="22" />
            </template>
            Custom Icon-Pulse
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-size="32"> Icon Size=32 </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton icon="shopping_cart" icon-position="right" icon-size="32">
            Icon Size=32
          </BsButton>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Button Groups</h2>
    <h4 class="mt-3">Basic Example</h4>
    <DemoBlock class="mt-4">
      <div class="row gy-3 mb-3">
        <div class="col-12 col-lg-6">
          <div class="md-button-group" role="group" style="gap: 2px">
            <BsButton :icon-size="iconSm" icon="mic" mode="icon" />
            <BsButton :icon-size="iconSm" class="rounded-3" icon="shopping_cart" mode="icon" />
            <BsButton :icon-size="iconSm" icon="star" rounded> Label </BsButton>
            <BsButton :icon-size="iconSm" icon="delete" mode="icon" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="md-button-group" role="group" style="gap: 2px">
            <BsButton :icon-size="iconSm" icon="mic" mode="icon" />
            <BsButton :icon-size="iconSm" class="rounded-3" icon="shopping_cart" mode="icon" />
            <BsButton
              :icon-size="iconSm"
              icon="shopping_cart"
              style="border-radius: 50px 16px 16px 50px"
            >
              Label
            </BsButton>
            <BsButton :icon-size="iconSm" icon="star" rounded> Label </BsButton>
            <BsButton :icon-size="iconSm" icon="delete" mode="icon" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="md-button-group" role="group" style="gap: 2px">
            <BsButton :icon-size="iconSm" icon="mic" mode="icon" />
            <BsButton :icon-size="iconSm" class="rounded-3" icon="shopping_cart" mode="icon" />
            <BsButton :icon-size="iconSm" dropdown-toggle icon="star"> Label </BsButton>
            <BsButton :icon-size="iconSm" dropdown-toggle icon="favorite_filled" />
          </div>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-4">Button Toolbar</h4>
    <DemoBlock class="mt-4">
      <div class="md-button-toolbar md-gap-3" role="toolbar">
        <div class="inline-flex" role="group">
          <BsButton :active="state1" color="primary" @click="state1 = !state1"> Start </BsButton>
          <BsButton :active="state2" color="primary" @click="state2 = !state2"> 1 </BsButton>
          <BsButton :active="state3" color="primary" @click="state3 = !state3"> 2 </BsButton>
          <BsButton :active="state4" color="primary" @click="state4 = !state4"> 3 </BsButton>
        </div>
        <div class="inline-flex" role="group">
          <BsButton :active="state5" color="primary" outlined @click="state5 = !state5">
            <BsIcon icon="shopping_cart" />
          </BsButton>
          <BsButton :active="state6" color="primary" outlined @click="state6 = !state6">
            <BsIcon icon="star" />
          </BsButton>
          <BsButton :active="state7" color="primary" outlined @click="state7 = !state7">
            <BsIcon icon="delete" />
          </BsButton>
        </div>
        <div class="inline-flex" role="group">
          <BsButton mode="icon"> 6 </BsButton>
          <BsButton mode="icon"> 5 </BsButton>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icon Button</h2>
    <DemoBlock class="mt-4">
      <div>
        <BsButton :icon-size="iconXs" class="me-4" icon="shopping_cart" mode="icon" size="xs" />
        <BsButton :icon-size="iconSm" class="me-4" icon="shopping_cart" mode="icon" size="sm" />
        <BsButton class="me-4" icon="shopping_cart" mode="icon" />
        <BsButton :icon-size="iconLg" icon="shopping_cart" mode="icon" size="lg" />
      </div>
      <div class="mt-3">
        <BsButton
          :icon-size="iconXs"
          class="me-4"
          color="primary"
          icon="rotate_right"
          icon-spin
          mode="icon"
          size="xs"
        />
        <BsButton
          :icon-size="iconSm"
          class="me-4"
          color="primary"
          icon="rotate_right"
          icon-spin
          mode="icon"
          size="sm"
        />
        <BsButton class="me-4" color="primary" icon="rotate_right" icon-spin mode="icon" />
        <BsButton
          :icon-size="iconLg"
          color="primary"
          icon="rotate_right"
          icon-spin
          mode="icon"
          size="lg"
        />
      </div>
      <div class="mt-3">
        <BsButton
          :icon-size="iconXs"
          class="me-4"
          color="success"
          icon="refresh"
          icon-pulse
          mode="icon"
          size="xs"
        />
        <BsButton
          :icon-size="iconSm"
          class="me-4"
          color="success"
          icon="refresh"
          icon-pulse
          mode="icon"
          size="sm"
        />
        <BsButton class="me-4" color="success" icon="refresh" icon-pulse mode="icon" />
        <BsButton
          :icon-size="iconLg"
          color="success"
          icon="refresh"
          icon-pulse
          mode="icon"
          size="lg"
        />
      </div>
      <div class="mt-3">
        <BsButton class="me-4" color="danger" mode="icon">
          <template #icon>
            <BsIconSpinner spin size="22" />
          </template>
        </BsButton>
        <BsButton color="danger" icon-position="right" mode="icon">
          <template #icon>
            <BsIconSpinner pulse size="22" />
          </template>
        </BsButton>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StringHelper } from 'vue-mdbootstrap';
import { contextColors } from '@shares/themeColors.ts';

const iconXs = 16;
const iconSm = 22;
const iconLg = 32;

const state1 = ref(false);
const state2 = ref(false);
const state3 = ref(false);
const state4 = ref(false);
const state5 = ref(false);
const state7 = ref(false);
const state6 = ref(false);
</script>
