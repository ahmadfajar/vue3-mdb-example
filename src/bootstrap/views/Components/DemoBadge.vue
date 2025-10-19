<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-3">
      <h2>Example heading <BsBadge>New</BsBadge></h2>
      <h3>Example heading <BsBadge>New</BsBadge></h3>
      <h4>Example heading <BsBadge>New</BsBadge></h4>
      <h5>Example heading <BsBadge>New</BsBadge></h5>
      <h6>Example heading <BsBadge>New</BsBadge></h6>
    </DemoBlock>
    <h2 class="mt-5">Inside Button</h2>
    <DemoBlock class="mt-3">
      <BsButton color="primary">
        Notifications
        <BsBadge class="ms-2" variant="light"> 9 </BsBadge>
      </BsButton>
    </DemoBlock>
    <h2 class="mt-5">Contextual Variation</h2>
    <DemoBlock class="mt-3">
      <div>
        <BsBadge variant="default"> Default </BsBadge>
        <BsBadge variant="primary"> Primary </BsBadge>
        <BsBadge variant="secondary"> Secondary </BsBadge>
        <BsBadge variant="success"> Success </BsBadge>
        <BsBadge variant="danger"> Danger </BsBadge>
        <BsBadge variant="warning"> Warning </BsBadge>
        <BsBadge variant="info"> Info </BsBadge>
        <BsBadge variant="light"> Light </BsBadge>
      </div>
      <div class="mt-3">
        <BsBadge color="primary-color-dark text-white"> primary-color-dark </BsBadge>
        <BsBadge color="default-color-dark text-white"> default-color-dark </BsBadge>
        <BsBadge color="elegant-color text-white"> elegant-color </BsBadge>
        <BsBadge color="stylish-color text-white"> stylish-color </BsBadge>
        <BsBadge color="unique-color text-white"> unique-color </BsBadge>
        <BsBadge color="red text-white"> red </BsBadge>
        <BsBadge color="pink text-white"> pink </BsBadge>
        <BsBadge color="purple text-white"> purple </BsBadge>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Pill Badges</h2>
    <DemoBlock class="mt-3">
      <BsBadge type="pill" variant="default"> Default </BsBadge>
      <BsBadge type="pill" variant="primary"> Primary </BsBadge>
      <BsBadge type="pill" variant="secondary"> Secondary </BsBadge>
      <BsBadge type="pill" variant="success"> Success </BsBadge>
      <BsBadge type="pill" variant="danger"> Danger </BsBadge>
      <BsBadge type="pill" variant="warning"> Warning </BsBadge>
      <BsBadge type="pill" variant="info"> Info </BsBadge>
      <BsBadge type="pill" variant="light"> Light </BsBadge>
    </DemoBlock>
    <h2 class="mt-5">Label Badges</h2>
    <DemoBlock class="mt-3">
      <BsBadge type="label" variant="default"> Default </BsBadge>
      <BsBadge type="label" variant="primary"> Primary </BsBadge>
      <BsBadge type="label" variant="secondary"> Secondary </BsBadge>
      <BsBadge type="label" variant="success"> Success </BsBadge>
      <BsBadge type="label" variant="danger"> Danger </BsBadge>
      <BsBadge type="label" variant="warning"> Warning </BsBadge>
      <BsBadge type="label" variant="info"> Info </BsBadge>
      <BsBadge type="label" variant="light"> Light </BsBadge>
    </DemoBlock>
    <h2 class="mt-5">Actionable Badges</h2>
    <DemoBlock class="mt-3">
      <BsBadge href="/components/badge" tag="a" variant="default"> Default </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="primary"> Primary </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="secondary"> Secondary </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="success"> Success </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="danger"> Danger </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="warning"> Warning </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="info"> Info </BsBadge>
      <BsBadge href="/components/badge" tag="a" variant="light"> Light </BsBadge>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts"></script>
