// withdraw.js

document.getElementById("withdrawForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = this.withdrawAmount.value;
  const selfie = this.selfie.files[0];

  if (!selfie) {
    alert("必须上传自拍认证！");
    return;
  }

  if (amount <= 0) {
    alert("提款金额必须大于0！");
    return;
  }

  alert("提款申请提交成功，等待公司审核！");
  
  // 这里可以加上上传到Make.com Webhook的逻辑
  // 未来可以补接真实API处理提款
});