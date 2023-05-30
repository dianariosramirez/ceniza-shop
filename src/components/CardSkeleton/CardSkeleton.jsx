import React from 'react';

// MUI components
import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export const CardSkeleton = () => {
    return (
    <Card>
        <Skeleton
            variant='rectangular'
            height='400px'
        />
        <CardContent>
            <Stack spacing={1} >
                <Skeleton
                    variant='body1'
                    width='70%'
                />
                <Skeleton
                    variant='rectangular'
                    width='20%'
                    height='12px'
                />                
            </Stack>
        </CardContent>
    </Card>
    );
}

export const ImageSkeleton = () => {
    return(
        <Skeleton
            variant='rectangular'
            height='auto'
        />
    )
}
