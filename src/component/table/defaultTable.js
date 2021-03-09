import React, {useState, useEffect} from 'react';
import Row from '../row/row';
import {TableCustom} from './css/style';

const Table = ({data, onAdd, onEdit, onRemove}) => {
    const [table, setTable] = useState(data);
    const [lengthRow, setLengthRow] = useState(data);
    useEffect(() => {
        setLengthRow(() => {
            let countLength = 0;
            data.forEach(item => {
                countLength = item.length > countLength ? item.length : countLength
            });

            return countLength
        })

        setTable(data);
    }, [data]);

    const toggleEditCell = (x) => (y) => (val) => {
        setTable((curTable => {
            let newTable = [...curTable];
            newTable[x][y] = val;
            onEdit(newTable);

            return [...newTable];
        }));
    }

    const addRowToTop = (idx) => () => addRow(idx);

    const addRowToBottom = (idx) => () => addRow(idx + 1);

    const removeRow = (row) => () => {
        setTable((currTable) => {
            const arr1 = currTable.slice(0, row);
            const arr2 = currTable.slice(row + 1);

            const newTable = [...arr1, ...arr2];
            onRemove(newTable);

            return newTable;
        });
    }

    /**
     * @method addRow
     * @private
     * @param idx
     * @return newTable
     */
    const addRow = (idx) => {
        setTable((currTable) => {
            const arr1 = currTable.slice(0, idx);
            const arr2 = currTable.slice(idx);

            let newRow = new Array(lengthRow);

            for(let i=0; i < newRow.length; i++) {
                newRow[i] = '';
            }

            const newTable = [...arr1, newRow, ...arr2];
            onAdd(newTable);

            return newTable;
        });
    }

    return (
        <TableCustom>
            {
                table.map((item, idx) => (
                    <Row
                        lengthRow={lengthRow}
                        toggleEditCell={toggleEditCell(idx)}
                        addRowToTop={addRowToTop(idx)}
                        addRowToBottom={addRowToBottom(idx)}
                        removeRow={removeRow(idx)}
                        key={idx}
                    >
                        {item}
                    </Row>
                ))
            }
        </TableCustom>
    )
}

export default Table;
