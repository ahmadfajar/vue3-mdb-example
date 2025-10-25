<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsTextField>
              <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField type="password">
              <label class="col-md-4 col-xl-3 col-form-label">Password Field</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField model-value="Sandra Adam" readonly>
              <label class="col-md-4 col-xl-3 col-form-label">State Readonly</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField disabled model-value="Sandra Adam">
              <label class="col-md-4 col-xl-3 col-form-label">State Disabled</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-4">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextField>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField floating-label>
              <label>Floating Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField floating-label placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextField filled>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <hr />
          <div class="mb-3">
            <BsTextField filled floating-label>
              <label>Floating Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField filled floating-label placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Rounded Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextField filled rounded>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <hr />
          <div class="mb-3">
            <BsTextField filled floating-label rounded>
              <label>Floating Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField filled floating-label placeholder="Placeholder" rounded>
              <label>Field Label</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextField outlined>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <hr />
          <div class="mb-4">
            <BsTextField floating-label outlined>
              <label>Floating Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField floating-label outlined placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Rounded Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextField outlined rounded>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <hr />
          <div class="mb-4">
            <BsTextField floating-label outlined rounded>
              <label>Floating Label</label>
            </BsTextField>
          </div>
          <div class="mb-3">
            <BsTextField floating-label outlined placeholder="Placeholder" rounded>
              <label>Field Label</label>
            </BsTextField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField v-model="textValue1" floating-label readonly>
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField v-model="textValue1" disabled floating-label>
            <label>State Disabled</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            filled
            floating-label
            prepend-icon="local_shipping_filled"
            readonly
          >
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            disabled
            filled
            floating-label
            prepend-icon="local_shipping_filled"
          >
            <label>State Disabled</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            floating-label
            outlined
            prepend-icon="local_shipping"
            readonly
          >
            <label>State Readonly</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            v-model="textValue1"
            disabled
            floating-label
            outlined
            prepend-icon="local_shipping"
          >
            <label>State Disabled</label>
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
    <h4 class="mt-4">Browser Autocomplete</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextField action-icon-variant="filled" autocomplete="name" clear-button floating-label>
            <label>Full Name</label>
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
          <BsTextField autocomplete="name" filled floating-label>
            <label>Full Name</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            autocomplete="email"
            filled
            floating-label
            prepend-icon="email_outlined"
            type="email"
          >
            <label>Email Address</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField autocomplete="name" floating-label outlined>
            <label>Full Name</label>
          </BsTextField>
        </div>
        <div class="col">
          <BsTextField
            autocomplete="email"
            floating-label
            outlined
            prepend-icon="email_outlined"
            type="email"
          >
            <label>Email Address</label>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
const textValue1 = ref('Grocery delivery');
</script>
