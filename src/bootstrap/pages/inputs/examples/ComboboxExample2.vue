<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { BsArrayStore, type TDataListSchema, type TDataSource } from 'vue-mdbootstrap';

const fieldValue1 = ref<number>();
const peopleSrc: TDataSource = {
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
    { idProperty: 'id' }
  ),
  schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' } as TDataListSchema,
};

onBeforeUnmount(() => {
  peopleSrc.proxy.destroy();
});
</script>

<template>
  <BsCombobox
    v-model="fieldValue1"
    :data-source="peopleSrc"
    {$clear_button}
    {$help_text}
    {$icon_placement}
    {$image_shape}
    {$image_size}
    {$persistent_help_off}
    {$placeholder}
    {$states}
    {$variants}
    floating-label
    show-image
  >
    <label>Select Employee</label>
  </BsCombobox>
</template>
