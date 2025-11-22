<template>
  <div class="docs-body mx-auto">
    <h2>Example</h2>
    <BsCard border-off class="mt-4">
      <BsCardBody class="p-20">
        <div class="flex flex-col gap-y-15">
          <div class="flex max-sm:flex-col items-center justify-around gap-8 text-center">
            <div class="md-shadow text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow
            </div>
            <div class="md-shadow-1 text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow-1
            </div>
            <div class="md-shadow-2 text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow-2
            </div>
          </div>
          <div class="flex max-sm:flex-col items-center justify-around gap-8 text-center">
            <div class="md-shadow-3 text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow-3
            </div>
            <div class="md-shadow-4 text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow-4
            </div>
            <div class="md-shadow-5 text-bg-surface-secondary text-nowrap rounded w-40 p-4">
              md-shadow-5
            </div>
          </div>
        </div>
      </BsCardBody>
    </BsCard>
    <h2 class="mt-5">Shadow on Hover</h2>
    <BsCard border-off class="mt-4">
      <BsCardBody class="p-8">
        <div class="row justify-center text-center">
          <div class="col-sm-3">
            <div class="md-hover-shadow p-4 text-bg-primary rounded">hover me!</div>
          </div>
        </div>
      </BsCardBody>
    </BsCard>
  </div>
</template>

<script setup lang="ts"></script>
