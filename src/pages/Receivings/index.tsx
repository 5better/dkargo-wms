import { styled } from "styled-components";
import { useGetReceivingsSummary } from "@/hooks/reactQuery/useGetReceivingsSummary";
import FilterItem from "@/pages/Receivings/FilterItem";
import { Table } from "antd";

function Receivings() {
  const { data: summaryData } = useGetReceivingsSummary();

  if (summaryData) {
    const lengths = Object.values(summaryData).map((arr) => arr.length);
    const sumOfNumbers = lengths.slice(1).reduce((a, b) => a + b, 0);
    const totalLengths = [sumOfNumbers, ...lengths];
    const titles = [
      "전체",
      "입고예정",
      "당일 입고예정 취소",
      "입고 진행중",
      "당일 입고완료",
      "입고지연",
    ];
    const filterItems = totalLengths.map((number, index) => ({
      img: `filter_${index + 1}.svg`,
      title: titles[index],
      number: index === 0 ? sumOfNumbers : number,
    }));
    return (
      <Wrapper>
        <FilterContainer>
          {filterItems.map((item, index) => (
            <FilterItem
              key={index}
              img={item.img}
              title={item.title}
              number={item.number}
            />
          ))}
        </FilterContainer>
        <SearchContainer>
          <li>
            <span>조회기간</span>
            <select>
              <option>등록일자</option>
              <option>입고예정일</option>
              <option>최종완료일</option>
            </select>
          </li>
          <li>
            <button>오늘</button>
            <button>일주일</button>
            <button>1개월</button>
            <button>3개월</button>
            <button>12개월</button>
          </li>
          <li>검색</li>
          <li>진행상태</li>
          <li>
            <button>검색</button>
            <button>초기화</button>
          </li>
        </SearchContainer>
        <TableContainer>
          <Table />
        </TableContainer>
      </Wrapper>
    );
  } else {
    return null;
  }
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 20px 26px;
  background-color: #f3f3f3;
  border: 1px solid #999;
`;

const FilterContainer = styled.div`
  height: 98px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
`;

const SearchContainer = styled.ul`
  height: 245px;
`;

const TableContainer = styled.div``;

export default Receivings;
