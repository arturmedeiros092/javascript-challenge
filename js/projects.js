import { projects } from './projectsData.js'

const projectsContainer = document.getElementById('projects-container')
projects.forEach(project => {
    const projectElement = document.createElement('div')
    projectElement.classList.add('project')
    projectElement.innerHTML = `<div class="group cursor-pointer bg-black border dark:bg-neutral-200 border-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col h-full gap-4
        trasition-transform duration-300 hover:scale-105 hover:border-purple-400 hover:text-purple-400">
          <a href="https://github.com/PotiCode-Trainee-2026/html-challenge-arturmedeiros092" target="_blank">
            <img class="w-full h-full object-cover" src="${project.Image}" alt="${project.title}">
          </a>

          <div>
            <h3
              class="m-0 text-white text-2xl group-hover:text-purple-400 dark:text-black dark:group-hover:text-purple-700">
              ${project.title}</h3>
            <p class="mt-0 mb-4 text-gray-400 dark:text-gray-800 text-base leading-normal">A ${project.title} page clone built
              with HTML and CSS.
            </p>
          </div>
        </div> 
    `
    projectsContainer.appendChild(projectElement)
})