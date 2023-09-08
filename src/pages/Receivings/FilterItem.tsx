import { styled } from "styled-components";

interface FilterProps {
  img: string;
  title: string;
  number: number;
}

function FilterItem({ img, title, number }: FilterProps) {
  return (
    <Wrapper>
      <Icon src={`../../assets/icons/${img}`} />
      <Content>
        <span>{title}</span>
        <span>
          <legend>{number}</legend>건
        </span>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1 1;
`;

const Icon = styled.img`
  width: 49px;
  height: 49px;
`;

const Content = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;

  legend {
    color: #2550d3;
    font-size: 24px;
  }
`;

export default FilterItem;
