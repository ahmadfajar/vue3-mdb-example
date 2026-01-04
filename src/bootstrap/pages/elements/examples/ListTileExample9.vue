<template>
  <BsApp class="p-2">
    <BsCard class="w-full mx-auto" shadow style="max-width: 400px">
      <BsAppbar class="bg-indigo" clipped-left>
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-white" title="Menus" />
        <BsSpacer />
        <BsAppbarItems>
          <BsButton color="light" flat icon="search" mode="icon" />
          <BsButton color="light" flat icon="notifications" mode="icon" />
        </BsAppbarItems>
      </BsAppbar>
      <BsListView {$border_variant} {$item_style} {$space_around}>
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
</template>
