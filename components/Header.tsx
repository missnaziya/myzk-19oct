'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import Image from 'next/image'
import Link from 'next/link'
import { FaBell } from 'react-icons/fa6'

import CartElement from './CartElement'
import HeartElement from './HeartElement'
import { signOut, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useWishlistStore } from '@/app/_zustand/wishlistStore'
import ENDPOINT from '../config/appConfig'

// MUI Components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Grid,
  Button
} from '@mui/material'
import CategoryMenu from './CategoryMenu' // assuming this component lists the products

const Header = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  const { setWishlist, wishQuantity } = useWishlistStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showCategoryList, setShowCategoryList] = useState(false)

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000)
    toast.success('Logout successful!')
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // Getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    try {
      const response = await fetch(`${ENDPOINT.BASE_URL}/api/wishlist/${id}`, {
        cache: 'no-store'
      })
      const wishlist = await response.json()
      const productArray = wishlist.map((item: any) => ({
        id: item?.product?.id,
        title: item?.product?.title,
        price: item?.product?.price,
        image: item?.product?.mainImage,
        slug: item?.product?.slug,
        stockAvailabillity: item?.product?.inStock
      }))

      setWishlist(productArray)
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    }
  }

  // Getting user by email to get user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      try {
        const response = await fetch(
          `${ENDPOINT.BASE_URL}/api/users/email/${session.user.email}`,
          {
            cache: 'no-store'
          }
        )
        const data = await response.json()
        getWishlistByUserId(data?.id)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
  }

  useEffect(() => {
    getUserByEmail()
  }, [session?.user?.email])

  // Toggle product list visibility
  const handleMouseEnter = () => {
    setShowCategoryList(true) // Show category list on hover
  }

  const handleMouseLeave = () => {
    setShowCategoryList(false) // Hide category list when not hovering
  }

  // Hide category list when product is selected
  const handleProductSelection = () => {
    setShowCategoryList(false) // hide the category list
  }

  return (
    <AppBar position='static' color='default'>
      <HeaderTop />

      {!pathname.startsWith('/admin') ? (
        <>
          <Toolbar>
            <Grid
              container
              alignItems='center'
              justifyContent='space-between'
              padding={2}
            >
              <Grid item xs={12} md={3}>
                <Link href='/' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Image
                      src='/myzk logo.png'
                      width={150}
                      height={50}
                      alt='Myzk logo'
                    />
                  </Box>
                </Link>
              </Grid>

              {/* <Grid item> */}
              <Grid
                item
                sx={{
                  paddingLeft: '55px',
                }}
              >
                <Box display='flex' alignItems='center'>
                  <Button
                    component={Link}
                    href='/'
                    color='inherit'
                    sx={{ fontSize: '14px', padding: '5px 15px' ,
                      '&:hover': {
                        borderBottom: '2px solid #ea580c'
                      }

                    }}

                  >
                    Home
                  </Button>
                  <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ fontSize: '14px', padding: '5px 15px' }}
                  >
                    <Button color='inherit'>Category</Button>
                  </Box>
                  <Button
                    component={Link}
                    href='/shop/new-arrivals'
                    color='inherit'
                    sx={{ fontSize: '14px', padding: '5px 15px',
                      '&:hover': {
                        borderBottom: '2px solid #ea580c'
                      }
                     }}
                  >
                    New Arrivals
                  </Button>
                  <Button
                    component={Link}
                    href='/support'
                    color='inherit'
                    sx={{ fontSize: '14px', padding: '5px 15px',
                      '&:hover': {
                        borderBottom: '2px solid #ea580c'
                      }
                     }}
                  >
                    Support
                  </Button>
                </Box>
              </Grid>

              {/* Right Section (Icons) */}
              <Grid
                item
                xs={12}
                md={3}
                display='flex'
                justifyContent='flex-end'
                gap={3}
                sx={{ marginTop: { xs: '-125px', sm: '0px' } }} // Apply margin-top only on mobile
              >
                <HeartElement wishQuantity={wishQuantity} />
                <CartElement />
              </Grid>
            </Grid>
          </Toolbar>
          {showCategoryList && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 2,
                marginTop: '90px',
                width: '100%'
              }} // Position and stacking
            >
              <CategoryMenu
                onProductSelect={handleProductSelection}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </Box>
          )}
        </>
      ) : (
        <Toolbar>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Link href='/' passHref>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Image
                    src='/myzk logo.png'
                    width={130}
                    height={130}
                    alt='myzk logo'
                  />
                </Box>
              </Link>
            </Grid>

            <Grid item display='flex' alignItems='center'>
              <IconButton>
                <FaBell className='text-xl' />
              </IconButton>

              <IconButton onClick={handleMenuOpen}>
                <Avatar src='/randomuser.jpg' alt='random profile photo' />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} href='/admin'>
                  Dashboard
                </MenuItem>
                <MenuItem component={Link} href='/profile'>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
