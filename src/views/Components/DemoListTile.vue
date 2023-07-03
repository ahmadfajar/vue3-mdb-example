<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <h4 class="mt-4">Basic Example</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard class="mx-auto" shadow style="max-width: 400px">
        <BsListView>
          <BsSubheader>Today</BsSubheader>
          <template v-for="(item, index) in listItems1" :key="item.title">
            <BsListTile>
              <BsListTileLeading :img-src="item.avatar" size="40" circle />
              <BsListTileContent multi-line>
                <BsListTileTitle class="fw-semibold">
                  {{ item.title }}
                </BsListTileTitle>
                <BsListTileSubtitle :raw-html="item.subtitle" />
              </BsListTileContent>
            </BsListTile>
            <BsDivider
              v-if="index + 1 < listItems1.length"
              :key="item.title + index"
              left-indent="70"
            />
          </template>
        </BsListView>
        <BsCardBody>
          <BsCardContent type="title"> Another Content Title </BsCardContent>
          <BsCardContent>
            {{ content }}
          </BsCardContent>
        </BsCardBody>
      </BsCard>
    </div>
    <h4 class="mt-5">Contact Details Example</h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard class="mx-auto" shadow style="max-width: 400px">
        <BsCardMedia title="Jonathan Smith">
          <img src="https://picsum.photos/id/91/600/350.jpg?blur=2" alt="image" />
        </BsCardMedia>
        <BsListView>
          <BsListTile>
            <BsListTileLeading class="text-info" icon="phone" />
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold"> 0821-5555-1234 </BsListTileTitle>
              <BsListTileSubtitle> Mobile | Indonesia </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsListTile>
            <BsListTileLeading class="md-has-icon" size="24" />
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold"> +6221-4444-6789 </BsListTileTitle>
              <BsListTileSubtitle> Work | Indonesia </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsDivider left-indent="70" />
          <BsListTile>
            <BsListTileLeading class="text-info" icon="email" />
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold"> jonathan.smith@company.com </BsListTileTitle>
              <BsListTileSubtitle> Work </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsListTile>
            <BsListTileLeading class="md-has-icon" size="24" />
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold"> jonathan.smith212@example.com </BsListTileTitle>
              <BsListTileSubtitle> Personal </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsDivider left-indent="70" />
          <BsListTile>
            <BsListTileLeading class="text-info" icon="place" />
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold"> 1400 Main Street </BsListTileTitle>
              <BsListTileSubtitle> Jakarta, Indonesia </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
        </BsListView>
      </BsCard>
    </div>
    <h2 class="mt-5">List Tile With Manageable State</h2>
    <BsDivider />
    <h4 class="mt-4">State manage by ListView</h4>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-default-color-dark" shadow>
            <BsButton mode="icon" icon="menu" color="light-grey" flat />
            <BsAppbarTitle title="My Recipes" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" mode="icon" icon="search" flat />
          </BsAppbar>
          <BsListView>
            <BsSubheader>Summer Recipes</BsSubheader>
            <template v-for="(item, index) in listItems2" :key="item.title">
              <BsListTile navigable :disabled="index === 2">
                <BsListTileLeading :img-src="item.avatar" :size="{ height: 56, width: 85 }" />
                <BsListTileContent multi-line>
                  <BsListTileTitle class="md-fw-semibold">
                    {{ item.title }}
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    {{ item.text }}
                  </BsListTileSubtitle>
                </BsListTileContent>
                <BsListTileAction class="rating"> 0{{ index + 1 }} </BsListTileAction>
              </BsListTile>
              <BsDivider
                v-if="index + 1 < listItems2.length"
                :key="item.title + index"
                left-indent="118"
              />
            </template>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h4 class="mt-5">State manage individually</h4>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-default-color-dark" shadow>
            <BsButton mode="icon" icon="menu" color="light-grey" flat />
            <BsAppbarTitle title="My Recipes" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" mode="icon" icon="search" flat />
          </BsAppbar>
          <BsListView individual-state>
            <BsSubheader>Summer Recipes</BsSubheader>
            <template v-for="(item, index) in listItems2" :key="item.title">
              <BsListTile v-model:active="item.active" navigable>
                <BsListTileLeading :img-src="item.avatar" :size="{ height: 56, width: 85 }" />
                <BsListTileContent multi-line>
                  <BsListTileTitle class="md-fw-semibold">
                    {{ item.title }}
                  </BsListTileTitle>
                  <BsListTileSubtitle>
                    {{ item.text }}
                  </BsListTileSubtitle>
                </BsListTileContent>
                <BsListTileAction class="rating"> 0{{ index + 1 }} </BsListTileAction>
              </BsListTile>
              <BsDivider
                v-if="index + 1 < listItems2.length"
                :key="item.title + index"
                left-indent="118"
              />
            </template>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">List Tile with Avatar and Icon</h2>
    <BsDivider />
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-default-color-dark" shadow>
            <BsButton mode="icon" icon="menu" color="light-grey" flat />
            <BsAppbarTitle title="Chats" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" mode="icon" icon="search" flat />
          </BsAppbar>
          <BsListView>
            <BsSubheader>Recent Chats</BsSubheader>
            <template v-for="item in listChat1" :key="item.fullName">
              <BsListTile navigable>
                <BsListTileLeading :img-src="item.avatar" circle />
                <BsListTileContent>
                  <BsListTileTitle class="md-fw-semibold">
                    {{ item.fullName }}
                  </BsListTileTitle>
                </BsListTileContent>
                <BsListTileAction center>
                  <BsIcon :class="{ 'text-info': item.active === true }" icon="chat_bubble" />
                </BsListTileAction>
              </BsListTile>
            </template>
            <BsDivider class="mt-3" />
            <BsSubheader>Previous Chats</BsSubheader>
            <template v-for="item in listChat2" :key="item.fullName">
              <BsListTile navigable>
                <BsListTileLeading :img-src="item.avatar" circle />
                <BsListTileContent>
                  <BsListTileTitle class="md-fw-semibold">
                    {{ item.fullName }}
                  </BsListTileTitle>
                </BsListTileContent>
                <BsListTileAction center>
                  <BsIcon icon="chat_bubble" />
                </BsListTileAction>
              </BsListTile>
            </template>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">List Tile Used Inside SideDrawer</h2>
    <BsDivider />
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsAppContainer class="bg-grey-400">
        <BsAppbar class="bg-default-color-dark" clipped-left shadow>
          <BsButton
            color="light-grey"
            icon="menu"
            mode="icon"
            flat
            @click="toggleSideDrawer1(!openSideDrawer1)"
          />
          <BsAppbarTitle title="Page Title" class="text-white" />
          <BsSpacer />
          <BsAppbarItems>
            <BsButton color="light-grey" icon="search" mode="icon" flat />
            <BsButton color="light-grey" icon="notifications" mode="icon" flat />
          </BsAppbarItems>
        </BsAppbar>
        <BsSideDrawer v-model:open="openSideDrawer1" class="border-end">
          <div class="p-3">
            <img
              alt="image"
              class="rounded-circle"
              src="https://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg"
              style="width: 40px"
            />
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider />
          <BsListView>
            <BsListTile navigable>
              <BsListTileLeading icon="inbox" />
              <BsListTileContent>
                <BsListTileTitle>Inbox</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="bookmarks" />
              <BsListTileContent>
                <BsListTileTitle>Important</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="send" />
              <BsListTileContent>
                <BsListTileTitle>Sent</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="description" />
              <BsListTileContent>
                <BsListTileTitle>Drafts</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsDivider class="my-2" />
            <BsListTile navigable>
              <BsListTileLeading icon="email" />
              <BsListTileContent>
                <BsListTileTitle>All Mail</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="grey-500"> 102 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="delete" />
              <BsListTileContent>
                <BsListTileTitle>Trash</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="grey-500"> 12 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="gpp_maybe" />
              <BsListTileContent>
                <BsListTileTitle>Spam</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="grey-500"> 8 </BsBadge>
              </BsListTileAction>
            </BsListTile>
          </BsListView>
        </BsSideDrawer>
        <BsContainer app style="height: 400px">
          <div class="container-fluid d-flex justify-content-center align-items-center"></div>
        </BsContainer>
      </BsAppContainer>
    </div>
    <h2 class="mt-5">Playground</h2>
    <BsDivider />
    <BsAppContainer class="overflow-hidden">
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-default-color-dark" clipped-left shadow>
            <BsButton color="light-grey" icon="menu" mode="icon" flat />
            <BsAppbarTitle title="Menus" class="text-white" />
            <BsSpacer />
            <BsAppbarItems>
              <BsButton color="light-grey" icon="search" mode="icon" flat />
              <BsButton color="light-grey" icon="notifications" mode="icon" flat />
            </BsAppbarItems>
          </BsAppbar>
          <BsListView
            :item-rounded="itemStyle === 'rounded'"
            :item-rounded-pill="itemStyle === 'pill'"
            :item-border-variant="getItemBorderVariant"
            :space-around="spaceAround"
          >
            <BsListTile navigable>
              <BsListTileLeading icon="inbox" />
              <BsListTileContent>
                <BsListTileTitle>Inbox</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="bookmarks" />
              <BsListTileContent>
                <BsListTileTitle>Important</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="send" />
              <BsListTileContent>
                <BsListTileTitle>Sent</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="description" />
              <BsListTileContent>
                <BsListTileTitle>Drafts</BsListTileTitle>
              </BsListTileContent>
            </BsListTile>
            <BsDivider class="my-2" />
            <BsListTile navigable>
              <BsListTileLeading icon="email" />
              <BsListTileContent>
                <BsListTileTitle>All Mail</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="secondary"> 102 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="delete" />
              <BsListTileContent>
                <BsListTileTitle>Trash</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="secondary"> 12 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="gpp_maybe" />
              <BsListTileContent>
                <BsListTileTitle>Spam</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" color="secondary"> 8 </BsBadge>
              </BsListTileAction>
            </BsListTile>
          </BsListView>
        </BsCard>
      </div>
      <h4 class="mt-4">ListView properties:</h4>
      <BsRadioGroup
        v-model="spaceAround"
        :items="spaceAroundTypes"
        color="default-color-dark"
        column="3"
      >
        <label class="col-md-3 col-form-label md-fw-semibold">Space Around</label>
      </BsRadioGroup>
      <BsRadioGroup
        v-model="itemBorderVariant"
        :items="itemBorderVariants"
        color="default-color-dark"
        class="mt-3"
        column="3"
      >
        <label class="col-md-3 col-form-label md-fw-semibold">Item Border Variant</label>
      </BsRadioGroup>
      <BsRadioGroup
        v-model="itemStyle"
        :items="itemStyles"
        color="default-color-dark"
        class="mt-3"
        column="3"
      >
        <label class="col-md-3 col-form-label md-fw-semibold">Item Style</label>
      </BsRadioGroup>
    </BsAppContainer>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { TSpaceAround } from 'vue-mdbootstrap';

const spaceAroundTypes = [
  { label: 'None', value: null },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Both', value: 'both' }
];
const spaceAround = ref<TSpaceAround>();
const itemBorderVariants = [
  { label: 'None', value: 'none' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Left & Right', value: 'left-right' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top & Bottom', value: 'top-bottom' }
];
const itemBorderVariant = ref<string>('none');
const itemStyles = [
  { label: 'None', value: 'none' },
  { label: 'Rounded', value: 'rounded' },
  { label: 'Rounded-Pill', value: 'pill' }
];
const itemStyle = ref<string>('none');
const getItemBorderVariant = computed<string | undefined>(() =>
  itemBorderVariant.value === 'none' ? undefined : itemBorderVariant.value
);

const listItems1 = [
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg',
    title: 'Summer BBQ',
    subtitle:
      "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/4.jpg',
    title: 'Birthday gift',
    subtitle:
      '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  }
];
const listItems2 = ref([
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
    active: true
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/grilled-eggplant.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
    active: true
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    active: true
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
    active: false
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
    active: false
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
    active: false
  }
]);
const listChat1 = [
  {
    active: true,
    fullName: 'Jason Oner',
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg'
  },
  {
    active: true,
    fullName: 'Ranee Carlson',
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'
  },
  {
    active: false,
    fullName: 'Cindy Baker',
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'
  },
  {
    active: false,
    fullName: 'Ali Connors',
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'
  }
];
const listChat2 = [
  { fullName: 'Travis Howard', avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/5.jpg' }
];
const content =
  'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';

const openSideDrawer1 = ref(true);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = value;
}
</script>

<style lang="scss">
.md-list-tile-action {
  &.rating {
    --md-tile-action-color: rgba(0, 0, 0, 0.4);
    font-size: 120%;
    font-weight: 300;
  }
}
</style>
