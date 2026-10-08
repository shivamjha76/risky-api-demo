// Configuration file with hardcoded sensitive provider credentials
// (Common student anti-pattern: committing credentials directly to git)

module.exports = {
  aws: {
    accessKeyId: "AKIA3FODNN7B2K9X1Z4Q",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYz894L09871",
    region: "ap-south-1"
  },
  google: {
    mapsApiKey: "AIzaSyD9f8G7h6J5k4L3m2N1b0v9C8x7Z6y5X4W",
    serviceAccountId: "firebase-adminsdk-88912@demo-cloud-project.iam.gserviceaccount.com"
  },
  jwtSecret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
};
