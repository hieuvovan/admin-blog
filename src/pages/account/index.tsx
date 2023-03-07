import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export interface IAccountProps {}

export default function Account(props: IAccountProps) {
  const user = useSelector((state: RootState) => state.authReducer.user);
  return <div>This is account page {JSON.stringify(user)}</div>;
}
