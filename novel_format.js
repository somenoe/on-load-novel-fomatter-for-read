// version 96
console.log("version 96");
// TODO: make it run this script when start the seleceted web like [dark reader (ext)]
// TODO: group repalce line to separate function
function replacing(doc) {
    doc = doc
        // remove abrr tag
        .replace(/<abbr .+>(\w+)<\/abbr>/g, "<i>$1</i>")
        .replace(/<br>/g, "</p><p>")
        // Nothing But SPace
        .replace(/&nbsp;|<p>&nbsp;<\/p>/g, " ")

        .replace(/("|[A-Z]|[a-z])──([A-Z]|[a-z])/g, "$1– $2")

        .replace(/ \.|・/g, ".")
        .replace(/\.\(|\. \(/g, "(")
        .replace(/-|—-|—–|──|---------------/g, "–")
        .replace(/-|—-|—–|──/g, "–")
        .replace(/-|—-|—–|──/g, "–")
        .replace(/-|—-|—–|──/g, "–")
        .replace(/-|—-|—–|──/g, "–")
        .replace(/-|—-|—–|──/g, "–")
        .replace(/!!/g, "!")
        .replace(/!\./g, "!")
        .replace(/·/g, ".")
        .replace(/\",/g, '" ,')
        .replace(/([A-Z]|[a-z])—([A-Z]|[a-z])/g, "$1— $2")
        .replace(/]\.\'/g, "]. '")
        .replace(/\?!/g, "!?")
        .replace(/\?\./g, "?")
        .replace(/\?\./g, "?")
        .replace(/\.]/g, "]")
        // .replace(/\*/g, "–")
        .replace(/——|—─/g, "—")
        .replace(/——|—─/g, "—")
        .replace(/——|—─/g, "—")
        .replace(/——|—─/g, "—")
        .replace(/~|~~/g, "〜")
        .replace(/〜〜/g, "〜")

        // easy to read with just short (-)
        .replace(/([\wé])–([\wé])/g, "$1-$2")
        .replace(/([\wé])–([\wé])/g, "$1-$2")
        .replace(/([\wé])–([\wé])/g, "$1-$2")
        .replace(/–-/g, "-")

        // please read what it stand for
        .replace(/PDA/g, "LoveLove")

        // delete dupulicate space
        .replace(/   /g, " ")
        .replace(/  /g, " ")
        .replace(/  /g, " ")
        .replace(/  /g, " ")
        // for easy to read number
        .replace(/([0-9])([A-Z|a-z])/g, "$1 $2")
        .replace(/『 [0-9] 』/g, "⋆ ");
    doc = partition(doc);
    doc = naming(doc);
    doc = exclamation(doc);
    doc = quote_symbol(doc);
    doc = japanese_quote_symbol(doc);
    doc = ellipsis(doc);
    doc = ordinal_number(doc);
    doc = stutter(doc);
    doc = unreadablize(doc);
    return doc;
}
function ellipsis(doc) {
    return (
        doc
            .replace(/(\.…)+|(…\.)+|(\.\.\.)+|(\. \. \.)+|…+/g, "…")
            // arrangement of ellipsis(…)
            .replace(/([\wé]) …( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/g, "$1…$2")
            .replace(/( |\?|\!|\.|,|…|\"|\'|\)|\(|\>)… ([\wé])/g, "$1…$2")
            .replace(/(\w) (…|… )([^\w\s])/g, "$1… $3")
            .replace(/([^\w\s])(…| …) (\w)/g, "$1 …$3")
            .replace(/([\?\!])(…| …)([^\w])/g, "…$1 $3")
            .replace(/([A-Z]) … ([a-z])/g, "$1… $2")
            .replace(/([a-z]) … ([A-Z])/g, "$1 …$2")
            .replace(/([a-z]) … ([a-z])/g, "$1… $2")
    );
}
function partition(doc) {
    return (
        doc
            // delete hr
            .replace(/<hr>/g, "")
            // TODO use match caste with partition (like "unreadablize")
            .replace(
                /\<p\>[…|–|* * *|\- \- \-|\-\-\-|━|—| —|&amp;]\<\/p\>/g,
                '<hr class="solid">'
            )
            .replace(
                /－ － －|───|–––|<p>─<\/p>|<p> —<\/p>|─ ─ ─|– – –|◆◇◆◇◆|◇|⍚|<p>\.<\/p>|<p>&nbsp;\.<\/p>|#######/g,
                '<hr class="solid">'
            )
            .replace(/\* \* \*|\- \- \-\<\/p>/g, '<hr class="solid">')
            .replace(/\"\*\*\*\"/g, '<hr class="solid">')
            // delete double partition
            .replace(
                /\<hr class=\"solid\">\<hr class=\"solid\">/g,
                '<hr class="solid">'
            )
            .replace(
                /\<hr class=\"solid\">\<hr class=\"solid\">/g,
                '<hr class="solid">'
            )
            .replace(
                /\<hr class=\"solid\">\<hr class=\"solid\">/g,
                '<hr class="solid">'
            )
            .replace(
                /\<hr class=\"solid\">\<hr class=\"solid\">/g,
                '<hr class="solid">'
            )
            // partition
            .replace(/<p>([\?\!…\*–―-\s]+|–o–)<\/p>/g, '<hr class="solid">')
    );
}
function naming(doc) {
    return (
        doc
            // Korean
            // .replace(/Su-hyeun/g, "Jin-woo")
            .replace(/Sunyoung/g, "Sun-young")
            .replace(/seodam|Seodam/g, "Seo-dam")
            .replace(/Jitae/g, "Jin-ho")
            .replace(/Sanagi/g, "Sa-na-gi")
            .replace(/ Ja | Ja,/g, " Jah ")
            .replace(/hye/g, "hee")
            .replace(/Hye/g, "Hee")
            // .replace(/yeon/g, "-yon")
            .replace(/hwi/g, "wee")
            .replace(/Bae([ |?|!|\.|,|…])/g, "Baer$1")
            .replace(/Tae Ho/g, "Jin-ho")
            .replace(/Yeorum/g, "Yo-rum")
            .replace(/Kaeul/g, "Kya-eunl")
            .replace(/Gyeoul/g, "Yon-gya")
            .replace(/Se-/g, "See-")
            .replace(/-gi/g, "-gai")
            .replace(/Seo| seo|-seo/g, "So")
            // Western
            .replace(/ ([A-Z])\- ([Rank|rank|Tier|tier])/g, " $1-Minus $2")
            .replace(/ ([A-Z])\+ ([Rank|rank|Tier|tier])/g, " $1-Plus $2")
            .replace(/ (Lv|lv)(| |\.)([0-9])/g, " Level $3")
            .replace(/Aracelli/g, "Aracellia")
            .replace(/b─tch|B─tch/g, "Bitch")
            .replace(/Creare/g, "Clare")
            .replace(/Csille/g, "Callie")
            .replace(/f─ck|F─ck|f-ck|F-ck/g, "Fuck")
            .replace(/bast─rd|Bast─rd/g, "Bastard")
            .replace(/Rey/g, "Ray")
            .replace(/Runegear/g, "Rune-gear")
            .replace(/Sh–t|sh–t/g, "Shit")
            .replace(/Snoc/g, "Noc")
            .replace(/Sylv/g, "Silv")
            .replace(/Taci/g, "Tashi")
            .replace(/Imeraria/g, "Maria")
            .replace(/Mia([ |?|!|\.|,|…])/g, "Miah$1")
            .replace(/Roel/g, "Ro-el")
            .replace(/Yekaterina/g, "Katerina")
            .replace(/Ma'am|ma'am|Ma’am|ma’am/g, "Madam")
            // Japan
            .replace(/[G|g]oshujin-sama/g, "Master")
            .replace(/Ganbatte|Ganbattene/g, "Do your best")
            .replace(/Mylene/g, "Malena")
            .replace(/Shahata/g, "Shaha")
            .replace(/Hifumi/g, "Hiro")
            .replace(/Soujiro/g, "Shojeero")
            .replace(/Souma|Soma/g, "Shoma")
            .replace(/Yoash/g, "Yohan")
            .replace(/otome game|Otome game/g, "Romance game")
    );
}
function unreadablize(doc) {
    return (
        doc
            // unreadablize chapter name
            .replace(/(Chapter|chapter)([\s0-9]*[:\w\s]*)</g,
                '<span aria-hidden="true" >$1$2</span><')
            // unreadablize inside bracket()
            .replace(/(\(.+\))/g,
                '< span aria - hidden="true" > $1</span > ')
            // unreadablize name front quote // !OVERWORK: it work EVERYWHERE, not just strat of paragraph
            .replace(/([A-Z][\wé]*):/g,
                '<span aria-hidden="true" >$1:</span>')
            // unreadablize silent symbol
            .replace(/([「 ]+[\*\?\!…\,\.]+[ 」]+)/g,
                '<span aria-hidden="true" >$1</span>')
            // unreadablize these symbol
            .replace(/([†*\$#@]+)/g,
                '<span aria-hidden="true" >$1</span>')
    );
}
function stutter(doc) {
    console.log("[log]: stutter");
    return (
        doc
            // stutter
            .replace(/([^\w])((?![aiueoAIUEO])[A-Za-z])[…─\-–]\s([\w])/g, "$1$2ah– $3")
            .replace(
                /( |\?|\!|\.|,|…)(Wh|wh|Th|th)[\─\-\–](Wh|wh|Th|th)/g,
                "$1$2ah– $3"
            )
            // .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh), /g, " $1ah– ")
            .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
            .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
            .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
            .replace(/( |\?|\!|\.|,|…)([a|e|o|u|A|E|O|U])ah– /g, " $2h– ")
            .replace(/( |\?|\!|\.|,|…)([a|e|o|u|A|E|O|U])ah– /g, " $2h– ")
            .replace(/( |\?|\!|\.|,|…)([a|e|o|u|A|E|O|U])ah– /g, " $2h– ")
            .replace(
                /Wh-wh| wh-wh|Wh, wh| wh, wh|Wh- wh| wh- wh|Wh– wh| wh– wh|Wh– Wh/g,
                " Wha– Wh"
            )
            .replace(
                /Th-th| th-th|Th, th| th, th|Th- th| th- th|Th– th| th– th|Th– Th/g,
                " Ta– Th"
            )
    );
}
function exclamation(doc) {
    return (
        doc
            // exclamation sound
            .replace(/ nn([ |?|!|\.|,|…])/g, " neun$1")
            .replace(/Aa([〜|,|!|?])/g, "Ah$1")
            .replace(/Ahk/g, "Ahhk")
            .replace(/Aht/g, "Ahhk")
            .replace(/Ara/g, "Ahh")
            .replace(/Etto|Ano/g, "Uhh")
            // [^\w\s] = not in \w, not in \s
            .replace(/Ee([^\w\s])/g, "Eh$1")
            .replace(/Aa([^\w\s])/g, "Ah$1")
            .replace(/Mmmhmm|Mmhmm| mmmhmm| mmhmm/g, "Mmm-hmm")
            .replace(/Hmpf|Hmph|Hmhm/g, "Hmm")
            .replace(/ hm([ |\.|,|\!|\?|…])|Hm([ |\.|,|\!|\?|…])/g, " Hmm$1$2")
            .replace(/Kreuk|Keuk|Kuek/g, "Kwuk")
            .replace(/[K|k]euck/g, "Kheck")
            .replace(/Krr|krr/g, "Karr")
            .replace(/Keugh|keugh/g, "Kugh")
            .replace(/(Mm|Mmhm|mmhm)([ |?|!|\.|,|…])/g, "Mmm$2")
            .replace(/mmm/g, "mm")
            .replace(/Nn/g, "Neun")
            .replace(
                /(Pff|Pffff|Pfftf|Pffft|Pwff|Pfff|Pft|pft)([ |\?|\!|\.|,|…])/g,
                "Pfft$2"
            )
            .replace(/Seug/g, "Shug")
            .replace(/Tsk| tsk| tch|Tch/g, "Shi")
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
            .replace(/([\s>])\"([^\s>])/g, "$1“$2")
            .replace(/([^\s<])\"([\s<])/g, "$1”$2")
            .replace(/([\s>])\'([^\s>])/g, "$1‘$2")
            .replace(/([^\s<])\'([\s<])/g, "$1’$2")

            // except Apostrophe
            .replace(/([A-Z]|[a-z])’([A-Z]|[a-z])/g, "$1APosTroPhe$2")
            .replace(/([A-Z]|[a-z])‘([A-Z]|[a-z])/g, "$1APosTroPhe$2")
            // .replace(/s’ /g, "sAPosTroPhes ")
            // .replace(/ ‘|‘/g, "『 ")
            // .replace(/’|’ /g, " 』")
            .replace(/APosTroPhe/g, "’")
    );
}
function japanese_quote_symbol(doc) {
    console.log("[log]: change to japanese quote style");
    const japanese_open_quote = doc.match(/「/g);
    const japanese_close_quote = doc.match(/」/g);

    // mainly use english quote symbol ("")
    if (japanese_open_quote == null && japanese_close_quote == null) {
        console.log("[log]: ENG style");
        doc = doc.replace(/“/g, "「 ").replace(/”/g, " 」");
    }
    // const english_open_quote = doc.match(/“/g);
    // const english_close_quote = doc.match(/”/g);
    // // mainly use japanese quote symbol ("")
    // if (japanese_open_quote != null && japanese_close_quote != null)
    //     if (english_open_quote != null && english_close_quote != null)
    //         if (japanese_open_quote.length + japanese_close_quote.length > english_open_quote.length + english_close_quote.length) {
    //             console.log("[log]: JP style");
    //             doc = doc.replace(/“/g, "『 ").replace(/”/g, " 』");
    //         }
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
        .replace(/  」…/g, " 「 …")
        .replace(/\.([」】）』「【（『])/g, ". $1")
        .replace(/([」】）』「【（『])\./g, "$1 .")
        .replace(/([\w]) ([」】）』])([^\w])/g, "$1. $2$3")
    return doc;
}
function ordinal_number(doc) {
    return doc
        .replace(/([2-9])([0-9])(st|nd|rd|th| st| nd| rd| th)/, "$10 $2$3")
        .replace(/(1st|1 st)([^\w])/, "First$2")
        .replace(/(2nd|2 nd)([^\w])/, "Second$2")
        .replace(/(3rd|3 rd)([^\w])/, "Third$2")
        .replace(/(4th|4 th)([^\w])/, "Fourth$2")
        .replace(/(5th|5 th)([^\w])/, "Fifth$2")
        .replace(/(6th|6 th)([^\w])/, "Sixth$2")
        .replace(/(7th|7 th)([^\w])/, "Seventh$2")
        .replace(/(8th|8 th)([^\w])/, "Eighth$2")
        .replace(/(9th|9 th)([^\w])/, "Ninth$2")
        .replace(/(10th|10 th)([^\w])/, "Tenth$2")
        .replace(/(11th|11 th)([^\w])/, "Eleventh$2")
        .replace(/(12th|12 th)([^\w])/, "Twelfth$2")
        .replace(/(13th|12 th)([^\w])/, "Thirteenth$2")
        .replace(/(14th|14 th)([^\w])/, "Fourteenth$2")
        .replace(/(15th|15 th)([^\w])/, "Fifteenth$2")
        .replace(/(16th|16 th)([^\w])/, "Sixteenth$2")
        .replace(/(17th|17 th)([^\w])/, "Seventeenth$2")
        .replace(/(18th|18 th)([^\w])/, "Eighteenth$2")
        .replace(/(19th|19 th)([^\w])/, "Nineteenth$2");
}
function hide_all_except(children, except) {
    for (let i = 0; i < children.length; i++) {
        if (children[i] != except) hide(children[i]);
    }
}
function hide_all(children) {
    for (let i = 0; i < children.length; i++) {
        hide(children[i]);
    }
}
function hide(doc) {
    doc.style.display = "none";
}
function show(doc) {
    doc.style.display = "block";
}
function font_styling() {
    let newStyle = document.createElement("style");
    newStyle.innerHTML =
        'body { font-family: "Arial" !important;\
        font-size: 25px !important; \
        margin-top: 100px !important; \
        margin-bottom: 100px !important; \
        margin-right: calc(33% - 100px) !important; \
        margin-left: calc(33% - 100px) !important; }';
    document.head.appendChild(newStyle);
}
function allnovelfull() {
    const content = document.getElementById("chapter-content");

    // replacing
    content.innerHTML = replacing(content.innerHTML);

    // for allnovelfull
    document.getElementsByClassName("truyen-title")[0].remove();
    document.getElementsByClassName("chapter-title")[0].remove();
    document.getElementsByClassName("navbar-breadcrumb")[0].remove();
    document
        .getElementsByClassName(
            "btn btn-responsive btn-success toggle-nav-open "
        )[0]
        .remove();
    document.getElementsByClassName("btn btn-warning")[0].remove();
    document
        .getElementsByClassName(
            "bg-info text-center visible-md visible-lg box-notice"
        )[0]
        .remove();
    document.getElementsByClassName("chapter-nav")[0].remove();
    document.getElementsByClassName("chapter-nav")[0].remove();
    document.getElementsByClassName("footer")[0].remove();
}
function add_child(parent, child) {
    parent.appendChild(child);
}
function infinitenoveltranslations() {
    font_styling();
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
    // unreadablize title
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
function process(parent_name, target_name, content_name) {
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
function main() {
    if (window.location.hostname == "ranobes.net")
        process("dle-content", "block story shortstory", "arrticle");
    if (window.location.hostname == "infinitenoveltranslations.net")
        infinitenoveltranslations();
    if (window.location.hostname == "allnovelfull.com") allnovelfull();
    // incomplete
    if (window.location.hostname == 'jhhclmfgfllimlhabjkgkeebkbiadflb') {

        document.body.innerHTML = replacing(document.body.innerHTML);
    }
    if (window.location.hostname == 'i.meguminovel.com') {
        font_styling();
        const parent = document.getElementsByTagName("body")[0];
        const content = document.getElementsByClassName("thecontent")[0];
        hide_all(parent.children);
        add_child(parent, content);
    }
}
main();
// version 96
