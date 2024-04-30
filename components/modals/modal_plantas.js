import React from 'react';
import {
    Modal,
    Typography,
    Box,
    Button
} from '@mui/material';

const ModalPlantas = ({ infoPlanta, modalOpen, handleCloseModal }) => {
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            ><Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                fontWeight="bold"
                sx={{ textAlign: 'center' }}
            >
                {infoPlanta.name}
            </Typography>
            <Typography
                id="modal-description"
                sx={{ mt: 2, textAlign: 'justify' }}
            >
                <span style={{ fontWeight: 'bold' }}>Clasificación:</span> {infoPlanta.clasificacion}
            </Typography>
            <Typography
                id="modal-description"
                sx={{ mt: 2, textAlign: 'justify' }}
            >
                <span style={{ fontWeight: 'bold' }}>Descripción:</span> {infoPlanta.description}
            </Typography>
            <Typography
                id="modal-description"
                sx={{ mt: 2, textAlign: 'justify' }}
            >
                <span style={{ fontWeight: 'bold' }}>Uso:</span> {infoPlanta.uso}
            </Typography>
            <Button onClick={handleCloseModal} sx={{ mt: 2, width: '100%' }}>
                Cerrar
            </Button>
        </Box>
        
            </Modal>
        </>
    );
};

export default ModalPlantas;
