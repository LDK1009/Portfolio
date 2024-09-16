import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const LeftHistory = ({children}) => {
    return (
        <>
        <Container>

            {children}
        </Container>
        </>
    );
};

export default LeftHistory;

const Container = styled(motion.div)`
    margin-right:500px;
    text-align:right;
    background-color:blue;
    width:500px;
`