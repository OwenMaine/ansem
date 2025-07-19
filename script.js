// Data and logic for the Metals page, managed by Alpine.js
function metalsPageData() {
  return {
    isModalOpen: false,
    activeFilter: 'all',
    selectedMetal: {},
    metals: [
      {
        id: 1,
        name: 'Copper',
        symbol: 'Cu',
        icon: 'ti ti-flame',
        category: 'base',
        image: 'images/11.jpg',
        description: 'A highly ductile metal with excellent thermal and electrical conductivity.',
        specs: [
          { label: 'Purity', value: '99.9% min' },
          { label: 'Common Forms', value: 'Wire, Tubing, Sheet, Ingots' },
          { label: 'ASTM Specs', value: 'B115, B224' }
        ]
      },
      {
        id: 2,
        name: 'Aluminum',
        symbol: 'Al',
        icon: 'ti ti-box',
        category: 'base',
        image: 'images/12.jpg',
        description: 'A lightweight, corrosion-resistant, and abundant metal.',
        specs: [
          { label: 'Purity', value: 'Up to 99.85%' },
          { label: 'Common Forms', value: 'Bales, Ingots, Sheets' },
          { label: 'ASTM Specs', value: 'B209, B221' }
        ]
      },
      {
        id: 3,
        name: 'Brass',
        symbol: 'CuZn',
        icon: 'ti ti-settings',
        category: 'alloy',
        image: 'images/13.jpg',
        description: 'An alloy of copper and zinc, known for its acoustic properties and machinability.',
        specs: [
          { label: 'Composition', value: '~67% Cu, 33% Zn' },
          { label: 'Common Forms', value: 'Rods, Fittings, Casings' },
          { label: 'ASTM Specs', value: 'B36, B124' }
        ]
      },
      {
        id: 4,
        name: 'Lead',
        symbol: 'Pb',
        icon: 'ti ti-shield-check',
        category: 'base',
        image: 'images/14.jpg',
        description: 'A dense, soft, and highly malleable heavy metal used in batteries and radiation shielding.',
        specs: [
          { label: 'Purity', value: '99.94% min' },
          { label: 'Common Forms', value: 'Ingots, Sheeting, Weights' },
          { label: 'ASTM Specs', value: 'B29' }
        ]
      },
      {
        id: 5,
        name: 'Stainless Steel',
        symbol: 'FeCr',
        icon: 'ti ti-tool',
        category: 'alloy',
        image: 'images/15.jpg',
        description: 'An iron alloy with a minimum of 10.5% chromium content, prized for its corrosion resistance.',
        specs: [
          { label: 'Grades', value: '304, 316, 430' },
          { label: 'Common Forms', value: 'Sheet, Bar, Turnings' },
          { label: 'ASTM Specs', value: 'A240, A276' }
        ]
      },
      {
        id: 6,
        name: 'Zinc',
        symbol: 'Zn',
        icon: 'ti ti-layers-intersect',
        category: 'base',
        image: 'images/16.jpg',
        description: 'Primarily used for galvanizing steel to prevent corrosion.',
        specs: [
            { label: 'Purity', value: '99.99% (SHG)' },
            { label: 'Common Forms', value: 'Ingots, Dust' },
            { label: 'ASTM Specs', value: 'B6' }
        ]
      }
    ],

    // Computed property to filter metals based on the active filter
    get filteredMetals() {
      if (this.activeFilter === 'all') {
        return this.metals;
      }
      return this.metals.filter(metal => metal.category === this.activeFilter);
    }
  };
}

// Keep the existing DOMContentLoaded listener for AOS and the footer year
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ /* ... */ });
    // ... footer year logic
});

document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 700, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
        offset: 50,     // offset (in px) from the original trigger point
    });

    // Set current year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // NOTE: A count-up animation for the stats section would be added here.
    // It would use an Intersection Observer to trigger the animation when the
    // .stats-section becomes visible.
});

// Keep the metalsPageData() function at the top if it's in the same file.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 700,
        once: true,
        offset: 50,
    });

    // Set current year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- SVG Path Animation for Sustainability Page ---
    const path = document.querySelector('#recyclingPath');
    if (path) {
        const pathLength = path.getTotalLength();

        // Set initial styles for the animation
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll', () => {
            // What % down is it?
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            
            // Length to offset the dashes
            const drawLength = pathLength * scrollPercentage * 2.5; // Multiplier adjusts animation speed

            // Draw in reverse
            path.style.strokeDashoffset = Math.max(0, pathLength - drawLength);
        });
    }
});

// Keep other functions like metalsPageData() and the SVG animation logic if they are in the same file.

// Data and logic for the Contact Form, managed by Alpine.js
function contactForm() {
    return {
        submitting: false,
        success: false,
        submitForm() {
            this.submitting = true;

            // Simulate a network request (in a real app, use fetch() here)
            setTimeout(() => {
                this.submitting = false;
                this.success = true;
            }, 1500);
        }
    };
}


document.addEventListener('DOMContentLoaded', function() {
    // Keep all existing initialization logic here (AOS, footer year, SVG animation)
    // ...
});