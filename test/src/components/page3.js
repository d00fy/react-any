import React from "react";
const A = 65; // ASCII character code

const results = ["イライラ", "ムカムカ", "ハラハラ"];
const randomnumber = Math.floor(Math.random() * 3);
class Alphabet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          あの人はあなたに{results[randomnumber]}
          しています。十分気をつけましょう。
        </h1>
      </div>
    );
  }
}

export default Alphabet;
