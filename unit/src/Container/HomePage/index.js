import React, {Component} from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import '../style.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container home_page">
                    <h1 className="text-center">Unit Converter</h1>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-NT9rcd_VaFYRJTCevTRsf5jhaLvc2RXEASiVJZxmHSGlgJQZ" className="image"/>
                    <p>A unit is a measurement of a quantity that is defined or adopted by tradition or 
                        law. Other quantities can be expressed as a multiple of the unit.
                        In human history, various unit systems were developed and used in different 
                        regions and cultures. Currently, the global standard of measurement is the 
                        International System of Units (SI), which is a modern form of the metric system. 
                        Although SI is intended for global use, it has not been fully adopted, and some 
                        other systems of measurement are still used in parts of the world.
                        The intent of this site is to provide a convenient means to convert between 
                        the various units of measurement within different systems, as well as to provide 
                        a basic understanding of the systems currently in use, and how they interact. 
                        Refer to the Common Unit Systems page for further information.</p>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSipaZniyfQtM-Q4SgR4f_RzjTKYqV26lTt6sQ6FrVExR-R_hMZ" className="image"/>
                    <h3>Conversion factors</h3>
                    <p>A conversion factor is used to change the units of a measured quantity without
                        changing its value. The unity bracket method of unit conversion consists of a 
                        fraction in which the denominator is equal to the numerator, but they are in 
                        different units. Because of the identity property of multiplication, the value of 
                        a quantity will not change as long as it is multiplied by one. Also, if the numerator 
                        and denominator of a fraction are equal to each other, then the fraction is equal to one.
                         So as long as the numerator and denominator of the fraction are equivalent, they will
                          not affect the value of the measured quantity.
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}