import React, { useEffect, useRef } from "react";
import { Icon } from "../utils/general";
import {useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import "./notification.scss";

import {GLOBAL_CONFIG} from '../config.js';

const MailNotification = (props) => {

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const clickNotification = () => {
  	dispatch({type: "MSEDGE", payload: "full", extra: GLOBAL_CONFIG.mailAppLink});
  }
  return (
	<div className={"Notification" + (props.show ? " showNotification" : "" )} onClick={clickNotification}>
	 <Icon click={"MSEDGE"} className="dskIcon prtclk" src={"outlook"} 
	 payload={"full"} extra={GLOBAL_CONFIG.mailAppLink} pr width={20} menu="app" /> 
	 	{t("new_email")}
	</div>
  );
};

export default MailNotification;
