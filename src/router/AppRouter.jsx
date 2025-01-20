import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvoiceDetail, Invoices } from "../modules/private";
import { Layout } from "../layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Invoices />} />
          <Route path="invoice/:id" element={<InvoiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
