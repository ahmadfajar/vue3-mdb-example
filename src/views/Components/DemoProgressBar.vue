<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <BsProgressBar v-model="progress1" />
      <BsProgressBar v-model="progress1" class="mt-3" height="1.5rem" show-value />
      <h6 class="mb-3 mt-4">
        Value: <span class="text-unique">{{ progress1 }}%</span>
      </h6>
      <input v-model.number="progress1" class="form-range" type="range" />
    </DemoBlock>
    <h2 class="mt-5">Color</h2>
    <DemoBlock class="mt-4">
      <BsProgressBar v-model="progress2" color="success" />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" />
    </DemoBlock>
    <h2 class="mt-5">Striped</h2>
    <DemoBlock class="mt-4">
      <BsProgressBar v-model="progress2" color="success" striped />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" striped />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" striped />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" striped />
    </DemoBlock>
    <BsDivider />
    <h2 class="mt-5">Animated Stripes</h2>
    <DemoBlock class="mt-4">
      <BsProgressBar v-model="progress2" color="success" striped striped-animation />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" striped striped-animation />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" striped striped-animation />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" striped striped-animation />
    </DemoBlock>
    <h2 class="mt-5">Text Label</h2>
    <DemoBlock class="mt-4">
      <h5 class="mb-3">Value as Label</h5>
      <BsProgressBar v-model="progress6" :value-position="position1" color="danger" show-value />
      <div class="col-md-8 col-lg-6 mt-4">
        <bs-combobox v-model="position1" :data-source="position1Src" filled>
          <label class="col-md-4 col-lg-3 col-form-label">Value Position</label>
        </bs-combobox>
      </div>
      <BsDivider class="my-3" />
      <h5 class="mb-3">Custom Label</h5>
      <BsProgressBar
        v-model="progress7"
        :label-position="position2"
        color="purple"
        label="Marketing Performance"
        label-alignment="start"
        show-value
      />
      <div class="col-md-8 col-lg-6 mt-4">
        <bs-combobox v-model="position2" :data-source="position2Src" filled>
          <label class="col-md-4 col-lg-3 col-form-label">Label Position</label>
        </bs-combobox>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  BsArrayStore,
  type TDataListSchemaProps,
  type TDataSource,
  type TProgressBarLabelPosition,
  type TProgressBarValuePosition,
} from 'vue-mdbootstrap';

const progress1 = ref(10);
const progress2 = ref(30);
const progress3 = ref(50);
const progress4 = ref(70);
const progress5 = ref(90);
const progress6 = ref(70);
const progress7 = ref(70);
const position1 = ref<TProgressBarValuePosition>('inside');
const position1Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'inside', text: 'Inside' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps,
};
const position2 = ref<TProgressBarLabelPosition>('top');
const position2Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps,
};
</script>
