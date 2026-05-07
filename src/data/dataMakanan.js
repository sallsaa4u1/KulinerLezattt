const dataMakanan = [
  {
    id: 1,
    nama: "Seblak",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 10000,
    gambar: "/Seblak.jpg",
    deskripsi: "Seblak adalah makanan khas Bandung yang terkenal dengan citra rasa pedas dan gurih, terbuat dari kerupuk basah yang dimasak dengan sayuran dan sumber protein (telor) dan dimasak dengan kencur, cocok untuk anak muda yang suka makanan dengan bumbu yang kuat.",
    bahan: ["1-2 butir twlur ayam", "100 gr kerupuk aci/kuning dan aneka kerupuk lainnya (rebus setengah matang)", "sosis, bakso, atau aneka seafood", "mie kuning", "sayur sawi", "1 sdm minyak", "600 ml air", "Bumbu Halus:", "2-3 kencur", "2 siung bawang putih", "3 siung bawang merah", "cabai rawit & merah sesuai selera pedasmu"],
    cara: ["Tumis Bumbu: Panaskan 1 sdm minyak, tumis bumbu halus sampai harum dan matang", "Sisihkan bumbu ke pinggir wajan, masukkan telur, lalu orak-arik sampai matang", "Tuangkan 600 ml air. Tunggu sampai mendidih", "Masukkan kerupuk yang sudah direbus setengah matang, sosis, bakso/seafood, dan mie kunng. masak sampai teksturnya empuk", "Masukkan garam, gula, dan kaldu bubuk. koreksi rasa sampai pas", "Masukkan sayur sawi, masak sebentar saja", "Angkat dan nikmati selagi panas"],

    komentar: [
      { nama: "Andi", isi: "Resepnya enak banget! Mudah diikuti juga", rating: 5 },
      { nama: "Clara", isi: "Ini hidangan enak dan mudah dibuat!", rating: 4 }
    ]
  },
  {
    id: 2,
    nama: "Cookies",
    jenis: "Snack",
    rasa: "Manis",
    harga: 5000,
    gambar: "/Cookies.jpg",
    deskripsi: "Cookies adalah jenis biskuit berbahan dasar tepung, lemak, dan gula yang memiliki tekstur renyah hingga lembut, sering kali dipanggang dengan campuran cokelat chip atau kacang. Pembuatan cookies melibatkan metode pencampuran, pembentukan, dan pemanggangan.",
    bahan: ["115 gr mentega", "100 gr gula pasir", "100 gr gula palem", "1 butir telur", "1 sdt vanili ekstrak", "225 gr tepung terigu", "1/2 sdt baking soda", "1/4 sdt garam", "choco chips"],
    cara: ["Mixer mentega, gula pasir, dan gula palem hingga lembut dan mengembang", "Masukkan telur dan vanili ekstrak ke dalam campuran mentega, aduk rata", "Masukkan tepung terigu, baking soda dan garam. aduk perlahan hingga rata", "Masukkan choco chips, aduk rata dengan spatula", "Simpan adonan di kulkas selama 30-60 menit agar tidak terlalu melebar saat dipanggang", "Ambil adonan, bentuk bulat, dan tata di loyang yang dialasi kertas roti", "Panggang dalam oven suhu 160-200°C selama 10-15 menit"],
    
    komentar: [
      { nama: "Sela", isi: "Wahh enak sekali", rating: 5 },
      { nama: "eza", isi: "JUJUR BANGET YA INI ENAKKKK!!", rating: 5 }
    ]
  },
  {
    id: 3,
    nama: "Churros",
    jenis: "Snack",
    rasa: "Manis",
    harga: 10000,
    gambar: "/Curros.jpg",
    deskripsi: "Churros adalah camilan manis populer yang berasal dari Spanyol dan Portugal, berbentuk stik bergaris panjang yang digoreng hingga renyah di luar namun tetap lembut di dalam. Camilan ini sering ditaburi gula pasir, bubuk kayu manis, atau disajikan dengan saus celup seperti cokelat panas",
    bahan: ["200 ml air", "80-100 gr Mentega", "100-150 gr tepung terigu", "1-2 butir telur", "1-2 sdm gula pasir", "1/4 sdt garam", "1/4 sdt vanili bubuk", "minyak goreng", "gula halus untuk taburan"],
    cara: ["Rebus air, mentega, gula, dan garam hingga mendidih", "Kecilkan api, masukkan tepung terigu dan aduk cepat hingga kalis (tercampur rata, tidak lengket di panci)", "Angkat adonan dan biarkan hingga suhunya turun", "Masukkan telur ke adonan hangat, aduk rata hingga teksturnya halus dan kental", "Masukkan adonan ke dalam plastik segitiga yang ujungnya sudah dipasang spuit bintang", "Panaskan minyak, semprotkan adonan sepanjang 5-10 cm di atas minyak panas, gunting ujungnya. goreng dengan api sedang hingga berwarna coklat keemasan", "tiriskan, lalu gulingkan pada gula halus saat masih hangat"],

    komentar: [
      { nama: "Nadia", isi: "Churrosnya renyah di luar dan lembut di dalam, enak banget!", rating: 5 },
      { nama: "Rafi", isi: "Manisnya pas, cocok dimakan selagi hangat.", rating: 4 }
    ]
  },
  {
    id: 4,
    nama: "Rice Bowl",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 10000,
    gambar: "/Ricebowl.jpg",
    deskripsi: "Rice bowl ayam teriyaki adalah hidangan praktis berupa nasi putih hangat dalam mangkuk, disajikan dengan tumisan ayam berbumbu teriyaki manis-gurih, bawang bombay, serta wijen sangrai. Hidangan ini sering dilengkapi sayuran (buncis/wortel) atau telur untuk menu bekal atau ide jualan yang populer.",
    bahan: ["250-300 gr dada/paha ayam fillet, potong dadu/memanjang", "1/2 buah bawang bombay, iris panjang", "2 siung bawang putih, cincang halus", "3-4 sdm saus teriyaki instan", "1 sdm kecap manis", "1 sdm saus tiram (opsional)", "100 ml air", "margarin", "wijen sangrai (taburan)", "nasi putih hangat"],
    cara: ["Campur potongan ayam dengan sedikit saus teriyaki, diamkan 15-20 menit agar bumbu meresap", "Panaskan margarin, tumis bawang putih, bawang bombay hingga harum dan layu", "Masukkan ayam, masak hingga berubah warna (setengah matang)", "Masukkan sisa saus teriyaki, kecap manis, saus tiram, dan air. aduk rata", "Masak dengan api kecil hingga ayam matang, bumbu meresap, dan saus mengental, koreksi rasa", "Siapkan nasi dalam mangkuk, tuang ayam teriyaki di atasnya, taburi wijen sangrai"],

    komentar: [
      { nama: "Bima", isi: "Ayamnya juicy dan bumbunya meresap, bikin nagih!", rating: 5 },
      { nama: "Salsa", isi: "Porsinya pas dan rasa pedasnya mantap.", rating: 4 }
    ]
  },
  {
    id: 5,
    nama: "Smoothies",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 12000,
    gambar: "/smoothiess.png",
    deskripsi: "Smoothies adalah kombinasi minuman sehat berbasis buah segar yang diblender kental, dipadukan dengan whipped cream atau krim keju (cream cheese) gurih-manis yang melimpah, seringkali ditambah parutan keju di atasnya.",
    bahan: ["200 gr buah (buah naga/mangga/durian/alpukat)", "100-150 ml susu UHT full cream", "2-3 sdm susu kental manis", "es batu secukupnya", "100 gr susu bubuk (misal: dancow)", "2 sachet skm putih", "2 sdm gula pasir", "1 sdt SP (emulsifier)", "2-3 sdm keju oles", "keju ceddar parut", "potongan buah"],
    cara: ["lelehkan tim SP lalu diamkan hingga dingin dan padat kembali", "campurkan susu bubuk, skm, gula pasir, SP yang sudah ditim, dan es batu", "mixer dengan kecepatan tinggi selama 5-10 menit sampai adonan mengembang, kental dan kaku", "campurkan keju oles ke dalam kocokan krim dan mixer sebentar agar rata", "masukkan ke dalam wadah, simpan di kulkas sebelum digunakan", "masukkan buah, susu UHT, SKM, dan es batu ke dalam blender", "blender dengan kecepatan tingi hingga teksturnya kental dan halus", "ambil gelas, olesi dinding dalam gelas dengan krim keju menggunakan piping bag", "tuang jus buah/smoothies ke dalam gelas hingga 3/4 penuh", "tambahkan whipped cream keju di atasnya", "beri taburan parutan keju cheddar dan potongan buah di bagian paling atas. dan smoothies siap dinikmati"],

    komentar: [
      { nama: "Clara", isi: "Segar banget dan rasa buahnya terasa asli.", rating: 5 },
      { nama: "Dito", isi: "Creamy sih, tapi menurutku agak terlalu manis.", rating: 3 }
    ]
  },
  {
    id: 6,
    nama: "Nasi Kuning",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 7000,
    gambar: "/Nasi Kuning.jpg",
    deskripsi: "Nasi goreng adalah makanan yang dibuat dari nasi yang digoreng dengan campuran bumbu sederhana dan memiliki rasa yang gurih.",
    bahan: ["300-400 gr nasi putih dingin/pera", "2 butir telur", "3 siung bawang merah, cincang", "2 siung bawang putih, cincang", "cabai rawit sesuai selera", "2-3 sdm kecap manis", "garam, gula, dan merica bubuk sesuai selera", "minyak goreng"],
    cara: ["panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum", "masukkan telur dan orak-arik hingga matang", "masukkan nasi putih, aduk rata dengan bumbu dan telur", "tambahkan kecap manis, garam, gula, dan merica. aduk rata dengan api sedang hingga bumbu meresap dan nasi berasap", "angkat dan sajikan nasi goreng dengan pelengkap seperti telu mata sapi, timun, dan kerupuk (opsional)"],

    komentar: [
      { nama: "Andi", isi: "Enak banget, gurihnya pas!", rating: 5 },
      { nama: "Sari", isi: "Lumayan, tapi porsinya agak sedikit", rating: 3 },
      { nama: "Dika", isi: "Kurang berasa bumbunya menurutku", rating: 2 },
    ]
  },
  {
    id: 7,
    nama: "Corndog",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 12000,
    gambar: "/Corndog.jpg",
    deskripsi: "Corndog adalah kuliner khas street food yang berasal dari Korea Selatan (dan populer di seluruh dunia), berupa keju mozzarella (kadang dikombinasikan dengan sosis) yang ditusuk sate, dicelupkan ke dalam adonan tepung kental, dilapisi tepung panir, lalu digoreng hingga garing keemasan. Ciri khas utamanya adalah keju yang molor (stretchy) dan lumer saat digigit panas-panas, dengan tekstur luar yang renyah.",
    bahan: ["200 gr keju mozzarella, potong balok/stick, sosis, tusuk sate", "200 gr tepung terigu protein", "1 sdt ragi instan", "1 sdm gula pasir", "1/2 sdt garam", "170 ml air hangat", "tepung roti/panir secukupnya", "minyak goreng"],
    cara: ["tusuk keju mozzarella dengan tusuk sate. bekukkan di freezer selama 10-15 menit agar tidak mudah bocor saat digoreng", "campurkan ragi instan, gula pasir, dan air hangat. diamkan 5-10 menit hingga berbuih. campurkan terigu dan garam, tuang campuran ragi. aduk hingga rata", "diamkan adonan selama 45-60 menit hingga mengembang dua kali lipat", "celupkan keju mozzarella ke dalam adonan sambil diputar. balurkan ke tepung panir sambil ditekan perlahan", "goreng dalam minyak panas dengan api sedang hingga berwarna kuning keemasan. angkat dan tiriskan", "tambahkan saus pedas, saus tomat, atau mayones"],

    komentar: [
      { nama: "Clara", isi: "Kejunya bener-bener lumer dan molor, enak banget dimakan pas masih hangat!", rating: 5 },
      { nama: "Fajar", isi: "Lumayan enak sih, tapi agak berminyak jadi sedikit eneg kalau kebanyakan", rating: 3 },
      { nama: "Lina", isi: "Bagian dalamnya kurang matang, jadi teksturnya agak aneh waktu dimakan", rating: 2 },
    ]
  },
  {
    id: 8,
    nama: "Donat Mini",
    jenis: "Snack",
    rasa: "Manis",
    harga: 3000,
    gambar: "/donat mini.jpeg",
    deskripsi: "Donat mini adalah varian donat berukuran kecil yang memiliki tekstur empuk, lembut, dan ringan, menyerupai donat konvensional namun lebih praktis dikonsumsi. Donat ini biasanya disajikan dengan berbagai jenis topping seperti gula halus, meses cokelat, glaze warna-warni, atau keju.",
    bahan: ["250 gr tepung terigu protein tinggi", "1 sdt ragi instan", "2 sdm gula pasir", "1 butir kuning telur", "130-150 ml susu cair UHT dingin", "2 sdm margarin", "1/2 sdt garam", "minyak goreng"],
    cara: ["campur tepung, ragi, gula, kuning telur, dan susu cair. uleni hingga rata", "masukkan margarin dan garam. uleni kembali hinga adonan kalis dan elastis", "diamkan adonan selama 30-60 menit atau hinga mengembang dua kali lipat", "kempiskan adonan, bagi menjadi bagian kecil (sekitar 20-22 gr), bulatkan. diamkan kembali selama 15 menit", "panaskan minyak dengan api kecil-sedang. goreng donat hingga kecoklatan", "setalah dingin, olesi dengan butter cream dan beri topping sesuai selera"],

    komentar: [
      { nama: "Nina", isi: "Ukurannya kecil-kecil jadi gemes, rasanya juga enak dan empuk banget!", rating: 5 },
      { nama: "Rizky", isi: "Manisnya pas dan teksturnya lembut, enak buat cemilan santai", rating: 4 },
    ]
  },
  {
    id: 9,
    nama: "Matcha Latte",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/matcha-latte.png",
    deskripsi: ["Matcha latte adalah minuman populer perpaduan bubuk teh hijau Jepang premium dengan susu panas atau dingin yang menghasilkan rasa creamy, sedikit pahit, dan aroma autentik. Minuman ini sering dinikmati sebagai alternatif kopi yang lebih sehat dan menyegarkan, baik panas maupun dingin."],
    bahan: ["1-2 sdt bubuk matcha berkualitas", "30-60 ml air panas", "150-200 ml susu (oat/almond milk", "1-2 sdt pemanis (gula, madu)", "es batu (jika membuat iced matcha"],
    cara: ["saring bubuk matcha ke dalam mangkuk untuk menghindari gumpalan. tambahkan air panas, lalu kocok dengan chasen(pengaduk bambu) atau whisk kecil hingga larut dan berbusa", "masukkan gula atau madu ke dalam larutan matcha, aduk rata", "panaskan susu (untuk hot) hingga hangat atau gunakan susu dingin (untuk iced)", "tuang susu ke dalam gelas saji yang sudah diisi es batu (jika iced), lalu tuang larutan matcha di atsnya", "aduk perlahan hingga rata, dan nikamti"],

    komentar: [
      { nama: "Lia", isi: "Aku suka banget sama rasa matchanya, creamy tapi masih ada pahit khasnya jadi ga terlalu manis", rating: 5 },
      { nama: "Fikri", isi: "Lumayan enak sih, tapi menurutku susunya agak terlalu dominan jadi rasa matchanya kurang keluar", rating: 4 },
      { nama: "Nanda", isi: "Kurang cocok di aku, mungkin karena aku ga terlalu suka matcha, rasanya agak aneh", rating: 2 }
    ]
  },
  {
    id: 10,
    nama: "Dimsum Mentai",
    jenis: "Snack",
    rasa: "Pedas",
    harga: 18000,
    gambar: "/Dimsum Mentai.jpeg",
    deskripsi: ["Dimsum mentai adalah inovasi dimsum ayam/udang kukus yang lembut, disiram saus mayo creamy-pedas (mentai), dan dibakar (torch) untuk aroma smoky. Hidangan ini populer karena perpaduan rasa gurih, juicy, dan pedas dalam satu gigitan."],
    bahan: ["1 butir putih telur", "2 sdm tepung tapioka", "1 sdm kecap ikan", "1 sdm saus tiram", "1/2 sdt garam dan 1/2 sdt merica", "1 batang daun bawang, iris halus", "kulit pangsit siap pakai", "Bahan Saus Mentai:", "5 sdm mayones", "3 sdm saus sambal", "2 sdm saus tomat", "1 sdm bubuk cabe(opsional)", "50 gram tobiko/telur ikan(jika ingin rasa mentai premium)"],
    cara: ["membuat adonan dimsum: siapkan wadah untuk mencampurkan semua bahan isian dimsum. masukkan daging ayam giling, udang cincang, bawang putih halus, putih telur, tepung tapioka, kecap ikan, saus tiram, garam, merica, dan daun bawang. aduk rata hingga teksturnya menyatu sempurna dan sedikit lengket. pastikan bumbu benar-benar tercampur agar citra rasa dimsum tidak hambar ketika sudah matang.", "ambil selembar kulit pangsit, letakkan satu sendok makan adonan ayam-udang di bagian tengah, lalu bentuk menjadi siomay dengan melipat sisi-sisinya keatas. tekan sedikit bagian bawah agar dimsum bisa berdiri tegak di dalam kukusan. berikan sedikit wortel parut dibagian atas sebagai hiasan dan menambah warna agar tampak lebih menarik.", "panaskan kukusan yang sudah diberi alas. tata dimsum dalam kukusan, kukus selama sekitar 15-20 menit hingga dimsum matan sempurna. daging ayam akan berubah warna lebih pucat dan teksturnya lebih padat ketika sudah matang. setelah matang, dinginkan sebentar sebelum dipadukan dengan saus mentai agar tidak membuat saus cepat mencair", "Membuat Saus Mentai: Sambil menunggu dimsum matang, siapkan saus mentai dengan mencampurkan mayones, saus sambal, saus tomat, dan bubuk cabai ke dalam wadah kecil. Aduk hingga saus tercampur rata dan memiliki tekstur creamy yang pas.", "Letakkan dimsum matang di loyang tahan panas. Beri topping saus mentai di atas setiap dimsum secara merata. Panggang atau torch (bakar ringan menggunakan blow torch) sebentar hingga saus mentai sedikit mengering dan mengeluarkan aroma smoky yang menggoda. Dimsum mentai lezat siap disajikan!"],

    komentar: [
      { nama: "Riko", isi: "Enak banget sih ini, saus mentainya kerasa dan ada aroma bakarnya juga", rating: 5 },
      { nama: "Salsa", isi: "Menurutku biasa aja, ga terlalu spesial tapi masih oke dimakan", rating: 3 }
    ]
  },
  {
    id: 11,
    nama: "Es Kopi Gula Aren",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 14000,
    gambar: "/Es Kopi Gula Aren.jpeg",
    deskripsi: ["Es kopi gula aren adalah minuman kopi dingin yang memadukan espresso atau kopi hitam kuat, susu cair creamy, dan sirup gula aren manis alami dengan aroma khas. Minuman ini populer karena perpaduan rasa kopi yang kuat (bold) dengan manis legit gula aren, disajikan dengan es batu melimpah."],
    bahan: ["kopi: 1-2 shots espresso atau 1 sachet kopi hitam instan (tanpa ampas)", "2-3 sdm gula aren cair", "100-150 ml susu cair full cream atau UHT", "Es batu"],
    cara: ["Larutkan gula aren dengan sedikit air panas. Jika menggunakan gula aren padat, rebus dengan air hingga larut sempurna.", "Seduh kopi instan dengan sedikit air panas (sekitar 30-50 ml) atau buat espresso.", "tuang gula aren cair ke dasar gelas", "isi gelas dengan es batu hingga penuh", "masukkan susu cair full cream secara perlahan", "tuang seduhan kopi di lapisan paling atas agar terbentuk gradasi warna yang menarik", "aduk rata sebelum diminum"],

    komentar: [
      { nama: "Dian", isi: "Kopinya kerasa banget dan gula arennya bikin makin enak, balance banget rasanya", rating: 5 }
    ]
  },
  {
    id: 12,
    nama: "Mie Jebew",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 10000,
    gambar: "/Mie Jebew.jpeg",
    deskripsi: ["Mie Jebew adalah kuliner pedas viral khas Garut yang berupa mie kenyal yang disajikan dengan campuran chili oil, minyak bawang, sambal rawit merah, dan topping ayam cincang serta pangsit. Rasanya gurih, pedas (nampol), dan sedikit manis. (Jebew) merujuk pada sensasi bibir bengkak karena pedas. "],
    bahan: ["2 keping mie telur basah atau mie lurus", "200 gr dada ayam fillet (cincang halus)", "bakso sapi secukupnya", "pangsit goreng", "sawi hijau (rebus)", "daun bawang dan bawang goreng", "saus tiram", "kecap asin", "10-15 cabai rawit merah/setan (rebus)", "5 cabai merah keriting", "10 siung bawang putih (cincang halus untuk minyak bawang)", "10-15 sdm minyak goreng", "5-8 lembar daun jeruk (iris tipis)"],
    cara: ["Membuat Topping Ayam: Tumis 2 siung bawang putih halus, masukkan ayam cincang, saus tiram, kecap asin, dan sedikit minyak wijen. Masak hingga ayam kering dan matang, sisihkan.", "Membuat Minyak Bawang: Panaskan minyak, tumis bawang putih cincang dan daun jeruk hingga kuning kecoklatan dan wangi. Matikan api.", "Membuat Sambal: Rebus cabai rawit dan cabai merah, haluskan (ulek/blender). Tumis sebentar dengan sedikit minyak, beri sedikit garam dan kaldu bubuk.", "rebus mie telur dan bakso hinga matang, tiriskan", "Dalam mangkuk, campurkan minyak bawang, sambal, kecap manis, kecap asin, kaldu jamur, dan chili oil. Aduk rata. Masukkan mie, aduk kembali hingga bumbu merata.", "Tambahkan topping ayam, bakso, pangsit goreng, sawi, daun bawang, dan bawang goreng di atasnya. Mie Jebew siap disajikan"],

    komentar: [
      { nama: "Rafi", isi: "Pedesnya bener-bener nampol sih, sampe bibir panas tapi nagih banget. Aku suka!", rating: 5 },
      { nama: "Intan", isi: "Menurutku terlalu pedas jadi kurang bisa dinikmati, tapi buat pecinta pedas pasti cocok", rating: 3 },
      { nama: "Bagas", isi: "Bumbunya enak tapi mie nya agak lembek waktu aku makan", rating: 2 }
    ]
  },
  {
    id: 13,
    nama: "Bakso Aci",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 12000,
    gambar: "/Bakso Aci.jpg",
    deskripsi: ["Bakso aci adalah jajanan khas Garut berbahan dasar tepung tapioka (aci) dan terigu, disajikan dalam kuah pedas gurih dengan tekstur kenyal tanpa daging giling. Camilan ini populer dengan isian seperti ayam suwir atau tetelan, serta pelengkap cuanki, sukro cikur, dan jeruk nipis"],
    bahan: ["150 gr tepung tapioka/kanji", "50 gr tepung terigu", "1 sdt garam & 1 sdt kaldu bubuk", "1 batang daun bawang, iris tipis", "150-200 ml air panas", "isian: ayam suwir, tetelan, atau keju (opsional)", "500 ml air/kaldu sapi", "3 siung bawang putih & 2 siung bawang merah (haluskan)", "cabai rawit/bubuk cabai sesuai selera", "garam, gula, dan kaldu bubuk secukupnya", "jeruk limau/nipis"],
    cara: ["Campur tepung tapioka, terigu, garam, kaldu, dan daun bawang. Tuang air panas sedikit demi sedikit sambil diaduk dengan sendok.", "Setelah agak dingin, uleni ringan dengan tangan hingga kalis (jangan terlalu lama agar tidak alot)", "Ambil sedikit adonan, isi dengan ayam/tetelan (jika pakai), bulatkan.", "Rebus dalam air mendidih yang diberi sedikit minyak agar tidak lengket. Rebus hingga mengapung (tanda matang). Angkat.", "Kuah: Tumis bumbu halus hingga harum, tuang air/kaldu, beri garam, gula, kaldu, dan cabai. Masak hingga mendidih.", "Masukkan bakso aci ke dalam kuah, tambahkan topping (cuanki, sukro), dan perasan jeruk limau"],

    komentar: [
      { nama: "Dewi", isi: "Kuahnya gurih dan pedasnya pas, tekstur acinya juga kenyal enak banget dimakan pas hangat", rating: 5 },
      { nama: "Rian", isi: "Lumayan enak sih, tapi menurutku kuahnya agak terlalu berminyak", rating: 3 }
    ]
  },
  {
    id: 14,
    nama: "Es Teler",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/teler.png",
    deskripsi: ["Es teler adalah variasi modern dari minuman tradisional Indonesia yang memadukan kesegaran buah-buahan dengan kuah yang jauh lebih kental, gurih, dan creamy. Perbedaan utamanya terletak pada penggunaan keju oles dalam campuran kuah serta parutan keju cheddar premium sebagai topping yang memberikan kontras rasa manis-asin yang unik"],
    bahan: ["Alpukat: potong kotak atau kerok", "Nangka: potong-potong memanjang", "Kelapa muda: serut memanjang", "Jelly kelapa: 1 bungkus Nutrijell kelapa + gula + air (masak, dinginkan, parut kasar)", "Biji selasih", "cincau hitam (potong dadu) dan sagu mutiara", "toping: keju cheddar, parut.", "Keju oles: 80-150 gram", "krimer bubuk: 200-400 gram", "susu evaporasi: 1 kaleng", "kental manis", "gula halus: 300 gram", "susu cair (UHT): 150-300 ml"],
    cara: ["Masak Nutrijell kelapa sesuai petunjuk kemasan, biarkan mengeras, lalu parut kasar agar teksturnya menyerupai kelapa serut.", "Rendam biji selasih dalam sedikit air panas sampai mekar, lalu tiriskan", "Buat Kuah Cheese Creamy: Campurkan keju oles, krimer bubuk, kental manis, susu evaporasi, dan susu UHT ke dalam wadah besar", "Kocok menggunakan mixer selama kurang lebih 10 menit mulai dari kecepatan rendah ke tinggi. Proses ini penting agar kuah menjadi kental, lembut, dan menyatu sempurna", "simpan kuah di kulkas agar dingin", "siapkan gelas atau mangkuk, masukkan es batu secukupnya", "tata isian secara berturut-turut: cincau, sagu mutiara, parutan jelly kelapa, kelapa muda asli, alpukat, dan nangka", "siram dengan kuah cheese creamy hingga seluruh isian terendam", "taburkan biji selasih di atasnya", "beri taburan parutan keju cheddar yang melimpah sebagai sentuhan akhir"],

    komentar: [
      { nama: "Lala", isi: "Seger banget, apalagi pas dingin. Perpaduan buah sama kuah creamy nya enak!", rating: 5 },
      { nama: "Yusuf", isi: "Manisnya pas dan toppingnya banyak, worth it sih menurutku", rating: 4 },
      { nama: "Mira", isi: "Agak terlalu manis buat aku, jadi cepet eneg kalau kebanyakan", rating: 3 }
    ]
  },
  {
    id: 15,
    nama: "Cheese Coin Cake",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 12000,
    gambar: "/Cheese Coin Cake.jpg",
    deskripsi: ["Cheese Coin Cake adalah jajanan kekinian berbentuk koin bulat besar yang populer dari Korea Selatan, menawarkan perpaduan pancake lembut dengan isian keju mozarella melimpah yang gurih dan mulur. Camilan ini bertekstur empuk, wangi mentega, dan paling nikmat disantap hangat-hangat agar kejunya terasa."],
    bahan: ["125-250 gr tepung terigu protein sedang", "200-280 ml susu cair UHT", "1-2 butir telur ayam", "2-5 sdm gula pasir (sesuai selera)", "1 sdt baking powder", "1 sdt vanilla extract atau perisa vanilla", "1 sdm margarin", "keju mozzarella"],
    cara: ["Campur tepung terigu, gula, baking powder, dan garam dalam wadah. Masukkan telur, susu cair, dan vanilla. Aduk rata menggunakan whisk hingga mulus, tidak ada gumpalan, dan licin.", "Diamkan adonan selama 10-15 menit agar tepung terhidrasi sempurna.", "Panaskan cetakan koin/teflon kecil di atas api kecil, olesi tipis dengan margarin.", "tuang adonan hingga setengah cetakan. masak hingga setengah matang", "letakkan potongan keju mozzarella di tengah adonan", "tuang adonan kembali hingga keju tertutup penuh dan cetakan penuh", "Balik coin cake setelah bagian bawah kuning kecoklatan. Panggang terus hingga matang merata dengan api kecil agar tidak gosong.", "angkat dan sajikan hangat-hangat"],

    komentar: [
      { nama: "Sinta", isi: "Kejunya melimpah dan lumer banget pas dimakan hangat, enak sih ini!", rating: 5 }
    ]
  },
  {
    id: 16,
    nama: "Mochi Bites",
    jenis: "Snack",
    rasa: "Manis",
    harga: 12000,
    gambar: "/Mochi Bites.jpg",
    deskripsi: ["Mochi bites adalah camilan populer berbentuk bola-bola kecil kenyal khas Jepang yang disajikan tanpa isi, namun dibalur bubuk cokelat/matcha dan dicocol ke saus keju creamy. Teksturnya lembut, kenyal, dan manis-gurih. Dibuat dari tepung ketan yang dikukus, lalu dibentuk bulat kecil dan dipadukan saus keju oreo."],
    bahan: ["125 gr tepung ketan", "2 sdm gula pasir", "1/4 sdt garam", "180 ml susu cair (full cream)", "1 sdt minyak goreng", "bubuk kakao/milo/matcha (untuk baluran)", "60 gr keju oles/ cream cheese", "150 ml susu cair", "1 sdm gula pasir", "1 sdm tepung maizena (larutkan dengan sedikit air)"],
    cara: ["Membuat Adonan Mochi: Campurkan tepung ketan, gula pasir, garam, susu cair, dan minyak goreng ke dalam wadah. Aduk rata hingga tidak ada yang menggumpal, lalu saring ke wadah tahan panas.", "Kukus adonan selama kurang lebih 20-25 menit dengan api sedang hingga teksturnya transparan dan matang.", "Setelah matang, angkat dan biarkan sedikit dingin. Uleni adonan dengan spatula hingga kalis. Ambil sedikit adonan, bulatkan kecil-kecil, lalu gulingkan ke dalam bubuk kakao atau Milo hingga rata.", "Membuat Saus Keju: Campurkan keju oles, susu cair, dan gula pasir ke dalam panci. Masak dengan api kecil sambil diaduk hingga keju lumer. Masukkan larutan maizena, aduk terus hingga mengental. Angkat dan dinginkan.", "Sajikan mochi bites kecil di wadah, beri taburan oreo crumble, dan siram atau cocol dengan saus keju."],

    komentar: [
      { nama: "Alya", isi: "Teksturnya kenyal banget dan saus kejunya bikin makin enak, aku suka banget dimakan pas masih hangat", rating: 5 }
    ]
  },
  {
    id: 17,
    nama: "Leker",
    jenis: "Snack",
    rasa: "Manis",
    harga: 5000,
    gambar: "/lekker.png",
    deskripsi: ["Kue leker crispy adalah jajanan tipis renyah berbahan dasar campuran tepung beras dan maizena, dimasak di teflon dengan api kecil hingga kecoklatan. Kunci ke-kriuk-annya ada pada adonan cair, penggunaan teflon panas, dan teknik masak lambat. Isian populer meliputi pisang, coklat meses, susu kental manis, dan keju."],
    bahan: ["100 gr tepung beras", "40-50 gr tepung maizena", "20-50 gr tepung terigu protein sedang", "100-125 gr gula pasir (sesuai selera)", "200-250 ml susu cair", "1 butir telur", "1/2 sdt baking powder", "1/2 sdt vanili cair", "1/4 - 1/2 sdt garam", "1 sdm margarin cair (opsional)", "topping: meses, pisang iris, keju parut, kental manis, per-selaian"],
    cara: ["Campur semua bahan kering (tepung beras, maizena, terigu, gula, baking powder, garam) dalam wadah.", "Masukkan telur, vanili, dan susu cair secara bertahap sambil diaduk dengan whisk hingga rata dan tidak bergerindil. Saring adonan jika perlu agar halus.", "diamkan adonan selama 15-30 menit agar renyah", "Panaskan teflon anti lengket dengan api sangat kecil. Tuang 1 sendok sayur adonan, segera putar teflon hingga adonan merata tipis.", "Tunggu hingga pinggiran berwarna kecoklatan dan kering. Tambahkan isian/topping di tengah.", "Setelah kering kecoklatan dan renyah, lipat leker menjadi dua atau empat. Angkat dan sajikan."]
  },
  {
    id: 18,
    nama: "Takoyaki",
    jenis: "Snack",
    rasa: "Pedas",
    harga: 10000,
    gambar: "/Takoyaki.jpg",
    deskripsi: ["Takoyaki adalah jajanan berbentuk bola-bola kecil berdiameter 3—5 cm yang berasal dari Osaka, Jepang, berbahan dasar adonan tepung terigu dengan isian potongan gurita/sosis, tenkasu (remahan tempura), dan daun bawang. Takoyaki dimasak menggunakan cetakan khusus, disajikan dengan saus gurih, mayones, dan katsuobushi."],
    bahan: ["200-400 gr tepung terigu", "400-700 ml air", "2-3 butir telur ayam", "1-2 sdt kaldu bubuk", "1 sdt kecap asin", "1/2 sdt baking powder", "garam secukupnya", "potongan gurita rebus", "daun bawang, diiris halus", "tenkasu (remahan tempura) atau kerupuk pangkit diremas", "isian alternatif: sosis, keju, atau bakso", "saus takoyaki (campuran saus tiram, saus tomat, madu)", "mayones", "katsuobushi (serutan ikan cakalang)", "aonori (rumput laut kering)"],
    cara: ["Campurkan tepung terigu, kaldu dashi/air, telur, baking powder, kecap asin, dan garam dalam wadah. Aduk rata hingga tidak ada gumpalan, lalu saring agar tekstur halus.", "Panaskan cetakan takoyaki dengan api sedang-kecil, olesi minyak goreng secukupnya pada setiap lubang.", "Tuang adonan hingga setengah cetakan. Masukkan potongan gurita/isian lainnya, tenkasu, dan taburan daun bawang ke setiap lubang.", "Tuang kembali adonan hingga penuh dan meluber sedikit. Saat pinggiran mulai matang, balik takoyaki 90 derajat menggunakan tusuk sate. Biarkan adonan mentah mengalir keluar, lalu putar penuh hingga berbentuk bola utuh.", "Masak dengan cara membolak-balik takoyaki hingga warnanya cokelat keemasan dan matang merata.", "Angkat takoyaki, sajikan di piring. Olesi dengan saus takoyaki, beri mayones, dan taburi katsuobushi serta aonori."],

    komentar: [
      { nama: "Nisa", isi: "Rasanya lumayan enak, tapi menurutku bagian dalamnya agak terlalu lembek", rating: 3 },
      { nama: "Fahri", isi: "Sausnya enak dan gurita di dalamnya juga kerasa, overall oke sih", rating: 4 }
    ]
  },
  {
    id: 19,
    nama: "Salad Buah",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 15000,
    gambar: "/Salad Buah.jpeg",
    deskripsi: ["Salad buah adalah hidangan penutup segar yang terdiri dari potongan buah-buahan segar (apel, anggur, melon, stroberi, mangga) yang disiram saus creamy manis-gurih (campuran mayones, yoghurt, susu kental manis) dan taburan keju parut. Sangat mudah dibuat, sehat, dan cocok disajikan dingin."],
    bahan: ["buah-buahan (sesuai selera, potong dadu:", "1 buah apel (rendam air garam sebentar agar tidak coklat)", "1 buah pir", "200 gr anggur, belah 2", "100 gr melon, potog dadu", "100 gr strawberry, belah 4", "1 buah mangga, 1/2 buah naga (potog dadu)", "1 bungkus nata de coco, buang airnya", "200 gr mayonnaise", "100 gr yoghurt plain atau rasa buah (mango/strawberry)", "2-3 sachet SKM putih (sesuai selera manis)", "1 sdm air perasan lemon/jeruk nipis (opsional)", "keju cheddar parut (toping)"],
    cara: ["Cuci bersih semua buah, kupas kulit jika perlu, lalu potong-potong seukuran dadu atau sesuai selera.", "Dalam wadah terpisah, campurkan mayones, yoghurt, susu kental manis, dan air perasan lemon. Aduk rata hingga teksturnya creamy dan halus.", "Masukkan potongan buah dan nata de coco ke dalam mangkuk besar. Tuangkan saus ke atas buah.", "aduk rata secara perlahan agar buah tidak hancur", "Tuang salad ke dalam wadah saji, taburkan keju parut yang banyak di atasnya dan hias potongan buah di atas keju.", "Simpan di dalam kulkas (chiller) selama minimal 30 menit-1 jam agar lebih nikmat saat disantap"]
  },
  {
    id: 20,
    nama: "Matcha Strawberry",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 17000,
    gambar: "/mtcha-str.png",
    deskripsi: ["Matcha Strawberry adalah minuman kekinian yang memadukan pasta stroberi manis-asam di bagian bawah, susu lembut di tengah, dan teh hijau matcha yang sedikit pahit di atasnya. Minuman ini populer karena rasanya yang seimbang, segar, dan tampilannya yang berlapis cantik"],
    bahan: ["bubuk matcha", "air panas untuk melarutkan matcha", "pure strawberry atau selai strawberry", "es batu", "icehot non-dairy creamer (krimer nabati)"],
    cara: ["Ayak 1 sdt bubuk matcha ke dalam cangkir, tuang sedikit air panas, lalu kocok hingga tidak bergerindil dan teksturnya halus.", "Haluskan strawberry segar menjadi puree atau gunakan selai. Tuang di dasar gelas saji untuk membentuk lapisan pertama berwarna merah muda.", "Masukkan es batu. Tuang ICEHOT Non-Dairy Creamer yang sudah dilarutkan sesuai petunjuk penggunaan hingga membentuk lapisan creamy di atas strawberry.", "Tuang larutan matcha secara perlahan di atas creamer. Biarkan warna hijau matcha membentuk lapisan terakhir."],

    komentar: [
      { nama: "Dina", isi: "Perpaduan strawberry sama matchanya unik sih, manis sama pahitnya balance banget", rating: 5 },
      { nama: "Riko", isi: "Menurutku agak terlalu manis di bagian bawah, tapi tetap enak diminum dingin", rating: 4 },
      { nama: "Sinta", isi: "Kurang cocok di aku, mungkin karena aku ga terlalu suka matcha", rating: 2 }
    ]
  },
  {
    id: 21,
    nama: "Crab Ranggon",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 22000,
    gambar: "/Crab Rangoon.jpg",
    deskripsi: ["Crab Rangoon adalah camilan khas Tionghoa-Amerika berupa pangsit goreng renyah berisi campuran krim keju (cream cheese) dan daging kepiting/crab stick yang gurih-creamy. Kulit pangsit diisi, dibentuk seperti piramida atau bunga, lalu digoreng hingga cokelat keemasan. Sajikan dengan saus sambal atau saus asam manis."],
    bahan: ["15-20 lembar kulit pangsit siap pakai", "200 gr cream cheese", "100-150 gr crab stik (cintang kasar/suwir)", "1-2 batang daun bawang (iris halus)", "1 siung bawang putih, haluskan", "1 sdt saus tiram/kecap asin", "1/2 sdt gula pasir dan sedikit garam", "perekat: air putih/ putih telur", "minyak"],
    cara: ["Membuat Isian: Dalam wadah, campurkan cream cheese, crab stick suwir, daun bawang, bawang putih, saus tiram, gula, dan kaldu bubuk. Aduk rata hingga teksturnya seperti pasta.", "Membentuk Pangsit: Ambil selembar kulit pangsit, letakkan 1 sdt isian di tengahnya. Olesi pinggiran kulit dengan air/putih telur.", "Lipat ujung-ujung kulit ke tengah membentuk piramida atau bunga, rekatkan dengan rapat agar isian tidak keluar.", "Panaskan minyak dalam jumlah banyak dengan api sedang. Goreng crab rangoon hingga berwarna kuning keemasan.", "Angkat dan tiriskan. Sajikan selagi hangat dengan saus sambal cocolan."],

    komentar: [
      { nama: "Kevin", isi: "Kulitnya renyah banget dan isi cream cheese sama crabnya creamy, enak dimakan pas masih hangat", rating: 5 }
    ]
  },
  {
    id: 22,
    nama: "Kebab",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 15000,
    gambar: "/Kebab.jpg",
    deskripsi: "Kebab adalah hidangan daging yang berasal dari Timur Tengah yang kini populer di seluruh dunia, termasuk Indonesia. Secara umum, kebab terdiri dari daging (sapi/ayam) yang dibumbui, dipanggang, dan disajikan dengan sayuran segar seperti selada, tomat, dan bawang bombay.",
    bahan: ["300 gr daging sapi/ayam (cincang kasar)", "2 siung bawang putih", "1/2 bawang bombay (iris memanjang)", "1 sdt bubuk kari (opsional)", "garam, gula pasir, dan merica bubuk secukupnya", "1 sdm mayones atau yoghurt (untuk marinasi agar daging lembut)", "margarin", "kulit tortila (kulit kebab jadi)", "selada secukupnya (iris kasar)", "keju cheddar atau mozzarella", "saus tomat dan saus sambal", "mayones"],
    cara: [
      {
        judul: "Menyiapkan Daging:",
        langkah: ["Marinasi daging sapi/ayam dengan bawang putih cincang, bumbu kari, mayones/yogurt, garam, merica, dan gula. Diamkan minimal 15-30 menit agar bumbu meresap.", "Panaskan margarin di wajan (teflon), tumis bawang bombay hingga layu dan harum.", "Masukkan daging yang sudah dimarinasi. Masak hingga daging matang sempurna, berubah warna, dan kering (tidak berkuah). Angkat dan sisihkan."]
      },
      {
        judul: "Menyiapkan Isian & Kulit:",
        langkah: ["Siapkan teflon datar, panggang kulit tortila sebentar saja (5-10 detik) agar lebih lemas dan mudah digulung. Jangan terlalu lama agar tidak kaku."]
      },
      {
        judul: "Menyusun dan Memanggang Kebab:",
        langkah: ["Ambil satu lembar tortila. Tata selada, irisan tomat, dan bawang bombay di bagian tengah.", "tambahkan daging tumis di atas sayuran", "Tambahkan saus tomat, saus sambal, dan mayones sesuai selera. Tambahkan parutan keju.", "Lipat sisi kanan dan kiri tortila ke dalam, kemudian gulung dengan padat sambil ditekan-tekan agar tidak lepas.", "Panaskan teflon dengan sedikit margarin, panggang kebab gulung dengan api kecil hingga kulitnya kecoklatan dan renyah (crispy)."]
      },
      { 
        judul: "Penyajian",
        langkah: ["Angkat dan sajikan selagi hangat"]
      }
    ],

    komentar: [
      { nama: "Adit", isi: "Dagingnya berasa dan bumbunya meresap, sayurnya juga fresh jadi ga eneg", rating: 5 },
      { nama: "Mila", isi: "Lumayan enak, tapi sausnya agak kebanyakan jadi sedikit terlalu basah", rating: 3 }
    ]
  },
  {
    id: 23,
    nama: "Croffle",
    jenis: "Snack",
    rasa: "Manis",
    harga: 20000,
    gambar: "/Croffle.jpeg",
    deskripsi: ["Croffle adalah singkatan dari croissant dan waffle. ini adalah hidangan pastri kekinian yang menggabungkan adonan croissant berlapis-lapis dengan teknik memasak waffle menggunakan cetakan waffle maker."],
    bahan: ["1 pack adonan danish pastry atau puff pastry instan", "gula pasir atau gula palem secukupnya", "margarin", "toping: sirup maple, madu, coklat, keju, atau susu kental manis"],
    cara:["Jika menggunakan puff pastry beku, biarkan adonan mencapai suhu ruang (thawing) agar mudah dibentuk namun tidak terlalu lembek.", "potong adonan berbentuk segitiga sama kaki", "Iris sedikit bagian bawah segitiga, lalu gulung dari bagian bawah menuju ujung lancip hingga membentuk croissant mini. Ulangi sampai adonan habis.", "Diamkan adonan yang sudah digulung selama 15-20 menit agar mengembang maksimal.", "Balurkan adonan croissant ke dalam gula pasir atau gula palem secara merata. Gula ini akan membuat bagian luar croffle renyah dan terkaramelisasi.", "Panaskan cetakan waffle dan olesi dengan sedikit margarin. Letakkan 1-2 adonan croissant di atas cetakan, tutup, dan panggang hingga berwarna coklat keemasan dan garing (sekitar 3-5 menit)", "Angkat croffle, tambahkan topping sesuai selera (keju, sirup, atau coklat)."]
  },
  {
    id: 24,
    nama: "Smoothie Bowl",
    jenis: "Makanan",
    rasa: "Manis",
    harga: 35000,
    gambar: "/Smoothie Bowl.jpg",
    deskripsi: ["Smoothie bowl adalah hidangan sarapan atau camilan sehat berupa campuran buah-buahan beku yang diblender kental, disajikan dalam mangkuk, dan dipercantik dengan berbagai topping (granola, buah segar, biji-bijian). Berbeda dengan smoothie gelas, teksturnya seperti es krim lembut."],
    bahan: ["2 buah pisang matang (potong dan bekukan)", "150 gr buah naga/strawberry/berry beku", "50-70 ml susu cair (almond/oat)", "1 sdm yogurt plain atau selai kacang", "topping: granola, irisan pisang/strawberry, chia seeds, parutan kelapa"],
    cara: ["Pastikan buah (pisang dan buah lain) sudah dibekukan minimal 4 jam atau semalaman agar hasil kental.", "Masukkan buah beku, cairan, dan yogurt ke dalam blender berkecepatan tinggi. Blender dengan mode pulse terlebih dahulu, lalu haluskan hingga teksturnya kental seperti es krim. Jangan terlalu banyak cairan agar tidak cair.", "tuang smoothie kental ke dalam mangkuk", "tata toping secara estetik di atasnya", "sajikan saat masih dingin"],

    komentar: [
      { nama: "Rara", isi: "Seger banget dan keliatan sehat, toppingnya juga banyak jadi ga bosen makannya", rating: 5 },
      { nama: "Dion", isi: "Menurutku agak terlalu dingin dan kurang manis, tapi masih oke sih", rating: 3 },
      { nama: "Siska", isi: "Teksturnya enak kayak es krim, aku suka banget buat sarapan", rating: 4 }
    ]
  },
  {
    id: 25,
    nama: "Es Lumut",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 5000,
    gambar: "/lumut.png",
    deskripsi: "Es lumut adalah minuman kekinian perpaduan jeli lembut (nutrijel) dan kuah susu yang manis-gurih, disajikan dingin dengan tekstur menyerupai lumut hijau. Dibuat dengan menuang jeli panas ke atas es batu, diaduk cepat dengan whisk. Populer karena mudah, bahan sederhana, dan rasanya segar.",
    bahan: ["1 bungkus Nutrijell (bebas rasa apa saja)", "100-200 gr gula pasir", "700-750 ml air", "1 kaleng susu evaporasi", "150-250 gr SKM putih", "500 gr es batu (es kristal lebih disarankan)", "pop ice (bebas rasa apa saja,untuk menggantikan pewarna makanan)"],
    cara: ["Campur Nutrijell, gula pasir, dan air dalam panci. Masak sambil diaduk hingga mendidih.", "Siapkan es batu besar dalam wadah/baskom. Tuang jeli panas langsung di atas es batu.", "Aduk dengan whisk atau sendok secara cepat sampai jeli membeku dan hancur menjadi serpihan halus seperti lumut.", "Tambahkan susu evaporasi dan kental manis ke dalam campuran jeli lumut. Aduk rata.", "Koreksi rasa, jika sudah pas maka Es lumut siap disajikan dingin, bisa dimasukkan ke botol atau gelas"]
  },
  {
    id: 26,
    nama: "Mango Sago",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/mango-sago.png",
    deskripsi: "Mango Sago adalah hidangan penutup (dessert) kekinian khas Hong Kong yang populer karena rasa manis, segar, dan tekstur creamy yang dihasilkan dari perpaduan mangga matang, susu, dan sagu mutiara. Hidangan ini umumnya disajikan dingin, memberikan sensasi menyegarkan dengan potongan jeli mangga, nata de coco, dan pure mangga kental. Sangat cocok dijadikan takjil, cemilan keluarga, atau ide jualan yang praktis.",
    bahan: [
      {
        judul: "bahan untuk isi:",
        langkah: ["2-3 buah mangga matang", "100 gr sagu mutiara", "es batu"]
      },
      {
        judul: "bahan untuk kuah creamy",
        langkah: ["1 kaleng susu evaporasi", "150-200 ml SKM", "150 ml krimer cair atau whipping cream", "air dingin secukupnya"]
      }
    ],
    cara: ["Pertama, rebus sagu mutiara dengan air yang banyak. Masak hingga bijinya berubah menjadi transparan, lalu matikan api dan diamkan beberapa menit agar benar-benar matang merata. Setelah itu, tiriskan dan bilas dengan air dingin agar tidak lengket dan teksturnya tetap kenyal. Simpan sagu dalam wadah terpisah.", "Ambil dua buah mangga matang, kupas, dan potong-potong. Blender mangga tersebut hingga halus tanpa air agar hasil pureenya kental dan manis alami. Sisihkan.", "Satu buah mangga lainnya dipotong dadu kecil untuk topping saat penyajian. Ini akan memberikan tekstur tambahan yang nikmat.", "Dalam wadah besar, campurkan susu evaporasi, susu kental manis, dan krimer cair atau whipping cream. Aduk perlahan hingga menghasilkan kuah yang creamy. Jika teksturnya terlalu kental, tambahkan sedikit air dingin. Jika kurang manis, tambahkan sedikit lagi susu kental manis sesuai selera.", "jika ingin hasil lebih fruity, kamu bisa menambahkan sedikit puree mangga ke dalam kuah creamy", "Masukkan pure mangga ke dalam kuah creamy dan aduk perlahan hingga rata. Setelah itu, tambahkan sagu mutiara dan potongan mangga dadu. Aduk kembali secara perlahan agar sagu tidak hancur.", "Jika ingin versi segar, tambahkan es batu saat akan disajikan atau dinginkan di kulkas selama 2–3 jam untuk rasa yang lebih menyatu."],

    komentar: [
      { nama: "Tari", isi: "Seger banget sih ini, apalagi manggonya manis dan kuahnya creamy, cocok diminum pas dingin", rating: 5 }
    ]
  },
  {
    id: 27,
    nama: "Vanilla Milk Caramel",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/vanila-milk-c.png",
    deskripsi: "Vanilla Milk Caramel adalah minuman berbahan dasar susu yang memadukan kelembutan aroma vanila dengan kekayaan rasa karamel cair yang manis legit. Minuman ini memiliki tekstur creamy dan velvety, dengan perpaduan warna putih susu yang kontras dengan saus karamel cokelat keemasan. Umumnya disajikan dingin dengan es batu, memberikan sensasi menyegarkan sekaligus menenangkan, menjadikannya pilihan sempurna untuk penikmat minuman manis yang tidak terlalu suka kopi.",
    bahan: ["200-250 ml susu cair full cream", "1 sdm sirup vanilla", "2 sdm susu karamel", "es batu", "100 gr gula pasir", "50 ml air panas", "2 sdm mentega", "3 sdm heavy cream atau SKM"],
    cara: [
      {
        judul: "membuat saus karamel",
        langkah: ["masak gula pasir di teflon dengan api sedang tanpa diaduk. biarkangula meleleh hingga berwarna cokelat keemasan (karamel)", "Kecilkan api, masukkan mentega. aduk cepat hingga mentega larut", "Tuangkan air panas secara perlahan (hati-hati letupan), aduk rata.", "Tambahkan heavy cream atau susu kental manis, aduk rata hingga tekstur kental dan halus. Angkat dan dinginkan."]
      },
      {
        judul: "meracik vanilla milk caramel",
        langkah: ["Oleskan saus karamel di dinding bagian dalam gelas untuk tampilan menarik.", "Tuang sirup vanila (atau ekstrak vanila) ke dalam gelas.", "Masukkan susu cair full cream ke dalam gelas. Aduk rata.", "masukkan es batu hingga gelas penuh", "Tambahkan saus karamel cair di atas es batu dan sedikit di dinding gelas sebagai topping.",]
      },
      {
        judul: "penyajian",
        langkah: ["Aduk sebelum diminum agar vanila, susu, dan karamel menyatu sempurna."]
      }
    ],

    komentar: [
      { nama: "Reno", isi: "Manisnya pas dan aroma vanillanya kerasa banget, karamel juga bikin rasanya makin enak", rating: 5 },
      { nama: "Putri", isi: "Menurutku agak terlalu manis, jadi harus diaduk dulu biar balance", rating: 3 }
    ]
  },
  {
    id: 28,
    nama: "Mocha Latte",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 20000,
    gambar: "/mocha-latte.png",
    deskripsi: "Mocha latte adalah variasi caffe latte yang memadukan kepekatan espresso dengan kekayaan rasa cokelat. Memiliki perpaduan harmonis antara kopi yang roasty, susu yang creamy, dan manisnya sirup atau bubuk cokelat. Umumnya, mocha latte terdiri dari satu atau dua shot espresso, cokelat (sirup/bubuk), susu kukus (steamed milk), dan sedikit buih susu di atasnya",
    bahan: ["6 gram bubuk kopi tanpa ampas", "1½ sdt cokelat bubuk", "40 gr susu kental manis", "2 sdt gula pasir", "5 sdm air panas", "300 ml susu UHT", "es batu", "whipped cream dan taburan coklat bubuk (opsional)"],
    cara: ["Siapkan gelas dan campurkan bubuk kopi, cokelat bubuk, gula pasir, dan air panas. Aduk hingga tercampur rata dan mengental menggunakan milk frother.", "tuangkan susu kental manis dan aduk kembali menggunakan hand mixer hingga tercampur secara merata", "tambahkan es batu hingga memenuhi 1/2 bagian gelas", "kemudian, tuangkan susu UHT pada campuran mocha dan aduk kembali hingga rata", "tambahkan whipped cream di atasnya dan taburi coklat bubuk sebagai hiasan", "iced mocha latte siap diminum dan menemani aktivitas kamu."],

    komentar: [
      { nama: "Aldi", isi: "Perpaduan kopi sama coklatnya enak, ga terlalu pahit jadi masih cocok buat yang ga terlalu suka kopi", rating: 4 }
    ]
  },
  {
    id: 29,
    nama: "Cromboloni",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 20000,
    gambar: "/crombolonii.png",
    deskripsi: "Cromboloni atau kepanjangan dari croissant bomboloni adalah makanan yang menyatukan dua makanan paling ikonik: croissant yang lembut dan flakey serta bomboloni yang kenyal dan manis. Roti lapis dengan tekstur yang renyah di luar dan lembut di dalam",
    bahan: [
      {
        judul: "Adonan Pastry:",
        langkah: ["500 gr tepung terigu dengan kandungan protein sedang", "60 gr gula pasir", "13 gr ragi instan", "200 gr air dingin", "50 gr krim kental", "10 gr garam halus", "40 gr butter"]
      },
      {
        judul: "Butter untuk laminasi atau bahan olesan:",
        langkah: ["250 gr butter kering", "saus cokelat", "60 gr Tulip White Compound Chocolate (cokelat compound putih)", "40 gr gula pasir", "20 gr bubuk kakao", "260 gr air"]
      },
      {
        judul: "Krim Cokelat Pastry:",
        langkah: ["250 gr susu cair", "60 gr kuning telur", "60 gr gula pasir", "20 gr tepung maizena", "15 gr butter tawar", "120 gr Tulip Milk Compound (cokelat compound susu)"]
      }
    ],
    cara: [
      {
        judul: "persiapan adonan:",
        langkah: ["Campurkan semua bahan adonan roti lapis, kecuali butter. Aduk hingga adonan menjadi kalis, yaitu tidak ada lagi tepung yang terlihat dan adonan tidak lengket di tangan.", "Setelah adonan kalis, tambahkan butter dan uleni hingga adonan menjadi elastis dan licin. Ini berarti adonan sudah cukup kuat untuk menahan proses laminasi nantinya.", "Diamkan adonan dalam wadah tertutup di dalam kulkas dengan suhu 25°C selama 24 jam."]
      },
      {
        judul: "lipatan pertama:",
        langkah: ["setelah 24 jam, keluarkan adonan dari kulkas. lakukan satu lipatan ganda atau double fold", "setelah dilipat, masukkan kembali adonan ke dalam kulkas dan biarkan selama 1 jam."]
      },
      {
        judul: "lipatan kedua dan giling:",
        langkah: ["keluarkan adonan dari kulkas. lakukan satu lipatan tunggal atau single fold kali ini.", "Giling adonan hingga mencapai ketebalan sekitar 3 mm. Pastikan adonan rata dan tidak ada bagian yang terlalu tebal atau tipis."]
      },
      {
        judul: "laminasi butter:",
        langkah: ["Diamkan adonan hingga mencapai suhu sekitar 18°C. Sementara itu, keluarkan butter kering dari kulkas dan biarkan hingga sedikit melunak.", "Lakukan satu lipatan tunggal pada butter kering. Giling butter hingga mencapai ketebalan sekitar 3 mm.",]
      },
      {
        judul: "proses laminasi:",
        langkah: ["Letakkan butter di tengah adonan yang sudah digiling tipis. Lipat adonan menjadi tiga bagian seperti amplop, dengan butter di tengah-tengahnya.", "Giling kembali adonan yang sudah dilaminasi hingga mencapai ketebalan 3 mm. Potong adonan menjadi potongan-potongan dengan ukuran 3.5 cm x 30 cm.", "Gulung setiap potongan adonan memanjang dan susun di dalam loyang berbentuk segitiga (triangle rings).", "diamkan adonan selama 30 menit sebelum dipanggang"]
      },
      {
        judul: "pemanggangan:",
        langkah: ["Panaskan oven hingga suhu 180°C. Panggang adonan selama sekitar 18 menit hingga adonan mengembang dan berwarna keemasan.", "Untuk memastikan permukaan roti lapis menjadi rata, letakkan loyang lain di atas loyang berisi adonan selama proses pemanggangan."]
      },
      {
        judul: "saus cokelat:",
        langkah: ["Campurkan bubuk kakao, gula pasir, dan Tulip White Compound Chocolate yang sudah dipotong-potong dalam satu wadah.", "Didihkan air, lalu tuangkan air panas tersebut ke dalam campuran cokelat, aduk hingga semua bahan tecampur rata dan menghasilkan saus coklat yang licin dan mengkilap"]
      },
      {
        judul: "krim coklat pastry",
        langkah: ["panaskan susu cair", "Dalam wadah terpisah, campurkan kuning telur, gula pasir, dan tepung maizena. Aduk hingga rata. tuangkan sedikit demi sedikit susu hangat ke dalam campuran telur sambil terus di aduk agar telur tidak menggumpal", "Kembalikan campuran ke dalam panci dan masak dengan api sedang hingga adonan mengental dan mendidih. Angkat dari api dan tambahkan butter serta Tulip Milk Compound. Aduk hingga semua bahan tercampur rata dan krim menjadi halus."]
      },
      {
        judul: "penyajian",
        langkah: ["Ambil roti lapis yang sudah dipanggang dan susun di atas piring saji.", "Siramkan saus cokelat di atas roti lapis dan tambahkan krim cokelat pastry sebagai topping.", "Cromboloni siap disajikan dan dinikmati."]
      }
    ],

    komentar: [
      { nama: "Nia", isi: "Teksturnya unik sih, luar renyah tapi dalamnya lembut, apalagi isi coklatnya lumer banget", rating: 5 },
      { nama: "Fajar", isi: "Lumayan enak, tapi menurutku agak terlalu berminyak di bagian luar", rating: 3 },
      { nama: "Dewi", isi: "Kurang cocok di aku, mungkin karena rasanya terlalu berat", rating: 2 }
    ]
  },
  {
    id: 30,
    nama: "Seafood Saus Padang",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 35000,
    gambar: "/seafood.jpg",
    deskripsi: "seafood saus Padang merupakan hasil kreativitas masyarakat Minang yang menggabungkan bahan laut segar dengan bumbu khas mereka, menciptakan rasa yang unik dan lezat.",
    bahan: [
      {
        judul: "Bahan Utama:",
        langkah: ["500 gr cumi, bersihkan, potong-potong", "500 gr udang, bersihkan", "1-2 kepiting rebus", "telur rebus", "3 jagung manis, potong-potong", "3 batang daun bawang potong-potong", "1 buah bawang bombai, potong-potong", "3 buah cabai merah besar, iris serong", "2 batang serai, geprek", "4 lembar daun jeruk", "4 sdm saus tomat", "4 sdm saus sambal", "3 sdm saus tiram", "1 sdm tepung maizena, larutkan", "air asam, garam dan gula sesuai selera"]
      },
      {
        judul: "Bumbu Halus:",
        langkah: ["setengah ruas jahe", "10 buah cabai merah", "5 buah cabai rawit", "7 siung bawang merah", "5 siung bawang putih"]
      }
    ],
    cara: ["Siapkan cumi-cumi dan udang lalu bersihkan dengan cara mengupas kulitnya dan buang kotoran hingga bersih", "Kemudian cuci bersih dengan air mengalir hingga bersih, lalu tiriskan dan potong-potong sesuai selera", "Masukkan jahe, cabai merah, cabai rawit, bawang merah, dan bawang putih ke dalam blender lalu proses hingga semua bahan bumbu halus, sisihkan.", "Selanjutnya tumis bahan bumbu yang sudah dihaluskan ke dalam wajan yang berisi minyak panas, lalu masukkan serai dan daun jeruk sampai harum", "Kemudian tambahkan bawang bombai dan potongan jagung, masak sampai jagung setengah matang", "Setelah itu tambahkan cumi, kepiting, dan udang, lalu aduk-aduk, kemudian beri saus tiram, saus tomat, saus sambal, air asam, garam dan gula", "Masukkan irisan cabai merah besar dan saun bawang, aduk-aduk", "Tambahkan telur rebus kemudian masukan tepung maizena yang sudah dilarutkan, masak sampai semua matang", "Lalu koreksi rasa, jika dirasa sudah pas angkat dan tiriskan", "Seafood saus padang siap disajikan"],

    komentar: [
      { nama: "Beni", isi: "Bumbunya meresap banget dan pedasnya nampol, seafoodnya juga fresh jadi makin enak", rating: 5 }
    ]
  },
  {
    id: 31,
    nama: "Cimol Bojot",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 5000,
    gambar: "/cimol bojot.jpeg",
    deskripsi: "Cimol bojot adalah jajanan aci dengan cita rasa gurih-pedas. cimol bojot digoreng setengah matang sehinga teksturnya kenyal dan lembut di dalam.",
    bahan: [
      {
        judul: "Bahan Cimol:",
        langkah: ["200 gr tepung tapioka/aci", "1 sdm tepung terigu", "200-250 ml air panas mendidih", "1 sdm garam dan kaldu bubuk/royco"]
      },
      {
        judul: "Bumbu Bojot:",
        langkah: ["5-7 siung bawang putih, cincang halus", "minyak goreng", "4-5 lembar daun jeruk", " 1 bungkus boncabe, sesuai selera pedas", "penyedap rasa/kaldu bubuk secukupnya"]
      }
    ],
    cara: ["Campurkan tepung tapioka, tepung terigu, garam, dan kaldu bubuk dalam wadah. Tuang air mendidih sedikit demi sedikit sambil diaduk dengan sendok kayu. Jika sudah tidak terlalu panas, uleni dengan tangan hingga kalis dan mudah dibentuk.", "Ambil sedikit adonan, bentuk bulatan kecil-kecil. lakukan sampai adonan habis", "Masukkan bulatan cimol ke dalam wajan yang berisi minyak dingin (kompor belum dinyalakan). Setelah semua masuk, nyalakan api super kecil. Goreng sambil sesekali diaduk agar matang merata.", " Goreng hingga cimol mengapung dan teksturnya kenyal (jangan terlalu kering), lalu angkat dan tiriskan.", "Tumis bawang putih cincang dan irisan daun jeruk dengan minyak hingga kuning keemasan dan wangi. Matikan api.", "Masukkan cimol yang sudah digoreng ke dalam mangkuk besar. Siram dengan minyak bawang putih tumis, taburkan cabai bubuk, dan penyedap/bumbu atom. Aduk rata hingga semua bumbu menempel pada cimol. Cimol bojot siap disajikan"],

    komentar: [
      { nama: "Rani", isi: "Kenyal banget dan bumbunya nempel, apalagi pedesnya enak bikin nagih terus", rating: 5 }
    ]
  },
  {
    id: 32,
    nama: "Tahu Gejrot",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 10000,
    gambar: "/tahu gejrot.jpg",
    deskripsi: "Tahu gejrot adalah salah satu jajanan kaki lima yang banyak digemari karena rasanya yang unik. Ada rasa pedas, asam, dan manis dalam satu gigitan. Kuahnya yang segar dicampur dengan tahu kopong yang renyah membuat makanan ini cocok banget dimakan kapan saja.",
    bahan: [
      {
        judul: "Tahu dan Sambal Gejrot:",
        langkah: ["6-8 potong tahu coklat / tahu potong, goreng lagi hingga lebih renyah", "minyak goreng", "3 siung bawang merah", "2 siung bawang putih", "5-10 cabe rawit merah atau hijau", "sedikit garam"]
      },
      {
        judul: "Bahan Kuah",
        langkah: ["150 ml air", "2 sdm gula merah, sisir", "1 sdm kecap asin", "1/2 sdt garam", "1 sdm air asam jawa"]
      }
    ],
    cara: ["Gunakan tahu kopong yang sudah setengah matang, lalu goreng kembali sampai bagian luarnya kering dan bagian dalamnya kopong. Ini kunci tahu gejrot supaya bisa menyerap kuah dengan sempurna.", "Didihkan air, gula merah, kecap, garam, dan air asam jawa. Masak hingga gula benar-benar larut dan kuah terasa seimbang antara manis, asam, dan asin. Sisihkan dan biarkan hangat.", "Tumbuk bawang merah, bawang putih, dan cabe rawit. Jangan sampai terlalu halus, karena karakter tahu gejrot adalah sambal yang masih tampak tekstur potongan cabenya.", "Masukkan ulekan sambal ke dalam kuah hangat. Aduk merata hingga aromanya keluar dan kuah menjadi pedas-manis-asam khas tahu gejrot.", "Potong tahu yang sudah digoreng renyah menjadi beberapa bagian. Taruh di mangkuk kecil, lalu siram dengan kuah pedas segar. Biarkan meresap selama 1–2 menit sebelum disajikan."]
  },
  {
    id: 33,
    nama: "Mochi",
    jenis: "Snack",
    rasa: "Manis",
    harga: 3000,
    gambar: "/mochii.png",
    deskripsi: "Mochi adalah jajanan yang terbuat dari tepung ketan yang dibentukbulat dan diisi dengan berbagai bahan sesuai dengan selera anda, seperti cokelat, kacang mete, mangga, dan lainnya.",
    bahan: [
      {
        judul: "Bahan Kulit:",
        langkah: ["125 gr tepung ketan", "50 gr gula pasir", "25 gr minyak goreng", "120 ml air", "1/4 sdt vanilla cream", "1/4 sdt pasta tutty fruity", "1/4 sdt garam"]
      },
      {
        judul: "Bahan Isi:",
        langkah: ["25 gr margarin", "30 gr tepung terigu protein sedang", "1/4 garam", "1/4 vanilacream", "75 gr susu kental manis", "25 gr bubuk cokelat", "50 ml air", "100 gr dark coklat"]
      },
      {
        judul: "Topping:",
        langkah: ["150 gr tepung ketan (disangrai)", "150 gr tepung maizena (disangrai)", "1 lembar daun pandan"]
      }
    ],
    cara: [
      {
        judul: "Membuat Isi:",
        langkah: ["Cairkan margarine, lalu masukkan terigu dan aduk hingga kalis", "Setelah kalis masukkan air, bubuk coklat, susu kental manis, garam, dan vanilla cream lalu aduk hingga rata", "Masukkan susu UHT, aduk hingga rata, setelah rata matikan api", "Masukkan dark coklat dan aduk hingga meleleh", "Cetak adonan ke dalam pyrex, lalu dinginkan ke dalam freezer atau lemari pendingin", "Setelah dingin, bentuk adonan menggunakan sendok ukur,  ± 30 gr, lalu dibulatkan"]
      },
      {
        judul: "Membuat Kulit:",
        langkah: ["Masukkan Tepung Ketan, Gula Pasir, vanilla cream, garam, dan pasta tutty fruity ke dalam baskom, lalu tuangkan Minyak Goreng dan air sedikit demi sedikit sampai habis", "Masukkan adonan ke dalam loyang, lalu kukus selama  ± 25 menit", "Setelah matang, selagi panas ambil adonan kulit ± 30 gr, pipihkan lalu tambahkan adonan isi dan bulatkan kembali.", "Kemudian gulingkan ke dalam tepung ketan dan tepung maizena yang sudah disangrai.", "Lakukan cara ini hingga adonan habis, lalu sajikan."]
      }
    ],

    komentar: [
      { nama: "Dita", isi: "Teksturnya lembut dan kenyal, isinya juga banyak jadi enak banget dimakan", rating: 5 }
    ]
  },
  {
    id: 34,
    nama: "Ropang Boba",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 23000,
    gambar: "/ropang boba.jpeg",
    deskripsi: "Ropang Boba adalah kuliner kekinian yang memadukan roti panggang lembut dengan topping boba kenyal.",
    bahan: ["2 buah roti tawar (potongan tebal)", "Boba instan secukupnya", "1 kuning telur", "20 gr maizena", "250 gr susu segar", "250 gr fresh cream", "gula putih", "vanilla essence secukupnya"],
    cara: ["Rebus boba sampai matang dan kenyal", "campurkan bahan membuat fla (susu, larutan maizena, kuning telur, vanilla essence, gula dan fresh cream) dengan cara dimasak hingga mengental", "Siapkan roti, panggang hingga warna roti kecoklatan", "setelah dipanggang, siram dengan fla dan taburi boba di atasnya.", "Ropang Boba siap disajikan."]
  },
  {
    id: 35,
    nama: "Cireng Ayam Suwir Pedas",
    jenis: "Snack",
    rasa: "Pedas",
    harga: 3000,
    gambar: "/cireng.png",
    deskripsi: "Cireng merupakan singkatan dari (Aci Goreng), berasal dari Sunda, dan menjadi makanan ringan yang populer di seluruh Indonesia. salah satu varian yang paling menarik adalah cireng isi ayam suwir",
    bahan: [
      {
        judul: "Bahan Isian:",
        langkah: ["1/4 daging ayam", "air panas secukupnya", "minyak goreng", "6 buah cabai rawit merah", "5 buah cabai merah keriting", "2 siung bawang putih", "1 batang serai, memarkan", "1 lembar daun salam", "3 lembar daun jeruk", "1/2 sdt garam", "1/4 sdt kaldu bubuk", "1 sdt gula pasir"]
      },
      {
        judul: "Bahan Adonan:",
        langkah: ["250 gr tepung sagu", "1 sdm tepung terigu", "1/2 sdt garam", "250 ml air panas", "tepung sagu secukupnya (untuk taburan)"]
      }
    ],
    cara: ["Masukkan bahan bumbu seperti, cabai rawit merah, cabai merah keriting, bawang merah, dan bawang putih ke dalam blender", "Tambahkan sedikit air atau minyak ke dalam blender kemudian proses sampai halus, sisihkan", "Rebus daging ayam yang telah dibersihkan serta dicuci bersih sampai matang. setelah matang, angkat dan tiriskan ayam, lalu suwir-suwir kemudian sisihkan", "Goreng sebentar suwir ayam ke dalam wajan berisi minyak panas, tiriskan", "Di dalam wajan bekas menggoreng ayam suwir, tumis bumbu sampai harum matang beserta daun salam, daun jeruk, dan lengkuas. apabila bumbu matang kemudian masukkan bumbu penyedap seperti, garam, gula, kaldu bubuk, serta suwir ayam lalu diaduk rata, lalu jangan lupa koreksi rasa. jika sudah sesuai, matikan api, sisihkan.", "Untuk membuat adonan cireng campurkan tepung sagu, tepung terigu, dan garam ke dalam wadah. diaduk rata terlebih dulu supaya bumbu merata, lalu tuangkan air panas sedikit demi sedikit sambil diaduk cukup sampai rata", "Ambil secukupnya adonan, bulat pipihkan kemudian isikan ayam suwir, lalu bungkus rapi dengan bentuk mirip pastel. lakukan sampai selesai, sisihkan, dan jangan lupa taburi dengan tepung sagu supaya tidak lengket", "Setelah adonan selesai dibentuk dengan isian ayam suwir, goreng cireng dalam keadaan minyak dingin di api sedang sampai matang", "Selama proses menggoreng untuk sesekali bolak-balikkan adonan cireng supaya matangnya merata. jika telah matang matikan api, tiriskan, cireng isi ayam suwir pedas siap untuk disajikan"],

    komentar: [
      { nama: "Ilham", isi: "Isi ayamnya pedes dan gurih, luar cirengnya renyah tapi dalamnya tetap kenyal", rating: 5 },
      { nama: "Novi", isi: "Menurutku terlalu pedas, jadi kurang bisa nikmatin rasanya", rating: 2 }
    ]
  },
  {
    id: 36,
    nama: "Kwetiau",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 15000,
    gambar: "/kwetiau.jpg",
    deskripsi: "Kwetiau adalah sejenis mie Tionghoa berwarna putih dan pipih yang terbuat dari tepung beras. kwetiau goreng disajikan dengan berbagai bahan seperti telur, daging sapi, ayam ataupun seafood, serta sayuran seperti sawi.",
    bahan: ["1 bungkus kwetiau kering", "3 buah sosis, potong serong", "1 butir telur", "3 siung bawang merah, iris tipis", "2 siung bawang putih, iris tipis", "1 sdm minyak wijen", "1 sdm kecap asin", "kecap manis secukupnya", "2 sdm saus tiram", "garam secukupnya", "kaldu jamur secukupnya", "1 batang sawi hijau, iris tipis", "air secukupnya"],
    cara: ["Rebus kwetiau hingga setengah matang, kemudian tiriskan dan sisihkan.", "Panaskan minyak, tumis bawang merah, bawang putih, dan sosis hingga layu/ Masukkan telur, kemudian masak orak arik", "Kemudian, masukkan kwetiau, beri air, saus tiram, kecap asin, minyak wijen, kecap manis, garam, dan kaldu jamur. Selanjutnya, aduk hingga tercampur rata, masak hingga matang", "Terakhir tambahkan daun bawang, aduk sebentar, lalu matikan kompor. Kwetiau siap santap!"]
  },
  {
    id: 37,
    nama: "Puding Karamel",
    jenis: "Snack",
    rasa: "Manis",
    harga: 12000,
    gambar: "/puding caramel.jpg",
    deskripsi: "Puding karamel adalah hidangan penutup klasik (dessert) berbahan dasar custard (campuran susu dan telur) yang lembut, disajikan dengan lapisan saus karamel cair di atasnya.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["4 butir telur", "500 ml susu cair", "10 sendok makan gula pasir", "margarin secukupnya (untuk olesan loyang)"]
      },
      {
        judul: "Bahan Saus Karamel:",
        langkah: ["8 sdm gula pasir", "2 sdm air", "4 sdm air panas"]
      }
    ],
    cara: ["Siapkan cetakan puding yang tahan panas, lalu olesi dengan margarin secukupnya.", "Masukkan gula pasir dan sedikit air ke dalam panci. Masak dengan api sedang hingga gula meleleh dan berubah warna menjadi kecoklatan. Kemudian matikan api.", "Perlahan tuang sedikit air panas ke dalam saus karamel sambil menggoyang-goyangkan panci. tuang saus karamel ke dalam cetakan-cetakan puding yang telah diolesi margarin secukupnya.", "Di wadah lainnya, kocok telur.", "Siapkan panci dan campurkan susu serta gula pasir di dalam panci. Masak sebentar hanya sampai gula larut. Matikan api jika gula telah larut dan diamkan sampai suhu susu kembali ke suhu ruangan.", "Tuang susu ke dalam wadah berisi telur perlahan-lahan sambil diaduk. Kocok pelan adonan puding hingga semua bahan tercampur merata. tuangkan adonan puding karamel ke dalam cetakan puding yang telah berisi saus karamel.", "Panaskan panci kukusan dan masukkan cetakan berisi adonan puding. Kukus hingga puding karamel mengeras. (Tips: lapisi tutup panci kukusan dengan kain bersih agar uap dari kukusan tidak menetes-netes ke dalam adonan puding karamel)", "Angkat dan keluarkan puding karamel dari panci kukusan dan dinginkan sejenak. Masukkan puding karamel yang telah tidak beruap ke dalam lemari pendingin jika Anda ingin menyajikan puding karamel dalam keadaan dingin dan puding karamel siap untuk dinikmati."],

    komentar: [
      { nama: "Mira", isi: "Teksturnya lembut banget dan karamel di atasnya bikin rasanya makin enak, ga terlalu manis juga", rating: 5 },
      { nama: "Doni", isi: "Lumayan enak, tapi menurutku karamelnya agak pahit sedikit", rating: 3 }
    ]
  },
  {
    id: 38,
    nama: "Egg Wafle",
    jenis: "Snack",
    rasa: "Manis",
    harga: 15000,
    gambar: "/egg wafle.jpg",
    deskripsi: "Egg Waffle adalah street food yang populer di Hong Kong dan Makau. terbuat dari sejumlah bahan seperti susu, mentega, gula, garam, kuning telur, dan tepung terigu, dengan tekstur khasnya yang renyah diluar dan lembut di dalam.",
    bahan: [
      {
        judul: "Bahan:",
        langkah: ["200 gr tepung terigu protein sedang", "1 sdm margarin", "1 sdt baking powder", "25 gr gula pasir", "300 ml susu cair", "2 butir kuning telur, kocok lepas", "1/2 sdt garam", "2 butir telur putih", "1/2 sdm gula pasir"]
      },
      {
        judul: "Bahan pelengkap:",
        langkah: ["100 gr selai cokelat", "100 gr keju cheddar, parut"]
      }
    ],
    cara: ["Ayak tepung terigu dan baking powder. Tambahkan gula pasir. Aduk rata, tuang susu cair. Aduk rata.", "Masukkan kuning telur, aduk rata. Tambahkan margarin dan garam. Kocok putih telur sampai setengah mengembang.", "Tuang gula pasir halus dan kocok sampai mengembang. Masukkan putih telur dan tepung.", "Tuang adonan ke dalam cetakan. Tutup dan biarkan matang.", "Setelah matang angkat dan olesi dengan selai cokelat dan taburan keju parut."],

    komentar: [
      { nama: "Sinta", isi: "Renyah di luar tapi lembut di dalam, enak dimakan hangat apalagi pake topping coklat", rating: 5 }
    ]
  },
  {
    id: 39,
    nama: "Milkshake Coklat",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 7000,
    gambar: "/milkshake-cklt.png",
    deskripsi: "Milkshake merupakan minuman yang terbuat dari campuran es krim, susu, dan berbagai bahan tambahan lainnya, seperti buah-buahan, cokelat, kacang-kacangan, atau sirup untuk memberikan rasa dan tekstur yang kaya.",
    bahan: [
      {
        judul: "Bahan Utama:",
        langkah: ["3 sdm Tulip Cioccolato (bubuk coklat)", "1/4 gelas air hangat", "1 sdt gula", "es batu", "2½ gelas susu dingin"]
      },
      {
        judul: "Topping:",
        langkah: ["sirup cokelat", "1 scoop eskrim cokelat", "meises warna-warni/ springkle"]
      }
    ],
    cara: ["Dalam satu mangkok, tuang 1/4 gelas air hangat. Tambahkan 3 sdm bubuk coklat dan 1 sdt gula. Aduk hingga larut", "Tuangkan campuran coklat tadi ke dalam blender, tambahkan es batu secukupnya", "Tambahkan 2½ gelas susu dingin ke dalam blender. Blender hingga halus dan siap dijadikan minuman."]
  },
  {
    id: 40,
    nama: "Wedang Bajigur",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 11000,
    gambar: "/Wedang Bajigur.jpg",
    deskripsi: "Wedang Bajigur adalah minuman tradisional khas masyarakat Sunda, Jawa Barat, yang berbahan dasar santan dan gula aren. Bajigur dikenal memiliki rasa manis, gurih, dan berkhasiat menghangatkan tubuh. Minuman ini disajikan hangat dengan aroma khas pandan dan jahe, serta sering dinikmati saat cuaca dingin.",
    bahan: [
      {
        judul: "Bahan-bahan: ",
        langkah: ["600 ml air", "150 gr gula merah", "400 ml santan", "2 sdm kopi bubuk instan", "100 gr jahe merah, bakar sebentar", "1 lembar daun pandan", "1 ruas jari kayu manis", "1 batang sereh (opsional)", "1/2 sdt garam"]
      },
      {
        judul: "Pelengkap:",
        langkah: ["Roti tawar, potog dadu", "Kelapa yang masih muda, kerok/potong dadu", "kolang kaling, cuci bersih lalu belah 2"]
      }
    ],
    cara: ["Rebus air hingga mendidih, lalu masukkan jehe yang sudah dibakar dan dimemarkan, sereh, kayu manis, dan daun pandan.", "Sisir gula merah dan masukkan ke dalam air rebusan. Masak hingga gula merah mencair semua.", "Tambahkan kopi, santan, dan garam. Aduk-aduk agar santan tidak sampai pecah. Koreksi rasa, masak hngga mendidih.", "Tuangkan kuah wedang bajigur ke dalam gelas, tambahkan potongan roti, kelapa, dan kolang kaling.", "Wedang bajigur sudah siap dinikmati."]
  },
  {
    id: 41,
    nama: "Salted Caramel Macchiato",
    jenis: "Minuman",
    rasa: "Gurih",
    harga: 20000,
    gambar: "/salted-caramel.png",
    deskripsi: "Salted Caramel Macchiato adalah minuman kopi espresso berbasis susu yang menggabungkan rasa manis karamel yang pekat, gurih, dan creamy, dengan sedikit sentuhan pahit kopi yang menyegarkan.",
    bahan: ["2 shot espresso (sekitar 40-60 ml) atau kopi instan pekat", "150-180 ml susu full cream / UHT", "15-20 ml sirup salted caramel", "saus caramel", "es batu secukupnya dan whipping cream"],
    cara: ["Olerkan saus caramel di bagian dalam gelas untuk tampilan marbling", "Tuangkan sirup salted caramel ke dalam gelas, masukkan es batu, lalu tuangkan susu", "Tuangkan espresso secara perlahan di atas susu agar tercipta lapisan", "Tambahkan whipping cream di atasnya, lalu berikan saus caramel.", "Aduk sebelum diminum agar rasa manis, gurih, dan kopi menyatu."],

    komentar: [
      { nama: "Nabila", isi: "Manis caramelnya pas dan ada rasa kopi yang bikin balance, enak banget diminum dingin", rating: 5 }
    ]
  },
  {
    id: 42,
    nama: "Kue Cubit",
    jenis: "Snack",
    rasa: "Manis",
    harga: 10000,
    gambar: "/kue-cubit.png",
    deskripsi: "Kue cubit adalah jajanan tradisional khas Jakarta (Betawi) berupa kue mini berdiameter sekitar 4 cm yang bercita rasa manis dan bertekstur lembut. Dinamakan kue cubit karena diambil dengan penjepit saat matang, menyerupai gerakan mencubit.",
    bahan: ["130 gr tepung terigu", "100 gr gula pasir", "3 butir telur", "100 gr mentega, cairkan", "150 ml susu cair putih", "1/2 sdt baking powder", "1/4 sdt baking soda", "1/2 sdt vanili bubuk", "1/4 sdt garam", "Topping: Messes, Keju"],
    cara: ["Kocok telur dan gula hingga mengembang. Kamu bisa memakai mixer atau whisk untuk mengocoknya.", "Kemudian ayak tepung terigu, baking powder, baking soda, vanili dan garam.", "Selanjutnya, masukan bahan yang sudah kamu ayak ke dalam kocokan telur sedikit demi sedikit dan secara bergantian dengan susu. Aduk sampai tidak ada adonan yang bergerindil", "Terakhir, masukan mentega cair lalu aduk dengan spatula. Setelah rata, tutup adonan dengan kain dan biarkan selama 30 menit.", "Panaskan cetakan yang sudah diberi olesan mentega atau margarin. Tuang adonan hingga setengah cetakan. Jangan terlalu penuh karena adonan nantinya akan mengembang. Beri topping meses, keju. Masak dengan api kecil, tutup sebentar sembari intip sesekali", "Setelah matang, angkat dan sajikan. Jika kamu suka setengah matang, kamu bisa mengangkatnya selagi adonan atas masih basah.", "Kue cubit siap disajikan"],

    komentar: [
      { nama: "Rian", isi: "Lembut dan manis, enak banget apalagi dimakan pas masih hangat", rating: 5 },
      { nama: "Dewi", isi: "Rasanya enak sih, tapi menurutku toppingnya bisa lebih banyak lagi", rating: 4 }
    ]
  },
  {
    id: 43,
    nama: "Pempek Kapal Selam",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 12000,
    gambar: "/pempek-kapal.png",
    deskripsi: "Pempek Kapal Selam adalah salah satu varian pempek yang paling populer dan khas dari Palembang. Pempek Kapal Selam juga kerap disebut Pempek Telur Besar karena resep pempek satu ini memiliki ukuran relatif lebih besar dari pempek lainnya dan memiliki isian berupa telur ayam atau terkadang juga menggunakan telur bebek.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["500 gr daging ikan tenggiri", "2 sdt garam, larutkan dengan 3 sdm air dingin", "1/2 sdt penyedap rasa", "2 siung bawang putih, haluskan", "200 ml air dingin", "2 sendok makan tepung terigu", "300 gr tepung sagu", "8 butir telur ayam", "Air secukupnya untuk merebus pempek", "Minyak goreng secukupnya untuk menggoreng pempek"]
      },
      {
        judul: "Bahan untuk Cuko:",
        langkah: ["1.000 ml air", "50 gr asam jawa", "300 gr gula merah, iris halus", "2 sdt cuka dapur", "2 sdm ebi bubuk", "8 siung bawang putih, cincang halus", "20 buah cabai rawit, haluskan", "1 sdt garam"]
      },
      {
        judul: "Bahan Pelengkap:",
        langkah: ["Mentimun segar, iris kecil-kecil/ dadu"]
      }
    ],
    cara: ["Campurkan semua bahan Cuko dan masak hingga Cuko mendidih sambil sesekali diaduk. Saring saus Cuko dengan saringan berlubang kecil untuk memisahkannya dari ampas sebelum disajikan.", "Siapkan panci berisi air secukupnya, berikan 4-5 sendok makan minyak goreng dan didihkan.", "Dalam wadah lain, campurkan larutan garam, penyedap rasa, bawang putih sebagian air dingin dengan daging ikan tenggiri giling, aduk hingga rata. Masukkan tepung terigu dan sagu ke dalam adonan ikan dengan sisa air secara bertahap sebagian demi sebagian sambil terus diaduk hingga semua bahan tercampur rata.", "Bagi adonan menjadi adonan menjadi 8 adonan sama besar. (tips: lumuri tangan dengan tepung sagu dan alas untuk bekerja dengan sedikit tepung sagu agar adonan pempek tidak lengket)", "Ambil salah satu bagian adonan, dan  bentuk menjadi seperti mangkuk. Masukkan satu butir telur ayam ke dalam adonan dan tutup adonan dengan mencubit bagian atasnya dan langsung masukkan Pempek Kapal Selam ke dalam rebusan air yang telah mendidih. Ulangi hingga semua adonan habis.", "Rebus Pempek Kapal Selam hingga matang dan mengapung ke atas permukaan rebusan air, tiriskan pempek. Diamkan selama beberapa saat (1-2 jam) sebelum pempek digoreng untuk memastikan tidak ada sisa air yang menempel pada pempek saat digoreng.", "Panaskan minyak goreng secukupnya dan goreng Pempek Kapal Selam hingga bagian luarnya berubah warna menjadi sedikit kecoklatan dan renyah. Tiriskan, dan pempek siap disajikan bersama saus Cuko serta irisan timun segar dan taburan ebi bubuk sebagai pelengkap."]
  },
  {
    id: 44,
    nama: "Rica-rica Ayam",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 20000,
    gambar: "/rica rica ayam.jpg",
    deskripsi: "Ayam rica-rica adalah salah satu makanan khas Manado, Sulawesi Utara. Kata rica berasal dari bahasa Manado yang berarti (pedas). Hidangan ini biasanya disajikan dengan nasi putih hangat.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["1 ekor ayam kampung, potong dengan ukuran tak terlalu besar", "1 lembar daun jeruk", "1 lembar daun salam", "1 batang serai, memarkan", "2 ruas jari lengkuas", "Garam, gula merah sisir dan kaldu penyedap (secukupnya)", "sedikit minyak untuk menumis"]
      },
      {
        judul: "Bumbu Halus:",
        langkah: ["100 gr cabai rawit", "100 gr cabai keriting", "3 siung bawang putih", "9 siung bawang merah", "1 ruas jari kunyit", "1 ruas jari jahe"]
      }
    ],
    cara: ["Pertama-tama, siapkan semua bahan dan haluskan bumbu halus dengan menguleknya. Bumbu ulek akan memberikan cita rasa dan tekstur yang lebih sedap.", "Kemudian, panaskan sedikit minyak, lalu tumis bumbu hingga harum. Tambahkan daun jeruk, daun salam, batang serai, lengkuas, garam, gula merah sisir dan kaldu penyedap. Masak hingga daun salam layu.", "Lalu, tambahkan sedikit air, masukkan daging ayam ke dalam bumbu. Aduk rata.", "Tutup wajan untuk memasak rapat-rapat dan masak daging ayam bersama bumbu dengan api sedang hingga matang. Sesekali balik daging ayam dan tambahkan air jika daging ayam belum empuk, namun air sudah asat.", "Masak selama beberapa menit hingga daging ayam empuk dan bumbu meresap. Koreksi rasa.", "Angkat dan sajikan rica-rica ayam selagi hangat."]
  },
  {
    id: 45,
    nama: "Ceker Mercon",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 15000,
    gambar: "/ceker-mercon.png",
    deskripsi: "Ceker mercon merupakan makanan khas dari Provinsi Jawa Timur. Sesuai dengan namanya, ceker mercon memiliki cita rasa yang pedas sehingga anak kecil tidak disarankan untuk memakannya. Kuliner ini sangat nikmat apabila disajikan dengan nasi hangat.",
    bahan: ["500 gr ceker ayam, bersihkan dan rebus", "10 buah cabai rawit merah", "5 buah cabai merah keriting", "5 siung bawang merah", "4 siung bawang putih", "2 lembar daun jeruk", "1 batang serai, geprek", "1 ruas lengkuas, geprek", "2 sdm kecap manis", "1 sdt garam", "1/2 sdt gula pasir", "500 ml air", "2 sdm minyak untuk menumis"],
    cara: ["Rebus ceker ayam selama 20–30 menit hingga empuk. Angkat, tiriskan, dan sisihkan.", "Blender cabai rawit, cabai keriting, bawang merah, dan bawang putih hingga halus.", "Panaskan minyak, lalu tumis bumbu halus bersama serai, lengkuas, dan daun jeruk hingga harum.", "Masukkan ceker rebus, aduk hingga tercampur rata dengan bumbu. Kemudian tambahkan kecap manis, garam, dan gula pasir.", "Tuangkan air, masak dengan api kecil hingga kuah menyusut dan bumbu meresap.", "Ceker mercon siap di nikmati."],

    komentar: [
      { nama: "Tika", isi: "Pedasnya gila sih tapi nagih, cocok buat yang suka tantangan", rating: 4 }
    ]
  },
  {
    id: 46,
    nama: "Martabak Mini",
    jenis: "Snack",
    rasa: "Manis",
    harga: 3000,
    gambar: "/martabak mini.jpg",
    deskripsi: "Martabak Mini adalah varian dari terang bulan dan martabak yang berdiameter kurang dari 5cm",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["250 gr tepung terigu", "350 ml air", "100 gr gula pasir", "1/2 sdt baking powder", "1/2 sdt soda kue", "2 butir telur", "3 sdm margarin, lelehkan", "1 sdt vanila esens", "1/2 sdt garam", "1 sdm susu bubuk full cream"]
      },
      {
        judul: "Bahan untuk topping:",
        langkah: ["Susu kental manis secukupnya", "Cokelat meses secukupnya", "Keju cheddar, parut"]
      }
    ],
    cara: ["Campurkan tepung terigu, garam, baking powder, vanila esens, setengah bagian gula pasir, margarin yang telah dilelehkan, dan telur.", "Aduk semua bahan tersebut menggunakan whisk atau mixer sembari dituangkan air sedikit semi sedikit hingga semua adonan tercampur rata. Istirahatkan adonan selama sekitar 1 jam.", "Panaskan cetakan martabak atau teflon kecil, olesi semua permukaan cetakan atau teflon dengan margarin. Tuangkan 1 sendok sayur adonan ke dalam cetakan atau teflon kecil. Ratakan hingga adonan menempel pada pinggiran cetakan atau teflon membentuk lapisan tipis pada pinggiran.", "Setelah adonan setengah matang, taburi gula secukupnya dan tutup masak kembali martabak hingga matang.", "Angkat martabak dari cetakan dan teflon dan lapisi permukaan dengan margarin secukupnya. Untuk topping, taburi martabak dengan susu kental manis, coklat meses, dan keju sesuai selera."]
  },
  {
    id: 47,
    nama: "Cipak Koceak",
    jenis: "Snack",
    rasa: "Pedas",
    harga: 7000,
    gambar: "/cipak.jpg",
    deskripsi: "Cipak Koceak adalah cemilan yang berasal dari Garut.Cemilan ini viral karena makanan dengan limpahan ratusan cabainya.Kata (cipak) merupakan singkatan dari cimol dempak atau gepeng, sementara (koceak) bermana teriak.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["200 gr tepung tapioka", "175 gr tepung terigu", "2 siung bawang putih, haluskan", "1 sdt garam", "1/2 sdt merica putih bubuk", "1/2 sdt kaldu ayam bubuk", "250 ml air panas", "Minyak goreng"]
      },
      {
        judul: "Bumbu:",
        langkah: ["5 sdm minyak goreng", "3 siung bawang putih, haluskan", "3 lembar daun jeruk, iris halus", "2 cm kencur, haluskan", "1 sdt garam", "1 sdm bubuk bbq siap pakai", "3 sdm cabai bubuk", "2 buah jeruk limau, ambil airnya"]
      }
    ],
    cara: ["Aduk rata tepung tapioka, tepung terigu, bawang putih, garam, merica, dan kaldu ayam bubuk. Tuang air panas sedikit demi sedikit, aduk rata sampai Kalis atau sampai bisa dipulung.", "Ambil 1 sdm adonan, bulatkan. Pipihkan. Ulangi hingga bahan habis.", "Panaskan minyak di atas api sedang. Goreng adonan secara bertahap hingga matang. Angkat, tiriskan. Letakkan dalam wadah yang memiliki tutup. Sisihkan.", "Bumbu: Panaskan minyak, tumis bawang putih, daun jeruk, dan kencur hingga harum. Tambahkan garam, bubuk BBQ, dan cabai bubuk, aduk rata. Angkat, tuang ke dalam wadah berisi cipak yang sudah digoreng.", "Tutup rapat wadah, kocok hingga tercampur rata. Tambahkan air jeruk limau, kocok kembali hingga rata. Santap segera."],

    komentar: [
      { nama: "Agus", isi: "Pedasnya nendang banget, cocok buat pecinta pedas sejati", rating: 5 },
      { nama: "Sari", isi: "Enak sih tapi terlalu pedas buat aku, jadi ga kuat makannya banyak", rating: 3 }
    ]
  },
  {
    id: 48,
    nama: "Cireng Kuah Keju",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 12000,
    gambar: "/cireng-kuah.png",
    deskripsi: "Cireng merupakan makanan ringan yang berasal dari Jawa Barat, terbuat dari tepung tapioka. Salah satu inovasi yang cukup menarik adalah pengembangan cireng yang disajikan dengan kuah keju creamy. Kuah keju ini menggunakan bahan dasar keju cheddar atau mozzarella yang dilelehkan dan dicampur dengan krim serta susu, sehingga menghasilkan tekstur kuah yang lembut, kental, dan kaya rasa.",
    bahan: [
      {
        judul: "Bahan Cireng:", 
        langkah: ["250 gr tepung tapioka", "2-3 sdm tepung terigu", "2 siung bawang putih, haluskan", "150-200 ml air panas mendidih, tuang bertahap", "Garam, Kaldu Bubuk, Merica secukupnya", "Minyak Goreng"]
      },
      {
        judul: "Bahan Kuah Keju Creamy:",
        langkah: ["300-400 ml susu UHT full cream", "50-100 gr keju cheddar/oles", "1 sdm susu bubuk full cream", "1 siung bawang putih, cincang halus", "1 sdm Margarin, untuk menumis", "Garam, Kaldu Jamur, Lada secukupnya", "1 sdt maizena + 1 sdm air"]
      },
      {
        judul: "Pelengkap:",
        langkah: ["Chili Oil", "Daun Jeruk (goreng/iris)"]
      }
    ],
    cara: ["Membuat Cireng: Campurkan tepung tapioka, tepung terigu, bawang putih, garam, dan kaldu bubuk. Tuang air panas sedikit demi sedikit sambil diaduk dengan sendok kayu hingga adonan menggumpal dan bisa dipulung (jangan terlalu diuleni agar tidak keras).", "Membentuk & Menggoreng: Ambil sedikit adonan, pipihkan atau bentuk sesuai selera. Goreng dalam minyak panas dengan api sedang hingga matang dan garing di luar. Tiriskan.", "Membuat Kuah: Tumis bawang putih dengan margarin hingga harum. Masukkan susu UHT, keju parut, susu bubuk, kaldu bubuk, dan lada. Masak sambil diaduk hingga keju larut dan mendidih.", "Mengentalkan Kuah: Tambahkan larutan maizena, aduk rata hingga kuah mengental creamy. Koreksi rasa.", "Tata cireng di mangkuk, siram dengan kuah keju panas. Tambahkan chili oil di atasnya."],

    komentar: [
      { nama: "Rara", isi: "Cirengnya kenyal dan kuah kejunya creamy banget, enak dimakan hangat", rating: 5 }
    ]
  },
  {
    id: 49,
    nama: "Es Campur Durian",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 25000,
    gambar: "/es-campur.png",
    deskripsi: "Es campur durian ini adalah minuman asal kota Blitar, Jawa Timur. Minuman segar ini terdiri dari berbagai macan buah yang disajikan dengan susu kental manis dan sirup merah.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["100 gram kelapa muda, dikerok melebar", "100 gram kolang-kaling, potong panjang", "100 gram alpukat, dikerok melebar", "100 gram nanas, dipotong-potong", "1 buah mangga, dipotong dadu", "3 buah nangka, dipotong dadu", "5 biji durian", "500 gram es serut", "75 ml susu ketan manis putih"]
      },
      {
        judul: "Siruo Merah:",
        langkah: ["300 ml air", "200 gr gula pasir", "1 tetes pewarna merah tua"]
      }
    ],
    cara: ["Sirup merah: rebus air, gula pasir, dan pewarna merah tua sambil diaduk sampai mendidih di atas api kecil.", "Tata es batu serut pada mangkuk. Tuangi air, masukkan buah-buahan, tuangi sirup merah dan susu kental manis putih"],

    komentar: [
      { nama: "Budi", isi: "Seger banget dan duriannya berasa, cocok diminum pas cuaca panas", rating: 5 }
    ]
  },
  {
    id: 50,
    nama: "Bakso Mercon",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 15000,
    gambar: "/Bakso Mercon.jpg",
    deskripsi: "Bakso Mercon merupakan jenis bakso pedas dengan level kepedasan tinggi. Kepedasan pada bakso ini berasal dari tumisn bumbu sambal rawit merah yang melimpah. Istilah mercon menggambarkan sensasi pedas yang meledak di mulut.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["300 gr bakso", "2 lembar daun salam", "4 lembar daun salam", "4 lembar daun jeruk", "2 sdm kecap manis", "100 ml air", "1/2 sdt garam", "1 sdt kaldu sapi bubuk", "1 sdt gula", "3 sdm makan minyak goreng untuk menumis"]
      },
      {
        judul: "Bumbu untuk dihaluskan:",
        langkah: ["8 siung bawang merah", "4 siung bawang putih", "2 buah cabai merah besar", "10 buah cabai rawit merah"]
      },
      {
        judul: "Bahan Pelengkap:",
        langkah: ["Irisan daun bawang secukupnya", "Bawang goreng secukupnya"]
      }
    ],
    cara: ["Panaskan minyak secukupnya di wajan dan tumis bumbu halus bersama daun salam dan daun jeruk hingga harum.", "Masukkan bakso dan aduk hingga bakso tercampur rata dengan bumbu.", "Tambahkan air, kecap manis, garam, serta gula pasir. Aduk dan masak dengan api sedang hingga air mengering sebagian dan Bakso Mercon siap untuk disajikan."]
  },
  {
    id: 51,
    nama: "Cumi Goreng Tepung",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 18000,
    gambar: "/Cumi Goreng Tepung.jpg",
    deskripsi: "Cumi goreng tepung adalah salah satu hidangan laut yang populer dan banyak digemari di Indonesia. Dengan tekstur cumi yang lembut dan renyahnya lapisan tepung yang membungkusnya, hidangan ini tidak hanya memanjakan lidah, tetapi juga menggugah selera.",
    bahan: ["500 gr cumi, potong ring", "1 buah jeruk nipis", "200 gr tepung terigu", "2 sdm tepung tapioka", "1 sdm tepung beras", "1 sdt baking powder", "1 sdt garam", "1 sdt kaldu jamur bubuk", "1/2 sdt bawang putih bubuk", "100 ml air es", "Minyak goreng secukupnya"],
    cara: ["Jika Anda menggunakan cumi utuh, bersihkan cumi terlebih dahulu, buang isi perut dan kulit bagian luar cumi, bersihkan lalu potong membentuk cincin.", "Lumuri cumi dengan perasan jeruk nipis, diamkan selama sekitar 15 menit.", "Campurkan tepung terigu, tepung tapioka, tepung beras , baking powder, garam, kaldu jamur bubuk, lada bubuk, serta bawang putih bubuk. Aduk-aduk hingga semua tepung tercampur rata.", "Pisahkan ⅓ dari campuran tepung ke wadah lainnya dan campurkan air dingin. Aduk hingga menjadi adonan basah yang tercampur rata. Biarkan ⅔ campuran tepung di wadah lain sebagai adonan kering.", "Baluri potongan cumi dengan adonan kering lalu celupkan ke adonan basah dan guling-gulingkan kembali ke adonan kering hingga seluruh potongan cumi terbalur tepung.", "Panaskan minyak goreng secukupnya dan goreng cumi yang telah dibaluri tepung hingga berwarna kuning keemasan. Tiriskan dan Cumi Goreng Tepung siap untuk disajikan."],

    komentar: [
      { nama: "Rani", isi: "Cuminya empuk banget dan tepungnya renyah, enak dimakan pas masih hangat", rating: 5 }
    ]
  },
  {
    id: 52,
    nama: "Rainbow Cupcake",
    jenis: "Snack",
    rasa: "Manis",
    harga: 4000,
    gambar: "/cupcake pelangi.png",
    deskripsi: "Rainbow cupcake adalah kue kecil (cupcake) yang menarik perhatian dengan lapisan atau campuran adonan berwarna-warni layaknya pelangi (merah, jingga, kuning, hijau, biru, ungu) di dalamnya. Biasanya, kue ini memiliki rasa vanila yang lembut, dilapisi frosting krim mentega (buttercream) atau krim keju, dan dihiasi taburan meses (sprinkles) warna-warni.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["250 gr mentega, cairkan", "250 gr gula kastor", "4 butir telur ukuransedang", "250 gr tepung terigu serba guna", "1 sdt ekstrak vanili", "2 sdm susu", "pewarna makanan gel, dalam berbagai warna", "taburan warna-warni, untuk dekorasi"]
      },
      {
        judul: "Untuk lapisan krim keju",
        langkah: ["200 gr mentega, cairkan", "400 gr gula halus", "1 sdt ekstrak vanili", "150 gr keju krim rendah lemak"]
      }
    ],
    cara: ["Panaskan oven hingga suhu gas 4, 180ºC, kipas 160ºC. Lapisi loyang muffin 12 lubang dengan kertas cup muffin.", "Dengan menggunakan mikser tangan, kocok mentega dan gula hingga pucat dan mengembang. Masukkan telur, lalu aduk rata tepung, ekstrak vanili, dan susu.", "Bagi adonan kue secara merata ke dalam 6 mangkuk. Tambahkan pewarna makanan gel secukupnya ke setiap mangkuk hingga menghasilkan warna yang pekat.", "Sendokkan campuran tersebut ke dalam wadah kertas, satu warna sekaligus. Sebaiknya tuangkan di sekitar tepi terlebih dahulu, lalu ratakan hingga memenuhi bagian tengah. Jangan terlalu banyak mengaduk, karena warnanya akan luntur.", "Panggang selama 15-20 menit, atau hingga teksturnya ringan dan kenyal saat disentuh. Dinginkan di atas rak kawat.", "Sementara itu, buat lapisan gula dengan mengocok mentega dan gula halus hingga lembut dan mengembang. Masukkan ekstrak vanili dan krim keju sambil terus diaduk. Masukkan ke dalam kantong piping dan buat pola melingkar pada bagian atas setiap kue. Taburkan hiasan meses di atasnya."]
  },
  {
    id: 53,
    nama: "Tiramisu",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 12000,
    gambar: "/Tiramisu.jpg",
    deskripsi: "Tiramisu adalah kue khas Italia dengan taburan bubuk kakao di atasnya. Kue ini merupakan hidangan penutup. Kue ini tidak dibuat dari adonan dan tidak dipanggang. Bahan dasarnya adalah biskuit yang sudah direndam ke dalam larutan kopi dan keju mascarpone. Biskuit disusun dan dilapisi dengan krim kocok sebelum didinginkan di dalam lemari es supaya bentuk kue tidak hancur sewaktu dihidangkan.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["2 bungkus egg drop Monde atau ladyfinger homemade", "6 shot espresso atau 5 sdm kopi tanpa ampas, larutkan dengan air secukupnya"]
      },
      {
        judul: "Bahan Cream:",
        langkah: ["250 ml whip cream cair", "250 gr mascarpone cheese", "1 sdt vanilla essence", "1 sdt gula halus", "Cokelat bubuk untuk taburan"]
      }
    ],
    cara: ["Kocok whip cream cair, mascarpone cheese, vanilla essence, dan gula halus hingga mengembang dan creamy. Masukkan ke dalam piping bag untuk memudahkan proses layering.", "Celupkan egg drop atau ladyfinger ke dalam larutan kopi. Tata rapi di loyang, mulai dari lapisan egg drop, lalu lapisan cream, ulangi hingga terbentuk beberapa lapisan, dan lapisan paling atas adalah cream.", "Taburi seluruh permukaan dengan cokelat bubuk. Dinginkan semalaman di kulkas sebelum disajikan."],

    komentar: [
      { nama: "Dika", isi: "Rasa kopi dan creamnya balance banget, dingin-dingin makin enak dimakan", rating: 5 }
    ]
  },
  {
    id: 54,
    nama: "Klapertart",
    jenis: "Snack",
    rasa: "Manis",
    harga: 12000,
    gambar: "/klapertart.jpeg",
    deskripsi: "Klapertart adalah dessert dengan tekstur yang lembut dan rasa manis yang harum terbuat dari campuran susu tepung, kuning telur, mentega dan daging kelapa muda yang memberikan sensasi segar saat disantap. Aromanya semakin menggoda dengan tambahan vanilla dan sedikit kayu manis.",
    bahan: ["500 ml susu cair", "200 ml air kelapa", "150 gram daging kelapa muda", "3 kuning telur", "3 sdm tepung maizena", "3 sdm tepung terigu", "100 gram gula pasir", "50 gram mentega (lelehkan)", "1 sdt vanila", "½ sdt kayu manis bubuk (opsional)", "50 gram kismis", "50 gram almond slice (untuk topping)"],
    cara: ["500 ml susu cair 200 ml air kelapa 150 gram daging kelapa muda 3 kuning telur 3 sdm tepung maizena 3 sdm tepung terigu 100 gram gula pasir 50 gram mentega (lelehkan) 1 sdt vanila ½ sdt kayu manis bubuk (opsional) 50 gram kismis 50 gram almond slice (untuk topping)", "Masukkan tepung. Tambahkan terigu dan maizena sambil diaduk hingga tidak bergerindil", "Tambahkan kuning telur. Aduk cepat supaya telur tercampur merata", "Masak adonan. Masak di atas api kecil sambil terus diaduk sampai mengental dan licin", "Masukkan daging kelapa dan kismis. Aduk hingga merata dan angkat", "Tuang ke wadah. Masukkan ke loyang kecil atau cup. Taburi almond slice di atasnya", "Panggang 15 menit suhu 170°C.", "Dinginkan. Simpan di kulkas minimal 2 jam agar teksturnya lebih set dan nikmat."]
  },
  {
    id: 55,
    nama: "Banana Milk Boba",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/banana boba.png",
    deskripsi: "Banana Milk Boba adalah minuman kekinian yang memadukan lembutnya susu pisang dengan kenyalnya boba manis. Rasanya segar, creamy, dan manis alami dari pisang.",
    bahan: [
      {
        judul: "Bahan Boba:",
        langkah: ["125 gr tepung tapioka", "100 ml air", "4 sdm gula palem halus", "1 sachet vanili bubuk", "1 sdm bubuk cokelat", "pewarna makanan coklat", "sejumput garam"]
      },
      {
        judul: "Bahan Rebusan Boba:",
        langkah: ["1 buah gula aren ukuran sedang", "100 ml air", "sejumput garam"]
      },
      {
        judul: "Bahan Banana Milk:",
        langkah: ["200 ml susu rasa pisang (UHT atau fresh milk + essence pisang)", "1 buah pisang matang ukuran sedang", "Es batu secukupnya"]
      }
    ],
    cara: [
      {
        judul: "Membuat Boba:",
        langkah: ["Campur tepung tapioka, bubuk cokelat, vanili, gula palem, dan pewarna makanan. Aduk rata", "Panaskan air di panci kecil. Tuang perlahan ke adonan sambil diuleni hingga kalis", "Bentuk menjadi bola-bola kecil", "Rebus dalam air mendidih selama 15 menit atau hingga boba mengapung. Tiriskan"]
      },
      {
        judul: "Membuat Sirup Boba:",
        langkah: ["Rebus gula aren bersama 100 ml air dan sejumput garam hingga larut", "Masukkan boba yang sudah direbus, aduk rata hinga boba menyerap manisnya gula."]
      },
      {
        judul: "Membuat Banana Milk Boba:",
        langkah: ["Blender susu rasa pisang dan pisang manis hingga halus dan creamy", "Siapkan gelas saji, masukkan boba beserta sedikit sirupnya", "Tambahkan es batu sesuai selera. Tuang banana milk di atasnya", "Sajikan segera untuk rasa terbaik"]
      }
    ]
  },
  {
    id: 56,
    nama: "Salmon Teriyaki",
    jenis: "Makanan",
    rasa: "Manis",
    harga: 45000,
    gambar: "/teriyaki salmon.jpg",
    deskripsi: "Salmon Teriyaki adalah hidangan rumahan populer lainnya di Jepang. Teriyaki adalah salah satu metode memasak khas masakan Jepang di mana daging atau ikan dimasak dengan saus manis berbahan dasar kedelai.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["200 gr salmon", "2 bawang putih", "4 iris jahe", "1 batang daun bawang", "1/2 bawang bombay", "1 sdm butter", "2 sdm perasan jeruk lemon", "3 sdm kecap asin", "2 sdm madu", "2 sdm mirin (bumbu dapur khas jepang)", "1 sdm saus tiram", "1½ sdm tepung maizena", "200 ml air"]
      },
      {
        judul: "Bahan pelengkap:",
        langkah: ["100 gr asparagus", "jeruk lemon", "tomat cherry"]
      }
    ],
    cara: ["Bersihkan salmon lalu marinasi dengan jeruk lemon dan garam.", "Panaskan butter, goreng salmon dengan api kecil.", "Balik dan masak sampai setengah matang. Angkat dan taruh di piring.", "Tumis bawang putih dan bawang bombay. Beri sedikit air, mirin, kecap asin, madu, dan saus tiram.", "Masukan asparagus, masak sampai matang. Masukkan salmon dan masak lagi.", "Masukkan tepung maizena yang sudah dilarutkan dengan 2 sdm air putih. Aduk sampai mengental. Matikan api", "Pindahkan salmon ke piring saji bersama tomat, lemon, asparagus. Sajikan segera."],

    komentar: [
      { nama: "Riko", isi: "Salmonnya lembut dan saus teriyakinya manis gurih, enak dimakan sama nasi", rating: 5 }
    ]
  },
  {
    id: 57,
    nama: "Penne Carbonara",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 30000,
    gambar: "/carbonara.jpg",
    deskripsi: "Penne carbonara adalah hidangan pasta Italia yang menggunakan penne berbentuk tabung berongga, dibalut saus gurih creamy berbasis telur, keju parmesan, dan daging asap. Hidangan ini populer karena rasanya yang gurih, dan teksturnya lembut.",
    bahan: [
      {
        judul: "Bahan:",
        langkah: ["2 liter air", "1 sdm minyak goreng", "250 gr pasta berbentuk penne"]
      },
      {
        judul: "Bahan Saus:",
        langkah: ["2 sdm minyak zaitun", "3 sdm bawang bombai, cincang", "4 lembar daging sapi asap/beef bacon"]
      },
      {
        judul: "Adonan krim",
        langkah: ["5 kuning telur campur dengan 200 krim kental", "1/2 sdt garam", "1/2 sdt merica bubuk"]
      },
      {
        judul: "Taburan:",
        langkah: ["Keju cheddar parut", "Peterseli, cincang"]
      }
    ],
    cara: ["Didihkan air bersama minyak goreng, masak pasta selama 10 menit hingga lunak, angkat dan tiriskan", "Membuat saus: panaskan minyak zaitun, tumis bawang bombai, masukkan irisan daging sapi asap atau beef bacon, masak hingga layu, tambahkan adonan krim, aduk rata, masak hingga mengental.", "Masukkan pasta penne, aduk rata, angkat.", "Tata pasta di pinggiran, taburi keju dan peterseli cincang. Sajikan selagi hangat."]
  },
  {
    id: 58,
    nama: "Mango Sticky Rice",
    jenis: "Makanan",
    rasa: "Manis",
    harga: 18000,
    gambar: "/mango sticky rice.png",
    deskripsi: "Mango Sticky Rice adalah hidangan penutup populer dari Thailand yang memadukan ketan pulen, santan kental yang manis, dan potongan mangga harum yang benar-benar pas di lidah.",
    bahan: [
      {
        judul: "Bahan Ketan:",
        langkah: ["250 gr beras ketan putih", "200 ml santan", "2 sdm gula pasir", "sejumput garam", "2 lembar daun pandan",]
      },
      {
        judul: "Bahan Vla Santan:",
        langkah: ["200 ml santan", "sejumput garam", "2 sdm gula pasir", "sejumput vanili bubuk", "1 lembar daun pandan", "1 sdm maizena (larutkan dengan 3 sdm santan)",]
      },
      {
        judul: "Bahan Pelengkap:",
        langkah: ["1-2 buah mangga harum manis", "Wijen putih sangrai secukupnya"]
      }
    ],
    cara: ["Membuat ketan: Cuci beras ketan sampai bersih. Lalu, rendam selama minimal 2 jam atau semalaman agar teksturnya lebih pulen. Setelah itu, masak santan, gula, garam, dan daun pandan hingga mendidih. Biarkan hangat, lalu campurkan ke dalam beras ketan dan masak dengan api kecil hingga santan meresap. Setelah itu, kukus ketan selama 30-60 menit hingga matang sempurna.", "Bikin Vla Santan sambil menunggu ketan matang. Masak semua bahan vla (santan, gula, garam, vanili bubuk, dan daun pandan) hingga hangat. Tuang larutan maizena, aduk cepat hingga mengental. Setelah itu matikan api.", "Letakkan ketan di piring, tambahkan potongan mangga di sampingnya. Siram ketan dengan vla santan yang sudah dibuat, lalu taburi wijen sangrai di atasnya. Mango Sticky Rice buatanmu siap disajikan!"],

    komentar: [
      { nama: "Ayu", isi: "Perpaduan mangga manis dan ketan gurihnya enak banget, seger juga", rating: 5 }
    ]
  },
  {
    id: 59,
    nama: "Sushi",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 3000,
    gambar: "/sushi.jpg",
    deskripsi: "Sushi merupakan makanan populer dari Jepang yang kelezatannya sudah mendunia. Makanan ini terdiri dari nasi berbumbu cuka dan isian, yang digulung dengan rumput laut kering (nori).",
    bahan: [
      {
        judul: "Bahan Utama:",
        langkah: ["350 gr beras", "50 gr beras ketan", "1 sdm cuka", "1 sdm gula pasir", "1 sdt garam", "air secukupnya"]
      },
      {
        judul: "Bahan Isian:",
        langkah: ["1 buah timun", "1 buah wortel", "2 buah jamur", "1 buah telur ayam", "5 lembar daging asap", "2 sdm kecap asin", "5 lembar nori (rumput laut kering)"]
      }
    ],
    cara: ["Siapkan talenan di atas meja dan potong timun dan wortel secara memajang. Pastikan ukurannya seragam ya, RedTraveler. Potong juga jamur dengan ukuran yang kecil. Setelah dipotong, siapkan panci dan masukkan potongan timun, wortel, dan jamur  ke dalam panci. Rebus hingga matang.", "Siapkan wajan dan panaskan dengan minyak. Setelah panas, masukkan kocokan telur dan goreng. Setelah matang, angkat dan tiriskan.", "Masukkan 5 lembar daging asap ke wajan yang sama. Masak sebentar, jangan terlalu lama. Setelah matang, angkat dan tiriskan.", "Potong telur dan daging asap memanjang seukuran dengan sayuran.", "Cuci beras dan beras ketan sampai bersih. Masukkan ke dalam rice cooker diikuti dengan air secukupnya. Masak kurang lebih sekitar 20 menit. Setelah matang, angkat dan diamkan hingga dingin sedikit.", "Tuang cuka, gula pasir dan garam ke dalam mangkuk dan aduk sampai rata. Masukkan bahan campuran tersebut ke dalam nasi. Aduk sampai nasinya terasa menempel dan merata.", "Setelah semua bahan sudah siap, ambil gulungan sushi atau sushi mat. Ambil selembar rumput laut kering, letakkan nasi di atasnya dan ratakan. Ambil isiannya yaitu timun, wortel, jamur, telur dan juga daging asap. Ratakan di atas nasi.", "Gulung nasi dan isiannya dengan rapi menggunakan sushi mat. Tekan-tekan sedikit agar isiannya merata dan memadat. Jika sudah rapi, potong sushi menjadi beberapa bagian dan sajikan dengan kecap asin. Biar rapi, pastikan pisau yang di gunakan tajam."]
  },
  {
    id: 60,
    nama: "Katsu Sando",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 20000,
    gambar: "/katsu-sando.png",
    deskripsi: "Katsu Sando adalah sandwich khas jepang berupa potongan daging ayam yang dibalut tepung panko renyah (chicken katsu), sayuran, dan saus yang diapit dengan lapisan roti tawar. Katsu sando bisa disajikan sebagai sarapan maupun bekal.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["60 gr kol putih, iris tipis", "2 butir trlur puyuh (opsional)", "4 iris roti tawar putih tebal", "20 gr acar mentimun", "30 gr saaus kental", "Acar untuk penyajian"]
      },
      {
        judul: "Bahan Daging:",
        langkah: ["60 gr maizena", "2 butir telur ayam kampung", "150 ge tepung roti", "100-120 gr paha ayam filet", "500 ml minyak sayur", "Garam secukupnya"]
      },
      {
        judul: "Bahan saus nanban:",
        langkah: ["40 ml cuka beras", "55 ml kecap asin", "40 gr gula pasir"]
      },
      {
        judul: "Saus tartar:",
        langkah: ["100 gr mayones", "1 butir telur ayam kampung, rebus dan potong dadu", "40 gr acar mentimun, potong dadu", "10 gr bawang merah, potong dadu", "Daun peterseli, cincang halus", "1 sdt mustard"]
      }
    ],
    cara: ["Rendam kol putih di dalam mangkuk berisi air dingin selama 20 menit. Tiriskan dan sisihkan.", "Buat ayam katsu dengan mencampur maizena dengan garam. Siapkan dua mangkuk lainnya, tempatkan telur dan tepung roti terpisah.", "Balurkan paha ayam ke dalam campuran maizena, celupkan ke telur, lalu balur dengan tepung roti.", "Panaskan minyak sayur hingga 180 derajat celcius. Goreng ayam katsu selama dua hingga tiga menit per sisi. Angkat dan tiriskan.", "Buat saus nanban dengan mencampur semua bahan di dalam panci, masak hingga mengental. Angkat dan biarkan dingin.", "Buat saus tartar dengan mencampur bahan di dalam mangkuk, aduk rata, sisihkan.", "Jika menggunakan telur, rebus selama 2 menit 30 detik, masukkan ke dalam mangkuk berisi air es. Angkat dan kupas cankangnya.", "Mulai buat katsu dando dengan meletakkan irisan roti di atas talenan. Oles saus tartar dan saus namban di atas roti, tambah dengan olesan saus katsu."],

    komentar: [
      { nama: "Vina", isi: "Ayamnya crispy dan rotinya lembut, sausnya juga bikin makin enak", rating: 5 }
    ]
  },
  {
    id: 61,
    nama: "Es Doger",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 5000,
    gambar: "/doger.jpg",
    deskripsi: "Es doger adalah minuman es serut tradisional khas Bandung, Jawa Barat, sering disebut singkatan dari (es dorong gerobak).",
    bahan: [
      {
        judul: "Bahan:",
        langkah: ["100 gr gula pasir", "75 ml santan kental", "150 gr kelapa muda parut", "Seperempat sdt garam", "500 gr es serut"]
      },
      {
        judul: "Pelengkap:",
        langkah: ["50 gr tapai singkong", "50 gr ketan hitam yang sudah diadoni dan dikukus", "50 gr pacar cina matang", "Sirop merah secukupnya", "Susu kental manis secukupnya"]
      }
    ],
    cara: ["Masak gula pasir bersama santan, kelapa muda dan sedikit garam lalu angkat dan diamkan hingga dingin.", "Tuang campuran gula dan es serut lalu aduk rata dan masukkan ke dalam freezer sampai membeku.", "Sesekali aduk supaya es tidak menggumpal", "Siapkan gelas lalu masukkan tapai, ketan itam dan pacar cina ke dalam gelas", "Tambahkan es doger lalu beri sirop dan susu kental manis. Es doger siap disajikan."],

    komentar: [
      { nama: "Asep", isi: "Seger banget diminum siang hari, manisnya pas dan isinya juga lengkap", rating: 5 },
      { nama: "Rina", isi: "Enak sih tapi menurutku agak terlalu manis sedikit", rating: 4 }
    ]
  },
  {
    id: 62,
    nama: "Creamy Mango Latte",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 17000,
    gambar: "/creamy mango latte.png",
    deskripsi: "Creamy mango latte adalah minuman perpaduan jus mangga manis, susu, dan creamer yang segar, yang menciptakan sensasi rasa creamy, manis, dan menyegarkan.",
    bahan: ["1 buah mangga matang (ambil dagingnya)", "150 ml susu cair full cream", "30-50 ml kental manis putih", "2 sdm yogurt plain atau whipping cream cair", "Es batu"],
    cara: ["Blender semua bahan (mangga, susu, kental manis, yogurt) hingga benar-benar halus dan lembut.", "Siapkan gelas saji. Bisa oleskan sedikit selai mangga di dinding gelas untuk estetika.", "Tuang jus mangga ke dalam gelas.Tambahkan es batu, sajikan dingin."],

    komentar: [
      { nama: "Nisa", isi: "Rasa mangganya kerasa banget dan creamy, enak diminum dingin", rating: 5 }
    ]
  },
  {
    id: 63,
    nama: "Udang Tofu Balado",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 25000,
    gambar: "/udang tofu balado.png",
    deskripsi: "Udang Tofu Balado adalah hidangan perpaduan udang segar dan tofu jepang (tahu sutera) yang lembut, dibalut bumbu balado merah pedas-gurih dengan aroma daun jeruk yang khas.",
    bahan: ["200 gr udang ukuran sedang", "1 bungkus egg tofu", "2-3 sdm maizena", "8 siung bawang merah", "3 siung bawang putih", "2 buah kemiri", "8 cabai keriting", "2 cabai merah besar", "2 lembar daun salam", "3 lembar daun jeruk", "1 batang serai, geprek", "Secukupnya garam", "Secukupnya kaldu bubuk", "Secukupnya gula pasir", "Sedikit air", "Minyak untuk memasak"],
    cara: ["Pertama-tama, bersihkan kepala dan kotoran udang. Kemudian bilas di air mengalir, tiriskan dan keringkan memakai tisu dapur.", "Potong bungkus tofu di bagian tengah, baru iris-iris bahan tersebut sama tebal, sisihkan.", "Kemudian bersihkan cabai keriting, cabai merah, kemiri, bawang merah dan bawang putih. Haluskan pakai blender dengan bentuk agak kasar.", "Lanjut, taruh waja di atas kompor, tambahkan sedikit minyak. Masak udang sebentar sampai berubah warna, angkat.", "Di wadah lain campurkan maizena bersama sedikit kaldu bubuk. Pakai untuk membalur egg tofu.", "Goreng tofu sampai satu sisinya keemasan, balik dan masak sisi lainnya. Tiriskan.", "Masukkan bumbu balado ke dalam wajan sisa memasak tadi. Tumis bersama serai, daun salam, sampai daun jeruk.", "Setelah bumbunya matang, tambahkan sedikit air. Bumbui memakai garam, kaldu bubuk, juga gula pasir.", "Terakhir, tambahkan tofu dan udang. Masak sampai semuanya matang, baru matikan api."],

    komentar: [
      { nama: "Dewi", isi: "Pedasnya nampol dan tofu nya lembut, enak banget dimakan sama nasi hangat", rating: 5 },
      { nama: "Andi", isi: "Bumbunya enak tapi agak terlalu pedas buat aku", rating: 4 }
    ]
  },
  {
    id: 64,
    nama: "Lekker Holland",
    jenis: "Snack",
    rasa: "Gurih",
    harga: "35000",
    gambar: "/hollandd.png",
    deskripsi: "Lekker Holland, juga dikenal sebagai (Kue Belanda), adalah kue mentega tradisional Indonesia yang berakar kuat dalam sejarah kolonial Indonesia. Ini adalah kue mentega populer dari Indonesia, yang sering disebut sebagai (Kue Mentega Belanda) atau (Kue Belanda). Nama (Lekker) berasal dari kata dalam bahasa Belanda yang berarti (lezat) dan (Holland) merujuk pada Belanda, menunjukkan pengaruh Belanda pada makanan penutup ini.",
    bahan: ["200 gr butter blend", "130 gr gula halus", "2 butir telur (1 untuk adonan, 1 untuk olesan)", "220 gr tepung terigu protein sedang", "30 gr susu bubuk", "2 cubit garam", "1/2 sdt vanila", "Almond slice, keju, kismis untuk topping (pake salah satu boleh)"],
    cara: [
      {
        judul: "Siapkan adonan dasar:",
        langkah: ["Masukkan butter blend, gula halus, garam, dan vanila ke dalam mangkuk. Kocok menggunakan mixer hingga teksturnya lembut, dan warnanya putih pucat.", "Tambahkan 1 butir telur. Kocok kembali hingga semua bahan tercampur rata."]
      },
      {
        judul: "Campurkan Tepung:",
        langkah: ["Ayak tepung terigu dan susu bubuk. Aduk perlahan menggunakan spatula hingga adonan tercampur rata."]
      },
      {
        judul: "Cetak dan tambahkan topping:",
        langkah: ["Siapkan loyang yang sudah dialasi dengan kertas baking. Tuang adonan ke dalam loyang, lalu ratakan permukaannya menggunakan spatula atau sendok.", "Olesi permukaan adonan dengan kuning telur. Jika suka, tambahkan almond slice di atasnya sebagai topping, atau keju dan kismis."]
      }
    ]
  },
  {
    id: 65,
    nama: "Chicken Steak Saus Enoki",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 27000,
    gambar: "/chicken steak ss.png",
    deskripsi: "Chicken steak saus enoki adalah hidangan fusion kuliner yang memadukan steak dada ayam juicy (pan-seared atau tepung tipis) dengan saus gurih kental berisi jamur enoki. Kuliner ini menawarkan perpaduan tekstur renyah dari enoki, daging lembut, dan saus berbasis bawang putih, saus tiram, atau barbeque yang lezat.",
    bahan: [
      {
        judul: "Bahan:",
        langkah: ["1 dada ayam kanan kiri",  "jeruk nipis", "garam", "merica", "bawang putih bubuk"]
      },
      {
        judul: "Bahan balutan:",
        langkah: ["4 sdm tepung terigu", "2 sdm munjung maizena", "1/2 sdt kaldu ayam/kaldu jamur", "1/2 sdt bawang putih bubuk", "1/4 sdt merica", "2 butir telur"]
      },
      {
        judul: "Bahan saus enoki:",
        langkah: ["2 sdm olive oil", "2 siung bawang putih, geprek cincang", "1 sdm saus tiram", "1 sdm saus sambal", "1 sdm saus tomat", "5 sdm saus bbq", "100 ml air", "1 bungkus enoki potong akarnya (cuci, peras dan pisahkan)", "Sejumput garam", "Sejumput gula putih", "Sejumput merica"]
      },
    ],
    cara: ["Cuci bersih lalu kucuri ayam dengan jeruk nipis. Belah memanjang. Pukul-pukul ayam hingga pipih. Marinasi menggunakan sejumput merica, garam, dan bawang putih bubuk. Masukkan ke lemari es minimal 3 jam.", "Campur dan aduk rata semua bahan balutan, kecuali telur.", "Kocok lepas telur", "Keluarkan ayam lalu masukkan ke adonan terigu. Tekan dan bolak-balik. Celupkan ayam ke kocokan telur. Masukkan lagi ke adonan tepung.", "Goreng ayam dengan api kecil hingga kuning keemasan. Angkat, tiriskan, dan sisihkan.", "Tumis bawang putih, tuang air dan saus. Beri garam, merica dan gula putih. Aduk rata. Masukan jamur enoki, aduk sebentar. Lalu angkat.", "Tuang saus ke atas steak. Sajikan dan lengkapi dengan sayur sesuai selera."]
  },
  {
    id: 66,
    nama: "Rawon",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 15000,
    gambar: "/rawon.jpeg",
    deskripsi: "Rawon adalah makanan khas Indonesia yang berasal dari Ponogoro, Jawa Timur, yang berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek. Daging untuk rawon umumnya adalah daging sapi yang dipotong kecil-kecil, utamanya adalah bagian sandung lamur.",
    bahan: [
      {
        judul: "Bahan Rawon Sapi:",
        langkah: ["700 gr daging sapi (rebus terlebih dahulu, lalu potong-potong)", "2-2,5 liter air", "2 sdm air asam jawa", "1 sdm garam", "1/2 sdt lada bubuk"]
      },
      {
        judul: "Bumbu Halus:",
        langkah: ["6 buah kluwek (ambil isinya, rendam dengan air panas)", "8 butir kemiri, disangrai", "2 ruas jari kunyit, dibakar atau disangrai", "8 siung bawang putih", "15 siung bawang merah"]
      },
      {
        judul: "Bumbu Cemplung:",
        langkah: ["3 lembar daun salam", "3 batang serai, digeprek", "6 lembar daun jeruk"]
      },
      {
        judul: "Pelengkap:",
        langkah: ["Taue pendek secukupnya", "3 butir telur asin", "2 buah jeruk nipis"]
      }
    ],
    cara: ["Panaskan kembali air rebusan daging bersama potongan daging.", "Haluskan semua bahan bumbu halus, lalu tumis dengan sedikit minyak hingga harum.", "Masukkan bumbu cemplung, tumis kembali hingga bumbu matang dan minyak terlihat terpisah.", "Tuang bumbu tumis ke dalam panci berisi daging. Masak hingga bumbu meresap dan kuah mengental.", "Tambahkan air asam jawa, garam, dan lada bubuk. Koreksi rasa sesuai selera.", "Setelah matang, tambahkan irisan daun bawang. Sajikan rawon dengan tauge pendek, telur asin, dan perasan jeruk nipis agar rasanya lebih segar."],

    komentar: [
      { nama: "Budi", isi: "Kuahnya khas banget dan dagingnya empuk, rasanya dalem banget", rating: 5 }
    ]
  },
  {
    id: 67,
    nama: "Dalgona coffee",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 10000,
    gambar: "/dalgona coffe.png",
    deskripsi: "Dalgona coffee adalah minuman kopi yang terdiri dari dua lapisan utama: lapisan bawah berupa susu (bisa susu dingin atau susu hangat) dan lapisan atas berupa busa kopi yang creamy. Busa kopi ini terbuat dari campuran kopi instan, gula, dan air panas yang dikocok hingga mengembang.",
    bahan: ["2 sdm kopi instan", "2 sdm gula pasir", "2 sdm air panas", "Susu (oat, almond, sapi)", "Es batu"],
    cara: ["Dalam mangkuk kecil, campurkan 2 sendok makan kopi instan, 2 sendok makan gula pasir, dan 2 sendok makan air panas. Pastikan rasio ini diikuti dengan tepat untuk mendapatkan tekstur busa yang sempurna.", "Gunakan mixer tangan atau whisk untuk mengocok campuran kopi, gula, dan air panas. Proses ini membutuhkan waktu sekitar 5-10 menit, tergantung pada kecepatan mixer atau kekuatan tangan Anda. Kocok hingga campuran berubah menjadi busa yang kental dan mengkilap. Teksturnya harus mirip dengan whipped cream.", "Sambil menunggu busa kopi siap, siapkan susu di gelas saji. Jika Anda ingin menyajikan dalgona coffee dingin, tambahkan es batu ke dalam gelas sebelum menuangkan susu. Jika Anda lebih suka versi hangat, panaskan susu terlebih dahulu.", "Setelah busa kopi siap, tuangkan secara perlahan ke atas susu di gelas saji. Anda bisa menggunakan sendok untuk membantu menumpuk busa kopi di atas susu. Pastikan busa kopi tidak tercampur dengan susu agar terlihat lapisan yang jelas.", "Untuk membuat dalgona coffee Anda terlihat lebih menarik ala restoran, Anda bisa menambahkan hiasan seperti bubuk kayu manis, cokelat bubuk, atau sirup caramel di atasnya. Sajikan segera dan nikmati selagi segar."]
  },
  {
    id: 68,
    nama: "Strawberry Lemonade",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 19000,
    gambar: "/strawberry lemonade.png",
    deskripsi: "Strawberry Lemonade adalah perpaduan antara jus atau sirup stroberi manis dengan limun (air lemon) yang asam dan segar. Minuman ini sering disajikan dingin, menjadikannya pilihan populer untuk cuaca panas. Profilnya menonjolkan keseimbangan antara aroma buah beri yang manis dan rasa sitrus lemon yang tajam.",
    bahan: ["5 buah strawberry segar (hancurkan)", "Jus lemon segar", "Es batu secukupnya", "Ekstrak lemon murni", "100 ml air bersih", "Ekstrak strawberry murni", "Hiasan (opsional): irisan lemon, irisan strawberry, daun mint segar"],
    cara: ["Buat sirup strawberry. Tuang pure stroberi ke dalam panci besar. Tambahkan air, gula, dan parutan kulit lemon. Panaskan dengan api kecil, aduk hingga gula larut dan campuran mendidih perlahan. Biarkan mendidih perlahan selama sekitar 5 menit, sambil sesekali diaduk.", "Angkat dari api dan biarkan campuran tersebut mendingin sepenuhnya. Saring dua kali ke dalam teko saji menggunakan saringan berlubang halus atau kantong penyaring untuk menghilangkan ampas dan biji. Jangan lewatkan langkah ini. Ini akan menghasilkan limun stroberi yang halus dan jernih yang tidak akan mudah terpisah atau menjadi keruh.", "Aduk rata dengan jus lemon segar dan sisa air dingin. Tambahkan ekstrak lemon dan ekstrak stroberi.", "Dinginkan di lemari es sampai sangat dingin! Aduk sebelum disajikan dan sajikan dengan es. Hiasan jika diinginkan."],

    komentar: [
      { nama: "Mira", isi: "Seger banget, perpaduan manis dan asemnya pas di lidah", rating: 5 }
    ]
  },
  {
    id: 69,
    nama: "Mocktail Blue Ocean",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 27000,
    gambar: "/mocktail blue ocean.png",
    deskripsi: "Mocktail Blue Ocean adalah minuman non-alkohol yang memiliki warna biru cerah yang memikat, terinspirasi dari jernihnya air laut tropis. Rasa Mocktail Blue Ocean lebih ke MANIS-ASAM MENYEGARKAN, bukan gurih.",
    bahan: ["20-30 ml sirup blue curacao", "100-150 ml air soda/sprite", "1-2 sdm sirup jeruk", "1 sdt biji selasih (rendam air)", "Es batu secukupnya", "Irisan jeruk nipis/lemon & daun mint"],
    cara: ["Tuang srup jeruk ke dasar gelas, tambahkan biji selasih", "Isi gelas dengan es batu hingga penuh", "Tuangkan air soda/sprite perlahan", "Tuangkan sirup blue curacao di tahap palin akhir agar membentuk efek gradasi", "Hiasi dengan irisan lemon dan daun mint"]
  },
  {
    id: 70,
    nama: "Iced Taro Latte",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 18000,
    gambar: "/taroo-latte.png",
    deskripsi: "Iced Taro Latte adalah minuman kekinian berwarna ungu pastel yang terbuat dari campuran bubuk taro (talas) berkualitas, susu segar (fresh milk), dan es batu. Minuman ini populer karena teksturnya yang creamy dan aromanya yang harum, memberikan sensasi segar serta memanjakan lidah.",
    bahan: ["240 ml susu rasa taro", "60 ml susu full cream", "2 sdm kopi arabika blend", "60 ml air panas", "es batu secukupnya"],
    cara: ["Siapkan gelas kaca berukuran sedang, lalu masukkan kopi arabika blend dengan air panas. Aduk menggunakan milk frother hingga berbusa.", "Tambahkan es batu secukupnya, lalu tuangkan susu rasa taro perlahan-lahan agar warnanya tidak tercampur dengan kopi.", "Tuangkan susu full cream sedikit ddemi sedikit hingga mencapai batas pinggiran gelas.", "Berikan whipping cream secara melingkar di atas (opsional).", "Iced taro latte siap disajikan selagi dingin bersama camilan dan makanan favoritmu."],

    komentar: [
      { nama: "Salsa", isi: "Rasa taronya lembut dan creamy, enak diminum pas dingin", rating: 5 },
      { nama: "Dina", isi: "Enak sih tapi agak terlalu manis buat aku", rating: 4 }
    ]
  },
  {
    id: 71,
    nama: "Chocolate Affogato",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 14000,
    gambar: "/afogato.png",
    deskripsi: "Chocolate Affogato adalah hidangan penutup (dessert) atau minuman kopi khas Italia yang memadukan satu atau dua skup es krim cokelat yang  disiram dengan espresso panas. Chocolate affogato cenderung lebih ke rasa manis-pahit yang intens.",
    bahan: ["1 shot espresso panas (30-45 ml)", "2 sekop es krim varian coklat", "Daun mint sebagai topping"],
    cara: ["Tuang 2 sekop es krim ke dalam gelas", "Tuang espresso panas tepat di atas es krim segera sebelum disajikan", "Tambahkan daun mint di atas es krim sebagai toping. Nikmati segera saat es krim mulai meleleh bercampur kopi panas."],

    komentar: [
      { nama: "Rafa", isi: "Perpaduan es krim sama kopi panasnya enak banget, unik rasanya", rating: 5 },
      { nama: "Dita", isi: "Enak tapi agak pahit di kopinya buat aku", rating: 4 }
    ]
  },
  {
    id: 72,
    nama: "Chicken Stick",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 16000,
    gambar: "/chicken-stick.png",
    deskripsi: "Chicken Stick adalah potongan memanjang daging ayam fillet yang dibalut tepung roti renyah, menciptakan perpaduan tekstur garing di luar dan lembut di dalam. Rasanya didominasi oleh bumbu gurih rempah yang kuat, sering kali disajikan bersama saus cocolan seperti honey mustard, BBQ, atau sambal untuk menambah dimensi rasa manis atau pedas sesuai selera.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["500 gr fillet dada ayam", "1/2 sdt merica bubuk", "2 sdt air jeruk nipis", "2 sdt cabai bubuk", "1/2 sdt kaldu ayam bubuk", "1/2 sdt garam", "1 sdt bawang putih bubuk", "Minyak goreng", "Saus sambal (untuk cocolan)"]
      },
      {
        judul: "Pelengkap:",
        langkah: ["100 gr tepung teriu serba guna", "200 gr tepung roti kasar", "1 butir telur, kocok lepas"]
      }
    ],
    cara: ["Pertama kamu bisa potong dada ayam secara melintang (horizontal) menjadi 2 bagian yang sama. Setelah itu, potong setiap potongan dada ayam tersebut memanjang (vertikal) dengan lebar masing-masing 1 cm.", "Lumuri potongan dada ayam yang sudah dipotong-potong dengan campuran bahan-bahan, seperti air jeruk nipis, bawang putih bubuk, cabai bubuk, kaldu ayam bubuk, garam, merica. Aduk semua bahan tersebut dengan potongan dada ayam hingga tercampur rata. Setelah itu, simpan ayam yang sudah dilumuri bumbu di dalam kulkas selama 10 menit.", "Lumuri potongan dada ayam dengan tepung terigu, pastikan seluruh permukaan ayam tertutup. Tepukkan pelan-pelan ayam untuk meniriskan sisa tepung terigu yang tidak menempel.", "Celupkan potongan dada ayam yang sudah dilumuri tepung terigu ke dalam telur, pastikan seluruh permukaan ayam terkena telur. Setelah itu, lumuri kembali ayam yang sudah terkena telur dengan tepung roti kasar. Pastikan seluruh permukaan ayam terbalut dengan tepung roti.", "Panaskan minyak goreng dalam jumlah yang banyak di dalam wajan atau penggorengan.Setelah minyak panas, masukkan potongan-potongan dada ayam yang sudah dilumuri tadi.", "Goreng ayam tersebut dalam minyak panas hingga berwarna kuning kecokelatan. Angkat ayam yang sudah matang dan tiriskan agar sisa minyak menetes.", "Tata rapi di piring dengan saus untuk cocolan. Chicken Stick siap disajikan."]
  },
  {
    id: 73,
    nama: "Matcha Espresso Fusion",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 20000,
    gambar: "/matcha-espresso.png",
    deskripsi: "Matcha Espresso Fusion adalah minuman perpaduan antara teh hijau bubuk Jepang (matcha) yang lembut, susu, dan shot espresso yang kuat. Minuman ini sering disajikan dalam lapisan (layered) yang menarik secara visual, menggabungkan rasa earthy (khas teh) dan pahit kopi.",
    bahan: ["1 sdt bubuk matcha", "1/3 cangkir air hangat", "1 cangkir es, dibagi menjadi 3 bagian", "1/3 cangkir susu", "1-2 shot espresso", "Sirup vanili, opsional"],
    cara: ["Tambahkan bubuk matcha ke dalam 1/3 cangkir air hangat. Aduk rata dengan sendok atau pengaduk susu. Tuang campuran matcha ke dasar cangkir. Tambahkan 1/3 cangkir es.", "Tuang susu perlahan di atas es. Tambahkan 1/3 cangkir es.", "Tuangkan espresso perlahan di atas es. dan tambahkan sirup vanili atau pemanis lain pilihan Anda."]
  },
  {
    id: 74,
    nama: "Mashed Potato with Grilled Chicken",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 35000,
    gambar: "/mashed potato.png",
    deskripsi: "Mashed potato with grilled chicken adalah hidangan Barat (Western) yang terdiri dari kentang tumbuk halus (mashed potato) yang lembut, gurih, dan creamy, disandingkan dengan dada atau paha ayam panggang (grilled chicken) yang bumbunya meresap.",
    bahan: [
      {
        judul: "Bahan Ayam:",
        langkah: ["400 g dada ayam potong tipis", "4 sdm mayones", "2 sdm keju parmesan, parut", "6 sdm remah roti panko"]
      },
      {
        judul: "Kentang Tumbuh Cepat:",
        langkah: ["2 buah kentang ukuran sedang, tidak dikupas", "1/4 hingga 1/2 cangkir susu (susu murni atau rendah lemak)", "1 sdm mentega", "Garam dan merica, secukupnya"]
      },
      {
        judul: "Salad:",
        langkah: ["1 buah mentimun besar", "1 wadah kecil tomat ceri", "1 sdm jus lemon", "2 sdm minyak zaitun", "Garam dan merica, secukupnya"]
      }
    ],
    cara: ["Nyalakan panggangan pada suhu tinggi dan letakkan rak sekitar 20cm dari sumber panas", "Masukkan kentang ke dalam microwave dan masak dengan daya tinggi selama 3 menit. Kemudian balik kentang dan masak lagi dengan daya tinggi selama 2 menit (atau hingga matang). Remas kentang untuk memeriksa apakah sudah matang.", "Campurkan mayones dan keju parmesan dalam mangkuk kecil", "Letakkan ayam di wajan besar tahan oven. Dengan menggunakan bagian belakang sendok, oleskan campuran mayones ke setiap dada ayam.", "Taburkan remah roti panko di atas setiap potong ayam. Gunakan jari Anda untuk menepuk-nepuk panko agar menempel pada ayam.", "Letakkan ayam di bawah panggangan/broiler selama 8 menit, atau hingga matang dan lapisan tepungnya berwarna keemasan. Periksa sekali lagi sekitar 6 menit dan putar wajan jika perlu agar lapisan tepung matang merata. Setelah matang, sisihkan dan diamkan beberapa menit sebelum disajikan.", "Sambil menunggu ayam matang, keluarkan kentang dari microwave (gunakan kain lap). Potong setiap kentang menjadi dua, lalu gunakan sendok makan untuk mengambil daging kentang ke dalam mangkuk. Tambahkan susu, mentega, garam, dan merica. Gunakan alat penghancur kentang untuk menghancurkannya. Tambahkan susu lagi hingga mencapai kekentalan yang diinginkan.", "Salad: Gunakan pengupas kentang untuk membuat irisan tipis dari mentimun. Potong tomat ceri menjadi dua. Tumpuk mentimun dan tomat ceri di atas piring, lalu siram dengan jus lemon, minyak zaitun, dan taburi dengan garam dan merica.", "Cara Penyajian: Letakkan kentang tumbuk di setiap piring, lalu letakkan ayam di atasnya. Siram dengan sedikit minyak zaitun tambahan dan hiasi dengan peterseli segar cincang halus, jika diinginkan. Sajikan salad di sampingnya."],

    komentar: [
      { nama: "Ilham", isi: "Ayamnya juicy dan mashed potato nya lembut banget", rating: 5 }
    ]
  },
  {
    id: 75,
    nama: "Ocean Latte",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 23000,
    gambar: "/ocean-latte.png",
    deskripsi: "Ocean Latte adalah minuman kopi kekinian yang populer karena tampilan visualnya yang unik dan estetis, seringkali berlayer biru-putih-coklat. Ocean Latte sebenarnya menawarkan perpaduan manis dan gurih yang seimbang, namun sensasi manis biasanya lebih dominan di awal karena penggunaan sirup.",
    bahan: ["25 ml sirup blue curacao", "1 shot espresso", "100 ml susu cair full cream", "Es batu secukupnya"],
    cara: ["Siapkan gelas saji, tuang sirup blue curacao di bagian dasar", "Isi gelas dengan es batu hingga penuh", "Tuang susu cair perlahan", "Terakhir, tuang espresso secara perlahan agar membentuk layer", "Aduk rata sebelum diminum."],

    komentar: [
      { nama: "Tari", isi: "Warnanya cantik banget, rasanya juga creamy dan enak", rating: 4 },
      { nama: "Reno", isi: "Lumayan enak tapi agak kemanisan buat aku", rating: 3 }
    ]
  },
  {
    id: 76,
    nama: "Potato Cheese Ball",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 14000,
    gambar: "/potato-cheese-ball.png",
    deskripsi: "Potato Cheese Ball  (bola-bola kentang keju) adalah camilan atau snack yang terbuat dari campuran kentang tumbuk (mashed potato) yang dibentuk bulat, diisi dengan keju (biasanya mozzarella), dibalut tepung roti (breadcrumb), lalu digoreng hingga renyah. Dengan tekstur bagian luar yang renah dan garing, sementara bagian dalamnya lembut, lumer dan ,ulur saat digigit.",
    bahan: [
      {
        judul: "Bahan Adonan:",
        langkah: ["500 gr kentang", "50 gr keju serbaguna", "1/2 sdt garam", "1/2 sdt merica bubuk", "180 gr kornet", "20 gr tepung terigu serbaguna"]
      },
      {
        judul: "Bahan isian dan pelapis:",
        langkah: ["Keju mozarella di potong dadu", "35 gr tepung terigu serbaguna", "Tepung panir atau tepung roti secukupnya"]
      }
    ],
    cara: ["Haluskan kentang yang sudah digoreng selagi panas", "Setelah dirasa halus, tambahkan tepung terigu, keju parut, kornet, garam, dan merica bubuk.", "lalu tambahkan keju serbaguna yang sudah di potong, aduk hingga tercampur rata. Aduk merata menggunakan spatula, lalu uleni dengan tangan bersih sampai kalis. Adonan siap digunakan, sisihkan.", "Ambil adonan secukupnya. Bentuk bulat terlebih dahulu, kemudian pipihkan dan beri isian Keju mozarella yang telah dipotong dadu.", "Selanjutnya, balurkan ke dalam larutan tepung terigu, lalu balurkan juga ke tepung roti. Taruh ke dalam wadah. Ulangi langkah ini sampai adonan habis terbentuk. Setelah itu, diamkan dalam kulkas selama 30 menit agar bahan pelapis merekat sempurna dan adonan padat.", "Setelah didiamkan dalam kulkas selama 30 menit, lanjut  ke proses penggorengan. Siapkan wajan di atas kompor, tuangkan minyak goreng cukup banyak. Kemudian, nyalakan kompor menggunakan api sedang dan tunggu sampai minyak panas. Masukkan bola-bola kentang, goreng sampai matang kuning kecokelatan. Angkat dan tiriskan. Lakukan sampai adonan habis.", "Potato cheese ball siap disajikan dan dinikmati dengan cocolan saus sambal."]
  },
  {
    id: 77,
    nama: "Salmon Mentai Rice",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 38000,
    gambar: "/salmon-mentai.png",
    deskripsi: "Salmon mentai rice adalah hidangan nasi (seringkali nasi rumput laut/nori) yang diberi topping salmon dan disiram saus mentai creamy (campuran mayones, tobiko/telur ikan, dan saus sambal), lalu dipanggang (aburi) hingga kecokelatan. Kuliner hasil perpaduan Jepang dan Barat ini populer karena rasanya yang gurih, pedas, dan aroma asap yang khas.",
    bahan: [
      {
        judul: "Bahan Nasi:",
        langkah: ["250 gr nasi putih", "1 sdm bubuk nori", "1 sdt minyak wijen", "2 sdm kecap asin"]
      },
      {
        judul: "Bahan Salmon:",
        langkah: ["200 gr ikan salmon, iris tipis", "2 sdm kecap asin"]
      },
      {
        judul: "Bahan Saus Mentai:",
        langkah: ["100 gr mayonnaise", "1 sdm tobiko", "1 sdm saus tomat", "2 sdm saus sambal"]
      },
      {
        judul: "Topping:",
        langkah: ["3 lembar nori ukuran kecil, potong panjang", "Wijen putih secukupnya"]
      }
    ],
    cara: ["Campur nasi dengan bubuk nori, minyak wijen dan kecap asin. Aduk merata, sisihkan.", "Lumuri salmon dengan kecap asin kemudian panggang sebentar di teflon sampai berubah warna. Angkat.", "Saus mentai: Campur semua bahan saus mentai, mayonaise, tobiko, saus tomat, saus sambal, aduk rata.", "Tata nasi dalam aluminium foil atau pinggan tahan panas, beri beberapa irisan ikan salmon, kemudian tuang saus mentai sampai menutupi seluruh permukaan salmon.", "Panggang dengan blow torch atau oven hingga warnanya kecoklatan."]
  },
  {
    id: 78,
    nama: "Chicken Salted Egg",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 23000,
    gambar: "/chicken-salted.png",
    deskripsi: "Chicken salted egg atau ayam saus telur asin adalah  hidangan modern yang telah menjadi fenomena kuliner di berbagai kalangan. Menu ini bukan sekadar ayam goreng biasa, melainkan sebuah simfoni tekstur dan rasa yang memanjakan lidah dengan cita rasanya yang gurih, creamy, dan sedikit asin dengan aroma khas kuning telur asin membuatnya begitu menggoda selera.",
    bahan: [
      {
        judul: "Bahan Utama:",
        langkah: ["300 gr dada ayam filet, potong dadu", "1 butir telur, kocok lepas", "5 sdm tepung maizena", "3 sdm tepung terigu", "Garam secukupnya", "Merica secukupnya", "Minyak goreng secukupnya"]
      },
      {
        judul: "Bahan Saus Telur Asin:",
        langkah: ["3 butir kuning telur asin matang, dihancurkan", "3 siung bawang putih, cincang halus", "3 sdm margarin atau mentega", "10 lembar daun kari (jika ada)", "3 buah cabai rawit (opsional, iris tipis)", "100 ml susu cair full cream", "1/2 sdt gula", "Garam secukupnya"]
      }
    ],
    cara: ["Lumuri potongan ayam dengan garam dan merica. Balurkan ayam ke dalam campuran tepung terigu dan maizena.", "Celupkan daging ayam ke telur, lalu goreng ayam dalam minyak panas hingga kuning keemasan dan matang. Tiriskan.", "Panaskan margarin, tumis bawang putih hingga harum. Tambahkan daun kari dan cabai rawit, tumis sebentar.", "Masukkan kuning telur asin yang dihancurkan, aduk-aduk hingga mengeluarkan aroma harum dan meleleh seperti pasta.", "Tuang susu cair sedikit demi sedikit sambil terus diaduk hingga saus mengental. Tambahkan gula dan garam, koreksi rasa. Masukkan ayam goreng ke dalam saus, aduk rata hingga semua ayam terbalut saus.", "Sajikan chicken salted egg selagi hangat dengan nasi."],

    komentar: [
      { nama: "Bagas", isi: "Saus telur asinnya creamy banget dan gurih", rating: 5 }
    ]
  },
  {
    id: 79,
    nama: "Korean Garlic Bread",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 7000,
    gambar: "/korean-garlic.png",
    deskripsi: "Korean Garlic Bread yaitu roti yang terdapat topping krim keju serta siraman saus bawang, roti satu ini berbeda dengan garlic bread ala Eropa lho. Korean garlic bread memiliki tekstur yang renyah diluar dan lembut dibagian dalam, serta bentuknya yang bulat dan sudah dibelah menjadi 6 bagian.",
    bahan: [
      {
        judul: "Bahan untuk Adonan:",
        langkah: ["300 ml susu cair", "12 gr ragi instan", "5 sdm gula pasir", "3 butir telur", "800 gr tepung terigu", "1 sdm garam", "50 gr margarin"]
      },
      {
        judul: "Bahan untuk Cream Cheese:",
        langkah: ["500 gr cream cheese", "75 gr gula halus", "100 gr whipping cream"]
      },
      {
        judul: "Bahan untuk Saus Garlic Butter:",
        langkah: ["100 gr bawang putih cincang", "350 gr margarine", "3 butir telur", "2 sdm parsley kering", "5 sdm madu", "80 gr susu kental manis vanila"]
      }
    ],
    cara: [
      {
        judul: "Membuat Roti",
        langkah: ["Siapkan wadah untuk menampung bahan-bahan. Masukan susu cair, ragi, gula pasir lalu aduk hingga merata. Tambahkan telur dan aduk merata kembali, selanjutnya masukan tepung terigu dan garam, aduk hingga tercampur rata.", "Setelah merata keluarkan adonan dari wadah ke talenan, tambahan margarin kemudian uleni kurang lebih selama 15 menit atau sampai adonan elastis. Setelah diulenin masukan adonan kedalam wadah bersih, tutup menggunakan kain dan didiamkan selama 1 jam.", "Jika sudah 1 jam atau adonan mengembang. Kempeskan adonan dan bagi adonan sekitar 12 bulatan atau bisa sesuai selera kamu untuk ukuran roti. Kemudian didiamkan sekitar 30 menit. Setelah itu, panggang adonan dengan suhu 180 derajat celsius selama kurang lebih 25 menit."]
      },
      {
        judul: "Membuat Cream Cheese",
        langkah: ["Siapkan wadah, masukan cream cheese, gula halus. Aduk merata dan tambahkan whipping cream atau cooking cream, aduk merata kembali. Setelah itu masukan cream cheese kedalam plastik segitiga."]
      },
      {
        judul: "Membuat Saus Garlic",
        langkah: ["Siapkan wadah dan masukan margarine, bawang putih lalu aduk hingga tercampur rata. Selanjutnya masukan telur dan aduk kembali, setelah tercampur masukan madu, susu kental manis dan parsley kering. Aduk hingga tercampur rata."]
      },
      {
        judul: "Membuat Korean Garlic Bread",
        langkah: ["Belah roti yang sudah dipanggang, belah menjadi 6 bagian. Masukan cream cheese yang sudah dimasukan kedalam plastik segitiga. Masukan cream cheesenya ke seluruh sisi, dan celupkan ke saus garlic. etelah itu, panggang dengan suhu 160 derajat celsius selama 10 menit.", "Korean Garlic Bread siap disajikan."]
      }
    ]
  },
  {
    id: 80,
    nama: "Dessert Box Keju",
    jenis: "Snack",
    rasa: "Manis",
    harga: 15000,
    gambar: "/dessert box keju.jpg",
    deskripsi: "Dessert box keju adalah hidangan penutup modern yang terdiri dari lapisan kue (sponge cake), krim keju (cream cheese), saus keju, atau biskuit yang disusun dalam wadah kotak transparan. Dessert ini memiliki tekstur lembut, creamy, dan lumer di mulut.",
    bahan: ["500 ml susu cair putih", "100 gr keju cheddar parut", "120 ml santan cair instan", "10 lembar roti tawar", "40 gr kental manis putih", "4 sdm gula pasir", "2 sdm tepung maizena", "30 ml air", "1/4 sdt garam"],
    cara: ["Serut keju cheddar, sisihkan. Potong bagian pinggiran roti tawar yang cokelat dan keras. Potong-potong sesuaikan dengan besarnya box yang akan dijadikan wadah.", "Campurkan susu cair, kental manis, gula pasir, dan garam di dalam panci. Panaskan hingga hampir panas.", "Larutkan tepung maizena dengan air. Tuang ke dalam susu, aduk terus hingga matang mengental menjadi fla dan agar tidak menggumpal di dasar. Masukkan keju jika sudah hampir mengental. Angkat dan biarkan dingin.", "Tata roti tawar di box, tuang fla secukupnya, tumpuk lagi dengan roti tawar. Ulangi bergantian hingga penuh. Oles fla tipis di atasnya dan tabur keju cheddar parut secukupnya. Tutup dessert box.", "Simpan di dalam kulkas dan nikmati dalam kondisi dingin."],

    komentar: [
      { nama: "Maya", isi: "Lembut dan creamy, kejunya berasa banget", rating: 5 }
    ]
  },
  {
    id: 81,
    nama: "Avocado Coffee",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 16000,
    gambar: "/avocado-coffe.png",
    deskripsi: "Avocado Coffee adalah minuman kekinian yang menggabungkan cita rasa kopi (biasanya espresso) dengan alpukat asli (puree/pasta) dan susu. Seringkali disajikan dengan tambahan es krim atau sirup cokelat.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["1 Alpukat ukuran besar", "1 sdm gula pasir", "2 sdm susu kental manis", "2 scoop es krim vanila", "150 ml air matang"]
      },
      {
        judul: "Bahan Kopi:",
        langkah: ["1 sdt kopi hitam", "100 ml air panas", "1 sdm gula pasir"]
      }
    ],
    cara: ["Keruk daging alpukat, campur dengan gula pasir, kental manis dan air, kemudian blender hingga halus.", "Seduh kopi bubuk instant dengan 100 ml air panas. Saring untuk membuang ampasnya.", "Penyajian: tuang jus alpukat dalam gelas saji, tuang seduhan kopi dalam gelas. Kemudian tambahkan es krim vanilla di atasnya.", "Coffee Alpukat siap disajikan."]
  },
  {
    id: 82,
    nama: "Banana Milkshake",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 16000,
    gambar: "/banana milkshake.jpg",
    deskripsi: "Banana milkshake adalah minuman berbasis susu yang diblender dengan pisang matang, es krim (seringkali vanilla), dan es batu, menghasilkan tekstur yang kental, lembut, dan creamy. Minuman ini populer karena kesegarannya dan sering disajikan dingin, menjadikannya pilihan sempurna untuk minuman penyegar di cuaca panas.",
    bahan: ["1 buah pisang besar yang matang", "1 cangkir susu", "3 sendok es krim vanila", "1/4 sdt ekstrak vanili (opsional)", "Krim kocok dan irisan pisang segar (opsional, untuk hiasan)", "Es batu, secukupnya"],
    cara: ["Kupas pisang dan potong-potong. Masukkan potongan pisang, susu, es krim vanila, Es batu, dan ekstrak vanila ke dalam blender.", "Blender dengan kecepatan tinggi hingga campuran menjadi halus dan lembut.", "Tuang milkshake ke dalam dua gelas dan sajikan segera, beri topping krim kocok dan beberapa irisan pisang."],

    komentar: [
      { nama: "Sari", isi: "Manisnya pas dan creamy banget, cocok diminum dingin", rating: 5 }
    ]
  },
  {
    id: 83,
    nama: "Peach Agua Fresca",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 18000,
    gambar: "/peach agua.png",
    deskripsi: "Peach Agua Fresca adalah minuman ringan tradisional khas Meksiko yang menyegarkan, dibuat dengan cara memblender buah persik (peach) matang dengan air, sedikit gula atau pemanis, dan air perasan jeruk nipis/lemon. Secara harfiah, agua fresca berarti (air segar)",
    bahan: ["7 buah peach matang (kupas kulitnya dan potong-potong)", "4-5 gelas air dingin", "3 sdm air perasan jeruk nipis atau lemon", "Pemanis sesuai selera (1/4 cup gula pasir/ madu/ agave nectar)", "Es batu secukupnya"],
    cara: ["Masukkan potongan buah peach ke dalam blender bersama dengan 2 gelas air dan pemanis pilihan Anda. Blender hingga benar-benar halus.", "Saring jus peach menggunakan saringan kawat halus ke dalam teko besar untuk memisahkan ampasnya agar teksturnya ringan.", "Tambahkan sisa air dingin dan air perasan jeruk nipis ke dalam teko. Aduk rata.", "Cicipi tingkat kemanisannya. Jika kurang manis atau kurang asam, tambahkan gula atau jeruk nipis sesuai selera Anda.", "Sajikan di gelas yang sudah diisi penuh dengan es batu. Anda bisa menambahkan irisan peach segar atau daun mint di atasnya sebagai hiasan."],

    komentar: [
      { nama: "Nina", isi: "Seger banget, ringan dan ga bikin eneg", rating: 5 },
      { nama: "Arman", isi: "Enak tapi menurutku agak kurang manis", rating: 4 }
    ]
  },
  {
    id: 84,
    nama: "Lychee Tea",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 14000,
    gambar: "/lychee tea.png",
    deskripsi: "Lychee Tea adalah minuman yang terbuat dari teh yang di campur dengan ekstrak buah leci. Lychee Tea memiliki cita rasa unik dan menyegarkan, sering diseduh sebagai es teh untuk membuat minuman musim panas dan sangat cocok untuk menyemangati hari-hari Anda, namun bisa juga disajikan secara hangat. Lychee Tea mengandung kafein karena terbuat dari teh hitam, akan tetapi kemanisan buah akan mengurangi banyak astringency pada minuman ini.",
    bahan: ["25 gr Lychee Tea powder", "150 ml Air", "15 ml Simple syrup", "Es secukupnya", "Buah Lychee untuk toping"],
    cara: ["Larutkan 25 gr Lycee Tea powder dengan 150 ml Air panas.", "Tuang 15 ml simple syrup kedalam gelas saji", "Masukkan larutan lychee powder", "Tambahkan es batu secukupnya. Tambahkan Buah Lychee yang sudah dibuang bijinya", "Ice lychee tea siap disajikan."]
  },
  {
    id: 85,
    nama: "Rice Bowl Cumi Saus Teriyaki",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 12000,
    gambar: "/rb-cumi.jpg",
    deskripsi: "Rice Bowl Cumi Saus Teriyaki adalah hidangan praktis berupa nasi putih dalam mangkuk (rice bowl) yang disajikan dengan tumisan cumi-cumi empuk bercita rasa manis gurih khas saus teriyaki, beraroma bawang bombay dan jahe. Biasanya dilengkapi wijen sangrai, daun bawang, atau sayuran rebus, menjadikannya menu kekinian yang praktis, bergizi, dan cocok untuk ide jualan.",
    bahan: ["1 sdt biji wijen, untuk bahan pelengkap", "1 sdt minyak wijen", "60 ml saus teriyaki", "400 gram nasi putih, untuk bahan pelengkap", "3 sdm minyak kedelai"],
    cara: ["Rendam cumi-cumi dalam saus teriyaki selama 20 menit.", "Panaskan minyak kedelai, masukkan cumi-cumi beserta saus teriyakinya. Tumis sebentar. Masukkan bawang bombai, merica bubuk, dan garam. Aduk rata sampai bawang bombai layu dan cumi matang. Angkat.", "Tuang minyak wijen, aduk rata.", "Tata nasi putih dalam mangkuk, tambahkan cumi-cumi teriyaki di atasnya, taburi dengan wijen", "Rice Bowl Cumi Saus Teriyaki yang nikmat siap disantap!"]
  },
  {
    id: 86,
    nama: "Ayam Bakar Taliwang",
    jenis: "Makanan",
    rasa: "Pedas",
    harga: 60000,
    gambar: "/ayam-bakar-taliwang.jpg",
    deskripsi: "Ayam Bakar Taliwang adalah kuliner khas dari Lombok, Nusa Tenggara Barat (NTB), yang menggunakan ayam kampung muda (biasanya berumur 30-45 hari). Ayam ini dibakar dan dibumbui dengan rempah-rempah kuat, menghasilkan daging yang lembut, gurih, dan bumbu yang meresap sempurna. Ayam Bakar Taliwang lebih dominan ke rasa Pedas dan Gurih.",
    bahan: [
      {
        judul: "Bahan-bahan:",
        langkah: ["1 ekor ayam kampung, belah menjadi 2 namun tidak sampai putus", "2 buah jeruk nipis", "1 sdt garam", "20 ml santan kental", "500 ml Air", "2 sdm gula merah, sisir halus", "5 sdm minyak goreng untuk menumis"]
      },
      {
        judul: "Bumbu untuk dihaluskan:",
        langkah: ["10 butir Bawang Merah, bakar terlebih dahulu", "5 siung Bawang Putih, bakar terlebih dahulu", "5 buah Rawit Merah, bakar terlebih dahulu (jumlah bisa ditambahkan untuk menyesuaikan tingkat rasa pedas yang diinginkan)", "8 buah Cabai Merah Keriting, bakar terlebih dahulu", "5 butir Kemiri, sangrai terlebih dahulu", "1 ruas Kencur, bakar terlebih dahulu", "1 sendok teh Terasi, bakar terlebih dahulu", "3 sendok teh Garam"]
      }
    ],
    cara: ["Lumuri ayam yang telah dibersihkan dengan air perasan jeruk limau dan sedikit garam. Pastikan semua bagian ayam terlumuri, kemudian diamkan selama 15-30 menit.", "Panaskan minyak di wajan secukupnya dan tumis bumbu halus hingga harum.", "Tambahkan gula merah dan air, masak hingga air mendidih.", "Masukkan ayam bersama santan kental, masak dengan api kecil sambil sesekali diaduk hingga bumbu meresap dan mengering, kemudian tiriskan ayam.", "Bakar ayam di pemanggang sambil sesekali diolesi dengan sisa bumbu hingga ayam berubah warna sedikit kecoklatan dan Ayam Taliwang siap untuk disajikan!"],

    komentar: [
      { nama: "Ilham", isi: "Bumbunya meresap banget dan pedasnya mantap", rating: 5 }
    ]
  },
  {
    id: 87,
    nama: "Tteokbokki Spicy",
    jenis: "Snack",
    rasa: "Pedas",
    harga: 13000,
    gambar: "/Tteokbokki-spicy.png",
    deskripsi: "adalah hidangan Korea berupa tepung beras yang dimasak dalam bumbu gochujang yang pedas dan manis. Tepung beras yang dipakai berbentuk bulat batang yang memanjang. Makanan ini juga termasuk dalam makanan internasional. Rempah-rempah yang digunakan di masakan ini bisa dibilang akan sedikit familiar di lidah orang-orang.",
    bahan: [
      {
        judul: "Bahan membuat tteok:",
        langkah: ["100 gr tepung beras", "2 batang daun bawang", "75 ml air panas", "2 siung bawang putih yang sudah dihaluskan", "150 ml air", "Minyak wijen secukupnya", "1/2 sdt wijen sangrai"]
      },
      {
        judul: "Bahan membuat gochujang:",
        langkah: ["1/2 sdm tepung terigu", "2 sdm bubuk paprika", "1 sdm bubuk kari", "1 sdm kecap manis", "1/2 sdt garam", "1/2 sdt kaldu ayam bubuk", "75 ml air"]
      }
    ],
    cara: ["Masukkan tepung beras, garam, dan air panas ke dalam sebuah wadah. Kemudian, uleni adonan tepung beras hingga menjadi kalis dan siap dibentuk.", "Olesi tangan dengan minyak wijen dan bentuklah adonan tteokbokki menjadi bentuk silinder dengan panjang sekitar 15 cm atau sesuai selera.", "Didihkan air di dalam panci dan masukkan minyak wijen. Lalu, masukkan adonan tteokbokki dan rebus hingga matang. Tiriskan adonan tteokbokki dan sisihkan.", "Untuk membuat saus gochujang, campurkan semua bahan dan aduk hingga rata.", "Tumis daun bawang dan bawang putih sampai harum.", "Masukkan air dan saus gochujang, lalu aduk hingga rata.", "Masukkan tteokbokki dan aduk kembali hingga saus tercampur rata dan semua bahan menyatu.", "Taburi tteokbokki dengan wijen, lalu sajikan selagi hangat."],

    komentar: [
      { nama: "Rani", isi: "Kenyal dan pedasnya nagih banget", rating: 5 },
      { nama: "Joko", isi: "Enak tapi buatku agak terlalu pedas", rating: 4 }
    ]
  },
  {
    id: 88,
    nama: "Pastel Ayam Sayur",
    jenis: "Snack",
    rasa: "Gurih",
    harga: 3000,
    gambar: "/pastel ayam.jpg",
    deskripsi: "Pastel isi ayam adalah jajanan tradisional Indonesia berbentuk setengah lingkaran dengan pinggiran yang dipilin khas. Terbuat dari kulit adonan tepung terigu yang renyah setelah digoreng, diisi dengan campuran tumisan ayam suwir, sayuran.",
    bahan: [
      {
        judul: "Bahan Kulit:",
        langkah: ["300 gr tepung protein sedang", "200 gr tepung protein rendah", "200 ml air hangat", "100 gr margarin mix butter", "2 butir kuning telur", "1 sdt garam", "1 sdt kaldu bubuk"]
      },
      {
        judul: "Isian:",
        langkah: ["½ kg dada ayam rebus, potong kecil", "2 buah wortel, potong dadu", "3 buah kentang, potong dadu", "1 batang daun bawang, iris kecil"]
      },
      {
        judul: "Bumbu:",
        langkah: ["½ sdt merica bubuk", "1 sdt gula", "1 sdm garam", "5 siung bawang merah, haluskan", "5 siung bawang putih, haluskan"]
      }
    ],
    cara: ["Untuk bahan kulit, campurkan semua adonan bahan kulit kemudian uleni menggunakan tangan sampai kalis lalu tutup dengan plastik wrap. Diamkan kurang lebih selama 30 menit", "Untuk bahan isian, tumis bawang merah dan bawang putih sampai harum lalu masukkan potongan wortel, kentang dan ayam kemudian tambahkan air secukupnya. Masak sampai matang. Masukkan merica, gula, dan garam kemudian koreksi rasa. Tambahkan daun bawang kemudian aduk rata lalu sisihkan", "Setelah bahan kulit didiamkan kurang lebih selama 30 menit, bagi adonan sama rata sekitar 25 gr. Ambil satu bagian kemudian gilas menggunakan rolling pin agak memanjang kemudian beri isian lalu tutup dengan cara mempilin-pilin ujungnya. Lakukan sampai semua adonan habis lalu simpan di dalam kulkas selama 15 menit", "Panaskan minyak lalu goreng pastel dengan api kecil sampai kuning keemasan. Pastel ayam sayur siap disajikan"]
  },
  {
    id: 89,
    nama: "Toast Tuna Mayo",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 25000,
    gambar: "/toast tuna.jpeg",
    deskripsi: "Toast tuna mayo adalah roti panggang (toast) yang diisi dengan campuran daging tuna kaleng dan mayones, seringkali ditambahkan bawang bombay cincang, lada, atau jagung manis untuk tekstur tambahan. Roti dipanggang hingga renyah di luar, sementara isiannya tetap creamy dan gurih di dalam. Seringkali disajikan sebagai sarapan atau makanan ringan.",
    bahan: ["4 lembar roti tawar", "1/4 buah bawang bombay", "1 kaleng tuna (150 gram)", "3 sdm mayonnaise", "2 sdm keju parut", "1 sdm kental manis", "1/4 sdt oregano atau parsley bubuk", "Garam secukupnya", "Lada bubuk secukupnya", "Margarin secukupnya"],
    cara: ["Cincang bawang bombay. Panaskan 1 sdm margarin, lalu tumis hingga harum.", "Tiriskan tuna dari airnya, kemudian masukkan ke dalam tumisan bawang bombay.", "Tambahkan garam dan lada bubuk, lalu tumis hingga agak kering dan matang. Angkat.", "Campurkan tumis tuna dengan mayonnaise, keju, kental manis, dan oregano bubuk hingga rata.", "Olesi roti tawar dengan margarin, kemudian panggang sebentar di atas teflon hingga kecokelatan dan krispi. Angkat.", "Ambil roti tawar, isi dengan tuna mayo, lalu tumpuk dengan lembaran roti lainnya.", "Ulangi langkah tersebut hingga bahan habis. Potong menjadi dua bagian jika suka.", "Sandwich tuna mayo siap disajikan selagi hangat."],

    komentar: [
      { nama: "Rizal", isi: "Creamy dan gurih, cocok buat sarapan", rating: 5 },
      { nama: "Nina", isi: "Enak tapi agak terlalu creamy buat aku", rating: 4 }
    ]
  },
  {
    id:90,
    nama: "Klepon Cake",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 44000,
    gambar: "/klepon cake.jpg",
    deskripsi: "Klepon Cake adalah interpretasi modern dari jajanan tradisional Indonesia, klepon, yang diubah bentuknya menjadi kue bolu atau cake lembut. Kue ini mempertahankan elemen kunci klepon tradisional: aroma pandan, gula merah cair, dan kelapa parut.",
    bahan: [
      {
        judul: "Bahan klepon:",
        langkah: ["100 gram tepung beras ketan putih", "1 sdm tepung beras", "1/4 sdt garam", "1/4 sdt pasta pandan", "75 ml air", "50 gram gula merah, sisir", "Sejumput baking soda (opsional)"]
      },
      {
        judul: "Bahan untri Kelapa dan Topping:",
        langkah: ["75 gram kelapa parut", "75 gram gula merah", "2 sdm gula pasir", "100 ml air", "1/4 sdt garam", "1 lembar daun pandan", "Kelapa kering (topping)"]
      }
    ],
    cara: ["Masak kelapa parut, gula merah, gula pasir, air, garam, dan daun pandan dengan api kecil sambil diaduk sampai air menyusut dan gula larut. Sisihkan.", "Campur tepung ketan, tepung beras, garam, dan pasta pandan. Tuang air sedikit demi sedikit sambil diaduk hingga adonan kalis dan lembut.", "Panaskan kukusan, alasi tutupnya dengan kain agar air tidak menetes. Tuang adonan ke loyang yang sudah dioles margarin. Kukus selama 25–30 menit sampai matang.", "Setelah matang, angkat dan biarkan dingin sebentar. Belah klepon cake secara horizontal menjadi dua lapisan.", "Ratakan unti kelapa di atas lapisan bawah, lalu tutup dengan lapisan atas cake. Tekan perlahan agar menyatu.", "Taburi kelapa kering di atas cake sebelum disajikan. Potong sesuai selera."]
  },
  {
    id: 91,
    nama: "Mushroom Cream Pasta",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 37000,
    gambar: "/mushroom cream.png",
    deskripsi: "Mushroom cream pasta adalah hidangan pasta (biasanya menggunakan spaghetti, fettuccine, atau penne) yang dibalut dengan saus kental berbahan dasar krim (cooking cream atau whipping cream), mentega (butter), bawang putih, bawang bombay, dan campuran jamur. Hidangan ini memiliki tekstur yang kaya, kental, lembut (creamy), dan aroma harum dari tumisan jamur dan bawang. Seringkali ditambahkan keju parmesan.",
    bahan: ["500 gram pasta (bisa gunakan pasta gluten-free jika diperlukan)", "2 sdm mentega", "1 buah bawang bombay kecil, potong dadu", "500 gram jamur, iris tipis atau cincang", "2 siung bawang putih, cincang", "1 sdt thyme cincang (atau 1/2 sdt thyme kering)", "60 ml white wine kering (atau kaldu)", "240 ml kaldu ayam (atau kaldu sayur)", "240 ml krim kental (heavy cream)", "50 gram keju parmesan, parut", "Garam secukupnya", "Lada secukupnya"],
    cara: ["Rebus pasta sesuai petunjuk pada kemasan hingga matang.", "Sementara itu, lelehkan mentega di wajan besar dengan api sedang, lalu masukkan jamur dan bawang bombay. Masak sekitar 10 menit hingga empuk.", "Tambahkan bawang putih dan thyme, lalu masak sekitar 1 menit hingga harum.", "Tuangkan white wine, lalu aduk sambil mengikis bagian bawah wajan dengan spatula kayu agar bumbu tercampur sempurna.", "Masukkan kaldu dan krim kental, didihkan, lalu kecilkan api dan masak beberapa menit.", "Tambahkan keju parmesan, aduk hingga keju meleleh dan saus menjadi creamy.", "Masukkan pasta yang sudah matang, lalu aduk hingga semua pasta terbalut saus. Jika perlu, tambahkan sedikit air rebusan pasta agar tekstur saus sesuai selera.", "Creamy mushroom pasta siap disajikan."],

    komentar: [
      { nama: "Dani", isi: "Creamy dan gurih, jamurnya banyak banget", rating: 5 },
      { nama: "Lala", isi: "Enak tapi agak terlalu creamy buat seleraku", rating: 4 }
    ]
  },
  {
    id: 92,
    nama: "Corn Soup",
    jenis: "Makanan",
    rasa: "Gurih",
    harga: 15000,
    gambar: "/corn soup.jpg",
    deskripsi: "Corn soup adalah sup kental yang berbahan dasar jagung manis, kaldu, dan susu atau krim. Sup ini memiliki tekstur kental (creamy), halus, dan seringkali disajikan hangat. Bahan utamanya biasanya menggunakan jagung manis pipil (utuh) atau jagung krim (cream corn) yang dihaluskan.",
    bahan: ["25 gram bawang bombay", "2 sdm mentega", "2 sdm tepung terigu", "700 ml susu UHT", "150 gram jagung manis pipil", "1 sdt kaldu bubuk", "1/2 sdt garam", "1/4 sdt merica"],
    cara: ["Tumis bawang bombay menggunakan mentega hingga harum, lalu masukkan tepung terigu dan aduk hingga rata.", "Masukkan susu UHT, jagung manis pipil, garam, merica, dan kaldu bubuk, lalu aduk hingga tercampur merata.", "Masak hingga sup mengental dan matang, kemudian sajikan selagi hangat."]
  },
  {
    id: 93,
    nama: "Cookies and Cream Milkshake",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 14000,
    gambar: "/cookies and cream.png",
    deskripsi: "Cookies and Cream Milkshake adalah minuman manis dan creamy dengan perpaduan susu, es krim, dan biskuit cokelat yang diblender hingga lembut. Memiliki rasa gurih-manis dengan tekstur creamy dan topping whipped cream yang menggugah selera.",
    bahan: ["8 keping biskuit cokelat", "200 ml susu cair", "3 scoop es krim vanilla", "2 sdm saus cokelat", "1 sdm gula cair atau susu kental manis", "Es batu secukupnya", "Whipped cream secukupnya", "Biskuit cokelat tambahan untuk topping"],
    cara: ["Masukkan biskuit cokelat, susu cair, es krim vanilla, saus cokelat, dan es batu ke dalam blender.", "Blender semua bahan hingga halus dan creamy.", "Tuang milkshake ke dalam gelas saji.", "Tambahkan whipped cream di atasnya sebagai topping.", "Hias dengan biskuit cokelat dan saus cokelat agar lebih menarik.", "Cookies and cream milkshake siap disajikan dalam keadaan dingin."],

    komentar: [
      { nama: "Rena", isi: "Creamy banget dan rasa biskuitnya kerasa, enak!", rating: 5 },
      { nama: "Aldi", isi: "Enak sih tapi agak terlalu manis buat aku", rating: 4 }
    ]
  },
  {
    id: 94,
    nama: "Peanut Butter Milkshake",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 18000,
    gambar: "/peanut butter.png",
    deskripsi: "Peanut Butter Milkshake adalah Minuman creamy dengan perpaduan susu, es krim vanilla, dan selai kacang yang menghasilkan rasa manis dengan sedikit gurih khas kacang. Teksturnya lembut, kental, dan cocok dinikmati saat dingin.",
    bahan: ["2 sdm selai kacang", "250 ml susu cair", "3 scoop es krim vanilla", "2 sdm susu kental manis", "Es batu secukupnya", "Whipped cream secukupnya", "Kacang cincang secukupnya untuk topping"],
    cara: ["Masukkan selai kacang, susu cair, es krim vanilla, susu kental manis, dan es batu ke dalam blender.", "Blender semua bahan hingga halus dan creamy.", "Tuang milkshake ke dalam gelas saji.", "Tambahkan whipped cream di atasnya sebagai topping.", "Taburi kacang cincang agar tampil lebih menarik.", "Peanut Butter Milkshake siap disajikan dalam keadaan dingin."],

    komentar: [
      { nama: "Fajar", isi: "Perpaduan manis dan gurihnya pas, bikin nagih", rating: 5 }
    ]
  },
  {
    id: 95,
    nama: "Pineapple Juice",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 10000,
    gambar: "/pineapple.jpg",
    deskripsi: "Pineapple Juice adalah Minuman segar berbahan dasar nanas pilihan yang memiliki rasa manis dengan sedikit asam alami. Cocok diminum saat cuaca panas karena memberi sensasi segar dan menyegarkan tenggorokan.",
    bahan: ["200 gram buah nanas segar", "150 ml air dingin", "2 sdm gula cair atau madu", "Es batu secukupnya", "1 sdm air perasan lemon (opsional)"],
    cara: ["Potong buah nanas menjadi beberapa bagian kecil agar mudah diblender.", "Masukkan nanas, air dingin, gula cair, dan es batu ke dalam blender.", "Blender semua bahan hingga halus.", "Saring jus jika ingin tekstur lebih lembut.", "Tuang ke dalam gelas saji.", "Pineapple Juice siap dinikmati dalam keadaan dingin."]
  },
  {
    id: 96,
    nama: "Honey Garlic Chicken",
    jenis: "Makanan",
    rasa: "Manis",
    harga: 28000,
    gambar: "/honey-garlic.jpg",
    deskripsi: "Potongan ayam yang dimasak dengan saus madu dan bawang putih, menghasilkan perpaduan rasa manis, gurih, dan sedikit smoky. Disajikan hangat dengan tekstur ayam yang juicy dan saus yang meresap sempurna.",
    bahan: ["300 gram fillet ayam", "2 siung bawang putih, cincang", "3 sdm madu", "2 sdm saus tiram", "1 sdm kecap asin", "1 sdm mentega", "1/2 sdt lada bubuk", "1/2 sdt garam", "1 sdm minyak goreng", "Wijen secukupnya untuk topping"],
    cara: ["Potong fillet ayam menjadi beberapa bagian sesuai selera.", "Lumuri ayam dengan garam dan lada bubuk, lalu diamkan selama 10–15 menit agar bumbu meresap.", "Panaskan minyak dan mentega di wajan, lalu masak ayam hingga matang dan berwarna keemasan.", "Masukkan bawang putih cincang, lalu tumis hingga harum.", "Tambahkan madu, saus tiram, dan kecap asin, lalu aduk hingga saus tercampur rata.", "Masak beberapa menit hingga saus mengental dan meresap ke ayam.", "Taburi wijen di atas ayam sebelum disajikan.", "Honey Garlic Chicken siap dinikmati selagi hangat."],

    komentar: [
      { nama: "Dian", isi: "Ayamnya juicy dan sausnya manis gurih, enak banget", rating: 5 }
    ]
  },
  {
    id: 97,
    nama: "Strawberry Macchiato Boba",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 18000,
    gambar: "/strawberry macchiato.png",
    deskripsi: "Strawberry Macchiato Boba adalah Minuman kekinian dengan perpaduan jus stroberi segar, susu creamy, foam lembut, dan boba kenyal. Memiliki tampilan layer yang cantik dengan rasa manis dan segar, cocok dinikmati saat dingin.",
    bahan: ["1 porsi boba matang", "2 sdm gula pasir", "1 sdm madu", "2 sdm susu kental manis", "300 ml air", "Es batu secukupnya", "100 ml susu cair", "100 ml whipped cream cair", "1–2 sdm puree atau jus stroberi", "1 sdm gula pasir untuk foam"],
    cara: ["Siapkan boba yang telah matang dan sisihkan.", "Buat jus atau puree stroberi, lalu campurkan dengan susu kental manis hingga rata.", "Campurkan susu cair, whipped cream cair, dan gula pasir, lalu kocok hingga sedikit berbusa.", "Masukkan es batu dan boba ke dalam gelas saji.", "Tuang campuran stroberi ke dalam gelas.", "Tambahkan foam susu di bagian atas secara perlahan agar membentuk layer.", "Strawberry Macchiato Boba siap disajikan dalam keadaan dingin."],

    komentar: [
      { nama: "Nadia", isi: "Manis dan seger, bobanya kenyal dan enak", rating: 5 },
      { nama: "Arif", isi: "Lumayan enak tapi foam nya agak terlalu creamy", rating: 4 }
    ]
  },
  {
    id: 98,
    nama: "Pink Mojito",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 15000,
    gambar: "/pink mojito.png",
    deskripsi: "Pink Mojito adalah Minuman segar dengan perpaduan buah, soda, dan daun mint yang menghasilkan warna pink cantik. Memiliki rasa manis, segar, dengan sedikit sensasi citrus, cocok diminum saat cuaca panas.",
    bahan: ["100 ml sirup stroberi atau raspberry", "150 ml soda tawar", "50 ml air lemon", "5–6 lembar daun mint", "1 sdm gula cair", "Es batu secukupnya", "Irisan lemon secukupnya", "Potongan stroberi secukupnya"],
    cara: ["Siapkan gelas saji, lalu masukkan daun mint, irisan lemon, dan gula cair.", "Tekan perlahan bahan menggunakan muddler atau sendok agar aroma mint keluar.", "Masukkan es batu hingga gelas hampir penuh.", "Tuang sirup stroberi atau raspberry ke dalam gelas.", "Tambahkan air lemon dan soda tawar secara perlahan.", "Aduk perlahan hingga semua bahan tercampur rata.", "Hias dengan potongan stroberi atau irisan lemon.", "Pink Mojito siap disajikan dalam keadaan dingin."],

    komentar: [
      { nama: "Luna", isi: "Seger banget, mint sama lemonnya kerasa pas", rating: 5 },
      { nama: "Rian", isi: "Enak tapi menurutku sodanya agak terlalu kuat", rating: 4 }
    ]
  },
  {
    id: 99,
    nama: "Nata De Coffee",
    jenis: "Minuman",
    rasa: "Manis",
    harga: 18000,
    gambar: "/natade coffee.png",
    deskripsi: "Nata De Coffee adalah Minuman kopi segar dengan perpaduan espresso atau kopi seduh dan nata de coco yang kenyal. Memberikan sensasi unik dari rasa kopi yang khas dengan tambahan tekstur nata de coco yang menyegarkan.",
    bahan: ["12 gram kopi giling medium", "110 ml air panas", "120 ml nata de coco", "Es batu secukupnya", "1–2 sdm gula cair (opsional)", "1 set alat seduh dripper wave atau Kalita Wave"],
    cara: ["Siapkan gelas saji, lalu masukkan es batu secukupnya.", "Tambahkan nata de coco ke dalam gelas.", "Siapkan dripper wave dan masukkan kopi giling.", "Seduh kopi menggunakan air panas secara perlahan hingga ekstraksi selesai.", "Tuang kopi hasil seduhan ke dalam gelas berisi es dan nata de coco.", "Aduk perlahan agar semua bahan tercampur rata.", "Nata De Coffee siap disajikan dalam keadaan dingin."],

    komentar: [
      { nama: "Bagas", isi: "Unik banget, ada kenyal nata de coco di kopi", rating: 5 }
    ]
  },
  {
    id: 100,
    nama: "Souffle Pancake",
    jenis: "Snack",
    rasa: "Manis",
    harga: 23000,
    gambar: "/souffle pancake.png",
    deskripsi: "Souffle Pancake adalah Pancake lembut khas Jepang dengan tekstur super fluffy, ringan, dan lumer di mulut. Biasanya disajikan dengan madu, sirup maple, buah segar, atau whipped cream sehingga cocok untuk dessert maupun brunch.",
    bahan: ["2 butir telur", "40 gram tepung terigu", "30 ml susu cair", "25 gram gula pasir", "1/2 sdt vanilla extract", "1/4 sdt baking powder", "1 sdm mentega", "Whipped cream secukupnya", "Buah segar secukupnya untuk topping", "Sirup maple atau madu secukupnya"],
    cara: ["Pisahkan putih telur dan kuning telur ke wadah berbeda.", "Campurkan kuning telur, susu cair, vanilla extract, tepung terigu, dan baking powder, lalu aduk hingga rata.", "Kocok putih telur bersama gula pasir hingga mengembang dan membentuk soft peak.", "Masukkan adonan putih telur ke adonan kuning telur secara bertahap, lalu aduk perlahan agar tetap fluffy.", "Panaskan teflon dengan api sangat kecil dan olesi sedikit mentega.", "Tuang adonan tinggi ke atas teflon, tutup, lalu masak hingga matang dan mengembang.", "Sajikan dengan whipped cream, buah segar, dan sirup sesuai selera.", "Soufflé Pancake siap dinikmati selagi hangat."],

    komentar: [
      { nama: "Tasya", isi: "Lembut banget dan fluffy, enak dimakan hangat", rating: 5 },
      { nama: "Dika", isi: "Enak tapi agak terlalu manis buat aku", rating: 4 }
    ]
  }
];

export default dataMakanan;