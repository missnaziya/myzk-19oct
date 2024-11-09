"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ENDPOINT from "@/config/appConfig";
import axios from "axios";

const Page = () => {
  const searchParams = useSearchParams();
  const transactionid = searchParams.get("transactionid");

  // {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: checkoutForm.name,
  //     lastname: checkoutForm.lastname,
  //     phone: checkoutForm.phone,
  //     email: checkoutForm.email,
  //     company: checkoutForm.company,
  //     adress: checkoutForm.adress,
  //     apartment: checkoutForm.apartment,
  //     postalCode: checkoutForm.postalCode,
  //     status: "order initiated payment pending",
  //     total: total,
  //     city: checkoutForm.city,
  //     country: checkoutForm.country,
  //     orderNotice: checkoutForm.orderNotice,
  //   }),
  // }

  const updateCustomerOrderStatus = async (orderId: string) => {
    const url = `${ENDPOINT.BASE_URL}/api/orders`;
    const response = await axios.patch(url, {
      id: orderId,
      status: "payment received",
    });
    console.log("update api response:", response);
  };
  //




  useEffect(() => {
    if (transactionid && transactionid.length > 0) {
      console.log("Updating customer order status as payment received");
      updateCustomerOrderStatus(transactionid);
      
 
    }
  }, [transactionid]);

  return (
    <div className="flex justify-center items-center text-center">
      Your payment has been processed successfully. Transaction ID:{" "}
      {transactionid}
    </div>
  );
};

export default Page;
