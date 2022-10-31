const options = [
  {
    key: 'general_definations',
    label: 'sidebar.generalDefinations',
    leftIcon: 'ion-earth',
    children: [
      {
        key: 'user_definations',
        label: 'sidebar.generalDefinations.userDefinations',
      },
      {
        key: 'user_authorization_definations',
        label: 'sidebar.generalDefinations.userAuthorizationDefinations',
      },
      {
        key: 'user_road_definations',
        label: 'sidebar.generalDefinations.userRoadDefinations',
      },
      {
        key: 'company_definations',
        label: 'sidebar.generalDefinations.companyDefinations',
      },
      {
        key: 'unit_definations',
        label: 'sidebar.generalDefinations.unitDefinations',
      },
      {
        key: 'user_companies',
        label: 'sidebar.generalDefinations.userCompanies',
      },
      {
        key: 'role_definition',
        label: 'sidebar.generalDefinations.userRoles',
      },
      {
        key: 'set_role',
        label: 'sidebar.generalDefinations.setUserRoles',
      },
      {
        key: 'route_defination',
        label: 'sidebar.generalDefinations.setUserRoutes',
      }
    ],
  },
  {
    key: 'leave_entries',
    label: 'sidebar.leaveEntries',
    leftIcon: 'ion-person-stalker',
    children: [
      {
        key: 'my_leave_entries',
        label: 'sidebar.leaveEntries.myLeaveEntries',
      },
      {
        key: 'add_leaves_for_me',
        label: 'sidebar.leaveEntries.addLeavesForMe',
      },
      {
        key: 'new_batch_leave_entries',
        label: 'sidebar.leaveEntries.NewBatchLeaveEntry',
      },
      {
        key: 'route_definition',
        label: 'sidebar.leaveEntries.route_definition',
      },
      {
        key: 'leave_list_pending_approval',
        label: 'sidebar.leaveEntries.LeaveListPendingApproval',
      },
    ],
  },
  {
    key: 'reports',
    label: 'sidebar.reports',
    leftIcon: 'ion-clipboard',
    children: [
      {
        key: 'leave _list_report',
        label: 'sidebar.reports.leaveListReport',
      },
      {
        key: 'pending_approval_report',
        label: 'sidebar.reports.pendingApprovalReport',
      },
      {
        key: 'approval_rejection_report',
        label: 'sidebar.reports.approvalRejectionReport',
      },
      {
        key: 'leave_balance_report',
        label: 'sidebar.reports.leaveBalanceReport',
      }
    ],
  },
];
export default options;
