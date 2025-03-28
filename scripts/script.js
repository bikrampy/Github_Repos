const username = "bikrampy"; // Replace with your GitHub username
const repoContainer = document.getElementById("repo-container");

async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");

            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            repoContainer.appendChild(repoCard);
        });
    } catch (error) {
        console.error("Error fetching repositories:", error);
    }
}

fetchRepos();
