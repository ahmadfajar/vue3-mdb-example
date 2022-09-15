<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field floating-label>
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field placeholder="Placeholder" floating-label>
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field floating-label filled>
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            filled
            floating-label
            placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field floating-label outlined>
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            outlined
            placeholder="Placeholder">
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Help Text
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field
            v-model="textValue"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars">
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="For example, flowers or used cars">
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            filled
            floating-label
            help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
            outlined>
            <label>Field Label</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            help-text="https://www.example.com/page-1"
            outlined>
            <label>Support Page</label>
          </bs-text-field>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Icons
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field
            prepend-icon="person"
            floating-label>
            <label>Prepend</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon="person"
            floating-label>
            <label>Append</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            prepend-icon-outer="person"
            floating-label>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon-outer="person"
            floating-label>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            prepend-icon="person"
            filled
            floating-label>
            <label>Prepend</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon="person"
            filled
            floating-label>
            <label>Append</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            prepend-icon-outer="person"
            filled
            floating-label>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon-outer="person"
            filled
            floating-label>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            prepend-icon="person"
            floating-label
            outlined>
            <label>Prepend</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon="person"
            floating-label
            outlined>
            <label>Append</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            prepend-icon-outer="person"
            floating-label
            outlined>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            append-icon-outer="person"
            floating-label
            outlined>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Other Features
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field
            clear-button
            floating-label
            action-icon-variant="filled"
            type="password">
            <label>Password</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            autocomplete="email"
            floating-label
            prepend-icon="email_outlined"
            type="email">
            <label>Email Address</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            filled
            type="password">
            <label>Password</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            filled
            floating-label
            prepend-icon="email_outlined"
            type="email">
            <label>Email Address</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            outlined
            type="password">
            <label>Password</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            floating-label
            outlined
            prepend-icon="email_outlined"
            type="email">
            <label>Email Address</label>
          </bs-text-field>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">
      Field State
    </h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field
            v-model="textValue"
            readonly
            floating-label>
            <label>State Readonly</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            disabled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            readonly
            floating-label
            filled>
            <label>State Readonly</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            readonly
            floating-label
            outlined>
            <label>State Readonly</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            v-model="textValue"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined">
            <label>State Disabled</label>
          </bs-text-field>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">
      DataList Support
    </h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <bs-text-field
            clear-button
            datalist="my-datalist"
            floating-label>
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            datalist="my-datalist"
            floating-label
            prepend-icon="email_outlined">
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            clear-button
            datalist="my-datalist"
            floating-label
            filled>
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            datalist="my-datalist"
            filled
            floating-label
            prepend-icon="email_outlined">
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            clear-button
            datalist="my-datalist"
            floating-label
            outlined>
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <div class="col">
          <bs-text-field
            datalist="my-datalist"
            floating-label
            outlined
            prepend-icon="email_outlined">
            <label>Select Size</label>
          </bs-text-field>
        </div>
        <datalist id="my-datalist">
          <option v-for="size in sizes" :key="size">
            {{ size }}
          </option>
        </datalist>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '@/DemoBlock.vue'

const sizes = ['Small', 'Medium', 'Large', 'Extra Large']
const textValue = ref('Grocery delivery')
</script>

<style scoped>
</style>
