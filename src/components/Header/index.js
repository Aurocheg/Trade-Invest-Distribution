import {
    AppBar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Button, Container
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

import {useState} from "react"
import {Link} from "react-router-dom"
import HeaderDrawer from "./HeaderDrawer"
import logo from "../../assets/logo.png"
import {blueGrey, lightBlue} from "@mui/material/colors";

const drawerWidth = 240
const navItems = ["Home", "About", "Services", "Documents", "Contacts"]

export default function Header(props) {
    const {window} = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawerNavItems = navItems.map((item, index) => (
        <Link to={"" + item.toLowerCase()} key={index} style={{textDecoration: "none"}}>
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{textAlign: "center"}}>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        </Link>
    ))

    const mainNavItems = navItems.map((item, index) => (
        <Link to={"" + item.toLowerCase()} key={index} style={{textDecoration: "none"}}>
            <Button key={item} sx={{ color: blueGrey }}>
                {item}
            </Button>
        </Link>
    ))

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
            <List>
                {drawerNavItems}
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{display: "flex"}}>
            <AppBar component="nav" style={{backgroundColor: "white"}}>
                <Toolbar sx={{display: "flex", justifyContent: {xs: "flex-start", sm: "center"}}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: "none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: "none", sm: "block" }}}>
                        {mainNavItems}
                    </Box>
                </Toolbar>
            </AppBar>
            <HeaderDrawer container={container}
                          variant="temporary"
                          open={mobileOpen}
                          onClose={() => handleDrawerToggle()}
                          drawerWidth={drawerWidth}
                          drawer={drawer}
            />
        </Box>
    )
}