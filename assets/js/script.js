
        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Toggle body scroll when menu is open
            if (mobileNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });

        // Header scroll effect
        window.addEventListener("scroll", function() {
            const header = document.getElementById("header");
            if (window.scrollY > 20) {
                header.style.padding = "1rem 5%";
                header.style.background = "rgba(255, 255, 255, 0.98)";
                header.style.boxShadow = "0 5px 30px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.padding = "1.5rem 5%";
                header.style.background = "rgba(255, 255, 255, 0.95)";
                header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.05)";
            }
        });

        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero animations
        gsap.from(".hero-content", {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.3
        });
        
        gsap.from(".hero-image", {
            duration: 1.5,
            x: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.6
        });
        
        // Feature cards animation
        gsap.utils.toArray(".feature-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out"
            });
        });
        
        // Product cards animation
        gsap.utils.toArray(".product-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out"
            });
            
            // Hover effect
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
        
        // Testimonial cards animation
        gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                x: i % 2 === 0 ? 50 : -50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out"
            });
        });
        
        // Background elements animation
        gsap.to(".bg-1", {
            rotation: 360,
            duration: 60,
            repeat: -1,
            ease: "none"
        });
        
        gsap.to(".bg-2", {
            rotation: -360,
            duration: 80,
            repeat: -1,
            ease: "none"
        });
        
        // Filter button interactions
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                document.querySelector(".filter-btn.active").classList.remove("active");
                this.classList.add("active");
            });
        });
    