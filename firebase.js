// firebase.js

// 配置你的Firebase连接资料
const firebaseConfig = {
  apiKey: "你的apiKey",
  authDomain: "你的authDomain",
  projectId: "你的projectId",
  storageBucket: "你的storageBucket",
  messagingSenderId: "你的messagingSenderId",
  appId: "你的appId"
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);

// 初始化Firestore数据库
const db = firebase.firestore();