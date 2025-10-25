<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsTextArea>
              <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea :model-value="loremIpsum" readonly>
              <label class="col-md-4 col-xl-3 col-form-label">State Readonly</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea :model-value="loremIpsum" disabled>
              <label class="col-md-4 col-xl-3 col-form-label">State Disabled</label>
            </BsTextArea>
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
            <BsTextArea>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea floating-label>
              <label>Floating Label</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea floating-label placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextArea>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextArea filled>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea filled floating-label>
              <label>Floating Label</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea filled floating-label placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextArea>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextArea outlined>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea floating-label outlined>
              <label>Floating Label</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea floating-label outlined placeholder="Placeholder">
              <label>Field Label</label>
            </BsTextArea>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextArea v-model="loremIpsum" auto-grow floating-label readonly>
            <label>State Readonly</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea v-model="loremIpsum" auto-grow disabled floating-label>
            <label>State Disabled</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="loremIpsum"
            auto-grow
            filled
            floating-label
            prepend-icon="article_filled"
            readonly
          >
            <label>State Readonly</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="loremIpsum"
            auto-grow
            disabled
            filled
            floating-label
            prepend-icon="article_filled"
          >
            <label>State Disabled</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="loremIpsum"
            auto-grow
            floating-label
            outlined
            prepend-icon="article"
            readonly
          >
            <label>State Readonly</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="loremIpsum"
            auto-grow
            disabled
            floating-label
            outlined
            prepend-icon="article"
          >
            <label>State Disabled</label>
          </BsTextArea>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextArea
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Product and Service</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea floating-label help-text="Enter your profile information">
            <label>Your Profile</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="textValue1"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="For example, flowers or used cars"
          >
            <label>Product and Service</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea filled floating-label help-text="Enter your profile information">
            <label>Your Profile</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea
            v-model="textValue1"
            :persistent-help-text="false"
            floating-label
            help-text="For example, flowers or used cars"
            outlined
          >
            <label>Product and Service</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea floating-label help-text="Enter your profile information" outlined>
            <label>Your Profile</label>
          </BsTextArea>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsTextArea floating-label prepend-icon="article">
            <label>Prepend</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon="article" floating-label>
            <label>Append</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea floating-label prepend-icon-outer="article">
            <label>Prepend Outer</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon-outer="article" floating-label>
            <label>Append Outer</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea filled floating-label prepend-icon="article">
            <label>Prepend</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon="article" filled floating-label>
            <label>Append</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea filled floating-label prepend-icon-outer="article">
            <label>Prepend Outer</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon-outer="article" filled floating-label>
            <label>Append Outer</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea floating-label outlined prepend-icon="article">
            <label>Prepend</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon="article" floating-label outlined>
            <label>Append</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea floating-label outlined prepend-icon-outer="article">
            <label>Prepend Outer</label>
          </BsTextArea>
        </div>
        <div class="col">
          <BsTextArea append-icon-outer="article" floating-label outlined>
            <label>Append Outer</label>
          </BsTextArea>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Other Features</h2>
    <h3 class="mt-5">Browser Autocomplete</h3>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextArea autocomplete="address" floating-label>
              <label>Address</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea autocomplete="address" filled floating-label>
              <label>Address</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea autocomplete="address" floating-label outlined>
              <label>Address</label>
            </BsTextArea>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Clearable</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsTextArea clear-button floating-label>
              <label>Address</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea clear-button filled floating-label>
              <label>Address</label>
            </BsTextArea>
          </div>
          <div class="mb-3">
            <BsTextArea clear-button floating-label outlined>
              <label>Address</label>
            </BsTextArea>
          </div>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textValue1 = ref('Grocery delivery');
// prettier-ignore
const loremIpsum = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
</script>
