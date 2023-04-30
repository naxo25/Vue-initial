import { mount } from '@vue/test-utils'
import { expect, test, describe } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  test('Ejemplo', async () => {
     const wrapper = mount(HelloWorld,{
      props: {
        msg: 'Hello World'
      }
     });

    expect(wrapper.find('h1').exists()).toBeTruthy();
    expect(wrapper.props('msg')).toBe('Hello World');
  })
})