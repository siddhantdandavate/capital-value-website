/**
 * CAPITAL VALUE MORTGAGE CONSULTING FZE LLC
 * Master Interactive Script (PRYPCO-Inspired Luxury Refinement)
 * Zero external dependencies. Fast, accessible, and lightweight.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. PRYPCO-Style Mega Menu Overlay & Modal
  const menuTrigger = document.getElementById('openPrypcoMenu');
  const menuClose = document.getElementById('closePrypcoMenu');
  const menuOverlay = document.getElementById('prypcoMenuOverlay');
  const menuModal = document.querySelector('.prypco-menu-modal');

  if (menuTrigger && menuOverlay) {
    const openMenu = () => {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (menuClose) menuClose.focus();
    };

    const closeMenu = () => {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
      menuTrigger.focus();
    };

    menuTrigger.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);

    // Close when clicking on backdrop outside modal
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // 3. Live UAE Clock (Gulf Standard Time, UTC+4)
  const uaeClockEl = document.getElementById('uaeClock');
  if (uaeClockEl) {
    const updateUAEClock = () => {
      try {
        const options = {
          timeZone: 'Asia/Dubai',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        const uaeTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
        uaeClockEl.textContent = `${uaeTime} GST`;
      } catch (err) {
        // Fallback calculation
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const dubaiTime = new Date(utc + (3600000 * 4));
        uaeClockEl.textContent = dubaiTime.toLocaleTimeString('en-US') + ' GST';
      }
    };
    updateUAEClock();
    setInterval(updateUAEClock, 1000);
  }

  // 4. Accessible FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close others for clean single-expand presentation
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 5. Smooth Anchor Scrolling with offset for sticky header
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        // Close menu if open
        if (menuOverlay && menuOverlay.classList.contains('active')) {
          menuOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }

        const headerOffset = 96;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 6. Consultation Enquiry Form Validation & Client-Facing States
  const enquiryForm = document.getElementById('consultationForm');
  const formStatus = document.getElementById('formStatus');

  if (enquiryForm && formStatus) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const category = document.getElementById('enquiryCategory').value;
      const privacyCheck = document.getElementById('privacyConsent').checked;

      formStatus.style.display = 'none';
      formStatus.className = 'form-status-alert';

      if (!fullName) {
        showStatus('Please enter your full name.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showStatus('Please provide a valid email address.', 'error');
        return;
      }

      if (!phone || phone.length < 6) {
        showStatus('Please enter a valid telephone number.', 'error');
        return;
      }

      if (!category) {
        showStatus('Please select a mortgage or property finance enquiry category.', 'error');
        return;
      }

      if (!privacyCheck) {
        showStatus('Please acknowledge the privacy notice to proceed.', 'error');
        return;
      }

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Recording Enquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        enquiryForm.reset();

        showStatus(
          `Thank you, ${fullName}. Your consultation enquiry for "${category}" has been captured for demonstration. <br><br><strong>Note for Client Review:</strong> To connect direct delivery to your verified corporate mailbox (e.g. info@capitalvalue.ae), production SMTP credentials or API webhook will be configured prior to live domain launch.`,
          'success'
        );
      }, 700);
    });

    function showStatus(message, type) {
      formStatus.innerHTML = message;
      formStatus.className = `form-status-alert ${type}`;
      formStatus.style.display = 'block';
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
});
