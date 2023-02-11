import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props: IProps) => props.justifyContent || 'flex-start'};
  align-items: ${(props: IProps) => props.alignItems || 'flex-start'};
  flex-direction: ${(props: IProps) => props.direction || 'row'};
`;

export default function FlexBox(props: IProps) {
  return <FlexContainer {...props}>{props.children}</FlexContainer>;
}
