import {Box, Drawer} from "@mui/material"

export default function HeaderDrawer(props) {
    return (
        <Box component="nav">
            <Drawer
                container={props.container}
                variant={props.variant}
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: props.drawerWidth},
                }}
            >
                {props.drawer}
            </Drawer>
        </Box>
    )
}