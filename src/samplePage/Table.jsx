import { useEffect, useState } from "react";
import tableData from "./../common/tableData";

export const Table = () => {
  const [checkedItems, setCheckedItem] = useState([]);

  // useEffect(() => {
  //   console.log(checkedItems);
  // }, [checkedItems]);

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    // 1. 전체 선택 체크박스가 눌렸는지에 대한 정보를 가져와야함
    if (checked) {
      // 전체 선택을 하는 경우, tableData의 id 값들을 checkedItesm에 배열 형태로 저장
      const idArray = [];
      tableData.forEach((el) => {
        idArray.push(el.id);
      });
      setCheckedItem(idArray);
    } else {
      // 전체 선택 해제 시, checkedItems를 빈 배열로 만듬
      setCheckedItem([]);
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 각각의 체크 박스가 선택이 되는 경우, checkedItems에 추가가 됨
      setCheckedItem((prev) => [...prev, id]);
    } else {
      // 체크가 해제 되면, 체크된 아이템을 제외한 배열
      setCheckedItem(checkedItems.filter((el) => el !== id));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkedItems.length === tableData.length ? true : false}
            />
          </th>
          <th>제목</th>
          <th>내용</th>
          <th>만든 날짜</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          // map 첫번째인자: 요소, 두번째인자: 인덱스
          return (
            <tr key={data.id}>
              <td>
                <input
                  type="checkbox"
                  value={data.id}
                  checked={checkedItems.includes(data.id) ? true : false}
                  onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                />
              </td>
              <td>{data.title}</td>
              <td>{data.content}</td>
              <td>{data.date}</td>
            </tr>
          );
        })}
      </tbody>
      {checkedItems.length} 개가 선택 되었습니다.
    </table>
  );
};
