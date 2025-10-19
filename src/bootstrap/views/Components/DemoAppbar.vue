<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <BsAppbar class="mt-4" shadow>
      <BsAppbarTitle title="Page Title" />
    </BsAppbar>
    <h2 class="mt-5">Use with Button</h2>
    <BsDivider />
    <BsAppbar class="bg-indigo mt-4" shadow>
      <BsButton color="light" flat mode="icon">
        <BsIcon icon="menu" />
      </BsButton>
      <BsAppbarTitle class="text-white"> Page Title </BsAppbarTitle>
      <BsSpacer />
      <BsAppbarItems>
        <BsButton color="light" flat icon="search" mode="icon" />
        <BsButton color="light" flat icon="notifications" mode="icon" />
        <BsButton color="light" flat mode="icon">
          <BsIcon icon="more_vert" />
        </BsButton>
      </BsAppbarItems>
    </BsAppbar>
  </div>
</template>

<script setup lang="ts"></script>
