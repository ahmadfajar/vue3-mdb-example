<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <BsDivider />
    <BsApp class="mt-4">
      <BsAppbar class="bg-primary" shadow>
        <BsAppbarTitle class="text-white" title="Page Title" />
      </BsAppbar>
    </BsApp>

    <h2 class="mt-5">Use with Button</h2>
    <BsDivider />
    <BsApp class="mt-4">
      <BsAppbar class="bg-primary" shadow>
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
    </BsApp>
  </div>
</template>

<script setup lang="ts"></script>
