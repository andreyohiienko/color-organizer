import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Star.scss'

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? 'star selected ' : 'star'} onClick={onClick} />
)

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

// Default props already in arguments so this part is unnecessary
// Star.defaultProps = {
//   selected: false,
//   onClick: f=>f,
// }

export default Star
