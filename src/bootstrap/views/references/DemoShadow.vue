<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Example</h2>
    <BsCard class="bg-grey-200 border-0">
      <BsCardBody style="padding: 2rem">
        <div class="row gx-5 gy-4 row-cols-2 row-cols-md-3 text-white text-center">
          <div class="col">
            <div class="md-shadow p-4 bg-primary">md-shadow</div>
          </div>
          <div class="col">
            <div class="md-shadow-1 p-4 bg-primary">md-shadow-1</div>
          </div>
          <div class="col">
            <div class="md-shadow-2 p-4 bg-primary">md-shadow-2</div>
          </div>
          <div class="col">
            <div class="md-shadow-3 p-4 bg-primary">md-shadow-3</div>
          </div>
          <div class="col">
            <div class="md-shadow-4 p-4 bg-primary">md-shadow-4</div>
          </div>
          <div class="col">
            <div class="md-shadow-5 p-4 bg-primary">md-shadow-5</div>
          </div>
        </div>
      </BsCardBody>
    </BsCard>
    <h2 class="mt-5">Shadow on Hover</h2>
    <BsCard class="bg-grey-200 border-0">
      <BsCardBody style="padding: 2rem">
        <div class="row justify-content-center text-white text-center">
          <div class="col-sm-3">
            <div class="md-hover-shadow p-4 bg-primary">hover me!</div>
          </div>
        </div>
      </BsCardBody>
    </BsCard>
  </div>
</template>

<script setup lang="ts"></script>
