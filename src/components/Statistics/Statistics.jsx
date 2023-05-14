import React from "react";
import PropTypes from 'prop-types';
import { Statistics, Title, StatList, Item, Label, Percentage } from './Statistics.styled'

export const Statistic = ({ stats, title }) => {
    return (
        <Statistics>
            {title && <Title>Upload stats</Title>}
            <StatList>
                {stats.map((item, idx) => (
                    <Item key={item.id} id={item.id} index={idx}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </Item>
                ))}
            </StatList>
        </Statistics>
    )
}