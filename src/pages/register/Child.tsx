import * as React from 'react';

interface IData {
  id: number;
  name: string;
  position: number;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

interface IDataFormList {
  data: IData[];
}

export interface IAppProps {
  dataFormList: IDataFormList;
}

export default function Child(props: IAppProps) {
  console.log(props);
  return <div></div>;
}
