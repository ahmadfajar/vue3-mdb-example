<script setup lang="ts">
import { contextColors, contextColorsLight } from '@shares/themeColors.ts';
import { StringHelper } from 'vue-mdbootstrap';
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-3">
      <h2>Example heading <BsBadge>New</BsBadge></h2>
      <h3>Example heading <BsBadge variant="secondary">New</BsBadge></h3>
      <h4>Example heading <BsBadge variant="secondary">New</BsBadge></h4>
      <h5>Example heading <BsBadge variant="secondary">New</BsBadge></h5>
      <h6>Example heading <BsBadge variant="secondary">New</BsBadge></h6>
    </DemoBlock>

    <h2 class="mt-5">Inside Button</h2>
    <DemoBlock class="mt-3">
      <BsButton color="primary">
        Notifications
        <BsBadge class="ms-2" variant="light"> 9 </BsBadge>
      </BsButton>
    </DemoBlock>

    <h2 class="mt-5">Color Variants</h2>
    <h4 class="mt-4">Contextual Colors</h4>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-1">
        <template v-for="(_color, name) in contextColorsLight" :key="_color">
          <BsBadge :variant="name"> {{ StringHelper.titleCase(name) }} </BsBadge>
        </template>
      </div>
    </DemoBlock>
    <h4 class="mt-4">Custom Colors</h4>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-1">
        <BsBadge color="text-violet-800" outlined> violet-800 </BsBadge>
        <BsBadge class="text-purple-600" outlined> purple-600 </BsBadge>
        <BsBadge color="bg-blue-800 text-white"> blue-800 </BsBadge>
        <BsBadge color="bg-slate-600 text-white"> slate-600 </BsBadge>
        <BsBadge color="bg-gray-800 text-white"> gray-800 </BsBadge>
        <BsBadge color="bg-red-700 text-white"> red-700 </BsBadge>
        <BsBadge color="bg-pink-600 text-white"> pink-600 </BsBadge>
        <BsBadge color="bg-fuchsia-600 text-white"> fuchsia-600 </BsBadge>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Pills</h4>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-2">
        <template v-for="(_color, name) in contextColorsLight" :key="_color">
          <BsBadge :variant="name" type="pill">
            {{ StringHelper.titleCase(name) }}
          </BsBadge>
        </template>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Label</h4>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-2">
        <template v-for="(_color, name) in contextColorsLight" :key="_color">
          <BsBadge :variant="name" type="label">
            {{ StringHelper.titleCase(name) }}
          </BsBadge>
        </template>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-2 mb-3">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsBadge :variant="name" outlined type="pill">
            {{ StringHelper.titleCase(name) }}
          </BsBadge>
        </template>
      </div>
      <div class="flex flex-wrap md-gap-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsBadge :variant="name" outlined type="label">
            {{ StringHelper.titleCase(name) }}
          </BsBadge>
        </template>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Actionable Badges</h2>
    <DemoBlock class="mt-3">
      <div class="flex flex-wrap md-gap-2">
        <template v-for="(_color, name) in contextColors" :key="_color">
          <BsBadge :variant="name" href="#" tag="a">
            {{ StringHelper.titleCase(name) }}
          </BsBadge>
        </template>
      </div>
    </DemoBlock>
  </div>
</template>
