document.addEventListener('DOMContentLoaded', function() {
    // 메뉴
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        const isActive = nav.classList.toggle('active');
        menuToggle.classList.toggle('active');

        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // md's pick
    const btn = document.querySelector('.md_btn a'); 
    const popup = document.querySelector('.popup'); 
    const closeBtn = document.querySelector('.popup .close-btn');

    // 팝업 열기
    btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        popup.classList.add('active'); 
    });

    // 팝업 닫기
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('active'); 
    });

    // AOS 초기화
    AOS.init({
        duration: 1000, 
        once: false,     
    });
});