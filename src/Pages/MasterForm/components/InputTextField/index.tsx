import styled from "@emotion/styled";
import { Stack, TextField, StackProps } from "@mui/material";
import PropTypes from 'prop-types';

interface InputTextFieldProps {
    style?: any;
    placeholder?: any;
    label?: string | number;
}

const StyledLabel = styled('label')(({ theme, style }: { theme?: any, style?: any }) => ({
    display: 'block',
    color: '#252525',
    fontSize: 13,
    fontWeight: 500,
    ...(style?.label || {})
}));

const StyledInput = styled(TextField)(({ style }: { style?: any }) => ({
    'input': {
        padding: '8px 10px',
        fontWeight: 500,
        fontSize: 14,
        '::placeholder': {
            fontSize: 13
        }
    },
    'fieldset': {
        borderRadius: '4px',
    },
    ...(style?.input || {})
}));

function InputTextField({ style, placeholder, label }: InputTextFieldProps) {
    return (
        <Stack sx={{ gap: '5px', ...(style?.stack || {}) }}>
            {label ? <StyledLabel style={style}>{label}</StyledLabel> : null}
            <StyledInput
                style={style}
                placeholder={placeholder ? placeholder : undefined}
            />
        </Stack>
    )
}

InputTextField.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputTextField;