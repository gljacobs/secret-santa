import React from 'react';
import SSInput from './SSInput'

class SSList extends React.Component {
    state = {
        santas: [],
    }
    
    handleAddSanta = (input) => {
        this.setState({
            santas: [
                ...this.state.santas,
                { num: this.state.santas.length + 1, name: input, reveal: false }
            ],
            value: ""
        })
    }
    render() {
        return (
            <div className="container">
                <br />
                <SSInput handleAddSanta={this.handleAddSanta}/>
                <table className="table table-striped table-bordered table-dark">
                    <thead className="bg-success">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Secret</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.santas.map((row) => {
                                return (
                                    <tr key={row.num}>
                                        <th scope="row">{row.num}</th>
                                        <td>{row.name}</td>
                                        <td><button type="button" className="btn btn-success float-right btn-sm">Reveal</button></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SSList;