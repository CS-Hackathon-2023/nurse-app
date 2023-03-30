// Import the Firebase Admin SDK
import admin from 'firebase-admin';

// Initialize the app with a service account key
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore reference
const db = admin.firestore();

// Define some mock data
const requests = [
  {
    requestId: '1',
    userId: 'user1',
    ward: 'A',
    requestType: 'room service',
    requestDetail: 'I need some extra towels',
    status: 'pending',
    room: '101',
  },
  {
    requestId: '2',
    userId: 'user2',
    ward: 'B',
    requestType: 'maintenance',
    requestDetail: 'The sink is clogged',
    status: 'pending',
    room: '202',
  },
  {
    requestId: '3',
    userId: 'user3',
    ward: 'C',
    requestType: 'concierge',
    requestDetail: 'I need recommendations for local restaurants',
    status: 'pending',
    room: '305',
  },
];

// Add the mock data to the Firestore collection
requests.forEach((request) => {
  db.collection('Requests').doc(request.requestId).set(request);
});

console.log('Mock data has been loaded to the "Requests" collection!');
