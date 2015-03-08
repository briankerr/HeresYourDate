var ice_skating = {name: "go ice skating", img:"ice_skating.jpg"};
var mini_golf = {name: "play some mini golf", img:"mini_golf.jpg"};
var froyo = {name: "eat some fucking froyo", img: "froyo.jpg"};
var arcade = {name: "go to a shitty arcade", img: "arcade.jpg"};
var kite_flying = {name: "fly a stupid kite", img: "kite_flying.jpg"};
var karate_film = {name: "see a shitty karate film", img: "karate_film.jpg"};
var walk_in_park = {name: "walk in the damn park", img: "walk_in_park.jpg"};
var swimming = {name: "swim in a fucking pool", img: "swimming.jpg"};
var nursing_home = {name: "visit old farts at nursing home", img: "nursing_home.jpg"};
var sunrise = {name:"watch the sunrise", img: "sunrise.jpg"};
var stargaze = {name: "look at some dumb stars", img: "stargaze.jpg"};
var talk_strangers = {name: "talk to some strangers", img: "talk_strangers.jpg"};
var apartment_hunting = {name: "look at shitty apartments", img: "apartment_hunting.jpg"};
var fishing = {name: "catch some damn fish", img: "fishing.jpg"};

var options = [ice_skating, mini_golf, froyo, arcade, kite_flying, karate_film, walk_in_park,
               swimming, nursing_home, sunrise, stargaze, talk_strangers, apartment_hunting,
              fishing];

function give_me_a_fucking_option() {
    var max_options = options.length;
    var date = new Date();
    var option_index = date.getDate() * date.getMonth() % max_options;
    return options[option_index];
}

function give_me_another_fucking_option() {
    var max_options = options.length;
    var date = new Date();
    var option_index = date.getDate() * date.getMonth() * date.getYear() % max_options;
    return options[option_index];
}

function give_me_the_first_fucking_option_name() {
    return give_me_a_fucking_option().name.toUpperCase();
}

function give_me_the_second_fucking_option_name() {
    return give_me_another_fucking_option().name.toUpperCase();
}

function give_me_the_first_fucking_option_img() {
    return give_me_a_fucking_option().img;
}

function give_me_the_second_fucking_option_img() {
    return give_me_another_fucking_option().img;
}


