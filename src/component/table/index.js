import React from 'react';
import DefaultTable from "./defaultTable";
import CustomTable from "./customTable";

const Table = ({data, onAdd, onEdit, onRemove}) =>
    (<>
        {
            Array.isArray(data) ? (
                <DefaultTable
                    data={data}
                    onAdd={onAdd}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            ) : (
                <CustomTable
                    data={data}
                    onAdd={onAdd}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            )
        }
    </>);

export default Table;
