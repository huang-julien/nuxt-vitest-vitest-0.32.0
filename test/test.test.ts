import Test from '../modules/routing/test';
import { mountSuspended, mockNuxtImport } from 'nuxt-vitest/utils';
mockNuxtImport('useCookie', () => {
  return vi.fn(() => ({
    value: 'fr',
  }));
});

describe('show hello', () => {
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);
    expect(useCookie).toHaveBeenCalled();
    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
});
