import { useGetReceivingsIdExpect } from "@/hooks/reactQuery/useGetReceivingsIdExpect";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Divider, Radio, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ReceivingProductResult } from "@/types/Receiving";
import { useReceivingProduct } from "@/hooks/reactQuery/useGetReceivingProduct";
import dayjs from "dayjs";

dayjs.locale("ko");

function Receiving() {
  const { param } = useParams();

  const { data: expectData } = useGetReceivingsIdExpect({
    id: Number(param),
  });

  const {
    data: productData,
    isLoading,
    isRefetching,
  } = useReceivingProduct({
    productSetId: 2,
  });

  console.log(expectData, productData);

  const columns: ColumnsType<ReceivingProductResult> = [
    {
      title: "번호",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "출고상품 코드",
      dataIndex: "code",
    },
    {
      title: "출고상품 명",
      dataIndex: "itemName",
    },
    {
      title: "거래처",
      dataIndex: "vendorName",
    },
    {
      title: "상태",
      dataIndex: "status",
      sorter: true,
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
      title: "처리일자",
      dataIndex: "productName",
      sorter: true,
    },
    {
      title: "처리방법",
      dataIndex: "",
      sorter: true,
    },
    {
      title: "로케이션",
      dataIndex: "locationCode",
      sorter: true,
    },
    {
      title: "제품코드",
      dataIndex: "code",
    },
    {
      title: "시리얼",
      dataIndex: "serialNumber",
    },
    {
      title: "등급",
      dataIndex: "rating",
      sorter: true,
    },
    {
      title: "근내지방",
      dataIndex: "marbledMeat",
    },
    {
      title: "수량",
      dataIndex: "quantity",
      sorter: true,
    },
    {
      title: "중량",
      dataIndex: "weight",
      sorter: true,
    },
    {
      title: "단가",
      dataIndex: "price",
    },
    {
      title: "이력번호",
      dataIndex: "traceabilityNo",
    },
    {
      title: "생산일",
      dataIndex: "createdAt",
      sorter: true,
      render: (date) => {
        return <>{dayjs(date).format("YYYY.MM.DD")}</>;
      },
    },
    {
      title: "출고일자",
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
      title: "유통기한",
      dataIndex: "expirationDate",
      sorter: true,
      render: (date) => {
        return <>{dayjs(date).format("YYYY.MM.DD")}</>;
      },
    },
  ];

  return (
    <Wrapper>
      <h4>입고등록 상세페이지</h4>
      <InfoContainer>
        <li>입고예정 정보</li>
        <li>
          <div>입고예정코드/입고구분</div>
          <div>{expectData?.id}</div>
          <div>진행상태</div>
          <div>입하완료</div>
          <div>거래처</div>
          <div>설로인,소잡는 녀석들,OEM</div>
          <div>입고예정코드 메모</div>
          <div>0</div>
        </li>
        <li>
          <div>입고예정일</div>
          <div>
            <input type="date"></input>
            <input type="time"></input>
          </div>
          <div>등록자/일자</div>
          <div>김디카/2022.11.11 13:31:56</div>
          <div>최종완료 일자</div>
          <div>-</div>
        </li>
      </InfoContainer>
      <TableContainer>
        <Table
          columns={columns}
          dataSource={Array.isArray(productData) ? productData : []}
          loading={isLoading}
          rowKey={(render) => render.id}
        />
      </TableContainer>
      <StatusContainer>
        <span>상태변경</span>
        <button>수정</button>
        <button>입고예정 취소</button>
        <button>입하처리</button>
        <button>입고처리</button>
      </StatusContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 20px 26px;
  background-color: #f3f3f3;
  border: 1px solid #999;
`;

const InfoContainer = styled.ul`
  background-color: #fff;
  border: 1px solid #d9d9d9;
`;

const TableContainer = styled.div`
  margin: 30px 0;
`;

const StatusContainer = styled.div`
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border: 1px solid #d9d9d9;

  span {
    margin-right: 98px;
    color: #666;
    font-size: 15px;
  }

  button {
    width: 101px;
    height: 32px;
    padding: 8px 12px;
    background-color: #fff;
    border: 1px solid #9ea4aa;
    border-radius: 4px;
    font-size: 12px;
    font-weihgt: 600;
    gap: 5px;
  }
`;

export default Receiving;
