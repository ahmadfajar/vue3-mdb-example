<template>
  <BsApp>
    <BsAppbar class="bg-indigo-700" shadow>
      <BsButton color="light" flat icon="menu" mode="icon" aria-label="menu" />
      <BsAppbarTitle class="text-white" title="Page Title" />
      <BsSpacer />
      <BsAppbarItems>
        <BsButton color="light" flat icon="search" mode="icon" />
        <BsButton color="light" flat icon="notifications_outlined" mode="icon" />
        <BsDropdownMenu class="ms-1" placement="bottom-right" space="3">
          <BsButton color="light" flat icon="more_vert" mode="icon" />
          <template #content>
            <BsListView>
              <div class="dropdown-menu">
                <div class="dropdown-item">First Action</div>
                <div class="dropdown-item">Second Action</div>
                <div class="dropdown-item">Third Action</div>
                <BsDivider />
                <div class="dropdown-item">Another Action</div>
              </div>
            </BsListView>
          </template>
        </BsDropdownMenu>
      </BsAppbarItems>
    </BsAppbar>
  </BsApp>
</template>
