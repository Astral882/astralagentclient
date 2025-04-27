<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>发布公司公告 - Astral Time</title>
    <link href="/assets/css/style.css" rel="stylesheet">
</head>
<body>

<div class="form-container">
    <h1>发布公司公告</h1>

    <form id="announcementForm" method="POST" action="YOUR_ANNOUNCEMENT_WEBHOOK_URL">
        <textarea name="noticeContent" placeholder="输入公告内容..." required></textarea>
        <button type="submit">发布公告</button>
    </form>
</div>

<footer>
    Copyright ©️ 2025 Astral Time Limited. All rights reserved
</footer>

<script src="/firebase.js"></script>

</body>
</html>