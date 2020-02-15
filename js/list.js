
function chooseSong() {
		var node = document.createElement("p");
		let songs = [
			"100 Damian Marley – Welcome To Jamrock",
			"99 Gorillaz – Feel Good Inc.",
			"98 Amy Winehouse – Back To Black",
			"97 Fleet Foxes – White Winter Hymnal",
			"96 Lady Gaga – Poker Face",
			"95 Mary J. Blige – Family Affair",
			"94 Radiohead – Pyramid Song",
			"93 Snoop Dogg – Drop It Like It’s Hot",
			"92 Brad Paisley – Alcohol",
			"91 Bruce Springsteen – My City Of Ruins",
			"90 Midlake – Roscoe",
			"89 Bright Eyes – Lua",
			"88 Jay-Z – Izzo (H.O.V.A)",
			"87 The Knife – Heartbeats",
			"86 Aaliyah – Try Again",
			"85 Dirty Projectors – Stillness Is The Move",
			"84 Clipse – Grindin",
			"83 The Gossip – Standing In The Way Of Control",
			"82 Jay-Z – Dirt Off Your Shoulder",
			"81 Pink – Get The Party Started",
			"80 Phoenix – 1901",
			"79 Robert Plant & Alison Krauss – Gone Gone Gone",
			"78 LCD Soundsystem – Daft Punk Is Playing At My House",
			"77 Dixie Chicks – Not Ready To Make Nice",
			"76 Madonna – Hung Up",
			"75 Arcade Fire – Rebellion (Lies)",
			"74 TV On The Radio – Wolf Like Me",
			"73 Queens Of The Stone Age – No One Knows",
			"72 Kings Of Leon – Use Somebody",
			"71 Justice – D.A.N.C.E.",
			"70 Arctic Monkeys – I Bet You Look Good On The Dance Floor",
			"69 Santigold – L.E.S. Artistes",
			"68 Coldplay – Viva La Vida",
			"67 Wilco – Jesus, Etc.",
			"66 Madonna – Music",
			"65 Green Day – Boulevard Of Broken Dreams",
			"64 U2 – Vertigo",
			"63 Lil Wayne – A Milli",
			"62 Alicia Keys – Fallin",
			"61 Jet – Are You Gonna Be My Girl",
			"60 Beyoncé – Irreplaceable",
			"59 The Strokes – Hard To Explain",
			"58 The White Stripes – Fell In Love With A Girl",
			"57 The Shins – New Slang",
			"56 Radiohead – Idioteque",
			"55 OutKast – Ms. Jackson",
			"54 Coldplay – The Scientist",
			"53 The Rapture – House Of Jealous Lovers",
			"52 Christina Aguilera – Beautiful",
			"51 D’Angelo – Untitled (How Does It Feel)",
			"50 Beyoncé – Single Ladies",
			"49 The Walkmen – The Rat",
			"48 The Killers – Mr. Brightside",
			"47 Green Day – American Idiot",
			"46 MGMT – Kids",
			"45 Kylie Minogue – Can’t Get You Out Of My Head",
			"44 Britney Spears – Toxic",
			"43 The Roots – The Seed (2.0)",
			"42 Arcade Fire – Wake Up",
			"41 LCD Soundsystem – All My Friends",
			"40 Kelis – Milkshake",
			"39 Modest Mouse – Float On",
			"38 Gorillaz – Clint Eastwood",
			"37 LCD Soundsystem – Losing My Edge",
			"36 U2 – Moment Of Surrender",
			"35 Bruce Springsteen – The Rising",
			"34 Coldplay – Yellow",
			"33 Daft Punk – One More Time",
			"32 Franz Ferdinand – Take Me Out",
			"31 The Flaming Lips – Do You Realize??",
			"30 R. Kelly – Ignition (Remix)",
			"29 Kanye West – Gold Digger",
			"28 Randy Newman – A Few Words In Defense Of Our Country",
			"27 The Postal Service – Such Great Heights",
			"26 Coldplay – Clocks",
			"25 Missy Elliott – Work It",
			"24 Radiohead – Everything In Its Right Place",
			"23 Rihanna – Umbrella",
			"22 Amerie – 1 Thing",
			"21 OutKast – B.O.B.",
			"20 Justin Timberlake – Cry Me A River",
			"19 Kanye West – Jesus Walks",
			"18 Kelly Clarkson – Since U Been Gone",
			"17 Bob Dylan – Mississippi",
			"16 The Strokes – Last Nite",
			"15 Johnny Cash – Hurt",
			"14 Missy Elliott – Get Ur Freak On",
			"13 50 Cent – In Da Club",
			"12 Eminem – Lose Yourself",
			"11 MGMT – Time To Pretend",
			"10 Eminem – Stan",
			"9 U2 – Beautiful Day",
			"8 Amy Winehouse – Rehab",
			"7 Yeah Yeah Yeahs – Maps",
			"6 The White Stripes – Seven Nation Army",
			"5 M.I.A. – Paper Planes",
			"4 OutKast – Hey Ya!",
			"3 Beyoncé – Crazy In Love",
			"2 Jay-Z – 99 Problems",
			"1 Gnarls Barkley – Crazy"
		];
		let randIndex = Math.floor(Math.random() * songs.length);
		node.innerHTML = songs[randIndex];
		document.body.appendChild(node);

		// var stan = document.querySelector("span");
		var stan1 = document.getElementById("stan1");
  		// stan1.insertBefore(node, stan1.childNodes[0]);
  		stan1.replaceChild(node, stan1.childNodes[0]);
	}

	function chooseAlbum() {
		var node = document.createElement("p");
		let albums = [ 
			"100 Leonard Cohen – 10 New Songs",
			"99 The Hold Steady – Almost Killed Me",
			"98 TV On The Radio – Return To Cookie Mountain",
			"97 Wilco – Sky Blue Sky",
			"96 The Streets – Original Pirate Material",
			"95 Alicia Keys – Songs In A Minor",
			"94 The Libertines – Up The Brackett",
			"93 Johnny Cash – Unearthed",
			"92 Bon Iver – For Emma, Forever Ago",
			"91 The Hives – Veni Vidi Vicious",
			"90 Amadou & Miriam – Dimanche A Bamako",
			"89 Radiohead – Hail To The Thief",
			"88 Brian Wilson – Smile",
			"87 Gnarls Barkley – St. Elsewhere",
			"86 The Postal Service – Give Up",
			"85 Coldplay – Viva La Vida",
			"84 Eminem – The Eminem Show",
			"83 The Black Keys – Attack & Release",
			"82 Queens Of The Stone Age – Rated R",
			"81 Ryan Adams – Gold",
			"80 Kings Of Leon – Youth And Young Manhood",
			"79 The New Pornographers – Electric Version",
			"78 Sufjan Stevens – Illinoise",
			"77 Yo La Tengo – And Then Nothing Turned Itself Inside Out",
			"76 Sigur Rós – ( )",
			"75 Arcade Fire – Neon Bible",
			"74 Red Hot Chili Peppers – Stadium Arcadium",
			"73 Coldplay – Parachutes",
			"72 Franz Ferdinand – Franz Ferdinand",
			"71 Bright Eyes – Lifted Of The Story Is In The Soil, Keep Your Ear To The Ground",
			"70 Sleater-Kinney – The Woods",
			"69 Missy Elliott – Under Construction",
			"68 U2 – How To Dismantle An Atomic Bomb",
			"67 Björk – Vespertine",
			"66 Antony & The Johnsons – I Am A Bird Now",
			"65 Manu Chao – Próxima Estación Esperanza",
			"64 Gillian Welch – Time The Revelator",
			"63 Kanye West – 808s And Heartbreak",
			"62 Johnny Cash – American III: Solitary May",
			"61 The Shins – Oh, Inverted World",
			"60 Phoenix – Wolfgang Amadeus Phoenix",
			"59 Interpol – Turn On The Bright Lights",
			"58 Danger Mouse – The Grey Album",
			"57 Death Cab For Cutie – Transatlanticism",
			"56 Vampire Weekend – Vampire Weekend",
			"55 Robert Plant & Alison Krauss – Raising Sand",
			"54 Norah Jones – Come Away With Me",
			"53 Kings Of Leon – Only By The Night",
			"52 M.I.A. – Arular",
			"51 Spoon – Kill The Moonlight",
			"50 Bright Eyes – I’m Wide Awake It’s Morning",
			"49 Fiona Apple – Extraordinary Machine",
			"48 TV On The Radio – Dear Science",
			"47 Fleet Foxes – Fleet Foxes",
			"46 Justin Timberlake – FutureSex/LoveSounds",
			"45 Kanye West – Graduation",
			"44 System Of A Down – Toxicity",
			"43 The Killers – Hot Fuss",
			"42 Elliott Smith – Figure 8",
			"41 Arctic Monkeys – Whatever People Say I Am, That’s What I’m Not",
			"40 Kanye West – Late Registration",
			"39 Kings Of Leon – Aha Shake Heartbreak",
			"38 Ryan Adams – Heartbreaker",
			"37 50 Cent – Get Rich Or Die Tryin’",
			"36 U2 – No Line On The Horizon",
			"35 PJ Harvey – Stories From The City, Stories From The Sea",
			"34 OutKast – Speakerboxxx/The Love Below",
			"33 Daft Punk – Discovery",
			"32 Lil Wayne – Tha Carter III",
			"31 My Morning Jacket – Z",
			"30 Radiohead – In Rainbows",
			"29 Sigur Rós – Ágætis Byrjun",
			"28 Yeah Yeah Yeahs – Fever To Tell",
			"27 The Flaming Lips – Yoshimi Battles The Pink Robots",
			"26 Cat Power – The Greatest",
			"25 Radiohead – Amnesiac",
			"24 Bruce Springsteen – Magic",
			"23 D’Angelo – Voodoo",
			"22 Green Day – American Idiot",
			"21 Coldplay – A Rush Of Blood To The Head",
			"20 The White Stripes – White Blood Cells",
			"19 Amy Winehouse – Back To Black",
			"18 MGMT – Oracular Spectacular",
			"17 Beck – Sea Change",
			"16 OutKast – Stankonia",
			"15 Bruce Springsteen – The Rising",
			"14 Jay-Z – The Black Album",
			"13 U2 – All That You Can’t Leave Behind",
			"12 LCD Soundsystem – Sound Of Silver",
			"11 Bob Dylan – Love And Theft",
			"10 Kanye West – The College Dropout",
			"9 M.I.A. – Kala",
			"8 Bob Dylan – Modern Times",
			"7 Eminem – The Marshall Mathers LP",
			"6 Arcade Fire – Funeral",
			"5 The White Stripes – Elephant",
			"4 Jay-Z – The Blueprint",
			"3 Wilco – Yankee Hotel Foxtrot",
			"2 The Strokes – Is This It",
			"1 Radiohead – Kid A"
		];

		let randIndex = Math.floor(Math.random() * albums.length);
		node.innerHTML = albums[randIndex];
		document.body.appendChild(node);

		var stan2 = document.getElementById("stan2");
  		stan2.replaceChild(node, stan2.childNodes[0]);
	}
	///////////////////////////////////
	function chooseArtist() {
		var node = document.createElement("p");
		let artists = [
		"1. PABLO PICASSO (1881-1973) – <a href='https://en.wikipedia.org/wiki/Pablo_Picasso' target='_blank'>Picasso</a> is to Art History a giant earthquake with eternal aftermaths. With the possible exception of Michelangelo (who focused his greatest efforts in sculpture and architecture), no other artist had such ambitions at the time of placing his oeuvre in the history of art. Picasso created the avant-garde. Picasso destroyed the avant-garde. He looked back at the masters and surpassed them all. He faced the whole history of art and single-handedly redefined the tortuous relationship between work and spectator.",

		"2. GIOTTO DI BONDONE (c.1267-1337) – It has been said that <a href='https://en.wikipedia.org/wiki/Giotto' target='_blank'>Giotto</a> was the first real painter, like Adam was the first man. We agree with the first part. Giotto continued the Byzantine style of Cimabue and other predecessors, but he earned the right to be included in gold letters in the history of painting when he added a quality unknown to date: emotion.",

		"3. LEONARDO DA VINCI (1452-1519) – For better or for worse, <a href='https://en.wikipedia.org/wiki/Leonardo_da_Vinci' target='_blank'>Leonardo</a> will be forever known as the author of the most famous painting of all time, the \"Gioconda\" or \"Mona Lisa\". But he is more, much more. His humanist, almost scientific gaze, entered the art of the quattrocento and revoluted it with his sfumetto that nobody was ever able to imitate.",

		"4. PAUL CÉZANNE (1839-1906) – \"Cezanne is the father of us all.\" This famous quote has been attributed to both Picasso and Matisse, and certainly it does not matter who actually said it, because in either case would be appropriate. While he exhibited with the Impressionist painters, <a href='https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne' target='_blank'>Cézanne</a> left behind the whole group and developed a style of painting never seen so far, which opened the door for the arrival of Cubism and the rest of the vanguards of the twentieth century.",

		"5. REMBRANDT VAN RIJN (1606-1669) – The fascinating use of the light and shadows in Rembrandt's works seem to reflect his own life, moving from fame to oblivion. <a href='https://en.wikipedia.org/wiki/Rembrandt' target='_blank'>Rembrandt</a> is the great master of Dutch painting, and, along with Velázquez, the main figure of 17th century European Painting. He is, in addition, the great master of the self-portrait of all time, an artist who had never show mercy at the time of depicting himself.",

		"6. DIEGO VELÁZQUEZ (1599-1660) – Along with Rembrandt, one of the summits of Baroque painting. But unlike the Dutch artist, the Sevillan painter spent most of his life in the comfortable but rigid courtesan society. Nevertheless, <a href='https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez' target='_blank'>Velázquez</a> was an innovator, a \"painter of atmospheres\" two centuries before Turner and the Impressionists, which it is shown in his colossal 'royal paintings' (\"Meninas\", \"The Forge of Vulcan\"), but also in his small and memorable sketches of the Villa Medici.",

		"7. WASSILY KANDINSKY (1866-1944) – Although the title of \"father of abstraction\" has been assigned to several artists, from Picasso to Turner, few painters could claim it with as much justice as <a href='https://en.wikipedia.org/wiki/Wassily_Kandinsky' target='_blank'>Kandinsky</a>. Many artists have succeeded in painting emotion, but very few have changed the way we understand art. Wassily Kandinsky is one of them.",

		"8. CLAUDE MONET (1840-1926) – The importance of <a href='https://en.wikipedia.org/wiki/Claude_Monet' target='_blank'>Monet</a> in the history of art is sometimes \"underrated\", as Art lovers tend to see only the overwhelming beauty that emanates from his canvases, ignoring the complex technique and composition of the work (a \"defect\" somehow caused by Monet himself, when he declared that \"I do not understand why everyone discusses my art and pretends to understand, as if it were necessary to understand, when it is simply necessary to love\"). However, Monet's experiments, including studies on the changes in an object caused by daylight at different times of the day; and the almost abstract quality of his \"water lilies\", are clearly a prologue to the art of the twentieth century.",

		"9. CARAVAGGIO (1571-1610) – The tough and violent <a href='https://en.wikipedia.org/wiki/Caravaggio' target='_blank'>Caravaggio</a> is considered the father of Baroque painting, with his spectacular use of lights and shadows. Caravaggio’s chiaroscuro became so famous that many painters started to copy his paintings, creating the 'Caravaggisti' style.",

		"10. JOSEPH MALLORD WILLIAM TURNER (1775-1851) – <a href='https://en.wikipedia.org/wiki/J._M._W._Turner' target='_blank'>Turner</a> is the best landscape painter of Western painting. Whereas he had been at his beginnings an academic painter, Turner was slowly but unstoppably evolving towards a free, atmospheric style, sometimes even outlining the abstraction, which was misunderstood and rejected by the same critics who had admired him for decades.",

		"11. JAN VAN EYCK (1390-1441) – <a href='https://en.wikipedia.org/wiki/Jan_van_Eyck' target='_blank'>Van Eyck</a> is the colossal pillar on which rests the whole Flemish paintings from later centuries, the genius of accuracy, thoroughness and perspective, well above any other artist of his time, either Flemish or Italian.",

		"12. ALBRECHT DÜRER (1471-1528) – The real Leonardo da Vinci of Northern European Rennaisance was <a href='https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer' target='_blank'>Albrecht Dürer</a>, a restless and innovative genious, master of drawing and color. He is one of the first artists to represent nature without artifice, either in his painted landscapes or in his drawings of plants and animals.",

		"13. JACKSON POLLOCK (1912-1956) – The major figure of American Abstract Expressionism, <a href='https://en.wikipedia.org/wiki/Jackson_Pollock' target='_blank'>Pollock</a> created his best works, his famous drips, between 1947 and 1950. After those fascinating years, comparable to Picasso’s blue period or van Gogh’s final months in Auvers, he abandoned the drip, and his latest works are often bold, unexciting works.",

		"14. MICHELANGELO BUONARROTI (1475-1564) – Some readers will be quite surprised to see the man who is, along with Picasso, the greatest artistic genius of all time, out of the \"top ten\" of this list, but the fact is that even <a href='https://en.wikipedia.org/wiki/Michelangelo' target='_blank'>Michelangelo</a> defined himself as \"sculptor\", and even his painted masterpiece (the frescoes in the Sistine Chapel) are often defined as 'painted sculptures'. Nevertheless, that unforgettable masterpiece is enough to guarantee him a place of honor in the history of painting.",

		"15. PAUL GAUGUIN (1848-1903) – One of the most fascinating figures in the history of painting, his works moved from Impressionism (soon abandoned) to a colorful and vigorous symbolism, as can be seen in his 'Polynesian paintings'. Matisse and Fauvism could not be understood without the works of <a href='https://en.wikipedia.org/wiki/Paul_Gauguin' target='_blank'>Paul Gauguin</a>.",

		"16. FRANCISCO DE GOYA (1746-1828) - <a href='https://en.wikipedia.org/wiki/Francisco_Goya' target='_blank'>Goya</a> is an enigma. In the whole History of Art few figures are as complex as the artist born in Fuendetodos, Spain. Enterprising and indefinable, a painter with no rival in all his life, Goya was the painter of the Court and the painter of the people. He was a religious painter and a mystical painter. He was the author of the beauty and eroticism of the 'Maja desnuda' and the creator of the explicit horror of 'The Third of May, 1808'. He was an oil painter, a fresco painter, a sketcher and an engraver. And he never stopped his metamorphosis.",

		"17. VINCENT VAN GOGH (1853-1890) – Few names in the history of painting are now as famous as <a href='https://en.wikipedia.org/wiki/Vincent_van_Gogh' target='_blank'>Van Gogh</a>, despite the complete neglect he suffered in life. His works, strong and personal, are one of the greatest influences in the twentieth century painting, especially in German Expressionism.",

		"18. ÉDOUARD MANET (1832-1883) – <a href='https://en.wikipedia.org/wiki/%C3%89douard_Manet' target='_blank'>Manet</a> was the origin of Impressionism, a revolutionary in a time of great artistic revolutions. His (at the time) quite polemical \"Olympia\" or \"Déjeuner sur l'Herbe\" opened the way for the great figures of Impressionism.",

		"19. MARK ROTHKO (1903-1970) – The influence of <a href='https://en.wikipedia.org/wiki/Mark_Rothko' target='_blank'>Rothko</a> in the history of painting is yet to be quantified, because the truth is that almost 40 years after his death the influence of Rothko's large, dazzling and emotional masses of color continues to increase in many painters of the 21st century.",

		"20. HENRI MATISSE (1869-1954) – Art critics tend to regard <a href='https://en.wikipedia.org/wiki/Henri_Matisse' target='_blank'>Matisse</a> as the greatest exponent of twentieth century painting, only surpassed by Picasso. This is an exaggeration, although the almost pure use of color in some of his works strongly influenced many of the following avant-gardes.",

		"21. RAPHAEL (1483-1520) – Equally loved and hated in different eras, no one can doubt that <a href='https://en.wikipedia.org/wiki/Raphael' target='_blank'>Raphael</a> is one of the greatest geniuses of the Renaissance, with an excellent technique in terms of drawing and color.",

		"22. JEAN-MICHEL BASQUIAT (1960-1988) - <a href='https://en.wikipedia.org/wiki/Jean-Michel_Basquiat' target='_blank'>Basquiat</a> is undoubtedly the most important and famous member of the \"graffiti movement\" that appeared in the New York scene in the early'80s, an artistic movement whose enormous influence on later painting is still to be measured.",

		"23. EDVARD MUNCH (1863-1944) – Modernist in his context, <a href='https://en.wikipedia.org/wiki/Edvard_Munch' target='_blank'>Munch</a> could be also considered the first expressionist painter in history. Works like \"The Scream\" are vital to understanding the twentieth century painting.",

		"24. TITIAN (c.1476-1576) – After the premature death of Giorgione, <a href='https://en.wikipedia.org/wiki/Titian' target='_blank'>Titian</a> became the leading figure of Venetian painting of his time. His use of color and his taste for mythological themes defined the main features of 16th century Venetian Art. His influence on later artists -Rubens, Velázquez...- is extremely important.",

		"25. PIET MONDRIAN (1872 -1944) –  Along with Kandinsky and Malevich, <a href='https://en.wikipedia.org/wiki/Piet_Mondrian' target='_blank'>Mondrian</a> is the leading figure of early abstract painting. After emigrating to New York, Mondrian filled his abstract paintings with a fascinating emotional quality, as we can se in his series of \"boogie-woogies\" created in the mid-40s.",

		"26. PIERO DELLA FRANCESCA (1416-1492) - Despite being one of the most important figures of the quattrocento, the Art of <a href='https://en.wikipedia.org/wiki/Piero_della_Francesca' target='_blank'>Piero della Francesca</a> has been described as “cold”, “hieratic” or even “impersonal”. But with the apparition of Berenson and the great historians of his era, like Michel Hérubel -who defended the “metaphysical dimension” of the paintings by Piero-, his precise and detailed Art finally occupied the place that it deserves in the Art history.",

		"27. PETER PAUL RUBENS (1577-1640) – <a href='https://en.wikipedia.org/wiki/Peter_Paul_Rubens' target='_blank'>Rubens</a> was one of the most prolific painters of all time, thanks in part to the collaboration of his study. Very famous in life, he traveled around Europe to meet orders from very wealthy and important clients. His female nudes are still amazing in our days.",

		"28. ANDY WARHOL (1928-1987) – Brilliant and controversial, <a href='https://en.wikipedia.org/wiki/Andy_Warhol' target='_blank'>Warhol</a> is the leading figure of pop-art and one of the icons of contemporary art. His silkscreen series depicting icons of the mass-media (as a reinterpretation of Monet's series of Water lilies or the Rouen Cathedral) are one of the milestones of contemporary Art, with a huge influence in the Art of our days.",

		"29. JOAN MIRÓ (1893-1983) – Like most geniuses, <a href='https://en.wikipedia.org/wiki/Joan_Mir%C3%B3' target='_blank'>Miro</a> is an unclassificable artist. His interest in the world of the unconscious, those hidden in the depths of the mind, link him with Surrealism, but with a personal style, sometimes closer to Fauvism and Expressionism. His most important works are those from the series of \"Constellations\", created in the early 40s.",

		"30. TOMMASO MASACCIO (1401-1428) – <a href='https://en.wikipedia.org/wiki/Masaccio' target='_blank'>Masaccio</a> was one of the first old masters to use the laws of scientific perspective in his works . One of the greatest innovative painters of the Early Renaissance.",

		"31. MARC CHAGALL (1887-1985) – Artist of dreams and fantasies, <a href='https://en.wikipedia.org/wiki/Marc_Chagall' target='_blank'>Chagall</a> was for all his life an immigrant fascinated by the lights and colors of the places he visited. Few names from the School of Paris of the early twentieth century have contributed so much -and with such variety of ideas- to change modern Art as this man \"impressed by the light,\" as he defined himself.",

		"31. GUSTAVE COURBET (1819-1877) – Leading figure of realism, and a clear precedent for the impressionists, <a href='https://en.wikipedia.org/wiki/Gustave_Courbet' target='_blank'>Courbet</a> was one of the greatest revolutionaries, both as an artist and as a social-activist, of the history of painting. Like Rembrandt and other predecessors, Courbet did not seek to create beauty, but believed that beauty is achieved when and artist represents the purest reality without artifice.",

		"33. NICOLAS POUSSIN (1594-1665) – The greatest among the great French Baroque painters, <a href='https://en.wikipedia.org/wiki/Nicolas_Poussin' target='_blank'>Poussin</a> had a vital influence on French painting for many centuries. His use of color is unique among all the painters of his era.",

		"34. WILLEM DE KOONING (1904-1997) – After <a href='https://en.wikipedia.org/wiki/Willem_de_Kooning' target='_blank'>Pollock</a>, the leading figure of abstract expressionism, though one of his greatest contributions was not to feel limited by the abstraction, often resorting to a heartbreaking figurative painting (his series of \"Women\" are the best example) with a major influence on later artists such as Francis Bacon or Lucian Freud.",

		"35. PAUL KLEE (1879-1940) – In a period of artistic revolutions and innovations, few artists were as crucial as <a href='https://en.wikipedia.org/wiki/Paul_Klee' target='_blank'>Paul Klee</a>. His studies of color, widely taught at the Bauhaus, are unique among all the artists of his time.",

		"36. FRANCIS BACON (1909-1992) - Maximum exponent, along with Lucian Freud, of the so-called \"School of London\", <a href='https://en.wikipedia.org/wiki/Francis_Bacon_(artist)' target='_blank'>Bacon</a>'s style was totally against all canons of painting, not only in those terms related to beauty, but also against the dominance of the Abstract Expressionism of his time.",

		"37. GUSTAV KLIMT (1862-1918) – Half way between modernism and symbolism appears the figure of <a href='https://en.wikipedia.org/wiki/Gustav_Klimt' target='_blank'>Gustav Klimt</a>, who was also devoted to the industrial arts. His nearly abstract landscapes also make him a forerunner of geometric abstraction.",

		"38. EUGÈNE DELACROIX (1798-1863) – <a href='https://en.wikipedia.org/wiki/Eug%C3%A8ne_Delacroix' target='_blank'>Eugène Delacroix</a> is the French romanticism painter \"par excellence\" and one of the most important names in the European painting of the first half of the 19th century. His famous “Liberty leading the People” also demonstrates the capacity of Painting to become the symbol of an era.",

		"39. PAOLO UCCELLO (1397-1475) – “Solitary, eccentric, melancholic and poor”. Giorgio Vasari described with these four words one of the most audacious geniuses of the early Florentine Renaissance, <a href='https://en.wikipedia.org/wiki/Paolo_Uccello' target='_blank'>Paolo Uccello</a>.",

		"40. WILLIAM BLAKE (1757-1827) – Revolutionary and mystic, painter and poet, <a href='https://en.wikipedia.org/wiki/William_Blake' target='_blank'>Blake</a> is one of the most fascinating artists of any era. His watercolors, prints and temperas are filled with a wild imagination (almost crazyness), unique among the artists of his era.",

		"41. KAZIMIR MALEVICH (1878-1935) – Creator of Suprematism, <a href='https://en.wikipedia.org/wiki/Kazimir_Malevich' target='_blank'>Malevich</a> will forever be one of the most controversial figures of the history of art among the general public, divided between those who consider him an essential renewal and those who consider that his works based on polygons of pure colors do not deserve to be considered Art.",

		"42. ANDREA MANTEGNA (1431-1506) – One of the greatest exponents of the Quattrocento, interested in the human figure, which <a href='https://en.wikipedia.org/wiki/Andrea_Mantegna' target='_blank'>he</a> often represented under extreme perspectives (\"The Dead Christ\").",

		"43. JAN VERMEER (1632-1675) – <a href='https://en.wikipedia.org/wiki/Johannes_Vermeer' target='_blank'>Vermeer</a> was the leading figure of the Delft School, and for sure one of the greatest landscape painters of all time. Works such as \"View of the Delft\" are considered almost \"impressionist\" due to the liveliness of his brushwork. He was also a skilled portraitist.",

		"44. EL GRECO (1541-1614) – One of the most original and fascinating artists of <a href='https://en.wikipedia.org/wiki/El_Greco' target='_blank'>his</a> era, with a very personal technique that was admired, three centuries later, by the impressionist painters.",

		"45. CASPAR DAVID FRIEDRICH (1774-1840) – Leading figure of German Romantic painting, <a href='https://en.wikipedia.org/wiki/Caspar_David_Friedrich' target='_blank'>Friedrich</a> is still identified as the painter of landscapes of loneliness and distress, with human figures facing the terrible magnificence of nature.",

		"46. WINSLOW HOMER (1836-1910) – The main figure of American painting of his era, <a href='https://en.wikipedia.org/wiki/Winslow_Homer' target='_blank'>Homer</a> was a breath of fresh air for the American artistic scene, which was \"stuck\" in academic painting and the more romantic Hudson River School. Homer's loose and lively brushstroke is almost impressionistic.",

		"47. MARCEL DUCHAMP (1887-1968) – One of the major figures of Dadaism and a prototype of \"total artist\", <a href='https://en.wikipedia.org/wiki/Marcel_Duchamp' target='_blank'>Duchamp</a> is one of the most important and controversial figures of his era. His contribution to painting is just a small part of his huge contribution to the art world.",

		"48. GIORGIONE (1478-1510) - Like so many other painters who died at young age, <a href='https://en.wikipedia.org/wiki/Giorgione' target='_blank'>Giorgione</a> (1477-1510) makes us wonder what place would his exquisite painting occupy in the history of Art if he had enjoyed a long existence, just like his direct artistic heir - Titian.",

		"49. FRIDA KAHLO (1907-1954) – In recent years, Frida's increasing fame seems to have obscured her importance in Latin American art. On September 17th, 1925, <a href='https://en.wikipedia.org/wiki/Frida_Kahlo' target='_blank'>Kahlo</a> was almost killed in a terrible bus accident. She did not died, but the violent crash had terrible sequels, breaking her spinal column, pelvis, and right leg. After this accident, Kahlo's self-portraits can be considered as quiet but terrible moans",

		"50. HANS HOLBEIN THE YOUNGER (1497-1543) – After Dürer, <a href='https://en.wikipedia.org/wiki/Hans_Holbein_the_Younger' target='_blank'>Holbein</a> is the greatest of the German painters of his time. The fascinating portrait of \"The Ambassadors\" is still considered one of the most enigmatic paintings of art history.",

		"51. EDGAR DEGAS (1834-1917) – Though <a href='https://en.wikipedia.org/wiki/Edgar_Degas' target='_blank'>Degas</a> was not a \"pure\" impressionist painter, his works shared the ideals of that artistic movement. Degas paintings of young dancers or ballerinas are icons of late 19th century painting.",

		"52. FRA ANGELICO (1387-1455) – One of the great colorists from the early Renaissance. Initially trained as an illuminator, <a href='https://en.wikipedia.org/wiki/Fra_Angelico' target='_blank'>he</a> is the author of masterpieces such as \"The Annunciation\" in the Prado Museum.",

		"53. GEORGES SEURAT (1859-1891) - <a href='https://en.wikipedia.org/wiki/Georges_Seurat' target='_blank'>Georges Seurat</a> is one of the most important post-impressionist painters, and he is considered the creator of the \"pointillism\", a style of painting in which small distinct points of primary colors create the impression of a wide selection of secondary and intermediate colors.",

		"54. JEAN-ANTOINE WATTEAU (1684-1721) – <a href='https://en.wikipedia.org/wiki/Jean-Antoine_Watteau' target='_blank'>Watteau</a> is today considered one of the pioneers of rococo. Unfortunately, he died at the height of his powers, as it is evidenced in the great portrait of \"Gilles\" painted in the year of his death.",

		"55. SALVADOR DALÍ (1904-1989) – \"I am Surrealism!\" shouted<a href='https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD' target='_blank'>Dalí</a> when he was expelled from the surrealist movement by André Breton. Although the quote sounds presumptuous (which was not unusual in Dalí), the fact is that Dalí's paintings are now the most famous images of all the surrealist movement.",

		"56. MAX ERNST (1891-1976) – Halfway between Surrealism and Dadaism appears<a href='https://en.wikipedia.org/wiki/Max_Ernst' target='_blank'>Max Ernst</a>, important in both movements. Ernst was a brave artistic explorer thanks in part to the support of his wife and patron, Peggy Guggenheim.",

		"57. TINTORETTO (1518-1594) - <a href='https://en.wikipedia.org/wiki/Tintoretto' target='_blank'>Tintoretto</a> is the most flamboyant of all Venetian masters (not the best, such honour can only be reclaimed by Titian or Giorgione) and his remarkable oeuvre not only closed the Venetian splendour till the apparition of Canaletto and his contemporaries, but also makes him the last of the Cinquecento masters.",

		"58. JASPER JOHNS (born 1930) – The last living legend of the early Pop Art, although <a href='https://en.wikipedia.org/wiki/Jasper_Johns' target='_blank'>he</a> has never considered himself a \"pop artist\". His most famous works are the series of \"Flags\" and \"Targets\".",

		"59. SANDRO BOTTICELLI (1445-1510) – \"If <a href='https://en.wikipedia.org/wiki/Sandro_Botticelli' target='_blank'>Botticelli</a> were alive now he would be working for Vogue\", said actor Peter Ustinov. As well as Raphael, Botticelli had been equally loved or hated in different eras, but his use of color is one of the most fascinating among all old masters.",

		"60. DAVID HOCKNEY (born 1937) - <a href='https://en.wikipedia.org/wiki/David_Hockney' target='_blank'>David Hockney</a> is one of the living myths of the Pop Art. Born in Great Britain, he moved to California, where he immediately felt identified with the light, the culture and the urban landscape of the 'Golden State'.",

		"61. UMBERTO BOCCIONI (1882-1916) – The maximum figure of Italian Futurism, fascinated by the world of the machine, and the movement as a symbol of contemporary times.",

		"62. JOACHIM PATINIR (1480-1524) – Much less technically gifted than other Flemish painters like Memling or van der Weyden, <a href='https://en.wikipedia.org/wiki/Joachim_Patinir' target='_blank'>his</a> contribution to the history of art is vital for the incorporation of landscape as a major element in the painting.",

		"63. DUCCIO DA BUONINSEGNA (c.1255/60 – 1318/19) – While in Florence Giotto di Bondone was changing the history of painting, Duccio of <a href='https://en.wikipedia.org/wiki/Duccio' target='_blank'>Buoninsegna</a> provided a breath of fresh air to the important Sienese School.",

		"64. ROGER VAN DER WEYDEN (1399-1464) – After Van Eyck, the leading exponent of Flemish painting in the fifteenth century; a <a href='https://en.wikipedia.org/wiki/Rogier_van_der_Weyden' target='_blank'>master</a> of perspective and composition.",

		"65. JOHN CONSTABLE (1776-1837) – <a href='https://en.wikipedia.org/wiki/John_Constable' target='_blank'>Constable</a> is, along with Turner, the great figure of English romanticism. But unlike his contemporary, he never left England, and he devoted all his time to represent the life and landscapes of his beloved England.",

		"66. JACQUES-LOUIS DAVID (1748-1825) – <a href='https://en.wikipedia.org/wiki/Jacques-Louis_David' target='_blank'>David</a> is the summit of neoclassicism, a grandiloquent artist whose compositions seem to reflect his own hectic and revolutionary life.",

		"67. ARSHILE GORKY (1905-1948) – Armenian-born American painter, <a href='https://en.wikipedia.org/wiki/Arshile_Gorky' target='_blank'>Gorky</a> was a surrealist painter and also one of the leaders of abstract expressionism. He was called \"the Ingres of the unconscious\".",

		"68. HIERONYMUS BOSCH (1450-1516) – An extremely religious man, all works by <a href='https://en.wikipedia.org/wiki/Hieronymus_Bosch' target='_blank'>Bosch</a> are basically moralizing, didactic. The artist sees in the society of his time the triumph of sin, the depravation, and all the things that have caused the fall of the human being from its angelical character; and he wants to warn his contemporaries about the terrible consequences of his impure acts.",

		"69. PIETER BRUEGEL THE ELDER (1528-1569) - Many scholars and art critics claim to have found important similarities between the works by Hyeronimus Bosch and those by <a href='https://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder' target='_blank'>Brueghel</a>, but the truth is that the differences between both of them are abysmal. Whereas Bosch's fantasies are born of a deep deception and preoccupation for the human being, with a clearly moralizing message; works by Bruegel are full of irony, and even filled with a love for the rural life, which seems to anticipate the Dutch landscape paintings from the next century.",

		"70. SIMONE MARTINI (1284-1344) – One of the great <a href='https://en.wikipedia.org/wiki/Simone_Martini' target='_blank'>painters</a> of the Trecento, he was a step further and helped to expand its progress, which culminated in the \"International Style\".",

		"71. Frederic Edwin Church (1826-1900) - <a href='https://en.wikipedia.org/wiki/Frederic_Edwin_Church' target='_blank'>Church</a> represents the culmination of the Hudson River School: he had Cole's love for the landscape, Asher Brown Durand's romantic lyricism, and Albert Bierstadt's grandiloquence, but he was braver and technically more gifted than anyone of them. Church is without any doubt one of the greatest landscape painters of all time, perhaps only surpassed by Turner and some impressionists and postimpressionists like Monet or Cézanne.",

		"72. EDWARD HOPPER (1882-1967) – <a href='https://en.wikipedia.org/wiki/Edward_Hopper' target='_blank'>Hopper</a> is widely known as the painter of urban loneliness. His most famous work, the fabulous \"Nighthawks\" (1942) has become the symbol of the solitude of the contemporary metropolis, and it is one of the icons of the 20th century Art.",

		"73. <a href='https://en.wikipedia.org/wiki/Lucio_Fontana' target='_blank'>LUCIO FONTANA</a> (1899-1968) – Father of the \"White Manifesto\", in which he stated that \"Matter, colour and sound in motion are the phenomena whose simultaneous development makes up the new art\". His “Concepts Spatiales” are already icons of the art of the second half of the twentieth century.",

		"74. <a href='https://en.wikipedia.org/wiki/Franz_Marc' target='_blank'>FRANZ MARC</a> (1880-1916) – After Kandinsky, the great figure of the Expressionist group \"The Blue Rider\" and one of the most important expressionist painters ever. He died at the height of his artistic powers, when his use of color was even anticipating the later abstraction.",

		"75. <a href='https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir' target='_blank'>PIERRE-AUGUSTE RENOIR</a> (1841-1919) – One of the key figures of Impressionism, he soon left the movement to pursue a more personal, academic painting.",

		"76. <a href='https://en.wikipedia.org/wiki/James_Abbott_McNeill_Whistler' target='_blank'>JAMES MCNEILL WHISTLER</a> (1834-1903) – Along with Winslow Homer, the great figure of American painting of his time. Whistler was an excellent portraitist, which is shown in the fabulous portrait of his mother, considered one of the great masterpieces of American painting of all time.",

		"77. <a href='https://en.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault' target='_blank'>THEODORE GÉRICAULT</a> (1791-1824) – Key figure in romanticism, revolutionary in his life and works despite his bourgeois origins. In his masterpiece, \"The raft of the Medusa\", Gericault creates a painting that we can define as \"politically incorrect\", as it depicts the miseries of a large group of castaways abandoned after the shipwreck of a French naval frigate.",

		"78. <a href='https://en.wikipedia.org/wiki/William_Hogarth' target='_blank'>WILLIAM HOGARTH</a> (1697-1764) – A list of the great portrait painters of all time should never miss the name of William Hogarth, whose studies and sketches could even qualify as \"pre-impressionist\".",

		"79. <a href='https://en.wikipedia.org/wiki/Jean-Baptiste-Camille_Corot' target='_blank'>CAMILLE COROT</a> (1796-1875) – One of the great figures of French realism in the 19th century and certainly one of the major influences for the impressionist painters like Monet or Renoir, thanks to his love for \"plen-air\" painting, emphasizing the use of light.",

		"80. <a href='https://en.wikipedia.org/wiki/Georges_Braque' target='_blank'>GEORGES BRAQUE</a> (1882-1963) – Along with Picasso and Juan Gris, the main figure of Cubism, the most important of the avant-gardes of the 20th century Art.",

		"81. <a href='https://en.wikipedia.org/wiki/Hans_Memling' target='_blank'>HANS MEMLING</a> (1435-1494) – Perhaps the most complete and \"well-balanced\" of all fifteenth century Flemish painters, although he was not as innovative as Van Eyck or van der Weyden.",

		"82. <a href='https://en.wikipedia.org/wiki/Gerhard_Richter' target='_blank'>GERHARD RICHTER</a> (born 1932) – One of the most important artists of recent decades, Richter is known either for his fierce and colorful abstractions or his serene landscapes and scenes with candles.",

		"83. <a href='https://en.wikipedia.org/wiki/Amedeo_Modigliani' target='_blank'>AMEDEO MODIGLIANI</a> (1884-1920) – One of the most original portraitists of the history of painting, considered as a \"cursed\" painter because of his wild life and early death.",

		"84. <a href='https://en.wikipedia.org/wiki/Georges_de_La_Tour' target='_blank'>GEORGES DE LA TOUR</a> (1593-1652) – The influence of Caravaggio is evident in De la Tour, whose use of light and shadows is unique among the painters of the Baroque era.",

		"85. <a href='https://en.wikipedia.org/wiki/Artemisia_Gentileschi' target='_blank'>ARTEMISIA GENTILESCHI</a> (1597-1654) – One of the most gifted artists of the early baroque era, she was the first female painter to become a member of the Accademia di Arte del Disegno in Florence.",

		"86. <a href='https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Millet' target='_blank'>JEAN FRANÇOIS MILLET</a> (1814-1875) – One of the main figures of the Barbizon School, author of one of the most emotive paintings of the 19th century: The \"Angelus\".",

		"87. <a href='https://en.wikipedia.org/wiki/Francisco_de_Zurbar%C3%A1n' target='_blank'>FRANCISCO DE ZURBARÁN</a> (1598-1664) – The closest to Caravaggio of all Spanish Baroque painters, his latest works show a mastery of chiaroscuro without parallel among any other painter of his time.",

		"88. <a href='https://en.wikipedia.org/wiki/Cimabue' target='_blank'>CIMABUE</a> (c.1240-1302) – Although in some of his works Cimabue already represented a visible evolution of the rigid Byzantine art, his greatest contribution to painting was to discover a young talented artist named Giotto (see number 2), who changed forever the Western painting.",

		"89. <a href='https://en.wikipedia.org/wiki/James_Ensor' target='_blank'>JAMES ENSOR</a> (1860-1949) – Violent painter whose strong, almost \"unfinished\" works make him a precursor of Expressionism.",

		"90. <a href='https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte' target='_blank'>RENÉ MAGRITTE</a> (1898-1967) – One of the leading figures of surrealism, his apparently simple works are the result of a complex reflection about reality and the world of dreams.",

		"91. <a href='https://en.wikipedia.org/wiki/El_Lissitzky' target='_blank'>EL LISSITZKY</a> (1890-1941) – One of the main exponents of Russian avant-garde painting. Influenced by Malevich, he also excelled in graphic design.",

		"92. <a href='https://en.wikipedia.org/wiki/Egon_Schiele' target='_blank'>EGON SCHIELE</a> (1890-1918) – Another \"died too young\" artist, his strong and ruthless portraits influenced the works of later artists, like Lucian freud or Francis Bacon.",

		"93. <a href='https://en.wikipedia.org/wiki/Dante_Gabriel_Rossetti' target='_blank'>DANTE GABRIEL ROSSETTI</a> (1828-1882) – Perhaps the key figure in the pre-Raphaelite movement, Rossetti left the poetry to focus on classic painting with a style that influenced the symbolism.",

		"94. <a href='https://en.wikipedia.org/wiki/Frans_Hals' target='_blank'>FRANS HALS</a> (c.1580-1666) – One of the most important portraitists ever, his lively brushwork influenced early impressionism.",

		"95. <a href='https://en.wikipedia.org/wiki/Claude_Lorrain' target='_blank'>CLAUDE LORRAIN</a> (1600-1682) – His works were a vital influence on many landscape painters for many centuries, both in Europe (Corot, Courbet) and in America (Hudson River School).",

		"96. <a href='https://en.wikipedia.org/wiki/Roy_Lichtenstein' target='_blank'>ROY LICHTENSTEIN</a> (1923-1977) – Along with Andy Warhol, the most famous figure of the American Pop-Art. His works are often related to the style of the comics, though Lichtenstein rejected that idea.",

		"97. <a href='https://en.wikipedia.org/wiki/Georgia_O%27Keeffe' target='_blank'>GEORGIA O'KEEFE</a> (1887-1986) – A leading figure in the 20th century American Art, O'Keefe single-handedly redefined the Western American painting.",

		"98. <a href='https://en.wikipedia.org/wiki/Gustave_Moreau' target='_blank'>GUSTAVE MOREAU</a> (1826-1898) – One of the key figures of symbolism, introverted and mysterious in life, but very free and colorful in his works.",

		"99. <a href='https://en.wikipedia.org/wiki/Giorgio_de_Chirico' target='_blank'>GIORGIO DE CHIRICO</a> (1888-1978) – Considered the father of metaphysical painting and a major influence on the Surrealist movement.",

		"100. <a href='https://en.wikipedia.org/wiki/Fernand_L%C3%A9ger' target='_blank'>FERNAND LÉGER</a> (1881-1955) – At first a cubist, Leger was increasingly attracted to the world of machinery and movement, creating works such as \"The Discs\" (1918).",

		"101. <a href='https://en.wikipedia.org/wiki/Jean-Auguste-Dominique_Ingres' target='_blank'>JEAN-AUGUSTE-DOMINIQUE INGRES</a> (1780-1867) – Ingres was the most prominent disciple of the most famous neoclassicist painter, Jacques Louis David, so he should not be considered an innovator. He was, however, a master of classic portrait."
		];
		let randIndex = Math.floor(Math.random() * artists.length);	
		node.innerHTML = artists[randIndex];
		document.body.appendChild(node);

  		var stan3 = document.getElementById("stan3");
  		stan3.replaceChild(node, stan3.childNodes[0]);
	}
