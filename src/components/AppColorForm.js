import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class AddColorFrom extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    const { _title, _color } = this.refs;
    this.props.onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="color title..." required/>
        <input ref="_color" type="color" required/>
        <button>ADD</button>
      </form>
    )
  }
}

export default AddColorFrom;
