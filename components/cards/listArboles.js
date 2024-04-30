import { List, ListSubheader } from "@mui/material";
import ArbolesCards from "./arbolesCard";

export default function products() {
    return (
        <>
            <List
                fullWidth
                sx={{
                    width: '100%',
                    bgcolor: 'grey.200',
                    borderRadius: '8px',
                    padding: '16px',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={{
                            bgcolor: '#063d79',
                            color: 'white',
                            borderRadius: '8px 8px 0 0',
                            padding: '16px',
                        }}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Los arboles que ofrecemos, se muestran a continuacion:
                    </ListSubheader>
                }
            />
            <ArbolesCards />
        </>
    )
}
