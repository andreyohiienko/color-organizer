import { compose } from 'redux'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import SortMenu from '../../../src/components/ui/SortMenu'

describe('<Color /> UI Component', () => {
  it('Renders Correctly', () => {
    compose(
      expect,
      toJson,
      shallow,
    )(<SortMenu sort="SORTED_BY_TYTLE" />).toMatchSnapshot()
  })

  it('click does not cause error', () => {
    mount(<SortMenu sort="SORTED_BY_TITLE" />)
      .children()
      .childAt(2)
      .simulate('click')
  })

  it('onSelect returns correct options', () => {
    const _select = jest.fn()
    const wrapper = mount(<SortMenu onSelect={_select} />)
    wrapper
      .children()
      .childAt(3)
      .simulate('click')
    expect(_select.mock.calls[0][0]).toBe('SORTED_BY_RATING')
  })
})
