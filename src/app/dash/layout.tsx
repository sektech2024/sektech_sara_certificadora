import React, { Suspense } from "react";

const MenuBoard = React.lazy(() => import('@/components/menu/menu'))

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <MenuBoard></MenuBoard>
          {children}
        </Suspense>
      </section>
    )
  }