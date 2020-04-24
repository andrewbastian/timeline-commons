
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, project_title: 'Center for Grassroots Oversight', project_description: 'The Center for Grassroots Oversight aims to provide the public with a means to collaborate on investigations at the grassroots level.', language: 'en-us'},
        {id: 2, project_title: 'rowValue2', project_description: 'rowValue1', language: 'en-us'},
        {id: 3, project_title: 'rowValue3', project_description: 'rowValue1', language: 'en-us'}
      ]);
    });
};
