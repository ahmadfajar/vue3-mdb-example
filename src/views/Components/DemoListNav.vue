<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-purple darken-3 rounded-top" shadow>
            <BsButton mode="icon" color="light-grey" icon="menu" flat />
            <BsAppbarTitle title="Menus" class="text-white" />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="folder" label="My Files" />
              <BsListNavItem icon="folder-shared" label="Shared with me" />
              <BsListNavItem icon="star" label="Starred" />
              <BsListNavItem icon="upload" label="Upload" />
              <BsListNavItem icon="cloud_upload" label="Backup" />
              <BsListNavItem icon="delete" label="Trash" />
            </BsListNav>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">Nested Navigation</h2>
    <BsDivider />
    <BsAppContainer class="overflow-hidden">
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-purple darken-3 rounded-top" shadow>
            <BsButton mode="icon" color="light-grey" icon="menu" flat />
            <BsAppbarTitle title="Topics" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" icon="more_vert" mode="icon" flat />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="widgets" label="Attractions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" disabled />
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="restaurant" label="Dining">
                <BsListNav child>
                  <BsListNavItem label="Breakfast" />
                  <BsListNavItem label="Sushi" />
                  <BsListNavItem label="Pizza" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="school" label="Education">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2">
                    <BsListNav child>
                      <BsListNavItem label="Topic 2.1" />
                      <BsListNavItem label="Topic 2.2" />
                      <BsListNavItem label="Topic 2.3" />
                    </BsListNav>
                  </BsListNavItem>
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="people" label="Family">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="medication" label="Health">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="warehouse" label="Office">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="redeem" label="Promotions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2">
                    <BsListNav child>
                      <BsListNavItem label="Topic 2.1" />
                      <BsListNavItem label="Topic 2.2" />
                      <BsListNavItem label="Topic 2.3" />
                    </BsListNav>
                  </BsListNavItem>
                </BsListNav>
              </BsListNavItem>
            </BsListNav>
          </BsListView>
        </BsCard>
        <BsCard class="mobi-card mx-auto mt-3" shadow>
          <BsAppbar class="bg-purple darken-3 rounded-top" shadow>
            <BsButton mode="icon" color="light-grey" icon="menu" flat />
            <BsAppbarTitle title="Topics" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" icon="more_vert" mode="icon" flat />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem label="Attractions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" disabled />
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Dining">
                <BsListNav child>
                  <BsListNavItem label="Breakfast" />
                  <BsListNavItem label="Sushi" />
                  <BsListNavItem label="Pizza" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Education">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2">
                    <BsListNav child>
                      <BsListNavItem label="Topic 2.1" />
                      <BsListNavItem label="Topic 2.2" />
                      <BsListNavItem label="Topic 2.3" />
                    </BsListNav>
                  </BsListNavItem>
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Family">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Health">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                  <BsListNavItem label="Topic 3" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Office">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem label="Promotions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem label="Topic 2">
                    <BsListNav child>
                      <BsListNavItem label="Topic 2.1" />
                      <BsListNavItem label="Topic 2.2" />
                      <BsListNavItem label="Topic 2.3" />
                    </BsListNav>
                  </BsListNavItem>
                </BsListNav>
              </BsListNavItem>
            </BsListNav>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">Mixed With ListTile</h2>
    <BsDivider />
    <BsAppContainer class="overflow-hidden">
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-deep-purple darken-2 rounded-top" shadow>
            <BsButton mode="icon" color="light-grey" icon="menu" flat />
            <BsAppbarTitle title="Mail" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" icon="more_vert" mode="icon" flat />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="inbox" label="Inbox">
                <BsListNav child>
                  <BsListNavItem label="Primary" />
                  <BsListNavItem label="Social" />
                  <BsListNavItem label="Promotions" />
                  <BsListNavItem label="Updates" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="bookmarks" label="Important" />
              <BsListNavItem icon="send" label="Sent" />
              <BsListNavItem icon="description" label="Drafts" />
            </BsListNav>
            <BsDivider class="my-2" />
            <BsListTile navigable>
              <BsListTileLeading icon="email" />
              <BsListTileContent>
                <BsListTileTitle>All Mail</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" variant="secondary"> 102 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="delete" />
              <BsListTileContent>
                <BsListTileTitle>Trash</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" variant="secondary"> 12 </BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="gpp_maybe" />
              <BsListTileContent>
                <BsListTileTitle>Spam</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" variant="secondary"> 8 </BsBadge>
              </BsListTileAction>
            </BsListTile>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">List Nav Used Inside SideDrawer</h2>
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
              src="https://ahmadfajar.github.io/img/kitty-1.jpg"
              style="width: 40px"
            />
            <span class="h5 ps-3">Kitty Doe</span>
          </div>
          <BsDivider />
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="inbox" label="Inbox">
                <BsListNav child>
                  <BsListNavItem label="Primary" />
                  <BsListNavItem label="Social" />
                  <BsListNavItem label="Promotions" />
                  <BsListNavItem label="Updates" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="bookmarks" label="Important" />
              <BsListNavItem icon="send" label="Sent" />
              <BsListNavItem icon="description" label="Drafts" />
            </BsListNav>
            <BsDivider class="my-2" />
            <BsListNav>
              <BsListNavItem
                badge="102"
                badge-type="pill"
                badge-variant="secondary"
                icon="email"
                label="All Mail"
              />
              <BsListNavItem
                badge="12"
                badge-type="pill"
                badge-variant="secondary"
                icon="delete"
                label="Trash"
              />
              <BsListNavItem
                badge="8"
                badge-type="pill"
                badge-variant="secondary"
                icon="gpp_maybe"
                label="Spam"
              />
            </BsListNav>
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
          <BsAppbar class="bg-deep-purple darken-2 rounded-top" shadow>
            <BsButton mode="icon" color="light-grey" icon="menu" flat />
            <BsAppbarTitle title="Menus" class="text-white" />
            <BsSpacer />
            <BsButton color="light-grey" icon="more_vert" mode="icon" flat />
          </BsAppbar>
          <BsListView
            :item-rounded="itemStyle === 'rounded'"
            :item-rounded-pill="itemStyle === 'pill'"
            :item-border-variant="getItemBorderVariant"
            :space-around="spaceAround"
          >
            <BsListNav>
              <BsListNavItem icon="inbox" label="Inbox">
                <BsListNav child>
                  <BsListNavItem label="Primary" />
                  <BsListNavItem label="Social" />
                  <BsListNavItem label="Promotions" />
                  <BsListNavItem label="Updates" />
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="bookmarks" label="Important" />
              <BsListNavItem icon="send" label="Sent" />
              <BsListNavItem icon="description" label="Drafts" />
            </BsListNav>
            <BsDivider class="my-2" />
            <BsListNav>
              <BsListNavItem
                badge="102"
                badge-type="pill"
                badge-variant="secondary"
                icon="email"
                label="All Mail"
              />
              <BsListNavItem
                badge="12"
                badge-type="pill"
                badge-variant="secondary"
                icon="delete"
                label="Trash"
              />
              <BsListNavItem
                badge="8"
                badge-type="pill"
                badge-variant="secondary"
                icon="gpp_maybe"
                label="Spam"
              />
            </BsListNav>
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
  { label: 'None', value: 'none' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Both', value: 'both' },
];
const spaceAround = ref<TSpaceAround>('none');
const itemBorderVariants = [
  { label: 'None', value: 'none' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Left & Right', value: 'left-right' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top & Bottom', value: 'top-bottom' },
];
const itemBorderVariant = ref<string>('none');
const itemStyles = [
  { label: 'None', value: 'none' },
  { label: 'Rounded', value: 'rounded' },
  { label: 'Rounded-Pill', value: 'pill' },
];
const itemStyle = ref<string>('none');
const openSideDrawer1 = ref(true);
const getItemBorderVariant = computed<string | undefined>(() =>
  itemBorderVariant.value === 'none' ? undefined : itemBorderVariant.value
);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = value;
}
</script>
