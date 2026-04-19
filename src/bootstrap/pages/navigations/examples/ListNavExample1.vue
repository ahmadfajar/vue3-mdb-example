<template>
  <BsCard class="w-full mx-auto" shadow style="max-width: 400px">
    <BsCardHeader class="flex items-center bg-purple-600 py-3">
      <BsButton color="light" flat icon="menu" mode="icon" />
      <div class="h4 text-white mb-0 ps-3">Menus</div>
    </BsCardHeader>
    <BsListView>
      <BsListNav>
        <BsListNavItem icon="folder_filled" label="My Files" />
        <BsListNavItem icon="folder_shared_filled" label="Shared with me" />
        <BsListNavItem icon="star_filled" label="Starred" />
        <BsListNavItem icon="upload" label="Upload" />
        <BsListNavItem icon="backup" label="Backup" />
        <BsListNavItem icon="delete" label="Trash" />
      </BsListNav>
    </BsListView>
  </BsCard>
</template>
