import React from 'react';
import {Carousel} from "react-bootstrap";
export class ControlledCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={1300} height={500} alt="900x500"
                         src="https://static.jabong.com/cms/new-site/Topbanner_Desktop_1540533261655.jpg"/>

                </Carousel.Item>
                <Carousel.Item>
                    <img width={1300} height={500} alt="900x500"
                         src="https://static.jabong.com/cms/new-site/Main-Banner-Diwali-Desktop_1540488964355.jpg"/>

                </Carousel.Item>

            </Carousel>
        )

    }

}