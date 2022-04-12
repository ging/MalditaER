import React from 'react';
import Category from './Category';

export default class Categories extends React.Component {
  render(){
    let categoryData = [{id:"received", icon:"fa-inbox"}, {id:"highlighted", icon:"fa-star"}, {id:"postponed", icon:"fa-clock"}, {id:"important", icon:"fa-exclamation-circle"}, {id:"sent", icon:"fa-paper-plane"}, {id:"draft", icon:"fa-file"}];
    let categories = [];
    for(let i = 0; i < categoryData.length; i++){
      categories.push(<Category I18n={this.props.I18n} key={categoryData[i].id} id={categoryData[i].id} title={categoryData[i].title} selected={this.props.selectedCategory === categoryData[i].id} quantity={this.props.getUnreadEmailsFromCategory(categoryData[i].id).length} icon={categoryData[i].icon} selectCategory={this.props.selectCategory} />);
    }
    return <div className="actions1">
      <ul>
        {categories}
      </ul>
    </div>;
  }
}