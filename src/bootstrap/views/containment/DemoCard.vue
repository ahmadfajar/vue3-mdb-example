<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-3">
          <BsCard shadow>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent class="mb-3" type="subtitle"> Card Subtitle </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
              <BsCardContent>
                <small class="text-muted">{{ smallText }}</small>
              </BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col mb-3">
          <BsCard shadow>
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
          <BsCard shadow>
            <BsImageHolder
              class="card-img-top fs-1 font-weight-light"
              placeholder-text="Image"
              y-pos="60%"
            />
            <BsCardBody>
              <BsCardContent>{{ quickText }}</BsCardContent>
              <BsCardContent>
                <small class="text-muted">{{ smallText }}</small>
              </BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard shadow>
            <div class="row g-0">
              <div class="col-md-4">
                <BsImageHolder
                  class="card-img-start fs-2 font-weight-light"
                  placeholder-text="Image"
                  y-pos="55%"
                />
              </div>
              <div class="col-md-8">
                <BsCardBody>
                  <BsCardContent type="title"> Content Title </BsCardContent>
                  <BsCardContent class="mb-3" type="subtitle"> Content Subtitle </BsCardContent>
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

    <h2 class="mt-5">Content Media</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <BsCard
            img-top-alt="Image Top"
            img-top-src="https://picsum.photos/id/29/600/300.jpg"
            shadow
          >
            <BsCardBody>
              <BsCardContent type="title"> Content Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard border-off class="bg-unique text-white" shadow>
            <BsCardMedia subtitle="Image SubTitle" title="Image Title">
              <img alt="image" src="https://picsum.photos/id/25/600/300.jpg" />
            </BsCardMedia>
            <BsCardBody>
              <BsCardContent type="title"> Content Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard
            img-bottom-alt="Image Bottom"
            img-bottom-src="https://picsum.photos/id/425/600/300.jpg"
            shadow
          >
            <BsCardBody>
              <BsCardContent type="title"> Content Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="bg-stylish-color text-white" shadow>
            <BsCardBody>
              <BsCardContent type="title"> Content Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardMedia subtitle="Image SubTitle" title="Image Title">
              <img alt="image" src="https://picsum.photos/id/225/600/300.jpg" />
            </BsCardMedia>
          </BsCard>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Background Color</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <BsCard class="text-bg-primary" shadow>
            <BsCardHeader>Card with bg-primary</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="text-bg-secondary" shadow>
            <BsCardHeader>Card with bg-secondary</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="text-bg-danger" rounded-off shadow>
            <BsCardHeader>Card with bg-danger</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
        <div class="col">
          <BsCard class="bg-unique text-white" rounded-off shadow>
            <BsCardHeader>Card with bg-unique</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent>{{ quickText }}</BsCardContent>
            </BsCardBody>
            <BsCardFooter>Card Footer</BsCardFooter>
          </BsCard>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Card Group</h2>
    <DemoBlock class="mt-4">
      <div class="card-group">
        <BsCard>
          <BsImageHolder
            class="card-img-top fs-2 font-weight-light"
            placeholder-text="Image Caption"
            y-pos="60%"
          />
          <BsCardBody>
            <BsCardContent type="title"> Card title </BsCardContent>
            <BsCardContent>{{ quickText }}</BsCardContent>
            <BsCardContent>
              <small class="text-muted">{{ smallText }}</small>
            </BsCardContent>
          </BsCardBody>
        </BsCard>
        <BsCard>
          <BsImageHolder
            class="card-img-top fs-2 font-weight-light"
            placeholder-text="Image Caption"
            y-pos="60%"
          />
          <BsCardBody>
            <BsCardContent type="title"> Card title </BsCardContent>
            <BsCardContent>{{ quickText }}</BsCardContent>
            <BsCardContent>
              <small class="text-muted">{{ smallText }}</small>
            </BsCardContent>
          </BsCardBody>
        </BsCard>
        <BsCard>
          <BsImageHolder
            class="card-img-top fs-2 font-weight-light"
            placeholder-text="Image Caption"
            y-pos="60%"
          />
          <BsCardBody>
            <BsCardContent type="title"> Card title </BsCardContent>
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

<script setup lang="ts">
// prettier-ignore
const quickText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
const smallText = 'Last updated 3 mins ago';
</script>
