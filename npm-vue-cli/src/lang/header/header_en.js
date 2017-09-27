export default {
  title: 'FBMS',
  navbar: [
    {
      component: 'Operators'
    },
    {
      component: 'Customer Analysis',
      children: [
        {
          component: 'Active'
        },
        {
          component: 'Remain'
        },
        {
          component: 'Region'
        }
      ]
    },
    {
      component: 'Sales'
    }
  ]
};
