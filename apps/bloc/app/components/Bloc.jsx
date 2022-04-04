import React from 'react';
import './../assets/scss/bloc.scss';

export default class Bloc extends React.Component {
  render(){
    return (
      <div className="bloc_body">
        <div className="left_bloc">
          <p>{this.props.I18n.getTrans("previous_text")}:</p>
          {this.props.puzzleCompleted ? <p>{this.props.puzzleSolution}</p> : null}
          <p>{this.props.puzzleCompleted ? null : <input type="text" id="bloc_input" autoFocus
            onChange={this.props.handleWrite}
            onKeyUp={this.props.handleKeyUp}
            value={this.props.text}
            placeholder={this.props.I18n.getTrans("placeholder")}
            autoCorrect="off" autoComplete="off" />}</p>
          {this.props.puzzleCompleted ? null : <p><button className="continue" onClick={this.props.onContinue}>{this.props.I18n.getTrans("continue")}</button></p>}
          {this.props.escappFailMessage ? <p className="danger">{this.props.escappFailMessage}</p> : null}
          {this.props.escappRightMessage ? <p className="success">{this.props.escappRightMessage}</p> : null}
        </div>
        <div className="right_bloc">
          <p />
        </div>
      </div>
    );
  }
}