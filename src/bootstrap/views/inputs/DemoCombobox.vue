<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsCombobox v-model="employee1" :data-source="peopleSrc1">
              <label class="col-md-4 col-form-label">Field Label</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox v-model="employee1" :data-source="peopleSrc1" readonly>
              <label class="col-md-4 col-form-label">State Readonly</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox v-model="employee1" :data-source="peopleSrc1" disabled>
              <label class="col-md-4 col-form-label">State Disabled</label>
            </BsCombobox>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsCombobox v-model="employee2" :data-source="peopleSrc1">
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox v-model="employee3" :data-source="peopleSrc1" floating-label>
              <label>Floating Label</label>
            </BsCombobox>
          </div>
          <div class="mb-2">
            <BsCombobox
              v-model="employee4"
              :data-source="peopleSrc1"
              floating-label
              placeholder="Select employee"
            >
              <label>Field Label</label>
            </BsCombobox>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsCombobox v-model="employee5" :data-source="peopleSrc1" filled>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox v-model="employee6" :data-source="peopleSrc1" filled floating-label>
              <label>Floating Label</label>
            </BsCombobox>
          </div>
          <div class="mb-2">
            <BsCombobox
              v-model="employee7"
              :data-source="peopleSrc1"
              filled
              floating-label
              placeholder="Select employee"
            >
              <label>Field Label</label>
            </BsCombobox>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsCombobox v-model="employee8" :data-source="peopleSrc1" outlined>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox v-model="employee9" :data-source="peopleSrc1" floating-label outlined>
              <label>Floating Label</label>
            </BsCombobox>
          </div>
          <div class="mb-2">
            <BsCombobox
              v-model="employee10"
              :data-source="peopleSrc1"
              floating-label
              outlined
              placeholder="Select employee"
            >
              <label>Field Label</label>
            </BsCombobox>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Clearable</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsCombobox v-model="employee11" :data-source="peopleSrc1" clear-button floating-label>
              <label>Employee</label>
            </BsCombobox>
          </div>
          <div class="mb-3">
            <BsCombobox
              v-model="employee12"
              :data-source="peopleSrc1"
              clear-button
              filled
              floating-label
            >
              <label>Employee</label>
            </BsCombobox>
          </div>
          <div class="mb-2">
            <BsCombobox
              v-model="employee13"
              :data-source="peopleSrc1"
              clear-button
              floating-label
              outlined
            >
              <label>Employee</label>
            </BsCombobox>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Multi-Select Support</h2>
    <h4 class="mt-3">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row gy-4">
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states1"
            :data-source="statesUS1"
            clear-button
            floating-label
            multiple
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states2"
            :data-source="statesUS2"
            clear-button
            filled
            floating-label
            multiple
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states3"
            :data-source="statesUS3"
            clear-button
            floating-label
            multiple
            outlined
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Chips Style Mode</h4>
    <DemoBlock class="mt-4">
      <div class="row gy-4">
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states4"
            :data-source="statesUS4"
            chip-enabled
            clear-button
            floating-label
            multiple
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states5"
            :data-source="statesUS5"
            chip-color="default"
            chip-enabled
            chip-pill
            clear-button
            filled
            floating-label
            multiple
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states6"
            :data-source="statesUS6"
            chip-color="primary"
            chip-enabled
            chip-outlined
            clear-button
            floating-label
            multiple
            outlined
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Checkbox Position and Color</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-10 col-xl-8">
          <BsCombobox
            v-model="states7"
            :data-source="statesUS7"
            checkbox-color="primary"
            checkbox-position="right"
            chip-color="primary"
            chip-enabled
            chip-outlined
            clear-button
            floating-label
            multiple
            outlined
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox v-model="employee14" :data-source="peopleSrc1" floating-label readonly>
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee14" :data-source="peopleSrc1" disabled floating-label>
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee14" :data-source="peopleSrc1" filled floating-label readonly>
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee14" :data-source="peopleSrc1" disabled filled floating-label>
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee14"
            :data-source="peopleSrc1"
            floating-label
            outlined
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee14"
            :data-source="peopleSrc1"
            disabled
            floating-label
            outlined
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Chips Field State</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox
            v-model="states8"
            :data-source="statesUS8"
            chip-enabled
            floating-label
            multiple
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states9"
            :data-source="statesUS9"
            chip-enabled
            disabled
            floating-label
            multiple
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states10"
            :data-source="statesUS10"
            chip-enabled
            filled
            floating-label
            multiple
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states11"
            :data-source="statesUS11"
            chip-enabled
            disabled
            filled
            floating-label
            multiple
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states12"
            :data-source="statesUS12"
            chip-enabled
            floating-label
            multiple
            outlined
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states13"
            :data-source="statesUS13"
            chip-enabled
            disabled
            floating-label
            multiple
            outlined
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox
            v-model="employee15"
            :data-source="peopleSrc1"
            floating-label
            help-text="Select employee of the month"
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee16"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            floating-label
            help-text="Select employee of the month"
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee17"
            :data-source="peopleSrc1"
            filled
            floating-label
            help-text="Select employee of the month"
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee18"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="Select employee of the month"
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee19"
            :data-source="peopleSrc1"
            floating-label
            help-text="Select employee of the month"
            outlined
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee20"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            floating-label
            help-text="Select employee of the month"
            outlined
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox
            v-model="states14"
            :data-source="statesUS14"
            chip-enabled
            clear-button
            floating-label
            multiple
            prepend-icon="person"
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states15"
            :data-source="statesUS15"
            append-icon="person"
            chip-enabled
            clear-button
            floating-label
            multiple
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee21"
            :data-source="peopleSrc1"
            floating-label
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee22"
            :data-source="peopleSrc1"
            append-icon-outer="person"
            clear-button
            floating-label
          >
            <label>Append Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states16"
            :data-source="statesUS16"
            chip-enabled
            clear-button
            filled
            floating-label
            multiple
            prepend-icon="person_filled"
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states17"
            :data-source="statesUS17"
            append-icon="person_filled"
            chip-enabled
            clear-button
            filled
            floating-label
            multiple
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee23"
            :data-source="peopleSrc1"
            filled
            floating-label
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee24"
            :data-source="peopleSrc1"
            append-icon-outer="person"
            clear-button
            filled
            floating-label
          >
            <label>Append Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states18"
            :data-source="statesUS18"
            chip-enabled
            clear-button
            floating-label
            multiple
            outlined
            prepend-icon="person_filled"
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states19"
            :data-source="statesUS19"
            append-icon="person_filled"
            chip-enabled
            clear-button
            floating-label
            multiple
            outlined
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee25"
            :data-source="peopleSrc1"
            floating-label
            outlined
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee26"
            :data-source="peopleSrc1"
            append-icon-outer="person"
            clear-button
            floating-label
            outlined
          >
            <label>Append Outer</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import type { TDataSource, TDataListSchema } from 'vue-mdbootstrap';
import { BsArrayStore, BsStore } from 'vue-mdbootstrap';

const employee1 = ref<number>();
const employee2 = ref<number>();
const employee3 = ref<number>();
const employee4 = ref<number>();
const employee5 = ref<number>();
const employee6 = ref<number>();
const employee7 = ref<number>();
const employee8 = ref<number>();
const employee9 = ref<number>();
const employee10 = ref<number>();
const employee11 = ref<number>();
const employee12 = ref<number>();
const employee13 = ref<number>();
const employee14 = ref<number>(3);
const employee15 = ref<number>();
const employee16 = ref<number>();
const employee17 = ref<number>();
const employee18 = ref<number>();
const employee19 = ref<number>();
const employee20 = ref<number>();
const employee21 = ref<number>();
const employee22 = ref<number>();
const employee23 = ref<number>();
const employee24 = ref<number>();
const employee25 = ref<number>();
const employee26 = ref<number>();

const states1 = ref<string[]>([]);
const states2 = ref<string[]>([]);
const states3 = ref<string[]>([]);
const states4 = ref<string[]>([]);
const states5 = ref<string[]>([]);
const states6 = ref<string[]>([]);
const states7 = ref<string[]>([]);
const states8 = ref<string[]>(['AL', 'AK']);
const states9 = ref<string[]>(['AZ', 'AR']);
const states10 = ref<string[]>(['CA', 'CO']);
const states11 = ref<string[]>(['CT', 'DE']);
const states12 = ref<string[]>(['DC', 'FL']);
const states13 = ref<string[]>(['GA', 'HI']);
const states14 = ref<string[]>([]);
const states15 = ref<string[]>([]);
const states16 = ref<string[]>([]);
const states17 = ref<string[]>([]);
const states18 = ref<string[]>([]);
const states19 = ref<string[]>([]);

const peopleSrc1: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 1, name: 'Sandra Adams' },
      { id: 2, name: 'Ali Connors' },
      { id: 3, name: 'Trevor Hansen' },
      { id: 4, name: 'Tucker Smith' },
      { id: 5, name: 'Britta Holt' },
      { id: 6, name: 'Jane Smith' },
      { id: 7, name: 'John Smith' },
      { id: 8, name: 'Sandra Williams' },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'name', valueField: 'id' } as TDataListSchema,
};
const statesUS1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS3: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS4: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS5: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS6: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS7: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS8: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS9: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS10: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS11: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS12: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS13: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS14: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS15: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS16: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS17: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS18: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS19: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onBeforeUnmount(() => {
  peopleSrc1.proxy.destroy();
  statesUS1.proxy.destroy();
  statesUS2.proxy.destroy();
  statesUS3.proxy.destroy();
  statesUS4.proxy.destroy();
  statesUS5.proxy.destroy();
  statesUS6.proxy.destroy();
  statesUS7.proxy.destroy();
  statesUS8.proxy.destroy();
  statesUS9.proxy.destroy();
  statesUS10.proxy.destroy();
  statesUS11.proxy.destroy();
  statesUS12.proxy.destroy();
  statesUS13.proxy.destroy();
  statesUS14.proxy.destroy();
  statesUS15.proxy.destroy();
  statesUS16.proxy.destroy();
  statesUS17.proxy.destroy();
  statesUS18.proxy.destroy();
  statesUS19.proxy.destroy();
});
</script>
