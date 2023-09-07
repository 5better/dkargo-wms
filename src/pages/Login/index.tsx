import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import logoImg from "@/assets/images/logo_1.svg";
import { usePostLogin } from "@/hooks/reactQuery/usePostLogin";
import { useNavigate } from "react-router-dom";

interface InputsProps {
  email: string;
  password: string;
  rememberId: boolean;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("아이디 또는 비밀번호를 잘못 입력했습니다.")
    .max(50)
    .required("아이디를 입력해주세요."),
  password: yup
    .string()
    .matches(/[a-zA-Z]/)
    .matches(/\d/)
    .matches(/[!@#$%^&*()]/)
    .min(6)
    .max(50)
    .required("비밀번호를 입력해주세요."),
  rememberId: yup.boolean().default(false),
});
function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginMutation = usePostLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({
    resolver: yupResolver(schema),
  });

  //TODO: 로그인 저장 localStorage, 로딩처리 마무리

  const onSubmit: SubmitHandler<InputsProps> = async (data) => {
    setIsLoading(true);

    await loginMutation
      .mutateAsync({
        email: data.email,
        password: data.password,
      })
      .then((r) => {
        if (data.rememberId) {
          // document.cookie = `lastLoggedInUser=${data.email}; max-age=86400`;
        }
        navigate("/receivings");
      });

    setIsLoading(false);
  };

  return (
    <Wrapper>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <LogoBox>
          <img src={logoImg} alt="logo" />
          <span>Warehouse Management System</span>
        </LogoBox>
        <span>아이디(이메일)</span>
        <input
          {...register("email")}
          placeholder="아이디 입력"
          value={"master@sirloin.io"}
        />
        <span>비밀번호</span>
        <input
          {...register("password")}
          type="password"
          placeholder="비밀번호 입력"
          value={"qwer1234!"}
        />
        <label>
          <input
            {...register("rememberId")}
            type="checkbox"
            className="checkbox"
          />
          아이디 저장
        </label>
        <ErrorMessage>
          {(errors.email || errors.password) && (
            <span>아이디 또는 비밀번호를 잘못 입력했습니다.</span>
          )}
        </ErrorMessage>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.form`
  width: 460px;
  height: 450px;
  padding: 58px 64px 38px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  input {
    width: 100%;
    padding: 6px 12px;
    margin: 8px 0;
    border: 1px solid #72787f;
    border-radius: 8px;
  }

  label {
    display: flex;
    align-items: center;

    .checkbox {
      width: 24px;
      height: 24px;
      margin: 0 12px 0 0;
    }
  }
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ErrorMessage = styled.div`
  height: 38px;
  color: #f00;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #2550d3;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
`;

export default Login;
