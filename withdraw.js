<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Astral Time Limited - Withdrawal Request</title>
  <link href="./assets/css/style.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    body {
      background: black;
      color: #FFD700;
      font-family: Poppins, sans-serif;
      min-height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .form-card {
      background-color: #111;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.5);
      width: 90%;
      max-width: 450px;
      text-align: center;
    }
    input, select {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      background: #222;
      border: 1px solid #FFD700;
      border-radius: 8px;
      color: #FFD700;
    }
    .submit-btn {
      background: linear-gradient(to right, #FFD700, #FFC107);
      color: black;
      font-weight: bold;
      border: none;
      padding: 12px;
      width: 100%;
      border-radius: 8px;
      margin-top: 15px;
      cursor: pointer;
    }
    footer {
      text-align: center;
      font-size: 12px;
      color: #FFD700;
      margin-top: 30px;
      padding: 15px 0;
    }
  </style>
</head>
<body>

<div class="main-content">
  <h1 style="font-size: 28px;">Astral Time Limited</h1>
  <h2 style="font-size: 20px;">Withdrawal Request</h2>

  <div class="form-card">
    <form id="withdrawForm" method="POST" action="YOUR_WITHDRAW_WEBHOOK_URL" enctype="multipart/form-data">

      <input type="number" name="withdrawAmount" placeholder="Withdrawal Amount (MYR)" required>

      <label>Select Withdrawal Method</label>
      <select name="withdrawalMethod" id="withdrawalMethod" required>
        <option value="">-- Select --</option>
        <option value="usdt">USDT Wallet</option>
        <option value="bank">Bank Account</option>
      </select>

      <label style="margin-top: 15px;">Upload Live Selfie for Verification</label>
      <input type="file" name="selfie" accept="image/*" capture="user" required>

      <div id="arrivalNotice" style="margin-top:15px; font-weight:bold;"></div>

      <button type="submit" class="submit-btn">Submit Withdrawal Request</button>
    </form>
  </div>
</div>

<footer>
  Copyright ©️ 2025 Astral Time Limited. All rights reserved
</footer>

<script src="./firebase.js"></script>

<script>
// 到账天数提示
document.getElementById('withdrawalMethod').addEventListener('change', function() {
    const method = this.value;
    const notice = document.getElementById('arrivalNotice');
    if (method === 'usdt') {
        notice.innerText = "Notice: USDT withdrawals will be credited within 7 business days.";
    } else if (method === 'bank') {
        notice.innerText = "Notice: Bank withdrawals will be credited within 12 business days.";
    } else {
        notice.innerText = "";
    }
});
</script>

</body>
</html>