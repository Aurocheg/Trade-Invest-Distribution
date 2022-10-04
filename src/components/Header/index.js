// MARK: - Material UI Components
import {
    AppBar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Button, Container, Drawer, Icon
} from "@mui/material"

// MARK: - Material UI Icons
import HomeIcon from '@mui/icons-material/Home'
import GroupsIcon from '@mui/icons-material/Groups'
import EngineeringIcon from '@mui/icons-material/Engineering'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import CallIcon from '@mui/icons-material/Call'
import MenuIcon from '@mui/icons-material/Menu'
import LanguageIcon from '@mui/icons-material/Language'

// MARK: - Other
import {useState} from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"

// MARK: - Variables
const drawerWidth = 240
const navItems = {
    titles: ["Home", "About", "Services", "Documents", "Contacts"],
    icons: [HomeIcon, GroupsIcon, EngineeringIcon, InsertDriveFileIcon, CallIcon]
}

export default function Header(props) {
    const {window} = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    // MARK: Header Components
    const drawerNavItems = navItems.titles.map((item, index) => (
        <Link to={"" + item.toLowerCase()} key={index} style={{textDecoration: "none", color: "rgb(25, 118, 210)"}}>
            <ListItem key={item} disablePadding>
                <ListItemButton>
                    <Icon component={navItems.icons[index]} style={{marginRight: "15px"}} />
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        </Link>
    ))

    const mainNavItems = navItems.titles.map((item, index) => (
        <Link to={"" + item.toLowerCase()} key={index} style={{textDecoration: "none"}}>
            <Button key={item} sx={{ color: "white", textTransform: "capitalize", marginRight: "10px"}}>
                <Icon component={navItems.icons[index]} style={{marginRight: "5px"}} />
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
            <AppBar component="nav">
                <Toolbar>
                    <Container sx={{display: "flex", justifyContent: {xs: "flex-start", sm: "space-between"}, alignItems: "center"}} maxWidth="lg">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: "none"}}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/home" style={{backgroundColor: "white", border: "1px solid #fff", borderRadius: "15px"}}>
                            <img src={logo} width={100} height={60} alt="logo"/>
                        </Link>
                        <Box sx={{ display: { xs: "none", sm: "block" }}}>
                            {mainNavItems}
                        </Box>
                        <IconButton component={LanguageIcon} style={{width: "40px", height: "40px", color: "#fff"}}/>
                    </Container>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}