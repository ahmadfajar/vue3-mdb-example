<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-3">
      <BsBreadcrumb :items="items1" />
      <BsBreadcrumb :items="items2" />
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-3">
      <BsBreadcrumb :items="items1" prepend-icon="home" />
      <BsBreadcrumb :items="items2" prepend-icon="home" icon-size="28"/>
      <div class="h5 mt-4">Using Custom Slot</div>
      <BsBreadcrumb :items="items2">
        <template #icon>
          <BsIconFontawesome icon="house-user" variant="regular" />
        </template>
      </BsBreadcrumb>
    </DemoBlock>
    <h2 class="mt-5">Separators</h2>
    <DemoBlock class="mt-3">
      <BsBreadcrumb :items="items1" icon-size="22" prepend-icon="home" separator=">" />
      <div class="h5 mt-4">Using Embedded SVG</div>
      <BsBreadcrumb :items="items2" icon-size="22" prepend-icon="home" :separator="svg"/>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
const svg = encodeURI('url("data:image/svg+xml, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -60 320 512\' fill=\'#3b7cf5\' width=\'14\' height=\'16\'><path d=\'M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z\' /></svg>")');
const items1 = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
];
const items2 = [
  { label: 'Home', href: '#' },
  { label: 'Components', path: '/components/breadcrumb' },
  { label: 'Breadcrumb', href: '#' },
];
</script>
