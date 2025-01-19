import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Invoices } from "../modules/private";
import { Layout } from "../layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
