document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  overlay.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Marcar link ativo
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Animação de scroll
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  // Verificar na carga inicial
  animateOnScroll();
  
  // Verificar durante o scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Carregar imagens dinamicamente (exemplo para chalés)
  if (document.querySelector('.chales-gallery')) {
    const galleryImages = [
      { src: 'https://source.unsplash.com/random/600x400/?cabin,house', alt: 'Chalé Moderno' },
      { src: 'https://source.unsplash.com/random/600x400/?wooden,house', alt: 'Chalé de Madeira' },
      { src: 'https://source.unsplash.com/random/600x400/?mountain,house', alt: 'Chalé Montanhês' },
      { src: 'https://source.unsplash.com/random/600x400/?luxury,cabin', alt: 'Chalé Luxuoso' },
      { src: 'https://source.unsplash.com/random/600x400/?lake,house', alt: 'Chalé à Beira do Lago' },
      { src: 'https://source.unsplash.com/random/600x400/?forest,cabin', alt: 'Chalé na Floresta' }
    ];
    
    const galleryContainer = document.querySelector('.chales-gallery');
    galleryContainer.innerHTML = '';
    
    galleryImages.forEach(image => {
      const imageSlot = document.createElement('div');
      imageSlot.className = 'image-slot';
      
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      
      imageSlot.appendChild(img);
      galleryContainer.appendChild(imageSlot);
    });
  }
  
  // Carregar fotos da equipe
  if (document.querySelector('.team-member')) {
    const teamMembers = document.querySelectorAll('.team-member');
    const teamPhotos = [
      'https://source.unsplash.com/random/300x300/?portrait,man,engineer',
      'https://source.unsplash.com/random/300x300/?portrait,woman,architect',
      'https://source.unsplash.com/random/300x300/?portrait,man,construction'
    ];
    
    teamMembers.forEach((member, index) => {
      const photoDiv = member.querySelector('.member-photo');
      if (photoDiv && teamPhotos[index]) {
        photoDiv.style.backgroundImage = `url(${teamPhotos[index]})`;
      }
    });
  }
  
  // Formulário de contato
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio
      const submitBtn = this.querySelector('button');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Nao foi possivel enviar!';
        submitBtn.style.backgroundColor = '#ff0000';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          this.reset();
        }, 2000);
      }, 1500);
    });
  }
  
  // Efeito de hover nas imagens
  const imageSlots = document.querySelectorAll('.image-slot');
  imageSlots.forEach(slot => {
    slot.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    slot.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Efeito de digitação no banner (se existir)
  const bannerTitle = document.querySelector('.banner-content h2');
  if (bannerTitle) {
    const originalText = bannerTitle.textContent;
    bannerTitle.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < originalText.length) {
        bannerTitle.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
  }
});