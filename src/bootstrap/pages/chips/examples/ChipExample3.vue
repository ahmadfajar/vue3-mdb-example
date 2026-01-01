<template>
  <div class="flex flex-col md-gap-y-4">
    <div class="flex items-center md-gap-2">
      <BsDropdownMenu>
        <BsChip> Chip Action <span class="caret-down ms-2"></span></BsChip>
        <template #content>
          <BsListView>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </BsListView>
        </template>
      </BsDropdownMenu>
      <BsDropdownMenu>
        <BsChip color="default" icon="shopping_cart_outlined">
          Chip Action <span class="caret-down ms-2"></span>
        </BsChip>
        <template #content>
          <BsListView>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </BsListView>
        </template>
      </BsDropdownMenu>
    </div>
    <div class="flex items-center md-gap-2">
      <BsDropdownMenu>
        <BsChip outlined> Chip Action <span class="caret-down ms-2"></span></BsChip>
        <template #content>
          <BsListView>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </BsListView>
        </template>
      </BsDropdownMenu>
      <BsDropdownMenu>
        <BsChip color="default" icon="shopping_cart_outlined" outlined>
          Chip Action <span class="caret-down ms-2"></span>
        </BsChip>
        <template #content>
          <BsListView>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </BsListView>
        </template>
      </BsDropdownMenu>
    </div>
  </div>
</template>
