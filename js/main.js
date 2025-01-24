function fetchResources() {
    fetch('php/get-resources.php')
        .then(response => response.json())
        .then(data => {
            const resourceList = document.getElementById('resource-list');
            resourceList.innerHTML = data.map(resource => `
                <li>
                    <a href="${resource.file_url}" target="_blank">${resource.title}</a>
                </li>
            `).join('');
        })
        .catch(err => {
            console.error(err);
            document.getElementById('resource-list').innerHTML = "<p>Failed to load resources.</p>";
        });
}
