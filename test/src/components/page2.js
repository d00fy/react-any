import React from "react";
import history from "../history";

let ans_num = 0;
let ans_count = -1;
let group_num = 1;

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   page2: [
    //     [],
    //     {
    //       group: "自分との会話中...",
    //       choice: [
    //         "つま先はあなたを向いてますか？",
    //         "視線はあなたを捉えていますか？",
    //         "口数は多いですか？"
    //       ]
    //     },
    //     {
    //       group: "他人との会話中...",
    //       choice: [
    //         "つま先はあなたを向いてますか？",
    //         "視線はあなたを捉えていますか？",
    //         "口数は多いですか？"
    //       ]
    //     }
    //   ]
    // };
  }

  // handleClick(e) {
  //   const val = e.target.value;
  //   ans_count++;
  //   this.setState(prevState => {
  //     return (prevState.page2[0][ans_count] = val);
  //   });
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.page2[0]);
    if (ans_count === 5) {
      //現状数値を入れるしかない。。
      history.push("/3");
      return false;
    }
    ans_num++;
    let group_length = this.state.page2[group_num].choice.length - 1;
    if (ans_num <= group_length) {
      return true;
    } else if (ans_num >= group_length) {
      group_num++;
      ans_num = 0;
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {}
  render() {
    return (
      <>
        <div>
          <h2>どんな人ですか？</h2>
          <h3>{this.state.page2[group_num].group}</h3>
        </div>
        <div>
          <div>{this.state.page2[1].choice[ans_num]}</div>
          <button value={0} onClick={this.handleClick}>
            Yes
          </button>
          <button value={1} onClick={this.handleClick}>
            So-so
          </button>
          <button value={2} onClick={this.handleClick}>
            No
          </button>
        </div>
      </>
    );
  }
}

export default Page2;
