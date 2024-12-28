// Window when card is clicked
function openModal(title, price, image, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-description').textContent = description; // Set the description
    document.getElementById('modal').style.display = 'flex';
  }
  // Close the window
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  // Filter for category and price
  function filterProducts() {
    // Get values of product
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const products = document.querySelectorAll('.product-card');
  
    // Choose products that match filter
    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      const productPrice = parseFloat(product.getAttribute('data-price'));
      let isCategoryMatch = category === 'all' || productCategory === category;
      let isPriceMatch = false;
  
      if (price === 'all') {
        isPriceMatch = true;
      } else if (price === 'low' && productPrice < 50) {
        isPriceMatch = true;
      } else if (price === 'medium' && productPrice >= 50 && productPrice <= 100) {
        isPriceMatch = true;
      } else if (price === 'high' && productPrice > 100) {
        isPriceMatch = true;
      }
  
      if (isCategoryMatch && isPriceMatch) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }
  // Search 
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  
  searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
          console.log('Поиск:', searchTerm);
      }
  });
  
  
  
  // Set up observer
  const observerOptions = {
    threshold: 0.2 // Activate when element 10% in screen
  };
  
  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // If element in viewport
            entry.target.style.opacity = '1'; // Fully in screen
            entry.target.style.transform = 'translateY(0)'; // Reset position
        }
    });
  }, observerOptions);
  
  // Установка начальных стилей и добавление наблюдателя
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0'; // Изначально невидимо
    card.style.transform = 'translateY(20px)'; // Смещение вниз
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Плавный переход
    observer.observe(card); // Наблюдаем за элементом
  });