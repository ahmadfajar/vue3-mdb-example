<template>
  <BsApp class="p-2">
    <BsCard class="w-full mx-auto" shadow style="max-width: 400px">
      <BsAppbar class="bg-purple-600" shadow>
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-white" title="Menus" />
      </BsAppbar>
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
  </BsApp>
</template>
