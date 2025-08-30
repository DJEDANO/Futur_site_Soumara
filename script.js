// Menu data
const menuItems = [
    {
        id: 1,
        name: "Houmous",
        description: "Purée de pois chiches, tahini, citron et huile d'olive",
        price: "2.500 FCFA",
        category: "entrees"
    },
    {
        id: 2,
        name: "Taboulé",
        description: "Salade de persil, menthe, tomates et boulghour",
        price: "3.000 FCFA",
        category: "entrees"
    },
    {
        id: 3,
        name: "Baba Ganoush",
        description: "Purée d'aubergines grillées, tahini et épices",
        price: "3.000 FCFA",
        category: "entrees"
    },
    {
        id: 4,
        name: "Fattouch",
        description: "Salade libanaise avec légumes croquants et pain toasté",
        price: "3.500 FCFA",
        category: "entrees"
    },
    {
        id: 5,
        name: "Plateau de Mezzés",
        description: "Assortiment de 8 entrées libanaises",
        price: "12.000 FCFA",
        category: "entrees"
    },
    {
        id: 6,
        name: "Chawarma Poulet",
        description: "Brochettes de poulet mariné, servi avec riz et salade",
        price: "5.500 FCFA",
        category: "plats"
    },
    {
        id: 7,
        name: "Chawarma Boeuf",
        description: "Brochettes de bœuf mariné, servi avec riz et salade",
        price: "6.500 FCFA",
        category: "plats"
    },
    {
        id: 8,
        name: "Kéfta",
        description: "Boulettes de viande hachée épicées, grillées au charbon",
        price: "7.000 FCFA",
        category: "plats"
    },
    {
        id: 9,
        name: "Méchoui",
        description: "Agneau cuit lentement, tendre et parfumé",
        price: "9.000 FCFA",
        category: "plats"
    },
    {
        id: 10,
        name: "Plateau Mixte",
        description: "Assortiment de grillades pour 2 personnes",
        price: "18.000 FCFA",
        category: "plats"
    },
    {
        id: 11,
        name: "Baklava",
        description: "Pâtisserie feuilletée aux noix et sirop de miel",
        price: "2.500 FCFA",
        category: "desserts"
    },
    {
        id: 12,
        name: "Knafeh",
        description: "Gâteau au fromage et semoule, parfumé à l'eau de rose",
        price: "3.500 FCFA",
        category: "desserts"
    },
    {
        id: 13,
        name: "Maamoul",
        description: "Biscuits fourrés aux dattes ou aux noix",
        price: "2.000 FCFA",
        category: "desserts"
    },
    {
        id: 14,
        name: "Oum Ali",
        description: "Dessert égyptien au lait, noix et raisins",
        price: "3.000 FCFA",
        category: "desserts"
    },
    {
        id: 15,
        name: "Eau Minérale",
        description: "Bouteille 50cl",
        price: "500 FCFA",
        category: "boissons"
    },
    {
        id: 16,
        name: "Jus Frais",
        description: "Mango, orange ou citron",
        price: "1.500 FCFA",
        category: "boissons"
    },
    {
        id: 17,
        name: "Thé à la Menthe",
        description: "Thé vert traditionnel à la menthe fraîche",
        price: "1.000 FCFA",
        category: "boissons"
    },
    {
        id: 18,
        name: "Café Turc",
        description: "Café traditionnel libanais",
        price: "1.500 FCFA",
        category: "boissons"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu
    displayMenuItems('all');
    
    // Setup form submissions
    setupForms();
    
    // Setup menu filtering
    setupMenuFiltering();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
});

// Display menu items based on category
function displayMenuItems(category) {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = '<div class="col-12 text-center"><p class="fs-5">Aucun élément dans cette catégorie.</p></div>';
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('col-md-6', 'menu-item');
        menuItemElement.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div class="me-3">
                    <h5 class="mb-1 text-primary">${item.name}</h5>
                    <p class="mb-1 text-muted small">${item.description}</p>
                </div>
                <span class="text-primary fw-bold">${item.price}</span>
            </div>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

// Setup form submissions
function setupForms() {
    // Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const date = formData.get('date');
            const time = formData.get('time');
            const guests = formData.get('guests');
            const message = formData.get('message');
            
            // Form validation
            if (!name || !email || !phone || !date || !time || !guests) {
                showAlert('Veuillez remplir tous les champs obligatoires.', 'danger');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            showAlert(`Merci ${name} pour votre réservation! Nous vous attendons le ${date} à ${time} pour ${guests} personne(s). Nous vous contacterons bientôt au ${phone} pour confirmation.`, 'success');
            
            // Reset form
            this.reset();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Form validation
            if (!name || !email || !subject || !message) {
                showAlert('Veuillez remplir tous les champs obligatoires.', 'danger');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            showAlert(`Merci ${name} pour votre message! Nous vous répondrons bientôt à l'adresse ${email}.`, 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Show alert message
function showAlert(message, type) {
    // Create alert element
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
    alertElement.setAttribute('role', 'alert');
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add alert to the top of the body
    document.body.insertBefore(alertElement, document.body.firstChild);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        if (alertElement) {
            const bsAlert = new bootstrap.Alert(alertElement);
            bsAlert.close();
        }
    }, 5000);
}

// Setup menu filtering
function setupMenuFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            button.classList.remove('btn-outline-primary');
            button.classList.add('btn-primary');
            
            // Filter menu items
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
                    navbarToggler.click();
                }
                
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.remove('shadow');
        }
    });
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});