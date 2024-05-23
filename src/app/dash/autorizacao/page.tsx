'use client'

import React, { Suspense } from 'react';

const TabsPerfis = React.lazy(() => import('@/components/autorizacao_menus/tabs-navigation'));

export default function Autorizacao(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <TabsPerfis/>
            </Suspense>
        </>
    )
}