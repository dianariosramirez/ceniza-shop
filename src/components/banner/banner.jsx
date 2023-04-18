import React from 'react';
import { sliderToCarrusel } from './bannerSlider'

// Components
import { Item } from './Item';

// MUI components
import Carousel from 'react-material-ui-carousel'


export const Banner = () => {

    return (
        <Carousel>
            {
                sliderToCarrusel.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}