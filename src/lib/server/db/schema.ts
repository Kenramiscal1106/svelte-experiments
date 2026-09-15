import { varchar, boolean, integer, pgTable, uuid } from 'drizzle-orm/pg-core';

export const task = pgTable('task', {
	id: uuid("task_id").defaultRandom().primaryKey(),
	title: varchar("title").notNull(),
	priority: integer("priority").notNull().default(1),
	done: boolean("done").notNull().default(false),
	userId: uuid("user_id").references(() => user.id).notNull()
});

export const user = pgTable('user', {
	id: uuid("user_id").defaultRandom().primaryKey(),
	name: varchar('name', {
		length: 100
	}),
	email: varchar('email', {
		length: 64
	})
})
