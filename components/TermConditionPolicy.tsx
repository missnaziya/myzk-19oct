// pages/refund-policy.js
import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

const TermConditionPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingY: 5 }}>
        {/* Policy Sections */}
        <Typography
          variant="h4"
          sx={{ color: "hsl(23.43deg 89.74% 54.12%)", marginBottom: 2 }}
        >
          Term & Condition Policy
        </Typography>

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Product Information and Availability</Typography>
          <Typography paragraph>
          We aim to provide accurate descriptions of our electronic products, but we do not guarantee that product descriptions, images, or other content on the Site will be complete, accurate, or free of errors. Product availability may vary, and we reserve the right to limit quantities, discontinue products, or make changes to pricing and specifications without notice. </Typography>
        </Box>
        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Ordering and Payment</Typography>
          <Typography paragraph>
          By placing an order, you make an offer to purchase our products, which we may accept or cancel at any time due to reasons such as product unavailability, errors in product or pricing information, or suspected fraud. Payment is processed at the time of order placement. You confirm that the billing information provided is accurate and that you have the right to use the designated payment method. In cases of payment disputes, we may contact you to verify details.  </Typography>
        </Box>
        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6"> Shipping and Delivery</Typography>
          <Typography paragraph>
          Shipping costs and estimated delivery times are provided at checkout. Note that any additional import duties or taxes are the customer's responsibility. While we strive to meet delivery estimates, we are not liable for delays due to circumstances outside our control, such as weather, carrier issues, or customs. Once an order is shipped, the risk of loss transfers to you. If your order does not arrive, please reach out to our customer service team for assistance.   </Typography>
        </Box>
        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Returns and Refunds</Typography>
          <Typography paragraph>
          Most items can be returned within [30] days of delivery, provided they are in original, unused condition. To start a return, please contact customer service at myzkdtm@gmail.com.. Upon receiving and inspecting your return, we will issue a refund to your original payment method within [10-14] business days, with shipping fees and possible restocking fees applied. Certain items, such as clearance items or gift cards, are non-returnable.   </Typography>
        </Box>
        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Warranties</Typography>
          <Typography paragraph>
          Many electronic products sold on our Site come with a manufacturer’s warranty. Please refer to product packaging or the manufacturer's website for details. To file a warranty claim, you may contact us or the manufacturer directly. We are not responsible for warranty claims unless explicitly stated. Except as specified, all products are sold “as is” without warranties, including but not limited to implied warranties of merchantability or fitness for a particular purpose.      </Typography>
        </Box>
  

    
      </Container>
    </>
  );
};

export default TermConditionPolicy;
