'use client'

import React, { Suspense } from 'react';

const MapComponent = React.lazy(() => import('@/components/mapa/mapa'));

export default function Mapa(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <MapComponent/>
            </Suspense>
        </>
    )
}