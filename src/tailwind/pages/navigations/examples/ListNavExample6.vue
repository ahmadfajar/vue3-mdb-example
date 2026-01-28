<script setup lang="ts"></script>

<template>
  <BsApp class="p-2">
    <BsCard class="w-full max-w-100 mx-auto" shadow>
      <BsAppbar class="bg-violet-800" shadow>
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-light" title="Menus" />
        <BsSpacer />
        <BsButton color="light" flat icon="more_vert" mode="icon" />
      </BsAppbar>
      <BsListView {$border_variant} {$item_style} {$space_around}>
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
</template>
