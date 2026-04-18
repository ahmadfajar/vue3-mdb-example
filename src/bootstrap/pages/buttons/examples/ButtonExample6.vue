<template>
  <div class="flex flex-col md-gap-8">
    <div class="md-button-group" role="group" style="gap: 2px">
      <BsButton icon="shopping_cart" mode="icon" />
      <BsButton icon="favorite" style="border-radius: 50px 16px 16px 50px"> Label </BsButton>
      <BsButton icon="star" style="border-radius: 16px 50px 50px 16px"> Label </BsButton>
      <BsButton icon="delete" mode="icon" />
    </div>
    <div class="md-button-group" role="group" style="gap: 3px">
      <BsButton icon="bluetooth_filled" mode="icon" tonal />
      <BsButton
        icon="mic_filled"
        icon-size="22"
        mode="icon"
        style="border-radius: 18px; --md-btn-md-width: 2.25rem"
        tonal
      />

      <BsDropdownMenu space="4">
        <BsButton color="primary" dropdown-toggle icon="favorite_filled" tonal> Label </BsButton>
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
        <BsButton color="primary" dropdown-toggle icon="share_filled" tonal />
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
