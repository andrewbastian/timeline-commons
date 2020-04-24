exports.up = async function(knex) {

  await knex.schema.createTable('projects', tbl => {

      tbl.increments('id')

      tbl.text('project_title', 128)
        .unique()
        .notNullable()

      tbl.text('project_description')

      tbl.text('language', 8)
      	.defaultTo('en-us')
      	.notNullable()
    })

    await knex.schema.createTable("project_items", (tbl) =>{
  		
  		tbl.integer("project_id")
  	  		.references("id")
  			.inTable("projects")
  			.onDelete("CASCADE")

  		tbl.integer("item_id")
  	  		.references("id")
  			.inTable("items")
  			.onDelete("CASCADE")

  		tbl.primary(["project_id", "item_id"])

  })

    await knex.schema.createTable('items', tbl => {

      tbl.increments('id')

      tbl.text('item_title')
        .notNullable()

      tbl.text('item_description')
      	.notNullable()

      tbl.date('date')
      

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')



    });

    await knex.schema.createTable('users', tbl => {
      
      tbl.increments('id')

      tbl.text('username')
        .notNullable()

      tbl.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });

};

exports.down = async function(knex) {

 await knex.schema.dropTableIfExists("project_items")
 await knex.schema.dropTableIfExists("items")
 await knex.schema.dropTableIfExists("users")
 await knex.schema.dropTableIfExists("projects")

};