// cdn/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');

    // 检查视频元素是否存在
    if (video) {
        video.play().catch(error => {
            console.error('视频自动播放被阻止:', error);
            // 在自动播放失败时提供一个替代方案，例如显示一个播放按钮
            const videoBackground = document.querySelector('.video-background');
            if (videoBackground) {
                const playButton = document.createElement('button');
                playButton.textContent = '播放视频';
                playButton.classList.add('play-button'); // 添加样式类
                playButton.addEventListener('click', () => {
                    video.play();
                    playButton.style.display = 'none'; // 播放后隐藏按钮
                });
                videoBackground.appendChild(playButton);

            }
        });
    }
});
