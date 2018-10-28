import React from 'react';
import {Carousel} from "react-bootstrap";
export class Carousel2 extends React.Component {

    confirm(){
        confirm("Are you sure you want to leave the page?");
    }
    render() {


        return (
            <div className="container2">
            <div className="for-carousel">
            <Carousel>
                <Carousel.Item>
                    <img width={700} height={400} alt="700x400"
                         src="https://static.jabong.com/cms/new-site//TNR-tnr-01082017_desktop_1501590877705.gif"/>

                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={500} alt="700x400"
                         src="http://www.faadoodeals.com/wp-content/uploads/2016/08/B3596_Women_Main-Slider-1_Minimum-30-70-Off-SALE_01082016.gif"/>

                </Carousel.Item>

            </Carousel>


            </div>

                <p><marquee>Rs.500 Voucher on products of Rs.1000 and more.................<span className="scrollbanner" >Hurry!!!!</span></marquee></p>
                <a  className=" previous-page" href="#" onClick={this.confirm}>Previous Page</a>
                <a className="next-page" href="https://www.jabong.com/" onClick={this.confirm}>Next Page </a>
            </div>
        )

    }


}