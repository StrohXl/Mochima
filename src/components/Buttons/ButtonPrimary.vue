<script lang="ts" setup>
const primary_contained = `bg-teal-500 hover:bg-teal-600 text-white`
const gray_contained = `bg-gray-500 hover:bg-gray-600 text-white`
const primary_outlined = `border-1 border-teal-500 hover:border-teal-600 text-teal-500 hover:text-teal-600`
const gray_outlined = `border-1 border-gray-500 hover:border-teal-600 text-gray-700 hover:text-teal-700`
const primary_text = `text-teal-500 hover:text-teal-600 px-0! py-0!`
const gray_text = `text-gray-500 hover:text-gray-600 px-0! py-0!`
const small = `py-2 px-6`
const medium = `py-4 px-10`
const large = `py-6 px-12`
const classBasic = 'outline-none duration-200 font-medium'

withDefaults(
  defineProps<{
    to: string
    size?: 'small' | 'medium' | 'large'
    color: 'primary' | 'gray'
    type: 'outlined' | 'contained' | 'text'
  }>(),
  {
    size: 'medium',
  },
)
</script>
<template>
  <template v-if="type == 'contained'">
    <RouterLink
      :to="to"
      :class="`${classBasic} ${size === 'small' ? small : size === 'medium' ? medium : large} md:text-lg rounded-full ${color === 'primary' ? primary_contained : gray_contained}`"
    >
      <slot />
    </RouterLink>
  </template>
  <template v-if="type == 'outlined'">
    <RouterLink
      :to="to"
      :class="`${classBasic} ${size === 'small' ? small : size === 'medium' ? medium : large}  md:text-lg rounded-full ${color === 'primary' ? primary_outlined : gray_outlined}`"
    >
      <slot />
    </RouterLink>
  </template>
  <template v-if="type == 'text'">
    <RouterLink :to="to" :class="`${classBasic} ${color === 'primary' ? primary_text : gray_text}`">
      <slot />
    </RouterLink>
  </template>
</template>
s
