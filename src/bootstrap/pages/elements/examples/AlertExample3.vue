<template>
  <BsAlert {$colorName} {$dismissible} {$icon} {$iconVariant} {$variants}>
    <p>
      Aww yeah, you successfully read this alert message. This is an example how to construct
      <b>Alert</b> with additional contents.
    </p>
    <hr class="my-3" />
    <ul>
      <li>This is just example bullet list.</li>
      <li>
        This is
        <a class="alert-link" href="#" title="hyperlink example"> hyperlink </a>
        example within an alert.
      </li>
      <li>This is just example bullet list.</li>
    </ul>
  </BsAlert>
</template>
