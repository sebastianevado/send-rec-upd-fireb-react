import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc, Timestamp, updateDoc, getDoc, onSnapshot, docSnap } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUeIe9R_mASDAQ831I",
  authDomain: "AUTH-DOMAIN",
  databaseURL: "YESYESYESYES",
  projectId: "YOUR-APP-ID",
  storageBucket: "IN YOUR APP",
  messagingSenderId: "81939120312",
  appId: "YOUR APP ID"
};
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const sendTry = doc(firestore, 'sendFirst/example')

function writeExample (){
  const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
  };
  setDoc(sendTry, docData);
  console.log('Data was sended, GO!')
  setTimeout(function() {
    updateDoc(sendTry, {
      booleanExample: false,
    });
    console.log('Updating...')
  }, 10000)
}

function listenExample () {
  onSnapshot(sendTry, docSnapshot => {
    const docData = docSnapshot.data();
    console.log(`Current data is ${JSON.stringify(docData)}`);
  })
}


// async function readExample () {
//   const docSnap = await getDoc(sendTry);
//   if(docSnap.exists()){
//     const docData = docSnap.data();
//     console.log(`Document data: ${JSON.stringify(docData)}`);
//   } else {
//     console.log(`Error document can't be found`)
//   }
// }

writeExample();
listenExample();

// readExample();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firestore</h1>
      </header>
    </div>
  );
}

export default App;
