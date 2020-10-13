const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// All skills not explicitly referenced in the "skills" property can be
// assumed to be 0.
app.get("/students", (req, res) => {
  const students = [
    {
      id: 1,
      name: "Tester",
      email: "test@soraschools.com",
      house: "Heqet",
      skills: [
        { id: 3, level: 2 },
        { id: 4, level: 3 },
        { id: 6, level: 1 },
      ],
    },
    {
      id: 2,
      name: "Ludwig Wittgenstein",
      email: "inaflyjar@soraschools.com",
      house: "Heqet",
      skills: [
        { id: 3, level: 4 },
        { id: 4, level: 1 },
      ],
    },
    {
      id: 3,
      name: "Max Stirner",
      email: "nothingtome@soraschools.com",
      house: "Heqet",
      skills: [
        { id: 1, level: 2 },
        { id: 3, level: 3 },
        { id: 6, level: 3 },
      ],
    },
    {
      id: 4,
      name: "Simone de Beauvoir",
      email: "strongnproud@soraschools.com",
      house: "Nightshade",
      skills: [
        { id: 4, level: 3 },
        { id: 5, level: 3 },
        { id: 6, level: 4 },
      ],
    },
    {
      id: 2,
      name: "Friedrich Nietzsche",
      email: "iamtheubermench@soraschools.com",
      house: "Nightshade",
      skills: [
        { id: 3, level: 4 },
        { id: 4, level: 3 },
        { id: 4, level: 1 },
        { id: 6, level: 1 },
      ],
    },
  ];
  res.send({});
});

app.get("/current-user-id", (req, res) => {
  const currentUserId = 1; // don't assume this will always be true
  res.send({});
});

app.get("/faculty", (req, res) => {
  const faculty = [
    {
      id: 1,
      name: "Michael Granado",
      subject_ids: [3, 4],
    },
    {
      id: 2,
      name: "Carolyn Reeves",
      subject_ids: [1, 2],
    },
  ];
  res.send({});
});

app.get("/skills", (req, res) => {
  const skills = [
    {
      id: 1,
      title: "Algebra Skill",
      subject_id: 1,
    },
    {
      id: 2,
      title: "Geometry skill",
      subject_id: 1,
    },
    {
      id: 3,
      title: "Biology Skill",
      subject_id: 2,
    },
    {
      id: 4,
      title: "Physics Skill",
      subject_id: 2,
    },
    {
      id: 5,
      title: "Philosophy Skill",
      subject_id: 3,
    },
    {
      id: 6,
      title: "American History Skill",
      subject_id: 4,
    },
  ];
  res.send({});
});
