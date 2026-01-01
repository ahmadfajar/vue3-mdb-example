<template>
  <div class="flex flex-col md-gap-8">
    <div class="md-button-group" role="group" style="gap: 2px">
      <BsButton icon="shopping_cart" mode="icon" />
      <BsButton icon="favorite" style="border-radius: 50px 16px 16px 50px"> Label </BsButton>
      <BsButton icon="star" style="border-radius: 16px 50px 50px 16px"> Label </BsButton>
      <BsButton icon="delete" mode="icon" />
    </div>
    <div class="md-button-group" role="group" style="gap: 2px">
      <BsButton icon="mic_filled" mode="icon" />
      <BsButton class="rounded-3!" icon="shopping_cart_filled" mode="icon" />

      <BsDropdownMenu space="4">
        <BsButton dropdown-toggle icon="favorite_filled"> Label </BsButton>
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

      <BsDropdownMenu space="4">
        <BsButton dropdown-toggle icon="share_filled" />
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
