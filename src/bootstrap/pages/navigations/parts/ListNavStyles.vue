<script setup lang="ts">
import { setupListViewNavigation } from '@shares/listTileApi.ts';
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import { ref } from 'vue';
import type { TSpaceAround } from 'vue-mdbootstrap';
import Example from '../examples/ListNavExample6.vue?raw';

const fmtVueTpl = ref<string>();
const spaceAround = ref<TSpaceAround>('none');
const borderVariant = ref<string>('none');
const itemStyle = ref<string>('none');
const rawTemplate = parseVueTemplateTag(Example);

const { itemBorderVariant, spaceAroundSrc, borderVariantSrc, itemStyleSrc } =
  setupListViewNavigation(rawTemplate, fmtVueTpl, spaceAround, borderVariant, itemStyle);

const contentCls = ['min-h-40 p-2 p-md-5 rounded-3 text-bg-surface'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Navigation Styles</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">ListView properties:</h5>

        <BsCombobox v-model="spaceAround" :data-source="spaceAroundSrc" filled floating-label>
          <label>Space Around:</label>
        </BsCombobox>
        <BsCombobox v-model="borderVariant" :data-source="borderVariantSrc" filled floating-label>
          <label>Item Border Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="itemStyle" :data-source="itemStyleSrc" filled floating-label>
          <label>Item Style:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsApp class="p-2">
            <BsCard class="w-full mx-auto" shadow style="max-width: 400px">
              <BsAppbar class="bg-indigo" shadow>
                <BsButton color="light" flat icon="menu" mode="icon" />
                <BsAppbarTitle class="text-white" title="Menus" />
                <BsSpacer />
                <BsButton color="light" flat icon="more_vert" mode="icon" />
              </BsAppbar>
              <BsListView
                :item-border-variant="itemBorderVariant"
                :item-rounded="itemStyle === 'rounded'"
                :item-rounded-pill="itemStyle === 'rounded-pill'"
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
                <BsDivider />
                <BsListNav>
                  <BsListNavItem
                    badge="102"
                    badge-color="bg-gray-400"
                    badge-type="pill"
                    icon="email"
                    label="All Mail"
                  />
                  <BsListNavItem
                    badge="25"
                    badge-color="bg-gray-400"
                    badge-type="pill"
                    icon="gpp_maybe"
                    label="Spam"
                  />
                  <BsListNavItem
                    badge="12"
                    badge-color="bg-gray-400"
                    badge-type="pill"
                    icon="delete"
                    label="Trash"
                  />
                </BsListNav>
              </BsListView>
            </BsCard>
          </BsApp>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
