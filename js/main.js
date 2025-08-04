// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Testimonials Slider
    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
    
    // Scroll Reveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    // Apply animations to elements
    sr.reveal('.hero-content', {});
    sr.reveal('.hero-image', { delay: 400 });
    
    sr.reveal('.plan-card', { 
        interval: 200,
        distance: '40px'
    });
    
    sr.reveal('.benefit-card', { 
        interval: 200,
        distance: '40px'
    });
    
    sr.reveal('.testimonial-card', { 
        interval: 200,
        distance: '40px'
    });
    
    sr.reveal('.footer-column', { 
        interval: 200,
        distance: '20px'
    });
    
    // Animated Icons
    const animatedIcons = document.querySelectorAll('.animated-icon');
    
    animatedIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Sticky Header
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Neon button pulse effect
    const neonBtn = document.querySelector('.btn-neon');
    
    if (neonBtn) {
        setInterval(() => {
            neonBtn.classList.add('pulse');
            
            setTimeout(() => {
                neonBtn.classList.remove('pulse');
            }, 2000);
        }, 4000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});