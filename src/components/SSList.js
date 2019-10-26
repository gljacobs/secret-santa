import React from 'react';
import SSInput from './SSInput'
import arrayShuffle from 'array-shuffle';

class SSList extends React.Component {
    state = {
        santas: [],
        revealTarget: null,
    }

    handleAddSanta = (input) => {
        this.setState({
            santas: [
                ...this.state.santas,
                { num: this.state.santas.length + 1, name: input, secret: ""}
            ],
            value: ""
        })
    }
    handleShuffleAssign = () => {
        var assigned = false;
        var participants = this.state.santas;

        while(!assigned) {
            var shuffled = arrayShuffle(participants);
            console.log(shuffled[2].name + ", " + this.state.santas[2].name)
            for(var i = 0; i < shuffled.length; i++) {
                if(shuffled[i].name === participants[i].name) {
                    assigned = false;
                    i = 100;
                }
                else {
                    participants[i].secret = shuffled[i].name;
                    assigned = true;
                }
            } 
        }
        this.setState({
            santas: participants,
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
                                        <td><button type="button" className="btn btn-success float-right btn-sm" onClick={() => this.setState({revealTarget: row})} data-toggle="modal" data-target="#revealModal" disabled={row.secret ? false : true}>REVEAL</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
                <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => this.handleShuffleAssign()} disabled={(this.state.santas.length > 2) ? false : true}>Do the Secret Santa Shuffle</button>

                <div className="modal fade" id="revealModal" tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Merry Christmas!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.revealTarget ? (this.state.revealTarget.name + " has " + this.state.revealTarget.secret + "...") : "..."}
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