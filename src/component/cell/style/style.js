import styled from 'styled-components';

const cell = ({lengthRow, edit}) => ({
    padding: !edit ? '28px 40px 28px 16px' : '28px 60px 28px 16px',
    position: 'relative',
    minHeight: '76px',
    flex: '0 1 auto',
    width: `calc(100% / ${lengthRow})`,
    '.btn': {
        opacity: '0'
    },
    '& + &': {
        borderLeft: '1px solid #212121',
    },
    '&:hover': {
        boxShadow: 'inset 0 0 20px 0 rgba(0,255,255, .3)',
        '.btn': {
            opacity: '1'
        }
    }
});

const buttonEdit = () => ({
    background: 'none',
    border: '1px solid grey',
    padding: '2px',
    borderRadius: '5px',
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
});

const customInput = () => ({
    background: 'none',
    border: '1px solid grey',
    padding: '4px',
    borderRadius: '5px',
    width: '100%'
});

export const CellCustom = styled.div(cell);

export const ButtonEdit = styled.button(buttonEdit);

export const CustomInput = styled.input(customInput);

export const Field = styled.div(()=>({
    display: 'flex'
}));

export const GroupCellBtn = styled.div(()=>({
    display: 'flex',
    position: 'absolute',
    right: '2px',
    top: '50%',
    transform: 'translateY(-50%)'
}));
