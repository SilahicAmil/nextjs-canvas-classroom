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
<!-- -- Nicer Module Name form -->
<!-- -- Add descriptions for Who We Help
-- Update Pricing Cards to reflect Who We Help -->
<!-- -- Update README.md to show what the project is and etc -->
<!-- -- Add Hooks  -->

<!-- -- Update Modals with backdrop that you can click out of to close -->

<!-- -- Add Next Auth with credentials
-- Add singup route for nextauth
-- useSessions for auth (!auth redirect to /login) -->

<!-- -- Add helpers for mongoDB connecting and etc to DRY up code -->

<!-- -- Also update avatar for profile based on auth name so everyone has a unique avatar -->

<!-- -- Error handling for the not allowing same module name - handle in API route -->

<!-- -- Add React Hot Toast for uploading files and creating modules/courses -->

<!-- -- Reset DBs -->
<!-- -- Create custom Toaster component -->
<!-- -- Update Landing Page - Make it more modern (PRIORITY #1) -->

<!-- ---------------------------------TODO BELOW--------------------------------- -->

-- Add Basic Unit Tests ((Priority #1)) - WIP

-- Look into students uploadng assignments ((Priority #2)) - Figured out an easy way to implement this
-- Also have teachers look at uploaded assignments by students - secure route only for teachers

-- Supabase DB for student file upload
students -> studetName or studentEmail -> className -> moduleName -> completedAssignment

-- Inboxing will probably be the hardest thing (so save best for last lol or maybe never do it)

-------- ##################################################### --------

## MVP (Minimum Viable Product)

- Ability for two way messaging between students and teachers - kind of like an email
- Students should be able to upload assignments for teacher to view

--------- DONE ---------

- Able to create student acount - Done
- Able to create a course as a teacher - Done
- Within the course have the ability to add/delete modules (as a teacher) - Done
- - Student can only download files from modules and cant edit the course or create courses - Done
