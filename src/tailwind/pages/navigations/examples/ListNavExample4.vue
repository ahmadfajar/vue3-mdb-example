<script setup lang="ts"></script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-purple-800 py-3">
      <BsButton color="light" flat icon="menu" mode="icon" />
      <div class="h4 font-weight-normal text-white flex-fill ps-3">Mail</div>
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
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
      <BsDivider />
      <BsListTile navigable>
        <BsListTileLeading icon="email" />
        <BsListTileContent>
          <BsListTileTitle>All Mail</BsListTileTitle>
        </BsListTileContent>
        <BsListTileAction center>
          <BsBadge color="bg-gray-400 dark:bg-neutral-700" type="pill">102</BsBadge>
        </BsListTileAction>
      </BsListTile>
      <BsListTile navigable>
        <BsListTileLeading icon="gpp_maybe" />
        <BsListTileContent>
          <BsListTileTitle>Spam</BsListTileTitle>
        </BsListTileContent>
        <BsListTileAction center>
          <BsBadge color="bg-gray-400 dark:bg-neutral-700" type="pill"> 25 </BsBadge>
        </BsListTileAction>
      </BsListTile>
      <BsListTile navigable>
        <BsListTileLeading icon="delete" />
        <BsListTileContent>
          <BsListTileTitle>Trash</BsListTileTitle>
        </BsListTileContent>
        <BsListTileAction center>
          <BsBadge color="bg-gray-400 dark:bg-neutral-700" type="pill">12</BsBadge>
        </BsListTileAction>
      </BsListTile>
    </BsListView>
  </BsCard>
</template>
