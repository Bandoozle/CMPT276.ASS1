var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01]

var maxBoundary = 100;
var aplusBoundary = 95;
var aBoundary = 90;
var aminusBoundary = 85;
var bplusBoundary = 80;
var bBoundary = 75;
var bminusBoundary = 70;
var cplusBoundary = 65;
var cBoundary = 60;
var cminusBoundary = 55;
var dBoundary = 50;
var fBoundary = 0;

function generateHistogram() {
  var histogramData = [];

  histogramData.push({ range: 'A+', frequency: 0 });
  histogramData.push({ range: 'A', frequency: 0 });
  histogramData.push({ range: 'A-', frequency: 0 });
  histogramData.push({ range: 'B+', frequency: 0 });
  histogramData.push({ range: 'B', frequency: 0 });
  histogramData.push({ range: 'B-', frequency: 0 });
  histogramData.push({ range: 'C+', frequency: 0 });
  histogramData.push({ range: 'C', frequency: 0 });
  histogramData.push({ range: 'C-', frequency: 0 });
  histogramData.push({ range: 'D', frequency: 0 });
  histogramData.push({ range: 'F', frequency: 0 });

  // Count the number of students in each grade range
  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];
    var gradeRange = getGradeRange(grade);

    var existingGrade = histogramData.find(function (data) {
      return data.range === gradeRange;
    });

    if (existingGrade) {
      existingGrade.frequency++;
    }
  }

  // Sort the histogram data in descending order
  histogramData.sort(function (a, b) {
      return getBoundaryValue(b.range) - getBoundaryValue(a.range);
  });

  // Clear previous histogram
  var histogramContainer = document.getElementById("histogram");
  histogramContainer.innerHTML = "";

  // Generate histogram bars
  for (var j = 0; j < histogramData.length; j++) {
    var data = histogramData[j];
    if (data.frequency == 0) {
    var bar = document.createElement("div");
    bar.textContent = " ";
    bar.style.whiteSpace = "pre";
    histogramContainer.appendChild(bar);
    } else {
      var bar = document.createElement("div");
      bar.textContent = "0".repeat(data.frequency);
      histogramContainer.appendChild(bar);
    }
  }
}

function getGradeRange(grade) {
  if (grade >= aplusBoundary) {
      return 'A+';
  } else if (grade >= aBoundary) {
      return 'A';
  } else if (grade >= aminusBoundary) {
      return 'A-';
  } else if (grade >= bplusBoundary) {
      return 'B+';
  } else if (grade >= bBoundary) {
      return 'B';
  } else if (grade >= bminusBoundary) {
      return 'B-';
  } else if (grade >= cplusBoundary) {
      return 'C+';
  } else if (grade >= cBoundary) {
      return 'C';
  } else if (grade >= cminusBoundary) {
      return 'C-';
  } else if (grade >= dBoundary) {
      return 'D';
  } else {
      return 'F';
  }
}

function getBoundaryValue(range) {
  switch (range) {
      case 'A+':
          return aplusBoundary;
      case 'A':
          return aBoundary;
      case 'A-':
          return aminusBoundary;
      case 'B+':
          return bplusBoundary;
      case 'B':
          return bBoundary;
      case 'B-':
          return bminusBoundary;
      case 'C+':
          return cplusBoundary;
      case 'C':
          return cBoundary;
      case 'C-':
          return cminusBoundary;
      case 'D':
          return dBoundary;
      case 'F':
          return fBoundary;
  }
}

document.getElementById("myForm").onsubmit = function (e) {
  e.preventDefault();
}

function addGrade() {
  var t = document.getElementById("newGrade").value;

  if (t.trim() === "") {
    alert("Please enter a grade!");
  } else if (t < 0 || t > maxBoundary) {
    alert("Please enter a grade between 0-" + maxBoundary + "!");
  } else {
    if (!isNaN(t)) {
      grades.push(parseFloat(t));
      generateHistogram();
    }
  }
}

function updateBoundaries() {
  maxBoundary = parseFloat(document.getElementById("maxBoundary").value);
  aplusBoundary = parseFloat(document.getElementById("aplusBoundary").value);
  aBoundary = parseFloat(document.getElementById("aBoundary").value);
  aminusBoundary = parseFloat(document.getElementById("aminusBoundary").value);
  bplusBoundary = parseFloat(document.getElementById("bplusBoundary").value);
  bBoundary = parseFloat(document.getElementById("bBoundary").value);
  bminusBoundary = parseFloat(document.getElementById("bminusBoundary").value);
  cplusBoundary = parseFloat(document.getElementById("cplusBoundary").value);
  cBoundary = parseFloat(document.getElementById("cBoundary").value);
  cminusBoundary = parseFloat(document.getElementById("cminusBoundary").value);
  dBoundary = parseFloat(document.getElementById("dBoundary").value);
  fBoundary = parseFloat(document.getElementById("fBoundary").value);

  if (maxBoundary > aplusBoundary && aplusBoundary > aBoundary && aBoundary > aminusBoundary && aminusBoundary > bplusBoundary && bplusBoundary > bBoundary && bBoundary > bminusBoundary && bminusBoundary > cplusBoundary && cplusBoundary > cBoundary && cBoundary > cminusBoundary && cminusBoundary > dBoundary && dBoundary > fBoundary) {
    generateHistogram();
  } else {
    alert("Please check your boundaries!");
  }

}

var defaultBoundaries = {
  maxBoundary: 100.00,
  aplusBoundary: 95.00,
  aBoundary: 90.00,
  aminusBoundary: 85.00,
  bplusBoundary: 80.00,
  bBoundary: 75.00,
  bminusBoundary: 70.00,
  cplusBoundary: 65.00,
  cBoundary: 60.00,
  cminusBoundary: 55.00,
  dBoundary: 50.00,
  fBoundary: 0.00
};

var boundaries = Object.assign({}, defaultBoundaries);

function resetBoundaries() {
  Object.assign(boundaries, defaultBoundaries);

  // Update the input fields with the default values
  document.getElementById("maxBoundary").value = boundaries.maxBoundary;
  document.getElementById("aplusBoundary").value = boundaries.aplusBoundary;
  document.getElementById("aBoundary").value = boundaries.aBoundary;
  document.getElementById("aminusBoundary").value = boundaries.aminusBoundary;
  document.getElementById("bplusBoundary").value = boundaries.bplusBoundary;
  document.getElementById("bBoundary").value = boundaries.bBoundary;
  document.getElementById("bminusBoundary").value = boundaries.bminusBoundary;
  document.getElementById("cplusBoundary").value = boundaries.cplusBoundary;
  document.getElementById("cBoundary").value = boundaries.cBoundary;
  document.getElementById("cminusBoundary").value = boundaries.cminusBoundary;
  document.getElementById("dBoundary").value = boundaries.dBoundary;
  document.getElementById("fBoundary").value = boundaries.fBoundary;

  updateBoundaries();
  generateHistogram();
}