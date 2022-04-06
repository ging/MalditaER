import React, { useEffect, useRef } from "react";
import { Icon } from "../utils/general";
import {useDispatch} from 'react-redux';
import "./notification.scss";
import {GLOBAL_CONFIG} from '../config.js';

const MailNotification = (props) => {
  const dispatch = useDispatch();
  const clickNotification = () => {
  	dispatch({type: "MSEDGE", payload: "full", extra: GLOBAL_CONFIG.mailAppLink});
  }
  return (
	<div className={"Notification" + (props.show ? " showNotification" : "" )}>
	 <Icon click={"MSEDGE"} className="dskIcon prtclk" src={"outlook"} payload={"full"} extra={GLOBAL_CONFIG.mailAppLink} pr width={20} menu="app" /> Nuevo Correo electrónico
	</div>
  );
};

export default MailNotification;
