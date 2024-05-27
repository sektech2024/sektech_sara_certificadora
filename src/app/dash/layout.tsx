import React, { Suspense } from "react";

const MenuBoard = React.lazy(() => import('@/components/menu/menu'))

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section suppressHydrationWarning={true}>
        <Suspense fallback={<div>Loading...</div>}>
          <MenuBoard></MenuBoard>
        </Suspense>
          {children}
      </section>
    )
  }