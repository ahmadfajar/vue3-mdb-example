<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area auto-grow floating-label>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area auto-grow filled floating-label>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label no-resize placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area auto-grow floating-label outlined>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label outlined placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue1"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
            outlined
          >
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label help-text="https://www.example.com/page-1" outlined>
            <label>Support Page</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area floating-label prepend-icon="person">
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon="person" floating-label>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon-outer="person" floating-label>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label prepend-icon="person">
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon="person" filled floating-label>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon-outer="person" filled floating-label>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label outlined prepend-icon="person">
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon="person" floating-label outlined>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label outlined prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area append-icon-outer="person" floating-label outlined>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Other Features</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area action-icon-variant="filled" clear-button floating-label>
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area autocomplete="email" floating-label prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label>
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area filled floating-label prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label outlined>
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area floating-label outlined prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Field State</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area v-model="textValue1" floating-label readonly>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area v-model="textValue1" disabled floating-label prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area v-model="textValue1" filled floating-label readonly>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue1"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area v-model="textValue1" floating-label outlined readonly>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue1"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Classic Form Field Styles</h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10">
          <bs-text-field class="mb-3" clear-button filled>
            <label class="col-md-4 col-xl-2 col-form-label">Full Name</label>
          </bs-text-field>
          <bs-text-area v-model="textValue2" class="mb-3" clear-button filled>
            <label class="col-md-4 col-xl-2 col-form-label">Address</label>
          </bs-text-area>
          <bs-text-area
            v-model="textValue2"
            append-icon="account_circle_outlined"
            class="mb-3"
            filled
            readonly
          >
            <label class="col-md-4 col-xl-2 col-form-label">State Readonly</label>
          </bs-text-area>
          <bs-text-area
            v-model="textValue2"
            append-icon="account_circle_outlined"
            class="mb-3"
            disabled
            filled
          >
            <label class="col-md-4 col-xl-2 col-form-label">State Disabled</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textValue1 = ref('Grocery delivery');
// prettier-ignore
const textValue2 = ref('12th floor, Flat G - Magnolia Building\n' + '212 Sycamore Street - WAN CHAI HONG KONG');
</script>
