import React from 'react';

export default class EmailList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:"",
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.match = this.match.bind(this);
  }
  onChangeSearch(e){
    this.setState({searchText:e.target.value});
  }
  match(email, term){
    if(term === ""){return true;}
    let textToSearch = ((email.issue || "") + " " + (email.description || "") + " " + (email.name || "") + " " + (email.date || ""));
    return (textToSearch.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }
  render(){
    let {selectedEmail, emails} = this.props;
    return <div className="col2">
      <div className="col2_top">
        <div className="searchbar" style={{visibility:"visible"}}><input type="text" placeholder={this.props.I18n.getTrans("i.search")} onChange={this.onChangeSearch} value={this.state.searchText}/></div>
        <div className="icons" style={{display:"none"}}>
          <i className="fas fa-sync-alt" />
          <i className="far fa-trash-alt" />
        </div>
      </div>
      <div className="email_list">
        {emails.map((email, index)=>
          <div style={{display:(((this.state.searchText === "") || (this.match(email, this.state.searchText))) ? "" : "none")}} key={index} className={ ("email") + (email.unread ? ' unread' : '') + (((typeof selectedEmail === "object") && (email.id === selectedEmail.id)) ? ' selected' : '')}>
            <a href="#" onClick={e=>this.props.selectEmail(email.id)}>
              <div className="email_header">
                <div className="name">{ email.name }</div>
                <div className="date">{ email.date }</div>
              </div>
              <div className="email_main">
                <div className="email_actions">
                  <i className="far fa-square" />
                  <i className={(email.categories.indexOf("highlighted") !== -1 ? "fas" : "far") + " fa-star"} onClick={e=> {e.stopPropagation(); this.props.highlightEmail(email.id);}} />
                </div>
                <div className="email_content">
                  <div className="issue">{ email.issue }</div>
                  <div className="description">{ email.description }</div>
                  <div className="documents">
                    { (email.attachment) ?
                      <div className="document">
                        <div className="fa fa-file" />
                        <div className="name">{email.attachment.title}</div>
                      </div>
                      : null}
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>;
  }
}