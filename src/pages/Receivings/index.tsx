import { styled } from "styled-components";
import { useGetReceivingsSummary } from "@/hooks/reactQuery/useGetReceivingsSummary";
import FilterItem from "@/pages/Receivings/FilterItem";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetReceivingsExpect } from "@/hooks/reactQuery/useGetReceivingsExpect";
import { ReceivingsExpectResult } from "@/types/Receivings";
import dayjs from "dayjs";

dayjs.locale("ko");

function Receivings() {
  const { data: summaryData } = useGetReceivingsSummary();
  const defaultParams = {
    chooseIds: false,
    direction: "ASC",
    endDate: "",
    page: 1,
    searchDateType: "",
    searchIds: [],
    searchText: "",
    searchTextType: "",
    size: 1,
    sortColumns: [],
    startDate: "",
    statusList: [],
    typeList: [],
    vendorName: "",
  };
  const {
    data: expectData,
    refetch,
    isLoading,
  } = useGetReceivingsExpect(defaultParams);

  if (summaryData) {
    const lengths = Object.values(summaryData).map((arr) => arr.length);
    const sumOfNumbers = lengths.reduce((a, b) => a + b, 0);
    const totalLengths = [sumOfNumbers, ...lengths];
    const titles = [
      "전체",
      "입고예정",
      "입고 진행중",
      "당일 입고예정 취소",
      "당일 입고완료",
      "입고지연",
    ];
    const filterItems = totalLengths.map((number, index) => ({
      img: `filter_${index + 1}.svg`,
      title: titles[index],
      number: index === 0 ? sumOfNumbers : number,
    }));

    const columns: ColumnsType<ReceivingsExpectResult> = [
      {
        title: "번호",
        dataIndex: "id",
        width: "5%",
      },
      {
        title: "입고예정 코드",
        dataIndex: "receivingCode",
      },
      {
        title: "입고예정 일",
        dataIndex: "scheduledDate",
        sorter: true,
        render: (date) => {
          return <>{dayjs(date).format("YYYY.MM.DD")}</>;
        },
      },
      {
        title: "거래처",
        dataIndex: "vendorName",
        render: (name) => {
          return <>{name}</>;
        },
      },
      {
        title: "입고구분",
        dataIndex: "type",
        render: (type) => {
          let typeName = type;
          if (type === "NORMAL") {
            typeName = "일반입고";
          } else if (type === "RETURN") {
            typeName = "반품입고";
          }
          return <>{typeName}</>;
        },
      },
      {
        title: "진행상태",
        dataIndex: "status",
        render: (stat) => {
          let statusType = stat;
          if (stat === "ARRIVAL") {
            statusType = "입고완료";
          } else if (stat === "CANCEL_EXPECT") {
            statusType = "입고예정취소";
          }
          return <>{statusType}</>;
        },
      },
      {
        title: "출고상품 명",
        dataIndex: "productName",
      },
      {
        title: "전체",
        dataIndex: "",
      },
      {
        title: "미입하",
        dataIndex: "notYetArrivalQuantity",
      },
      {
        title: "예정취소",
        dataIndex: "cancelQuantity",
      },
      {
        title: "회송/양품",
        dataIndex: "resendingQuantity",
      },
      {
        title: "입하",
        dataIndex: "arrivalQuantity",
      },
      {
        title: "입고",
        dataIndex: "expectedQuantity",
      },
      {
        title: "등록자",
        dataIndex: "creatorName",
      },
      {
        title: "등록일",
        dataIndex: "createdAt",
        sorter: true,
        render: (date) => {
          return <>{dayjs(date).format("YYYY.MM.DD")}</>;
        },
      },
      {
        title: "최종완료일",
        dataIndex: "doneDate",
        sorter: true,
        render: (date) => {
          if (date) {
            return <>{dayjs(date).format("YYYY.MM.DD")}</>;
          } else {
            return "-";
          }
        },
      },
      {
        title: "입고예정메모",
        dataIndex: "memos",
        render: (memo) => {
          return <>{memo.length}</>;
        },
      },
    ];

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
          <span>조회기간</span>
          <div>
            <select>
              <option>등록일자</option>
              <option>입고예정일</option>
              <option>최종완료일</option>
            </select>
            <input type="date"></input>
            <PeriodButton>
              <button>오늘</button>
              <button>일주일</button>
              <button>1개월</button>
              <button>3개월</button>
              <button>12개월</button>
            </PeriodButton>
          </div>
          <SearchBox>
            <span>검색</span>
            <div>
              <select>
                <option>입고예정 코드</option>
                <option>출고상품명</option>
                <option>출고상품코드</option>
                <option>시리얼번호</option>
                <option>등록자</option>
                <option>메모내용</option>
              </select>
              <input placeholder="검색어 입력"></input>
            </div>
            <span>진행상태</span>
            <div>
              <select>
                <option>전체</option>
                <option>입고예정</option>
              </select>
            </div>
            <span>거래처</span>
            <div>
              <select>
                <option>전체</option>
                <option>입고예정</option>
              </select>
            </div>
            <span>입고구분</span>
            <div>
              <select>
                <option>전체</option>
                <option>입고예정</option>
              </select>
            </div>
          </SearchBox>
          <div>
            <button>검색</button>
            <button>초기화</button>
          </div>
        </SearchContainer>
        <TableContainer>
          <Table
            columns={columns}
            dataSource={Array.isArray(expectData) ? expectData : []}
            loading={isLoading}
            rowKey={(render) => render.id}
          />
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
  display: flex;
  flex-direction: column;
  gap: 6px;
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

const SearchContainer = styled.div`
  height: 245px;
  padding: 20px 25px;
  background-color: #fff;
  border: 1px solid #d9d9d9;

  button {
    padding: 12px 24px;
    border: 1px solid #9ea4aa;
  }
`;

const PeriodButton = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #e8ebed;
    padding: 8px 12px;
    border-radius: 30px;
    border: none;
  }
`;

const SearchBox = styled.div`
  display: flex;
`;

const TableContainer = styled.div``;

export default Receivings;
