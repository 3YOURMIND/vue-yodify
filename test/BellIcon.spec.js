import { mount } from '@vue/test-utils';
import BellIcon from '@/BellIcon';

describe('General tests', () => {
  it('Test if empty component is a vue instance', () => {
    const wrapper = mount(BellIcon);
    expect(wrapper.isVueComponent).toBe(true);
  });
});
