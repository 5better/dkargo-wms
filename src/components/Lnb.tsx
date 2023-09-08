import React, { useState } from "react";
import styled from "styled-components";
// import { ReactComponent as LogoImg } from "@/assets/images/logo.svg";
// import { ReactComponent as ArrowImg } from "@/assets/icons/arrow_double_right.svg";

interface MenuItem {
  id: number;
  title: string;
  subMenu?: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "현황보드",
    subMenu: ["소메뉴1", "소메뉴2", "소메뉴3"],
  },
  {
    id: 2,
    title: "상품",
    subMenu: ["소메뉴4", "소메뉴5", "소메뉴6"],
  },
  {
    id: 3,
    title: "입고",
    subMenu: [
      "입고현황",
      "입고예정 등록",
      "입고예정 처리",
      "입고작업내역 조회",
    ],
  },
  {
    id: 4,
    title: "재고",
    subMenu: ["소메뉴4", "소메뉴5", "소메뉴6"],
  },
  {
    id: 5,
    title: "이동",
    subMenu: ["소메뉴4", "소메뉴5", "소메뉴6"],
  },
  {
    id: 6,
    title: "발주",
    subMenu: ["소메뉴4", "소메뉴5", "소메뉴6"],
  },
  {
    id: 7,
    title: "출고",
    subMenu: ["소메뉴4", "소메뉴5", "소메뉴6"],
  },
  { id: 8, title: "관리" },
  { id: 9, title: "통계" },
];

function Lnb() {
  const [expanded, setExpanded] = useState(true);
  const [expandedId, setExpandedId] = useState<number | undefined>(undefined);

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleToggleSubMenu = (id: number) => {
    if (expandedId === id) {
      setExpandedId(undefined);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <Wrapper>
      <LNBWrapper $expanded={expanded}>
        <LogoContainer>
          {/* <LogoImg /> */}
          <ArrowButton onClick={() => handleToggleExpanded()}>
            {">>"}
          </ArrowButton>
        </LogoContainer>
        <ul>
          {menuItems.map((menuItem, index) => (
            <MainMenu
              key={index}
              onClick={() => handleToggleSubMenu(menuItem.id)}
            >
              {menuItem.title}
              {/* {expandedId && menuItem.subMenu && (
                <SubMenuList
                  activeSubMenu={true}
                  itemCount={menuItem.subMenu.length}
                >
                  {menuItem.subMenu.map((subMenuItem, subIndex) => (
                    <SubMenuItem key={subIndex}>{subMenuItem}</SubMenuItem>
                  ))}
                </SubMenuList>
              )} */}
            </MainMenu>
          ))}
        </ul>
      </LNBWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 10;
  transition: all linear 0.4s;
`;

const LNBWrapper = styled.div<{ $expanded: boolean }>`
  width: 65px;
  padding-left: 10px;
  height: 100vh;
  background-color: #011d5c;
  transition: all linear 0.4s;

  ${(props) =>
    props.$expanded &&
    `
  width:202px;
  padding-left: 0;
  `}
`;

const LogoContainer = styled.div`
  height: 176px;
`;

const ArrowButton = styled.button`
  color: #fff;
  width: 24px;
  height: 24px;
`;

const MainMenu = styled.li`
  height: 54px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const SubMenuList = styled.dl<{ activeSubMenu: boolean; itemCount?: number }>`
  background-color: #f3f3f3;
  color: #464c52;
  height: ${(props) =>
    props.activeSubMenu ? `${42 * (props.itemCount || 0)}px` : "0"};
  overflow: hidden;
  transition: all linear 0.4s;
`;

const SubMenuItem = styled.dd<{ active?: boolean }>`
  height: 42px;
  cursor: pointer;
`;

export default Lnb;
