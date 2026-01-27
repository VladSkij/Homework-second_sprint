import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                color:"#00CC22",
                width:"174px",
                "& .MuiSlider-rail": {
                    bgcolor: "#8b8b8b",
                },
                "& .MuiSlider-thumb": {
                    width: 18,
                    height: 18,
                    bgcolor: "white",
                    border: "2px solid #00CC22",
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                        boxShadow: "none",
                    },
                    "&::after": {
                        width: 6,
                        height: 6,
                        backgroundColor: "#00CC22",
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
