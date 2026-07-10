AOS.init({

duration:1000,

once:false

});


var typed = new Typed(".typing",{

strings:[

"Cyber Security Student",

"Python Developer",

"Ethical Hacking Learner",

"SOC Analyst",

"Digital Forensics Enthusiast",

"Future Security Engineer"

],

typeSpeed:80,

backSpeed:50,

loop:true

});


particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#00E5FF"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

move:{speed:2}

},

interactivity:{

events:{

onhover:{enable:true,mode:"repulse"}

}

}

});