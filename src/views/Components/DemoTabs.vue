<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <div class="bg-white">
        <BsTabs v-model="tabs1active">
          <BsTab label="Home" icon="home_rounded">
            {{ homeTab }}
          </BsTab>
          <BsTab label="Profile" icon="person">
            {{ profileTab }}
          </BsTab>
          <BsTab label="Contact" icon="contact_phone">
            {{ contactTab }}
          </BsTab>
        </BsTabs>
      </div>
    </div>
    <h2 class="mt-5">
      Tabs Variant
    </h2>
    <BsDivider/>
    <h4 class="mt-4">
      Bootstrap Tabs style variant
    </h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard shadow>
        <BsTabs
          v-model="tabs2active"
          inner-class="card-header"
          content-transition="slide-top-bottom">
          <BsTab label="Home" icon="home_rounded">
            {{ homeTab }}
          </BsTab>
          <BsTab label="Profile" icon="person">
            {{ profileTab }}
          </BsTab>
          <BsTab label="Contact" icon="contact_phone">
            {{ contactTab }}
          </BsTab>
        </BsTabs>
      </BsCard>
    </div>
    <h4 class="mt-5">
      Bootstrap Pills style variant
    </h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard shadow>
        <BsTabs
          v-model="tabs3active"
          inner-class="card-header"
          variant="pills">
          <BsTab label="Home" icon="home_rounded">
            {{ homeTab }}
          </BsTab>
          <BsTab label="Profile" icon="person">
            {{ profileTab }}
          </BsTab>
          <BsTab label="Contact" icon="contact_phone">
            {{ contactTab }}
          </BsTab>
        </BsTabs>
      </BsCard>
    </div>
    <h4 class="mt-5">
      Material style variant
    </h4>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="rounded-sm" shadow>
          <BsAppbar class="bg-pink darken-2">
            <BsButton
              mode="icon"
              color="light"
              icon="menu"
              flat/>
            <BsAppbarTitle title="Page Title" class="text-white"/>
            <BsSpacer/>
            <BsButton
              color="light"
              mode="icon"
              icon="more_vert"
              flat/>
          </BsAppbar>
          <BsTabs
            v-model="tabs4active"
            variant="material"
            color="pink darken-2">
            <BsTab label="Home" icon="home_rounded">
              {{ homeTab }}
            </BsTab>
            <BsTab label="Profile" icon="person">
              {{ profileTab }}
            </BsTab>
            <BsTab label="Contact" icon="contact_phone">
              {{ contactTab }}
            </BsTab>
            <BsTab label="Gallery" icon="collections">
              {{ loremTab }}
            </BsTab>
          </BsTabs>
        </BsCard>
      </div>
    </BsAppContainer>
    <h4 class="mt-5">
      Modern style variant
    </h4>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="rounded-sm" shadow>
          <BsAppbar class="bg-default-color-dark">
            <BsButton
              mode="icon"
              color="light"
              icon="menu"
              flat/>
            <BsAppbarTitle title="Page Title" class="text-white"/>
            <BsSpacer/>
            <BsButton
              color="light"
              mode="icon"
              icon="more_vert"
              flat/>
          </BsAppbar>
          <BsTabs
            v-model="tabs5active"
            variant="modern"
            color="default-color-dark">
            <BsTab label="Home" icon="home_rounded">
              {{ homeTab }}
            </BsTab>
            <BsTab label="Profile" icon="person">
              {{ profileTab }}
            </BsTab>
            <BsTab label="Contact" icon="contact_phone">
              {{ contactTab }}
            </BsTab>
            <BsTab label="Gallery" icon="collections">
              {{ loremTab }}
            </BsTab>
          </BsTabs>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">
      Playground
    </h2>
    <BsDivider/>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard
          class="rounded-sm"
          style="min-height: 600px"
          shadow>
          <BsAppbar class="bg-default-color-dark">
            <BsButton
              mode="icon"
              color="light"
              icon="menu"
              flat/>
            <BsAppbarTitle title="Tabs Playground" class="text-white"/>
            <BsSpacer/>
            <BsButton
              color="light"
              mode="icon"
              icon="more_vert"
              flat/>
          </BsAppbar>
          <BsTabs
            v-model="tabs6active"
            :variant="selectedVariant"
            :alignment="selectedAlignment"
            :tab-position="selectedPlacement"
            :icon-position="selectedIconPosition"
            :flex="tabFlex"
            :inner-class="innerClass"
            color="default-color-dark">
            <BsTab :label="!iconOnly ? 'Configuration' : undefined" icon="settings">
              <h3>Let's Play with BsTabs</h3>
              <BsDivider/>
              <div class="row mt-5">
                <div class="col-12 col-xxl-6">
                  <BsRadioGroup
                    v-model="selectedVariant"
                    :items="variants"
                    color="default-color-dark"
                    column="2">
                    <label class="col-md-4 col-form-label md-fw-semibold">Tabs Variants</label>
                  </BsRadioGroup>
                  <BsRadioGroup
                    v-model="selectedPlacement"
                    :items="placements"
                    class="mt-3"
                    color="default-color-dark"
                    column="2">
                    <label class="col-md-4 col-form-label md-fw-semibold">Tabs Placement</label>
                  </BsRadioGroup>
                  <BsRadioGroup
                    v-model="selectedAlignment"
                    :items="tabAlignments"
                    class="mt-3"
                    color="default-color-dark"
                    column="2">
                    <label class="col-md-4 col-form-label md-fw-semibold">Tabs Alignment</label>
                  </BsRadioGroup>
                  <BsRadioGroup
                    v-model="tabFlex"
                    :items="tabFlexStyles"
                    class="mt-3"
                    color="default-color-dark"
                    column="2">
                    <label class="col-md-4 col-form-label md-fw-semibold">Tabs Flex</label>
                  </BsRadioGroup>
                </div>
                <div class="col-12 col-xxl-6">
                  <BsRadioGroup
                    v-model="selectedIconPosition"
                    :items="iconPositions"
                    class="mt-3 mt-xxl-0"
                    color="default-color-dark"
                    column="2">
                    <label class="col-md-4 col-form-label md-fw-semibold">Icon Position</label>
                  </BsRadioGroup>
                  <BsRadioGroup
                    v-model="iconOnly"
                    :items="iconLabels"
                    class="mt-3"
                    color="default-color-dark"
                    column="1">
                    <label class="col-md-4 col-form-label md-fw-semibold">Icon & Label</label>
                  </BsRadioGroup>
                </div>
              </div>
            </BsTab>
            <BsTab :label="!iconOnly ? 'Gallery' : undefined" icon="collections">
              {{ loremTab }}
            </BsTab>
            <BsTab :label="!iconOnly ? 'Profile' : undefined" icon="person">
              {{ profileTab }}
            </BsTab>
            <BsTab :label="!iconOnly ? 'Contact' : undefined" icon="contact_phone">
              {{ contactTab }}
            </BsTab>
          </BsTabs>
        </BsCard>
      </div>
    </BsAppContainer>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const tabs1active = ref(2)
const tabs2active = ref(0)
const tabs3active = ref(0)
const tabs4active = ref(0)
const tabs5active = ref(0)
const tabs6active = ref(0)
const variants = [
  { label: 'Tabs', value: 'tabs' },
  { label: 'Pills', value: 'pills' },
  { label: 'Material', value: 'material' },
  { label: 'Modern', value: 'modern' }
]
const placements = [
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' }
]
const tabAlignments = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
  { label: 'Justified', value: 'justified' }
]
const tabFlexStyles = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
]
const iconPositions = [
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' }
]
const iconLabels = [
  { label: 'Show icon and Label', value: false },
  { label: 'Show icon only', value: true }
]

const selectedVariant = ref<string>('modern')
const selectedPlacement = ref<string>('top')
const selectedIconPosition = ref<string>('left')
const selectedAlignment = ref<string>('left')
const iconOnly = ref(false)
const tabFlex = ref(false)

const innerClass = computed(
  () => {
    if (['tabs', 'pills'].includes(selectedVariant.value) && selectedPlacement.value === 'top') {
      return ['card-header']
    } else if (['tabs', 'pills'].includes(selectedVariant.value) && selectedPlacement.value === 'bottom') {
      return ['card-footer']
    }
    return undefined
  }
)

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr."
const contactTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog."
const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.'
</script>

<style scoped>
</style>
