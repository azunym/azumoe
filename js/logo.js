var random_logos = ["banazu1_fight.gif", "azukyuu.gif", "azup.gif"];

function getRandomImage(imgAr, path) {
    path = path || 'img/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "azu" class="boxed">';
    document.write(imgStr); document.close();
}
