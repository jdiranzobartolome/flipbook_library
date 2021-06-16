
const flipbook_container = document.getElementById('flipbook-container');
const HTML_page_1 = `<div class="content">
                                <h1>Las aventuras de la selva</h1>
                                <h4>by</h4>
                                <h2>Babuino chukowsky</h2>
                                <h3>africa, 1238</h3>
                            </>`;

const HTML_page_2 = `<div class="flipbook__page flipbook__page--right" id="page-2">
<div class="content">
    <h1>Info</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cumque, cupiditate a quaerat quod, molestiae rerum numquam odio accusamus, praesentium ea magnam consequatur? Dicta voluptatem hic deserunt illo enim iusto cum, quis animi perferendis molestias sit consequatur vel deleniti minima quo similique fuga architecto consectetur atque! Dolor dolorem quae nam?</p>
</div>
</div>`

const HTML_page_3 = `<div class="flipbook__page flipbook__page--right" id="page-3">
<div class="content">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam deserunt modi animi facilis quam voluptates nulla vero officia quasi possimus.</p>
</div>
</div>`

const HTML_page_4 = `<div class="flipbook__page flipbook__page--right" id="page-4">
<div class="content">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam deserunt modi animi facilis quam voluptates nulla vero officia quasi possimus.</p>
</div>
</div>`

const HTML_page_5 = `<div class="flipbook__page flipbook__page--right" id="page-5">
<div class="content">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam deserunt modi animi facilis quam voluptates nulla vero officia quasi possimus.</p>
</div>
</div>`
const HTML_pages = [HTML_page_1, HTML_page_2, HTML_page_3, HTML_page_4, HTML_page_5];

(async function() {
    const flipbook_el = await flipbook(flipbook_container, HTML_pages);
})();
