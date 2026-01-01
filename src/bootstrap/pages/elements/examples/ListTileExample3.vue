<script setup lang="ts">
const listChat1 = [
  {
    active: true,
    fullName: 'Jason Oner',
    avatar: 'https://ahmadfajar.github.io/img/1.jpg',
  },
  {
    active: true,
    fullName: 'Ranee Carlson',
    avatar: 'https://ahmadfajar.github.io/img/2.jpg',
  },
  {
    active: false,
    fullName: 'Cindy Baker',
    avatar: 'https://ahmadfajar.github.io/img/3.jpg',
  },
  {
    active: false,
    fullName: 'Ali Connors',
    avatar: 'https://ahmadfajar.github.io/img/4.jpg',
  },
];
const listChat2 = [{ fullName: 'Travis Howard', avatar: 'https://ahmadfajar.github.io/img/5.jpg' }];
</script>

<template>
  <BsApp class="p-2">
    <BsCard class="w-full max-w-100 mx-auto" shadow>
      <BsAppbar class="bg-indigo-700">
        <BsButton color="light" flat icon="arrow_back" mode="icon" />
        <BsAppbarTitle class="text-white" title="Chats" />
        <BsSpacer />
        <BsButton color="light" flat icon="search" mode="icon" />
      </BsAppbar>
      <BsListView>
        <BsSubheader>Recent Chats</BsSubheader>
        <template v-for="item in listChat1" :key="item.fullName">
          <BsListTile>
            <BsListTileLeading :img-src="item.avatar" circle />
            <BsListTileContent>
              <BsListTileTitle class="font-weight-semibold">
                {{ item.fullName }}
              </BsListTileTitle>
            </BsListTileContent>
            <BsListTileAction center>
              <BsIcon :class="{ 'text-info': item.active }" icon="chat_bubble" />
            </BsListTileAction>
          </BsListTile>
        </template>
        <BsDivider class="mt-3" />
        <BsSubheader>Previous Chats</BsSubheader>
        <template v-for="item in listChat2" :key="item.fullName">
          <BsListTile>
            <BsListTileLeading :img-src="item.avatar" circle />
            <BsListTileContent>
              <BsListTileTitle class="font-weight-semibold">
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
  </BsApp>
</template>
