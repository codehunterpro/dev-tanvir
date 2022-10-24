import React from "react";
import { NavigationDots, SocialMedias } from "../Components";

const AppWrap = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedias />

        <div className="app__wrapper app__flex">
          <Components />
          <div className="copyright">
            <p className="p-text">@2022 TANVIR</p>
            <p className="p-text">All rights reseverved</p>
          </div>
        </div>

        <NavigationDots active={idName}/>
      </div>
    );
  };

export default AppWrap;
