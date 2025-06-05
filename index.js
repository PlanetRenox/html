const $ = (selector) =>
{
    const el = document.querySelector(selector)
    el.render = (html) => el.innerHTML = html
    el.inject = (html) => el.insertAdjacentHTML('beforeend', html)
    el.ontop = (html) => el.insertAdjacentHTML('beforebegin', html)
    return el;
};

const $$ = (selector) => { return document.querySelectorAll(selector)}
const _ = msg => console.log(msg); // _('hello')
