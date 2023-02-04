<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="text-center">
        <BsButton
          ref="activator1"
          color="primary"
          dropdown-toggle
          @click="show1 = !show1">
          Button Dropdown
        </BsButton>
      </div>
      <BsPopover
        v-model:open="show1"
        :trigger="activator1?.$el"
        class="md-shadow-1"
        space="3">
        <BsListView>
          <BsListTile>
            <BsListTileLeading
              img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
              rounded/>
            <BsListTileContent>
              <BsListTileTitle>
                <b>John Doe</b>
              </BsListTileTitle>
              <BsListTileSubtitle>
                Going further more...
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
        </BsListView>
        <BsDivider/>
        <div class="p-3">
          <div class="text-end">
            <BsButton
              class="md-fw-semibold"
              color="secondary"
              outlined
              @click="show1 = false">
              Cancel
            </BsButton>
            <BsButton
              class="md-fw-semibold"
              @click="show1 = false">
              Save
            </BsButton>
          </div>
        </div>
      </BsPopover>
    </DemoBlock>
    <h2 class="mt-5">
      Display Placement
    </h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 text-center">
          <BsButton
            ref="activator2"
            color="primary"
            dropdown-toggle
            @click="show2 = !show2">
            Bottom Left
          </BsButton>
          <BsPopover
            v-model:open="show2"
            :trigger="activator2?.$el"
            class="md-shadow-1"
            placement="bottom-left"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show2 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show2 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 mt-md-0 text-center">
          <BsButton
            ref="activator3"
            color="primary"
            dropdown-toggle
            @click="show3 = !show3">
            Bottom
          </BsButton>
          <BsPopover
            v-model:open="show3"
            :trigger="activator3?.$el"
            class="md-shadow-1"
            placement="bottom"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show3 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show3 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0 text-center">
          <BsButton
            ref="activator4"
            color="primary"
            dropdown-toggle
            @click="show4 = !show4">
            Bottom Right
          </BsButton>
          <BsPopover
            v-model:open="show4"
            :trigger="activator4?.$el"
            class="md-shadow-1"
            placement="bottom-right"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show4 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show4 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0 text-center">
          <BsButton
            ref="activator5"
            color="primary"
            dropdown-toggle
            @click="show5 = !show5">
            Top Left
          </BsButton>
          <BsPopover
            v-model:open="show5"
            :trigger="activator5?.$el"
            class="md-shadow-1"
            placement="top-left"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show5 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show5 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 text-center">
          <BsButton
            ref="activator6"
            color="primary"
            dropdown-toggle
            @click="show6 = !show6">
            Top
          </BsButton>
          <BsPopover
            v-model:open="show6"
            :trigger="activator6?.$el"
            class="md-shadow-1"
            placement="top"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show6 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show6 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 text-center">
          <BsButton
            ref="activator7"
            color="primary"
            dropdown-toggle
            @click="show7 = !show7">
            Top Right
          </BsButton>
          <BsPopover
            v-model:open="show7"
            :trigger="activator7?.$el"
            class="md-shadow-1"
            placement="top-right"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show7 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show7 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 text-center">
          <BsButton
            ref="activator8"
            color="primary"
            dropdown-toggle
            @click="show8 = !show8">
            Left Top
          </BsButton>
          <BsPopover
            v-model:open="show8"
            :trigger="activator8?.$el"
            class="md-shadow-1"
            placement="left-top"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show8 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show8 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-3 text-center">
          <BsButton
            ref="activator9"
            color="primary"
            dropdown-toggle
            @click="show9 = !show9">
            Right Top
          </BsButton>
          <BsPopover
            v-model:open="show9"
            :trigger="activator9?.$el"
            class="md-shadow-1"
            placement="right-top"
            space="3">
            <BsListView>
              <BsListTile>
                <BsListTileLeading
                  img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg"
                  rounded/>
                <BsListTileContent>
                  <BsListTileTitle>
                    <b>John Doe</b>
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    Going further more...
                  </BsListTileSubtitle>
                </BsListTileContent>
              </BsListTile>
            </BsListView>
            <BsDivider/>
            <div class="p-3">
              <div class="text-end">
                <BsButton
                  class="md-fw-semibold"
                  color="secondary"
                  outlined
                  @click="show9 = false">
                  Cancel
                </BsButton>
                <BsButton
                  class="md-fw-semibold"
                  @click="show9 = false">
                  Save
                </BsButton>
              </div>
            </div>
          </BsPopover>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, ref } from 'vue'
import DemoBlock from '@/DemoBlock.vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const show9 = ref(false)
const activator1 = ref<ComponentPublicInstance | null>(null)
const activator2 = ref<ComponentPublicInstance | null>(null)
const activator3 = ref<ComponentPublicInstance | null>(null)
const activator4 = ref<ComponentPublicInstance | null>(null)
const activator5 = ref<ComponentPublicInstance | null>(null)
const activator6 = ref<ComponentPublicInstance | null>(null)
const activator7 = ref<ComponentPublicInstance | null>(null)
const activator8 = ref<ComponentPublicInstance | null>(null)
const activator9 = ref<ComponentPublicInstance | null>(null)
</script>

<style scoped>
</style>
