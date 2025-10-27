<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Fade</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="fade = !fade"> Click Me </BsButton>
        <transition name="fade">
          <BsCard v-if="fade" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Scale</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="scale = !scale"> Click Me </BsButton>
        <transition name="scale">
          <BsCard v-if="scale" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Fade</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody class="position-relative overflow-hidden">
        <BsButton class="mb-3" @click="slideFade = !slideFade"> Click Me </BsButton>
        <transition name="slide-fade">
          <BsCard v-if="slideFade" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Fade Reverse</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody class="position-relative overflow-hidden">
        <BsButton class="mb-3" @click="slideFadeReverse = !slideFadeReverse"> Click Me </BsButton>
        <transition name="slide-fade-reverse">
          <BsCard v-if="slideFadeReverse" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Left Right</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody class="position-relative overflow-hidden">
        <BsButton class="mb-3" @click="slideLeftRight = !slideLeftRight"> Click Me </BsButton>
        <transition name="slide-left-right">
          <BsCard v-if="slideLeftRight" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Right Left</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody class="position-relative overflow-hidden">
        <BsButton class="mb-3" @click="slideRightLeft = !slideRightLeft"> Click Me </BsButton>
        <transition name="slide-right-left">
          <BsCard v-if="slideRightLeft" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Top Bottom</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="slideTopBottom = !slideTopBottom"> Click Me </BsButton>
        <transition name="slide-top-bottom">
          <BsCard v-if="slideTopBottom" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Slide Bottom Top</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="slideBottomTop = !slideBottomTop"> Click Me </BsButton>
        <transition name="slide-bottom-top">
          <BsCard v-if="slideBottomTop" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Expand Transition</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 302px">
      <BsCardBody>
        <BsButton class="mb-3" @click="expandTransition = !expandTransition"> Click Me </BsButton>
        <BsExpandTransition>
          <BsCard v-if="expandTransition" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
              <div>{{ content }}</div>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </BsExpandTransition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Rotate Clock Wise</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="rotateInOut = !rotateInOut"> Click Me </BsButton>
        <transition name="rotate-clock-wise">
          <BsCard v-if="rotateInOut" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Rotate Clock Reverse</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody>
        <BsButton class="mb-3" @click="rotateInOutSmall = !rotateInOutSmall"> Click Me </BsButton>
        <transition name="rotate-clock-reverse">
          <BsCard v-if="rotateInOutSmall" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>

    <h2 class="mt-5">Roll In-Out</h2>
    <BsCard class="bg-gray-400 border-0 mt-3" style="min-height: 210px">
      <BsCardBody class="position-relative overflow-hidden">
        <BsButton class="mb-3" @click="rollInOut = !rollInOut"> Click Me </BsButton>
        <transition name="roll-in-out">
          <BsCard v-if="rollInOut" class="card-mw-65">
            <BsCardBody>
              <BsCardContent type="title">
                {{ title }}
              </BsCardContent>
              <div>{{ content }}</div>
            </BsCardBody>
          </BsCard>
        </transition>
      </BsCardBody>
    </BsCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fade = ref(true);
const scale = ref(true);
const slideFade = ref(true);
const slideFadeReverse = ref(true);
const slideLeftRight = ref(false);
const slideRightLeft = ref(false);
const slideTopBottom = ref(false);
const slideBottomTop = ref(false);
const expandTransition = ref(false);
const rotateInOut = ref(false);
const rotateInOutSmall = ref(false);
const rollInOut = ref(false);

const title = 'Content Title';
const content =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>
