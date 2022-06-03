import React from "react";
import Deck_handler from "../components/Deck_handler";
import Filterbar from "../components/Filterbar";
import Header from "../components/Header";
import PhoneFilter from "../components/PhoneFilter";

export const C = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="C" />
      </div>
    </>
  );
};

export const Reactjs = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="Reactjs" />
      </div>
    </>
  );
};

export const Ctf = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="Ctf" />
      </div>
    </>
  );
};

export const Cpp = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="Cpp" />
      </div>
    </>
  );
};

export const Linux = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="Linux" />
      </div>
    </>
  );
};

export const All = () => {
  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
        <Deck_handler tag="All" />
      </div>
    </>
  );
};

export default All;