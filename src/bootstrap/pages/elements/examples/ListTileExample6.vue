<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer = ref(true);

function toggleSideDrawer(state: boolean) {
  openSideDrawer.value = state;
}
const styles = {
  '--appbar-background': 'oklch(0.449 0.15 276.24)',
  '--appbar-foreground': 'oklch(1 0 89.876)',
  '--sidedrawer-background': 'oklch(1 0 89.876)',
  '--sidedrawer-foreground': 'oklch(0.259 0.006 258.36)',
  '--sidedrawer-item-foreground': 'oklch(0.219 0.004 286.076)',
  '--sidedrawer-item-active-background': 'oklch(0.65 0.13 294.86 / 0.3)',
  '--sidedrawer-item-active-foreground': 'oklch(0.219 0.004 286.076)',
  '--sidedrawer-item-active-foreground-secondary': 'oklch(0.592 0.012 261.776)',
};
</script>

<template>
  <BsApp :style="styles" class="bg-light md-shadow-2 rounded-3">
    <BsAppbar clipped-left shadow>
      <BsButton
        color="light"
        flat
        icon="menu"
        mode="icon"
        @click="toggleSideDrawer(!openSideDrawer)"
      />
      <BsAppbarTitle title="Page Title" />
    </BsAppbar>
    <BsSideDrawer v-model:open="openSideDrawer" shadow>
      <div class="p-3">
        <img
          alt="image"
          class="rounded-circle"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          style="width: 40px; height: 40px"
        />
        <span class="h5 ps-4">Kitty Doe</span>
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
        <BsDivider />
        <BsListTile navigable>
          <BsListTileLeading icon="email" />
          <BsListTileContent>
            <BsListTileTitle>All Mail</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-500" type="pill"> 102 </BsBadge>
          </BsListTileAction>
        </BsListTile>
        <BsListTile navigable>
          <BsListTileLeading icon="gpp_maybe" />
          <BsListTileContent>
            <BsListTileTitle>Spam</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-500" type="pill"> 22 </BsBadge>
          </BsListTileAction>
        </BsListTile>
        <BsListTile navigable>
          <BsListTileLeading icon="delete" />
          <BsListTileContent>
            <BsListTileTitle>Trash</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-500" type="pill"> 8 </BsBadge>
          </BsListTileAction>
        </BsListTile>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app style="height: 340px">
      <div class="flex justify-center items-center"></div>
    </BsContainer>
  </BsApp>
</template>
