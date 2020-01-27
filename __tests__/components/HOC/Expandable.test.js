import { mount } from 'enzyme'
import Expandable from '../../../src/components/HOC/Expandable'

describe('Expandable Higher Order Component', () => {
  let props,
    wrapper,
    ComposedComponent,
    MockComponent = ({ collapsed, expandCollapse }) => (
      <div onClick={expandCollapse}>{collapsed ? 'collapse' : 'expanded'}</div>
    )

  describe('Renderign UI', () => {
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent)
      wrapper = mount(
        <ComposedComponent foo="foo" gnar="gnar"></ComposedComponent>,
      )
      props = wrapper.find(MockComponent).props()
    })

    it('Starts off Collapsed', () => expect(props.collapsed).toBe(true))

    it('Passes the expandCollapse function to composed component', () =>
      expect(typeof props.expandCollapse).toBe('function'))

    it('Passes additional foo prop to composed component', () =>
      expect(props.foo).toBe('foo'))

    it('Passes additional gnar prop to composed component', () =>
      expect(props.gnar).toBe('gnar'))
  })

  describe('Expand Collapse Functionality', () => {
    let instance

    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent)
      wrapper = mount(<ComposedComponent collapsed={false} />)
      instance = wrapper.instance()
    })

    it('Renders the MockComponent as the root element', () => {
      expect(wrapper.first().is(MockComponent))
    })

    it('Starts off expanded', () => {
      expect(instance.state.collapsed).toBe(false)
    })

    it('Toggles the collased state', () => {
      instance.expandCollapse()
      expect(instance.state.collapsed).toBe(true)
    })
  })
})
