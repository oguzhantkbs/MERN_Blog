import React, { useEffect, useState } from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles, ThemeProvider } from '@material-ui/core'
import PenIcon from '@material-ui/icons/Create'
import { Redirect, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PostList from './components/PostList'
// import PostDetails from './components/PostDetails'
import { AddPostForm } from './components/AddPostForm'
import { useDispatch } from "react-redux"
import { fetchPosts } from "./actions/post"
import RouteProps from './hoc/RouteProps'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  container: {
    marginTop: theme.spacing(3)
  },
  toolbar: {
    flexGrow: 1
  }
}))

const App = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // console.log("Dispatvg APP : ", dispatch(fetchPosts()))
    dispatch(fetchPosts())
  }, [dispatch])

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit' elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.container} color="inherit" />
            <Typography variant='h6' color="secondary" className={classes.title} >
              <a href='/posts'>Blogify</a>
            </Typography>
            <Button color="primary" variant='outlined' startIcon={<PenIcon />} onClick={handleOpen}>Yeni Yazı</Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={12}>

            <BrowserRouter>
              <Routes>
                <Route exact path="/posts" element={<PostList />} />
                <Route exact path="/posts/:id" element={<RouteProps />} />
              </Routes>
            </BrowserRouter>
          </Grid>

        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />

    </>
  )
}
export default App
