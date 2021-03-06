import {ContainerSection, TextSection} from "../../models/book/book";

export const arr: TextSection[] = [
    {
        id: 0,
        title: "I",
        textContent: `
Maecenas atavis edite regibus,
o et praesidium et dulce decus meum,
sunt quos curriculo pulverem Olympicum
collegisse iuvat metaque fervidis
evitata rotis palmaque nobilis
terrarum dominos evehit ad deos;
hunc, si mobilium turba Quiritium
certat tergeminis tollere honoribus;
illum, si proprio condidit horreo
quicquid de Libycis verritur areis.
Gaudentem patrios findere sarculo
agros Attalicis condicionibus
numquam demoveas, ut trabe Cypria
Myrtoum pavidus nauta secet mare.
Luctantem Icariis fluctibus Africum
mercator metuens otium et oppidi
laudat rura sui; mox reficit rates
quassas, indocilis pauperiem pati.
Est qui nec veteris pocula Massici
nec partem solido demere de die
spernit, nunc viridi membra sub arbuto
stratus, nunc ad aquae lene caput sacrae.
Multos castra iuvant et lituo tubae
permixtus sonitus bellaque matribus
detestata. Manet sub Iove frigido
venator tenerae coniugis inmemor,
seu visa est catulis cerva fidelibus,
seu rupit teretis Marsus aper plagas.
Me doctarum hederae praemia frontium
dis miscent superis, me gelidum nemus
Nympharumque leves cum Satyris chori
secernunt populo, si neque tibias
Euterpe cohibet nec Polyhymnia
Lesboum refugit tendere barbiton.
Quod si me lyricis vatibus inseres,
sublimi feriam sidera vertice.
`.split('\n')
            .filter(line => line.replace(/\s/g, ""))
            .reduce((acc, line, i) => {
                return i % 4 === 0 ?
                    [...acc, [line]] :
                    [...acc.slice(0, -1), acc[acc.length - 1].concat(line)]
            }, [] as string[][])
            .map(p => p.join("\n"))
            .join('\n\n')
    },
    {
        id: 1,
        title: "II",
        textContent: `
Iam satis terris nivis atque dirae
grandinis misit Pater et rubente
dextera sacras iaculatus arces
     terruit Urbem,

terruit gentis, grave ne rediret
saeculum Pyrrhae nova monstra questae,
omne cum Proteus pecus egit altos
     visere montis,

piscium et summa genus haesit ulmo,
nota quae sedes fuerat columbis,
et superiecto pavidae natarunt
     aequore dammae.

Vidimus flavom Tiberim retortis
litore Etrusco violenter undis
ire deiectum monumenta regis
     templaque Vestae,

Iliae dum se nimium querenti
iactat ultorem, vagus et sinistra
labitur ripa Iove non probante
     uxorius amnis.

Audiet civis acuisse ferrum,
quo graves Persae melius perirent,
audiet pugnas vitio parentum
     rara iuventus.

Quem vocet divum populus ruentis
imperi rebus? Prece qua fatigent
virgines sanctae minus audientem
     carmina Vestam?

Cui dabit partis scelus expiandi
Iuppiter? Tandem venias precamur,
nube candentis umeros amictus,
     augur Apollo,

sive tu mavis, Erycina ridens,
quam Iocus circumvolat et Cupido,
sive neglectum genus et nepotes
     respicis, auctor,

heu nimis longo satiate ludo,
quem iuvat clamor galeaeque leves,
acer et Mauri peditis cruentum
     voltus in hostem,

sive mutata iuvenem figura
ales in terris imitaris, almae
filius Maiae, patiens vocari
     Caesaris ultor.

Serus in caelum redeas diuque
laetus intersis populo Quirini,
neve te nostris vitiis iniquum
     ocior aura

tollat; hic magnos potius triumphos,
hic ames dici pater atque princeps,
neu sinas Medos equitare inultos
     te duce, Caesar.
`
    },
    {
        id: 2,
        title: "III",
        textContent: `
     Sic te diva potens Cypri,
sic fratres Helenae, lucida sidera,
     ventorumque regat pater
obstrictis aliis praeter Iapyga,
     navis, quae tibi creditum
debes Vergilium; finibus Atticis
     reddas incolumem precor
et serves animae dimidium meae.
     Illi robur et aes triplex
circa pectus erat, qui fragilem truci
     commisit pelago ratem
primus, nec timuit praecipitem Africum
     decertantem Aquilonibus
nec tristis Hyadas nec rabiem Noti,
     quo non arbiter Hadriae
maior, tollere seu ponere volt freta.
     Quem mortis timuit gradum
qui siccis oculis monstra natantia,
     qui vidit mare turbidum et
infamis scopulos Acroceraunia?
     Nequicquam deus abscidit
prudens Oceano dissociabili
     terras, si tamen impiae
non tangenda rates transiliunt vada.
     Audax omnia perpeti
gens humana ruit per vetitum nefas;
     audax Iapeti genus
ignem fraude mala gentibus intulit;
     post ignem aetheria domo
subductum macies et nova febrium
     terris incubuit cohors
semotique prius tarda necessitas
     leti corripuit gradum.
Expertus vacuum Daedalus aera
     pennis non homini datis;
perrupit Acheronta Herculeus labor.
     Nil mortalibus ardui est;
caelum ipsum petimus stultitia neque
     per nostrum patimur scelus
iracunda Iovem ponere fulmina.
`
    },
    {
        id: 3,
        title: "IV",
        textContent: `
Soluitur acris hiems grata vice veris et Favoni
     trahuntque siccas machinae carinas,
ac neque iam stabulis gaudet pecus aut arator igni
     nec prata canis albicant pruinis.
Iam Cytherea choros ducit Venus imminente luna
     iunctaeque Nymphis Gratiae decentes
alterno terram quatiunt pede, dum gravis Cyclopum
     Volcanus ardens visit officinas.
Nunc decet aut viridi nitidum caput impedire myrto
     aut flore, terrae quem ferunt solutae;
nunc et in umbrosis Fauno decet immolare lucis,
     seu poscat agna sive malit haedo.
Pallida Mors aequo pulsat pede pauperum tabernas
     regumque turris. O beate Sesti,
vitae summa brevis spem nos vetat inchoare longam.
     Iam te premet nox fabulaeque Manes
et domus exilis Plutonia, quo simul mearis,
     nec regna vini sortiere talis
nec tenerum Lycidan mirabere, quo calet iuventus
     nunc omnis et mox virgines tepebunt.
`
    },
    {
        id: 4,
        title: "V",
        textContent: `
Quis multa gracilis te puer in rosa
perfusus liquidis urget odoribus
     grato, Pyrrha, sub antro?
     cui flavam religas comam,

simplex munditiis? Heu quotiens fidem
mutatosque deos flebit et aspera
     nigris aequora ventis
     emirabitur insolens,

qui nunc te fruitur credulus aurea,
qui semper vacuam, semper amabilem
     sperat, nescius aurae
     fallacis. Miseri, quibus

intemptata nites. Me tabula sacer
votiva paries indicat uvida
     suspendisse potenti
     vestimenta maris deo.
`
    },
    {
        id: 5,
        title: "VI",
        textContent: `
Scriberis Vario fortis et hostium
uictor, Maeonii carminis alite,
quam rem cumque ferox nauibus aut equis
     miles te duce gesserit.

Nos, Agrippa, neque haec dicere nec gravem
Pelidae stomachum cedere nescii,
nec cursus duplicis per mare Vlixei
     nec saevam Pelopis domum

conamur, tenues grandia, dum pudor
inbellisque lyrae Musa potens vetat
laudes egregii Caesaris et tuas
     culpa deterere ingeni.

Quis Martem tunica tectum adamantina
digne scripserit aut pulvere Troico
nigrum Merionen aut ope Palladis
     Tydiden superis parem?

Nos convivia, nos proelia virginum
sectis in iuvenes unguibus acrium
cantamus, vacui sive quid urimur
     non praeter solitum leves.
`
    },
    {
        id: 6,
        title: "VII",
        textContent: `
Laudabunt alii claram Rhodon aut Mytilenen
     aut Ephesum bimarisve Corinthi
moenia vel Baccho Thebas vel Apolline Delphos
     insignis aut Thessala Tempe;
sunt quibus unum opus est intactae Palladis urbem
     carmine perpetuo celebrare et
undique decerptam fronti praeponere olivam;
     plurimus in Iunonis honorem
aptum dicet equis Argos ditesque Mycenas:
     me nec tam patiens Lacedaemon
nec tam Larisae percussit campus opimae
     quam domus Albuneae resonantis
et praeceps Anio ac Tiburni lucus et uda
     mobilibus pomaria riuis.
Albus ut obscuro deterget nubila caelo
     saepe Notus neque parturit imbris
perpetuo, sic tu sapiens finire memento
     tristitiam vitaeque labores
molli, Plance, mero, seu te fulgentia signis
     castra tenent seu densa tenebit
Tiburis umbra tui. Teucer Salamina patremque
     cum fugeret, tamen uda Lyaeo
tempora populea fertur uinxisse corona,
     sic tristis affatus amicos:
'Quo nos cumque feret melior fortuna parente,
     ibimus, o socii comitesque.
Nil desperandum Teucro duce et auspice Teucro:
     certus enim promisit Apollo
ambiguam tellure nova Salamina futuram.
     O fortes peioraque passi
mecum saepe viri, nunc vino pellite curas;
     cras ingens iterabimus aequor.'
`
    },
    {
        id: 7,
        title: "VIII",
        textContent: `
     Lydia, dic, per omnis
te deos oro, Sybarin cur properes amando
     perdere, cur apricum
oderit Campum, patiens pulveris atque solis,
     cur neque militaris
inter aequalis equitet, Gallica nec lupatis
     temperet ora frenis.
Cur timet flavum Tiberim tangere? Cur olivum
     sanguine viperino
cautius vitat neque iam livida gestat armis
     bracchia, saepe disco
saepe trans finem iaculo nobilis expedito?
     quid latet, ut marinae
filium dicunt Thetidis sub lacrimosa Troia
     funera, ne virilis
cultus in caedem et Lycias proriperet catervas?
`
    },
    {
        id: 8,
        title: "IX",
        textContent: `
Vides ut alta stet nive candidum
Soracte nec iam sustineant onus
     silvae laborantes geluque
     flumina constiterint acuto?

Dissolve frigus ligna super foco
large reponens atque benignius
     deprome quadrimum Sabina,
     o Thaliarche, merum diota.


Permitte divis cetera, qui simul
strauere ventos aequore fervido
     deproeliantis, nec cupressi
     nec veteres agitantur orni.

Quid sit futurum cras, fuge quaerere, et
quem fors dierum cumque dabit, lucro
     adpone nec dulcis amores
     sperne, puer, neque tu choreas,

donec virenti canities abest
morosa. Nunc et Campus et areae
     lenesque sub noctem susurri
     composita repetantur hora,

nunc et latentis proditor intumo
gratus puellae risus ab angulo
     pignusque dereptum lacertis
     aut digito male pertinaci.
`
    },
    {
        id: 9,
        title: "X",
        textContent: `
Mercuri, facunde nepos Atlantis,
qui feros cultus hominum recentum
voce formasti catus et decorae
     more palaestrae,

te canam, magni Iovis et deorum
nuntium curvaeque lyrae parentem,
callidum quicquid placuit iocoso
     condere furto.

Te, boves olim nisi reddidisses
per dolum amotas, puerum minaci
voce dum terret, viduus pharetra
     risit Apollo.

Quin et Atridas duce te superbos
Ilio dives Priamus relicto
Thessalosque ignis et iniqua Troiae
     castra fefellit.

Tu pias laetis animas reponis
sedibus virgaque levem coerces
aurea turbam, superis deorum
     gratus et imis.
`
    },
    {
        id: 10,
        title: "XI",
        textContent: `
Tu ne quaesieris (scire nefas) quem mihi, quem tibi
finem di dederint, Leuconoe, nec Babylonios
temptaris numeros. Ut melius quicquid erit pati!
Seu pluris hiemes seu tribuit Iuppiter ultimam,
quae nunc oppositis debilitat pumicibus mare
Tyrrhenum, sapias, vina liques et spatio brevi
spem longam reseces. Dum loquimur, fugerit invida
aetas: carpe diem, quam minimum credula postero.
`
    },
    {
        id: 11,
        title: "XII",
        textContent: `
Quem virum aut heroa lyra vel acri
tibia sumis celebrare, Clio?
Quem deum? Cuius recinet iocosa
     nomen imago

aut in umbrosis Heliconis oris
aut super Pindo gelidove in Haemo?
Unde vocalem temere insecutae
     Orphea silvae

arte materna rapidos morantem
fluminum lapsus celerisque ventos,
blandum et auritas fidibus canoris
     ducere quercus.

Quid prius dicam solitis parentis
laudibus, qui res hominum ac deorum,
qui mare ac terras variisque mundum
     temperat horis?

Unde nil maius generatur ipso
nec viget quicquam simile aut secundum;
proximos illi tamen occupabit
     Pallas honores.

Proeliis audax, neque te silebo,
Liber, et saevis inimica virgo
beluis, nec te, metuende certa
     Phoebe sagitta.

Dicam et Alciden puerosque Ledae,
hunc equis, illum superare pugnis
nobilem; quorum simul alba nautis
     stella refulsit,

defluit saxis agitatus umor,
concidunt venti fugiuntque nubes
et minax, quod sic volvere, ponto
     unda recumbit.

Romulum post hos prius an quietum
Pompili regnum memorem, an superbos
Tarquini fasces, dubito, an Catonis
     nobile letum.

Regulum et Scauros animaeque magnae
prodigum Paulum superante Poeno
gratus insigni referam Camena
     Fabriciumque.

Hunc et incomptis Curium capillis
utilem bello tulit et Camillum
saeva paupertas et avitus apto
     cum lare fundus.

Crescit occulto velut arbor aevo
fama Marcelli; micat inter omnis
Iulium sidus, velut inter ignis
     luna minores.

Gentis humanae pater atque custos,
orte Saturno, tibi cura magni
Caesaris fatis data: tu secundo
     Caesare regnes.

Ille seu Parthos Latio imminentis
egerit iusto domitos triumpho
sive subiectos Orientis orae
     Seras et Indos,

te minor laetum reget aequus orbem:
tu gravi curru quaties Olympum,
tu parum castis inimica mittes
     fulmina lucis.
`
    },
    {
        id: 12,
        title: "XIII",
        textContent: `
     Cum tu, Lydia, Telephi
cervicem roseam, cerea Telephi
     laudas bracchia, vae, meum
fervens difficili bile tumet iecur.
     Tunc nec mens mihi nec color
certa sede manet, umor et in genas
     furtim labitur, arguens
quam lentis penitus macerer ignibus.
     Uror, seu tibi candidos
turparunt umeros inmodicae mero
     rixae, sive puer furens
inpressit memorem dente labris notam.
     Non, si me satis audias,
speres perpetuum dulcia barbare
     laedentem oscula, quae Venus
quinta parte sui nectaris imbuit.
     Felices ter et amplius
quos inrupta tenet copula nec malis
     divolsus querimoniis
suprema citius solvet amor die.
`
    },
    {
        id: 13,
        title: "XIV",
        textContent: `
O navis, referent in mare te novi
fluctus. O quid agis? Fortiter occupa
     portum. Nonne vides ut
     nudum remigio latus,

et malus celeri saucius Africo
antemnaque gemant ac sine funibus
     vix durare carinae
     possint imperiosius

aequor? Non tibi sunt integra lintea,
non di, quos iterum pressa voces malo.
     Quamvis Pontica pinus,
     silvae filia nobilis,

iactes et genus et nomen inutile:
nil pictis timidus navita puppibus
     fidit. Tu, nisi ventis
     debes ludibrium, cave.

Nuper sollicitum quae mihi taedium,
nunc desiderium curaque non levis,
     interfusa nitentis
     vites aequora Cycladas.
`
    },
    {
        id: 14,
        title: "XV",
        textContent: `
Pastor cum traheret per freta navibus
Idaeis Helenen perfidus hospitam,
ingrato celeris obruit otio
     ventos ut caneret fera

Nereus fata: 'Mala ducis avi domum
quam multo repetet Graecia milite,
coniurata tuas rumpere nuptias
     et regnum Priami vetus.

Heu, heu, quantus equis, quantus adest viris
sudor! Quanta moves funera Dardanae
genti! Iam galeam Pallas et aegida
     currusque et rabiem parat.

Nequicquam Veneris praesidio ferox
pectes caesariem grataque feminis
inbelli cithara carmina divides;
     nequicquam thalamo gravis

hastas et calami spicula Cnosii
vitabis strepitumque et celerem sequi
Aiacem: tamen, heu serus, adulteros
     crines pulvere collines.

Non Laertiaden, exitium tuae
gentis, non Pylium Nestora respicis?
Urgent inpavidi te Salaminius
     Teucer, te Sthenelus sciens

pugnae, sive opus est imperitare equis,
non auriga piger; Merionen quoque
nosces. Ecce furit te reperire atrox
     Tydides melior patre,

quem tu, cervus uti vallis in altera
visum parte lupum graminis inmemor,
sublimi fugies mollis anhelitu,
     non hoc pollicitus tuae.

Iracunda diem proferet Ilio
matronisque Phrygum classis Achillei;
post certas hiemes uret Achaicus
     ignis Iliacas domos.'
`
    },
    {
        id: 15,
        title: "XVI",
        textContent: `
O matre pulchra filia pulchrior,
quem criminosis cumque voles modum
     pones iambis, sive flamma
     sive mari libet Hadriano.

Non Dindymene, non adytis quatit
mentem sacerdotum incola Pythius,
     non Liber aeque, non acuta
     sic geminant Corybantes aera,

tristes ut irae, quas neque Noricus
deterret ensis nec mare naufragum
     nec saevus ignis nec tremendo
     Iuppiter ipse ruens tumultu.

Fertur Prometheus addere principi
limo coactus particulam undique
     desectam et insani leonis
     vim stomacho apposuisse nostro.

Irae Thyesten exitio gravi
strauere et altis urbibus ultimae
     stetere causae, cur perirent
     funditus inprimeretque muris

hostile aratrum exercitus insolens.
Conpesce mentem: me quoque pectoris
     temptavit in dulci iuventa
     feruor et in celeres iambos

misit furentem. Nunc ego mitibus
mutare quaero tristia, dum mihi
     fias recantatis amica
     opprobriis animumque reddas.
`
    },
    {
        id: 16,
        title: "XVII",
        textContent: `
Velox amoenum saepe Lucretilem
mutat Lycaeo Faunus et igneam
     defendit aestatem capellis
     usque meis pluviosque ventos.

Inpune tutum per nemus arbutos
quaerunt latentis et thyma deviae
     olentis uxores mariti
     nec viridis metuunt colubras

nec Martialis haediliae lupos,
utcumque dulci, Tyndari, fistula
     valles et Usticae cubantis
     levia personuere saxa.

Di me tuentur, dis pietas mea
et Musa cordi est. Hic tibi copia
     manabit ad plenum benigno
     ruris honorum opulenta cornu;

hic in reducta valle Caniculae
vitabis aestus et fide Teia
     dices laborantis in uno
     Penelopen vitreamque Circen;

hic innocentis pocula Lesbii
duces sub umbra nec Semeleius
     cum Marte confundet Thyoneus
     proelia nec metues protervum

suspecta Cyrum, ne male dispari
incontinentis iniciat manus
     et scindat haerentem coronam
     crinibus inmeritamque vestem.
`
    },
    {
        id: 17,
        title: "XVIII",
        textContent: `
Nullam, Vare, sacra vite prius severis arborem
circa mite solum Tiburis et moenia Catili;
siccis omnia nam dura deus proposuit neque
mordaces aliter diffugiunt sollicitudines.
Quis post vina gravem militiam aut pauperiem crepat?
Quis non te potius, Bacche pater, teque decens Venus?
Ac ne quis modici transiliat munera Liberi,
Centaurea monet cum Lapithis rixa super mero
debellata, monet Sithoniis non levis Euhius,
cum fas atque nefas exiguo fine libidinum
discernunt avidi. Non ego te, candide Bassareu,
invitum quatiam nec variis obsita frondibus
sub divum rapiam. Saeva tene cum Berecyntio
cornu tympana, quae subsequitur caecus amor sui
et tollens vacuum plus nimio gloria verticem
arcanique fides prodiga, perlucidior vitro.
`
    },
    {
        id: 18,
        title: "XIX",
        textContent: `
     Mater saeva Cupidinum
Thebanaeque iubet me Semelae puer
     et lasciva Licentia
finitis animum reddere amoribus.
     Urit me Glycerae nitor
splendentis Pario marmore purius;
     urit grata proteruitas
et voltus nimium lubricus aspici.
     In me tota ruens Venus
Cyprum deseruit, nec patitur Scythas
     aut versis animosum equis
Parthum dicere nec quae nihil attinent.
     Hic vivum mihi caespitem, hic
verbenas, pueri, ponite turaque
     bimi cum patera meri:
mactata veniet lenior hostia.
`
    },
    {
        id: 19,
        title: "XX",
        textContent: `
Vile potabis modicis Sabinum
cantharis, Graeca quod ego ipse testa
conditum levi, datus in theatro
     cum tibi plausus,

care Maecenas eques, ut paterni
fluminis ripae simul et iocosa
redderet laudes tibi Vaticani
     montis imago.

Caecubum et prelo domitam Caleno
tu bibes uvam; mea nec Falernae
temperant vites neque Formiani
     pocula colles.
`
    },
    {
        id: 20,
        title: "XXI",
        textContent: `
Dianam tenerae dicite virgines,
intonsum, pueri, dicite Cynthium
     Latonamque supremo
     dilectam penitus Iovi;

vos laetam fluviis et nemorum coma,
quaecumque aut gelido prominet Algido,
     nigris aut Erymanthi
     silvis aut viridis Gragi;

vos Tempe totidem tollite laudibus
natalemque, mares, Delon Apollinis
     insignemque pharetra
     fraternaque umerum lyra.

Hic bellum lacrimosum, hic miseram famem
pestemque a populo et principe Caesare in
     Persas atque Britannos
     vestra motus aget prece.
`
    },
    {
        id: 21,
        title: "XXII",
        textContent: `
Integer vitae scelerisque purus
non eget Mauris iaculis neque arcu
nec venenatis gravida sagittis,
     Fusce, pharetra,

sive per Syrtis iter aestuosas
sive facturus per inhospitalem
Caucasum vel quae loca fabulosus
     lambit Hydaspes.

Namque me silva lupus in Sabina,
dum meam canto Lalagen et ultra
terminum curis vagor expeditis,
     fugit inermem,

quale portentum neque militaris
Daunias latis alit aesculetis
nec Iubae tellus generat, leonum
     arida nutrix.

Pone me pigris ubi nulla campis
arbor aestiva recreatur aura,
quod latus mundi nebulae malusque
     Iuppiter urget;

pone sub curru nimium propinqui
solis in terra domibus negata:
dulce ridentem Lalagen amabo,
     dulce loquentem.
`
    },
    {
        id: 22,
        title: "XXIII",
        textContent: `
Vitas inuleo me similis, Chloe,
quaerenti pavidam montibus aviis
     matrem non sine vano
     aurarum et silvae metu.

Nam seu mobilibus veris inhorruit
adventus folliis, seu virides rubum
     dimovere lacertae,
     et corde et genibus tremit.

Atqui non ego te, tigris ut aspera
Gaetulusue leo, frangere persequor:
     tandem desine matrem
     tempestiva sequi viro.
`
    },
    {
        id: 23,
        title: "XXIV",
        textContent: `
Quis desiderio sit pudor aut modus
tam cari capitis? Praecipe lugubris
cantus, Melpomene, cui liquidam pater
     vocem cum cithara dedit.

Ergo Quintilium perpetuus sopor
urget? Cui Pudor et Iustitiae soror,
incorrupta Fides, nudaque Veritas
     quando ullum inveniet parem?

Multis ille bonis flebilis occidit,
nulli flebilior quam tibi, Vergili.
Tu frustra pius, heu, non ita creditum
     poscis Quintilium deos.

Quid si Threicio blandius Orpheo
auditam moderere arboribus fidem?
Num vanae redeat sanguis imagini,
     quam virga semel horrida,

non lenis precibus fata recludere,
nigro compulerit Mercurius gregi?
durum: sed levius fit patientia
     quicquid corrigere est nefas.
`
    },
    {
        id: 24,
        title: "XXV",
        textContent: `
Parcius iunctas quatiunt fenestras
iactibus crebris iuvenes proterui
nec tibi somnos adimunt amatque
     ianua limen,

quae prius multum facilis movebat
cardines. Audis minus et minus iam:
'Me tuo longas perevnte noctes,
     Lydia, dormis?'

Invicem moechos anus arrogantis
flebis in solo levis angiportu
Thracio bacchante magis sub
     interlunia vento,

cum tibi flagrans amor et libido,
quae solet matres furiare equorum,
saeviet circa iecur ulcerosum
     non sine questu,

laeta quod pubes hedera virenti
gaudeat pulla magis atque myrto,
aridas frondes hiemis sodali
     dedicet Euro.
`
    },
    {
        id: 25,
        title: "XXVI",
        textContent: `
Musis amicus tristitiam et metus
tradam protervis in mare Creticum
     portare ventis, quis sub Arcto
     rex gelidae metuatur orae,

quid Tiridaten terreat, unice
securus. O quae fontibus integris
     gaudes, apricos necte flores,
     necte meo Lamiae coronam,

Piplea dulcis. Nil sine te mei
prosunt honores; hunc fidibus novis,
     hunc Lesbio sacrare plectro
     teque tuasque decet sorores.
`
    },
    {
        id: 26,
        title: "XXVII",
        textContent: `
Natis in usum laetitiae scyphis
pugnare Thracum est; tollite barbarum
     morem verecundumque Bacchum
     sanguineis prohibete rixis.

Vino et lucernis Medus acinaces
immane quantum discrepat; impium
     lenite clamorem, sodales,
     et cubito remanete presso.

Voltis severi me quoque sumere
partem Falerni? Dicat Opuntiae
     frater Megyllae quo beatus
     volnere, qua pereat sagitta.

Cessat voluntas? Non alia bibam
mercede. Quae te cumque domat Venus
     non erubescendis adurit
     ignibus ingenuoque semper

amore peccas. Quicquid habes, age,
depone tutis auribus. A! miser,
     quanta laborabas Charybdi,
     digne puer meliore flamma.

Quae saga, quis te solvere Thessalis
magus venenis, quis poterit deus?
     vix inligatum te triformi
     Pegasus expediet Chimaera.
`
    },
    {
        id: 27,
        title: "XXVIII",
        textContent: `
Te maris et terrae numeroque carentis harenae
     mensorem cohibent, Archyta,
pulveris exigui prope latum parva Matinum
     munera nec quicquam tibi prodest
aerias temptasse domos animoque rotundum
     percurrisse polum morituro.
Occidit et Pelopis genitor, conviva deorum,
     Tithonusque remotus in auras
et Iovis arcanis Minos admissus habentque
     Tartara Panthoiden iterum Orco
demissum, quamvis clipeo Troiana refixo
     tempora testatus nihil ultra
nervos atque cutem morti concesserat atrae,
     iudice te non sordidus auctor
naturae verique. Sed omnis una manet nox
     et calcanda semel via leti.
Dant alios Furiae toruo spectacula Marti,
     exitio est avidum mare nautis;
mixta senum ac iuvenum densentur funera, nullum
     saeva caput Proserpina fugit.
Me quoque devexi rapidus comes Orionis
     Illyricis Notus obruit undis.
At tu, nauta, vagae ne parce malignus harenae
     ossibus et capiti inhumato
particulam dare: sic, quodcumque minabitur Eurus
     fluctibus Hesperiis, Venusinae
plectantur silvae te sospite multaque merces,
     unde potest, tibi defluat aequo
ab Iove Neptunoque sacri custode Tarenti.
     Neglegis inmeritis nocituram
postmodo te natis fraudem committere? Fors et
     debita iura vicesque superbae
te maneant ipsum: precibus non linquar inultis
     teque piacula nulla resolvent.
Quamquam festinas, non est mora longa; licebit
     iniecto ter pulvere curras.
`
    },
    {
        id: 28,
        title: "XXIX",
        textContent: `
Icci, beatis nunc Arabum invides
gazis et acrem militiam paras
     non ante devictis Sabaeae
     regibus horribilique Medo

nectis catenas? Quae tibi virginum
sponso necato barbara serviet?
     puer quis ex aula capillis
     ad cyathum statuetur unctis,

doctus sagittas tendere Sericas
arcu paterno? Quis neget arduis
     pronos relabi posse rivos
     montibus et Tiberim reverti,

cum tu coemptos undique nobilis
libros Panaeti Socraticam et domum
     mutare loricis Hiberis,
     pollicitus meliora, tendis?
`
    },
    {
        id: 29,
        title: "XXX",
        textContent: `
O Venus regina Cnidi Paphique,
sperne dilectam Cypron et vocantis
ture te multo Glycerae decoram
     transfer in aedem.

Fervidus tecum puer et solutis
Gratiae zonis properentque Nymphae
et parum comis sine te Iuventas
     Mercuriusque.
`
    },
    {
        id: 30,
        title: "XXXI",
        textContent: `
Quid dedicatum poscit Apollinem
vates? Quid orat, de patera novum
     fundens liquorem? Non opimae
     Sardiniae segetes feraces,

non aestuosae grata Calabriae
armenta, non aurum aut ebur Indicum,
     non rura, quae Liris quieta
     mordet aqua taciturnus amnis.

Premant Calena falce quibus dedit
Fortuna vitem, dives et aureis
     mercator exsiccet culillis
     vina Syra reparata merce,

dis carus ipsis, quippe ter et quater
anno revisens aequor Atlanticum
     inpune: me pascust olivae,
     me cichorea levesque malvae.

Frui paratis et valido mihi,
Latoe, dones, at, precor, integra
     cum mente, nec turpem senectam
     degere nec cithara carentem.
`
    },
    {
        id: 31,
        title: "XXXII",
        textContent: `
Poscimur. Si quid vacui sub umbra
lusimus tecum, quod et hunc in annum
vivat et pluris, age, dic Latinum,
     barbite, carmen,

Lesbio primum modulate civi,
qui, ferox bello, tamen inter arma,
sive iactatam religarat udo
     litore navem,

Liberum et Musas Veneremque et illi
semper haerentem puerum canebat
et Lycum nigris oculis nigroque
     crine decorum.

O decus Phoebi et dapibus supremi
grata testudo Iovis, o laborum
dulce lenimen, mihi cumque salve
     rite vocanti.
`
    },
    {
        id: 32,
        title: "XXXIII",
        textContent: `
Albi, ne doleas plus nimio memor
inmitis Glycerae neu miserabilis
descantes elegos, cur tibi iunior
     laesa praeniteat fide.

Insignem tenui fronte Lycorida
Cyri torret amor, Cyrus in asperam
declinat Pholoen: sed prius Apulis
     iungentur capreae lupis

quam turpi Pholoe peccet adultero.
Sic visum Veneri, cui placet imparis
formas atque animos sub iuga aenea
     saevo mittere cum ioco.

Ipsum me melior cum peteret Venus,
grata detinuit compede Myrtale
libertina, fretis acrior Hadriae
     curuantis Calabros sinus.
`
    },
    {
        id: 33,
        title: "XXXIV",
        textContent: `
Parcus deorum cultor et infrequens,
insanientis dum sapientiae
     consultus erro, nunc retrorsum
     vela dare atque iterare cursus

cogor relictos: namque Diespiter
igni corusco nubila dividens
     plerumque, per purum tonantis
     egit equos volucremque currum,

quo bruta tellus et vaga flumina,
quo Styx et invisi horrida Taenari
     sedes Atlanteusque finis
     concutitur. Valet ima summis

mutare et insignem attenuat deus,
obscura promens; hinc apicem rapax
     Fortuna cum stridore acuto
     sustulit, hic posuisse gaudet.
`
    },
    {
        id: 34,
        title: "XXXV",
        textContent: `
O diva, gratum quae regis Antium,
praesens vel imo tollere de gradu
     mortale corpus vel superbos
     vertere funeribus triumphos,

te pauper ambit sollicita prece
ruris colonus, te dominam aequoris
     quicumque Bythyna lacessit
     Carpathium pelagus carina.

Te Dacus asper, te profugi Scythae,
urbesque gentesque et Latium ferox
     regumque matres barbarorum et
     purpurei metuunt tyranni,

iniurioso ne pede proruas
stantem columnam, neu populus frequens
     ad arma cessantis, ad arma
     concitet imperiumque frangat.

Te semper anteit serva Necessitas,
clavos trabalis et cuneos manu
     gestans aena nec severus
     uncus abest liquidumque plumbum;

te Spes et albo rara Fides colit
velata panno nec comitem abnegat,
     utcumque mutata potentis
     veste domos inimica linquis;

at volgus infidum et meretrix retro
periura cedit, diffugiunt cadis
     cum faece siccatis amici,
     ferre iugum pariter dolosi.

Serves iturum Caesarem in ultimos
orbis Britannos et iuvenum recens
     examen Eois timendum
     partibus Oceanoque rubro.

Heu heu, cicatricum et sceleris pudet
fratrumque. Quid nos dura refugimus
     aetas, quid intactum nefasti
     liquimus? Unde manum iuventus

metu deorum continuit? Quibus
pepercit aris? O utinam nova
     incude diffingas retusum in
     Massagetas Arabasque ferrum!
`
    },
    {
        id: 35,
        title: "XXXVI",
        textContent: `
     Et ture et fidibus iuvat
placare et vituli sanguini debito
     custodes Numidae deos,
qui nunc Hesperia sospes ab ultima
     caris multa sodalibus,
nulli plura tamen dividit oscula
     quam dulci Lamiae, memor
actae non alio rege puertiae
     mutataeque simul togae.
Cressa ne careat pulchra dies nota
     neu promptae modus amphorae
neu morem in Salium sit requies pedum
     neu multi Damalis meri
Bassum Threicia vincat amystide
     neu desint epulis rosae
neu vivax apium neu breve lilium.
     Omnes in Damalin putres
deponent oculos nec Damalis nouo
     divelletur adultero
lascivis hederis ambitiosior.
`
    },
    {
        id: 36,
        title: "XXXVII",
        textContent: `
Nunc est bibendum, nunc pede libero
pulsanda tellus, nunc Saliaribus
     ornare pulvinar deorum
     tempus erat dapibus, sodales.

Antehac nefas depromere Caecubum
cellis avitis, dum Capitolio
     regina dementis ruinas
     funus et imperio parabat

contaminato cum grege turpium
morbo virorum, quidlibet impotens
     sperare fortunaque dulci
     ebria. Sed minuit furorem

vix una sospes navis ab ignibus,
mentemque lymphatam Mareotico
     redegit in veros timores
     Caesar, ab Italia volantem

remis adurgens, accipiter velut
mollis columbas aut leporem citus
     venator in campis nivalis
     Haemoniae, daret ut catenis

fatale monstrum. Quae generosius
perire quaerens nec muliebriter
     expavit ensem nec latentis
     classe cita reparavit oras,

ausa et iacentem visere regiam
voltu sereno, fortis et asperas
     tractare serpentes, ut atrum
     corpore conbiberet venenum,

deliberata morte ferocior:
saevis Liburnis scilicet invidens
     privata deduci superbo,
     non humilis mulier, triumpho.
`
    },
    {
        id: 37,
        title: "XXXVIII",
        textContent: `
Persicos odi, puer, apparatus,
displicent nexae philyra coronae,
mitte sectari, rosa quo locorum
     sera moretur.

Simplici myrto nihil adlabores
sedulus, curo: neque te ministrum
dedecet myrtus neque me sub arta
     vite bibentem.
`
    }
]