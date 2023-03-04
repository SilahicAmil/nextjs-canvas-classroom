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

<!-- ---------------------------------TODO BELOW--------------------------------- -->

-- Error handling for the not allowing same module name - handle in API route

-- Add React Hot Toast for uploading files and creating modules/courses

-- Reset DBs

-- Add Calendar component to display assignments due (fetch from DB probably make a field like DueDate)

-- Inboxing will probably be the hardest thing (so save best for last lol)

<!--  #####################################################-->

## MVP (Minimum Viable Product)

<!--  --> = Done

- Able to Login as a Teacher or Student and switch modes
- Able to create student acount
- Able to create a course as a teacher
- Within the course have the ability to add/delete modules (as a teacher)
- Students can view the courses and enroll into it
- Student can only download files from modules and cant edit the course or create courses
- Ability for two way messaging between students and teachers - kind of like an email
- Calendar should show due dates of modules for students
- Students should be able to upload assignments for teacher to view
