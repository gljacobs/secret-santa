import React from 'react';
import SSInput from './SSInput'

class SSList extends React.Component {
    state = {
        santas: [
            { num: 1, name: "Gabriel", reveal: true, secret: "Mariah",},
            { num: 2, name: "Mariah", reveal: true, secret: "Gabriel",}
        ],
        revealTarget: null,
    }

    handleAddSanta = (input) => {
        this.setState({
            santas: [
                ...this.state.santas,
                { num: this.state.santas.length + 1, name: input, reveal: false, secret: null}
            ],
            value: ""
        })
    }
    render() {
        return (
            <div className="container">
                <br />
                <SSInput handleAddSanta={this.handleAddSanta} />
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
                                        <td><button type="button" className="btn btn-success float-right btn-sm" onClick={() => this.setState({revealTarget: row.num})} data-toggle="modal" data-target="#exampleModalCenter">Reveal</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Merry Christmas!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.revealTarget ? (this.state.santas[this.state.revealTarget - 1].name + " has " + this.state.santas[this.state.revealTarget - 1].secret + "...") : "..."}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SSList;