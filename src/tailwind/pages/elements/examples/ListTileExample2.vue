<script setup lang="ts">
const listItems1 = [
  {
    avatar: 'https://ahmadfajar.github.io/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/2.jpg',
    title: 'Summer BBQ',
    subtitle:
      "to: <b>Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend.",
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
];
const content =
  'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';
</script>

<template>
  <BsCard class="w-full max-w-100" shadow>
    <BsListView>
      <BsSubheader>Today</BsSubheader>
      <template v-for="(item, index) in listItems1" :key="item.title">
        <BsListTile>
          <BsListTileLeading :img-src="item.avatar" circle size="40" />
          <BsListTileContent multi-line>
            <BsListTileTitle class="font-weight-semibold">
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
</template>
