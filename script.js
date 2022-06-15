



let pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg']


function render() {                                                     //render wird ausgeführt
    let allphotos = document.getElementById('allphotos');               // nimmt DIV mit ID mit Fotogalerie und macht daraus eine Variable
    allphotos.innerHTML = '';                                           // leert den Container

    for (let i = 0; i < pics.length; i++) {                             // for-Schleife wird durchgeführt. (siehe Blatt for-Schleife)     
        let pic = pics[i];                                              // eine Variable wird definiert und die hat den 0`ten Wert aus dem Array
        allphotos.innerHTML += allPhotoHTML (i, pic);                   // innerHTML liest und speichert den Inhalt eines HTML-Elements. 
    }                                                                   // += Fügt dem Wert einer Variablen den Wert hinzu. In diesem Fall Function allPhotoHTML (i, pic)
}                                                                       

function allPhotoHTML (i, pic){                                         // 2) ${i} ist das einzelne Foto. die onclick funktion für den DIV
    return `<div class="allphotos" onclick="openPhoto(${i})">           
            <img src="img/${pic}"></div>`;                              // 1) ${pic} ist die for-Schleife. Also "alle" Bilder in der Galerie 
}

function openPhoto(i) {                                                
    if (i < 0) {                                                        // übernimmt das switschen vom ersten zum letzten Foto
        i = pics.length - 1;                                            // wenn i kleiner ist als 0, dann ist i das letzte Bild. also 19.
    }
    if (i > pics.length - 1) {                                          // übernimmt das switschen dem letzten und erstem Foto
        i = 0;                                                          // wenn i größer ist als 19, dann ist i das erste Bild. also 0.
    }
                                                                        // display None unterdrückt die Anzeige eines Elements vollständig
    document.getElementById('onephoto').classList.remove("d-none");     // entfernt die Klasse Display None bei onephoto. also wird das Foto gezeigt und nicht unterdrückt
    document.getElementById('header').classList.add("d-none");          // fügt der ID header die Klasse Display None hinzu. Also wird der header unterdrückt
    document.getElementById('allphotos').classList.add("d-none");       // fügt der ID allphotos die Klasse Display None hinzu. Also wird allphotos unterdrückt
    let fullview = document.getElementById('onephoto');                 // die ID onephoto bekommt eine Variable
    fullview.innerHTML = '';                                            // leert den Container
    fullview.innerHTML += fullscreenBoxHTML(i);                         // innerHTML liest und speichert den Inhalt eines HTML-Elements
}

function fullscreenBoxHTML(i) {                                         
    return `
    <div class="fullscreen-box" id=fullscreen-box">            
        <img src="img/${pics[i]}">
            <a href="#" id="close" onclick="closePhoto(${i})">
                 <img src="img/x-mark.png" class="close">
            <a href="#" id="right" onclick="nextPhoto(${i})">
                 <img src="img/arrow-right.png" class="right leftright">
            <a href="#" id="left" onclick="PhotoBefore(${i})">
                <img src="img/arrow-left.png" class="left leftright">
            </div> `;                                                   
   // fullscreen box wird geöffnet. eine img wird aufgerufen. die aus dem array das bild mit der variablen i nimmt.
   // Close also X bekommt ein link und wird mit img (also alf Foto) eingefügt
   // right also Pfeil nächstes Bild bekommt ein link und wird mit img (also ein Foto) eingefügt
   // left also Pfeil vorheriges Bild bekommt ein link und wird mit img (also ein Foto) eingefügt
}


function closePhoto() {
    document.getElementById('onephoto').classList.add("d-none");        // fügt der ID onephote die Klasse Display None hinzu. Also wird onephoto unterdrückt
    document.getElementById('header').classList.remove("d-none");       // entfernt die Klasse Display None beim header. also wird der Header gezeigt und nicht unterdrückt
    document.getElementById('allphotos').classList.remove("d-none");    // entfernt die Klasse Display None bei allphotos. also werden alle Fotos gezeigt und nicht unterdrückt

    let closeFullView = document.getElementById('onephoto');
    closeFullView.innerHTML = '';
}

function nextPhoto(i) {             // nächstes Foto wird aufgerufen durch i++
    i++;
    openPhoto(i)                    // funktion openPhoto wird aufgerufen
}

function PhotoBefore(i) {           // vorheriges Foto wird aufgerufen durch i--
    i--;
    openPhoto(i);                   // funktion openPhoto wird aufgerufen
}


