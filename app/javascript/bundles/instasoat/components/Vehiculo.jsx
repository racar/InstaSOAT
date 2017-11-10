import PropTypes from 'prop-types';
import React from 'react';

export default class Vehiculo extends React.Component {
  static propTypes = {
    placa: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { placa: this.props.placa, tarifas: this.props.tarifas };

  }

  updateName = (placa) => {
    this.setState({ placa });
  };

  render() {
    return (
      <div>
        <h3 className="blue">
          Placa: {this.state.placa}

        </h3>
        <hr />
        <form >
          <label htmlFor="placa">
            Placa del vehiculo:
          </label>
          <input
            id="placa"
            type="text"
            value={this.state.placa}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        Tarifas:
      </div>
    );
  }
}
