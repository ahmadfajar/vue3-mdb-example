<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <BsDivider />
    <div class="bg-white border rounded-3 mt-3 shadow">
      <BsTabs v-model="tabs1active">
        <BsTab icon="home_rounded" label="Home">
          {{ homeTab }}
        </BsTab>
        <BsTab icon="person" label="Profile">
          {{ profileTab }}
        </BsTab>
        <BsTab icon="contact_phone" label="Contact">
          {{ contactTab }}
        </BsTab>
      </BsTabs>
    </div>

    <h2 class="mt-5">Tabs Variant</h2>
    <BsDivider />
    <h4 class="mt-4">Bootstrap Tabs</h4>
    <BsCard class="mt-3" shadow>
      <BsTabs
        v-model="tabs2active"
        content-transition="slide-top-bottom"
        inner-class="md-card-header"
      >
        <BsTab icon="home_rounded" label="Home">
          {{ homeTab }}
        </BsTab>
        <BsTab icon="person" label="Profile">
          {{ profileTab }}
        </BsTab>
        <BsTab disabled icon="contact_phone" label="Contact">
          {{ contactTab }}
        </BsTab>
      </BsTabs>
    </BsCard>

    <h4 class="mt-5">Bootstrap Pills</h4>
    <BsCard class="mt-3" shadow>
      <BsTabs v-model="tabs3active" inner-class="md-card-header" variant="pills">
        <BsTab icon="home_rounded" label="Home">
          {{ homeTab }}
        </BsTab>
        <BsTab icon="person" label="Profile">
          {{ profileTab }}
        </BsTab>
        <BsTab disabled icon="contact_phone" label="Contact">
          {{ contactTab }}
        </BsTab>
      </BsTabs>
    </BsCard>

    <h4 class="mt-5">Material</h4>
    <BsCard class="mt-3" shadow>
      <BsAppContainer>
        <BsAppbar class="bg-pink-800">
          <BsButton color="light" flat icon="menu" mode="icon" />
          <BsAppbarTitle class="text-white" title="Page Title" />
          <BsSpacer />
          <BsButton color="light" flat icon="more_vert" mode="icon" />
        </BsAppbar>
        <BsTabs v-model="tabs4active" color="bg-pink-800" variant="material">
          <BsTab icon="home_rounded" label="Home">
            {{ homeTab }}
          </BsTab>
          <BsTab icon="person" label="Profile">
            {{ profileTab }}
          </BsTab>
          <BsTab icon="contact_phone" label="Contact">
            {{ contactTab }}
          </BsTab>
          <BsTab disabled icon="collections" label="Gallery">
            {{ loremTab }}
          </BsTab>
        </BsTabs>
      </BsAppContainer>
    </BsCard>

    <h4 class="mt-5">Modern</h4>
    <BsCard class="mt-3" shadow>
      <BsAppContainer>
        <BsAppbar class="bg-indigo-700">
          <BsButton color="light" flat icon="menu" mode="icon" />
          <BsAppbarTitle class="text-white" title="Page Title" />
          <BsSpacer />
          <BsButton color="light" flat icon="more_vert" mode="icon" />
        </BsAppbar>
        <BsTabs v-model="tabs5active" color="bg-indigo-700" variant="modern">
          <BsTab icon="home_rounded" label="Home">
            {{ homeTab }}
          </BsTab>
          <BsTab icon="person" label="Profile">
            {{ profileTab }}
          </BsTab>
          <BsTab icon="contact_phone" label="Contact">
            {{ contactTab }}
          </BsTab>
          <BsTab disabled icon="collections" label="Gallery">
            {{ loremTab }}
          </BsTab>
        </BsTabs>
      </BsAppContainer>
    </BsCard>

    <h2 class="mt-5">Extra Slot</h2>
    <BsCard class="mt-3" shadow>
      <BsAppContainer>
        <BsAppbar class="bg-indigo-700">
          <BsButton color="light" flat icon="menu" mode="icon" />
          <BsAppbarTitle class="text-white" title="Page Title" />
          <BsSpacer />
          <BsButton color="light" flat icon="more_vert" mode="icon" />
        </BsAppbar>
        <BsTabs v-model="tabs7active" color="bg-indigo-700" variant="modern">
          <BsTab icon="home_rounded" label="Home">
            {{ homeTab }}
          </BsTab>
          <BsTab icon="person" label="Profile">
            {{ profileTab }}
          </BsTab>
          <BsTab icon="contact_phone" label="Contact">
            {{ contactTab }}
          </BsTab>
          <BsTab icon="collections" label="Gallery">
            {{ loremTab }}
          </BsTab>
          <template #append-header>
            <BsButton color="light" flat icon="favorite_filled" mode="icon" />
          </template>
        </BsTabs>
      </BsAppContainer>
    </BsCard>

    <h2 class="mt-5">Playground</h2>
    <BsDivider />
    <BsCard class="mt-3" shadow>
      <BsAppContainer style="min-height: 540px">
        <BsAppbar class="bg-deep-purple-800">
          <BsButton color="light" flat icon="menu" mode="icon" />
          <BsAppbarTitle class="text-white" title="Tabs Playground" />
          <BsSpacer />
          <BsButton color="light" flat icon="more_vert" mode="icon" />
        </BsAppbar>
        <BsTabs
          v-model="tabs6active"
          :alignment="selectedAlignment"
          :icon-position="selectedIconPosition"
          :inner-class="innerClass"
          :tab-position="selectedPlacement"
          :variant="selectedVariant"
          color="bg-deep-purple-800"
          content-class="flex-grow"
        >
          <BsTab :label="!iconOnly ? 'Configuration' : undefined" icon="settings">
            <h3>Let's play with Tabs</h3>
            <BsDivider />
            <div class="row mt-5">
              <div class="col-12 col-xxl-6">
                <BsRadioGroup v-model="selectedVariant" :items="variants" column="2">
                  <label class="col-md-4 col-form-label font-weight-semibold">
                    Tabs Variants
                  </label>
                </BsRadioGroup>
                <BsRadioGroup
                  v-model="selectedPlacement"
                  :items="placements"
                  class="mt-3"
                  column="2"
                >
                  <label class="col-md-4 col-form-label font-weight-semibold">
                    Tabs Placement
                  </label>
                </BsRadioGroup>
                <BsRadioGroup
                  v-model="selectedAlignment"
                  :items="tabAlignments"
                  class="mt-3"
                  column="2"
                >
                  <label class="col-md-4 col-form-label font-weight-semibold">
                    Tabs Alignment
                  </label>
                </BsRadioGroup>
              </div>
              <div class="col-12 col-xxl-6">
                <BsRadioGroup
                  v-model="selectedIconPosition"
                  :items="iconPositions"
                  class="mt-3 mt-xxl-0"
                  column="2"
                >
                  <label class="col-md-4 col-form-label font-weight-semibold">
                    Icon Position
                  </label>
                </BsRadioGroup>
                <BsRadioGroup v-model="iconOnly" :items="iconLabels" class="mt-3" column="1">
                  <label class="col-md-4 col-form-label font-weight-semibold">Icon & Label</label>
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
      </BsAppContainer>
    </BsCard>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TAlignment, TPlacementPosition, TTabsVariant } from 'vue-mdbootstrap';

const tabs1active = ref(1);
const tabs2active = ref(0);
const tabs3active = ref(0);
const tabs4active = ref(0);
const tabs5active = ref(0);
const tabs6active = ref(0);
const tabs7active = ref(0);

const variants = [
  { label: 'Tabs', value: 'tabs' },
  { label: 'Pills', value: 'pills' },
  { label: 'Material', value: 'material' },
  { label: 'Modern', value: 'modern' },
];
const placements = [
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
];
const tabAlignments = [
  { label: 'Start', value: 'start' },
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' },
  { label: 'Justified', value: 'justified' },
];
const iconPositions = [
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
];
const iconLabels = [
  { label: 'Show icon and Label', value: false },
  { label: 'Show icon only', value: true },
];

const selectedVariant = ref<TTabsVariant>('modern');
const selectedPlacement = ref<TPlacementPosition>('top');
const selectedIconPosition = ref<TPlacementPosition>('left');
const selectedAlignment = ref<TAlignment>('start');
const iconOnly = ref(false);

const innerClass = computed(() => {
  if (['tabs', 'pills'].includes(selectedVariant.value) && selectedPlacement.value === 'top') {
    return ['md-card-header'];
  } else if (
    ['tabs', 'pills'].includes(selectedVariant.value) &&
    selectedPlacement.value === 'bottom'
  ) {
    return ['md-card-footer'];
  }
  return undefined;
});

// prettier-ignore
const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
// prettier-ignore
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
// prettier-ignore
const contactTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
// prettier-ignore
const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.';
</script>
