import React from 'react';
import theme from '../../../theme';
import styled from 'styled-components';

const Page3 = () => {
    return (
        <>
         <Container>
            </Container>   
        </>
    );
};

export default Page3;

const Container = styled.div`
  height: 100vh;
  background-color: ${theme.color.serveColor2};
  scroll-snap-align: center;
  padding: 40px;
  padding-top: 80px;
  display: flex;
  align-items: center;
`;