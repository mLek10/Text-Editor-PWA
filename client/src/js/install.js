const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.location.reload();
});
