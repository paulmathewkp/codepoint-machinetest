import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { FormControl, MenuItem, Select, Typography, FormControlProps, SelectChangeEvent } from "@mui/material";

const StyledFormControl = styled(FormControl)(({ style }: { style?: any }) => ({
    // width
    'fieldset': {
        borderRadius: '16px',  // borderRadius
        border: 'none',
        ...style?.fieldset
    },
    '.MuiSelect-select': {
        padding: '5px 10px',
        fontSize: 12,
        color: '#252628',
        fontWeight: 500,
        borderRadius: '16px',  // borderRadius
        backgroundColor: '#F5F5F5',
        ...style?.select
    },
    ...style?.root
}));

const StyledLabel = styled(Typography)(({ style }: { style?: any }) => ({
    fontSize: 13,
    color: '#252525',
    fontWeight: 500,
    ...style?.label
}));

interface ButtonDropdownProps {
    onChange: (value: string) => void;
    data: { value: string | number; name: string | number }[];
    style?: any;
    value?: any;
    label?: string | number;
}

function ButtonDropdown({ data, style, onChange, value, label }: ButtonDropdownProps) {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    };

    return (
        <StyledFormControl style={style}>
            {label ? <StyledLabel style={style}>{label}</StyledLabel> : null}
            <Select
                defaultValue={'select'}
                value={value ? value : 'select'}
                onChange={handleChange}
            >
                <MenuItem value={'select'} disabled>Select</MenuItem>
                {data.map((item, index) => (
                    <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    )
}

ButtonDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ButtonDropdown;