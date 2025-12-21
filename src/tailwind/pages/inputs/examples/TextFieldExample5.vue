<script setup lang="ts">
import useVuelidate, { type Validation } from '@vuelidate/core';
import { email, required, sameAs } from '@vuelidate/validators';
import { computed, type ComputedRef, reactive, ref, type Ref, unref } from 'vue';
import { Helper, type INotificationProvider } from 'vue-mdbootstrap';

const loading = ref(false);
const member = reactive({
  fullName: null,
  emailAddress: null,
  password: null,
  confirm: null,
});
const password = computed(() => member.password);
const memberRules = {
  fullName: { required },
  emailAddress: { required, email },
  password: { required },
  confirm: { required, equalTo: sameAs(password) },
};

function requiredFieldValidator(
  validator: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(validator)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['emailAddress'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: 'Email address format is invalid.',
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

function confirmPasswordValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; equalTo: boolean };
  messages: { required: string; equalTo: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['confirm'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      equalTo: "Password doesn't match.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      equalTo: unref(obj.equalTo.$invalid),
    },
  }));
}

const v$ = useVuelidate(memberRules, member);
const fullNameValidator = requiredFieldValidator(v$, 'fullName');
const passwordValidator = requiredFieldValidator(v$, 'password');
const confirmValidator = confirmPasswordValidator(v$);
const emailValidator = emailFieldValidator(v$);

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success('Data has been submitted.');
    }, 1000);
  }
}
</script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-violet-800 py-3">
      <BsButton color="light" flat icon="arrow_back" mode="icon" />
      <span class="text-xl text-white ps-3">Sign Up</span>
      <BsSpacer />
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsCardBody>
      <form novalidate>
        <div class="mb-4 mt-3">
          <BsTextField
            v-model="member.fullName"
            :validator="fullNameValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="person"
            required
            validation-icon
          >
            <label>Your Name</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextField
            v-model="member.emailAddress"
            :validator="emailValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="email"
            required
            type="email"
            validation-icon
          >
            <label>Your Email</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextField
            v-model="member.password"
            :validator="passwordValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="key"
            required
            type="password"
            validation-icon
          >
            <label>Password</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextField
            v-model="member.confirm"
            :validator="confirmValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="key"
            required
            type="password"
            validation-icon
          >
            <label>Confirm Password</label>
          </BsTextField>
        </div>
        <div class="flex flex-col md-gap-3 pt-3">
          <BsButton @click="submit($notification)">
            <BsSpinLoader v-if="loading" thickness="3" size="24" />
            <span v-else>Create account</span>
          </BsButton>
          <BsButton tonal>
            <img
              alt="google-logo"
              src="https://ahmadfajar.github.io/img/google-logo.svg"
              style="width: 22px; height: 22px"
            />
            <span class="ps-2">Sign up with Google</span>
          </BsButton>
          <div class="text-subtle-secondary text-xs">
            By submitting your information, you agree to our
            <a class="underline-offset-2 underline decoration-dotted text-primary" href="#">
              Term & Conditions
            </a>
            and
            <a class="underline-offset-2 underline decoration-dotted text-primary" href="#">
              Privacy Policy.
            </a>
          </div>
        </div>
      </form>
    </BsCardBody>
  </BsCard>
  <BsNotification />
</template>
