import React from "react";
import Bar from "../components/Bar";
import Timer from "../components/Timer";

const Gift = () => {
  return (
    <div className="wrapper">
      <span className="title py-20">🎁Gift</span>
      <Bar />
      <span className="font-kangwon-light text-lg py-10">
        선물은 돈치치와 서프라이즈 외에 갖고싶은게 있으면 사주께..😅
      </span>
      <Timer />
    </div>
  );
};

export default Gift;
