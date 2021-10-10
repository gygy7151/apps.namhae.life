import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import {
  Box,
  Grid,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material'

import { Appbar } from '../../components/Appbar'
import { FoodDrawer } from '../../components/FoodDrawer'

import { stores } from '../../data/stores'


const Store: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [store, setStore] = useState<any>()
  const [menus, setMenus] = useState<any[]>([])


  console.log(id)

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Namhae Life App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, sm: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
          </Grid>
        </Box>
      </Box>

      <FoodDrawer />

    </Box>
  )
}

export default Store
