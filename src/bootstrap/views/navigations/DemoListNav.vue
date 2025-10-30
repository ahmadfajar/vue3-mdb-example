<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <BsDivider />
    <BsAppContainer>
      <div class="demo-block-content bg-gray-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-purple-900" shadow>
            <BsButton color="light" flat icon="menu" mode="icon" />
            <BsAppbarTitle class="text-white" title="Menus" />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="folder_filled" label="My Files" />
              <BsListNavItem icon="folder_shared_filled" label="Shared with me" />
              <BsListNavItem icon="star_filled" label="Starred" />
              <BsListNavItem icon="upload" label="Upload" />
              <BsListNavItem icon="backup" label="Backup" />
              <BsListNavItem icon="delete" label="Trash" />
            </BsListNav>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>

    <h2 class="mt-5">Nested Navigation</h2>
    <BsDivider />
    <BsAppContainer>
      <div class="demo-block-content bg-gray-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-purple-900" shadow>
            <BsButton color="light" flat icon="menu" mode="icon" />
            <BsAppbarTitle class="text-white" title="Topics" />
            <BsSpacer />
            <BsButton color="light" flat icon="more_vert" mode="icon" />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="widgets" label="Attractions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem disabled label="Topic 2" />
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
          <BsAppbar class="bg-purple-900" shadow>
            <BsButton color="light" flat icon="menu" mode="icon" />
            <BsAppbarTitle class="text-white" title="Topics" />
            <BsSpacer />
            <BsButton color="light" flat icon="more_vert" mode="icon" />
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem label="Attractions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1" />
                  <BsListNavItem disabled label="Topic 2" />
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
    <BsAppContainer>
      <div class="demo-block-content bg-gray-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-deep-purple-800" shadow>
            <BsButton color="light" flat icon="menu" mode="icon" />
            <BsAppbarTitle class="text-white" title="Mail" />
            <BsSpacer />
            <BsButton color="light" flat icon="more_vert" mode="icon" />
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
                <BsBadge type="pill" variant="secondary">102</BsBadge>
              </BsListTileAction>
            </BsListTile>
            <BsListTile navigable>
              <BsListTileLeading icon="delete" />
              <BsListTileContent>
                <BsListTileTitle>Trash</BsListTileTitle>
              </BsListTileContent>
              <BsListTileAction center>
                <BsBadge type="pill" variant="secondary">12</BsBadge>
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
    <BsAppContainer class="bg-gray-400 mt-4 rounded-3 shadow">
      <BsAppbar class="bg-default-color-dark" clipped-left shadow>
        <BsButton
          color="light"
          flat
          icon="menu"
          mode="icon"
          @click="toggleSideDrawer1(!openSideDrawer1)"
        />
        <BsAppbarTitle class="text-white" title="Page Title" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="light" flat icon="search" mode="icon" />
          <BsButton color="light" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsSideDrawer v-model:open="openSideDrawer1" style="--sidedrawer-background: #fff">
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
        <div class="container-fluid flex justify-center items-center"></div>
      </BsContainer>
    </BsAppContainer>

    <h2 class="mt-5">Playground</h2>
    <BsDivider />
    <BsAppContainer>
      <div class="demo-block-content bg-gray-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar class="bg-deep-purple-800" shadow>
            <BsButton color="light" flat icon="menu" mode="icon" />
            <BsAppbarTitle class="text-white" title="Menus" />
            <BsSpacer />
            <BsButton color="light" flat icon="more_vert" mode="icon" />
          </BsAppbar>
          <BsListView
            :item-border-variant="getItemBorderVariant"
            :item-rounded="itemStyle === 'rounded'"
            :item-rounded-pill="itemStyle === 'pill'"
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
    </BsAppContainer>

    <h4 class="mt-4">ListView properties:</h4>
    <BsRadioGroup v-model="spaceAround" :items="spaceAroundTypes" column="3">
      <label class="col-md-3 col-form-label font-weight-semibold">Space Around</label>
    </BsRadioGroup>
    <BsRadioGroup v-model="itemBorderVariant" :items="itemBorderVariants" class="mt-3" column="3">
      <label class="col-md-3 col-form-label font-weight-semibold">Item Border Variant</label>
    </BsRadioGroup>
    <BsRadioGroup v-model="itemStyle" :items="itemStyles" class="mt-3" column="3">
      <label class="col-md-3 col-form-label font-weight-semibold">Item Style</label>
    </BsRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TListItemBorder, TSpaceAround } from 'vue-mdbootstrap';

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
const getItemBorderVariant = computed<TListItemBorder | undefined>(() =>
  itemBorderVariant.value === 'none' ? undefined : (itemBorderVariant.value as TListItemBorder)
);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = value;
}
</script>
