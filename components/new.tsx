
'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import Image from 'next/image'
import Link from 'next/link'
import { FaBell, FaBars } from 'react-icons/fa6'

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
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import CategoryMenu from './CategoryMenu' // assuming this component lists the products

const Header = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  const { setWishlist, wishQuantity } = useWishlistStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showCategoryList, setShowCategoryList] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLogout = () => {
    setTimeout(() => signOut({ callbackUrl: '/login' }), 1000)
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

  type Category = {
    name: string
  }

  type Product = {
    id: string
    slug: string
    title: string
    mainImage: string
    alternateImage1: string
    alternateImage2: string
    alternateImage3: string
    alternateImage4: string
    price: number
    salePrice: number
    rating: number
    description: string
    manufacturer: string
    inStock: number
    categoryId: string
    testcol: string | null
    warrantyDuration: string | null
    category: Category
  }

  // Type `categoryMenuList2` as an array of Product objects
  const [categoryMenuList2, setCategoryMenuList2] = useState<Product[]>([])

  useEffect(() => {
    fetch(ENDPOINT.BASE_URL + '/api/categories/', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setCategoryMenuList2(data)
      })
  }, [])

  // Handle Drawer toggle
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} href='/'>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} href='/shop/'>
          <ListItemText primary='Category' />
        </ListItem>
        <ListItem button component={Link} href='/shop/new-products'>
          <ListItemText primary='New Arrivals' />
        </ListItem>
        <ListItem button component={Link} href='/support'>
          <ListItemText primary='Support' />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar position='static' color='default'>
      <HeaderTop />

      {!pathname.startsWith('/admin') ? (
        <>
          {/* <Toolbar>
            <Grid
              container
              alignItems='center'
              justifyContent='space-between'
              padding={2}
            >
              <Grid item xs={3} md={3}>
                <Link href='/' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src='/myzk logo.png'
                      width={150}
                      height={50}
                      alt='Myzk logo'
                    />
                  </Box>
                </Link>
              </Grid>

              <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Button
                    component={Link}
                    href='/'
                    color='inherit'
                    sx={{ fontSize: '18px', padding: '5px 10px' }}
                  >
                    Home
                  </Button>
                  <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ display: { xs: 'none', md: 'block' } }} // Hide on mobile, show on medium screens and above
                  >
                    <Button
                      color='inherit'
                      sx={{ fontSize: '18px', padding: '5px 10px' }}
                    >
                      Category
                    </Button>
                  </Box>

                  <Button
                    component={Link}
                    href='/shop/new-products'
                    color='inherit'
                    sx={{ fontSize: '18px', padding: '5px 10px' }}
                  >
                    New Arrivals
                  </Button>
                  <Button
                    component={Link}
                    href='/support'
                    color='inherit'
                    sx={{ fontSize: '18px', padding: '5px 10px' }}
                  >
                    Support
                  </Button>
                </Box>
              </Grid>

              <Grid
                item
                xs={2}
                md={3}
                display='flex'
                justifyContent='flex-end'
                gap={3}
              >
                <HeartElement wishQuantity={wishQuantity} />
                <CartElement />
              </Grid>

            
              <Grid item xs={2} display={{ xs: 'block', md: 'none' }}>
                <IconButton onClick={() => toggleDrawer(true)}>
                  <FaBars className='text-xl' />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar> */}
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
                    <img
                      src='/myzk logo.png'
                      width={150}
                      height={50}
                      alt='Myzk logo'
                    />
                  </Box>
                </Link>
              </Grid>

              <Grid item>
                <Box display='flex' alignItems='center'>
                  <Button
                    component={Link}
                    href='/'
                    color='inherit'
                    sx={{
                      fontSize: '14px',
                      padding: '5px 8px',
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
                    sx={{ fontSize: '14px', padding: '5px 8px' }}
                  >
                    <Button color='inherit'>Category</Button>
                  </Box>
                  <Button
                    component={Link}
                    href='/shop/new-products'
                    color='inherit'
                    sx={{
                      fontSize: '14px',
                      padding: '5px 8px',
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
                    sx={{
                      fontSize: '14px',
                      padding: '5px 8px',
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
                sx={{ marginTop: { xs: '-140px', sm: '0px' } }} // Apply margin-top only on mobile
              >
                <HeartElement wishQuantity={wishQuantity} />
                <CartElement />
              </Grid>
              <Grid item xs={2} display={{ xs: 'block', md: 'none' }}>
                <IconButton onClick={() => toggleDrawer(true)}>
                  <FaBars className='text-xl' />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          {/* Category List on Hover */}
          {showCategoryList && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 2,
                marginTop: '90px',
                width: '100%'
              }}
            >
              <CategoryMenu
                onProductSelect={handleProductSelection}
                categoryMenuList={categoryMenuList2}
              />
            </Box>
          )}

          {/* Drawer (Hamburger menu for mobile) */}
          <Drawer
            anchor='left'
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            {list()}
          </Drawer>
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
                    alt='logo'
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
