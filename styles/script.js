// 切換深淺模式
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // 檢查用戶的深淺模式首選項
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // 根據用戶的首選項設定深淺模式
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    // 點擊按鈕時切換深淺模式
    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('darkMode', 'disabled');
        } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        }
    });
});
