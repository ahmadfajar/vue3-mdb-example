<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField floating-label>
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label placeholder="Placeholder">
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label>
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label placeholder="Placeholder">
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined>
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined placeholder="Placeholder">
            <label>Field Label</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label help-text="https://www.example.com/page-1">
            <label>Support Page</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
            outlined
          >
            <label>Field Label</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label help-text="https://www.example.com/page-1" outlined>
            <label>Support Page</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField floating-label prepend-icon="person">
            <label>Prepend</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon="person" floating-label>
            <label>Append</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon-outer="person" floating-label>
            <label>Append Outer</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label prepend-icon="person">
            <label>Prepend</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon="person" filled floating-label>
            <label>Append</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon-outer="person" filled floating-label>
            <label>Append Outer</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined prepend-icon="person">
            <label>Prepend</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon="person" floating-label outlined>
            <label>Append</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField append-icon-outer="person" floating-label outlined>
            <label>Append Outer</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Other Features</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField action-icon-variant="filled" clear-button floating-label type="password">
            <label>Password</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            autocomplete="email"
            floating-label
            prepend-icon="email_outlined"
            type="email"
          >
            <label>Email Address</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label type="password">
            <label>Password</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label prepend-icon="email_outlined" type="email">
            <label>Email Address</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined type="password">
            <label>Password</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined prepend-icon="email_outlined" type="email">
            <label>Email Address</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Field State</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField v-model="textValue1" floating-label readonly>
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField v-model="textValue1" disabled floating-label prepend-icon="email_outlined">
            <label>State Disabled</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField v-model="textValue1" filled floating-label readonly>
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField v-model="textValue1" floating-label outlined readonly>
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">DataList Support</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField clear-button datalist="my-datalist" floating-label>
            <label>Select Size</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField datalist="my-datalist" floating-label prepend-icon="email_outlined">
            <label>Select Size</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField clear-button datalist="my-datalist" filled floating-label>
            <label>Select Size</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField datalist="my-datalist" filled floating-label prepend-icon="email_outlined">
            <label>Select Size</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField clear-button datalist="my-datalist" floating-label outlined>
            <label>Select Size</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField datalist="my-datalist" floating-label outlined prepend-icon="email_outlined">
            <label>Select Size</label>
          </BsTextField>
        </div>
        <datalist id="my-datalist">
          <option v-for="size in sizes" :key="size">
            {{ size }}
          </option>
        </datalist>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Prefixes and Suffixes</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField prefix="INV -" floating-label>
            <label>Invoice Number</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label suffix="Kg">
            <label>Weight</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField prefix="www." filled floating-label prepend-icon="public_outlined">
            <label>Website</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField filled floating-label prepend-icon="email_outlined" suffix="@example.com">
            <label>Admin Email</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField prefix="www." floating-label outlined prepend-icon="public_outlined">
            <label>Website</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField floating-label outlined prepend-icon="email_outlined" suffix="@example.com">
            <label>Admin Email</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Classic Form Field Styles</h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10">
          <BsTextField v-model="textValue2" class="mb-3" clear-button>
            <label class="col-md-4 col-xl-2 col-form-label">Full Name</label>
          </BsTextField>
          <BsTextField class="mb-3" clear-button type="password">
            <label class="col-md-4 col-xl-2 col-form-label">Password</label>
          </BsTextField>
          <BsTextField
            v-model="textValue2"
            append-icon="account_circle_outlined"
            class="mb-3"
            readonly
          >
            <label class="col-md-4 col-xl-2 col-form-label">State Readonly</label>
          </BsTextField>
          <BsTextField
            v-model="textValue2"
            append-icon="account_circle_outlined"
            class="mb-3"
            disabled
          >
            <label class="col-md-4 col-xl-2 col-form-label">State Disabled</label>
          </BsTextField>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
const textValue1 = ref('Grocery delivery');
const textValue2 = ref('Sandra Adam');
</script>
