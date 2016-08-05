import React from 'react';
import {Jumbotron, Button, FormGroup, ControlLabel, FormControl, FieldGroup} from 'react-bootstrap';

export default class BibleView extends React.Component {

    render() {
        let editButton;
        let addPostForm;
        if (true )//this.props.userState.isLogined) // just to see the button for now
            editButton = <Button>Edit</Button>;
        if (true)
            addPostForm = 
        <div>
            <form>
                <h1>New bible reading for today:</h1>
                <FormGroup controlId="formControlsText">
                      <ControlLabel>Description</ControlLabel>
                      <FormControl componentClass="input" placeholder="Description" />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Text</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Text" />
                </FormGroup>
            </form>;
        </div>
        return (
            <div>
            {addPostForm}
            {this.props.posts.map((obj) => {
                return (
                    <Jumbotron>
                        <h1>{obj.description}</h1>
                        <p>{obj.text}</p>
                        {editButton}
                    </Jumbotron>  
                )
            })}
            </div>
          )
    }
}