<script setup lang="ts">
import {
  changeItemBorderVariant,
  changeItemPadding,
  changeItemStyle,
  dsItemBorderVariants,
  dsItemStyles,
  dsSpaceAroundTypes,
} from '@shares/listTileApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { addWatcherForDefaultValue } from '@shares/showcaseDataApi.ts';
import { computed, onBeforeUnmount, ref, watchEffect } from 'vue';
import type { TListItemBorder, TSpaceAround } from 'vue-mdbootstrap';

const example = await import('../examples/ListTileExample9.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();
const spaceAround = ref<TSpaceAround>('none');
const borderVariant = ref<string>('none');
const itemStyle = ref<string>('none');

rawTemplate.value = parseVueTemplateTag(example.default);

const itemBorderVariant = computed<TListItemBorder | undefined>(() =>
  borderVariant.value === 'none' ? undefined : (borderVariant.value as TListItemBorder)
);

addWatcherForDefaultValue(
  { refObj: spaceAround, default: 'none' },
  { refObj: borderVariant, default: 'none' },
  { refObj: itemStyle, default: 'none' }
);

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeItemBorderVariant(itemBorderVariant, rawTemplate.value!);
  rawCode = changeItemStyle(itemStyle, rawCode);
  rawCode = changeItemPadding(spaceAround, rawCode);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false)
    ?.replace(/\s+(>)/g, '>')
    ?.replace(/(ListView)\s{2,}/g, 'ListView ');
});

const spaceAroundSrc = dsSpaceAroundTypes();
const borderVariantSrc = dsItemBorderVariants();
const itemStyleSrc = dsItemStyles();
const contentCls = ['min-h-40 py-8 px-3 lg:px-8 md:rounded-lg text-bg-surface'];

onBeforeUnmount(() => {
  spaceAroundSrc.proxy.destroy();
  borderVariantSrc.proxy.destroy();
  itemStyleSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
            <BsCard class="w-full max-w-100 mx-auto" shadow>
              <BsAppbar class="bg-indigo-700" clipped-left>
                <BsButton color="light" flat icon="menu" mode="icon" />
                <BsAppbarTitle class="text-white" title="Menus" />
                <BsSpacer />
                <BsAppbarItems>
                  <BsButton color="light" flat icon="search" mode="icon" />
                  <BsButton color="light" flat icon="notifications" mode="icon" />
                </BsAppbarItems>
              </BsAppbar>
              <BsListView
                :item-border-variant="itemBorderVariant"
                :item-rounded="itemStyle === 'rounded'"
                :item-rounded-pill="itemStyle === 'rounded-pill'"
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
                <BsDivider />
                <BsListTile navigable>
                  <BsListTileLeading icon="email" />
                  <BsListTileContent>
                    <BsListTileTitle>All Mail</BsListTileTitle>
                  </BsListTileContent>
                  <BsListTileAction center>
                    <BsBadge color="bg-gray-400" type="pill"> 102 </BsBadge>
                  </BsListTileAction>
                </BsListTile>
                <BsListTile navigable>
                  <BsListTileLeading icon="gpp_maybe" />
                  <BsListTileContent>
                    <BsListTileTitle>Spam</BsListTileTitle>
                  </BsListTileContent>
                  <BsListTileAction center>
                    <BsBadge color="bg-gray-400" type="pill"> 12 </BsBadge>
                  </BsListTileAction>
                </BsListTile>
                <BsListTile navigable>
                  <BsListTileLeading icon="delete" />
                  <BsListTileContent>
                    <BsListTileTitle>Trash</BsListTileTitle>
                  </BsListTileContent>
                  <BsListTileAction center>
                    <BsBadge color="bg-gray-400" type="pill"> 8 </BsBadge>
                  </BsListTileAction>
                </BsListTile>
              </BsListView>
            </BsCard>
          </BsApp>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
