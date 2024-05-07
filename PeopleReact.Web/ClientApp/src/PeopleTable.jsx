
import React from "react";
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PeopleTable extends React.Component {
    
    state = {
        
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },

        people: []
    }
    
    onTextChange = e => {
        if (e.target.id == "firstName") {
            this.setState({ person: { ...this.state.person, firstName: e.target.value } });
        }
        else if (e.target.id == "lastName") {
            this.setState({ person: { ...this.state.person, lastName: e.target.value } });
        }
        else if(e.target.id == "age") {
            this.setState({ person: { ...this.state.person, age: e.target.value } });
        }
    }


    onClearClick = () => {
       
        this.setState({
            people: [],
                person: ''
            });
    }

    onAddClick = () => {
        const copy = [...this.state.people, this.state.person];

        this.setState({
            people: copy,
            person: ''
        });
    }

    
    getContent = () => {
        if(this.state.people.length === 0)
            {
                return (<h2>There are no people yet...</h2>)
            }
        return (
            <>
            <table className="table table-hover table-dark table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.people.map(person => <PersonRow person={person} />) }
                </tbody>
            </table>
            </>
        )
    }

    render() {
        return <div className='container mt-5'>
            <PersonForm
                person={this.state.person}
                onTextChange={this.onTextChange}
                onAddClick={this.onAddClick}
                onClearClick={this.onClearClick}
            />

          {this.getContent()}
        </div>

    }

}

export default PeopleTable;