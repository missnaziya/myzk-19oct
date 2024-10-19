// // *********************
// // Role of the component: Footer component
// // Name of the component: Footer.tsx
// // Developer: Aleksandar Kuzmanovic
// // Version: 1.0
// // Component call: <Footer />
// // Input parameters: no input parameters
// // Output: Footer component
// // *********************

// import { navigation } from "@/lib/utils";
// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white" aria-labelledby="footer-heading">
//       <div>
//         <h2 id="footer-heading" className="sr-only">
//           Footer
//         </h2>
//         <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-24 pb-14">
//           <div className="xl:grid xl:grid-cols-3 xl:gap-8">
//             <Image
//               src="/myzk logo.png"
//               alt="Myzk logo"
//               width={250}
//               height={250}
//               className="h-auto w-auto"
//             />
//             <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
//               <div className="md:grid md:grid-cols-2 md:gap-8">
//                 <div>
//                   <h3 className="text-lg font-bold leading-6 text-orange-600">
//                     Sale
//                   </h3>
//                   <ul role="list" className="mt-6 space-y-4">
//                     {navigation.sale.map((item) => (
//                       <li key={item.name}>
//                         <Link
//                           href={item.href}
//                           className="text-sm leading-6 text-black hover:text-gray-700"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-10 md:mt-0">
//                   <h3 className="text-base font-bold leading-6 text-orange-600">
//                     About Us
//                   </h3>
//                   <ul role="list" className="mt-6 space-y-4">
//                     {navigation.about.map((item) => (
//                       <li key={item.name}>
//                         <Link
//                           href={item.href}
//                           className="text-sm leading-6 text-black hover:text-gray-700"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="md:grid md:grid-cols-2 md:gap-8">
//                 <div>
//                   <h3 className="text-base font-bold leading-6 text-orange-600">
//                     Buying
//                   </h3>
//                   <ul role="list" className="mt-6 space-y-4">
//                     {navigation.buy.map((item) => (
//                       <li key={item.name}>
//                         <Link
//                           href={item.href}
//                           className="text-sm leading-6 text-black hover:text-gray-700"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-10 md:mt-0">
//                   <h3 className="text-base font-bold leading-6 text-orange-600">
//                     Support
//                   </h3>
//                   <ul role="list" className="mt-6 space-y-4">
//                     {navigation.help.map((item) => (
//                       <li key={item.name}>
//                         <Link
//                           href={item.href}
//                           className="text-sm leading-6 text-black hover:text-gray-700"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest,
} from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <>
      <footer>
        <Box
          sx={{ backgroundColor: "black", width: "100%", padding: "50px 0" }}
        >
          <Container maxWidth={false} sx={{ width: "100%", padding: 0 }}>
            <Grid container spacing={4}>
              {/* Quick Links Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", marginBottom: "20px" }}
                >
                  Quick Links
                </Typography>
                <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/shop" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Category
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/policy/privacy-policy" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Privacy Policy
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/policy/refund-return" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Returns & Refund Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/policy/shipping-delivery" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Shipping and Delivery Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/policy/term-condition" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Terms of Service
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/faq" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Help & FAQ
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              {/* Support Links Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", marginBottom: "20px" }}
                >
                  Support Links
                </Typography>
                <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/tracking" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Track Order
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/ticket" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Ticket Raise
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/return" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Return
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/support/warranty-registration" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Warranty Registration
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/support/contact-us" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                  {/* <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/about" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        About
                      </Typography>
                    </Link>
                  </Box> */}
                </Box>
              </Grid>

              {/* Get in Touch Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", marginBottom: "20px" }}
                >
                  Get In Touch
                </Typography>
                <Typography variant="body2" sx={{ color: "#9a9b9c" }}>
                  Have questions? Visit at:
                  <Link
                    href="https://maps.app.goo.gl/hZgUhCbYwkugGsHx8"
                    passHref
                  >
                    Digital Telemedia Technology Pvt. Ltd., E-169, E Block,
                    Sector 63, Noida, Uttar Pradesh 201301.
                  </Link>
                </Typography>
              </Grid>

              {/* Newsletter Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", marginBottom: "20px" }}
                >
                  Newsletter
                </Typography>
                <Box>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      backgroundColor: "#9a9b9c",
                      color: "#fff",
                      "::placeholder": { color: "white" },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubscribe}
                    fullWidth
                    sx={{
                      marginTop: "10px",
                      backgroundColor: "#f37321",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Footer Bottom Section */}
            <Grid
              container
              justifyContent="center"
              sx={{ marginTop: "30px", paddingTop: "20px", color: "white" }}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="body2">
                  Contact us at:{" "}
                  <Link
                    href="mailto:operations@myzk.in"
                    style={{ color: "#9a9b9c", textDecoration: "none" }}
                  >
                    operations@myzk.in
                  </Link>
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ marginTop: "10px" }}>
                  <IconButton href="#" color="inherit">
                    <Facebook />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <Twitter />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <Instagram />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <YouTube />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <Pinterest />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Copyright Section */}
        <Grid
          container
          justifyContent="center"
          sx={{ backgroundColor: "white", padding: "20px 0", width: "100%" }}
        >
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2" component="div">
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <Box
                component="span"
                sx={{ display: "inline-block", verticalAlign: "middle" }}
              >
                <img src="/img/myzk logo.png" width="100px" alt="Myzk" />
              </Box>
            </Typography>
          </Grid>
          {/* <Grid item xs={12} textAlign="center">
            <Typography variant="body2">
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <span>
                <img src="/img/myzklogo.png" width="100px" alt="Myzk" />
              </span>
            </Typography>
          </Grid> */}
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
