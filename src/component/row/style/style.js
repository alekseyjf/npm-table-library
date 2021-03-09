import styled from 'styled-components';

const rowCustom = ({header}) => ({
    background: header ? '#eee' : '',
    display: 'flex',
    width: '100%',
    position: 'relative',
    '& + &': {
        borderTop: '1px solid #212121',
    },
    '.button-group .btn': {
        opacity: '0',
        cursor: 'pointer',
        border: 'none'
    },
    '&:hover': {
        '.button-group .btn': {
            opacity: '1'
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-28px',
        bottom: 0,
        width: '28px'
    }
})

const buttonAddRow = () => ({
    background: '#0c0',
    color: '#212121',
    display: 'block',
    fontSize: '16px',
    padding: '4px',
    borderRadius: '50%',
    height: '24px',
    width: '24px',
    position: 'absolute',
    left: '-16px',
    marginLeft: '-12px',
    outline: 'none',
    '&:hover': {
        color: 'red',
    }
});

const buttonAddRowTop = (style) => ({
    ...style,
    top: '2px'
})

const buttonAddRowBottom = (style) => ({
    ...style,
    bottom: '2px'
})

const buttonRemoveRow = (style) => ({
    ...style,
    top: '50%',
    color: '#fff',
    background: 'red',
    marginTop: '-12px',
    '&:hover': {
        color: 'green'
    }
})
export const ButtonAddRowTop = styled.button(buttonAddRowTop(buttonAddRow()));
export const ButtonAddRowBottom = styled.button(buttonAddRowBottom(buttonAddRow()));
export const ButtonRemoveRow = styled.button(buttonRemoveRow(buttonAddRow()));

export const RowCustom = styled.div(() => (rowCustom))
