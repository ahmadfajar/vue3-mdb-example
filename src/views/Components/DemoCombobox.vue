<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox v-model="employee1" :data-source="peopleSrc1" floating-label>
            <label>Field Label</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee1"
            :data-source="peopleSrc1"
            placeholder="Placeholder"
            floating-label
          >
            <label>Field Label</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee1" :data-source="peopleSrc1" floating-label filled>
            <label>Field Label</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee1"
            :data-source="peopleSrc1"
            filled
            floating-label
            placeholder="Placeholder"
          >
            <label>Field Label</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee1" :data-source="peopleSrc1" floating-label outlined>
            <label>Field Label</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee1"
            :data-source="peopleSrc1"
            floating-label
            outlined
            placeholder="Placeholder"
          >
            <label>Field Label</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Multi-Select Support</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox
            v-model="states1"
            :data-source="statesUS1"
            listbox-max-height="280"
            multiple
            floating-label
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states2"
            :data-source="statesUS2"
            placeholder="Placeholder"
            multiple
            floating-label
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="states3" :data-source="statesUS3" multiple floating-label filled>
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states4"
            :data-source="statesUS4"
            multiple
            filled
            floating-label
            placeholder="Placeholder"
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="states5" :data-source="statesUS5" multiple floating-label outlined>
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states6"
            :data-source="statesUS6"
            multiple
            floating-label
            outlined
            placeholder="Placeholder"
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Chips Style Support</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsCombobox
            v-model="states7"
            :data-source="statesUS7"
            listbox-max-height="280"
            multiple
            chip-enabled
            floating-label
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states8"
            :data-source="statesUS8"
            placeholder="Placeholder"
            multiple
            chip-enabled
            chip-pill
            floating-label
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states9"
            :data-source="statesUS9"
            multiple
            chip-enabled
            chip-color="stylish-color"
            floating-label
            filled
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states10"
            :data-source="statesUS10"
            multiple
            chip-enabled
            chip-pill
            chip-color="info-color-dark"
            filled
            floating-label
            placeholder="Placeholder"
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states11"
            :data-source="statesUS11"
            multiple
            chip-color="primary"
            chip-enabled
            chip-outlined
            floating-label
            outlined
          >
            <label>Select States</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states12"
            :data-source="statesUS12"
            multiple
            chip-color="danger"
            chip-enabled
            chip-outlined
            chip-pill
            floating-label
            outlined
            placeholder="Placeholder"
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
          <BsCombobox v-model="employee2" :data-source="peopleSrc1" floating-label readonly>
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee3" :data-source="peopleSrc1" floating-label disabled>
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee4" :data-source="peopleSrc1" floating-label filled readonly>
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox v-model="employee5" :data-source="peopleSrc1" filled floating-label disabled>
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee6"
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
            v-model="employee7"
            :data-source="peopleSrc1"
            floating-label
            outlined
            disabled
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
            v-model="states13"
            :data-source="statesUS13"
            multiple
            chip-enabled
            floating-label
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states14"
            :data-source="statesUS14"
            multiple
            chip-enabled
            floating-label
            disabled
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states15"
            :data-source="statesUS15"
            multiple
            chip-enabled
            floating-label
            filled
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states16"
            :data-source="statesUS16"
            multiple
            chip-enabled
            filled
            floating-label
            disabled
          >
            <label>State Disabled</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states17"
            :data-source="statesUS17"
            multiple
            chip-enabled
            floating-label
            outlined
            readonly
          >
            <label>State Readonly</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states18"
            :data-source="statesUS18"
            multiple
            chip-enabled
            floating-label
            outlined
            disabled
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
            v-model="employee8"
            :data-source="peopleSrc1"
            help-text="Select employee of the month"
            floating-label
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee9"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            help-text="Select employee of the month"
            floating-label
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee10"
            :data-source="peopleSrc1"
            help-text="Select employee of the month"
            filled
            floating-label
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee11"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            help-text="Select employee of the month"
            filled
            floating-label
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee12"
            :data-source="peopleSrc1"
            help-text="Select employee of the month"
            outlined
            floating-label
          >
            <label>Employee Name</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee13"
            :data-source="peopleSrc1"
            :persistent-help-text="false"
            help-text="Select employee of the month"
            outlined
            floating-label
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
            v-model="states20"
            :data-source="statesUS20"
            prepend-icon="person"
            multiple
            chip-enabled
            clear-button
            floating-label
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states21"
            :data-source="statesUS21"
            append-icon="person"
            multiple
            chip-enabled
            clear-button
            floating-label
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee14"
            :data-source="peopleSrc1"
            prepend-icon-outer="person"
            floating-label
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee15"
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
            v-model="states22"
            :data-source="statesUS22"
            prepend-icon="person_filled"
            multiple
            filled
            chip-enabled
            clear-button
            floating-label
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states23"
            :data-source="statesUS23"
            append-icon="person_filled"
            filled
            multiple
            chip-enabled
            clear-button
            floating-label
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee16"
            :data-source="peopleSrc1"
            prepend-icon-outer="person"
            filled
            floating-label
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee17"
            :data-source="peopleSrc1"
            append-icon-outer="person"
            filled
            clear-button
            floating-label
          >
            <label>Append Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states24"
            :data-source="statesUS24"
            prepend-icon="person_filled"
            outlined
            multiple
            chip-enabled
            clear-button
            floating-label
          >
            <label>Prepend</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="states25"
            :data-source="statesUS25"
            append-icon="person_filled"
            outlined
            multiple
            chip-enabled
            clear-button
            floating-label
          >
            <label>Append</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee18"
            :data-source="peopleSrc1"
            prepend-icon-outer="person"
            outlined
            floating-label
          >
            <label>Prepend Outer</label>
          </BsCombobox>
        </div>
        <div class="col">
          <BsCombobox
            v-model="employee19"
            :data-source="peopleSrc1"
            append-icon-outer="person"
            outlined
            clear-button
            floating-label
          >
            <label>Append Outer</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Classic Form Field Styles</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10">
          <BsCombobox
            v-model="employee20"
            :data-source="peopleSrc1"
            placeholder="Test Placeholder"
            clear-button
            class="mb-3"
          >
            <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
          </BsCombobox>
          <BsCombobox v-model="employee30" :data-source="peopleSrc1" class="mb-3" readonly>
            <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
          </BsCombobox>
          <BsCombobox v-model="employee40" :data-source="peopleSrc1" class="mb-3" disabled>
            <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
          </BsCombobox>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore, BsStore } from 'vue-mdbootstrap';

const employee1 = ref<number>();
const employee2 = ref<number>(2);
const employee3 = ref<number>(3);
const employee4 = ref<number>(4);
const employee5 = ref<number>(5);
const employee6 = ref<number>(6);
const employee7 = ref<number>(7);
const employee8 = ref<number>();
const employee9 = ref<number>();
const employee10 = ref<number>();
const employee11 = ref<number>();
const employee12 = ref<number>();
const employee13 = ref<number>();
const employee14 = ref<number>();
const employee15 = ref<number>();
const employee16 = ref<number>();
const employee17 = ref<number>();
const employee18 = ref<number>();
const employee19 = ref<number>();
const employee20 = ref<number>();
const employee30 = ref<number>(2);
const employee40 = ref<number>(3);

const states1 = ref<string[]>([]);
const states2 = ref<string[]>([]);
const states3 = ref<string[]>([]);
const states4 = ref<string[]>([]);
const states5 = ref<string[]>([]);
const states6 = ref<string[]>([]);
const states7 = ref<string[]>([]);
const states8 = ref<string[]>([]);
const states9 = ref<string[]>([]);
const states10 = ref<string[]>([]);
const states11 = ref<string[]>([]);
const states12 = ref<string[]>([]);
const states13 = ref<string[]>(['AL', 'AK']);
const states14 = ref<string[]>(['AZ', 'AR']);
const states15 = ref<string[]>(['CA', 'CO']);
const states16 = ref<string[]>(['CT', 'DE']);
const states17 = ref<string[]>(['DC', 'FL']);
const states18 = ref<string[]>(['GA', 'HI']);
const states20 = ref<string[]>([]);
const states21 = ref<string[]>([]);
const states22 = ref<string[]>([]);
const states23 = ref<string[]>([]);
const states24 = ref<string[]>([]);
const states25 = ref<string[]>([]);

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
  schema: { displayField: 'name', valueField: 'id' } as TDataListSchemaProps,
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

const statesUS20: TDataSource = {
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
const statesUS21: TDataSource = {
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
const statesUS22: TDataSource = {
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
const statesUS23: TDataSource = {
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
const statesUS24: TDataSource = {
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
const statesUS25: TDataSource = {
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
</script>
