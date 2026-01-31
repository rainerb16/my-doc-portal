module.exports = {
  tutorialSidebar: [
    { type: 'doc', id: 'portfolio-hub' },
    {
      type: 'category',
      label: 'Petstore API',
      items: require("./docs/petstore/sidebar"), // No extension needed
    },
  ],
};