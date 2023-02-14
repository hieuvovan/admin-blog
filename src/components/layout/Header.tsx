import * as React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth';

export default function Header() {
  const navigate = useNavigate();

  const onLogout = async () => {
    await authService.logout(onLogoutSuccess);
  };

  const onLogoutSuccess = () => navigate('/auth/login');

  return (
    <div>
      This is header
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
}
