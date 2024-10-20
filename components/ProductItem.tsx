
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

// MUI Components
import { Box, Typography, Button, Card, CardContent, CardActions, IconButton, CardMedia } from "@mui/material";
import { Favorite, ShoppingCart, Visibility } from "@mui/icons-material";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <>




      <Box sx={{ marginTop: 5, borderRadius: 3, marginLeft: 1, marginRight: 1, boxShadow: 2 }}>
        <Link href={`/product/${product.slug}`} passHref>
          <Card sx={{ maxWidth: '100%', position: 'relative' }}>
            {/* Primary product image */}
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="300"
                // image="/WATER TANK ALARM/1.webp"
                image={product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
                alt="Water Tank Alarm"
                sx={{ objectFit: 'cover' }}
              />
              {/* Hover image */}
              <CardMedia
                component="img"
                height="300"
                image="1.webp"
                alt="Secondary Image 1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Icons overlay */}
            <CardActions sx={{ position: 'absolute', bottom: 5, left: 260, zIndex: 1 }}>
              {/* <IconButton aria-label="view"
                sx={{
                  backgroundColor: '#f37321',
                  color: 'black',
                  borderRadius: '50%',
                  '&:hover': { color: 'white', backgroundColor: '#e5621d' }  // Slightly darker on hover
                }}>
                <Visibility />
               
              </IconButton> */}
              {/* <Link href={`/product/${product.slug}`} passHref>
               
              </Link> */}

              <IconButton aria-label="add to wishlist"
                sx={{
                  backgroundColor: '#f37321',
                  color: 'black',
                  borderRadius: '50%',
                  '&:hover': { color: 'white', backgroundColor: 'black' }  // Slightly darker on hover
                }}>
                <Favorite />
              </IconButton>
              <IconButton aria-label="add to cart"
                sx={{
                  backgroundColor: '#f37321',
                  color: 'black',
                  borderRadius: '50%',
                  '&:hover': { color: 'white', backgroundColor: 'black' }  // Slightly darker on hover
                }}>
                <ShoppingCart />
              </IconButton>
            </CardActions>

            {/* Product details */}
            <CardContent
              sx={{
                backgroundColor: '#f37321',
              }}>
              <Link href={`/product/${product.slug}`} passHref>
                <Typography variant="h6" component="a" sx={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                  {product.title}
                </Typography>
              </Link>
              <Box sx={{ marginTop: 1 }}>

                <Typography variant="body2" color="textSecondary" component="del" sx={{ marginRight: 2 }}>
                  ₹{product.price}

                </Typography>
                <Typography variant="body1" color="textPrimary" component="span" >
                  ₹{product.salePrice}


                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Box>

    </>

  );
};

export default ProductItem;
