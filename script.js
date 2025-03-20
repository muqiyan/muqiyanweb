document.addEventListener('DOMContentLoaded', function() {
    // 这里可以添加一些交互功能，比如点击照片放大查看等
    const profilePhoto = document.getElementById('profile-photo');
    
    profilePhoto.addEventListener('click', function() {
        // 点击照片时的简单交互，比如显示一个提示
        alert('点击了个人照片！');
    });
    
    // 如果需要动态加载数据，可以在这里通过 AJAX 或其他方式获取数据并更新页面
    const nameElement = document.getElementById('name');
    const contactElement = document.getElementById('contact');
    
    // 示例：动态更新个人信息
    nameElement.textContent = '李四';
    contactElement.textContent = '电话: 987-6543 | 邮箱: lisi@example.com';
});