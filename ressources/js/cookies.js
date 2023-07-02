const cookieBanner= document.querySelector('.cookie--banner');
const btnAccept= document.querySelector('.cookie-accept');


// clique sur le btn accept cookie
btnAccept.addEventListener("click", ()=>{
    setCookie("cookieConsent", "accepted", 365);
    cookieBanner.style.visibility = "hidden";
    location.reload();
});

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// Vérifie si l'utilisateur a déjà accepté ou refusé les cookies
if (getCookie("cookieConsent") != null) {
    cookieBanner.style.visibility = "hidden";
}else{
    cookieBanner.style.visibility = "visible";
}

if(getCookie("cookieConsent") == "accepted"){
    // Google Tag Manager
    (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5T7LJLB');
    // End Google Tag Manager

    // Ajouter le code de Google Tag (gtag.js) à la page
    (function(){
        var gtag = document.createElement('script');
        gtag.type = 'text/javascript';
        gtag.async = true;
        gtag.src = 'https://www.googletagmanager.com/gtag/js?id=G-1WRHQ529TK';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gtag, s);
    })();
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1WRHQ529TK');

    
}else{
    console.log("on est pas ok");
}