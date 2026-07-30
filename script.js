fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects-container');
        
        projects.forEach(project => {
            const projectHTML = `
                <div class="project-item">
                    <h2><a href="${project.url}" target="_blank">${project.title}</a></h2>
                    <p>${project.description}</p>
                </div>
            `;
            
            container.innerHTML += projectHTML;
        });
    })
    .catch(error => console.error('Error loading projects:', error));