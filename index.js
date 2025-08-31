
        document.addEventListener('DOMContentLoaded', () => {
            const pages = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');

            function showPage(pageId) {
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                const activePage = document.getElementById(pageId);
                if (activePage) {
                    activePage.classList.add('active');
                }
            }

            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    // Prevent default anchor link behavior
                    event.preventDefault();
                    // Get the page ID from the data attribute
                    const pageId = event.target.dataset.page;
                    // Show the selected page
                    showPage(pageId);
                    // Update the URL hash to maintain state
                    window.location.hash = pageId;
                });
            });

            // Handle back/forward button navigation based on URL hash
            window.addEventListener('hashchange', () => {
                const pageId = window.location.hash.substring(1) || 'home';
                showPage(pageId);
            });

            // Initially show the correct page based on the URL hash or default to home
            const initialPageId = window.location.hash.substring(1) || 'home';
            showPage(initialPageId);


            // Function to set up a carousel
            function setupCarousel(carouselId, prevBtnId, nextBtnId) {
                const carousel = document.getElementById(carouselId);
                const prevBtn = document.getElementById(prevBtnId);
                const nextBtn = document.getElementById(nextBtnId);

                // Ensure all elements exist before adding listeners
                if (!carousel || !prevBtn || !nextBtn) return;

                // Scroll the carousel to the next image
                nextBtn.addEventListener('click', () => {
                    // Calculate the scroll position based on the carousel width
                    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
                });

                // Scroll the carousel to the previous image
                prevBtn.addEventListener('click', () => {
                    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
                });
            }

            // Setup carousels for Art and Design sections
            setupCarousel('art-carousel', 'prev-art', 'next-art');
            setupCarousel('design-carousel', 'prev-design', 'next-design');
        });
    