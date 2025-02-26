import React, { useEffect } from "react";

export const HeavyJobComponent = ({ num, numObj }) => {
  useEffect(() => {
    console.log("HeavyJobComponent 랜더링");
  });

  useEffect(() => {
    console.log("num이 바뀌면 heavyPlus가 실행이 돼요.");
    heavyPlus();
  }, [num]);

  const heavyPlus = () => {
    let total = 0;
    for (let i = 0; i < 123456; i++) {
      total += num;
    }
    return total + num;
  };
  const result = heavyPlus();

  return (
    <p>
      "{num}"를 더해서 만든 연산 결과는 <b>{result}</b> 입니다!
    </p>
  );
};

export const HeavyJobComponent2 = ({ num }) => {
  useEffect(() => {
    console.log("HeavyJobComponent2 랜더링");
  });

  useEffect(() => {
    console.log("num이 바뀌면 heavyPlus가 실행이 돼요.");
    heavyMulti();
  }, [num]);

  const heavyMulti = () => {
    let total = 0;
    for (let i = 0; i < 123456; i++) {
      total += num;
    }
    return total * num;
  };
  const result = heavyMulti();

  return (
    <p>
      "{num}"를 곱해서 만든 연산 결과는 <b>{result}</b> 입니다!
    </p>
  );
};

export const MemoHeavyJobComponent = React.memo(HeavyJobComponent);
export const MemoHeavyJobComponent2 = React.memo(HeavyJobComponent2);
