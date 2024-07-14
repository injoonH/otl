DO $$ BEGIN
 CREATE TYPE "public"."semester" AS ENUM('spring', 'summer', 'fall', 'winter');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "otl_course" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" smallint NOT NULL,
	"semester" "semester" NOT NULL,
	"category_id" smallint NOT NULL,
	"code" varchar(32) NOT NULL,
	"no" varchar(32) NOT NULL,
	"class" varchar(8),
	"title" varchar(255) NOT NULL,
	"has_syllabus" boolean NOT NULL,
	"au" smallint NOT NULL,
	"credit" smallint NOT NULL,
	"professor" varchar(255) NOT NULL,
	"capacity" smallint NOT NULL,
	"audience" smallint NOT NULL,
	"place" varchar(255),
	"note" varchar(255),
	"department_id" smallint NOT NULL,
	"delivery_mode" varchar(32) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "otl_course" ADD CONSTRAINT "otl_course_category_id_otl_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."otl_category"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "otl_course" ADD CONSTRAINT "otl_course_department_id_otl_department_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."otl_department"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "otl_course_year_semester_index" ON "otl_course" USING btree ("year","semester");
