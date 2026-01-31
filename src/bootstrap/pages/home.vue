<script setup lang="ts">
const cardCls1 = ['h-full', 'displayed-item', 'has-img-h-32'];
const cardCls2 = ['h-full', 'displayed-item', 'has-img-h-36'];

declare type TDisplayItem = {
  title: string;
  path: string;
  image: string;
  css: string | string[];
};

declare type TDisplayGroup = {
  group: string;
  items: TDisplayItem[];
};

const displayItems = [
  {
    group: 'Buttons',
    items: [
      {
        title: 'Button',
        path: '/buttons/button',
        image: 'https://ahmadfajar.github.io/img/components/buttons.png',
        css: cardCls1,
      },
      {
        title: 'Button Groups',
        path: '/buttons/button/button-groups',
        image: 'https://ahmadfajar.github.io/img/components/button-groups.png',
        css: cardCls1,
      },
      {
        title: 'Icon Button',
        path: '/buttons/button/icon-button',
        image: 'https://ahmadfajar.github.io/img/components/button-icon.png',
        css: cardCls1,
      },
      {
        title: 'FAB Button',
        path: '/buttons/button/fab-button',
        image: 'https://ahmadfajar.github.io/img/components/button-fab.png',
        css: cardCls1,
      },
      {
        title: 'Extended FAB Button',
        path: '/buttons/button/extended-fab-button',
        image: 'https://ahmadfajar.github.io/img/components/button-fab-extended.png',
        css: cardCls1,
      },
      {
        title: 'Toggle Button',
        path: '/buttons/toggle-button',
        image: 'https://ahmadfajar.github.io/img/components/button-toggle.png',
        css: cardCls1,
      },
    ],
  },
  {
    group: 'Containment',
    items: [
      {
        title: 'AppBar',
        path: '/containment/appbar',
        image: 'https://ahmadfajar.github.io/img/components/appbar.png',
        css: cardCls2,
      },
      {
        title: 'Card',
        path: '/containment/card',
        image: 'https://ahmadfajar.github.io/img/components/card.jpg',
        css: cardCls2,
      },
      {
        title: 'Side Drawer',
        path: '/containment/side-drawer',
        image: 'https://ahmadfajar.github.io/img/components/side-drawer.jpg',
        css: cardCls2,
      },
    ],
  },
  {
    group: 'Elements',
    items: [
      {
        title: 'Alert',
        path: '/elements/alert',
        image: 'https://ahmadfajar.github.io/img/components/alert.png',
        css: cardCls1,
      },
      {
        title: 'Avatar',
        path: '/elements/avatar',
        image: 'https://ahmadfajar.github.io/img/components/avatars.png',
        css: cardCls1,
      },
      {
        title: 'Badge',
        path: '/elements/badge',
        image: 'https://ahmadfajar.github.io/img/components/badges.png',
        css: cardCls1,
      },
      {
        title: 'Dropdown Menu',
        path: '/elements/dropdown-menu',
        image: 'https://ahmadfajar.github.io/img/components/dropdown-menu.jpg',
        css: cardCls2,
      },
      {
        title: 'Image Uploader',
        path: '/elements/image-uploader',
        image: 'https://ahmadfajar.github.io/img/components/image-uploader.jpg',
        css: cardCls2,
      },
      {
        title: 'List Tile',
        path: '/elements/list-tile',
        image: 'https://ahmadfajar.github.io/img/components/list-tile.jpg',
        css: cardCls2,
      },
    ],
  },
  {
    group: 'Input Controls',
    items: [
      {
        title: 'Checkbox',
        path: '/inputs/checkbox',
        image: 'https://ahmadfajar.github.io/img/components/field-checkbox.png',
        css: cardCls2,
      },
      {
        title: 'Chip Field',
        path: '/inputs/chip-field',
        image: 'https://ahmadfajar.github.io/img/components/field-chips.png',
        css: cardCls2,
      },
      {
        title: 'Combobox',
        path: '/inputs/combobox',
        image: 'https://ahmadfajar.github.io/img/components/field-combobox.jpg',
        css: cardCls2,
      },
      {
        title: 'DateTime Field',
        path: '/inputs/datetime-field',
        image: 'https://ahmadfajar.github.io/img/components/field-datetime.jpg',
        css: cardCls2,
      },
      {
        title: 'Listbox',
        path: '/inputs/listbox',
        image: 'https://ahmadfajar.github.io/img/components/field-listbox.png',
        css: cardCls2,
      },
      {
        title: 'Numeric Field',
        path: '/inputs/numeric-field',
        image: 'https://ahmadfajar.github.io/img/components/field-numeric.png',
        css: cardCls2,
      },
      {
        title: 'Radio Button',
        path: '/inputs/radio',
        image: 'https://ahmadfajar.github.io/img/components/field-radios.png',
        css: cardCls1,
      },
      {
        title: 'Search Field',
        path: '/inputs/search-field',
        image: 'https://ahmadfajar.github.io/img/components/field-search.png',
        css: cardCls1,
      },
      {
        title: 'Switch Button',
        path: '/inputs/switch',
        image: 'https://ahmadfajar.github.io/img/components/field-switch.png',
        css: cardCls1,
      },
      {
        title: 'Text Field',
        path: '/inputs/text-field',
        image: 'https://ahmadfajar.github.io/img/components/field-text.png',
        css: cardCls1,
      },
      {
        title: 'TextArea Field',
        path: '/inputs/text-area',
        image: 'https://ahmadfajar.github.io/img/components/field-textarea.png',
        css: cardCls1,
      },
      {
        title: 'Toggle Field',
        path: '/inputs/toggle-field',
        image: 'https://ahmadfajar.github.io/img/components/field-toggle.png',
        css: cardCls1,
      },
    ],
  },
  {
    group: 'Navigations',
    items: [
      {
        title: 'Breadcrumb',
        path: '/navigations/breadcrumb',
        image: 'https://ahmadfajar.github.io/img/components/breadcrumb.png',
        css: cardCls2,
      },
      {
        title: 'List Nav',
        path: '/navigations/list-nav',
        image: 'https://ahmadfajar.github.io/img/components/list-nav.jpg',
        css: cardCls2,
      },
      {
        title: 'Tabs',
        path: '/navigations/tabs',
        image: 'https://ahmadfajar.github.io/img/components/tabs.jpg',
        css: cardCls2,
      },
    ],
  },
  {
    group: 'Other Components',
    items: [
      {
        title: 'Chips',
        path: '/chips/chip',
        image: 'https://ahmadfajar.github.io/img/components/chips.jpg',
        css: cardCls2,
      },
      {
        title: 'Color Picker',
        path: '/pickers/color-picker',
        image: 'https://ahmadfajar.github.io/img/components/color-picker.jpg',
        css: cardCls2,
      },
      {
        title: 'Date Picker',
        path: '/pickers/date-picker',
        image: 'https://ahmadfajar.github.io/img/components/date-picker.jpg',
        css: cardCls2,
      },
      {
        title: 'Icon',
        path: '/icons/icon',
        image: 'https://ahmadfajar.github.io/img/components/icons.png',
        css: cardCls1,
      },
      {
        title: 'Fontawesome Icon',
        path: '/icons/fontawesome',
        image: 'https://ahmadfajar.github.io/img/components/icon-fontawesome.png',
        css: cardCls1,
      },
      {
        title: 'Modal',
        path: '/overlays/modal',
        image: 'https://ahmadfajar.github.io/img/components/modal.png',
        css: cardCls1,
      },
      {
        title: 'Popover',
        path: '/overlays/popover',
        image: 'https://ahmadfajar.github.io/img/components/popover.png',
        css: cardCls1,
      },
    ],
  },
] satisfies TDisplayGroup[];
</script>

<template>
  <BsContent>
    <main class="home-body">
      <div v-for="section in displayItems" :key="section.group" class="section-content">
        <h2 class="mb-4">{{ section.group }}</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">
          <div
            v-for="(item, idx) in section.items"
            :key="section.group + '-items-' + idx"
            class="col"
          >
            <RouterLink :to="item.path" class="decoration-none">
              <BsCard :class="item.css" :img-top-src="item.image">
                <BsCardBody>
                  <BsCardContent type="subtitle">{{ item.title }}</BsCardContent>
                </BsCardBody>
              </BsCard>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </BsContent>
</template>
