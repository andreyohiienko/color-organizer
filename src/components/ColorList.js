import React from 'react'
import Color from './Color'
import { rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'
import '../stylesheets/ColorList.scss'

const ColorList = ({ store }) => {
  const { colors, sort } = store.getState()
  console.log(sort)
  const sortedColors = [...colors].sort(sortFunction(sort))
  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>No Colors listed.</p>
      ) : (
        sortedColors.map(color => (
          <Color
            key={color.id}
            {...color}
            onRate={rating => store.dispatch(rateColor(color.id, rating))}
            onRemove={() => store.dispatch(removeColor(color.id))}
          />
        ))
      )}
    </div>
  )
}
export default ColorList
