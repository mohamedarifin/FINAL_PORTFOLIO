
// skills section :-
var skill_box = document.querySelectorAll('.first_content_back .skill_box');
var skill_show = document.querySelectorAll('.skills_shows_back .s_s');
const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


/* =====================================
   MOUSE
===================================== */

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    createTrail(mouseX, mouseY);

});


/* =====================================
   SMOOTH MOVEMENT
===================================== */

function animate() {

    cursorX += (mouseX - cursorX) * 0.15;

    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";

    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animate);

}

animate();


/* =====================================
   COLORFUL TRAIL
===================================== */

// function createTrail(x, y) {

//     const trail = document.createElement("div");

//     trail.className = "trail";

//     trail.style.left = x + "px";

//     trail.style.top = y + "px";


//     // const colors = [
//     //     "#00eaff",
//     //     "#7c3cff",
//     //     "#ff3cac",
//     //     "#00ff88",
//     //     "#ffe600"
//     // ];

//     const colors = [
//         "white",
//         "white",
//         "white",
//         "white",
//         "white"
//     ];



//     const color =
//         colors[Math.floor(Math.random() * colors.length)];


//     trail.style.background = color;

//     trail.style.boxShadow =
//         `0 0 8px ${color},
//          0 0 20px ${color}`;


//     document.body.appendChild(trail);


//     setTimeout(() => {

//         trail.remove();

//     }, 1000);

// }

function createTrail(x, y) {
    const trail = document.createElement("div");

    trail.className = "trail";
    trail.innerHTML = "❄";

    trail.style.left = x + "px";
    trail.style.top = y + "px";

    // Random snowflake size
    const size = Math.random() * 15 + 15;
    trail.style.fontSize = size + "px";

    // Random rotation
    trail.style.setProperty(
        "--rotation",
        Math.random() * 360 + "deg"
    );

    // Random horizontal movement
    trail.style.setProperty(
        "--moveX",
        (Math.random() - 0.5) * 80 + "px"
    );

    // Random vertical movement
    trail.style.setProperty(
        "--moveY",
        Math.random() * 100 + 50 + "px"
    );

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 8500);
}

skill_box.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        skill_show.forEach((show, ind) => {
            show.classList.remove('showed');
        })
        skill_show[index].classList.add('showed');
    })
});
var projects = document.querySelectorAll('.project_lists .projects');

var indicators = document.querySelectorAll('.project_indicators button');
indicators.forEach((indicator, index) => {
    indicator.addEventListener('mouseover', () => {
        indicators.forEach(indi => {
            indi.classList.remove('active');
        })
        projects.forEach((project, ind) => {
            project.classList.remove('showed');
        })
        projects[index].classList.add('showed');
        indicator.classList.add('active');
    })
});

var project_imgs = document.querySelectorAll('.projects .iimmgg');

project_imgs.forEach((imgs, index) => {
    imgs.addEventListener('click', () => {
        imgs.nextElementSibling.style.transform = 'scale(1)';
    })
})

var project_about_page_close = document.querySelectorAll('.project_about_page_close');
project_about_page_close.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.style.transform = 'scale(0)';
    })
})

// pages :-
var about = document.querySelector('.about');
var skills = document.querySelector('.skills');
var project = document.querySelector('.project');
var contact = document.querySelector('.contact');

// nav_btns :-
var about_btn = document.querySelector('.about_btn');
var skill_btn = document.querySelector('.skill_btn');
var project_btn = document.querySelector('.project_btn');
var contact_btn = document.querySelector('.contact_btn');

//close btns :-
var about_close = document.querySelector('.about_close');
var project_close = document.querySelector('.project_close');
var skill_close = document.querySelector('.skill_close');
var contact_close = document.querySelector('.contact_close');

//pages open scripts :-
about_btn.addEventListener('click', () => {
    about.classList.add('open')
})
skill_btn.addEventListener('click', () => {
    skills.classList.add('open')
})
project_btn.addEventListener('click', () => {
    project.classList.add('open')
})
contact_btn.addEventListener('click', () => {
    contact.classList.add('open')
})

// close btns scripts :-
about_close.addEventListener('click', () => {
    about.classList.remove('open');
})
skill_close.addEventListener('click', () => {
    skills.classList.remove('open');
})
project_close.addEventListener('click', () => {
    project.classList.remove('open');
})
contact_close.addEventListener('click', () => {
    contact.classList.remove('open');
})

var change_setting = document.querySelector('.change_setting');
var change = document.querySelector('.change');
var bi = document.querySelector('.change .bi');


change.addEventListener('click', () => {
    if (bi.classList.contains("bi-gear-fill")) {
        bi.classList.remove("bi-gear-fill");
        bi.classList.add('bi-x-square');
        change_setting.classList.add('set');

        menu_bi.classList.remove('bi-x-square');
        menu_bi.classList.add('bi-list');
        mobile_menu_back.classList.remove('showed');
    } else {
        bi.classList.remove("bi-x-square");
        bi.classList.add("bi-gear-fill");
        change_setting.classList.remove('set');
    }
})

var backblack_colorback = document.querySelectorAll('.page ,.project_about_page ,.project_about_page ,.project_indicators button,.home_content_btns button a ,.project_about_page_close');

var colorblack_backyellow = document.querySelectorAll('.nav ,.about_close ,.skill_close ,.project_close ,.contact_close ,.about p ,.bar_outter .bar_inner ,.contact_submit_btn,.resume_btn,.menus button ,.mobile_menu_list');

var border_yellow = document.querySelectorAll('.home_content_btns button a,.img_content .img_back,.skill_box,.project_indicators button,.change_btn_back');

// add yellow content ................................
backblack_colorback.forEach(value => {
    value.classList.add('add_backblack_colorback');
})
colorblack_backyellow.forEach(value => {
    value.classList.add('add_colorblack_backyellow');
})

border_yellow.forEach(value => {
    value.classList.add('add_border_yellow');
})

let white_close = document.querySelector('.white_close');
let purple_close = document.querySelector('.purple_close');
let red_close = document.querySelector('.red_close');

// add white background .........................

var white = document.querySelector('.white');

white.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.remove('add_border_yellow');
    });

    backblack_colorback.forEach(value => {
        value.classList.add('add_backwhite_colorblack');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorwhite_backblack');
    })

    border_yellow.forEach(value => {
        value.classList.add('add_border_black');
    })
    white_close.style.transform = 'scale(1)';

})
let white_close_btn = document.querySelector('.white_close span');
white_close_btn.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.add('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.add('add_border_yellow');
    });
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backwhite_colorblack');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorwhite_backblack');
    })

    border_yellow.forEach(value => {
        value.classList.remove('add_border_black');
    })
    white_close.style.transform = 'scale(0)';
})
// add purple background .........................

var purple = document.querySelector('.purple');

purple.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.remove('add_border_yellow');
    });

    backblack_colorback.forEach(value => {
        value.classList.add('add_backblack_colorpurple');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorblack_backpurple');
    })

    border_yellow.forEach(value => {
        value.classList.add('add_border_purple');
    })
    purple_close.style.transform = 'scale(1)';

})

let purple_close_btn = document.querySelector('.purple_close span');
purple_close_btn.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.add('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.add('add_border_yellow');
    });
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backblack_colorpurple');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorblack_backpurple');
    })

    border_yellow.forEach(value => {
        value.classList.remove('add_border_purple');
    })
    purple_close.style.transform = 'scale(0)';
})

var red = document.querySelector('.red');

red.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.remove('add_border_yellow');
    });

    backblack_colorback.forEach(value => {
        value.classList.add('add_backblack_colorred');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorblack_backred');
    })

    border_yellow.forEach(value => {
        value.classList.add('add_border_red');
    })
    red_close.style.transform = 'scale(1)';

})

let red_close_btn = document.querySelector('.red_close span');
red_close_btn.addEventListener('click', () => {
    backblack_colorback.forEach(value => {
        value.classList.add('add_backblack_colorback')
    });
    colorblack_backyellow.forEach(value => {
        value.classList.add('add_colorblack_backyellow');
    });

    border_yellow.forEach(value => {
        value.classList.add('add_border_yellow');
    });
    backblack_colorback.forEach(value => {
        value.classList.remove('add_backblack_colorred');
    })
    colorblack_backyellow.forEach(value => {
        value.classList.remove('add_colorblack_backred');
    })

    border_yellow.forEach(value => {
        value.classList.remove('add_border_red');
    })
    red_close.style.transform = 'scale(0)';
})

var mobile_menu_back = document.querySelector('.mobile_menu_back');

var burger_menu = document.querySelector('.burger_menu');
var menu_bi = document.querySelector('.burger_menu .bi');
// -----------------
burger_menu.addEventListener('click', () => {
    if (menu_bi.classList.contains('bi-list')) {
        menu_bi.classList.remove('bi-list');
        menu_bi.classList.add('bi-x-square');
        mobile_menu_back.classList.add('showed');

        bi.classList.remove("bi-x-square");
        bi.classList.add("bi-gear-fill");
        change_setting.classList.remove('set');
    } else {
        menu_bi.classList.remove('bi-x-square');
        menu_bi.classList.add('bi-list');
        mobile_menu_back.classList.remove('showed');
    }
})
var mobile_menu_about = document.querySelector('.mobile_menu_about');
var mobile_menu_skill = document.querySelector('.mobile_menu_skill');
var mobile_menu_project = document.querySelector('.mobile_menu_project');
var mobile_menu_contact = document.querySelector('.mobile_menu_contact');

mobile_menu_about.addEventListener('click', () => {
    about.classList.add('open');
});
mobile_menu_skill.addEventListener('click', () => {
    skills.classList.add('open');
});
mobile_menu_project.addEventListener('click', () => {
    project.classList.add('open');
});
mobile_menu_contact.addEventListener('click', () => {
    contact.classList.add('open');
});
