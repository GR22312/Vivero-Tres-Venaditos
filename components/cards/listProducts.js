// pages/api/datos.js
//import datos from './../../pages/api/products/index.json';
/* Componente que consume los datos del archivo JSON
import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/products/index.json';
import ProductCards from './productsCard';
import { Container, Grid } from '@mui/material';*/

import { List, ListSubheader } from "@mui/material";
import ProductCards from "../../components/cards/productsCard";

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
                        Las plantas que tenemos y brindamos de nuestra empresa, se muestran a continuacion:
                    </ListSubheader>
                }
            />
            <ProductCards />
        </>
    )
}
