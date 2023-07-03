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
      <BsButton color="light" mode="icon" flat>
        <BsIcon icon="menu" />
      </BsButton>
      <BsAppbarTitle class="text-white"> Page Title </BsAppbarTitle>
      <BsSpacer />
      <BsAppbarItems>
        <BsButton mode="icon" icon="search" color="light" flat />
        <BsButton mode="icon" icon="notifications" color="light" flat />
        <BsButton mode="icon" color="light" flat>
          <BsIcon icon="more_vert" />
        </BsButton>
      </BsAppbarItems>
    </BsAppbar>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
