<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { BsStore, type TDataListSchema, type TDataSource } from 'vue-mdbootstrap';

const category = ref<number>();
const product = ref<number>();

const categorySrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'CategoryID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/categories.json',
    },
  }),
  schema: { displayField: 'CategoryName', valueField: 'CategoryID' } as TDataListSchema,
};

const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'ProductID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/products.json',
    },
  }),
  schema: {
    displayField: 'ProductName',
    valueField: 'ProductID',
    cascadeField: 'CategoryID',
  } as TDataListSchema,
};

onBeforeUnmount(() => {
  categorySrc.proxy.destroy();
  productSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full max-w-100 mx-auto flex flex-col md-gap-y-4">
    <BsCombobox v-model="category" :data-source="categorySrc" filled floating-label>
      <label>Product Category</label>
    </BsCombobox>
    <BsCombobox
      v-model="product"
      :data-source="productSrc"
      :parent-value="category"
      filled
      floating-label
    >
      <label>Product Name</label>
    </BsCombobox>
  </div>
</template>
