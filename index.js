export const $ = (selector) =>
{
    const el = document.querySelector(selector)
    el.render = (html) => el.innerHTML = html
    el.inject = (html) => el.insertAdjacentHTML('beforeend', html)
    return el;
};

export const $$ = (selector) => return document.querySelectorAll(selector)
export const _ = msg => console.log(msg); // _('hello')
