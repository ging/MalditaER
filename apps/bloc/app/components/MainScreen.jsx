import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';
import './../assets/scss/main.scss';
import Bloc from './Bloc.jsx';
import Text from './Text.jsx';

export default class MainScreen extends React.Component {

  render(){
    return (
      <div className="screen_wrapper screen_main">
        <Bloc I18n={this.props.I18n}
          escapp={this.props.escapp}
          handleWrite={this.props.handleWrite}
          handleKeyUp={this.props.handleKeyUp}
          onContinue={this.props.onContinue}
          text={this.props.text}
          escappFailMessage={this.props.escappFailMessage}
          escappRightMessage={this.props.escappRightMessage}
          puzzleCompleted={this.props.puzzleCompleted}
          puzzleSolution={this.props.puzzleSolution} />
        <Text>
          <span>{this.props.puzzleCompleted ?
            this.props.I18n.getTrans("prompt_after") :
            this.props.I18n.getTrans("prompt")}</span>
        </Text>
      </div>
    );
  }
}