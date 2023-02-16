<!-- -- Add a module component for course details page -->

<!-- -- Re-design the left side bar nav on course details -->

<!-- -- Update buttons for course details -->

-- Add a landing page on /landing (maybe)

<!-- -- Implement createCourse modal -->

<!-- -- Implement mongoDB createCourse -->

<!-- Create Course:
id: ObjectID
courseName: Calc 101
subject: Math
description: lorem ipsums
published: True
term: "2023-2024" -->

-- Form shouldn't allow for spaces in the name only "-" between words (makes routing look nicer)

-- Fetch DB Data for Dashboard
-- Update routing for the courses/[course-name]
-- Show default initial sample module as first module
-- Subsequent modules will be the DB ones

-- Implement mongoDB update course with module and attach files in there
something like. moduleCreate will upset or insert idk which one yet into the above course
based off of object ID. this way makes it easier for it to be mapped over
all have to do is modules.map() or for module in modules

modules: [
Intro: file1.pdf
Module 3: [file1.pdf, file2.pdf ...]
]

-- Figure out auth with next auth

-- Add Calendar component to display assignments due( fetch from supabase probably make a field like DueDate)
-- Inboxing will probably be the hardest thing (so save best for last lol)
-- Also update avatar for profile based on auth name so everyone has a unique avatar
-- Find a better logo for the nav bar OmegaLUL

<!-- -- Design the login page -->
