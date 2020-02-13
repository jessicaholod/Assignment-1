var app = new Framework7({

    root: '#app',
    routes: [

        {
            path: '/',
            url: 'index.html'
        },

        {
            path: '/page2/',
            url: 'pages/page2.html'
        },

        {
            path: '/page3/',
            url: 'pages/page3.html'
        },

        {
            path: '/page4/',
            url: 'pages/page4.html'
        },

        {
            path: '/page5/',
            url: 'pages/page5.html'
        },

        {
            path: '/page6/',
            url: 'pages/page6.html'
        },

        {
            path: '/page7/',
            url: 'pages/page7.html'
        },
    ]

})

var mainView = app.views.create(".view-main");


console.log("bonjour");
var cSrc;
var $$ = Dom7;


$(".link back").on('page:init', '.page[data-name="home"]',
                   function () {

    //go back to home page  

})


$$(document).on('page:init', '.page[data-name="page2"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));

    })



$$(document).on('page:init', '.page[data-name="page3"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));
    

    })

$$(document).on('page:init', '.page[data-name="page4"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));

    })

$$(document).on('page:init', '.page[data-name="page5"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));

    })

$$(document).on('page:init', '.page[data-name="page6"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));

    })


$$(document).on('page:init', '.page[data-name="page7"]',
    function () {

        document.getElementById("myAudio").play()

        console.log(document.getElementById("myAudio"));

    })


//Id uses hashtag
//class uses . 
// how do you add music on click ... <audio> ? https://www.w3schools.com/Jsref/dom_obj_audio.asp
