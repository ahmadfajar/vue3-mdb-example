<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-3">
          <BsCard class="text-dark" shadow>
            <BsCardBody>
              <BsCardContent type="title">
                Card Title
              </BsCardContent>
              <BsCardContent type="subtitle" class="mb-3">
                Card Subtitle
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
              <BsCardContent>
                <small class="text-muted">{{ smallText }}</small>
              </BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col mb-3">
          <BsCard class="text-dark" shadow>
            <BsCardHeader>Card Header</BsCardHeader>
            <BsCardBody>
              <BsCardContent>{{ quickText }}</BsCardContent>
              <BsCardContent>
                <small class="text-muted">{{ smallText }}</small>
              </BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col mb-3 mb-md-0">
          <BsCard class="text-dark" shadow>
            <BsImageHolder
              class="card-img-top fs-1 md-fw-light"
              placeholder-text="Image"
              y-pos="60%"/>
            <BsCardBody>
              <BsCardContent>{{ quickText }}</BsCardContent>
              <BsCardContent>
                <small class="text-muted">{{ smallText }}</small>
              </BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="text-dark" shadow>
            <div class="row g-0">
              <div class="col-md-4">
                <BsImageHolder
                  class="rounded-start fs-2 md-fw-light"
                  placeholder-text="Image"
                  y-pos="55%"/>
              </div>
              <div class="col-md-8">
                <BsCardBody>
                  <BsCardContent type="title">
                    Content Title
                  </BsCardContent>
                  <BsCardContent type="subtitle" class="mb-3">
                    Content Subtitle
                  </BsCardContent>
                  <BsCardContent>{{ quickText }}</BsCardContent>
                  <BsCardContent>
                    <small class="text-muted">{{ smallText }}</small>
                  </BsCardContent>
                </BsCardBody>
              </div>
            </div>
          </BsCard>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Content Media
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-3 mb-md-4">
          <BsCard
            class="text-dark"
            img-top-src="https://picsum.photos/id/29/600/300.jpg"
            img-top-alt="Image Top"
            shadow>
            <BsCardBody>
              <BsCardContent type="title">
                Content Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col mb-3 mb-md-4">
          <BsCard class="bg-unique text-white" shadow>
            <BsCardMedia
              title="Image Title"
              subtitle="Image SubTitle">
              <img src="https://picsum.photos/id/25/600/300.jpg" alt="image"/>
            </BsCardMedia>
            <BsCardBody>
              <BsCardContent type="title">
                Content Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col mb-3 mb-md-0">
          <BsCard
            class="text-dark"
            img-bottom-src="https://picsum.photos/id/425/600/300.jpg"
            img-bottom-alt="Image Bottom"
            shadow>
            <BsCardBody>
              <BsCardContent type="title">
                Content Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="bg-stylish-color text-white" shadow>
            <BsCardBody>
              <BsCardContent type="title">
                Content Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardMedia title="Image Title" subtitle="Image SubTitle">
              <img src="https://picsum.photos/id/225/600/300.jpg" alt="image"/>
            </BsCardMedia>
          </BsCard>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Background Color
    </h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-3 mb-md-4">
          <BsCard class="bg-primary text-white" shadow>
            <BsCardHeader>Card with bg-primary</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title">
                Card Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col mb-3 mb-md-4">
          <BsCard class="bg-secondary text-white" shadow>
            <BsCardHeader>Card with bg-secondary</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title">
                Card Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col mb-3 mb-md-0">
          <BsCard
            :rounded="false"
            class="bg-indigo text-white"
            shadow>
            <BsCardHeader>Card with bg-indigo</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title">
                Card Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col">
          <BsCard
            :rounded="false"
            class="bg-unique text-white"
            shadow>
            <BsCardHeader>Card with bg-unique</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title">
                Card Title
              </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Card Group
    </h2>
    <DemoBlock class="mt-4">
      <div class="card-group">
        <BsCard class="text-dark">
          <BsImageHolder
            class="card-img-top fs-2 md-fw-light"
            placeholder-text="Image Caption"
            y-pos="60%"/>
          <BsCardBody>
            <BsCardContent type="title">
              Card title
            </BsCardContent>
            <BsCardContent>{{ quickText }}</BsCardContent>
            <BsCardContent>
              <small class="text-muted">{{ smallText }}</small>
            </BsCardContent>
          </BsCardBody>
        </BsCard>
        <BsCard class="text-dark">
          <BsImageHolder
            class="card-img-top fs-2 md-fw-light"
            placeholder-text="Image Caption"
            y-pos="60%"/>
          <BsCardBody class="card-body">
            <BsCardContent type="title">
              Card title
            </BsCardContent>
            <BsCardContent>{{ quickText }}</BsCardContent>
            <BsCardContent>
              <small class="text-muted">{{ smallText }}</small>
            </BsCardContent>
          </BsCardBody>
        </BsCard>
        <BsCard class="text-dark">
          <BsImageHolder
            class="card-img-top fs-2 md-fw-light"
            placeholder-text="Image Caption"
            y-pos="60%"/>
          <BsCardBody>
            <BsCardContent type="title">
              Card title
            </BsCardContent>
            <BsCardContent>{{ quickText }}</BsCardContent>
            <BsCardContent>
              <small class="text-muted">{{ smallText }}</small>
            </BsCardContent>
          </BsCardBody>
        </BsCard>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import DemoBlock from '@/DemoBlock.vue'

const quickText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
const smallText = 'Last updated 3 mins ago'
</script>

<style lang="scss">
</style>
