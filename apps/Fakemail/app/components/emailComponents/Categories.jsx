import React from 'react';
import Category from './Category';

export default class Categories extends React.Component {
  render(){
    let categoryData = [{id:"received", title:"Recibidos", icon:"fa-inbox"}, {id:"highlighted", title:"Destacados", icon:"fa-star"}, {id:"important", title:"Pospuestos", icon:"fa-clock"}, {id:"postponed", title:"Importantes", icon:"fa-exclamation-circle"}, {id:"sent", title:"Enviados", icon:"fa-paper-plane"}, {id:"draft", title:"Borradores", icon:"fa-file"}];
    let categories = [];
    for(let i = 0; i < categoryData.length; i++){
      categories.push(<Category key={categoryData[i].id} id={categoryData[i].id} title={categoryData[i].title} selected={this.props.selectedCategory === categoryData[i].id} quantity={this.props.getUnreadEmailsFromCategory(categoryData[i].id).length} icon={categoryData[i].icon} selectCategory={this.props.selectCategory} />);
    }
    return <div className="actions1">
      <ul>
        {categories}
      </ul>
    </div>;
  }
}