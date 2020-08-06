const express = require('express');
const app = express();
const data = require('./data');
const { json } = require('express');

// All classes
app.get('/api/classes/', (req, res) => {
  res.json(data.classes);
});

// Get class information
app.get('/api/classInfo/:id', (req, res) => {
  const ID = req.params.id;

  let teacher = '';
  let student = [];

  for (let i = 0; i < data.teachers.length; i++) {
    for (let j = 0; j < data.teachers[i].classes.length; j++) {
      if (data.teachers[i].classes[j] === parseInt(ID)) {
        teacher = data.teachers[i].name;
      }
    }
  }

  for (let i = 0; i < data.learners.length; i++) {
    for (let j = 0; j < data.learners[i].classes.length; j++) {
      if (data.learners[i].classes[j] === parseInt(ID)) {
        student.push(data.learners[i].name);
      }
    }
  }

  let slot, group, time, classNum, className;

  for (let i = 0; i < data.classes.length; i++) {
    if (data.classes[i].id === parseInt(ID)) {
      slot = data.classes[i].slot;
      group = data.classes[i].group;
      classNum = data.classes[i].classroom;
      className = data.classes[i].subject;
    }
  }

  for (let i = 0; i < data.slots.length; i++) {
    if ((data.slots[i].slot = slot)) {
      for (let j = 1; j < data.slots[i].times.length; j++) {
        if (j === group) {
          time = data.slots[i].times[j];
        }
      }
    }
  }

  classDetail = [
    {
      subject: className,
      teacher: teacher,
      students: student,
      time: time,
      class: classNum,
    },
  ];

  res.json(classDetail);
});

// Teacher Info
app.get('/api/teacher/:name', (req, res) => {
  let teachClass = [];
  let myClasses = [];

  for (let i = 0; i < data.teachers.length; i++) {
    if (data.teachers[i].name.toUpperCase() === req.params.name.toUpperCase()) {
      teachClass.push(data.teachers[i].classes);
    }
  }

  let j = 0;

  for (let i = 0; i < data.classes.length; i++) {
    if (data.classes[i].id === teachClass[0][j]) {
      myClasses.push(
        `${data.classes[i].subject} group ${data.classes[i].group}`
      );
      ++j;
    }
  }

  let teacher = {
    teacher: req.params.name,
    classes: myClasses,
  };

  res.json(teacher);
});

// Student info
app.get('/api/learner/:name', (req, res) => {
  let studentClass = [];
  let myClasses = [];

  for (let i = 0; i < data.learners.length; i++) {
    if (data.learners[i].name.toUpperCase() === req.params.name.toUpperCase()) {
      studentClass.push(data.learners[i].classes);
    }
  }

  let j = 0;

  for (let i = 0; i < data.classes.length; i++) {
    if (data.classes[i].id === studentClass[0][j]) {
      myClasses.push(
        `${data.classes[i].subject} group ${data.classes[i].group}`
      );
      ++j;
    }
  }

  let student = {
    student: req.params.name,
    classes: myClasses,
  };

  res.json(student);
});

// Brief
app.get('/api/brief/', (req, res) => {
  let brief = {
    url:
      'https://classroom.google.com/u/0/c/MTM3NTM4NTE1ODU0/m/MTI4NDczNzg3MDY4/details',
  };

  res.json(brief);
});

// Subject
app.get('/api/subject/:name', (req, res) => {
  let subjects = req.params.name.toUpperCase();
  let searchSub = [];
  let text = '';

  for (let i = 0; data.classes.length; i++) {
    text = data.classes[i].subject.toUpperCase();

    if (text.search(subjects)) {
      searchSub.push(data.classes[i].subject);
    }
  }

  res.json(searchSub);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
