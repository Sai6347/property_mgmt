import React from "react";
import { Typography, TypographyProps, styled } from '@mui/material';
import theme from "../../../theme";

export interface TypoProps {
    variant: TypographyProps['variant'],
    label: string,
    color?: string, 
}


const StyledTypography = styled(Typography) (() => ({
    width: '100%',
    maxWidth:'750px',
    padding: '10px'
}));

const TypographyAtom: React.FC<TypoProps> = ({ variant, label, color}) => {
    return(
        <StyledTypography variant={variant} color={color}>{ label }</StyledTypography>
    );
}

export default TypographyAtom;