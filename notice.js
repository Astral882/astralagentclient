// notice.js

// 从Firebase Firestore读取今日公告
db.collection("DailyNotice")
  .orderBy("NoticeDate", "desc")
  .limit(1)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      document.getElementById("notice").innerHTML = doc.data().NoticeContent;
    });
  })
  .catch((error) => {
    console.error("读取公告出错: ", error);
  });