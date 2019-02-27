var errors = 0;
var game_over = false;

var titles = [
    'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Schindler\'s List',
    'The Good, the Bad and the Ugly', 'Twelve Angry Men', 'Inception', 'Fight Club', 'Forrest Gump',
    'The Matrix', 'Goodfellas', 'One Flew Over the Cuckoo\'s Nest', 'Seven Samurai', 'Interstellar',
    'City of God', 'Spirited Away', 'Saving Private Ryan', 'Life Is Beautiful', 'The Usual Suspects',
    'Leon: The Professional', 'The Silence of the Lambs', 'Star Wars', 'Avengers: Infinity War', 
    'Whiplash', 'The Intouchables', 'The Prestige', 'The Departed', 'The Pianist', 'Memento', 
    'Gladiator', 'The Green Mile', 'American History X', 'The Lion King', 'The Terminator',
    'Back to the Future', 'Raiders of the Lost Ark', 'Apocalypse Now'
];

var index = Math.floor(Math.random() * titles.length);
var title = titles[index];

function printTitle() {
    let text = '';
    for (let i = 0; i < title.length; i++) {
        let c = title.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            text += ' _ ';
        }
        else {
            text += ' ' + c + ' ';
        }
    }
    document.getElementById('film_title').innerText = text;
}

function tryLetter(letter) {
    if (!game_over) {
        let check = false;
        for (let i = 0; i < title.length; i++) {
            if (title.charAt(i).toLowerCase() == letter.toLowerCase()) {
                check = true;
                document.getElementById(letter).setAttribute('style', 'color:green');
                let text = document.getElementById('film_title').innerText;
                text = text.substr(0, i * 3 + 1) + letter + text.substr(i * 3 + 2);
                document.getElementById('film_title').innerText = text;
            }
        }
        if (!check) {
            document.getElementById(letter).setAttribute('style', 'color:red');
            errors++;
        }
        document.getElementById('gallows').setAttribute('src', 'gallows' + errors + '.png'); // gallows2.png
        if (errors == 6) {
            game_over = true;
            alert("Igra je gotova!\nNaziv filma: " + title);
        }
        if (document.getElementById('film_title').innerHTML.indexOf('_') == -1) {
            game_over = true;
            alert("Cestitamo!");
        }
    }
}
