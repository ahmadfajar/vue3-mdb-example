<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col col-lg-8">
        <BsCard shadow>
          <BsCardBody>
            <BsChipGroup v-model="selectedChips" :items="chipItems1" column />
          </BsCardBody>
          <BsDivider />
          <BsCardBody>
            <BsChipGroup
              v-model="selectedChips"
              :items="chipItems1"
              color="success"
              column
              outlined
            />
          </BsCardBody>
        </BsCard>
      </div>
    </div>
    <h2 class="mt-5">Multiple Selection</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col col-lg-8">
        <BsCard shadow>
          <BsCardBody>
            <BsChipGroup
              v-model="multiSelectedChips1"
              :items="chipItems1"
              active-class="bg-green lighten-3 border-light-green"
              column
              multiple
            />
          </BsCardBody>
          <BsDivider />
          <BsCardBody>
            <BsChipGroup
              v-model="multiSelectedChips1"
              :items="chipItems1"
              color="deep-purple"
              column
              multiple
              outlined
            />
          </BsCardBody>
        </BsCard>
      </div>
    </div>
    <h2 class="mt-5">Filter Chips</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col col-lg-8">
        <bs-card shadow>
          <bs-card-body>
            <div class="lead md-fw-semibold mb-2">Choose amenities</div>
            <bs-chip-group
              v-model="selectedAmenities1"
              :items="amenities"
              active-class="md-chip-default-color"
              checked-icon
              column
            />
          </bs-card-body>
          <bs-divider />
          <bs-card-body>
            <div class="lead md-fw-semibold mb-2">Choose neighborhoods</div>
            <bs-chip-group
              v-model="selectedNeighborhoods1"
              :items="neighborhoods"
              checked-icon
              color="primary"
              column
              outlined
            />
          </bs-card-body>
        </bs-card>
      </div>
    </div>
    <h4 class="mt-5">Filter Chips With Avatar</h4>
    <div class="row mt-4">
      <div class="col col-lg-8">
        <bs-card shadow>
          <bs-card-body>
            <div class="lead md-fw-semibold mb-2">Choose amenities</div>
            <bs-chip-group
              v-model="selectedAmenities2"
              :items="amenities2"
              active-class="md-chip-deep-purple active"
              checked-icon
              column
            />
          </bs-card-body>
          <bs-divider />
          <bs-card-body>
            <div class="lead md-fw-semibold mb-2">Choose neighborhoods</div>
            <bs-chip-group
              v-model="selectedNeighborhoods2"
              :items="neighborhoods2"
              checked-icon
              color="purple"
              column
              img-circle
              outlined
            />
          </bs-card-body>
        </bs-card>
      </div>
    </div>
    <h2 class="mt-5">Sliding Chips</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col col-lg-8">
        <bs-card class="py-3 px-1" shadow>
          <bs-chip-group
            v-model="multiSelectedChips2"
            :items="chipItems1"
            active-class="md-chip-outline-blue active"
            multiple
            slider-button
          />
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedChips = ref();
const multiSelectedChips1 = ref([]);
const multiSelectedChips2 = ref([]);
const selectedAmenities1 = ref();
const selectedAmenities2 = ref();
const selectedNeighborhoods1 = ref();
const selectedNeighborhoods2 = ref();
const chipItems1 = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' },
];
const amenities = [
  { text: 'Elevator' },
  { text: 'Washer / Dryer' },
  { text: 'Fireplace', disabled: true },
  { text: 'Wheelchair access' },
  { text: 'Dogs ok' },
  { text: 'Cats ok' },
];
const neighborhoods = [
  { text: 'Snowy Rock Place' },
  { text: 'Honey Lane Circle' },
  { text: 'Donna Drive' },
  { text: 'Elaine Street' },
  { text: 'Court Street' },
  { text: 'Kennedy Park' },
];
const amenities2 = [
  { text: 'Elevator', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Washer / Dryer', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Fireplace', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Wheelchair access', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Dogs ok', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Cats ok', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' },
];
const neighborhoods2 = [
  { text: 'Snowy Rock Place', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Honey Lane Circle', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Donna Drive', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Elaine Street', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Court Street', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Kennedy Park', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' },
];
</script>
