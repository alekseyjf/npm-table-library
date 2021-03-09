import React, {useState, useEffect} from 'react';
import Row from '../row/row';
import {TableCustom} from './css/style';

const Table = ({data, onAdd, onEdit, onRemove}) => {
    const [table, setTable] = useState(data);
    const [lengthRow, setLengthRow] = useState(data);
    useEffect(() => {
        setLengthRow(() => {
            const countLength = getCountLength(data.header, 'head') > getCountLength(data.rows)
                ? getCountLength(data.header, 'head')
                : getCountLength(data.rows);

            return countLength;
        })

        setTable(data);
    }, [data]);

    const getCountLength = (arr, head) => {
        let countLength = 0;

        if(head === "head") {
            countLength = arr.length;
        } else {
            arr.forEach(item => {
                countLength = item.length > countLength ? item.length : countLength
            });
        }

        return countLength;
    }

    const toggleEditHeaderCell = (x) => (val) => {
        setTable((curTable => {
            let newTable = {...curTable};
            newTable.header[x].title = val;
            onEdit(newTable);

            return newTable;
        }));
    }

    const toggleEditCell = (x) => (y) => (val) => {
        setTable((curTable => {
            let newTable = {...curTable};
            newTable.rows[x][y].value = val;
            onEdit(newTable);

            return newTable;
        }));
    }

    const addRowToTop = (idx) => () => addRow(idx);

    const addRowToBottom = (idx) => () => addRow(idx + 1);
    const removeRow = (row) => () => {
        setTable((currTable) => {
            const newTable = {...currTable}
            const arr1 = newTable.rows.slice(0, row);
            const arr2 = newTable.rows.slice(row + 1);

            newTable.rows = [...arr1, ...arr2];
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
            const newTable = {...currTable}
            const arr1 = newTable.rows.slice(0, idx);
            const arr2 = newTable.rows.slice(idx);

            let newRow = new Array(lengthRow);

            for(let i=0; i < newRow.length; i++) {
                newRow[i] =  {value: ''};
            }

            newTable.rows = [...arr1, newRow, ...arr2];
            onAdd(newTable);

            return newTable;
        });
    }

    const renderHeader = () => (
        <Row
            header={true}
            lengthRow={lengthRow}
            toggleEditCell={toggleEditHeaderCell}
        >
            {table.header.map(item => item.title)}
        </Row>
    )

    const renderRows = () => (
        table.rows.map((item, idx) => {
            return (
                <Row
                    lengthRow={lengthRow}
                    toggleEditCell={toggleEditCell(idx)}
                    addRowToTop={addRowToTop(idx)}
                    addRowToBottom={addRowToBottom(idx)}
                    removeRow={removeRow(idx)}
                    key={idx}
                >
                    {item.map( innerItem => innerItem.value)}
                </Row>
            )
        })
    )

    return (
        <TableCustom>
            {renderHeader()}
            {renderRows()}
        </TableCustom>
    )
}

export default Table;
