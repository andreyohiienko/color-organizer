import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import AddColorForm from '../../../src/components/ui/AddColorForm'

describe('<AddColorFrom /> UI Component', () => {
  let wrapper

  describe('Render the UI', () => {
    it('renders correctly', () => {
      compose(expect, toJSON, shallow)(<AddColorForm />).toMatchSnapshot()
    })

    it('Submitting default onNewColor does not cause error', () => {
      wrapper = mount(<AddColorForm />)
      wrapper.ref('_title').value = 'test-color'
      wrapper.ref('_color').value = '#0000FF'
      wrapper.find('form').simulate('submit')
    })
  })

  //   describe('Adding New Colors', () => {
  //     const _addColor = jest.fn()

  //     beforeAll(() => {
  //       wrapper = mount(<AddColorForm onNewColor={_addColor} />)
  //       wrapper.ref('_title').value = 'test-color'
  //       wrapper.ref('_color').value = '#000099'
  //       wrapper.find('_form').simulate('submit')
  //     })

  //     it('adds colors title value', () =>
  //       expect(_addColor).toBeCalledWith('test-color', '#000099'))

  //     it('resets the title value', () =>
  //       expect(wrapper.ref('_title').value).toBe(''))

  //     it('resets the color value', () =>
  //       expect(wrapper.ref('_color').value).toBe('#000000'))
  //   })
})
