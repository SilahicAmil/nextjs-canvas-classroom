<!-- -- Add a module component for course details page -->

<!-- -- Re-design the left side bar nav on course details -->

<!-- -- Update buttons for course details -->

<!-- -- Add a landing page on /landing (maybe) -->

<!-- -- Implement createCourse modal -->

<!-- -- Implement mongoDB createCourse -->
<!-- -- Design the login page -->

<!-- Create Course:
id: ObjectID
courseName: Calc 101
subject: Math
description: lorem ipsums
published: True
term: "2023-2024" -->

<!-- -- Fetch DB Data for Dashboard -->
<!-- -- Update routing for the courses/[course-name] -->
<!-- -- Show default initial sample module as first module
-- Subsequent modules will be the DB ones

-- Use Supabase for the files - File structure something like below

-- modules -> courseName -> moduleName -> fileData -->

<!-- ---------------------------------TODO BELOW--------------------------------- -->

-- Form shouldn't allow for spaces in the name only "-" between words (makes routing look nicer)

-- Nicer Module Name form
-- Create upload module modal or something (not really sure what I want to do with)

-- Figure out auth with next auth
-- Add Hooks

-- Add Calendar component to display assignments due( fetch from supabase probably make a field like DueDate)
-- Inboxing will probably be the hardest thing (so save best for last lol)
-- Also update avatar for profile based on auth name so everyone has a unique avatar

-- Add descriptions for Who We Help
-- Update Pricing Cards to reflect Who We Help

-- Find a better logo for the nav bar OmegaLUL

<!--  #####################################################-->

## MVP (Minimum Viable Product)

<!--  --> = Done

- Able to Login as a Teacher or Student and switch modes
- Able to create student acount
  - Able to create a course as a teacher
  - Within the course have the ability to add/delete modules (as a teacher)
- Students can view the courses and enroll into it
- Student can only download files from modules and cant edit the course/create any
- Ability for two way messaging between students and teachers - kind of like an email
- Calendar should be modifiable by students to organize their time
- Able to publish/unpublish courses
- Minimum 3 Courses that are always there and unable to be deleted
