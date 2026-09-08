// Data loader for all JSON data files

document.addEventListener('DOMContentLoaded', () => {
  // Load all data
  Promise.all([
    fetch('data/profile.json').then(res => res.json()),
    fetch('data/navigation.json').then(res => res.json()),
    fetch('data/about.json').then(res => res.json()),
    fetch('data/resume.json').then(res => res.json()),
    fetch('data/portfolio.json').then(res => res.json()),
    fetch('data/interests.json').then(res => res.json()),
    fetch('data/honors.json').then(res => res.json()),
    fetch('data/contact.json').then(res => res.json())
  ])
  .then(([profileData, navigationData, aboutData, resumeData, portfolioData, interestsData, honorsData, contactData]) => {
    // Load profile data (Sidebar and Mobile Header)
    loadProfileData(profileData);
    
    // Load navigation (Main Tabs)
    loadNavigation(navigationData); 
    
    // Load content sections
    loadAboutSection(aboutData);
    loadResumeSection(resumeData);
    loadInterestsSection(interestsData);
    loadHonorsSection(honorsData);
    loadContactSection(contactData);
    
    // Set footer
    loadFooter(profileData.footer);
    
    // Reinitialize tab navigation AFTER data and buttons are loaded
    if (typeof setupTabNavigation === 'function') {
      setupTabNavigation();
    }

    // Debug log to check if skills data exists
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });
  
  // Load profile data into sidebar and mobile header/menu
  function loadProfileData(data) {
    // Name and Title (Sidebar & Mobile Header)
    document.querySelectorAll('.sidebar .name, .mobile-profile .name').forEach(el => {
      el.textContent = data.name;
    });
    document.querySelectorAll('.sidebar .title, .mobile-profile .title').forEach(el => {
      el.textContent = data.title;
    });
    
    // Avatar (Sidebar & Mobile Header)
    document.querySelectorAll('.sidebar .avatar img, .mobile-profile img').forEach(el => {
      el.src = data.avatar;
      el.alt = data.name ? `${data.name}'s profile picture` : 'Profile picture'; 
    });
    
    // Contact info (Sidebar)
    const contactInfoContainerSidebar = document.querySelector('.sidebar .contact-info');
    if (contactInfoContainerSidebar) {
      contactInfoContainerSidebar.innerHTML = '';
      data.contactInfo.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        infoItem.innerHTML = `
          <i class="${item.icon}"></i>
          <span>${item.text}</span>
        `;
        contactInfoContainerSidebar.appendChild(infoItem);
      });
    }

    // Contact info (Mobile Menu)
    const contactInfoContainerMobileMenu = document.querySelector('.mobile-contact-info');
    if (contactInfoContainerMobileMenu) {
      contactInfoContainerMobileMenu.innerHTML = ''; // Clear existing
      data.contactInfo.forEach(item => {
          const infoItem = document.createElement('div');
          infoItem.className = 'info-item mobile'; // Add specific class if needed
          infoItem.innerHTML = `
              <i class="${item.icon}"></i>
              <span>${item.text}</span>
          `;
          contactInfoContainerMobileMenu.appendChild(infoItem);
      });
    }

    // Contact info (Mobile Header)
    const contactInfoContainerMobileHeader = document.querySelector('.mobile-header-contact');
    if (contactInfoContainerMobileHeader) {
      contactInfoContainerMobileHeader.innerHTML = ''; // Clear existing
      data.contactInfo.forEach(item => {
          const infoItem = document.createElement('div');
          // Use a different class to allow separate styling if needed
          infoItem.className = 'mobile-header-contact-item'; 
          // Omit icon for brevity in header
          infoItem.innerHTML = `<span>${item.text}</span>`; 
          contactInfoContainerMobileHeader.appendChild(infoItem);
      });
    }
    
    // Social links (Sidebar only - could be added to mobile too if desired)
    const socialLinksContainer = document.querySelector('.sidebar .social-links');
    if (socialLinksContainer) {
      socialLinksContainer.innerHTML = '';
      data.socialLinks.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'social-icon';
        link.target = '_blank';
        link.innerHTML = `<i class="${item.icon}"></i>`;
        link.setAttribute('aria-label', item.label);
        socialLinksContainer.appendChild(link);
      });
      const downloadLink = document.createElement('a');
      downloadLink.className = 'btn btn-primary social-icon';
      downloadLink.id = 'download-cv-btn';
      downloadLink.innerHTML = '<i class="fas fa-download"></i>';
      downloadLink.setAttribute('aria-label', 'Download CV');
      socialLinksContainer.appendChild(downloadLink);
    }

    // Social links (Mobile drawer) — mirror of sidebar links, no download
    // button here (the drawer has its own full-width "download cv" action).
    const mobileSocial = document.querySelector('.mobile-social-links');
    if (mobileSocial) {
      mobileSocial.innerHTML = '';
      data.socialLinks.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'social-icon';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<i class="${item.icon}"></i>`;
        link.setAttribute('aria-label', item.label);
        mobileSocial.appendChild(link);
      });
    }
  }
  
  // Load main navigation tabs (for Desktop/Tablet view)
  function loadNavigation(data) {
    const tabNavigation = document.querySelector('.tab-navigation');
    if (tabNavigation) {
      tabNavigation.innerHTML = ''; // Clear only main tab buttons
      // Filter out hidden tabs
      const visibleTabs = data.tabs.filter(tab => !tab.hidden);
      visibleTabs.forEach(tab => {
        const button = document.createElement('button');
        button.className = 'tab-btn' + (tab.active ? ' active' : '');
        button.dataset.tab = tab.id;
        button.textContent = tab.title;
        tabNavigation.appendChild(button);
      });
    } 
    // Mobile links are now generated in setupTabNavigation in main.js
  }
  
  // Load about section
  function loadAboutSection(data) {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    // Set section title
    const sectionHeader = aboutSection.querySelector('.section-header h2');
    if (sectionHeader) {
      sectionHeader.textContent = data.title;
    }
    
    // Set about description
    const aboutText = aboutSection.querySelector('.about-text');
    if (aboutText) {
      aboutText.textContent = data.description;
    }
    
    // Set services
    const servicesGrid = aboutSection.querySelector('.services-grid');
    if (servicesGrid) {
      servicesGrid.innerHTML = '';
      
      data.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
          <i class="${service.icon}"></i>
          <h4>${service.title}</h4>
          <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
      });
    }
  }
  
  // Load resume section
  function loadResumeSection(data) {
    const resumeSection = document.getElementById('resume');
    if (!resumeSection) return;

    // Total distinct calendar months across all roles. Adjacent jobs are merged
    // so a same-month transition is counted once; "Present" uses this month.
    const totalExperience = (jobs) => {
      const monthIndex = (value) => {
        if (/^present$/i.test(String(value).trim())) {
          const now = new Date();
          return now.getFullYear() * 12 + now.getMonth();
        }
        const match = String(value).trim().match(/^([a-zA-Z]+)\s+(\d{4})$/);
        if (!match) return null;
        const months = {
          jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
          jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
        };
        const month = months[match[1].slice(0, 3).toLowerCase()];
        return month === undefined ? null : Number(match[2]) * 12 + month;
      };
      const ranges = (jobs || []).map(({ period }) => {
        const [start, end] = String(period || '').split(/\s+[–—-]\s+/);
        const from = monthIndex(start);
        const to = monthIndex(end);
        return from === null || to === null || to < from ? null : { from, to };
      }).filter(Boolean).sort((a, b) => a.from - b.from);
      const merged = ranges.reduce((all, range) => {
        const previous = all[all.length - 1];
        if (previous && range.from <= previous.to + 1) previous.to = Math.max(previous.to, range.to);
        else all.push({ ...range });
        return all;
      }, []);
      const months = merged.reduce((sum, range) => sum + range.to - range.from + 1, 0);
      const years = Math.floor(months / 12);
      const remainder = months % 12;
      return [
        years && `${years} yr${years === 1 ? '' : 's'}`,
        remainder && `${remainder} mo${remainder === 1 ? '' : 's'}`
      ].filter(Boolean).join(' ');
    };
    
    // Set section title
    const sectionHeader = resumeSection.querySelector('.section-header h2');
    if (sectionHeader) {
      sectionHeader.textContent = data.title;
    }
    
    // Work Experience
    const experienceTimeline = resumeSection.querySelector('.resume-section:nth-of-type(1) .timeline');
    if (experienceTimeline) {
      const experienceTotal = resumeSection.querySelector('.experience-total');
      const total = totalExperience(data.experience);
      if (experienceTotal) experienceTotal.textContent = total ? `· ${total}` : '';
      experienceTimeline.innerHTML = '';
      data.experience.forEach(job => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Create logo element if URL exists
        let logoHTML = '';
        if (job.logo) {
            logoHTML = `<img src="${job.logo}" alt="${job.company} logo" class="company-logo">`;
        }

        timelineItem.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4>${job.title}</h4>
            <div class="company-info"> 
              ${logoHTML}
              <p class="company">${job.company}</p>
            </div>
            <p class="period">${job.period}</p>
            <p class="description">${job.description}</p>
          </div>
        `;
        experienceTimeline.appendChild(timelineItem);
      });
    }
    
    // Education
    const educationTimeline = resumeSection.querySelector('.resume-section:nth-of-type(2) .timeline');
    if (educationTimeline) {
      educationTimeline.innerHTML = '';
      data.education.forEach(edu => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4>${edu.degree}</h4>
            <p class="company">${edu.institution}</p>
            <p class="period">${edu.period}</p>
          </div>
        `;
        educationTimeline.appendChild(timelineItem);
      });
    }
    
    // Certifications
    const certTimeline = resumeSection.querySelector('.resume-section:nth-of-type(3) .timeline');
    if (certTimeline) {
      certTimeline.innerHTML = '';
      data.certifications.forEach(cert => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        const listItems = cert.items.map(item => `<li>${item}</li>`).join('');
        timelineItem.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4>${cert.category}</h4>
            <ul class="certification-list">
              ${listItems}
            </ul>
          </div>
        `;
        certTimeline.appendChild(timelineItem);
      });
    }
    
    // ---- Skills: grouped rows with a 5-cell segmented proficiency meter ----
    const TIERS = ['', 'learning', 'familiar', 'proficient', 'advanced', 'expert'];
    const tierName = (lvl) => TIERS[Math.max(0, Math.min(5, lvl))] || '';

    const skillRow = (skill, showTier) => {
      const lvl = Math.max(0, Math.min(5, Number(skill.level) || 0));
      let cells = '';
      for (let i = 1; i <= 5; i++) cells += `<span class="cell ${i <= lvl ? 'on' : ''}"></span>`;
      const tier = tierName(lvl);
      const tierHTML = showTier && tier
        ? `<span class="skill-tier" data-tier="${tier}">${tier}</span>` : '';
      // Icon: a class (devicon / Font Awesome) renders as <i>, a URL as <img>
      let iconHTML = '';
      if (skill.icon) {
        iconHTML = skill.icon.startsWith('http')
          ? `<img src="${skill.icon}" class="skill-icon" alt="" aria-hidden="true">`
          : `<i class="${skill.icon} skill-icon" aria-hidden="true"></i>`;
      }
      return `
        <div class="skill-row">
          <span class="skill-name">${iconHTML}${skill.name}</span>
          <span class="meter" role="img" aria-label="${lvl} of 5">${cells}</span>
          ${tierHTML}
        </div>`;
    };

    // Technical Skills (grouped by category)
    const techSkillsGrid = resumeSection.querySelector('#technical-skills .skills-grid');
    if (techSkillsGrid && Array.isArray(data.technicalSkills)) {
      techSkillsGrid.innerHTML = '';
      data.technicalSkills.forEach(group => {
        if (!group || !Array.isArray(group.skills)) return;
        const cat = document.createElement('div');
        cat.className = 'skill-cat';
        const rows = group.skills.map(s => skillRow(s, true)).join('');
        cat.innerHTML = `
          <span class="skill-cat-label">${group.category}</span>
          <div class="skill-rows">${rows}</div>`;
        techSkillsGrid.appendChild(cat);
      });
    } else {
      console.warn('Technical skills section (#technical-skills .skills-grid) or data not found');
    }

    // Soft Skills (single group, meter without tier label)
    const softSkillsGrid = resumeSection.querySelector('#soft-skills .skills-grid');
    if (softSkillsGrid && Array.isArray(data.softSkills)) {
      softSkillsGrid.innerHTML = '';
      const wrap = document.createElement('div');
      wrap.className = 'skill-rows';
      wrap.innerHTML = data.softSkills.map(s => skillRow(s, false)).join('');
      softSkillsGrid.appendChild(wrap);
    } else {
      console.warn('Soft skills section (#soft-skills .skills-grid) or data not found');
    }
  }
  
  // Load interests section
  function loadInterestsSection(data) {
    const interestsSection = document.getElementById('interests');
    if (!interestsSection || !data) {
        console.warn('Interests section element or data not found.');
        return;
    }

    // Set main section title
    const mainHeader = interestsSection.querySelector('.section-header h2');
    if (mainHeader) {
      mainHeader.textContent = data.title || 'Interests & Passions';
    }

    // Helper function to create a card element
    const createCardElement = (itemData, baseClass) => {
        const cardElement = document.createElement('div');
        cardElement.className = baseClass;
        
        const iconHTML = itemData.icon ? `<i class="${itemData.icon} interest-icon"></i>` : '';
        
        // Check for links and generate buttons for ALL valid links
        let linksHTML = '';
        if (itemData.links && Array.isArray(itemData.links) && itemData.links.length > 0) {
            const linkButtons = itemData.links
                .filter(link => link.url && link.icon) // Ensure both url and icon exist
                .map(link => `
                    <a href="${link.url}" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="interest-link-btn" 
                       aria-label="${itemData.title} Link">
                        <i class="${link.icon}"></i>
                    </a>
                `).join(''); // Join multiple buttons
            
            if (linkButtons) { // Only add container if there are buttons
                linksHTML = `<div class="interest-card-links">${linkButtons}</div>`;
            }
        }

        cardElement.innerHTML = `
          <div class="interest-card-header">
            ${iconHTML}
            <h3>${itemData.title}</h3>
          </div>
          <p>${itemData.description}</p>
          ${linksHTML}
        `;
        
        return cardElement; 
    };

    // Load Core Interests
    const coreGrid = interestsSection.querySelector('.core-interests-grid');
    if (coreGrid && data.coreInterests) {
      coreGrid.innerHTML = '';
      data.coreInterests.forEach(interest => {
        const cardElement = createCardElement(interest, 'interest-card');
        coreGrid.appendChild(cardElement);
      });
    }

    // Load Fusion Passions
    const fusionContainer = interestsSection.querySelector('.fusion-passions');
    if (fusionContainer && data.fusionPassions) {
      const fusionHeader = fusionContainer.querySelector('h2');
      const fusionGrid = fusionContainer.querySelector('.fusions-grid');
      
      if(fusionHeader) fusionHeader.textContent = data.fusionTitle || 'Where Worlds Collide';
      
      if (fusionGrid) {
          fusionGrid.innerHTML = '';
          data.fusionPassions.forEach(fusion => {
             // Note: createCardElement expects h3, so we use h4 in the baseClass if needed for CSS
             // Or adjust createCardElement to accept title tag type parameter
            const cardElement = createCardElement(fusion, 'interest-card fusion-item'); 
            // Manually change h3 back to h4 if createCardElement always makes h3
            const titleElement = cardElement.querySelector('h3');
            if (titleElement) {
                const h4 = document.createElement('h4');
                h4.textContent = titleElement.textContent;
                titleElement.replaceWith(h4);
            }
            fusionGrid.appendChild(cardElement);
          });
      }
    }

    // Load Homelab Showcase
    const homelabContainer = interestsSection.querySelector('.homelab-showcase');
    if (homelabContainer && data.homelabDetails) {
      const homelabHeader = homelabContainer.querySelector('h2');
      const homelabLinksContainer = homelabContainer.querySelector('.homelab-links'); // Target new links container
      const homelabContent = homelabContainer.querySelector('.homelab-content');

      if(homelabHeader) homelabHeader.textContent = data.homelabTitle || 'The Digital Forge – My Homelab';

      // Populate Homelab Links under the title
      if(homelabLinksContainer && data.homelabDetails.links && Array.isArray(data.homelabDetails.links)) {
          homelabLinksContainer.innerHTML = ''; // Clear previous
          data.homelabDetails.links
              .filter(link => link.url && link.icon) // Keep filtering for valid links
              .forEach(link => {
                  const linkButton = document.createElement('a');
                  linkButton.href = link.url;
                  linkButton.target = '_blank';
                  linkButton.rel = 'noopener noreferrer';
                  linkButton.className = 'homelab-link-btn'; 
                  linkButton.setAttribute('aria-label', link.label || 'Homelab Link');
                  // Add both icon and label text
                  linkButton.innerHTML = `<i class="${link.icon}"></i> <span>${link.label || 'Link'}</span>`; 
                  homelabLinksContainer.appendChild(linkButton);
              });
      }

      // Populate Homelab Content (Image, Description, Specs)
      if(homelabContent) {
          homelabContent.innerHTML = ''; // Clear existing
          
          // Keep image separate, no longer linked itself
          let imageHTML = '';
          if(data.homelabDetails.image) {
              imageHTML = `<img src="${data.homelabDetails.image}" alt="My Homelab Setup" class="homelab-image">`;
          }
          const imageContainerHTML = imageHTML ? `<div class="homelab-image-container">${imageHTML}</div>` : '';

          let descriptionHTML = '';
          if(data.homelabDetails.description) {
              descriptionHTML = `<p class="homelab-description">${data.homelabDetails.description}</p>`;
          }

          let specsHTML = '';
          if(data.homelabDetails.specs && Array.isArray(data.homelabDetails.specs)) {
              const specItems = data.homelabDetails.specs.map(spec => 
                  `<li>${spec.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`
              ).join('');
              specsHTML = `<ul class="homelab-specs">${specItems}</ul>`;
          }

          // Structure: description (left) + image (right), specs full width below
          homelabContent.innerHTML = `
              <div class="homelab-text">
                  ${descriptionHTML}
              </div>
              ${imageContainerHTML}
              <div class="homelab-specs-container">
                  ${specsHTML}
              </div>
          `;
      }
    }
  }
  
  // Load honors section
  function loadHonorsSection(data) {
    const honorsSection = document.getElementById('honors');
    if (!honorsSection) return;
    
    // Set section title
    const sectionHeader = honorsSection.querySelector('.section-header h2');
    if (sectionHeader) {
      sectionHeader.textContent = data.title;
    }
    
    // Awards timeline
    const timeline = honorsSection.querySelector('.timeline');
    if (timeline) {
      timeline.innerHTML = '';
      
      data.awards.forEach(award => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4>${award.title}</h4>
            <p class="company">${award.organization}</p>
            <p class="period">${award.date}</p>
            <p class="description">${award.description}</p>
          </div>
        `;
        timeline.appendChild(timelineItem);
      });
    }
  }
  
  // Load contact section
  function loadContactSection(data) {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Set section title
    const sectionHeader = contactSection.querySelector('.section-header h2');
    if (sectionHeader) {
      sectionHeader.textContent = data.title;
    }
    
    // Form fields
    const form = contactSection.querySelector('.contact-form');
    if (form) {
      form.innerHTML = '';
      
      // Create form fields
      data.form.fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        formGroup.appendChild(label);
        
        if (field.type === 'textarea') {
          const textarea = document.createElement('textarea');
          textarea.id = field.id;
          textarea.name = field.id;
          textarea.rows = field.rows || 5;
          if (field.required) textarea.required = true;
          formGroup.appendChild(textarea);
        } else {
          const input = document.createElement('input');
          input.type = field.type;
          input.id = field.id;
          input.name = field.id;
          if (field.required) input.required = true;
          formGroup.appendChild(input);
        }
        
        form.appendChild(formGroup);
      });
      
      // Add submit button
      const button = document.createElement('button');
      button.type = 'submit';
      button.className = 'submit-btn';
      button.textContent = data.form.submitButton;
      form.appendChild(button);
    }
    
    // Map
    const mapContainer = contactSection.querySelector('.map-container');
    if (mapContainer && data.map.embedUrl) {
      mapContainer.innerHTML = `
        <iframe src="${data.map.embedUrl}" 
                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `;
    }
  }
  
  // Load footer
  function loadFooter(data) {
    const footer = document.querySelector('.footer');
    if (footer && data) {
      footer.innerHTML = `<p>${data.copyright}</p>`;
    }
  }
}); 
