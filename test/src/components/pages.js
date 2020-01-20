import React from "react";

class Pages extends React.Component {
  constructor(props) {
    super(props);
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
}
