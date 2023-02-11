import * as React from 'react';
import Child from './Child';

export interface IProps {}

export default function Register(props: IProps) {
  const [dataFormList, setDataFormList] = React.useState({
    data: [
      {
        id: 1,
        name: '井上 拓真',
        position: 2,
        created_by: 1,
        updated_by: 1,
        created_at: '2023-01-17T02:11:26.000000Z',
        updated_at: '2023-01-17T02:11:26.000000Z',
      },
      {
        id: 53,
        name: 'sdfsdf1212',
        position: 1,
        created_by: 1,
        updated_by: 1,
        created_at: null,
        updated_at: null,
      },
      {
        id: 52,
        name: 'sdfsdf1212',
        position: 3,
        created_by: 1,
        updated_by: 1,
        created_at: null,
        updated_at: null,
      },
    ],
  });

  return <Child dataFormList={dataFormList} />;
}
