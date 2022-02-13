import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";
import App from "./App";

let rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement);
