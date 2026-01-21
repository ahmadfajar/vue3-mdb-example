<script setup lang="ts">
import type { Validation } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import type { Ref, ComputedRef } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import {
  Helper,
  type INotificationProvider,
  type TInputOptionItem,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

const favoriteDrinks: TInputOptionItem[] = [
  { value: 'tea', label: 'Tea' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'beer', label: 'Beer' },
];
const occupations: TRadioInputProps[] = [
  { value: 1, label: 'Computer and IT' },
  { value: 2, label: 'Scientists and Research' },
  { value: 3, label: 'Consultant' },
  { value: 4, label: 'Other' },
];

const loading = ref(false);
const surveyForm = reactive({
  fullName: null,
  emailAddress: null,
  favoriteDrink: null,
  occupation: null,
});
const surveyFormRules = {
  fullName: { required },
  emailAddress: { required, email },
  favoriteDrink: { required },
  occupation: { required },
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

const v$ = useVuelidate(surveyFormRules, surveyForm);
const fullNameValidator = requiredFieldValidator(v$, 'fullName');
const favoriteValidator = requiredFieldValidator(v$, 'favoriteDrink');
const occupationValidator = requiredFieldValidator(v$, 'occupation');
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
    <BsCardHeader class="flex items-center bg-indigo-700 py-3">
      <BsButton color="light" flat icon="arrow_back" mode="icon" />
      <span class="text-2xl font-weight-normal text-white ps-3">Survey Form</span>
      <BsSpacer />
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsCardBody>
      <form novalidate>
        <div class="mb-4 mt-3">
          <BsTextField
            v-model="surveyForm.fullName"
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
            v-model="surveyForm.emailAddress"
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
          <BsToggleField
            v-model="surveyForm.favoriteDrink"
            :items="favoriteDrinks"
            :validator="favoriteValidator"
            required
            tonal
          >
            <div class="col-form-label">Favorite Drink:</div>
            <template #icon="item">
              <BsSvgIcon v-if="item?.value === surveyForm.favoriteDrink" icon="check" />
            </template>
          </BsToggleField>
        </div>
        <div class="mb-4">
          <BsRadioGroup
            v-model="surveyForm.occupation"
            :items="occupations"
            :validator="occupationValidator"
            column="1"
            required
          >
            <div class="col-form-label">Occupation:</div>
          </BsRadioGroup>
        </div>
        <div class="flex flex-col md-gap-3 pt-3">
          <BsButton @click="submit($notification)">
            <BsSpinLoader v-if="loading" tag="span" thickness="3" size="24" />
            <span v-else>Submit Survey</span>
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
