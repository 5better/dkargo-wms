import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function Receiving() {
  const params = useParams();

  return (
    <Wrapper>
      <h4>입고등록 상세페이지</h4>
      <InfoContainer>
        <li>입고예정 정보</li>
        <li>
          <div>입고예정코드/입고구분</div>
          <div>20221110A01</div>
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
      <TableContainer></TableContainer>
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

const TableContainer = styled.div``;

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
