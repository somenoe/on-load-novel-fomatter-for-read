// version 95
console.log("version 95");
// TODO: make it run this script when start the seleceted web like [dark reader (ext)]
function replacing(doc) {
    doc = doc
        // remove abrr tag
        .replace(/<abbr .+>(\w+)<\/abbr>/g, "<i>$1<\/i>")
        // .replace(/<abbr .+<\/abbr>/g, "fOUNd")
        // Nothing But SPace
        .replace(/&nbsp;|<p>&nbsp;<\/p>/g, " ")
        .replace(/<span style=\"font-weight:400;\">…/g, "…")
        // text error
        // .replace(/\.([a-z])\.([a-z])\.([a-z])/g, "$1$2$3")
        // .replace(/\.([a-z])\.([a-z])/g, "$1$2")

        .replace(/("|[A-Z]|[a-z])──([A-Z]|[a-z])/g, "$1– $2")

        // exclamtion
        .replace(/ \./g, ".")
        .replace(/\.\(|\. \(/g, "\(")
        .replace(/-|—-|—–|──|---------------/g, "–").replace(/-|—-|—–|──/g, "–").replace(/-|—-|—–|──/g, "–")
        .replace(/-|—-|—–|──/g, "–").replace(/-|—-|—–|──/g, "–").replace(/-|—-|—–|──/g, "–")
        .replace(/!!/g, "!")
        .replace(/!\./g, "!")
        .replace(/·/g, ".")
        .replace(/\",/g, "\" ,")
        .replace(/([A-Z]|[a-z])—([A-Z]|[a-z])/g, "$1— $2")
        .replace(/]\.\'/g, "]. \'")
        .replace(/\?!/g, "!?")
        .replace(/\?\./g, "?")
        .replace(/\?\./g, "?")
        .replace(/\.]/g, "]")
        .replace(/\> …\<|\>… \<|\> … \</g, ">…<")
        .replace(/\.\.\.|……|… …|\.\.|…\./g, "…").replace(/\.\.\.|……|…\.|\.\.|…\./g, "…").replace(/\.\.\.|……|…\.|\.\.|…\./g, "…")
        // .replace(/\*/g, "–")
        .replace(/——|—─/g, "—").replace(/——|—─/g, "—").replace(/——|—─/g, "—").replace(/——|—─/g, "—")
        .replace(/~|~~/g, "〜").replace(/〜〜/g, "〜")
        // TODO use match caste with partition (like "unreadablize")
        .replace(/\<p\>[…|–|* * *|\- \- \-|\-\-\-|━|—| —|&amp;]\<\/p\>/g, "\<hr class=\"solid\">")
        .replace(/－ － －|───|–––|<p>─<\/p>|<p> —<\/p>|─ ─ ─|– – –|◆◇◆◇◆|◇|⍚|<p>\.<\/p>|<p>&nbsp;\.<\/p>|#######/g, "\<hr class=\"solid\">")
        .replace(/\* \* \*|\- \- \-\<\/p>/g, "\<hr class=\"solid\">")
        .replace(/\"\*\*\*\"/g, "\<hr class=\"solid\">")
        // delete double partition
        .replace(/\<hr class=\"solid\">\<hr class=\"solid\">/g, "\<hr class=\"solid\">")
        .replace(/\<hr class=\"solid\">\<hr class=\"solid\">/g, "\<hr class=\"solid\">")
        .replace(/\<hr class=\"solid\">\<hr class=\"solid\">/g, "\<hr class=\"solid\">")
        .replace(/\<hr class=\"solid\">\<hr class=\"solid\">/g, "\<hr class=\"solid\">")

        // Quote symbol
        .replace(/“/g, " “")
        .replace(/”/g, "” ")
        .replace(/  /g, " ")
        .replace(/``/g, "\"")
        // .replace(/``|“|”/g, "\"")
        .replace(/\"\./g, ".\"")
        .replace(/([!|?])\"/g, "$1 \"")
        // in paragraph quote init
        .replace(/([!|?|,|\.]) \"([A-Z]|…|─)/g, "$1“$2")
        .replace(/ \"([A-Z]|[a-z]|[0-9])/g, " “$1")
        .replace(/([A-Z]|[a-z]|[0-9])\" /g, "$1” ")
        .replace(/\>\"/g, "\>“")
        .replace(/\"\<\//g, "”\<\/")
        .replace(/([\.|,|\?|\!| \?| \!|…|─|–|〜])\"/g, "$1”")
        .replace(/.\" ([A-Z])/g, ".” $1")
        .replace(/. \"([A-Z])/g, ". “$1")
        .replace(/([ |\>])\'/g, "$1‘")
        .replace(/\'([ |\.|,|\<])/g, "’$1")

        // except Apostrophe
        .replace(/([A-Z]|[a-z])’([A-Z]|[a-z])/g, "$1APosTroPhe$2")
        .replace(/([A-Z]|[a-z])‘([A-Z]|[a-z])/g, "$1APosTroPhe$2")
        // .replace(/s’ /g, "sAPosTroPhes ")
        // .replace(/ ‘|‘/g, "『 ")
        // .replace(/’|’ /g, " 』")
        .replace(/APosTroPhe/g, "’")

        // Japanese Symbol

        .replace(/“|「/g, "「 ")
        .replace(/”|」/g, " 」")
        .replace(/\[/g, "『 ")
        .replace(/\]/g, " 』")

        // .replace(/\[/g, "「 ")
        // .replace(/\]/g, " 」")
        // .replace(/“/g, "『 ")
        // .replace(/”/g, " 』")

        // .replace(/\)/g, " ）")
        // .replace(/\(/g, "（ ")
        .replace(/([」|】]) /g, "$1")
        .replace(/ ([「|【])/g, "$1")

        .replace(/  」…/g, " 「 …")
        .replace(/([\.|])([」|】|』|）])([\.| |])/g, "<span aria-hidden=\"true\" >$1<\/span>$2<span aria-hidden=\"true\" >$3<\/span>")
        .replace(/\.([」|】|』|）])/g, "\. $1")
        .replace(/([\.| |])([「|【|『|（])/g, "<span aria-hidden=\"true\" >$1<\/span>$2")
        .replace(/>  ([「|【|『])/g, "> $1 ")

        // arrangement of …
        .replace(/([\wé]) …( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/g, "$1…$2")
        .replace(/( |\?|\!|\.|,|…|\"|\'|\)|\(|\>)… ([\wé])/g, "$1…$2")

        // easy to read with just short (-)
        .replace(/([\wé])–([\wé])/g, "$1-$2").replace(/([\wé])–([\wé])/g, "$1-$2").replace(/([\wé])–([\wé])/g, "$1-$2")
        .replace(/–-/g, "-")

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
        // exclamation sound
        .replace(/ nn([ |?|!|\.|,|…])/g, " neun$1")
        .replace(/Aa([〜|,|!|?])/g, "Ah$1")
        .replace(/Ahk/g, "Ahhk")
        .replace(/Aht/g, "Ahhk")
        .replace(/Ara/g, "Ahh")
        .replace(/Etto/g, "Hmm")
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
        .replace(/(Pff|Pffff|Pfftf|Pffft|Pwff|Pfff|Pft|pft)([ |\?|\!|\.|,|…])/g, "Pfft$2")
        .replace(/Seug/g, "Shug")
        .replace(/Tsk| tsk| tch|Tch/g, "Shi")
        .replace(/Un([?|!|\.|,|…])/g, "Eun$1")
        // stutter
        .replace(/( |\?|\!|\.|,|…)([A-Za-z])[\─\-\–]([A-Za-z])/g, "$1$2ah– $3")
        .replace(/( |\?|\!|\.|,|…)(Wh|wh|Th|th)[\─\-\–](Wh|wh|Th|th)/g, "$1$2ah– $3")
        // .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh), /g, " $1ah– ")
        .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
        .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
        .replace(/( |\?|\!|\.|,|…)([A-Z]|[a-z]|Wh|wh)─ /g, " $2ah– ")
        .replace(/( |\?|\!|\.|,|…)([a|e|i|o|u|A|E|O|U])ah– /g, " $2h– ")
        .replace(/( |\?|\!|\.|,|…)([a|e|i|o|u|A|E|O|U])ah– /g, " $2h– ")
        .replace(/( |\?|\!|\.|,|…)([a|e|i|o|u|A|E|O|U])ah– /g, " $2h– ")
        .replace(/Wh-wh| wh-wh|Wh, wh| wh, wh|Wh- wh| wh- wh|Wh– wh| wh– wh|Wh– Wh/g, " Wha– Wh")
        .replace(/Th-th| th-th|Th, th| th, th|Th- th| th- th|Th– th| th– th|Th– Th/g, " Ta– Th")
        // please read what it stand for
        .replace(/PDA/g, "LoveLove")
        // hidden
        .replace(/\>(| )(Chapter|[0-9] repl)/g, " hidden> ")
        // delete dupulicate space
        .replace(/   /g, " ").replace(/  /g, " ").replace(/  /g, " ").replace(/  /g, " ")
        // for easy to read number
        .replace(/([0-9])([A-Z|a-z])/g, "$1 $2")
        .replace(/『 [0-9] 』/g, "⋆ ")
        // transtlation note
        .replace(/T\/N:|Ο/g, "")
        // fantasy currency
        .replace(/([0-9]) R/g, "$1 Riel")
        // just delete it
        .replace(/\?\?\?|\>─\</g, "")
        // unreadablize editor and translator thought
        .replace(/(\(EN: .+\)|\(TN: .+\))/g, "<span aria-hidden=\"true\" >$1<\/span>")
        // unreadablize inside bracket()
        .replace(/(\(.+\))/g, "<span aria-hidden=\"true\" >$1<\/span>")
        // unreadablize name front quote // !OVERWORK: it work EVERYWHERE, not just strat of paragraph
        .replace(/([A-Z][\wé]*):/g, "<span aria-hidden=\"true\" >$1:<\/span>")
        // unreadablize silent symbol
        .replace(/([「 ]+[\?\!…]+[ 」]+)/g, "<span aria-hidden=\"true\" >$1<\/span>")
        // unreadablize these symbol
        .replace(/([*\$#@]+)/g, "<span aria-hidden=\"true\" >$1<\/span>")
        // delete hr
        .replace(/<hr>/g, "")
        // partition
        .replace(/<p>([\?\!…\*–―-\s]+|–o–)<\/p>/g, "\<hr class=\"solid\">")
        ;
    doc = ordinal_number(doc);
    doc = ordinal_number(doc);
    return doc;
}
function ordinal_number(doc) {
    return doc
        .replace(/([2-9])([0-9])(st|nd|rd|th| st| nd| rd| th)/, "$10 $2$3")
        .replace(/(1st|1 st)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "First$2")
        .replace(/(2nd|2 nd)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Second$2")
        .replace(/(3rd|3 rd)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Third$2")
        .replace(/(4th|4 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Fourth$2")
        .replace(/(5th|5 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Fifth$2")
        .replace(/(6th|6 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Sixth$2")
        .replace(/(7th|7 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Seventh$2")
        .replace(/(8th|8 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Eighth$2")
        .replace(/(9th|9 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Ninth$2")
        .replace(/(10th|10 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Tenth$2")
        .replace(/(11th|11 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Eleventh$2")
        .replace(/(12th|12 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Twelfth$2")
        .replace(/(13th|12 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Thirteenth$2")
        .replace(/(14th|14 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Fourteenth$2")
        .replace(/(15th|15 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Fifteenth$2")
        .replace(/(16th|16 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Sixteenth$2")
        .replace(/(17th|17 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Seventeenth$2")
        .replace(/(18th|18 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Eighteenth$2")
        .replace(/(19th|19 th)( |\?|\!|\.|,|…|\"|\'|\)|\(|\<)/, "Nineteenth$2")
        ;
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
    let newStyle = document.createElement('style');
    newStyle.innerHTML = 'body { font-family: "Arial";\
        font-size: 25px; \
        margin-top: 100px; \
        margin-bottom: 100px; \
        margin-right: calc(33% - 100px); \
        margin-left: calc(33% - 100px); }'
    document.head.appendChild(newStyle);
}
function allnovelfull() {
    const content = document.getElementById("chapter-content");

    // replacing
    content.innerHTML = replacing(content.innerHTML);

    // for allnovelfull
    document.getElementsByClassName("truyen-title")[0].remove()
    document.getElementsByClassName("chapter-title")[0].remove()
    document.getElementsByClassName("navbar-breadcrumb")[0].remove()
    document.getElementsByClassName("btn btn-responsive btn-success toggle-nav-open ")[0].remove()
    document.getElementsByClassName("btn btn-warning")[0].remove()
    document.getElementsByClassName("bg-info text-center visible-md visible-lg box-notice")[0].remove()
    document.getElementsByClassName("chapter-nav")[0].remove()
    document.getElementsByClassName("chapter-nav")[0].remove()
    document.getElementsByClassName("footer")[0].remove()
}
function add_child(parent, child) {
    parent.appendChild(child);
}
function infinitenoveltranslations() {
    font_styling();
    const parent = document.getElementsByTagName("body")[0];
    const content_name = "entry-content";
    const content = document.getElementsByClassName(content_name)[0];
    const image = content.getElementsByTagName("img")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const a_tags = content.getElementsByTagName("a");
    const title = document.getElementsByTagName("title")[0];
    // navigator with arrow key
    if (a_tags != null) {
        const next_chapter = a_tags[a_tags.length - 1].href;
        if (a_tags.length >= 3)
            var prev_chapter = a_tags[a_tags.length - 3].href;

        document.addEventListener('keydown', function (e) {
            if (e.key === "ArrowRight") location = next_chapter
            if (e.key === "ArrowLeft" && a_tags.length >= 3) location = prev_chapter
        })
    }
    // unreadablize title
    document.getElementsByClassName("entry-title")[0].innerHTML = '';
    // replacing
    content.innerHTML = replacing(content.innerHTML);
    // add unread title
    content.innerHTML = "<span aria-hidden=\"true\" >" + title.innerHTML + "<\/span><hr>" + (content.innerHTML);
    // fix broken image tag
    if (image != null) content.innerHTML = content.innerHTML.replace(/<img .+\">/g, image.outerHTML);
    // remove footer which readable
    if (footer != null) footer.remove();
    // show only content
    if (parent.children[0].style.display != 'none') {
        hide_all(parent.children);
        // hide_all(target.children);
        // add_child(parent, target);
        // add_child(target, content);
        add_child(parent, content);
        hide(content.children[2]);
        hide(content.children[content.children.length - 2])
    }

}
function process(parent_name, target_name, content_name) {
    const parent = document.getElementById(parent_name);
    const target = document.getElementsByClassName(target_name)[0];
    const content = document.getElementById(content_name);

    // replacing
    content.innerHTML = replacing(content.innerHTML);

    if (parent.children[0].style.display != 'none') {
        hide_all(parent.children);
        add_child(parent, target);
        hide_all_except(target.children, content);
    }
}
if (window.location.hostname == 'ranobes.net')
    process("dle-content", "block story shortstory", "arrticle");
if (window.location.hostname == 'infinitenoveltranslations.net')
    infinitenoveltranslations();
if (window.location.hostname == 'allnovelfull.com')
    allnovelfull();
// incomplete
if (window.location.hostname == 'others.net') process("novel-content", "content", "arrticle");
// version 95
