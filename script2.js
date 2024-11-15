document.getElementById('sendEmail').addEventListener('click', async () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const messageDiv = document.getElementById('message');

    // 入力チェック
    if (!email) {
        messageDiv.textContent = "メールアドレスを入力してください。";
        messageDiv.style.color = "red";
        return;
    }

    try {
        // Logic AppsのエンドポイントURL
        const logicAppUrl = "https://prod-29.japaneast.logic.azure.com:443/workflows/f3e3249e034b42b7853d540ae9f87652/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=hbhEz7g4uXDVyjroFstX02tgbmGRYdYnm1x8YIpRnBU"; // ここにLogic AppsのURLを記入

        // リクエスト送信
        const response = await fetch(logicAppUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            messageDiv.textContent = "メールが正常に送信されました。";
            messageDiv.style.color = "green";
        } else {
            messageDiv.textContent = "メールの送信中にエラーが発生しました。";
            messageDiv.style.color = "red";
        }
    } catch (error) {
        console.error("送信エラー:", error);
        messageDiv.textContent = "サーバーに接続できませんでした。";
        messageDiv.style.color = "red";
    }
});
