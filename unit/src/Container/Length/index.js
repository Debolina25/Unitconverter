import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Length extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'feet',
            to:'meter'
        };
        this.putinput = this.putinput.bind(this);
        this.fromselect = this.fromselect.bind(this);
        this.toselect = this.toselect.bind(this);
        this.output = this.output.bind(this);
    }
    putinput(e) {
        let val = e.target.value;
        val=Number(val);
        this.setState({
            input: val
        });
        this.output(val);
    }
    output(val) {
        if(this.state.from === 'feet'){
            if(this.state.to === 'kilometer') {
                val = val/3280.84;
            }
            else if(this.state.to === 'meter') {
                val = val/3.281;
            }
            else if(this.state.to === 'centimeter') {
                val = val*30.48;
            }
           else;
        }
        else if(this.state.from === 'meter'){
            if(this.state.to === 'kilometer') {
                val = val/1000;
            }
            else if(this.state.to === 'feet') {
                val = val*3.281;
            }
            else if(this.state.to === 'centimeter') {
                val = val*100;
            }
           else;
        }
        else if(this.state.from === 'kilometer') {
            if(this.state.to === 'meter') {
                val = val*1000;
            }
            else if(this.state.to === 'feet') {
                val = val*3280.84;
            }
            else if(this.state.to === 'centimeter') {
                val = val*100000;
            }
           else;
        }
        else {
            if(this.state.to === 'meter') {
                val = val/100;
            }
            else if(this.state.to === 'feet') {
                val = val/30.48;
            }
            else if(this.state.to === 'kilometer') {
                val = val/100000;
            }
            else;
        }
        
        this.setState({
            output: val
        });
    }
    fromselect(e) {
        let select = e.target.value;
        this.setState({
            from: select,
        });
        this.output(this.state.input);
    }
    toselect(e) {
        let selectto = e.target.value;
        this.setState({
            to: selectto,
        });
        this.output(this.state.input);
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="input_block text-center">
                    <h3>Find the Units to Convert</h3><br/>
                    <div className="row block">
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="from" value={this.state.input} onChange={this.putinput} className="col-8"/>
                            <p className="col-1 textcolor">{this.state.from}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.fromselect}>
                            <option value="feet">Feet</option>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="centimeter">Centimeter</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 textcolor">{this.state.to}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.toselect}>
                            <option value="feet">Feet</option>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="centimeter">Centimeter</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}