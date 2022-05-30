import { Component } from "react";


class ContadorClass extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }else{
            console.log('negativo')
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    eliminar = () => {
        this.setState({
            count: 0
        })
    }

    render () {
        return (
            <div style={{display: 'flex'}}>
                <button className="btn btn-danger mx-3" onClick={this.decrement} label='-' color='red'>
                -
                </button>
                <h1>{this.state.count}</h1>
                <button className="btn btn-success mx-3" onClick={this.increment} label='+' color='green'>
                +
                </button>

                <button className="btn btn-secondary mx-3" onClick={this.eliminar}>Eliminar</button>

            </div>
        )
    }

}

export default ContadorClass