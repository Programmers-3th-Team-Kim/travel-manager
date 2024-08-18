import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AddPlanPageLayout, MainLayout } from '@/components/layout'
import {
  AddPlanPage,
  LoginPage,
  NotFoundPage,
  PlanDetailPage,
  PlanListPage,
} from '@/pages'

import { routes } from '.'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.plans,
        element: <PlanListPage />,
      },
      {
        path: `${routes.addPlan}/:stepId`,
        element: (
          <AddPlanPageLayout>
            <AddPlanPage />
          </AddPlanPageLayout>
        ),
      },
      {
        path: routes.plan,
        element: <PlanDetailPage />,
      },
    ],
  },
])

export default router
