module.exports = {
  extend: 'apostrophe-pieces',
  name: 'departments',
  label: 'Department',
  alias: 'departments',
  addFields: [
    {
      name: '_products',
      type: 'joinByArrayReverse',
      withType: 'product',
      reverseOf: '_specialists',
      projection: {
        _url: 1,
        title: 1
      }
    }
  ]
};

