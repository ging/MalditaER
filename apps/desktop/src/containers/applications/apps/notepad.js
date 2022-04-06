import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Image, ToolBar } from "../../../utils/general";
import { useTranslation } from 'react-i18next';

export const Notepad = () => {
  const apps = useSelector((state) => state.apps);
  const wnapp = useSelector((state) => state.apps.notepad);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const extra = JSON.parse(wnapp.extra || "{}");
  return (
    <div
      className="notepad floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar app={wnapp.action} icon={wnapp.icon} size={wnapp.size} name="Notepad" />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="flex text-xs py-2 topBar">
          <div className="mx-2">File</div>
          <div className="mx-4">Edit</div>
          <div className="mx-4">View</div>
        </div>
        <div className="restWindow h-full flex-grow">
          <div className="w-full h-full overflow-hidden">
            <img className="image enableContextMenu" src={"img/"+extra.image} />
            <textarea className="noteText win11Scroll" id="textpad" defaultValue={extra.text ? t(extra.text) : ""}/>
          </div>
        </div>
      </div>
    </div>
  );
};
