import React from 'react';
import {slider} from './bannerSlider'

// Components
import { Item } from './item';

// MUI components
import Carousel from 'react-material-ui-carousel'


export const Banner = () => {

    return (
        <Carousel>
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}