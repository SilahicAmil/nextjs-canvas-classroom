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

<!-- -- Add Basic Unit Tests ((Priority #1))  -->

<!-- -- Look into students uploadng assignments ((Priority #2)) - Figured out an easy way to implement this -->
<!-- -- Supabase DB for student file upload
students -> studetName or studentEmail -> className -> moduleName -> completedAssignment -->
<!-- -- Also have teachers look at uploaded assignments by students - secure route only for teachers -->

<!-- ---------------------------------TODO BELOW--------------------------------- -->

-- Uploaded assignments should have the student email/name. Within that should have a dropdown for each module that shows the assignments.

-- Look at using Jotai for state across app

-- Add Data Caching

-- Add More Testing

-- Add Error States and UI

-- Inboxing will probably be the hardest thing (so save best for last lol or maybe never do it)

-- Figure out how to get rid of this "?courseName=Math-101&modules=Sample+Module&modules=Module+1&modules=Module+2" when passing query stuff to slug page

-- Figure out how to get all modules to load in slug page ((maybe just fetch data again in slug page))

-------- ##################################################### --------

## MVP (Minimum Viable Product)

- Ability for two way messaging between students and teachers - kind of like an email
- Teacher should be able to view the assigments

--------- DONE ---------

- Able to create student acount - Done
- Able to create a course as a teacher - Done
- - Students should be able to upload assignments - Done
- Within the course have the ability to add/delete modules (as a teacher) - Done
- - Student can only download files from modules and cant edit the course or create courses - Done
