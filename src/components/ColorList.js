import React from 'react'

const ColorList = ({ colors = [] }) => (
  <div className="color-list">{colors.length === 0 ? '' : ''}</div>
)
// test 3