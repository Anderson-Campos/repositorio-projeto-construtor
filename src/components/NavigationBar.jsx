import { Avatar, Stack } from "@mui/material"


const NavigationBar = () => {
    return (
        <>
            <Stack direction="row" spacing={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
        </>
    )
}

export default NavigationBar