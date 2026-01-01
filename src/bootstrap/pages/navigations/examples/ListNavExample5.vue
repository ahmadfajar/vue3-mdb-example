<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer = ref(true);

function toggleSideDrawer(state: boolean) {
  openSideDrawer.value = state;
}
const styles = {
  '--appbar-background': 'var(--color-purple-800)',
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
      <BsAppbarTitle class="text-white" title="Page Title" />
      <BsSpacer />
      <BsAppbarItems>
        <BsButton color="light" flat icon="search" mode="icon" />
        <BsButton color="light" flat icon="notifications" mode="icon" />
      </BsAppbarItems>
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
    </BsSideDrawer>
    <BsContainer app class="h-80">
      <div class="container-fluid"></div>
    </BsContainer>
  </BsApp>
</template>
