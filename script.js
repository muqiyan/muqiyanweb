document.addEventListener('DOMContentLoaded', function() {
    // 获取所有简历页面
    const resumeSections = document.querySelectorAll('.resume-section');
    // 获取翻页按钮
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    // 获取页码指示器
    const currentPageElement = document.getElementById('current-page');
    const totalPagesElement = document.getElementById('total-pages');
    
    // 设置总页数
    totalPagesElement.textContent = resumeSections.length;
    
    // 当前页码
    let currentPage = 0;
    
    // 初始化第一页为激活状态
    resumeSections[currentPage].classList.add('active');
    currentPageElement.textContent = currentPage + 1;
    
    // 翻页函数
    function turnPage(direction) {
        // 移除当前页的激活状态
        resumeSections[currentPage].classList.remove('active');
        
        // 更新当前页码
        currentPage += direction;
        
        // 确保页码在有效范围内
        if (currentPage < 0) {
            currentPage = resumeSections.length - 1;
        } else if (currentPage >= resumeSections.length) {
            currentPage = 0;
        }
        
        // 添加新当前页的激活状态
        resumeSections[currentPage].classList.add('active');
        
        // 更新页码指示器
        currentPageElement.textContent = currentPage + 1;
    }
    
    // 添加按钮点击事件监听器
    prevBtn.addEventListener('click', function() {
        turnPage(-1);
    });
    
    nextBtn.addEventListener('click', function() {
        turnPage(1);
    });
    
    // 添加键盘翻页功能
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            turnPage(-1);
        } else if (event.key === 'ArrowRight') {
            turnPage(1);
        }
    });
    
    // 添加触摸滑动功能（移动端支持）
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // 向左滑动，下一页
            turnPage(1);
        } else if (touchEndX > touchStartX + 50) {
            // 向右滑动，上一页
            turnPage(-1);
        }
    }
});