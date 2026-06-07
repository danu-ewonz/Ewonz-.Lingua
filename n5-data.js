const kanjiList = [

{k:"一", en:"One", si:"එක", h:"いち", r:"ichi"},
{k:"二", en:"Two", si:"දෙක", h:"に", r:"ni"},
{k:"三", en:"Three", si:"තුන", h:"さん", r:"san"},
{k:"四", en:"Four", si:"හතර", h:"よん", r:"yon"},
{k:"五", en:"Five", si:"පහ", h:"ご", r:"go"},
{k:"六", en:"Six", si:"හය", h:"ろく", r:"roku"},
{k:"七", en:"Seven", si:"හත", h:"なな", r:"nana"},
{k:"八", en:"Eight", si:"අට", h:"はち", r:"hachi"},
{k:"九", en:"Nine", si:"නවය", h:"きゅう", r:"kyuu"},
{k:"十", en:"Ten", si:"දහය", h:"じゅう", r:"juu"},

{k:"百", en:"Hundred", si:"සියය", h:"ひゃく", r:"hyaku"},
{k:"千", en:"Thousand", si:"දහස", h:"せん", r:"sen"},
{k:"万", en:"Ten thousand", si:"දස දහස", h:"まん", r:"man"},

{k:"日", en:"Day / Sun", si:"දින / හිරු", h:"にち", r:"nichi"},
{k:"月", en:"Month / Moon", si:"සඳ / මාසය", h:"げつ", r:"getsu"},
{k:"火", en:"Fire", si:"ගිනි", h:"か", r:"ka"},
{k:"水", en:"Water", si:"ජලය", h:"すい", r:"sui"},
{k:"木", en:"Tree", si:"ගස", h:"もく", r:"moku"},
{k:"金", en:"Gold / Money", si:"මුදල්", h:"きん", r:"kin"},
{k:"土", en:"Earth", si:"පස", h:"ど", r:"do"},

{k:"人", en:"Person", si:"පුද්ගලයා", h:"ひと", r:"hito"},
{k:"子", en:"Child", si:"ළමයා", h:"こ", r:"ko"},
{k:"女", en:"Woman", si:"කාන්තාව", h:"おんな", r:"onna"},
{k:"男", en:"Man", si:"පුරුෂයා", h:"おとこ", r:"otoko"},

{k:"目", en:"Eye", si:"ඇස", h:"め", r:"me"},
{k:"耳", en:"Ear", si:"කණ", h:"みみ", r:"mimi"},
{k:"口", en:"Mouth", si:"කට", h:"くち", r:"kuchi"},
{k:"手", en:"Hand", si:"අත", h:"て", r:"te"},
{k:"足", en:"Foot", si:"පාදය", h:"あし", r:"ashi"},

{k:"山", en:"Mountain", si:"කන්ද", h:"やま", r:"yama"},
{k:"川", en:"River", si:"ගඟ", h:"かわ", r:"kawa"},
{k:"田", en:"Rice field", si:"වෙල්", h:"た", r:"ta"},
{k:"林", en:"Forest", si:"වනාන්තර", h:"はやし", r:"hayashi"},
{k:"森", en:"Forest (big)", si:"වනය", h:"もり", r:"mori"},

{k:"学", en:"Study", si:"ඉගෙනීම", h:"がく", r:"gaku"},
{k:"校", en:"School", si:"පාසල", h:"こう", r:"kou"},
{k:"生", en:"Student / Life", si:"ශිෂ්‍යයා", h:"せい", r:"sei"},
{k:"先", en:"Before / Ahead", si:"ඉදිරිය", h:"せん", r:"sen"},
{k:"休", en:"Rest", si:"විවේකය", h:"きゅう", r:"kyuu"},

{k:"見", en:"See", si:"බලන්න", h:"みる", r:"miru"},
{k:"行", en:"Go", si:"යන්න", h:"いく", r:"iku"},
{k:"来", en:"Come", si:"එන්න", h:"くる", r:"kuru"},
{k:"食", en:"Eat", si:"කන්න", h:"たべる", r:"taberu"},
{k:"飲", en:"Drink", si:"බොන්න", h:"のむ", r:"nomu"},
{k:"話", en:"Speak", si:"කතා", h:"はなす", r:"hanasu"},
{k:"書", en:"Write", si:"ලියන්න", h:"かく", r:"kaku"},
{k:"読", en:"Read", si:"කියවන්න", h:"よむ", r:"yomu"},
{k:"聞", en:"Listen", si:"අහන්න", h:"きく", r:"kiku"},
{k:"買", en:"Buy", si:"මිලදී ගන්න", h:"かう", r:"kau"},

{k:"家", en:"House", si:"ගෙදර", h:"いえ", r:"ie"},
{k:"店", en:"Shop", si:"කඩය", h:"みせ", r:"mise"},
{k:"門", en:"Gate", si:"දොරටුව", h:"もん", r:"mon"},
{k:"駅", en:"Station", si:"ස්ථානය", h:"えき", r:"eki"},
{k:"道", en:"Road", si:"පාර", h:"みち", r:"michi"},

{k:"天", en:"Sky", si:"අහස", h:"てん", r:"ten"},
{k:"雨", en:"Rain", si:"වැස්ස", h:"あめ", r:"ame"},
{k:"気", en:"Air / Spirit", si:"වාතය", h:"き", r:"ki"},

{k:"年", en:"Year", si:"වසර", h:"ねん", r:"nen"},
{k:"時", en:"Time", si:"වේලාව", h:"じ", r:"ji"},
{k:"間", en:"Interval", si:"අතර", h:"かん", r:"kan"},
{k:"週", en:"Week", si:"සතිය", h:"しゅう", r:"shuu"},
{k:"毎", en:"Every", si:"සෑම", h:"まい", r:"mai"},

{k:"上", en:"Up", si:"ඉහළ", h:"うえ", r:"ue"},
{k:"下", en:"Down", si:"පහළ", h:"した", r:"shita"},
{k:"左", en:"Left", si:"වම", h:"ひだり", r:"hidari"},
{k:"右", en:"Right", si:"දකුණ", h:"みぎ", r:"migi"},
{k:"中", en:"Inside", si:"ඇතුළත", h:"なか", r:"naka"},
{k:"外", en:"Outside", si:"පිටත", h:"そと", r:"soto"},

{k:"大", en:"Big", si:"ලොකු", h:"おおきい", r:"ookii"},
{k:"小", en:"Small", si:"කුඩා", h:"ちいさい", r:"chiisai"},
{k:"新", en:"New", si:"නව", h:"あたらしい", r:"atarashii"},
{k:"古", en:"Old", si:"පැරණි", h:"ふるい", r:"furui"},
{k:"高", en:"High", si:"උස", h:"たかい", r:"takai"}

];
