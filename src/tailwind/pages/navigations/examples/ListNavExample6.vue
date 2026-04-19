<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-purple-800 py-3">
      <BsButton color="light" flat icon="menu" mode="icon" />
      <div class="h4 font-weight-normal text-white flex-fill ps-3">Menus</div>
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
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
</template>
