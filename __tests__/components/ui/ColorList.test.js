import { mount, shallow } from 'enzyme'
import ColorList from '../../../src/components/ui/ColorList'
import { compose } from 'redux'
import toJson from 'enzyme-to-json'

jest.mock(
  '../../../src/components/ui/Color',
  () => ({ rating, onRate = f => f, onRemove = f => f }) => (
    <div className="mock-color">
      <button className="rate" onClick={() => onRate(rating)} />
      <button className="remove" onClick={onRemove} />
    </div>
  ),
)

describe('<ColorList /> UI Component', () => {
  afterAll(() => jest.resetAllMocks())

  describe('Rendering Ui', () => {
    it('Renders Correctly', () =>
      compose(
        expect,
        toJson,
        shallow,
      )(<ColorList colors={_testColors} />).toMatchSnapshot())

    it('Defaults Properties correctly', () =>
      expect(
        shallow(<ColorList />)
          .find('p')
          .text(),
      ).toBe('No Colors listed. (Add a Color)'))

    it('Clicking default rate button do not cause Error', () => {
      mount(<ColorList colors={_testColors} />)
        .find('button.rate')
        .first()
        .simulate('click')
    })

    it('Clicking default remove button do not cause Error', () => {
      mount(<ColorList colors={_testColors} />)
        .find('button.remove')
        .first()
        .simulate('click')
    })
  })

  describe('Rating a Color', () => {
    let _rate = jest.fn()
    beforeAll(() =>
      mount(<ColorList colors={_testColors} onRate={_rate} />)
        .find('button.rate')
        .first()
        .simulate('click'),
    )
    it('invokes onRate Handler', () => expect(_rate).toBeCalled())
    it('rates the correct color', () =>
      expect(_rate).toBeCalledWith('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 4))
  })
})
