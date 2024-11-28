// Firebase configuration (gunakan kredensial Firebase Anda)
const firebaseConfig = {
  apiKey: "AIzaSyBOqDbLc-_EDNuGfvNk8KddgRT6q_mFyw8",
  authDomain: "monitoringkebakaran-6b635.firebaseapp.com",
  databaseURL: "https://monitoringkebakaran-6b635-default-rtdbmonitoringkebakaran-6b635.firebasestorage.app.asia-southeast1.firebasedatabase.app/",
  projectId: "monitoringkebakaran-6b635",
  storageBucket: "monitoringkebakaran-6b635.appspot.com",
  messagingSenderId: "441500718993",
  appId: "1:760640417029:1:441500718993:web:6cc141311357d051322c30:b083ff0c35c6edbdc8209b"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Mengambil elemen status dan message
const statusElement = document.getElementById('status');
const messageElement = document.getElementById('message');

// Mengambil data status kebakaran dari Firebase
firebase.database().ref('/smoke_status').on('value', (snapshot) => {
  const status = snapshot.val(); // Mendapatkan nilai status kebakaran dari Firebase

  // Mengubah tampilan berdasarkan status
  if (status === "ASAP BAHAYA") {
    statusElement.textContent = "ASAP BAHAYA";
    statusElement.style.color = "red"; // Warna merah untuk bahaya
    messageElement.textContent = "Tolong segera evakuasi!";
  } else if (status === "AMAN") {
    statusElement.textContent = "AMAN";
    statusElement.style.color = "green"; // Warna hijau untuk aman
    messageElement.textContent = "Tidak ada asap terdeteksi.";
  } else if (status === "WASPADA") {
    statusElement.textContent = "WASPADA";
    statusElement.style.color = "yellow"; // Warna kuning untuk waspada
    messageElement.textContent = "Tingkatkan kewaspadaan.";
  } else {
    statusElement.textContent = "Loading...";
    statusElement.style.color = "blue"; // Warna biru untuk loading
    messageElement.textContent = "Menunggu data dari sensor...";
  }
});
