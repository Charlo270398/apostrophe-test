module.exports = {
  extend: 'apostrophe-pieces',
  name: 'departments',
  label: 'Department',
  alias: 'departments',
  addFields: [
    {
      name: '_specialists',
      type: 'joinByArray',
      withType: 'specialist',
      label: 'Specialists',
      help: 'The kind of people that you will find here.'
    },
    {
      name: '_products',
      type: 'joinByArray',
      withType: 'product',
      label: 'Products',
      help: 'The kind of products that you will find here.'
    }
    
  ]
};

