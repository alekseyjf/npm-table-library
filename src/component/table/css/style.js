import styled from 'styled-components';

export const TableCustom = styled.div(() => ({
    border: '1px solid grey',
    color: '#333',
    fontSize: '16px',
    margin: '50px 30px',
    width: 'calc(100% - 60px)',
    '&:empty': {
        display: 'none'
    }
}))
