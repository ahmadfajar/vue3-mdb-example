<script setup lang="ts"></script>

<template>
  <BsApp class="p-2">
    <BsCard class="w-full max-w-100 mx-auto" shadow>
      <BsAppbar class="bg-purple-800" shadow>
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-white" title="Mail" />
        <BsSpacer />
        <BsButton color="light" flat icon="more_vert" mode="icon" />
      </BsAppbar>
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
            <BsBadge color="bg-gray-400" type="pill">102</BsBadge>
          </BsListTileAction>
        </BsListTile>
        <BsListTile navigable>
          <BsListTileLeading icon="gpp_maybe" />
          <BsListTileContent>
            <BsListTileTitle>Spam</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-400" type="pill"> 25 </BsBadge>
          </BsListTileAction>
        </BsListTile>
        <BsListTile navigable>
          <BsListTileLeading icon="delete" />
          <BsListTileContent>
            <BsListTileTitle>Trash</BsListTileTitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsBadge color="bg-gray-400" type="pill">12</BsBadge>
          </BsListTileAction>
        </BsListTile>
      </BsListView>
    </BsCard>
  </BsApp>
</template>
