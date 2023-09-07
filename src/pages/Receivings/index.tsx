import { styled } from "styled-components";
import { useGetReceivingsSummary } from "@/hooks/reactQuery/useGetReceivingsSummary";
import FilterItem from "@/components/FilterItem";

function Receivings() {
  // const { data } = useGetReceivingsSummary();

  return (
    <Wrapper>
      <FilterContainer>{/* <FilterItem></FilterItem> */}</FilterContainer>
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
      <TableContainer></TableContainer>
    </Wrapper>
  );
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
const SearchContainer = styled.ul``;

const TableContainer = styled.div``;

export default Receivings;
