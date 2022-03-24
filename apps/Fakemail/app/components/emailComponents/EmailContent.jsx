import React from 'react';

export default class Inbox extends React.Component {
  render(){
    let {profile, email} = this.props;
    let attachment = ((email && email.attachment) ? (
      <a href={email.attachment.url} rel="noopener noreferrer" target="_blank">
        <div className="document">
          <div className="fa fa-file" />
          <div className="name">{email.attachment.title}</div>
        </div>
      </a>
    ) : "");

    return <div className="col3">
      {email ? (
        [<div key="0" className="mail_header">
          <div className="mail_issue"><span><i className={(email.categories.indexOf("highlighted") !== -1 ? "fas" : "far") + " fa-star"} onClick={e=>this.props.highlightEmail()}/></span>
            <h1>{ email.issue }</h1>
          </div>
          <div className="mail_icons" style={{visibility:"hidden"}}>
            <i className="far fa-clock" />
            <i className="far fa-trash-alt" />
            <i className="far fa-bookmark" />
            <i className="fas fa-inbox" />
          </div>
        </div>,
        <div key="1" className="mail_main">
          <div className="mail_top">
            <div className="info">
              <div className="profile_img">
                <img src={ email.picture } alt=""/>
              </div>
              <div className="contact">
                <div className="name">
                  <h2>{ email.name }</h2><span>&#60;{email.from}&#62;</span>
                </div>
                <div className="recipient">
                Para: {profile.email}
                </div>
              </div>
            </div>
            <div className="date">{ email.date }</div>
          </div>
          <div className="mail_content" >
            <div dangerouslySetInnerHTML={{__html:email.content}}/>
            {attachment}
            <div className="mail_actions" style={{visibility:"hidden"}}>
              <div className="action"><span><i className="fas fa-reply" /></span>Responder</div>
              <div className="action"><span><i className="fas fa-share" /></span>Reenviar</div>
            </div>
          </div>
        </div>]
      ) : (
        <div key="2"className="no_mail">
          <div className="nm_img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 68.5">
              <path
                d="M13.1 7.738c-.4 0-.7.1-1 .2l36.2 32.3c.9.8 2.6.8 3.5 0L88 7.938c-.3-.1-.7-.2-1-.2H13.1zm-3.9 2.9c-.1.3-.2.7-.2 1.1v44c0 .4.1.7.2 1.1l26.8-22.2-26.8-24zm81.6 0l-26.8 24 26.8 22.2c.1-.3.2-.7.2-1.1v-44c0-.4-.1-.7-.2-1.1zM39 37.338l-26.9 22.2c.3.1.6.2 1 .2h73.8c.4 0 .7-.1 1-.2L61 37.338l-6.6 5.9c-2.5 2.2-6.3 2.2-8.8 0l-6.6-5.9z"
                fill="#d3dde4" /></svg>
          </div>
          <div className="nm_text">No has seleccionado ningún correo</div>
        </div>
      ) }
    </div>;
  }
}