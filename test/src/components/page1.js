import React from "react";
import history from "../history";

let ans_num = 0;

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   page1: [
    //     ["性別", "年齢", "興味"],
    //     [
    //       ["男性", "女性"],
    //       ["年上", "年下"],
    //       ["好き", "嫌い"]
    //     ],
    //     []
    //   ]
    // };
  }
  // handleClick(e) {
  //   const val = e.target.value;
  //   this.setState(prevState => {
  //     return (prevState.page1[2][ans_num] = val);
  //   });
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.page1[2]);
    ans_num++;
    if (ans_num <= 2) {
      return true;
    } else {
      history.push("/2");
    }
  }

  render() {
    return (
      <div>
        <div>誰ですか？</div>
        <h2>{this.state.page1[0][ans_num]}</h2>
        <button type="button" value={true} onClick={this.handleClick}>
          {this.state.page1[1][ans_num][0]}
        </button>
        <button type="button" value={false} onClick={this.handleClick}>
          {this.state.page1[1][ans_num][1]}
        </button>
      </div>
    );
  }
}

export default Page1;
