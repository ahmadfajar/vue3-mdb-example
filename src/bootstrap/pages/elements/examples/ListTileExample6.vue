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
};
</script>

<template>
  <BsApp :style="styles" class="md-shadow-2 rounded-lg">
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
          class="inline rounded-circle size-10"
          src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <span class="text-xl ps-4">Kitty Doe</span>
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
            <BsBadge color="gray-400" type="pill"> 102 </BsBadge>
          </BsListTileAction>
        </BsListTile>
        <BsListTile navigable>
          <BsListTileLeading icon="gpp_maybe" />
          <BsListTileContent>
            <BsListTileTitle>Spam</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-400" type="pill"> 22 </BsBadge>
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
    </BsSideDrawer>
    <BsContainer app class="h-80">
      <div class="flex justify-center items-center"></div>
    </BsContainer>
  </BsApp>
</template>
