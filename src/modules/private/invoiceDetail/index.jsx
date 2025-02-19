import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../../../data";
import { useEffect, useState } from "react";
import { Button } from "../../../generalComponents";
import { DetailCardBig, DetailCardMobile, Header } from "./components";
import { MobileAction } from "./components/mobileActions";

export const InvoiceDetail = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchedInvoice = invoices.find((invoice) => invoice.id === id);
    console.log("Fetched Invoice", fetchedInvoice);
    setInvoice(fetchedInvoice);
  }, []);
  return (
    <div className="mx-6 my-8">
      {/* Back Button */}
      <div>
        <Button variant="back" onClick={() => navigate(-1)} label="Go back" />
      </div>
      <Header invoice={invoice} />
      <DetailCardMobile invoice={invoice} />
      <DetailCardBig invoice={invoice} />
      <MobileAction invoice={invoice} />
    </div>
  );
};
