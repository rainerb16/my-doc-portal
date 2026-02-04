module.exports = {
  tutorialSidebar: [
    { type: 'doc', 
      id: 'portfolio-hub' 
    },
    {
      type: 'doc',
      id: 'mapping-calgary'
    },
    {
      type: 'doc',
      id: 'automated-pipeline'
    },
    {
      type: 'category',
      label: 'Inventory System',
      items: [
        'inventory-app/overview',
        'inventory-app/merchant-user-guide',     
        'inventory-app/auth-deep-dive',
      ],
    },
    {
      type: 'category',
      label: 'Petstore API',
      link: { 
        type: 'doc', 
        id: 'petstore/swagger-petstore'
      },
      items: [
        {
          type: 'category',
          label: 'Core Operations',
          items: [
            {
              type: 'doc',
              id: 'petstore/add-pet',
              label: 'Add New Pet'
            },
            {
              type: 'doc',
              id: 'petstore/update-pet',
              label: 'Update Existing Pet'
            },
            {
              type: 'doc',
              id: 'petstore/find-pets-by-status',
              label: 'Find by Status'
            },
          ],
        },
        {
          type: 'category',
          label: 'Store Management',
          items: [
            {
              type: 'doc',
              id: 'petstore/get-inventory',
              label: 'View Inventory'
            },
            {
              type: 'doc',
              id: 'petstore/place-order',
              label: 'Place New Order'
            },
            {
              type: 'doc',
              id: 'petstore/get-order-by-id',
              label: 'Track Order'
            },
            {
              type: 'doc',
              id: 'petstore/delete-order',
              label: 'Cancel Order'
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'About This Portal',
      items: [
        'style-guide',
        'automated-pipeline',
      ],
    },
  ],
};