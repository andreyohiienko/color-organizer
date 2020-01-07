import React, { Component } from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
import '../stylesheets/Color.scss'

class Color extends Component {
  // componentWillMount() {
  //   this.style = { backgroundColor: '#ccc' }
  // }

  // componentWillUpdate(nextProps) {
  //   const { title, rating } = this.props
  //   this.style = null
  //   this.refs.title.style.backgroundColor = 'red'
  //   this.refs.title.style.color = 'white'
  //   alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  // }

  // shouldComponentUpdate(nextProps) {
  //   return this.props.rating !== nextProps.rating
  // }

  // componentDidUpdate(prevProps) {
  //   const { title, rating } = this.props
  //   const status = rating > prevProps.rating ? 'better' : 'worse'
  //   this.refs.title.style.backgroundColor = ''
  //   this.refs.title.style.color = 'black'
  // }

  render() {
    const { title, rating, color, onRemove, onRate } = this.props
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    )
  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func,
}

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: '#000',
  onRate: f => f,
  onRemove: f => f,
}
export default Color
