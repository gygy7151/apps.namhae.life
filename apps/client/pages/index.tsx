import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import {
  Toolbar,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material'

import { Appbar } from '../components/Appbar'
import { FoodDrawer } from '../components/FoodDrawer'

import { stores } from '../data/stores'


const Home: NextPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Namhae Life App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar title="Namhae Life 식사배달" />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={{ xs: 2, sm: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
          {stores.map((store, index) => (
            <Grid key={index} item xs={4} sm={4} md={4}>
              <StoreCard
                id={store.id}
                name={store.name}
                image={store.image ? store.image : '/vercel.svg'}
                description={store.description}
              >
              </StoreCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <FoodDrawer />

    </Box>
  )
}

export default Home

interface StoreCardProps {
  id: string
  name: string
  image: string
  description: string
}

const StoreCard: NextPage<StoreCardProps> = (stores) => {
  const { id, name, image, description } = stores

  return (
    <Link href={`/store/${id}`} passHref>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
