import { useEffect, useState } from "react";

export const ChildComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("자식컴포넌트 생성");

    return () => {
      // return은 해당 로직이 없을 때 실행 되는 것
      alert("자식 컴포넌트 닫힘");
    };
  }, []); // 배열은 없어도됨. 없으면 화면이 렌더링 될때마다 실행됨. 빈 배열은 화면이 최초에 열릴 때 사용됨.

  useEffect(() => {
    count && alert(`변경된 숫자는 ${count}입니다.`);
  }, [count]); // [count] 의존성 배열

  return (
    <div className="w-80 h-52 border border-black-400 pt-16">
      <p>카운트: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <p className="font-mono text-xl">ChildComponent</p>
    </div>
  );
};
