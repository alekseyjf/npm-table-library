import React from 'react';
import {RowCustom, ButtonAddRowBottom, ButtonAddRowTop, ButtonRemoveRow} from "./style/style";
import Cell from '../cell';

const Row = ({
     header,
     children,
     toggleEditCell,
     addRowToTop,
     addRowToBottom,
     removeRow,
     lengthRow
 }) => {
    const onAddRowToTop = () => addRowToTop();
    const onAddRowToBottom = () => addRowToBottom();
    const onRemoveRow = () => removeRow();

    return (
        <RowCustom header={header}>
            {
                Boolean(!header) && (
                    <div className="button-group">
                        <ButtonAddRowTop onClick={onAddRowToTop} className='btn'>+</ButtonAddRowTop>
                        <ButtonRemoveRow onClick={onRemoveRow} className='btn'>x</ButtonRemoveRow>
                        <ButtonAddRowBottom onClick={onAddRowToBottom} className='btn'>+</ButtonAddRowBottom>
                    </div>
                )
            }

            {children.map((item, idx) =>
                <Cell
                    lengthRow={lengthRow}
                    toggleEditCell={toggleEditCell(idx)}
                    key={idx}
                >
                    {item}
                </Cell>
            )}
        </RowCustom>
    )};

export default Row;
