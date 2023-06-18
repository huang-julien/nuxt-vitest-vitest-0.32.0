<template>
  <div>
    <span id="hello">{{ $t('hello') }}</span>
    <p>current route : {{ $route.fullPath }}</p>
    <div>cookie value: {{ i18nCookie }}</div>
    URL: {{ $route.fullPath }}
    <p>typeof locale: {{ typeoflocale }}</p>
  </div>
</template>
<script setup lang="ts">
const i18nCookie = useCookie('i18n_redirected');

i18nCookie.value = 'en';

useHead({
  title: 'hallo',
});
</script>
