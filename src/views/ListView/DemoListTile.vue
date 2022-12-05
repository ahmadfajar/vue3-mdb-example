<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <h4 class="mt-4">
      Basic Example
    </h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard
        class="mx-auto"
        shadow
        style="max-width: 400px">
        <BsListView>
          <BsSubheader>Today</BsSubheader>
          <template v-for="(item, index) in listItems1" :key="item.title">
            <BsListTile>
              <BsListTileLeading
                :img-src="item.avatar"
                size="40"
                circle/>
              <BsListTileContent multi-line>
                <BsListTileTitle class="fw-semibold">
                  {{ item.title }}
                </BsListTileTitle>
                <BsListTileSubtitle :raw-html="item.subtitle"/>
              </BsListTileContent>
            </BsListTile>
            <BsDivider
              v-if="index + 1 < listItems1.length"
              :key="item.title + index"
              left-indent="70"/>
          </template>
        </BsListView>
        <BsCardBody>
          <BsCardContent type="title">
            Another Content Title
          </BsCardContent>
          <BsCardContent>
            {{ content }}
          </BsCardContent>
        </BsCardBody>
      </BsCard>
    </div>
    <h4 class="mt-5">
      Contact Details Example
    </h4>
    <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
      <BsCard
        class="mx-auto"
        shadow
        style="max-width: 400px">
        <BsCardMedia title="Jonathan Smith">
          <img src="https://picsum.photos/id/91/600/350.jpg?blur=2" alt="image"/>
        </BsCardMedia>
        <BsListView>
          <BsListTile>
            <BsListTileLeading class="text-info" icon="phone"/>
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold">
                0821-5555-1234
              </BsListTileTitle>
              <BsListTileSubtitle>
                Mobile | Indonesia
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsListTile>
            <BsListTileLeading class="md-has-icon" size="24"/>
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold">
                +6221-4444-6789
              </BsListTileTitle>
              <BsListTileSubtitle>
                Work | Indonesia
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsDivider left-indent="70"/>
          <BsListTile>
            <BsListTileLeading class="text-info" icon="email"/>
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold">
                jonathan.smith@company.com
              </BsListTileTitle>
              <BsListTileSubtitle>
                Work
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsListTile>
            <BsListTileLeading class="md-has-icon" size="24"/>
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold">
                jonathan.smith212@example.com
              </BsListTileTitle>
              <BsListTileSubtitle>
                Personal
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
          <BsDivider left-indent="70"/>
          <BsListTile>
            <BsListTileLeading class="text-info" icon="place"/>
            <BsListTileContent>
              <BsListTileTitle class="fw-semibold">
                1400 Main Street
              </BsListTileTitle>
              <BsListTileSubtitle>
                Jakarta, Indonesia
              </BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
        </BsListView>
      </BsCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
const listItems1 = [
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg',
    title: 'Summer BBQ',
    subtitle: "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatar: 'https://vue-mdbootstrap.fajarconsultant.com/img/4.jpg',
    title: 'Birthday gift',
    subtitle: '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  }
]
const content = 'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.'
</script>

<style scoped>

</style>
