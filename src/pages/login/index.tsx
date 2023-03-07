import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { ILoginData } from '../../interfaces/form';

import styled from 'styled-components';
import './login.scss';
import FlexBox from '../../components/flexbox';

import Logo from '../../assets/logo.svg';

import { loginAction } from '../../reducers/authSlice';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store';

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LOGIN_FIELDS = [
  {
    rules: [
      {
        message: 'Email is required',
        required: true,
      },
    ],
    name: 'email',
    placeholder: 'Email',
    icon: <UserOutlined />,
  },
  {
    rules: [
      {
        message: 'Password is required',
        required: true,
      },
    ],
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    icon: <LockOutlined />,
  },
];

export default function Login() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onLogin = async ({ email, password }: ILoginData) => {
    setLoading(true);
    await dispatch(loginAction({ email, password }, onLoginSuccess));
    setLoading(false);
  };

  const onLoginSuccess = () => {
    navigate('/');
  };

  return (
    <LoginPageContainer>
      <img
        className="logo"
        width={100}
        height={100}
        src={Logo}
        alt="Hieu vo video call"
      />
      <Form
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onLogin}
      >
        {LOGIN_FIELDS.map(({ name, rules, placeholder, type, icon }) => (
          <Form.Item
            key={name}
            {...{ name, rules }}
          >
            <Input
              prefix={icon}
              placeholder={placeholder}
              type={type}
            />
          </Form.Item>
        ))}
        <FlexBox justifyContent="space-between">
          <a href="/auth/register">Register</a>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </FlexBox>
        <Form.Item>
          <Button
            className="btn-fullwidth btn-login"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginPageContainer>
  );
}
