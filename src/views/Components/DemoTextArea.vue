<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            floating-label
            auto-grow>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            placeholder="Placeholder"
            floating-label>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            auto-grow
            filled
            floating-label>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            filled
            floating-label
            no-resize
            placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            auto-grow
            floating-label
            outlined>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            outlined
            placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Help Text
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            v-model="textValue"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars">
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="For example, flowers or used cars">
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            filled
            floating-label
            help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
            outlined>
            <label>Field Label</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            help-text="https://www.example.com/page-1"
            outlined>
            <label>Support Page</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Icons
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            prepend-icon="person"
            floating-label>
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon="person"
            floating-label>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            prepend-icon-outer="person"
            floating-label>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon-outer="person"
            floating-label>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            prepend-icon="person"
            filled
            floating-label>
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon="person"
            filled
            floating-label>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            prepend-icon-outer="person"
            filled
            floating-label>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon-outer="person"
            filled
            floating-label>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            prepend-icon="person"
            floating-label
            outlined>
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon="person"
            floating-label
            outlined>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            prepend-icon-outer="person"
            floating-label
            outlined>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            append-icon-outer="person"
            floating-label
            outlined>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Other Features
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            clear-button
            floating-label
            action-icon-variant="filled">
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            autocomplete="email"
            floating-label
            prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            filled>
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            filled
            floating-label
            prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            outlined>
            <label>Enter Text</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            floating-label
            outlined
            prepend-icon="email_outlined">
            <label>Email Address</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">
      Field State
    </h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-area
            v-model="textValue"
            readonly
            floating-label>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            disabled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            readonly
            floating-label
            filled>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            readonly
            floating-label
            outlined>
            <label>State Readonly</label>
          </bs-text-area>
        </div>
        <div class="col">
          <bs-text-area
            v-model="textValue"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">
      Classic Form Field Styles
    </h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10">
          <bs-text-field
            class="mb-3"
            clear-button
            filled>
            <label class="col-md-4 col-xl-2 col-form-label">Full Name</label>
          </bs-text-field>
          <bs-text-area
            v-model="fieldValue"
            class="mb-3"
            clear-button
            filled>
            <label class="col-md-4 col-xl-2 col-form-label">Address</label>
          </bs-text-area>
          <bs-text-area
            v-model="fieldValue"
            class="mb-3"
            append-icon="account_circle_outlined"
            filled
            readonly>
            <label class="col-md-4 col-xl-2 col-form-label">State Readonly</label>
          </bs-text-area>
          <bs-text-area
            v-model="fieldValue"
            append-icon="account_circle_outlined"
            class="mb-3"
            disabled
            filled>
            <label class="col-md-4 col-xl-2 col-form-label">State Disabled</label>
          </bs-text-area>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '@/DemoBlock.vue'

const textValue = ref('Grocery delivery')
const fieldValue = ref('12th floor, Flat G - Magnolia Building\n' +
  '212 Sycamore Street - WAN CHAI HONG KONG')
</script>

<style scoped>
</style>
