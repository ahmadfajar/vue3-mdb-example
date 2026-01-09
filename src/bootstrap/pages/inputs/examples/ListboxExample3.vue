<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { BsStore, type TDataSource } from 'vue-mdbootstrap';

const product = ref<number>();
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

onBeforeUnmount(() => {
  productSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full mx-auto" style="max-width: 400px">
    <BsListbox
      v-model="product"
      :data-source="productSrc"
      color="info-color-dark"
      item-separator
      item-separator-dark
      max-height="300"
    >
      <template #option-item="{ item }">
        <BsListTileTitle class="flex justify-between">
          <div>{{ item.ProductName }}</div>
          <div class="font-weight-light small">${{ item.UnitPrice }}</div>
        </BsListTileTitle>
        <BsListTileSubtitle>Stock : {{ item.UnitsInStock }}</BsListTileSubtitle>
      </template>
    </BsListbox>
  </div>
</template>

<style lang="scss">
@use 'vue-mdbootstrap/scss/mixins/listview';
@use 'vue-mdbootstrap/scss/color_vars' as colors;

@include listview.make-listview-variant('info-color-dark', colors.$info-color-dark);
</style>
