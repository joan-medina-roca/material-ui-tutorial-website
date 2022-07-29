import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: {xs: "none", sm: "block"} }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Article/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Person/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
            <FormGroup>
              <FormControlLabel control={<Switch/>} label="Night" />
            </FormGroup>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar