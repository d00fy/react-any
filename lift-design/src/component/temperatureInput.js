import React from "react";
//少なくとも変化しない値はstateで管理する必要ないな。
//このようにして、若干違うものをたくさん表示する。
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  //親関数を実行するための関数。<- ここはまぁラップする必要はないかな。
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        {/* いつも思うけど、この当て方自分でやってる時思いつかんのよな、、無関係を、名前を同じにして関係を持たせる方法。 */}
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
