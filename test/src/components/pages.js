import React from "react";
import history from "../history";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

import { Route, Router } from "react-router-dom";

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick.bind(this);
    this.state = {
      page1: [
        ["性別", "年齢", "興味"],
        [
          ["男性", "女性"],
          ["年上", "年下"],
          ["好き", "嫌い"]
        ],
        []
      ],
      page2: [
        [],
        {
          group: "自分との会話中...",
          choice: [
            "つま先はあなたを向いてますか？",
            "視線はあなたを捉えていますか？",
            "口数は多いですか？"
          ]
        },
        {
          group: "他人との会話中...",
          choice: [
            "つま先はあなたを向いてますか？",
            "視線はあなたを捉えていますか？",
            "口数は多いですか？"
          ]
        }
      ]
    };
  }

  handleClick1(e) {
    const val = e.target.value;
    this.setState(prevState => {
      return (prevState.page1[2][ans_num] = val);
    });
  }

  handleClick2(e) {
    const val = e.target.value;
    ans_count++;
    this.setState(prevState => {
      return (prevState.page2[0][ans_count] = val);
    });
  }

  render() {
    return (
      <main>
        <Router history={history}>
          <Route path="/" component={Page1} exact></Route>
          <Route path="/2" component={Page2}></Route>
          <Route path="/3" component={Page3}></Route>
        </Router>
      </main>
    );
  }
}

export default Pages;
