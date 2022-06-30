// TODO: make it run this script when start the seleceted web like [dark reader (ext)]
/*
* for test on paste:
document.body.innerHTML = document.body.innerHTML.replace(/ / g, "");
document.body.innerHTML.match(//g);
*/
function replacing
    (doc) {
    doc = pre_replace(doc);
    doc = ordinal_number(doc);
    // doc = partition(doc);
    doc = quote_symbol(doc);
    doc = japanese_quote_symbol(doc);
    doc = ellipsis(doc);
    doc = stutter(doc);
    doc = exclamation(doc);
    doc = unreadablize(doc);
    doc = wording(doc);
    doc = post_arrangement(doc)
    return doc;
}
function pre_replace
    (doc) {
    return doc
        // remove abrr tag
        .replace(/<abbr .+>(\w+)<\/abbr>/g, "<i>$1</i>")
        // delete dupulicate
        .replace(/[\s]+|(&nbsp;)+/g, " ")
        // dash
        .replace(/[─]+/g, "─")
        .replace(/\.[\-—–―]+,*/g, "–")
        .replace(/!+/g, "!")
        .replace(/[~～〜]+/g, "〜")
        .replace(/：/g, ": ")

        .replace(/ \.|·/g, ".")
        .replace(/\.\(|\. \(/g, "(")
        .replace(/\",/g, '" ,')
        .replace(/]\.\'/g, "]. '")

        .replace(/!\./g, "!")
        .replace(/\?!/g, "!?")
        .replace(/\?\./g, "?")
        .replace(/\.]/g, "]")
        // easy to read with just short (–)
        .replace(/([\wé])–([\wé])/g, "$1–$2")
        .replace(/([\wé])–([\wé])/g, "$1–$2")
        .replace(/([\wé])–([\wé])/g, "$1–$2")
        // for easy to read number
        .replace(/([0-9])([A-Z|a-z])/g, "$1 $2")
        .replace(/『 [0-9] 』/g, "⋆ ")
        // symbol without space
        .replace(/([’'A-z][A-z]+)([,.!?])([A-z][A-z]*)([^>]*<)/g, "$1$2 $3$4")
        // .replace(/([’'A-z][A-z]+)([,.!?])([A-z][A-z]*)/g, "$1$2 $3")
        .replace(/If you are reading this anywhere [^<>]+ com\./g, '')
        ;
}
function post_arrangement
    (doc) {
    return doc
        // new line to paragraph
        .replace(/<br>/g, "</p><p>")
        // remove the space between quote symbol
        .replace(/([「【（『])\s+([「【（『])/g, "$1$2")
        .replace(/([」】）』])\s+([」】）』])/g, "$1$2")
        .replace(/([「【（『])\s+([「【（『])/g, "$1$2")
        .replace(/([」】）』])\s+([」】）』])/g, "$1$2")
        .replace(/([「【（『])\s+([「【（『])/g, "$1$2")
        .replace(/([」】）』])\s+([」】）』])/g, "$1$2")
        .replace(/([「【（『])\s+([「【（『])/g, "$1$2")
        .replace(/([」】）』])\s+([」】）』])/g, "$1$2")
        // delete pseudo table
        .replace(/([^─])(\s*<\/p><p>│\s*\w+:\s+)/g, "$1, $2")
        .replace(/(─\s*<\/p>)<p>│|<p>│(\s*[【•※])/g, "$1<p>$2")
        .replace(/┌|(<\/p><p>)*│/g, " ")
        .replace(/([A-z])–([A-z])/g, "$1-$2")
        ;
}
function ellipsis
    (doc) {
    return (
        doc
            .replace(/…\s*[…\.]+|(\.(\s*\.+)+)/g, "…")
            // arrangement of ellipsis(…)
            .replace(/([\wé]) …( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/g, "$1…$2")
            .replace(/( |\?|\!|\.|,|…|\"|\'|\)|\(|\>)… ([\wé])/g, "$1…$2")
            .replace(/(\w) (…|… )([^\w\s])/g, "$1… $3")
            .replace(/([^\w\s])(…| …) (\w)/g, "$1 …$3")
            .replace(/([\?\!])(…| …)([^\w])/g, "…$1 $3")
            .replace(/([A-Z])\s*…\s*([a-z])/g, "$1… $2")
            .replace(/([a-z])\s*…\s*([A-Z])/g, "$1… $2")
            .replace(/([a-z])\s*…\s*([a-z])/g, "$1… $2")
    );
}
function partition
    (doc) {
    return (
        doc
            // solid hr
            .replace(/<hr>/g, '<hr class="solid">')
            // partition
            .replace(
                /<(p|span)>([\?\!\*\s\-\._…—–―─━~〜◇◆⍚#└│]+|–o–|&amp;|&nbsp;)<\/(p|span)>/g,
                '<hr class="solid">')
            // delete double partition
            .replace(
                /(hr class=\"solid\">)([\n\s]*<hr class=\"solid\">)+/g,
                '<hr class="solid">')
    );
}
function wording
    (doc) {
    return (
        doc
            // please read what it stand for
            .replace(/PDA/g, "LoveLove")
            .replace(/FL/g, "Female Lead")
            .replace(/ML/g, "Male Lead")
            .replace(/ASAP/g, "as soon as possible")
            // no. to number
            .replace(/([^\w])[Nn]o\. ([0-9])/g, "$1Number $2")

            // Korean
            .replace(/ Ja | Ja,/g, " Jah ")
            .replace(/-gi/g, "-gai")
            .replace(/Bae([ |?|!|\.|,|…])/g, "Baer$1")
            .replace(/Gyeoul/g, "Yon-gya")
            .replace(/hwi/g, "wee")
            .replace(/hye/g, "hee")
            .replace(/Hye/g, "Hee")
            .replace(/Jitae/g, "Jin-ho")
            .replace(/Kaeul/g, "Kya-eunl")
            .replace(/Sanagi/g, "Sa-na-gi")
            .replace(/([Gg]ong\-nyuh)/g, "Duke's Daughter") //! I cannot replace this (╯︵╰,)
            .replace(/Se-/g, "See-")
            .replace(/Seo| seo|-seo/g, "So")
            .replace(/[Ss]eok/g, "Sok")
            .replace(/seodam|Seodam/g, "Seo-dam")
            .replace(/Sunyoung/g, "Sun-young")
            .replace(/Tae Ho/g, "Jin-ho")
            .replace(/Yeorum/g, "Yo-rum")
            // .replace(/Su-hyeun/g, "Jin-woo")
            // .replace(/yeon/g, "-yon")
            // Western
            .replace(/ ([A-Z])\- ([Rank|rank|Tier|tier])/g, " $1-Minus $2")
            .replace(/ ([A-Z])\+ ([Rank|rank|Tier|tier])/g, " $1-Plus $2")
            .replace(/([^\w])([Ll][Vv][Ll]*)([\s\.]*)([0-9])/g, "$1Level $4")
            .replace(/Aracelli/g, "Aracellia")
            .replace(/Gewalt/g, "Greywalt")
            .replace(/b[*–]tch|B[*–]tch/g, "Bitch")
            .replace(/bast[*–]rd|Bast[*–]rd/g, "Bastard")
            .replace(/Creare/g, "Clare")
            .replace(/Csille/g, "Callie")
            .replace(/f[*–]ck|F[*–]ck|f[*–]ck|F[*–]ck/g, "Fuck")
            .replace(/Imeraria/g, "Maria")
            .replace(/Kreuz/g, "Kruz")
            .replace(/Ma'am|ma'am|Ma’am|ma’am/g, "Madam")
            .replace(/Mia([ |?|!|\.|,|…])/g, "Miah$1")
            .replace(/Rey/g, "Ray")
            .replace(/Roel/g, "Ro–el")
            .replace(/Runegear/g, "Rune-gear")
            .replace(/Sh[*–]t|sh[*–]t/g, "Shit")
            .replace(/Snoc/g, "Noc")
            .replace(/Sylv/g, "Silv")
            .replace(/Taci/g, "Tashi")
            .replace(/Rino([^A-Za-z])/g, "Rinola$1")
            .replace(/Noa([^A-Za-z])/g, "Noah$1")
            .replace(/Yekaterina/g, "Katerina")
            // JP Name
            .replace(/[G|g]oshujin-sama/g, "Master")
            .replace(/Ganbatte|Ganbattene/g, "Do your best")
            .replace(/Hifumi/g, "Hiro")
            .replace(/Mylene/g, "Malena")
            .replace(/(([Nn]|[Oo]n)ii|[Aa]n)–*(san|sama|chan)/g, "Big–Bro")
            .replace(/[Ii]mouto/g, "Little-Sis")
            .replace(/[Kk]aa–*(san|sama|chan)/g, "Mom")
            .replace(/[Oo](c|jii)–*(san|sama|chan)/g, "Gramps")
            .replace(/otome game|Otome game/g, "Romance game")
            .replace(/Shahata/g, "Shaha")
            .replace(/Soujiro/g, "Shojeero")
            .replace(/Souma|Soma/g, "Shoma")
            .replace(/Yoash/g, "Yohan")
            .replace(/Shinichi/g, "Shin")
            .replace(/Seiji/g, "Sayji")
            .replace(/Arakawa/g, "Araka-wa")
            .replace(/Kouki/g, "Koki")
            .replace(/Kou([^\w])/g, "Kho$1")
    );
}
function unread
    (text) {
    return `<span aria-hidden="true" >${text}</span>`;
}
function unreadablize
    (doc) {
    return (
        doc
            // unreadablize chapter name
            .replace(/([Ee]pisode|[Cc]hapter)(\s*[0-9]+[^<>]*)</g, `${unread('$1$2')}<`)
            // unreadablize inside bracket()
            .replace(/(\([^()]+\))/g, `${unread('$1')}`)
            // unreadablize name front quote
            .replace(/(>\s*)([A-Z][\wé]*:)/g, `$1${unread('$2')}`)
            // unreadablize silent symbol
            .replace(/([「][^\w]+[」])/g, `${unread('$1')}`)
            // unreadablize these symbol
            // .replace(/(\s[^\w][^\w][^\w]+\s)/g, `${unread('$1')}`)
            .replace(/([†♱*\$#]+)([^>]*<)/g, `${unread('$1')}$2`)
            // only number
            .replace(/(<p>)([0-9\s])(<\/p>)/g, `$1${unread('$2')}$3`)
            .replace(/([A-z])\/([A-z])([^>]*<)/g, `$1${unread('\/')}$2$3`)
            // unreadablize dot near quote symbol
            .replace(/\.([」】）』「【（『])/g, `.${unread('$1')}`)
            .replace(/([」】）』「【（『])\./g, `${unread('$1')}.`)
    );
}
function stutter
    (doc) {
    return (
        doc
            // stutter
            .replace(/((?![\w’']).)((?![aiueoAIUEO])[A-z]|[WwTt]h)[,…─\-–〜](\s*)([A-z])/g, "$1$2ah-$4")
            .replace(/((?![\w’']).)((?![aiueoAIUEO])[A-z]|[WwTt]h)[,…─\-–〜](\s*)([A-z])/g, "$1$2ah-$4")
            .replace(/((?![\w’']).)([aiueoAUEO])[,…─\-–〜](\s*)([A-z])/g, "$1$2h-$4")
            .replace(/((?![\w’']).)([aiueoAUEO])[,…─\-–〜](\s*)([A-z])/g, "$1$2h-$4")
        // .replace(/((?![\w’']).)(I)[,…─\-–〜](\s*)([A-z])/g, "$1$2-$4")
        // .replace(/((?![\w’']).)(I)[,…─\-–〜](\s*)([A-z])/g, "$1$2-$4")
        // .replace(/(\s)(I)[,…─\-–〜](\s*)([A-z])/g, "$1$2-$4")
    );
}
function exclamation
    (doc) {
    return (
        doc
            // exclamation sound
            .replace(/([^\w.])(nn|N)([^\w])/g, "$1Neun$3")
            .replace(/Aa([〜|,|!|?])/g, "Ah$1")
            .replace(/Ahk/g, "Ahhk")
            .replace(/Aht/g, "Ahhk")
            .replace(/Ara([^\w])/g, "Ahh$1")
            .replace(/Ngh([^\w])/g, "Nguh$1")
            .replace(/[Pp]ikon/g, "Ahah")
            .replace(/(Etto|Ano)([^\w])/g, "Uhh$2")
            // [^\w\s] = not in \w, not in \s
            .replace(/Ee([^\w])/g, "Eh$1")
            .replace(/Aa([^\w])/g, "Ah$1")
            .replace(/(Mm-hmm|Mmmhmm|Mmhmm| mmmhmm| mmhmm|Mhm)([ |?|!|\.|,|…])/g, "Uh-huh$2")
            .replace(/Hmpf|Hmph|Hmhm|Mhh|Hn/g, "Hmm")
            .replace(/(Hm|[^\w]hm)([^\w])/g, "Hmm$2")
            .replace(/Kreuk|Keuk|Kuek/g, "Kwuk")
            .replace(/[K|k]euck/g, "Kheck")
            .replace(/Krr|krr/g, "Karr")
            .replace(/Keugh|keugh/g, "Kugh")
            .replace(/(Mm+|Mmhm|mmhm)([^\w])/g, "Mmm$2")
            .replace(/Nn/g, "Neun")
            .replace(
                /([^\w])([Pp]w*f+t+f*|[Pp]ff+t*f*)([^\w])/g,
                "$1Pfft$3"
            )
            .replace(/Seug/g, "Shug")
            .replace(/([^\w])([Tt]sk|[Tt]ch|[Cc]k)([^\w])/g, "$1Shi$3")
            .replace(/Un([?|!|\.|,|…])/g, "Eun$1")
    );
}
function quote_symbol
    (doc) {
    return (
        doc
            // Quote symbol
            .replace(/“/g, " “")
            .replace(/”/g, "” ")
            .replace(/  /g, " ")
            .replace(/``/g, '"')
            // .replace(/``|“|”/g, "\"")
            .replace(/\"\. /g, '." ')
            // in paragraph quote init
            .replace(/([\s>])\"([^\s<])/g, "$1“$2")
            .replace(/([^\s>]|[!?.]\s*)\"([\s<])([^>]*<)/g, "$1”$2$3")
            .replace(/([\s>])\'([^\s>])/g, "$1‘$2")
            .replace(/([^\s<])\'([\s<])/g, "$1’$2")

            // except Apostrophe
            .replace(/([A-Z]|[a-z])’([A-Z]|[a-z])/g, "$1APosTroPhe$2")
            .replace(/([A-Z]|[a-z])‘([A-Z]|[a-z])/g, "$1APosTroPhe$2")
            // .replace(/s’ /g, "sAPosTroPhes ")
            // .replace(/ ‘|‘/g, "『 ")
            // .replace(/’|’ /g, " 』")
            // .replace(/APosTroPhe/g, "’")
            .replace(/APosTroPhe/g, "\'")
    );
}
var double_close_quote, double_open_quote, single_open_quote, single_close_quote;
function count_quote_symbol
    () {
    try {
        double_open_quote = document.body.innerHTML.match(/“/g).length;
    } catch {
        double_open_quote = 0
    }
    try {
        double_close_quote = document.body.innerHTML.match(/”/g).length;
    } catch {
        double_close_quote = 0
    }
    try {
        single_open_quote = document.body.innerHTML.match(/‘/g).length;
    } catch {
        single_open_quote = 0
    }
    try {
        single_close_quote = document.body.innerHTML.match(/’[^A-z]/g).length;
    } catch {
        single_close_quote = 0
    }
    console.log("double:", double_close_quote, double_open_quote, "single:", single_open_quote, single_close_quote);
}
function japanese_quote_symbol
    (doc) {

    // doc = doc.replace(/“/g, "「 ").replace(/”/g, " 」");

    // // ! need to change all [Apostrophe] to (') first, otherwise it count as [single_close_quote]
    // mainly use english quote symbol ("")
    let sum_double_quote = double_open_quote + double_close_quote;
    let sum_single_quote = single_open_quote + single_close_quote;
    if ((sum_double_quote) > (sum_single_quote) || sum_double_quote + sum_single_quote == 0) {
        doc = doc.replace(/“/g, "「 ").replace(/”/g, " 」");
    } else {
        doc = doc.replace(/‘/g, "「 ").replace(/’/g, " 」");
    }
    doc = doc
        .replace(/\[/g, "『 ")
        .replace(/\]/g, " 』")

        // .replace(/\[/g, "「 ")
        // .replace(/\]/g, " 」")
        // .replace(/“/g, "『 ")
        // .replace(/”/g, " 』")

        // .replace(/\)/g, " ）")
        // .replace(/\(/g, "（ ")
        // space managing
        .replace(/([「【（『])/g, "$1 ")
        .replace(/([」】）』])/g, " $1")
        .replace(/ ([「【（『])/g, "$1")
        .replace(/([」】）』]) /g, "$1")
        .replace(/( [」】）』])([\'’]s)/g, "$2$1")
        .replace(/  」…/g, " 「 …")
    // .replace(/([\w]) ([」】）』])([^\w])/g, "$1. $2$3")
    return doc;
}
function ordinal_number
    (doc) {
    return doc
        .replace(/([2-9])([1-9])\s*(st|nd|rd|th)/g, "$10 $2$3")
        .replace(/(11\s*th)([^\w])/g, "Eleventh$2")
        .replace(/(12\s*th)([^\w])/g, "Twelfth$2")
        .replace(/(13\s*th)([^\w])/g, "Thirteenth$2")
        .replace(/(14\s*th)([^\w])/g, "Fourteenth$2")
        .replace(/(15\s*th)([^\w])/g, "Fifteenth$2")
        .replace(/(16\s*th)([^\w])/g, "Sixteenth$2")
        .replace(/(17\s*th)([^\w])/g, "Seventeenth$2")
        .replace(/(18\s*th)([^\w])/g, "Eighteenth$2")
        .replace(/(19\s*th)([^\w])/g, "Nineteenth$2")
        .replace(/(1\s*st)([^\w])/g, "First$2")
        .replace(/(2\s*nd)([^\w])/g, "Second$2")
        .replace(/(3\s*rd)([^\w])/g, "Third$2")
        .replace(/(4\s*th)([^\w])/g, "Fourth$2")
        .replace(/(5\s*th)([^\w])/g, "Fifth$2")
        .replace(/(6\s*th)([^\w])/g, "Sixth$2")
        .replace(/(7\s*th)([^\w])/g, "Seventh$2")
        .replace(/(8\s*th)([^\w])/g, "Eighth$2")
        .replace(/(9\s*th)([^\w])/g, "Ninth$2")
        .replace(/(10\s*th)([^\w])/g, "Tenth$2")
        ;
}
function hide_all_except
    (children, except) {
    for (let i = 0; i < children.length; i++) {
        if (children[i] != except) hide(children[i]);
    }
}
function hide_all
    (children) {
    for (let i = 0; i < children.length; i++) {
        hide(children[i]);
    }
}
function hide
    (doc) {
    doc.style.display = "none";
}
function show
    (doc) {
    doc.style.display = "block";
}
function styling
    (doc) {
    let newStyle = doc.createElement("style");
    newStyle.innerHTML =
        `body {
            background-color: #1F2022;
            color: wheat;
            font-family: "Arial" !important;
            font-size: 25px !important;
            line-height: 1.3 !important;
            margin-bottom: 100px !important;
            margin-left: calc(33% - 100px) !important;
            margin-right: calc(33% - 100px) !important;
            margin-top: 100px !important;
            text-align: left;
        }
        p {
            margin-top: 1em !important;
            margin: 0 0 1em !important;
            padding-bottom: 0rem !important;
            text-align: left;
            text-indent: 0pt !important;
        }`
        ;
    doc.head.appendChild(newStyle);
}
function allnovelfull
    () {
    const content = document.getElementById("chapter-content").cloneNode(true);
    const title = document.getElementsByTagName("title")[0].cloneNode(true);
    const html = document.getElementsByTagName('html')[0];
    // cleaning other text
    clear_html();
    const body = document.body;
    // remove element style
    content.removeAttribute('style');
    // add title
    html.appendChild(title);
    // set margin and font
    styling(document);
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // show only content
    hide_all(body.children);
    add_child(body, content);

}
function add_child
    (parent, child) {
    parent.appendChild(child);
}
function infinitenoveltranslations
    () {
    styling(document);
    const parent = document.getElementsByTagName("body")[0];
    const content = document.getElementsByClassName("entry-content")[0];
    const image = content.getElementsByTagName("img")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const a_tags = content.getElementsByTagName("a");
    const title = document.getElementsByTagName("title")[0];
    // navigator with arrow key
    if (a_tags != null) {
        const next_chapter = a_tags[a_tags.length - 1].href;
        if (a_tags.length >= 3) var prev_chapter = a_tags[a_tags.length - 3].href;

        document.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") location = next_chapter;
            if (e.key === "ArrowLeft" && a_tags.length >= 3) location = prev_chapter;
        });
    }
    // clean title text
    document.getElementsByClassName("entry-title")[0].innerHTML = "";
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // add unread title
    content.innerHTML =
        '<span aria-hidden="true" >' +
        title.innerHTML +
        "</span><hr>" +
        content.innerHTML;
    // fix broken image tag
    if (image != null)
        content.innerHTML = content.innerHTML.replace(
            /<img .+\">/g,
            image.outerHTML
        );
    // remove footer which readable
    if (footer != null) footer.remove();
    // show only content
    if (parent.children[0].style.display != "none") {
        hide_all(parent.children);
        add_child(parent, content);
        hide(content.children[2]);
        hide(content.children[content.children.length - 2]);
    }
}
function process
    (parent_name, target_name, content_name) {
    const parent = document.getElementById(parent_name);
    const target = document.getElementsByClassName(target_name)[0];
    const content = document.getElementById(content_name);

    // replacing
    content.innerHTML = replacing(content.innerHTML);

    if (parent.children[0].style.display != "none") {
        hide_all(parent.children);
        add_child(parent, target);
        hide_all_except(target.children, content);
    }
}
function outerHTML_of_
    (target) {
    var array = [];
    for (i = 0; i < target.length; i++) {
        array.push(target[i].outerHTML);
    }
    return array;
}
function delay
    (time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function epub_reader
    () {
    const frame = document.getElementById('content_frame');
    const doc = frame.contentWindow.document;
    // key detect
    doc.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            console.log("<-");
            delay(500).then(() => epub_reader());
        }
        if (e.key === "ArrowRight") {
            console.log("->");
            delay(500).then(() => epub_reader());
        }
    });
    // skip only image page //? load image error
    if (doc.body.className == 'nomargin center' || doc.body.getElementsByClassName('image_full').length > 0) return;

    var content
    try {
        content = frame.contentWindow.document.getElementsByClassName('main')[0];
    } catch (error) {
        content = frame.contentWindow.document.body;
    }

    styling(doc);

    const img = content.getElementsByTagName("img");
    const img_o = outerHTML_of_(img);

    const h1 = content.getElementsByTagName("h1");
    const h1_o = outerHTML_of_(h1);

    const ul = content.getElementsByTagName("ul");
    const ul_o = outerHTML_of_(ul);

    content.innerHTML = replacing(content.innerHTML);

    for (let index = 0; index < img.length; index++) {
        content.innerHTML = content.innerHTML.replace(img[index].outerHTML, img_o[index]);
    }

    for (let index = 0; index < ul.length; index++) {
        content.innerHTML = content.innerHTML.replace(ul[index].outerHTML, ul_o[index]);
    }
    for (let index = 0; index < h1.length; index++) {
        content.innerHTML = content.innerHTML.replace(h1[index].outerHTML, h1_o[index]);
    }
    // error image to line partition
    let ext = doc.getElementsByClassName("ext_ch");
    for (let i = 0; i < ext.length; i++) {
        ext[i].innerHTML = '<hr>'
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function clear_html
    () {
    const html = document.getElementsByTagName('html')[0];
    const head = document.createElement('head');
    const body = document.createElement('body');
    removeAllChildNodes(html);
    html.appendChild(head);
    html.appendChild(body);
}
function pandanovel
    () {
    const content = document.getElementById("novelArticle1").cloneNode(true);
    const title = document.getElementsByTagName("title")[0].cloneNode(true);
    const prev_chapter = document.getElementsByClassName("btn btn-prev")[0].href;
    const next_chapter = document.getElementsByClassName("btn btn-next")[0].href;
    const html = document.getElementsByTagName('html')[0];
    // cleaning other text
    clear_html();
    const body = document.body;
    // add title
    html.appendChild(title);
    // set margin and font
    styling(document);
    // navigator with arrow key
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") location = next_chapter;
        if (e.key === "ArrowLeft") location = prev_chapter;
    });
    // add unread title
    content.innerHTML = `<span aria-hidden="true" > ${title.innerHTML} </span> <hr> ${content.innerHTML}`;
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // show only content
    hide_all(body.children);
    add_child(body, content);
}
function freewebnovel
    () {
    const content = document.getElementsByClassName("txt ")[0].cloneNode(true);
    const title = document.getElementsByTagName("title")[0].cloneNode(true);
    const prev_chapter = document.getElementById("prev_url").href;
    const next_chapter = document.getElementById("next_url").href;
    const html = document.getElementsByTagName('html')[0];
    // cleaning other text
    clear_html();
    const body = document.body;
    // remove element style
    content.removeAttribute('style');
    // add title
    html.appendChild(title);
    // set margin and font
    styling(document);
    // navigator with arrow key
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") location = next_chapter;
        if (e.key === "ArrowLeft") location = prev_chapter;
    });
    // add unread title
    content.innerHTML = `<span aria-hidden="true" > ${title.innerHTML} </span> <hr> ${content.innerHTML}`;
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // show only content
    hide_all(body.children);
    add_child(body, content);
}
function towelcitytown
    () {
    const body = document.body;
    const content = document.getElementsByClassName("entry-content")[0].children[0].cloneNode(true);
    const title = document.getElementsByTagName("title")[0].innerHTML;
    const prev_chapter = document.getElementsByClassName("nav-previous")[0].children[0].href;
    const next_chapter = document.getElementsByClassName("nav-next")[0].children[0].href;
    // set margin and font
    styling(document);
    // cleaning other text
    body.innerHTML = ''
    // navigator with arrow key
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") location = next_chapter;
        if (e.key === "ArrowLeft") location = prev_chapter;
    });
    // add unread title
    content.innerHTML = `<span aria-hidden="true" > ${title} </span> <hr> ${content.innerHTML}`;
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // show only content
    hide_all(body.children);
    add_child(body, content);
}
function add_reset_script
    () {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
    function reset() {
       document.getElementsByTagName('html')[0].innerHTML = \`${document.getElementsByTagName('html')[0].innerHTML}\`;
    }`;
    document.head.appendChild(script);
}
function add_format_script
    () {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
    function format() {
       document.getElementsByTagName('html')[0].innerHTML = \`${document.getElementsByTagName('html')[0].innerHTML}\`;
    }`;
    document.head.appendChild(script);
}
function diff
    (A, B) {
    return A.filter(x => !B.includes(x));
}
function full_html_from_epub
    () {
    styling(document);
    let excepts = [
        ...document.getElementsByTagName('img'),
        ...document.getElementsByTagName('nav')
    ].map(e => e.parentElement);

    let contents = [
        ...document.getElementsByClassName('calibre'),
        ...document.getElementsByClassName('calibre1'),
        ...document.getElementsByClassName('class_s1k'),
        ...document.getElementsByClassName('class_s3s'),
        ...document.getElementsByClassName('western'),
    ];
    contents = diff(contents, excepts);

    for (let index = 0; index < contents.length; index++) {
        const content = contents[index];
        content.innerHTML = replacing(content.innerHTML);
    }
    document.body.innerHTML = document.body.innerHTML.replace(/([✽†♱*\$]+)/g, `${unread('$1')}`);
}

function meguminovel
    () {
    styling(document);
    const parent = document.getElementsByTagName("body")[0];
    const content = document.getElementsByClassName("thecontent")[0];
    hide_all(parent.children);
    add_child(parent, content);
}

function main
    () {
    add_reset_script();
    count_quote_symbol();
    switch (window.location.hostname) {
        case 'ranobes.net':
            process("dle-content", "block story shortstory", "arrticle");
            break;
        case 'infinitenoveltranslations.net':
            infinitenoveltranslations();
            break;
        case 'towelcitytown.wordpress.com':
            towelcitytown();
            break;
        case 'allnovelfull.com':
            allnovelfull();
            break;
        case 'i.meguminovel.com':
            meguminovel();
            break;
        case 'freewebnovel.com':
            freewebnovel();
            break;
        case 'www.panda-novel.com':
            pandanovel();
            break;
        case 'jhhclmfgfllimlhabjkgkeebkbiadflb':
            epub_reader();
            break;
        case '':
            if (document.getElementById('novelArticle1')) {
                styling(document);
                document.body.innerHTML = replacing(document.body.innerHTML);
                return;
            }
            full_html_from_epub();
            break;
    }
    add_format_script();
}
main();
