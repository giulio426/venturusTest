import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import store from "./store/store.js";
import TopHeader from "./components/topHeader";
import Breadcrumbs from "./components/breadcrumb";
import Header from "./components/header";
import UserTable from "./components/userTable";
import Registration from "./components/registration";

import library from "./helpers/faLibrary";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <TopHeader />
        <Breadcrumbs />
        <Header />
        <UserTable />
        <Registration />
      </div>
    </Provider>
  );
}

export default App;
