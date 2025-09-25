// ✅ كود الفاليديشن + الرسالة بتاعت الفورم
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const phoneInput = this.querySelector('input[type="number"]');
  const msg = document.getElementById("formMsg");

  // تحقق من رقم الموبايل
  if (phoneInput.value.length < 11) {
    msg.textContent = "❌ رقم التليفون لازم يكون 11 رقم";
    msg.classList.remove("text-success", "d-none");
    msg.classList.add("text-danger");
    return;
  }

  // لو كل حاجة تمام
  msg.textContent = "✅ !Message sent";
    msg.classList.remove("text-danger", "d-none");
    msg.classList.add("text-success");

  // رجّع الفورم فاضي
  this.reset();
});


// ✅ هنا تقدر تضيف أي كود خاص بـ Firebase (أو أي خدمة تانية)
// مجرد مثال، سيبته فاضي لحد ما نعمل إعداد Firebase مع بعض
/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Config بتاع مشروعك (هتحصل عليه من Firebase)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
