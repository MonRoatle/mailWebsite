document.getElementById("sendEmail").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const messageDiv = document.getElementById("message");

  if (!email) {
    messageDiv.innerHTML = "メールアドレスを入力してください。";
    return;
  }

  try {
    const response = await fetch(
      "https://acsfunction00.azurewebsites.net/api/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );

    if (response.ok) {
      messageDiv.innerHTML = "メールが送信されました。";
    } else {
      messageDiv.innerHTML = "メール送信に失敗しました。";
    }
  } catch (error) {
    messageDiv.innerHTML = "エラーが発生しました。";
    console.error("Error:", error);
  }
});
