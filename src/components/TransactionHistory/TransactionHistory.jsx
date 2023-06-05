import React from "react";
import PropTypes from 'prop-types';
import { TableData, TableDataItem, TableDataList, TableHistoty, TableTitle, TableTitleList } from './TransactionHistory.styled';

export const TransactionHistory = ({ data }) => { 
    return (
        <TableHistoty>
            <TableTitle>
                <TableTitleList>
                    <TableDataItem>Type</TableDataItem>
                    <TableDataItem>Amount</TableDataItem>
                    <TableDataItem>Currency</TableDataItem>
                </TableTitleList>
            </TableTitle>

            <TableData>
                {data.map((item, idx) => (
                    <TableDataList key={item.id} id={item.id} index={idx}>
                        <TableDataItem>{item.type}</TableDataItem>
                        <TableDataItem>{item.amount}</TableDataItem>
                        <TableDataItem>{item.currency}</TableDataItem>
                    </TableDataList>
                ))}
            </TableData>
        </TableHistoty>
    );
};

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired).isRequired
};
