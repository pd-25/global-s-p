import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import styles from './Card.module.css';

interface CardProps extends MuiCardProps {
    children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
    return (
        <MuiCard className={`${styles.card} ${className || ''}`} {...props}>
            {children}
        </MuiCard>
    );
}
