import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Temperature extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'Hz',
            to:'kHz'
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
        if(this.state.from === 'Hz'){
            if(this.state.to === 'kHz') {
                val = val/1000;
            }
            else if(this.state.to === 'MHz') {
                val = val/1e+6;
            }
            else if(this.state.to === 'GHz') {
                val = val/1e+9;
            }
            else if(this.state.to === 'THz') {
                val = val/1e+12;
            }
            else;
        }
        else if(this.state.from === 'kHz'){
            if(this.state.to === 'Hz') {
                val = val*1000;
            }
            else if(this.state.to === 'MHz') {
                val = val/1000;
            }
            else if(this.state.to === 'GHz') {
                val = val/1e+6;
            }
            else if(this.state.to === 'THz') {
                val = val/1e+9;
            }
            else;
        }
        else if(this.state.from === 'MHz'){
            if(this.state.to === 'Hz') {
                val = val*1e+6;
            }
            else if(this.state.to === 'kHz') {
                val = val*1000;
            }
            else if(this.state.to === 'GHz') {
                val = val/1000;
            }
            else if(this.state.to === 'THz') {
                val = val/1e+6;
            }
            else;
        }
        else if(this.state.from === 'GHz'){
            if(this.state.to === 'Hz') {
                val = val*1e+9;
            }
            else if(this.state.to === 'kHz') {
                val = val*1e+6;
            }
            else if(this.state.to === 'MHz') {
                val = val*1000;
            }
            else if(this.state.to === 'THz') {
                val = val/1000;
            }
            else;
        }
        else {
            if(this.state.to === 'Hz') {
                val = val*1e+12;
            }
            else if(this.state.to === 'kHz') {
                val = val*1e+9;
            }
            else if(this.state.to === 'GHz') {
                val = val*1000;
            }
            else if(this.state.to === 'MHz') {
                val = val*1e+6;
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
                            <p className="col-1 unit_color">{this.state.from}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.fromselect}>
                            <option value="Hz">Hz</option>
                            <option value="kHz">kHz</option>
                            <option value="MHz">MHz</option>
                            <option value="GHz">GHz</option>
                            <option value="THz">THz</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.to}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.toselect}>
                            <option value="Hz">Hz</option>
                            <option value="kHz">kHz</option>
                            <option value="MHz">MHz</option>
                            <option value="GHz">GHz</option>
                            <option value="THz">THz</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}