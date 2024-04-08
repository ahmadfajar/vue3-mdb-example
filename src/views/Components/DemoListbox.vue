<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="mx-auto" style="width: 320px">
        <BsListbox v-model="listbox1" :data-source="peopleSrc1" max-height="250" />
        <p class="mt-2">
          Value: <span class="fw-semibold">{{ listbox1 }}</span>
        </p>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Multi-Select Support</h2>
    <DemoBlock class="mt-4">
      <div class="mx-auto" style="width: 320px">
        <BsListbox v-model="listbox2" :data-source="peopleSrc1" max-height="250" multiple />
        <p class="mt-2">
          Values: <span class="fw-semibold">{{ listbox2 }}</span>
        </p>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Using Checkbox</h4>
    <DemoBlock class="mt-4">
      <div class="mx-auto" style="width: 320px">
        <BsListbox
          v-model="listbox3"
          :data-source="statesCA1"
          max-height="250"
          multiple
          use-checkbox
        />
        <p class="mt-2">
          Values: <span class="fw-semibold">{{ listbox3 }}</span>
        </p>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Controlling Checkbox Position and Color</h4>
    <DemoBlock class="mt-4">
      <div class="mx-auto" style="width: 320px">
        <BsListbox
          v-model="listbox4"
          :data-source="statesCA2"
          max-height="250"
          multiple
          use-checkbox
          checkbox-color="primary"
          checkbox-position="right"
        />
        <p class="mt-2">
          Values: <span class="fw-semibold">{{ listbox4 }}</span>
        </p>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Image or Avatar Support</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="mx-auto" style="width: 320px">
            <BsListbox
              v-model="listbox5"
              :data-source="peopleSrc2"
              max-height="250"
              circle-image
              show-image
            />
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
          <div class="mx-auto" style="width: 320px">
            <BsListbox
              v-model="listbox6"
              :data-source="peopleSrc2"
              max-height="250"
              rounded-image
              show-image
            />
          </div>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Controlling Image Size</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="mx-auto" style="width: 320px">
            <BsListbox
              v-model="listbox7"
              :data-source="peopleSrc2"
              max-height="250"
              image-size="32"
              circle-image
              show-image
            />
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
          <div class="mx-auto" style="width: 320px">
            <BsListbox
              v-model="listbox8"
              :data-source="peopleSrc2"
              max-height="250"
              image-size="32"
              rounded-image
              show-image
            />
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Customize List Items</h2>
    <DemoBlock class="mt-4">
      <div class="mx-auto" style="width: 360px">
        <BsListbox
          v-model="listbox9"
          :data-source="productSrc"
          color="info-color-dark"
          max-height="270"
          item-separator
        >
          <template #option-item="{ item }">
            <bs-list-tile-title>
              <span>{{ item.ProductName }}</span>
              <span class="float-end fw-light small">${{ item.UnitPrice }}</span>
            </bs-list-tile-title>
            <bs-list-tile-subtitle>Stock : {{ item.UnitsInStock }}</bs-list-tile-subtitle>
          </template>
        </BsListbox>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore, BsStore } from 'vue-mdbootstrap';

const listbox1 = ref<number | undefined>();
const listbox2 = ref<number[] | undefined>();
const listbox3 = ref<string[] | undefined>();
const listbox4 = ref<string[] | undefined>();
const listbox5 = ref<number | undefined>();
const listbox6 = ref<number | undefined>();
const listbox7 = ref<number | undefined>();
const listbox8 = ref<number | undefined>();
const listbox9 = ref<number | undefined>();

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
const peopleSrc2: TDataSource = {
  proxy: new BsArrayStore(
    [
      {
        id: 1,
        name: 'Sandra Adams',
        avatar: 'https://ahmadfajar.github.io/img/1.jpg',
      },
      {
        id: 2,
        name: 'Ali Connors',
        avatar: 'https://ahmadfajar.github.io/img/2.jpg',
      },
      {
        id: 3,
        name: 'Trevor Hansen',
        avatar: 'https://ahmadfajar.github.io/img/3.jpg',
      },
      {
        id: 4,
        name: 'Tucker Smith',
        avatar: 'https://ahmadfajar.github.io/img/4.jpg',
      },
      {
        id: 5,
        name: 'Britta Holt',
        avatar: 'https://ahmadfajar.github.io/img/5.jpg',
      },
      {
        id: 6,
        name: 'Jane Smith',
        avatar: 'https://ahmadfajar.github.io/img/3.jpg',
      },
      {
        id: 7,
        name: 'John Smith',
        avatar: 'https://ahmadfajar.github.io/img/2.jpg',
      },
      {
        id: 8,
        name: 'Sandra Williams',
        avatar: 'https://ahmadfajar.github.io/img/4.jpg',
      },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' } as TDataListSchemaProps,
};
const statesCA1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesCA2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'ProductID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/product.json',
    },
  }),
  schema: { displayField: 'ProductName', valueField: 'ProductID' },
};
</script>
