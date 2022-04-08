import React, { useEffect, useRef } from "react";
import { Icon } from "../utils/general";
import {useDispatch} from 'react-redux';
import "./notification.scss";

import {GLOBAL_CONFIG} from '../config/config.js';

const MailNotification = (props) => {

  const dispatch = useDispatch();
  const clickNotification = () => {
  	dispatch({type: "MSEDGE", payload: "full", extra: GLOBAL_CONFIG.mailAppLink});
  }
  return (
	<div className={"Notification" + (props.show ? " showNotification" : "" )} onClick={clickNotification}>
	 <Icon click={"MSEDGE"} className="dskIcon prtclk" src={"outlook"} 
	 payload={"full"} extra={GLOBAL_CONFIG.mailAppLink} pr width={20} menu="app" /> 
	 	{props.I18n.getTrans("new_email")}
	</div>
  );
};

export default MailNotification;
