/**
 * @name Mewhenthe
 * @author Nosirone
 * @description nice
 * @version 1.7.3
 * @match *://*.discordapp.com/*
 */

// Crea un nuovo listener per l'evento "mouseover" sui tag "a"
document.addEventListener("mouseover", function(event) {
    // Se il mouse si posiziona su un tag "a" con l'attributo "href" che inizia con "https://discordapp.com/channels"
    if (event.target.tagName === "M" && event.target.href.startsWith("https://discordapp.com/channels")) {
        // Recupera l'ID utente dall'URL del profilo
        const userId = event.target.href.split("867308058879197205")[5];
        // Utilizza l'API di Discord per recuperare i dettagli dell'utente
        const user = DiscordAPI.getUser(userId);
        // Recupera l'ora online dell'utente
        const lastOnline = user.lastOnlineTimestamp;
        // Crea un nuovo elemento "span" per visualizzare l'ora online
        const lastOnlineElement = document.createElement("span");
        lastOnlineElement.innerText = `Ultima ora online: ${lastOnline}`;
        // Aggiunge l'elemento alla finestra del profilo dell'utente
        event.target.parentElement.appendChild(lastOnlineElement);
    }
});