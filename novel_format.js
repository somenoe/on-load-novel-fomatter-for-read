// TODO: make it run this script when start the seleceted web like [dark reader (ext)]
// TODO: make test case for debug like other tech comp

function replacing(doc) {
    doc = pre_replace(doc);
    doc = ordinal_number(doc);
    doc = partition(doc);
    doc = quote_symbol(doc);
    doc = japanese_quote_symbol(doc);
    doc = ellipsis(doc);
    doc = stutter(doc);
    doc = stutter(doc);
    doc = stutter(doc);
    doc = unreadablize(doc);
    doc = exclamation(doc);
    doc = wording(doc);
    doc = post_arrangement(doc)
    return doc;
}

function pre_replace(doc) {
    return doc
        // remove abrr tag
        .replace(/<abbr .+>(\w+)<\/abbr>/g, "<i>$1</i>")
        // delete dupulicate
        .replace(/[\s]+|(&nbsp;)+/g, " ")
        // panda ads
        .replace(/ραꪒⅆα-ꪒꪫꪥꫀ​ꪶ|ραꪒⅆα ꪒꪫꪥꫀ​ꪶ​/gi, '')
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

function post_arrangement(doc) {
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

function ellipsis(doc) {
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

function partition(doc) {
    return (
        doc
            // solid hr
            .replace(/<hr>/g, '<hr class="solid">')
            // // partition
            .replace(
                /<(p|span)>([\?\!\*\s\-\._…—–―─━~〜◇◆⍚#└│]+|–o–|&amp;|&nbsp;)<\/(p|span)>/g,
                '<hr class="solid">')
            // delete double partition
            .replace(
                /(hr class=\"solid\">)([\n\s]*<hr class=\"solid\">)+/g,
                '<hr class="solid">')
    );
}

function wording(doc) {
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
            .replace(/Evileye/g, "Evil-Eye")
            .replace(/Gewalt/g, "Greywalt")
            .replace(/b[*–]tch|B[*–]tch/g, "Bitch")
            .replace(/bast[*–]rd|Bast[*–]rd/g, "Bastard")
            .replace(/Creare/g, "Clare")
            .replace(/Csille/g, "Callie")
            .replace(/f[*–]ck|F[*–]ck|f[*–]ck|F[*–]ck/g, "Fuck")
            .replace(/Imeraria/g, "Maria")
            .replace(/Kreuz/g, "Kruz")
            .replace(/Ma'am|ma'am|Ma’am|ma’am/g, "Madam")
            .replace(/Mia([^\w])/g, "Miah$1")
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
            .replace(/Yuuhi/g, "Yuna")
            .replace(/Cai( ?)/g, "Sia$1")
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
            .replace(/Ooal/g, "Oal")
            .replace(/Kouki/g, "Koki")
            .replace(/Kou([^\w])/g, "Kho$1")
    );
}

function unread(text) {
    return `<span aria-hidden="true" >${text}</span>`;
}

function unreadablize(doc) {
    return (
        doc
            // // chapter name
            // .replace(/(Episode|Chapter|Ch|Part)([\s.]*[0-9]+[^<>]*)</gi, `${unread('$1$2')}<`)
            // // inside bracket()
            // .replace(/(\([^()]+\))/g, `${unread('$1')}`)

            .replace(/(==+)/g, `${unread('$1')}`)
            // word in ()
            .replace(/(\([^) ]+\))/g, `${unread('$1')}`)
            // translate note
            .replace(/(『 T. N:[^』]+』)/g, `${unread('$1')}`)
            .replace(/(\(T.N[^)]+\))/g, ` ${unread('$1')}`)
            // name front quote
            .replace(/(>\s*)([A-Z][\wé]*:)/g, `$1${unread('$2')}`)
            // silent symbol
            .replace(/([「][^\w]+[」])/g, `${unread('$1')}`)
            // these symbol
            // .replace(/(\s[^\w][^\w][^\w]+\s)/g, `${unread('$1')}`)
            .replace(/([■–†♱*•\$#]+)([^>]*<)/g, `${unread('$1')}$2`)
            // only number
            .replace(/(<p>)([0-9\s])(<\/p>)/g, `$1${unread('$2')}$3`)
            // slash to false slash
            .replace(/([A-z])\/([A-z])([^>]*<)/g, `$1 &frasl; $2$3`)
        // // dot near quote symbol
        // .replace(/\.([」】）』「【（『])/g, `.${unread('$1')}`)
        // .replace(/([」】）』「【（『])\./g, `${unread('$1')}.`)
    );
}

function stutter(doc) {
    return (
        doc
            // target: ' d-d', ' f-f', ' ch-ch', ' wh-wh', '…th-th', '“C-C', '“G-G',
            .replace(/([^\w’'])((?![aiueoAIUEO])[B-z][thr]?)[,…─\-–〜](\s*)\2/gi, "$1$2ah-$2")
            .replace(/([^\w’'])([aueoAUEO])[,…─\-–〜](\s*)\2/gi, "$1$2h-$2")
    );
}

function exclamation(doc) {
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
            .replace(/([^\w])(Mm-hmm|Mmmhmm|Mmhmm|mmmhmm|mmhmm|Mhm)([ |?|!|\.|,|…])/g, "$1Uh-huh$3")
            .replace(/Hmpf|Hmph|Hmhm|Mhh|Hn/g, "Hmm")
            .replace(/([^\w])(Hr*m+)([^\w])/gi, "$1Hmm$3")
            .replace(/Kreuk|Keuk|Kuek/g, "Kwuk")
            .replace(/[K|k]euck/g, "Kheck")
            .replace(/Krr|krr/g, "Karr")
            .replace(/Keugh|keugh/g, "Kugh")
            .replace(/([^\w])(M+r+f+|m+h*m+)([^\w])/gi, "$1Mmm$3")
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

function quote_symbol(doc) {
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
            .replace(/([^\s>]|[!?.]\s*)\"(\s*[^>]*<)/g, "$1”$2")
            .replace(/([^\s>]|[!?.]\s*)\"(\s*[^>]*<)/g, "$1”$2")
            .replace(/([\s>])\'([^\s>])/g, "$1‘$2")
            .replace(/([^\s<])\'([\s<])/g, "$1’$2")
            // Apostrophe
            .replace(/([A-z])[‘']([A-z])/g, "$1’$2")
    );
}
let double_close_quote, double_open_quote, single_open_quote, single_close_quote;
function count_quote_symbol() {
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

function japanese_quote_symbol(doc) {

    // doc = doc.replace(/“/g, "「 ").replace(/”/g, " 」");

    // // ! need to change all [Apostrophe] to (') first, otherwise it count as [single_close_quote]
    // mainly use english quote symbol ("")
    let sum_double_quote = double_open_quote + double_close_quote - Math.abs(double_open_quote - double_close_quote);
    let sum_single_quote = single_open_quote + single_close_quote - Math.abs(single_open_quote - single_close_quote);
    if ((sum_double_quote) > (sum_single_quote) || sum_double_quote + sum_single_quote == 0) {
        doc = doc.replace(/“/g, "「").replace(/”/g, "」");
    } else {
        doc = doc.replace(/‘/g, "「").replace(/’/g, "」");
    }
    doc = doc
        .replace(/\[/g, "『")
        .replace(/\]/g, "』")
        // space managing
        .replace(/([「【（『])/g, " $1 ")
        .replace(/([」】）』])/g, " $1 ")
        // .replace(/ ([「【（『])/g, "$1")
        // .replace(/([」】）』]) /g, "$1")
        .replace(/( [」】）』])([\'’]s)/g, "$2$1")
        .replace(/  」…/g, " 「 …")
    // .replace(/([\w]) ([」】）』])([^\w])/g, "$1. $2$3")
    return doc;
}

function ordinal_number(doc) {
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

function getElementWithMaxChlidenNode(tagName = 'div') {
    return [...document.getElementsByTagName(tagName)].reduce((a, b) => (a.childElementCount > b.childElementCount) ? a : b, document.createElement(tagName));
}


function styling() {
    let newStyle = document.createElement("style");
    newStyle.innerHTML =
        `body {
            background-color: #1F2022;
            color: papayawhip;
            font-family: Georgia !important;
            font-size: 25px !important;
            line-height: 1.5 !important;
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
    document.head.appendChild(newStyle);
}


function add_child(parent, child) {
    parent.appendChild(child);
}


function getPrevChapter() {
    return [
        document.getElementById("prev"),
        document.getElementById("prev_chap"),
        document.getElementById("prev_url"),
        document.getElementsByClassName("btn btn-prev")[0],
        document.getElementsByClassName("nav-previous")[0],
    ].find((e) => e != null);
}

function getNextChapter() {
    return [
        document.getElementById("next"),
        document.getElementById("next_chap"),
        document.getElementById("next_url"),
        document.getElementsByClassName("btn btn-next")[0],
        document.getElementsByClassName("nav-next")[0],
    ].find((e) => e != null);
}

function setNavigatorWithArrowKey() {
    // get link of next and previous chapter
    let next_chapter = '';
    let prev_chapter = '';
    try {
        prev_chapter = getPrevChapter().href;
        next_chapter = getNextChapter().href;
    } catch (error) {
        let current_url = window.location.href;
        try {
            // * common breakpoint if last url not number
            let current_page = Number(current_url.match(/\/([0-9]+)$/g)[0].slice(1));
            current_url = current_url.replace(/([0-9]+)$/g, '');
            next_chapter = current_url + (current_page + 1);
            prev_chapter = current_url + (current_page > 0) ? current_page - 1 : 0;
        } catch (error) {
            // ? no next and prev chapter
            if (prev_chapter == '' && next_chapter == '') no_next_and_prev_chapter();
            // first chapter
            if (prev_chapter == '') prev_chapter = (next_chapter != '') ? current_url : '';
            // latest chapter
            if (next_chapter == '') next_chapter = (prev_chapter != '') ? current_url : '';
        }
    }
    function no_next_and_prev_chapter() {
        console.log("no next and prev chapter");
    }
    // set key Listener
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") location = next_chapter;
        if (e.key === "ArrowLeft") location = prev_chapter;
    });
}

function removeAdsElement(content) {
    [...content.getElementsByTagName('del')].forEach(e => e.remove())
}
function countElements(element, condition) {
    return [...element.children].reduce((total, e) => (condition(e) ? total + 1 : total), 0)
}
function process() {
    //! //BUG: no break point for non-novel-content page like: chapter list page
    const title = document.getElementsByTagName("title")[0].cloneNode(true);
    const content = getElementWithMaxChlidenNode().cloneNode(true);
    // breakpoint if <p> less than 5 and <br> less than 5
    if (countElements(content, (e) => e.tagName == 'P') < 5 && countElements(content, (e) => e.tagName == 'BR') < 5) {
        console.log(content);
        return;
    }
    // remove ads
    removeAdsElement(content);
    // set arrow key navigator
    setNavigatorWithArrowKey();
    // cleaning other text
    clear_html();
    // get new body
    const body = document.body;
    // set margin and font
    styling();
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // adding title
    add_child(document.head, title);
    // adding body
    add_child(body, content);
}

function delay(time) { return new Promise(resolve => setTimeout(resolve, time)); }


function removeAllChildNodes(parent) {
    [...parent.children].forEach(e => e.remove())
}

function clear_html() {
    const html = document.getElementsByTagName('html')[0];
    const new_head = document.createElement('head');
    const new_body = document.createElement('body');
    removeAllChildNodes(html);
    html.appendChild(new_head);
    html.appendChild(new_body);
}


function full_book() {
    // set margin and font
    styling();
    // get content
    const content = document.body;
    // replacing
    content.innerHTML = replacing(content.innerHTML);
}

// BUG: cannot delete this

const setCookie = (name, value, days = 7, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
}

const deleteCookie = (name, path) => {
    setCookie(name, '', -1, path)
}

function deleteAllCookies() {
    document.cookie.replace(
        /(?<=^|;).+?(?=\=|;|$)/g,
        name => location.hostname
            .split(/\.(?=[^\.]+\.)/)
            .reduceRight((acc, val, i, arr) => i ? arr[i] = '.' + val + acc : (arr[i] = '', arr), '')
            .map(domain => document.cookie = `${name}=;max-age=0;path=/;domain=${domain}`)
    );
}

function main() {
    if (getCookie('reload') == 'true') {
        deleteCookie('reload', '/')
        return;
    }
    switch (window.location.hostname) {
        case 'www.nekopost.net':
            // delay 2 second
            delay(2000).then(() => process());
            break;
        case 'ranobes.net':
        case 'ranobes.net':
        case 'kaystls.site':
        case 'infinitenoveltranslations.net':
        case 'towelcitytown.wordpress.com':
        case 'allnovelfull.com':
        case 'i.meguminovel.com':
        case 'freewebnovel.com':
        case 'www.panda-novel.com':
            process();
            break;
    }
}

count_quote_symbol();

main();

let transfrom_mode = false;
document.addEventListener("keydown", function (e) {
    if (e.key === "w") //TODO: type mode like vimium; use cookie?
    {
        transfrom_mode = !transfrom_mode;
        console.log('transfrom mode: ', transfrom_mode);
    }
    if (e.key === "1" && transfrom_mode) process();
    if (e.key === "2" && transfrom_mode) full_book();
    if (e.key === "3" && transfrom_mode) reset();
    if (e.key === "4" && transfrom_mode) {
        setCookie('reload', 'true', 1);
        location.reload();
    }
});
