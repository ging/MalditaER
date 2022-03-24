import React from 'react';
import Categories from './Categories';
import ChatContact from './ChatContact';

export default class LeftMenu extends React.Component {
  render(){
    let hideLogo = (this.props.config.hideLogo === true);
    let chats = this.props.chats;
    let profile = this.props.profile;

    return <div className="col1">
      <div className="top1">
        <div className="menu1"><i className="fas fa-sign-out-alt fa-rotate-180" onClick={e=>this.props.close()}/></div>
        <div className="logo1"><img style={{visibility:(hideLogo ? "hidden" : "visible")}}src="./assets/images/logos/csic.png" alt="logo"/></div>
      </div>
      <div className="user1">
        <div className="picture1"><img src={profile.photo} alt={profile.name}/></div>
        <div className="user_info">
          <div className="name1">
            <h2>{profile.name}</h2><i className="fas fa-chevron-down" style={{visibility:"hidden"}}/>
          </div>
          <div className="mail1">{(profile.username + "@" + profile.domain)}</div>
        </div>
      </div>

      <div className="button1" style={{visibility:"hidden"}}>Redactar</div>
      <Categories selectedCategory={this.props.selectedCategory} getUnreadEmailsFromCategory={this.props.getUnreadEmailsFromCategory} selectCategory={this.props.selectCategory} />

      <div className="contacts">
        {chats.map((contact, i) => <ChatContact key={i} photo={contact.photo} name={contact.name} msg={contact.msg} status={contact.status} />)}
      </div>
    </div>;
  }
}