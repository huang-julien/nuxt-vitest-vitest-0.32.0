import { defineNuxtModule, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'routing',
  },
  setup() {
    extendPages((p) => {
      p.push({
        path: '/',
        file: '@/modules/routing/home.vue',
        redirect: '/test',
        children: [
          {
            path: 'test',
            file: '@/modules/routing/test.vue',
          },
        ],
      });
    });
  },
});
