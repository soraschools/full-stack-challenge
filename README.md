## Welcome to the Sora Full-Stack Coding Challenge!

If you wish to work at Sora, follow the instructions below! We would like to assess your skills for developing a full-stack app preferably in three domains of knowledge: React, NodeJS and a relational database of your choice.

### Challenge Description

At Sora, each of our students have skills that are rated on a scale from level 0-4 based on their demonstrated knowledge. This is our replacement for "grades". In this scenario, a student has a question about a specific skill. So, create a web app using React and Express that helps the student find the correct person to answer their question about a selected skill.

Selection logic: A question should go to a student who is a level 3 or 4 in the skill. If there are two or more students who meet those level requirements, prioritize students in the same house then prioritize higher level, in that order. However, ensure the selected student is always at least one level higher than the student. If no student is a level 3 or 4 and is not at least one level higher, it will be directed to the Faculty member who has a tag for the skill's subject.

### Example Outputs

_assuming you're the 'Tester' student_

- skill_id === 1 => Faculty member 'Carolyn Reeves'
- skill_id === 3 => Student 'Ludwig Wittgenstein'
- skill_id === 4 => Faculty member 'Michael Granado'
- skill_id === 6 => Student 'Max Stirner'

### Bonus, the *Chef Kiss*

If possible, we would like to have your personal touch on the project. This could be anything: an extra feature that makes the product better, a fantastic design element not specified in the challenge... This is an optional task that would help us assess your creativity and ownership over the stuff you will be developing.

### Judging Criteria

We'll be examining the app's logic, database architecture, its design and user experience. We expect the app to be reactive to different screen sizes. Imagine that your small app is going to production tomorrow!

### Getting Started

Fork this repo. Then:

```bash
npm install
```

To run react app:

```bash
cd client & npm start
```

To run express server:

```bash
node server.js
```

Feel free to use the scaffold code or completely disregard it! It's only there to make your life easier. A good place to start would be the routes in the 'server.js' file.
