// notice.js

// 从Firebase Firestore的DailyBonus表获取最新红利信息
db.collection("DailyBonus")
  .orderBy("date", "desc")  // 按日期降序
  .limit(1)                 // 只拿最新一笔
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      document.getElementById('dailyBonus').innerText = doc.data().bonusPercentage + '%';
    });
  })
  .catch(error => {
    console.error("Failed to load today's bonus:", error);
    document.getElementById('dailyBonus').innerText = "No bonus information available.";
  });