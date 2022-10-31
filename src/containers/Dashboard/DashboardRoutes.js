import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('@iso/containers/Widgets/Widgets')),
    exact: true,
  },
  {
    path: 'user_definations',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserDefinations/UserDefinations.js')),
  },
  {
    path: 'user_authorization_definations',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserAuthorizationDefinations/UserAuthorizationDefinations.js')),
  },
  {
    path: 'user_road_definations',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserRoadDefinations/UserRoadDefinations.js')),
  },
  {
    path: 'my_leave_entries',
    component: lazy(() => import('@iso/containers/LeaveEntries/NewLeaveEntries/NewLeaveEntries.js')),
  },
  {
    path: 'add_leaves_for_me',
    component: lazy(() => import('@iso/containers/LeaveEntries/ListOfLeaveEntries/ListOfLeaveEntries.js')),
  },
  {
    path: 'new_batch_leave_entries',
    component: lazy(() => import('@iso/containers/LeaveEntries/NewBatchLeaveEntry/NewBatchLeaveEntry.js')),
  },
  {
    path: 'route_definition',
    component: lazy(() => import('@iso/containers/LeaveEntries/LeaveApprovalDenialReport/LeaveApprovalDenialReport.js')),
  },
  {
    path: 'leave_list_pending_approval',
    component: lazy(() => import('@iso/containers/LeaveEntries/LeaveListPendingApproval/LeaveListPendingApproval.js')),
  },
  {
    path: 'leave _list_report',
    component: lazy(() => import('@iso/containers/Reports/LoginLogoutReports/LoginLogoutReports.js')),
  },
  {
    path: 'pending_approval_report',
    component: lazy(() => import('@iso/containers/Reports/LogoutLoginReports/LogoutLoginReports.js')),
  },
  {
    path: 'approval_rejection_report',
    component: lazy(() => import('@iso/containers/Reports/WeekendEmployeeReport/WeekendEmployeeReport.js')),
  },
  {
    path: 'leave_balance_report',
    component: lazy(() => import('@iso/containers/Reports/TrialPeriodControlReport/TrialPeriodControlReport.js')),
  },
  {
    path: 'user_definations_new',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserDefinations/AddUser.js')),
  },
  {
    path: 'user_definations_edit',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserDefinations/EditUser.js')),
  },
  {
    path: 'company_definations',
    component: lazy(() => import('@iso/containers/GeneralDefinations/CompanyDefinitions/CompanyList.js')),
  },
  {
    path: 'company_definations_new',
    component: lazy(() => import('@iso/containers/GeneralDefinations/CompanyDefinitions/AddCompany.js')),
  },
  {
    path: 'company_definations_edit',
    component: lazy(() => import('@iso/containers/GeneralDefinations/CompanyDefinitions/EditCompany.js')),
  },
  {
    path: 'unit_definations',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UnitDefinitions/UnitList.js')),
  },
  {
    path: 'unit_definations_new',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UnitDefinitions/AddUnit.js')),
  },
  {
    path: 'unit_definations_edit',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UnitDefinitions/EditUnit.js')),
  },
  {
    path: 'user_companies',
    component: lazy(() => import('@iso/containers/GeneralDefinations/UserCompanies/UserCompanies.js')),
  },
  {
    path: 'role_definition',
    component: lazy(() => import('@iso/containers/GeneralDefinations/RoleDefinitions/RoleList.js')),
  },
  {
    path: 'role_definition_new',
    component: lazy(() => import('@iso/containers/GeneralDefinations/RoleDefinitions/AddRole.js')),
  },
  {
    path: 'role_definition_edit',
    component: lazy(() => import('@iso/containers/GeneralDefinations/RoleDefinitions/EditRole.js')),
  },
  {
    path: 'set_role',
    component: lazy(() => import('@iso/containers/GeneralDefinations/RoleDefinitions/SetRole.js')),
  },
  {
    path: 'route_defination',
    component: lazy(() => import('@iso/containers/GeneralDefinations/RouteDefinitions/Routes.js')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
