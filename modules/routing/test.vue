<template>
  <div>
    <span id="hello">{{ $t('hello') }}</span>  
  </div>
</template>
<script setup lang="ts">
const i18nCookie = useCookie('i18n_redirected');

i18nCookie.value = 'en';

useHead({
  title: 'hallo',
});
</script>
