/* ===================================================================
   ROYALVISTAS INDIA TOURS & CAR RENTALS - MASTER JAVASCRIPT
   Interactive Behaviors, WhatsApp Enquiry Generator & Fleet Selectors
   =================================================================== */

// Configurable Business Contact (Easily change to client's WhatsApp number)
const WHATSAPP_PHONE = '919024288xxxx'; 

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS if present
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40
    });
  }

  // 2. Sticky Navbar scroll effect & Back to Top
  const navbar = document.querySelector('.main-navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Highlight active page in navbar
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom, .offcanvas .nav-link');
  if (currentPath && currentPath !== '') {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkFile = href.split('#')[0];
        if (linkFile === currentPath || (currentPath === 'index.html' && (linkFile === '' || linkFile === 'index.html'))) {
          link.classList.add('active');
        } else if (linkFile && linkFile !== '') {
          link.classList.remove('active');
        }
      }
    });
  }

  // 4. Car Fleet Filter Tabs
  const fleetFilterBtns = document.querySelectorAll('.fleet-filter-btn');
  const carCards = document.querySelectorAll('.car-fleet-col');

  if (fleetFilterBtns.length > 0 && carCards.length > 0) {
    fleetFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fleetFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterCategory = btn.getAttribute('data-filter');

        carCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; }, 20);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Tour Packages Filter Tabs
  const tourFilterBtns = document.querySelectorAll('.tour-filter-btn');
  const tourCards = document.querySelectorAll('.tour-package-col');

  if (tourFilterBtns.length > 0 && tourCards.length > 0) {
    tourFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tourFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterRegion = btn.getAttribute('data-filter');

        tourCards.forEach(card => {
          const cardRegion = card.getAttribute('data-region');
          if (filterRegion === 'all' || cardRegion === filterRegion) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5b. Gallery Category Filter Tabs
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item-col');

  if (galleryFilterBtns.length > 0 && galleryItems.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => {
          b.classList.remove('active');
          b.classList.remove('btn-warning');
          b.classList.add('btn-outline-warning');
        });
        btn.classList.add('active');
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('btn-warning');
        const filterCat = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (filterCat === 'all' || itemCat === filterCat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Direct "Select Car in Form" Buttons
  const selectCarBtns = document.querySelectorAll('.btn-car-select');
  const masterCarSelect = document.getElementById('enquiryCarType');

  selectCarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const carValue = btn.getAttribute('data-car-value');
      if (masterCarSelect && carValue) {
        masterCarSelect.value = carValue;
        updateWhatsAppLivePreview();
        
        // Scroll smoothly to the enquiry form
        const formSection = document.getElementById('enquirySection');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
          masterCarSelect.classList.add('border-warning');
          setTimeout(() => {
            masterCarSelect.classList.remove('border-warning');
          }, 2000);
        }
      }
    });
  });

  // 7. Direct "Enquire Tour in Form" Buttons
  const selectTourBtns = document.querySelectorAll('.btn-tour-select');
  const masterTourSelect = document.getElementById('enquiryTourOption');

  selectTourBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourValue = btn.getAttribute('data-tour-value');
      if (masterTourSelect && tourValue) {
        masterTourSelect.value = tourValue;
        updateWhatsAppLivePreview();

        const formSection = document.getElementById('enquirySection');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
          masterTourSelect.classList.add('border-warning');
          setTimeout(() => {
            masterTourSelect.classList.remove('border-warning');
          }, 2000);
        }
      }
    });
  });

  // 8. Direct Single Car WhatsApp Buttons
  const carWhatsAppBtns = document.querySelectorAll('.btn-car-whatsapp');
  carWhatsAppBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const carName = btn.getAttribute('data-car-name') || 'Tourist Cab';
      const rate = btn.getAttribute('data-rate') || 'Standard Tariff';
      
      const text = `Namaste RoyalVistas Tours! 🇮🇳%0A%0AI would like to check availability and book the following vehicle:%0A%0A🚗 *Vehicle:* ${encodeURIComponent(carName)}%0A💰 *Estimated Rate:* ${encodeURIComponent(rate)}%0A%0APlease share the full per-km / per-day terms, driver details, and booking confirmation.`;
      
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
      window.open(waUrl, '_blank');
    });
  });

  // 9. Direct Single Tour WhatsApp Buttons
  const tourWhatsAppBtns = document.querySelectorAll('.btn-tour-whatsapp');
  tourWhatsAppBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourName = btn.getAttribute('data-tour-name') || 'Indian Tour Package';
      const days = btn.getAttribute('data-days') || 'Standard Duration';
      const price = btn.getAttribute('data-price') || 'On Request';

      const text = `Namaste RoyalVistas Tours! 🇮🇳%0A%0AI am interested in booking this Indian Tour Package:%0A%0A🗺️ *Tour:* ${encodeURIComponent(tourName)}%0A⏳ *Duration:* ${encodeURIComponent(days)}%0A💰 *Price Guidance:* ${encodeURIComponent(price)}%0A%0APlease share the day-wise itinerary, cab options, and final quotation. Thank you!`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
      window.open(waUrl, '_blank');
    });
  });

  // 10. Master Enquiry Form & Live WhatsApp Preview Logic
  const enquiryForm = document.getElementById('masterEnquiryForm');
  const previewTextEl = document.getElementById('whatsappLivePreviewText');
  const previewTimeEl = document.getElementById('whatsappPreviewTime');

  function updateWhatsAppLivePreview() {
    if (!previewTextEl) return;

    const name = document.getElementById('enquiryName')?.value.trim() || 'Guest';
    const phone = document.getElementById('enquiryPhone')?.value.trim() || '+91 98XXX XXXXX';
    const pickup = document.getElementById('enquiryPickup')?.value.trim() || 'New Delhi / Jaipur';
    const tour = document.getElementById('enquiryTourOption')?.value || 'Golden Triangle Classic Tour (5N/6D)';
    const car = document.getElementById('enquiryCarType')?.value || 'Toyota Innova Crysta (6/7 Seater)';
    const date = document.getElementById('enquiryDate')?.value || 'Flexible / Upcoming';
    const duration = document.getElementById('enquiryDuration')?.value || '5 Days';
    const adults = document.getElementById('enquiryAdults')?.value || '2';
    const kids = document.getElementById('enquiryKids')?.value || '0';
    const serviceType = document.getElementById('enquiryServiceType')?.value || 'Complete Tour (Cab + Hotel + Sightseeing)';
    const notes = document.getElementById('enquiryNotes')?.value.trim() || 'None';

    const formattedPreview = `*Namaste RoyalVistas Tours!* 🇮🇳
I want to enquire about an Indian Tour & Cab booking:

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📍 *Pickup:* ${pickup}
🗺️ *Selected Tour:* ${tour}
🚗 *Preferred Vehicle:* ${car}
📅 *Start Date:* ${date}
⏳ *Duration:* ${duration}
👥 *Travellers:* ${adults} Adults, ${kids} Children
💼 *Service Required:* ${serviceType}
📝 *Special Notes:* ${notes}

_Please share the best itinerary, car availability, and custom quote._`;

    previewTextEl.textContent = formattedPreview;

    if (previewTimeEl) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      previewTimeEl.innerHTML = `${hours}:${mins} <i class="bi bi-check2-all text-primary"></i>`;
    }
  }

  // Bind input listeners for live preview
  const liveInputIds = [
    'enquiryName', 'enquiryPhone', 'enquiryPickup', 'enquiryTourOption',
    'enquiryCarType', 'enquiryDate', 'enquiryDuration', 'enquiryAdults',
    'enquiryKids', 'enquiryServiceType', 'enquiryNotes'
  ];

  liveInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateWhatsAppLivePreview);
      el.addEventListener('change', updateWhatsAppLivePreview);
    }
  });

  // Initial preview render
  updateWhatsAppLivePreview();

  // Handle Master Enquiry Form Submission -> Launch WhatsApp
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('enquiryName')?.value.trim();
      const phone = document.getElementById('enquiryPhone')?.value.trim();
      const pickup = document.getElementById('enquiryPickup')?.value.trim();
      const tour = document.getElementById('enquiryTourOption')?.value;
      const car = document.getElementById('enquiryCarType')?.value;
      const date = document.getElementById('enquiryDate')?.value;
      const duration = document.getElementById('enquiryDuration')?.value;
      const adults = document.getElementById('enquiryAdults')?.value || '2';
      const kids = document.getElementById('enquiryKids')?.value || '0';
      const serviceType = document.getElementById('enquiryServiceType')?.value;
      const notes = document.getElementById('enquiryNotes')?.value.trim() || 'None';

      if (!name || !phone) {
        showToast('⚠️ Missing Information', 'Please provide your Name and WhatsApp phone number.');
        return;
      }

      // Build WhatsApp Encoded URL
      const message = `Namaste RoyalVistas Tours! 🇮🇳%0A%0AI would like to enquire about an Indian Tour & Cab booking:%0A%0A👤 *Name:* ${encodeURIComponent(name)}%0A📱 *Phone:* ${encodeURIComponent(phone)}%0A📍 *Pickup Location:* ${encodeURIComponent(pickup)}%0A🗺️ *Selected Tour:* ${encodeURIComponent(tour)}%0A🚗 *Preferred Vehicle:* ${encodeURIComponent(car)}%0A📅 *Start Date:* ${encodeURIComponent(date)}%0A⏳ *Duration:* ${encodeURIComponent(duration)}%0A👥 *Travellers:* ${encodeURIComponent(adults)} Adults, ${encodeURIComponent(kids)} Children%0A💼 *Service Required:* ${encodeURIComponent(serviceType)}%0A📝 *Special Requests:* ${encodeURIComponent(notes)}%0A%0APlease share the best customized itinerary, car availability, and transparent quote. Thank you!`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');

      showToast('✅ WhatsApp Connected!', 'Your inquiry has been generated and opened in WhatsApp. Our travel expert will respond shortly.');
    });
  }

  // 11. Hero Quick Booking Widget Submission -> Launch WhatsApp
  const heroForm = document.getElementById('heroBookingForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const tour = document.getElementById('heroTourSelect')?.value;
      const car = document.getElementById('heroCarSelect')?.value;
      const pickup = document.getElementById('heroPickupInput')?.value.trim() || 'Delhi / Rajasthan';
      const date = document.getElementById('heroDateInput')?.value || 'Upcoming';
      const name = document.getElementById('heroNameInput')?.value.trim() || 'Traveler';
      const phone = document.getElementById('heroPhoneInput')?.value.trim() || '';

      const message = `Namaste RoyalVistas Tours! 🇮🇳%0A%0A*Quick Booking / Enquiry Request:*%0A👤 *Name:* ${encodeURIComponent(name)}%0A📱 *WhatsApp:* ${encodeURIComponent(phone)}%0A📍 *Pickup:* ${encodeURIComponent(pickup)}%0A🗺️ *Tour:* ${encodeURIComponent(tour)}%0A🚗 *Vehicle:* ${encodeURIComponent(car)}%0A📅 *Travel Date:* ${encodeURIComponent(date)}%0A%0APlease share the rates, car details, and availability on WhatsApp.`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
      window.open(waUrl, '_blank');

      showToast('🚀 Inquiry Sent to WhatsApp!', 'Opening WhatsApp with your tour and car preference.');
    });
  }

  // 12. Tour Details Modal Wireup
  const tourDetailBtns = document.querySelectorAll('.btn-tour-details');
  const itineraryModalEl = document.getElementById('itineraryModal');
  let itineraryModal = null;
  if (typeof bootstrap !== 'undefined' && itineraryModalEl) {
    itineraryModal = new bootstrap.Modal(itineraryModalEl);
  }

  tourDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-tour-title') || 'Indian Tour Package';
      const duration = btn.getAttribute('data-tour-duration') || '5 Nights / 6 Days';
      const cities = btn.getAttribute('data-tour-cities') || 'Key Indian Cities';
      const itinerary = btn.getAttribute('data-tour-itinerary') || 'Full day-wise sightseeing with AC chauffeur car, heritage monuments, and leisure.';
      const car = btn.getAttribute('data-tour-car') || 'AC Sedan / Innova Crysta';
      const price = btn.getAttribute('data-tour-price') || 'Contact on WhatsApp';

      const modalTitleEl = document.getElementById('itineraryModalTitle');
      const modalMetaEl = document.getElementById('itineraryModalMeta');
      const modalContentEl = document.getElementById('itineraryModalContent');
      const modalBookWaBtn = document.getElementById('itineraryModalWaBtn');

      if (modalTitleEl) modalTitleEl.textContent = title;
      if (modalMetaEl) modalMetaEl.textContent = `${duration} • Cities: ${cities} • Cab: ${car}`;
      if (modalContentEl) modalContentEl.innerHTML = itinerary;

      if (modalBookWaBtn) {
        modalBookWaBtn.onclick = () => {
          const text = `Namaste! I want to book the *${encodeURIComponent(title)}* (${encodeURIComponent(duration)}). Price guidance: ${encodeURIComponent(price)}. Please share full day-wise PDF itinerary and cab quote.`;
          window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
        };
      }

      if (itineraryModal) {
        itineraryModal.show();
      }
    });
  });

  // 13. Toast Notification Helper
  function showToast(title, message) {
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '3000';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-white bg-dark border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body p-3">
            <h6 class="mb-1 text-warning fw-bold">${title}</h6>
            <p class="mb-0 small text-light">${message}</p>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    if (typeof bootstrap !== 'undefined' && toastEl) {
      const bsToast = new bootstrap.Toast(toastEl, { delay: 5000 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    }
  }
});
