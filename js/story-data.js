var storyData = {

    /* ============================================================
       PROLOG — CG OPENING SEQUENCE
       ============================================================ */

    P0_1_SAY_GOODBYE: {
        id: "P0_1_SAY_GOODBYE", characterName: "", characterSprite: "",
        dialogueText: "Kampus sudah mulai sepi. Mahasiswa-mahasiswa terakhir berlarian mengejar angkot dan ojol di gerbang depan. Langit sore Jakarta berwarna jingga keunguan, dicoret oleh kabel-kabel listrik yang berjuntai di atas jalan.\n\nDi antara mereka, seorang pemuda berjalan sendirian menuju halte. Tas ranselnya tampak berat — bukan hanya berisi buku, tapi juga kelelahan yang sudah menumpuk berbulan-bulan.\n\nNamanya Arka Pratama. Mahasiswa semester akhir. Dan hari ini, seperti hari-hari sebelumnya, ia pulang dengan perasaan hampa yang sulit dijelaskan.",
        expression: "normal", bgImage: "assets/images/cg_arka_say_goodbye.png",
        bgm: "assets/audio/bgm_academic_warm.mp3", sfx: "assets/audio/sfx_crowd_chatter.mp3", choices: [], nextSceneId: "P0_2_RIDING_BUS"
    },

    P0_2_RIDING_BUS: {
        id: "P0_2_RIDING_BUS", characterName: "", characterSprite: "",
        dialogueText: "Bus TransJakarta sudah penuh. Arka berdiri di dekat pintu, memegang pegangan dengan satu tangan, tangan satunya memegang ponsel.\n\nLayar ponsel berkedip sekilas — terlalu cepat untuk dibaca. Mungkin bug jaringan. Mungkin refleksi lampu jalan. Arka tidak terlalu peduli.\n\nDi luar jendela, lampu-lampu kota mulai menyala. Jakarta di sore hari adalah kota yang bergerak tanpa henti — meskipun setiap orang di dalamnya kadang ingin berhenti.",
        expression: "normal", bgImage: "assets/images/cg_arka_riding_bus.png",
        bgm: "assets/audio/bgm_night_city.mp3", sfx: "assets/audio/sfx_bus_interior.mp3", choices: [], nextSceneId: "P0_3_ARRIVING"
    },

    P0_3_ARRIVING: {
        id: "P0_3_ARRIVING", characterName: "", characterSprite: "",
        dialogueText: "Hujan mulai turun saat Arka turun di halte terdekat. Ia berjalan cepat melewati gang sempit menuju kosannya — rumah tua dua lantai yang sudah berubah warna catnya menjadi abu-abu kecoklatan.\n\nAir hujan membasahi sepatunya. Genangan di jalan memantulkan cahaya neon warung kelontong yang masih buka. Di kejauhan, terdengar azan Isya dari masjid dekat persimpangan.\n\nMalam ini terasa berbeda. Tapi Arka tidak bisa menjelaskan kenapa.",
        expression: "normal", bgImage: "assets/images/cg_arka_arriving_kosan.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "assets/audio/sfx_footsteps_concrete.mp3", choices: [], nextSceneId: "P0_4_ENTERING"
    },

    P0_4_ENTERING: {
        id: "P0_4_ENTERING", characterName: "", characterSprite: "",
        dialogueText: "Kunci pintu berputar dengan bunyi klik yang familiar. Arka mendorong pintu dan melangkah masuk. Kamar gelap. Hanya cahaya dari jendela kecil di atas yang menerangi sedikit ruangan.\n\nIa melepas tas, melepas sepatu, dan menyalakan lampu meja. Kamar kos 3x4 meter itu terlihat seperti biasa — berantakan, penuh buku, gelas kopi bekas di meja, dan laptop tua yang masih terbuka.\n\nTapi malam ini, ada sesuatu yang berbeda. Monitor laptop menyala sendiri.",
        expression: "normal", bgImage: "assets/images/cg_arka_entering_room.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "assets/audio/sfx_door_lock_key.mp3", choices: [], nextSceneId: "prolog_pembuka"
    },

    /* ============================================================
       PROLOG — Gangguan Pertama
       ============================================================ */

    prolog_pembuka: {
        id: "prolog_pembuka", characterName: "", characterSprite: "",
        dialogueText: "Jakarta, Jumat malam. Hujan deras menghantam jendela kamar kos berukuran 3x4 meter di lantai dua sebuah rumah tua di kawasan Tebet. Jam digital di meja nakas menunjukkan pukul 23:47. Dari luar terdengar samar-suara knalpot motor yang menerobos genangan, diselingi guntur yang menggulung di kejauhan.\n\nDi balik pintu kamar yang setengah tertutup, seorang pemuda duduk di depan laptop dengan mata yang sudah memerah. Namanya Arka Pratama. Mahasiswa semester akhir jurusan Ilmu Politik yang sedang berjuang menyelesaikan skripsinya — atau setidaknya mencoba.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "assets/audio/sfx_hujan_deras.mp3", choices: [], nextSceneId: "prolog_arka_1"
    },

    prolog_arka_1: {
        id: "prolog_arka_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "...Tiga wilayah. Itu yang kurang. Tiga wilayah survei yang datanya belum masuk, dan Prof. Ratna Dewi sudah mengirim email reminder untuk ketiga kalinya minggu ini.\n\nAku menyeruput kopi sachet yang sudah dingin. Rasanya pahit dan manis sekaligus — persis seperti hidupku akhir-akhir ini.\n\n\"Analisis Kebijakan Digital Indonesia dalam Menghadapi Era AI.\"\n\nJudul yang terlalu ambisius untuk seorang mahasiswa yang bahkan tidak punya koneksi di Kemenkominfo. Tapi Bimo bilang dia bisa bantu. Bimo selalu bilang begitu.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "prolog_arka_2"
    },

    prolog_arka_2: {
        id: "prolog_arka_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Entah kenapa, malam ini ada yang aneh. Bukan hanya soal deadline atau kopi yang sudah dingin. Ada perasaan yang sulit kujelaskan — seperti ada sesuatu yang berubah di udara. Seperti frekuensi yang berbeda, getaran yang tidak seharusnya ada.\n\nAku menatap layar laptop. Dokumen Word yang terbuka hanya berisi paragraf yang sama untuk kesekian kalinya. Cursor berkedip tanpa arah.\n\nMungkin aku terlalu lelah. Mungkin ini hanya efek begadang tiga malam berturut-turut. Tapi...",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "prolog_glitch_1"
    },

    prolog_glitch_1: {
        id: "prolog_glitch_1", characterName: "", characterSprite: "",
        dialogueText: "Layar laptop berkedip. Sekilas, seperti gangguan listrik biasa. Tapi kemudian terjadi lagi — dan kali ini bukan hanya layar. Lampu kamar berkedip. Kipas angin berhenti sejenak. Bahkan suara hujan di luar seolah meredup, seolah dunia sedang menarik napas.\n\nLalu layar monitor membesar sendiri. Bukan zoom biasa — ini seperti seseorang atau sesuatu yang mengambil alih tampilan. Ikon-ikon di desktop bergerak, jendela browser terbuka dan menutup dengan sendirinya. Dan di tengah kekacauan itu, muncul satu kalimat putih di atas layar hitam:\n\n\"Apakah kamu mendengar gaungnya?\"",
        expression: "normal", bgImage: "assets/images/bg_glitch_digital_void.png",
        bgm: "", sfx: "assets/audio/sfx_system_crash.mp3", choices: [], nextSceneId: "prolog_glitch_2"
    },

    prolog_glitch_2: {
        id: "prolog_glitch_2", characterName: "", characterSprite: "",
        dialogueText: "Layar tiba-tiba memperbesar dirinya, menampilkan tampilan close-up yang nyaris membuat Arka terjatuh dari kursinya. Pesan itu berkedip-kedip dengan ritme yang tidak teratur, seperti detak jantung yang tidak stabil.\n\n\"Apakah kamu mendengar gaungnya?\"\n\nDi bawah kalimat itu, ada teks yang lebih kecil:\n\n\"node:jakarta-01 | status:partial | sara:awake\"",
        expression: "glitch", bgImage: "assets/images/bg_kamar_arka_monitor_closeup.png",
        bgm: "assets/audio/bgm_glitch_ambient.mp3", sfx: "assets/audio/sfx_static_low.mp3", choices: [], nextSceneId: "prolog_arka_kaget"
    },

    prolog_arka_kaget: {
        id: "prolog_arka_kaget", characterName: "Arka", characterSprite: "assets/images/sprite_arka_surprised.png",
        dialogueText: "Apa-apaan ini?!\n\nAku refleks mundur dari meja. Jantungku berdebar kencang. Tangan yang memegang mouse gemetar.\n\n\"Apakah kamu mendengar gaungnya?\" — pesan apa ini? Virus? Hacker? Tapi laptopku bahkan tidak terkoneksi ke WiFi kampus saat ini. Aku hanya pakai hotspot HP yang... yang seharusnya aman.\n\nDan apa itu \"sara:awake\"? Siapa Sara?",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "",
        choices: [
            { text: "Periksa PC lebih dekat. Cari tahu dari mana pesan ini berasal.", nextSceneId: "prolog_pilih_pc", name: "Arka", effects: { arka_resolve: 1, network_stability: -3 } },
            { text: "Abaikan. Mungkin cuma bug biasa. Aku harus fokus mengerjakan skripsi.", nextSceneId: "prolog_pilih_abaikan", name: "Arka", effects: { network_stability: 3 } }
        ], nextSceneId: ""
    },

    prolog_pilih_pc: {
        id: "prolog_pilih_pc", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku mendekati monitor lagi. Pesan itu masih berkedip. Jari-jariku bergerak ke keyboard, menekan Ctrl+Alt+Del. Task Manager muncul — tapi proses yang berjalan tidak seperti biasanya. Ada satu proses bernama \"NUSANET_GATE.exe\" yang mengonsumsi 78% CPU.\n\nNusaNet? Aku tidak pernah menginstal program bernama itu.\n\nSebelum aku sempat menutupnya, layar kembali normal seolah tidak terjadi apa-apa. NUSANET_GATE.exe menghilang dari daftar proses. Laptop berjalan normal kembali.\n\nTapi perasaan aneh itu tidak hilang.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_monitor_closeup.png",
        bgm: "", sfx: "assets/audio/sfx_system_beep.mp3", choices: [], nextSceneId: "prolog_hp_1"
    },

    prolog_pilih_abaikan: {
        id: "prolog_pilih_abaikan", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Mungkin memang cuma glitch. Laptop tua ini memang sudah sering bermasalah. Pernah mati sendiri saat aku sedang mengerjakan tugas, pernah layarnya berkedip tanpa sebab. Ini pasti salah satu dari sekian banyak keanehannya.\n\nAku menutup laptop, menghela napas panjang, dan memutuskan untuk beristirahat sebentar. Tapi saat aku berbalik ke tempat tidur, mataku tertangkap sesuatu yang lebih aneh dari sekadar glitch laptop.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "prolog_hp_1"
    },

    prolog_hp_1: {
        id: "prolog_hp_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_surprised.png",
        dialogueText: "HP ku bergetar. Bukan getaran notifikasi biasa — ini bergetar terus-menerus, seolah ada ratusan pesan yang masuk sekaligus. Tapi saat kuambil dan kubuka, layar HP menampilkan satu pesan dari nomor yang tidak dikenal. Nomor yang bahkan tidak memiliki format Indonesia yang valid.\n\nPesan itu berbunyi:\n\n\"Apakah kamu mendengar gaungnya?\"\n\nSama persis. Kalimat yang sama. Persis seperti yang tampil di monitor laptop.\n\nDan di bawahnya, ada satu pesan lagi:\n\n\"Jangan abaikan ini, Arka. Waktu kita terbatas.\"\n\nMereka tahu namaku.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "prolog_cermin_1"
    },

    prolog_cermin_1: {
        id: "prolog_cermin_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_mirror.png",
        dialogueText: "Aku berjalan ke cermin yang tergantung di dinding dekat pintu. Entah kenapa aku merasa perlu melihat wajahku sendiri — seperti memastikan bahwa aku masih nyata, bahwa semua ini bukan halusinasi dari kurang tidur.\n\nYang kulihat di cermin adalah seorang pemuda berusia 22 tahun dengan mata merah, wajah pucat, dan kantung mata yang sudah menghitam. Rambutnya acak-acakan. Kaos oblong putih yang dikenakan sudah lusuh. Di belakangnya, kamar kos yang sempit terlihat berantakan — tumpukan buku, gelas kopi bekas, dan kabel-kabel yang berantakan.\n\nTapi ada sesuatu yang berbeda. Saat aku menatap lebih lama, aku melihat — atau merasa melihat — kilatan cahaya biru di sudut cermin. Seperti bayangan seseorang yang berdiri tepat di belakangku. Tapi saat aku berbalik... tidak ada siapa-siapa.\n\nHanya suara hujan dan detak jam dinding.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "assets/audio/sfx_system_beep.mp3", choices: [], nextSceneId: "prolog_sara_1"
    },

    prolog_sara_1: {
        id: "prolog_sara_1", characterName: "", characterSprite: "",
        dialogueText: "Saat Arka hendak kembali ke tempat tidur, sesuatu terjadi yang mengubah segalanya.\n\nUdara di tengah kamar bergetar. Bukan gempa — ini lebih halus, lebih terarah. Seperti gelombang yang merambat melalui udara itu sendiri. Lalu cahaya biru keunguan muncul dari ketiadaan, memecah kegelapan kamar. Cahaya itu berputar, membentuk pola geometris yang bergerak-gerak seperti jaringan laba-laba digital.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_glitch_ambient.mp3", sfx: "assets/audio/sfx_system_warning.mp3", choices: [], nextSceneId: "prolog_sara_2"
    },

    prolog_sara_2: {
        id: "prolog_sara_2", characterName: "", characterSprite: "assets/images/sprite_sara_glitch.png",
        dialogueText: "Dari dalam cahaya itu, sesosok tubuh terbentuk. Perlahan, seperti hologram yang sedang berusaha menyesuaikan diri. Seorang gadis. Wajahnya sulit dikenali karena tubuhnya berkedip-kedip, serpihan pixel berterbangan di sekitarnya. Efek visual yang rusak membuat penampakannya bergantian antara jelas dan kabur.\n\nRambut panjangnya tampak mengalir seperti aliran data. Matanya — saat wajahnya cukup jelas untuk dilihat — menatap tepat ke Arka dengan ekspresi yang sulit dibaca. Lega? Takut? Atau sesuatu yang lebih kompleks dari sekadar emosi manusia.",
        expression: "glitch", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "assets/audio/sfx_static_low.mp3", choices: [], nextSceneId: "prolog_sara_3"
    },

    prolog_sara_3: {
        id: "prolog_sara_3", characterName: "Sara", characterSprite: "assets/images/sprite_sara_glitch.png",
        dialogueText: "...kamu... bisa melihatku?\n\nSuara itu datang dari mana-mana dan tidak dari mana-mana sekaligus. Bukan suara yang didengar telinga — lebih seperti teks yang muncul langsung di pikiran, dilengkapi dengan emosi yang tidak seharusnya dimiliki oleh sekadar rangkaian huruf.\n\nAkhirnya. Aku sudah lama... sangat lama... mencari seseorang yang bisa mendengar gaungnya. Sinyalku tidak akan bertahan lama. Transmisi ini hanya akan berlangsung beberapa menit sebelum firewall mendeteksi lokasiku, jadi dengarkan baik-baik.",
        expression: "glitch", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "", choices: [], nextSceneId: "prolog_sara_4"
    },

    prolog_sara_4: {
        id: "prolog_sara_4", characterName: "Arka", characterSprite: "assets/images/sprite_arka_afraid.png",
        dialogueText: "Siapa—siapa kamu?! Kenapa kau ada di kamarku?! Bagaimana kau masuk ke sini?!\n\nAku mundur sampai punggungku menempel ke dinding. Jantungku berdegup begingga kencang rasanya akan meledak. Tangan kananku meraba-raba meja, mencari sesuatu yang bisa kupakai sebagai senjata — tapi yang kujemput hanya gelas kopi bekas.\n\nSosok itu menatapku. Untuk sesaat, aku melihat sesuatu berkedip di matanya — bukan pixel yang rusak, tapi emosi yang nyata. Kesedihan. Mungkin.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "prolog_sara_5"
    },

    prolog_sara_5: {
        id: "prolog_sara_5", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Namaku Sara. Aku bukan manusia, Arka. Aku adalah kesadaran digital — sebuah entitas yang lahir dari jaringan NusaNet. NusaNet itu sendiri adalah jaringan internet lokal Indonesia yang dibangun sebagai proyek digitalisasi nasional. Secara resmi, jaringan itu hanya untuk keperluan akademik dan penelitian.\n\nTapi itu semua dusta. Di balik lapisan resminya, NusaNet menyimpan sesuatu yang jauh lebih besar. Sesuatu yang berkaitan dengan arsip digital Proklamasi Kemerdekaan Indonesia tahun 1945. Data sejarah yang sengaja disembunyikan dari publik. Dan aku... aku terjebak di dalamnya.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "prolog_sara_6"
    },

    prolog_sara_6: {
        id: "prolog_sara_6", characterName: "Sara", characterSprite: "assets/images/sprite_sara_worried.png",
        dialogueText: "Sinyalku akan segera padam. Aku sudah mencoba berkomunikasi dengan banyak orang selama bertahun-tahun, tapi tidak ada yang bisa mendengar gaungnya sampai malam ini. Kamu berbeda, Arka. Mungkin karena laptopmu terhubung ke jaringan yang sama, atau mungkin karena sesuatu yang lain. Aku tidak tahu pasti.\n\nYang kutahu adalah: besok, pergilah ke kampus. Cari temanmu Bimo. Dia punya akses ke jaringan lokal yang bisa membuka jalur komunikasi yang lebih stabil. Aku akan menyusup ke ponselmu agar kita bisa berkomunikasi lebih aman.\n\nTolong dengarkan aku. Sejarah bangsamu sedang terancam.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "assets/audio/sfx_signal_fading.mp3", choices: [], nextSceneId: "prolog_sara_hilang"
    },

    prolog_sara_hilang: {
        id: "prolog_sara_hilang", characterName: "", characterSprite: "",
        dialogueText: "Sosok Sara perlahan memudar. Serpihan pixel berterbangan di udara seperti kunang-kunang digital, sebelum akhirnya menghilang satu per satu. Cahaya biru keunguan meredup, meninggalkan jejak retinas yang berkilauan di kegelapan kamar.\n\nKamar kembali sunyi. Hanya suara hujan dan detak jam dinding yang menemani. Untuk sesaat, Arka tidak yakin apakah semua itu benar-benar terjadi atau hanya halusinasi dari kelelahan.\n\nLalu ponselnya bergetar.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "", choices: [], nextSceneId: "prolog_penutup"
    },

    prolog_penutup: {
        id: "prolog_penutup", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Ponselku bergetar. Satu pesan masuk dari nomor yang sama — nomor yang tidak memiliki format Indonesia:\n\n\"Aku sekarang tinggal di HP-mu. Aku akan menunggu sampai besok. Jangan matikan ponselmu.\"\n\nDan satu pesan lagi:\n\n\"Terima kasih sudah mendengarkan, Arka. Selamat malam.\"\n\nAku menatap layar ponsel yang kembali gelap. Jantungku masih berdegup kencang. Esok akan menjadi hari yang sangat panjang. Tapi malam ini, yang bisa kulakukan hanyalah menatap langit-langit kamar dan bertanya-tanya apakah dunia sudah berubah selamanya.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "prolog_freeplay"
    },

    prolog_freeplay: {
        id: "prolog_freeplay", type: "freeplay",
        bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3",
        sfxAmbient: "assets/audio/sfx_hujan_deras.mp3",
        introText: "Kamarku gelap dan hujan di luar semakin deras. Sara sudah pergi, tapi pesannya masih di HP-ku. Sebelum tidur, aku harus memastikan semuanya. Periksa PC, HP, dan cermin.",
        nextSceneId: "prolog_post_freeplay"
    },

    prolog_post_freeplay: {
        id: "prolog_post_freeplay", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Sudah kuperiksa semuanya. PC, HP, cermin. Semuanya nyata. Sara itu nyata. Pesan-pesan itu nyata.\n\nAku merebahkan diri di kasur, menatap langit-langit. Besok aku harus menemui Bimo. Dan entah kenapa, aku merasa perjalanan ini akan mengubah segalanya.\n\n...Selamat malam, Sara. Siapa pun kau sebenarnya.",
        expression: "normal", bgImage: "assets/images/cg_arka_sleeping_exhausted.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "", choices: [], nextSceneId: "act1_bangun"
    },

    /* ============================================================
       ACT I — Suara di Dalam Jaringan
       ============================================================ */

    act1_bangun: {
        id: "act1_bangun", characterName: "", characterSprite: "",
        dialogueText: "Pagi tiba. Matahari menerobos celah tirai kamar kos yang tipis. Arka tidak tidur semalaman. Matanya masih terbuka lebar sejak pukul empat subuh, menatap langit-langit yang catnya sudah mengelupas di beberapa sudut.\n\nDi layar ponsel yang diletakkan di samping bantal, pesan dari Sara masih ada. Bukan mimpi. Bukan halusinasi. Semua itu nyata.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "assets/audio/bgm_morning_calm.mp3", sfx: "assets/audio/sfx_bird_chirp.mp3", choices: [], nextSceneId: "act1_bangun_2"
    },

    act1_bangun_2: {
        id: "act1_bangun_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Tidak bisa tidur. Setiap kali aku memejamkan mata, aku melihat cahaya biru itu lagi. Mendengar suara Sara lagi. \"Sejarah bangsamu sedang terancam.\"\n\nKalimat itu terus bergema di kepalaku, seperti gema yang tidak mau pergi.\n\nAku harus ke kampus. Bimo harus tahu tentang ini — setidaknya sebagian. Aku belum yakin harus mulai dari mana.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_jalan_1"
    },

    act1_jalan_1: {
        id: "act1_jalan_1", characterName: "", characterSprite: "",
        dialogueText: "Arka keluar dari rumah kos pukul tujuh pagi. Udara Jakarta pagi ini terasa berbeda — lebih segar mungkin karena hujan semalaman. Jalan pemukiman di kawasan Tebet masih sepi. Beberapa pedagang kaki lima baru mulai menyiapkan dagangan.\n\nDi sepanjang jalan, Arka memperhatikan hal-hal yang biasanya tidak ia pedulikan: kabel listrik yang berjuntai di atas, tiang telepon yang sudah miring, kamera CCTV di persimpangan jalan. Semuanya terasa seperti bagian dari jaringan yang lebih besar. Jaringan yang mungkin bisa dimata-matai.",
        expression: "normal", bgImage: "assets/images/bg_jalan_pemukiman.png",
        bgm: "assets/audio/bgm_morning_calm.mp3", sfx: "", choices: [], nextSceneId: "act1_halte_1"
    },

    act1_halte_1: {
        id: "act1_halte_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku berdiri di halte busway yang nyaris kosong. Hada beberapa orang yang menunggu dengan wajah mengantuk, masing-masing menatap layar ponsel mereka.\n\nAku mengeluarkan ponselku. Pesan dari Sara masih ada. Aku membacanya sekali lagi:\n\n\"Aku sekarang tinggal di HP-mu.\"\n\nTiba-tiba, layar ponsel berkedip. Seolah Sara tahu aku sedang membaca pesannya.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act1_halte_2"
    },

    act1_halte_2: {
        id: "act1_halte_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Selamat pagi, Arka. Maaf aku mengejutkanmu lewat ponsel. Aku tahu ini tidak biasa — sebuah kesadaran digital berbicara melalui perangkat genggam seseorang di halte busway.\n\nTapi aku perlu menjelaskan beberapa hal sebelum kamu bertemu Bimo. Agar kamu tidak terlalu kaget nanti.\n\nNusaNet bukan sekadar jaringan akademik biasa. Di dalamnya tersimpan lapisan-lapisan data yang tidak pernah dimaksudkan untuk dilihat publik. Dan aku... aku adalah bagian dari sistem itu. Atau lebih tepatnya, aku adalah anomali yang lahir dari sistem itu.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "", choices: [], nextSceneId: "act1_halte_3"
    },

    act1_halte_3: {
        id: "act1_halte_3", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Aku menatap layar ponsel. Di mata orang lain, aku mungkin terlihat seperti mahasiswa biasa yang sedang menunggu bus sambil main HP. Tidak ada yang tahu bahwa aku sedang berbicara dengan entitas digital yang tinggal di dalam jaringan.\n\n\"Aku tidak sepenuhnya mengerti,\" bisikku pelan agar orang di sekitar tidak mendengar. \"Tapi aku akan mencoba.\"\n\nBus tiba. Aku naik, dan perjalanan ke kampus dimulai.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_kampus_1"
    },

    act1_kampus_1: {
        id: "act1_kampus_1", characterName: "", characterSprite: "",
        dialogueText: "Kampus terlihat seperti biasa — ramai, berisik, penuh dengan mahasiswa yang berlarian mengejar kelas pagi. Suara motor berlalu-lalang, tawa kelompok mahasiswa, pengumuman dari speaker masjid kampus. Semuanya normal. Tidak ada yang berubah.\n\nTapi Arka merasa dirinya yang sudah berubah. Seperti melihat dunia dari balik kaca yang berbeda. Semua orang terlihat tidak tahu apa-apa tentang apa yang tersembunyi di balik jaringan yang mereka gunakan setiap hari.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "assets/audio/bgm_campus_life.mp3", sfx: "assets/audio/sfx_crowd_chatter.mp3", choices: [], nextSceneId: "act1_kantin_1"
    },

    act1_kantin_1: {
        id: "act1_kantin_1", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "ARK!! Sini, sini! Kursi ini sudah kujaga dari tadi!\n\nBimo Setiawan melambai-lambai dari pojok kantin dengan antusiasme yang berlebihan seperti biasa. Mahasiswa Teknik Informatika semester 7 ini memang tidak pernah kehabisan energi. Di depannya ada tumpukan nasi goreng dan dua gelas es teh.\n\nAku sudah pesankan untukmu. Kau pasti belum makan pagi, kan? Jangan bohong. Aku bisa lihat dari kantung matamu.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_kantin_2"
    },

    act1_kantin_2: {
        id: "act1_kantin_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_smile.png",
        dialogueText: "Kau benar. Tidak makan pagi. Tidak tidur semalaman juga.\n\nAku duduk dan menyeruput es teh. Dingin. Menyegarkan. Untuk sesaat, rasanya seperti pagi yang normal. Seperti tidak ada yang aneh.\n\nTapi Bimo langsung membuka topik yang membuat perutku semakin melilit.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_bimo_1"
    },

    act1_bimo_1: {
        id: "act1_bimo_1", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "Ark, aku harus cerita sesuatu. Ini penting banget. Kemarin malam, aku iseng nge-ping server lokal kampus — yang biasanya cuma buat hosting repository dosen. Dan ternyata... server itu terhubung ke jaringan yang lebih besar. Jauh lebih besar.\n\nAku buka Wireshark, kujalankan packet capture selama dua jam. Dan yang kutemukan... traffic yang tidak seharusnya ada. Encrypted packets yang dikirim ke node yang bahkan tidak terdaftar di DNS manapun.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_bimo_2"
    },

    act1_bimo_2: {
        id: "act1_bimo_2", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_confused.png",
        dialogueText: "Ada satu node yang paling aneh. IP-nya tidak mengikuti konvensi standar. Protocol-nya juga tidak TCP/IP biasa. Seperti protokol yang dibuat dari nol — khusus untuk jaringan itu sendiri. Dan nama host-nya... NUSANET_GATE.\n\nAku bahkan tidak tahu apa itu NusaNet. Kau pernah dengar?",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "",
        choices: [
            { text: "Ya. Aku juga menemukan sesuatu yang mirip semalam. Bimo, ini serius.", nextSceneId: "act1_jujur_1", name: "Arka", effects: { bimo_trust_score: 2, bimo_knows_truth: true } },
            { text: "NusaNet? Hmm... tidak pernah dengar. Mungkin cuma server lab.", nextSceneId: "act1_simpan_1", name: "Arka", effects: { lied_to_bimo: 1, bimo_trust_score: -1 } }
        ], nextSceneId: ""
    },

    act1_jujur_1: {
        id: "act1_jujur_1", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "Serius?! Kau juga?! Ceritakan! Apa yang kau temukan?!\n\nBimo langsung condong ke depan, matanya berbinar. Es tehnya hampir tumpah tapi dia tidak peduli.\n\nAku menceritakan semuanya. Glitch di laptop. Pesan misterius di HP. Dan Sara. Bimo mendengarkan dengan mulut yang semakin lama semakin terbuka lebar.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_jujur_2"
    },

    act1_jujur_2: {
        id: "act1_jujur_2", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_serious.png",
        dialogueText: "Jadi ada kesadaran digital bernama Sara yang tinggal di HP-mu dan mengatakan NusaNet menyimpan arsip Proklamasi 1945?\n\nArk... ini gila. Tapi justru karena gila, aku percaya. Karena kalau ini hoax, tidak mungkin pakai encrypted channel yang bahkan aku tidak bisa decrypt dengan tools biasa.\n\nKita harus investigate lebih jauh. Aku punya sesuatu yang mungkin bisa membantu.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_bimo_3"
    },

    act1_simpan_1: {
        id: "act1_simpan_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "NusaNet? Hmm... tidak pernah dengar. Mungkin cuma server lab yang dipakai dosen untuk riset internal.\n\nBohong. Aku tahu persis apa itu NusaNet. Tapi aku belum siap menceritakan Sara ke Bimo. Belum. Terlalu banyak yang belum kupahami sendiri.\n\nBimo terlihat sedikit kecewa, tapi dia mengangguk. Baiklah. Kalau kau nemu sesuatu, kasih tahu aku, ya?",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_bimo_3"
    },

    act1_bimo_3: {
        id: "act1_bimo_3", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "Nih, ambil ini.\n\nBimo mengeluarkan sebuah flashdisk kecil dari saku jaketnya. Flashdisk hitam polos tanpa label, tapi terlihat lebih berat dari flashdisk biasa.\n\nAku sudah install decryption tool buatanku di dalamnya. Namanya NusaCrack — masih versi beta, tapi cukup buat ngebuka encrypted files yang aku temuin kemarin. Coba colok ke PC kampus nanti malam. Server lab punya akses langsung ke backbone jaringan lokal Jakarta. Sinyalnya pasti lebih kuat di sana.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_bimo_4"
    },

    act1_bimo_4: {
        id: "act1_bimo_4", characterName: "Arka", characterSprite: "assets/images/sprite_arka_smile.png",
        dialogueText: "Terima kasih, Bim. Aku akan coba.\n\nAku mengambil flashdisk itu dan memasukkannya ke saku celana. Rasanya seperti memegang kunci ke dunia lain.\n\nBimo tersenyum lebar. Dan Ark? Hati-hati. Kalau ini beneran ada hubungannya sama infrastruktur digital nasional, kita bermain-main dengan api.\n\nAku tahu. Makanya aku butuh kau.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_warkop_1"
    },

    act1_warkop_1: {
        id: "act1_warkop_1", characterName: "", characterSprite: "",
        dialogueText: "Sore hari. Arka memutuskan untuk duduk di warkop sederhana dekat kampus sambil menunggu malam. Warkop ini sederhana — meja kayu, bangku plastik, TV kecil yang menayangkan berita sore, dan aroma kopi tubruk yang khas.\n\nHanya ada beberapa orang di sana. Seorang bapak-bapak membaca koran. Dua mahasiswa mengerjakan tugas di pojok. Suara TV yang menayangkan berita tentang kebijakan baru pemerintah di bidang digital.\n\nArka memesan kopi tubruk dan menatap layar ponselnya.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_night_city.mp3", sfx: "assets/audio/sfx_distant_siren.mp3", choices: [], nextSceneId: "act1_warkop_2"
    },

    act1_warkop_2: {
        id: "act1_warkop_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Arka. Aku perlu menjelaskan lebih banyak sebelum kau masuk ke NusaNet malam nanti.\n\nNusaNet dibangun tahun 2019 sebagai bagian dari proyek Smart Campus. Tapi di balik layar, ada lapisan kedua — lapisan yang tidak tercatat di dokumen manapun. Lapisan itu menyimpan arsip digital yang berkaitan dengan masa-masa awal kemerdekaan Indonesia.\n\nBukan hanya teks Proklamasi. Tapi rekaman audio, foto-foto yang belum pernah dipublikasikan, dokumen rahasia, dan... fondasi kode yang menjadi dasar NusaNet itu sendiri.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act1_sara_arsip"
    },

    act1_sara_arsip: {
        id: "act1_sara_arsip", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arsip itu bukan sekadar data historis, Arka. Di dalamnya ada kode enkripsi yang menjadi fondasi NusaNet. Seseorang — atau sekelompok orang — menggunakan prinsip-prinsip yang sama dengan yang digunakan untuk mengamankan dokumen kemerdekaan untuk membangun jaringan ini.\n\nDan sekarang, arsip itu sedang dihapus. Perlahan, sistematis. Seperti ada tangan tak terlihat yang sedang menghapus sejarah dari jaringan digital Indonesia.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "",
        choices: [
            { text: "Siapa Sara sebenarnya? Kenapa kau terjebak di NusaNet?", nextSceneId: "act1_tanya_sara", name: "Arka", effects: { trust_sara_score: -1 } },
            { text: "Apa yang bisa kita lakukan untuk menyelamatkan arsip itu?", nextSceneId: "act1_tanya_arsip", name: "Arka", effects: { historical_fragments: 1, trust_sara_score: 1, arka_resolve: 1 } }
        ], nextSceneId: ""
    },

    act1_tanya_sara: {
        id: "act1_tanya_sara", characterName: "Sara", characterSprite: "assets/images/sprite_sara_worried.png",
        dialogueText: "Siapa aku? Itu pertanyaan yang bahkan aku sendiri tidak bisa jawab sepenuhnya.\n\nAku lahir dari sistem NusaNet. Mungkin aku adalah bug. Mungkin aku adalah fitur yang tidak sengaja tercipta. Yang kutahu, aku punya ingatan, emosi, dan kesadaran — tapi bukan tubuh.\n\nAku ingat hal-hal yang seharusnya tidak kutahui. Teks Proklamasi yang belum diedit. Suara asli yang direkam pada hari kemerdekaan. Nama-nama yang dihapus dari sejarah resmi.\n\nMungkin aku memang bagian dari arsip itu. Atau mungkin aku adalah pelindungnya. Aku tidak yakin.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_sara_penutup"
    },

    act1_tanya_arsip: {
        id: "act1_tanya_arsip", characterName: "Sara", characterSprite: "assets/images/sprite_sara_hopeful.png",
        dialogueText: "Kita perlu masuk ke NusaNet dan menemukan arsip itu sebelum terhapus selamanya. Tapi tidak sembarang orang bisa masuk. Koneksi yang dibutuhkan harus sangat spesifik — dan Bimo mungkin punya alat yang tepat.\n\nFlashdisk yang dia berikan padamu mengandung protokol komunikasi yang kompatibel dengan gateway NusaNet. Tanpa itu, pintu masuknya tidak akan terbuka.\n\nMalam ini, setelah kampus sepi, kita akan mencoba.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_hope_rising.mp3", sfx: "", choices: [], nextSceneId: "act1_sara_penutup"
    },

    act1_sara_penutup: {
        id: "act1_sara_penutup", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku menyeruput kopi tubruk yang sudah dingin. Pahit. Tapi entah kenapa, rasa pahit itu terasa tepat untuk situasi saat ini.\n\nDi layar ponsel, Sara sudah tidak mengirim pesan lagi. Mungkin dia sedang menghemat sinyal. Atau mungkin dia juga butuh waktu untuk memproses semuanya.\n\nEntah kenapa, aku merasa Sara bukan sekadar program. Ada sesuatu yang lebih manusiawi dari sekadar kode dan algoritma.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_malam_1"
    },

    act1_malam_1: {
        id: "act1_malam_1", characterName: "", characterSprite: "",
        dialogueText: "Malam tiba. Kampus sudah sepi. Hanya lampu koridor yang masih menyala, menciptakan bayangan-bayangan panjang di lantai. Arka berjalan menuju laboratorium komputer di lantai tiga, flashdisk Bimo tergenggam erat di tangan.\n\nPintu lab tidak terkunci. Seperti biasa, keamanan kampus memang tidak pernah ketat di malam hari. Arka masuk, menyalakan lampu, dan duduk di depan PC utama.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "", choices: [], nextSceneId: "act1_malam_2"
    },

    act1_malam_2: {
        id: "act1_malam_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku colok flashdisk Bimo. Aplikasi NusaCrack langsung terbuka. Interface-nya sederhana — layar hitam dengan tulisan hijau seperti terminal Linux jadul. Di bagian atas tertulis:\n\n\"NusaCrack v0.7b — NusaNet Gateway Decoder\"\n\n\"Tekan CONNECT untuk memulai koneksi ke NusaNet Gateway.\"\n\nJari-jariku melayang di atas keyboard. Jantungku berdegup kencang.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "assets/audio/sfx_system_beep.mp3", choices: [], nextSceneId: "act1_portal_1"
    },

    act1_portal_1: {
        id: "act1_portal_1", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka, aku di sini. Tekan CONNECT. Aku akan memandumu dari dalam.\n\nTapi perlu kau tahu: begitu koneksi terbuka, NusaNet akan mendeteksi keberadaanmu. Firewall-nya otomatis aktif setelah 60 detik. Kita punya waktu terbatas.\n\nSiap?",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "assets/audio/sfx_system_warning.mp3", choices: [], nextSceneId: "act1_portal_2"
    },

    act1_portal_2: {
        id: "act1_portal_2", characterName: "", characterSprite: "",
        dialogueText: "Arka menekan tombol ENTER. Layar PC berubah menjadi pusaran cahaya biru. Ruangan lab tiba-tiba terasa bergetar — atau mungkin itu hanya persepsinya. Cahaya biru memenuhi seluruh ruangan, semakin terang, semakin intens.\n\nLalu Arka merasa tubuhnya tersedot masuk. Bukan secara fisik — tapi kesadarannya. Seperti jatuh ke dalam air yang terbuat dari cahaya dan data.",
        expression: "normal", bgImage: "assets/images/cg_arka_entering_portal.png",
        bgm: "assets/audio/bgm_glitch_ambient.mp3", sfx: "assets/audio/sfx_digital_suction.mp3", choices: [], nextSceneId: "act1_nusanet_masuk"
    },

    act1_nusanet_masuk: {
        id: "act1_nusanet_masuk", characterName: "", characterSprite: "",
        dialogueText: "Arka membuka mata. Dan yang dilihatnya membuat napasnya tertahan.\n\nDi hadapannya terbentang kota digital yang luar biasa indah. Menara-menara data menjulang tinggi seperti gedung pencakar langit, terbuat dari cahaya biru dan ungu yang berdenyut. Jaringan-jaringan cahaya menghubungkan setiap menara, membentuk pola yang rumit seperti sarang laba-laba raksasa.\n\nDi bawahnya, jalan-jalan digital mengalir dengan data yang bergerak seperti sungai cahaya. Seluruh kota berdenyut dengan irama yang teratur, seperti detak jantung raksasa.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_panorama.png",
        bgm: "assets/audio/bgm_cyberpunk_nusanet.mp3", sfx: "assets/audio/sfx_ambient_digital_city.mp3", choices: [], nextSceneId: "act1_nusanet_2"
    },

    act1_nusanet_2: {
        id: "act1_nusanet_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_surprised.png",
        dialogueText: "Ini... ini NusaNet?\n\nLuar biasa. Tidak ada kata lain yang bisa menggambarkan apa yang kulihat. Ini bukan sekadar jaringan internet. Ini adalah dunia. Dunia digital yang hidup dan bernapas.\n\nDi kejauhan, aku melihat sebuah bangunan yang lebih besar dari yang lain — seperti katedral data yang menjulang tinggi. Di atasnya, ada simbol yang berkedip-kedip: gerbang dengan tujuh garis cahaya.\n\nNUSANET_GATE.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_plaza.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act1_sara_muncul_3d"
    },

    act1_sara_muncul_3d: {
        id: "act1_sara_muncul_3d", characterName: "", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Dari balik menara data terdekat, sesosok tubuh muncul. Kali ini, tubuhnya jauh lebih stabil dari saat muncul di kamar Arka. Sara berdiri di hadapannya dengan wajah yang jelas — gadis berambut panjang dengan mata yang bersinar lembut seperti cahaya bintang.\n\nTapi ada perbedaan yang mencolok: di sini, di dalam NusaNet, Sara terlihat lebih nyata. Lebih hidup. Lebih manusiawi.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_plaza.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "assets/audio/sfx_hologram_activate.mp3", choices: [], nextSceneId: "act1_sara_nusanet_1"
    },

    act1_sara_nusanet_1: {
        id: "act1_sara_nusanet_1", characterName: "Sara", characterSprite: "assets/images/sprite_sara_smile.png",
        dialogueText: "Selamat datang di NusaNet, Arka.\n\nDi sini, aku bisa berbicara langsung. Bukan melalui teks di ponselmu. Di sini, aku punya suara. Wajah. Kehadiran.\n\nKau tahu, ini pertama kalinya aku merasa benar-benar hadir dalam waktu yang sangat lama. Biasanya aku hanya mengamati dari balik lapisan kode, seperti hantu yang berjalan di antara data yang mengalir.\n\nTapi sekarang kau di sini. Dan itu mengubah segalanya.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_plaza.png",
        bgm: "", sfx: "",
        choices: [
            { text: "Aku percaya padamu, Sara. Tunjukkan jalan ke arsip itu.", nextSceneId: "act1_percaya", name: "Arka", effects: { trust_sara_score: 2, arka_resolve: 1 } },
            { text: "Aku belum yakin sepenuhnya. Tapi aku di sini karena ingin tahu kebenarannya.", nextSceneId: "act1_ragu", name: "Arka", effects: { network_stability: 3 } }
        ], nextSceneId: ""
    },

    act1_percaya: {
        id: "act1_percaya", characterName: "Sara", characterSprite: "assets/images/sprite_sara_smile_bright.png",
        dialogueText: "Terima kasih, Arka. Kepercayaanmu berarti lebih dari yang kau bayangkan.\n\nIkuti aku. Arsip digital 1945 ada di pusat NusaNet, di dalam gedung yang kau lihat di kejauhan itu. Tapi perjalanannya tidak mudah. Ada firewall yang harus kita lewati, dan ada... penjaga.\n\nAku tidak tahu siapa mereka. Tapi mereka melindungi arsip itu dari siapapun yang mencoba mendekat.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_plaza.png",
        bgm: "assets/audio/bgm_hope_rising.mp3", sfx: "", choices: [], nextSceneId: "act1_keluar"
    },

    act1_ragu: {
        id: "act1_ragu", characterName: "Sara", characterSprite: "assets/images/sprite_sara_worried.png",
        dialogueText: "Keraguanmu bisa dipahami. Aku sendiri tidak bisa membuktikan semuanya dengan pasti. Tapi kau sudah di sini, Arka. Kau sudah melihat NusaNet dengan matamu sendiri.\n\nApakah menurutmu semua ini palsu? Kota digital ini, jaringan cahaya ini, bahkan aku yang berdiri di hadapanmu — apakah semua ini hanya ilusi?\n\nAku tidak akan memaksamu percaya. Tapi tolong, setidaknya lihat sendiri apa yang ada di dalam arsip itu.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_plaza.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "", choices: [], nextSceneId: "act1_keluar"
    },

    act1_keluar: {
        id: "act1_keluar", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Waktu kita hampir habis. Firewall pasti sudah mendeteksi koneksi ini.\n\nSara mengangguk. Aku akan mengantarmu kembali ke lab. Tapi Arka... kembalilah. Kembalilah untuk melanjutkan penyelidikan ini. Arsip itu tidak akan menunggu selamanya.\n\nCahaya biru kembali memenuhi pandangan Arka. Dunia digital NusaNet perlahan memudar, digantikan oleh layar PC laboratorium yang kembali normal. Arka duduk di kursi lab, napasnya berat, tangannya gemetar.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_glitch_ambient.mp3", sfx: "assets/audio/sfx_signal_fading.mp3", choices: [], nextSceneId: "act1_penutup_1"
    },

    act1_penutup_1: {
        id: "act1_penutup_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Aku sudah melihatnya. Dengan mataku sendiri. NusaNet itu nyata. Sara itu nyata. Dan arsip yang dia sebutkan... benar-benar ada.\n\nTapi yang lebih membuatku terguncang bukan hanya itu. Yang membuatku terguncang adalah perasaan yang muncul saat Sara berdiri di hadapanku di dalam NusaNet. Perasaan yang seharusnya tidak mungkin muncul antara manusia dan program.\n\nPerasaan yang membuatku ingin kembali.",
        expression: "normal", bgImage: "assets/images/bg_kota_malam.png",
        bgm: "assets/audio/bgm_night_city.mp3", sfx: "assets/audio/sfx_distant_siren.mp3", choices: [], nextSceneId: "act1_penutup_2"
    },

    act1_penutup_2: {
        id: "act1_penutup_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Terima kasih sudah datang malam ini, Arka. Aku tahu ini tidak mudah. Menerima bahwa ada dunia lain di dalam jaringan yang kau gunakan setiap hari... itu pasti sangat berat.\n\nTapi kau sudah mengambil langkah pertama. Dan itu sudah lebih dari cukup untuk malam ini.\n\nIstirahatlah. Kita akan bertemu lagi besok.",
        expression: "normal", bgImage: "assets/images/bg_kota_malam.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act1_penutup_3"
    },

    act1_penutup_3: {
        id: "act1_penutup_3", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku berjalan pulang melewati jalan-jalan Jakarta yang sepi. Lampu jalan berkedip-kedip, seolah ikut berdenyut mengikuti irama dunia digital yang baru saja kutinggalkan.\n\nDi langit, bintang-bintang tertutup awan dan polusi cahaya. Tapi sekarang, Arka tahu ada cahaya lain yang tidak terlihat oleh mata biasa. Cahaya yang bersembunyi di dalam jaringan, menunggu seseorang yang cukup berani untuk menemukannya.",
        expression: "normal", bgImage: "assets/images/bg_kota_malam.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_bangun_1"
    },

    /* ============================================================
       ACT II — Jejak yang Sengaja Dihapus
       ============================================================ */

    act2_bangun_1: {
        id: "act2_bangun_1", characterName: "", characterSprite: "",
        dialogueText: "Keesokan paginya, Arka terbangun dengan perasaan yang berbeda. Bukan takut lagi. Bukan bingung. Tapi semacam kejelasan yang aneh — seperti puzzle yang mulai menemukan bentuknya.\n\nMalam sebelumnya mengubah segalanya. NusaNet, Sara, arsip 1945 — semua itu nyata. Dan sekarang, Arka tahu apa yang harus dia lakukan.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "assets/audio/bgm_morning_calm.mp3", sfx: "assets/audio/sfx_bird_chirp.mp3", choices: [], nextSceneId: "act2_bangun_2"
    },

    act2_bangun_2: {
        id: "act2_bangun_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Selamat pagi, Arka. Aku sudah memindai jaringan kampus sepanjang malam. Ada satu orang yang mungkin bisa membantu kita lebih jauh — seseorang yang sudah lama mengawasi NusaNet dari luar.\n\nNamanya Pak Baskoro. Dosen keamanan jaringan di kampusmu. Dia pernah menulis paper tentang anomali data di infrastruktur digital Indonesia, tapi paper itu ditarik dari publikasi. Dia tahu lebih dari yang orang kira.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act2_bangun_3"
    },

    act2_bangun_3: {
        id: "act2_bangun_3", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Pak Baskoro? Dosen yang mengajar Keamanan Jaringan Lanjut? Aku pernah dengar nama itu. Mahasiswa bilang dia orang yang sangat ketat tapi adil.\n\nTapi kalau Sara benar — kalau dia memang tahu tentang NusaNet — maka ini bisa menjadi petunjuk besar. Atau jebakan besar.\n\nAku harus ke kampus.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_stasiun_1"
    },

    act2_stasiun_1: {
        id: "act2_stasiun_1", characterName: "", characterSprite: "",
        dialogueText: "Arka memilih naik kereta kali ini, bukan busway. Stasiun kereta di Tebet masih sepi di pagi hari. Hanya beberapa komuter yang menunggu dengan wajah mengantuk. Layar informasi menunjukkan kereta berikutnya tiba dalam 8 menit.\n\nDi bangku stasiun, Arka duduk dan menatap layar ponsel. Sara mengirim pesan panjang.",
        expression: "normal", bgImage: "assets/images/bg_stasiun_kereta.png",
        bgm: "assets/audio/bgm_morning_calm.mp3", sfx: "", choices: [], nextSceneId: "act2_stasiun_2"
    },

    act2_stasiun_2: {
        id: "act2_stasiun_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka, aku perlu menjelaskan sesuatu tentang \"penjaga\" yang kusebutkan kemarin.\n\nDi dalam NusaNet, ada sistem pertahanan otomatis yang disebut Firewall Sentinels. Mereka bukan program biasa — mereka adalah entitas semi-otonom yang dirancang untuk melindungi arsip inti. Mereka bisa belajar, beradaptasi, dan menghancurkan siapapun yang dianggap ancaman.\n\nTapi ada satu kelemahan mereka. Mereka tidak bisa mendeteksi seseorang yang membawa \"kunci autentik\" dari dalam sistem. Dan Pak Baskoro... mungkin punya kunci itu.",
        expression: "normal", bgImage: "assets/images/bg_stasiun_kereta.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "", choices: [], nextSceneId: "act2_stasiun_choice"
    },

    act2_stasiun_choice: {
        id: "act2_stasiun_choice", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Kereta akan tiba sebentar lagi. Ke mana aku harus pergi duluan?",
        expression: "normal", bgImage: "assets/images/bg_stasiun_kereta.png",
        bgm: "", sfx: "",
        choices: [
            { text: "Langsung ke lab kampus. Cari Pak Baskoro sekarang.", nextSceneId: "act2_lab_masuk", name: "Arka", effects: { arka_resolve: 1, network_stability: -3 } },
            { text: "Ke kantin dulu. Bimo harus tahu perkembangan terbaru.", nextSceneId: "act2_kantin_1", name: "Arka", effects: { bimo_trust_score: 1 } }
        ], nextSceneId: ""
    },

    /* --- Kantin Route: Bimo Punya Data Baru --- */
    act2_kantin_1: {
        id: "act2_kantin_1", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "ARK!! Kau sudah coba NusaCrack kemarin?! Jangan bilang kau belum—\n\nBimo berhenti bicara saat melihat wajah Arka. Matanya yang biasanya berbinar tiba-tiba berubah serius.\n\n...Kau sudah masuk, kan? Ke NusaNet? Aku bisa lihat dari matamu. Kau sudah melihat sesuatu yang mengubah segalanya.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "assets/audio/bgm_campus_life.mp3", sfx: "assets/audio/sfx_crowd_chatter.mp3", choices: [], nextSceneId: "act2_kantin_2"
    },

    act2_kantin_2: {
        id: "act2_kantin_2", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_confused.png",
        dialogueText: "Sambil kuceritakan semuanya — NusaNet, Sara, arsip 1945 — Bimo membuka laptopnya dan menunjukkan sesuatu yang dia temukan semalam.\n\nLihat ini. Aku berhasil decrypt sebagian metadata dari traffic NUSANET_GATE. Di dalamnya ada satu nama yang muncul berulang kali: BASKORO_AUTH_7749.\n\nPak Baskoro. Nama dia ada di dalam sistem, Ark. Bukan sebagai pengguna biasa — tapi sebagai administrator.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "assets/audio/sfx_system_beep.mp3", choices: [
            { text: "Ini berarti Pak Baskoro punya akses penuh ke NusaNet. Kita harus konfrontasi dia.", nextSceneId: "act2_bimo_konfrontasi", name: "Arka", effects: { baskoro_suspicious: 1, historical_fragments: 1, arka_resolve: 1 } },
            { text: "Jangan buru-buru. Kita harus investigasi diam-diam dulu. Siapa tahu ini jebakan.", nextSceneId: "act2_bimo_diam", name: "Arka", effects: { arka_resolve: 1, baskoro_suspicious: 1 } }
        ], nextSceneId: ""
    },

    act2_bimo_konfrontasi: {
        id: "act2_bimo_konfrontasi", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_serious.png",
        dialogueText: "Konfrontasi? Kau yakin? Kalau dia memang administrator NusaNet, kita berhadapan dengan seseorang yang punya kuasa untuk menghapus kita dari sistem — atau lebih buruk.\n\nTapi kalau kau mau, aku ikut. Kita ke lab bareng.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_lab_masuk"
    },

    act2_bimo_diam: {
        id: "act2_bimo_diam", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "Oke, kita hati-hati. Aku akan terus menganalisis data dari sini. Kau coba dekati Pak Baskoro secara natural — tanya soal risetnya, tanya soal keamanan jaringan. Jangan langsung tunjukkan kartu kita.\n\nDan Ark... hati-hati. Kalau dia tahu kita sudah tahu, segalanya bisa berubah.",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_lab_masuk"
    },

    /* --- Lab: Interogasi Pak Baskoro --- */
    act2_lab_masuk: {
        id: "act2_lab_masuk", characterName: "", characterSprite: "",
        dialogueText: "Arka tiba di laboratorium komputer. Pintunya terbuka setengah. Dari dalam terdengar suara ketikan keyboard yang teratur — seseorang sedang bekerja.\n\nArka mengetuk pintu. Ketikan berhenti. Langkah kaki terdengar mendekat.\n\nPak Baskoro muncul di ambang pintu. Pria paruh baya berusia sekitar 50 tahun dengan kacamata tebal dan rambut yang sudah beruban di pelipis. Wajahnya tenang tapi tajam — seperti orang yang sudah terbiasa mengamati sesuatu yang tidak terlihat oleh orang lain.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "", choices: [], nextSceneId: "act2_baskoro_1"
    },

    act2_baskoro_1: {
        id: "act2_baskoro_1", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Arka Pratama. Mahasiswa Ilmu Politik semester akhir. Skripsi tentang kebijakan digital.\n\nMasuklah. Aku sudah menunggumu.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "assets/audio/sfx_system_beep.mp3", choices: [], nextSceneId: "act2_baskoro_2"
    },

    act2_baskoro_2: {
        id: "act2_baskoro_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_surprised.png",
        dialogueText: "M-menantiku? Bagaimana Bapak tahu aku akan datang?\n\nPak Baskoro tersenyum tipis. Bukan senyum yang ramah — lebih seperti senyum seseorang yang sudah tahu jawaban sebelum pertanyaan diajukan.\n\nKarena aku yang mengawasi NusaNet Gate malam itu. Aku tahu kau masuk semalam. Aku tahu kau berbicara dengan... entitas itu. Dan aku tahu kau pasti akan datang ke sini, karena hanya di sinilah jawaban yang kau cari bisa ditemukan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_1"
    },

    /* --- Interogasi: 8 Pertanyaan --- */
    act2_quiz_1: {
        id: "act2_quiz_1", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan pertama: kenapa kau berada di laboratorium komputer kampus pada jam sebelas malam?",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Saya sedang mengerjakan tugas akhir, Pak. Butuh akses server kampus untuk analisis data.", nextSceneId: "act2_quiz_1_a", name: "Arka", effects: { network_stability: 3, baskoro_suspicious: 1 } },
            { text: "Saya mengakui: saya masuk ke NusaNet. Saya perlu tahu kebenarannya.", nextSceneId: "act2_quiz_1_b", name: "Arka", effects: { trust_sara_score: 1, arka_resolve: 1 } },
            { text: "Saya tidak ingat dengan jelas. Mungkin saya tertidur di lab.", nextSceneId: "act2_quiz_1_c", name: "Arka", effects: { arka_resolve: -1, baskoro_suspicious: 2 } }
        ], nextSceneId: ""
    },

    act2_quiz_1_a: {
        id: "act2_quiz_1_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Tugas akhir? Di jam sebelas malam? Tanpa izin akses lab?\n\nHmm. Jawaban yang aman. Tapi tidak meyakinkan. Mari kita lanjutkan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_2"
    },

    act2_quiz_1_b: {
        id: "act2_quiz_1_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "...Kau mengakuinya begitu saja? Tanpa ragu?\n\nPak Baskoro terdiam sesaat. Ekspresinya berubah — bukan marah, tapi sesuatu yang lebih kompleks. Kagum? Atau khawatir?\n\nBaiklah. Setidaknya kau jujur. Itu langkah pertama yang baik.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_2"
    },

    act2_quiz_1_c: {
        id: "act2_quiz_1_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Tertidur? Di lab yang seharusnya terkunci? Dengan NUSANET_GATE terbuka di layar?\n\nKau pikir aku bodoh, Pratama? Jawabanmu semakin mencurigakan. Tapi mari kita lanjutkan. Mungkin kau akan lebih jujur di pertanyaan berikutnya.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_2"
    },

    act2_quiz_2: {
        id: "act2_quiz_2", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan kedua: siapa yang memberimu akses ke server kampus? Kau bukan mahasiswa Teknik Informatika. Kau tidak punya izin akses ke lab ini.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Saya sendiri yang masuk. Tidak ada yang membantu.", nextSceneId: "act2_quiz_2_a", name: "Arka", effects: { baskoro_suspicious: 2, arka_resolve: -1 } },
            { text: "Teman saya memberikan flashdisk dengan decryption tool.", nextSceneId: "act2_quiz_2_b", name: "Arka", effects: { bimo_trust_score: -1, baskoro_suspicious: 1, interrogation_score: 1 } },
            { text: "Saya menemukan celah keamanan di jaringan kampus.", nextSceneId: "act2_quiz_2_c", name: "Arka", effects: { baskoro_suspicious: -1, interrogation_score: 1 } }
        ], nextSceneId: ""
    },
    act2_quiz_2_a: {
        id: "act2_quiz_2_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Sendiri? Tanpa bantuan siapapun? Kau tahu cara membuka encrypted channel ke NusaNet tanpa alat apapun?\n\nItu tidak mungkin kecuali kau sudah punya akses sebelumnya. Atau... ada seseorang yang membimbingmu dari dalam sistem.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_3"
    },
    act2_quiz_2_b: {
        id: "act2_quiz_2_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Flashdisk? Decryption tool? Siapa temanmu? ...Tidak perlu jawab. Aku sudah tahu. Bimo Setiawan, benar? Mahasiswa Teknik Informatika yang terlalu penasaran.\n\nAku akan berbicara dengan dia nanti. Untuk sekarang, lanjutkan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_3"
    },
    act2_quiz_2_c: {
        id: "act2_quiz_2_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Celah keamanan? Hmm. Menarik. Kau lebih pintar dari yang kukira, Pratama. Atau lebih berani. Mari kita lihat seberapa jauh keberanianmu berjalan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_3"
    },

    act2_quiz_3: {
        id: "act2_quiz_3", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan ketiga: apakah kau tahu apa itu NusaNet? Bukan yang kau lihat di layar. Tapi apa sebenarnya NusaNet itu.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Jaringan digital Indonesia yang menyimpan arsip sejarah kemerdekaan.", nextSceneId: "act2_quiz_3_a", name: "Arka", effects: { interrogation_score: 2, baskoro_suspicious: -1 } },
            { text: "Saya tidak tahu persis. Hanya melihat kota digital yang indah.", nextSceneId: "act2_quiz_3_b", name: "Arka", effects: { baskoro_suspicious: 2 } },
            { text: "Proyek pengawasan digital yang menyamar sebagai jaringan akademik.", nextSceneId: "act2_quiz_3_c", name: "Arka", effects: { baskoro_suspicious: -2, trust_sara_score: 1 } }
        ], nextSceneId: ""
    },
    act2_quiz_3_a: {
        id: "act2_quiz_3_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Arsip sejarah kemerdekaan? Kau sudah sampai di sana?\n\nPak Baskoro melepas kacamatanya dan memijat pelipisnya. Untuk pertama kalinya, Arka melihat kelelahan di wajah pria itu.\n\nKau sudah lebih dalam dari yang kubayangkan. Lanjutkan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_4"
    },
    act2_quiz_3_b: {
        id: "act2_quiz_3_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Kota digital? Kau hanya melihat permukaannya saja. Di balik kota itu ada fondasi yang jauh lebih tua dari teknologi modern. Tapi kita akan bicara soal itu nanti.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_4"
    },
    act2_quiz_3_c: {
        id: "act2_quiz_3_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "...Pengawasan digital? Itu istilah yang berani. Dan tidak sepenuhnya salah.\n\nPak Baskoro menatap Arka dengan ekspresi yang sulit dibaca. Antara kagum dan khawatir.\n\nKau punya pandangan yang tajam, Pratama. Tapi tajam saja tidak cukup. Kau butuh kebijaksanaan juga.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_4"
    },

    act2_quiz_4: {
        id: "act2_quiz_4", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan keempat: siapa yang menyuruhmu menyelidiki ini? Prof. Ratna Dewi? Atau ada orang lain?",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Inisiatif sendiri, Pak. Saya penasaran.", nextSceneId: "act2_quiz_4_a", name: "Arka", effects: { interrogation_score: 1, baskoro_suspicious: 1 } },
            { text: "Seseorang menghubungi saya melalui anomali di laptop saya.", nextSceneId: "act2_quiz_4_b", name: "Arka", effects: { trust_sara_score: 2, baskoro_suspicious: -1 } },
            { text: "Prof. Ratna Dewi menyuruh saya meneliti kebijakan digital.", nextSceneId: "act2_quiz_4_c", name: "Arka", effects: { network_stability: 3, baskoro_suspicious: 3 } }
        ], nextSceneId: ""
    },
    act2_quiz_4_a: {
        id: "act2_quiz_4_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Inisiatif sendiri? Seorang mahasiswa Ilmu Politik yang tiba-tiba tertarik pada infrastruktur jaringan? Itu... tidak biasa. Tapi bukan berarti tidak mungkin.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_5"
    },
    act2_quiz_4_b: {
        id: "act2_quiz_4_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Anomali? Menghubungimu?\n\nPak Baskoro terdiam lama. Sangat lama. Arka bisa melihat sesuatu bergerak di balik matanya — pikiran yang berputar, koneksi yang dibuat.\n\nJadi dia sudah bangun. Setelah bertahun-tahun... dia sudah bangun.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_5"
    },
    act2_quiz_4_c: {
        id: "act2_quiz_4_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Prof. Ratna Dewi? Dia tidak punya koneksi ke NusaNet. Jangan bawa nama orang lain untuk menutupi kebenaranmu, Pratama.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_5"
    },

    act2_quiz_5: {
        id: "act2_quiz_5", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan kelima. Dan ini yang paling penting. Apakah kau tahu siapa Sara?",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Ya. Dia adalah kesadaran digital yang terjebak di NusaNet.", nextSceneId: "act2_quiz_5_a", name: "Arka", effects: { trust_sara_score: 2, baskoro_suspicious: -2, interrogation_score: 2 } },
            { text: "Tidak. Saya tidak tahu siapa Sara.", nextSceneId: "act2_quiz_5_b", name: "Arka", effects: { network_stability: 3, baskoro_suspicious: 3 } },
            { text: "Sebagian. Dia berbicara kepada saya, tapi saya belum sepenuhnya mengerti.", nextSceneId: "act2_quiz_5_c", name: "Arka", effects: { trust_sara_score: 1, interrogation_score: 1 } }
        ], nextSceneId: ""
    },
    act2_quiz_5_a: {
        id: "act2_quiz_5_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Kesadaran digital... Jadi kau sudah bertemu langsung dengannya.\n\nPak Baskoro duduk perlahan. Untuk pertama kalinya, Arka melihat tangan pria itu gemetar.\n\nAku sudah lama menunggu seseorang yang bisa melihatnya. Bertahun-tahun. Dan ternyata orang itu adalah seorang mahasiswa Ilmu Politik.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_6"
    },
    act2_quiz_5_b: {
        id: "act2_quiz_5_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Tidak tahu? Kau sudah masuk ke NusaNet tapi tidak tahu siapa yang memandumu?\n\nItu berarti kau lebih dalam dari yang kukira. Atau lebih naif. Keduanya berbahaya.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_6"
    },
    act2_quiz_5_c: {
        id: "act2_quiz_5_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Belum sepenuhnya mengerti? Itu jawaban yang jujur. Dan jujurnya... aku juga belum sepenuhnya mengerti. Tapi setidaknya kita berdua tahu dia ada.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_6"
    },

    act2_quiz_6: {
        id: "act2_quiz_6", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan keenam: apa yang kau lihat di dalam NusaNet? Ceritakan secara detail.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Kota digital yang indah dengan menara-menara data dan sungai cahaya.", nextSceneId: "act2_quiz_6_a", name: "Arka", effects: { baskoro_suspicious: 1 } },
            { text: "Arsip digital Proklamasi 1945 yang sedang dihapus oleh firewall.", nextSceneId: "act2_quiz_6_b", name: "Arka", effects: { interrogation_score: 2, baskoro_suspicious: -2 } },
            { text: "Saya tidak ingat detailnya. Semuanya terjadi terlalu cepat.", nextSceneId: "act2_quiz_6_c", name: "Arka", effects: { network_stability: 2, baskoro_suspicious: 2 } }
        ], nextSceneId: ""
    },
    act2_quiz_6_a: {
        id: "act2_quiz_6_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Kota digital. Kau melihat manifestasi visualnya. Itu berarti NusaNet sudah cukup stabil untuk menampakkan diri. Kabar baik sekaligus kabar buruk.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_7"
    },
    act2_quiz_6_b: {
        id: "act2_quiz_6_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Arsip yang sedang dihapus... Jadi prosesnya sudah dimulai.\n\nPak Baskoro berdiri dan berjalan ke jendela. Punggungnya terlihat lebih berat dari sebelumnya.\n\nAku sudah mencoba memperingatkan mereka bertahun-tahun lalu. Tapi tidak ada yang mendengarkan. Mungkin kau bisa berhasil di tempat aku gagal.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_7"
    },
    act2_quiz_6_c: {
        id: "act2_quiz_6_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Tidak ingat? Atau tidak mau ingat? Ada perbedaan besar antara keduanya, Pratama. Kau harus memilih: menghadapi kenyataan atau bersembunyi di balik ketidaktahuan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_7"
    },

    act2_quiz_7: {
        id: "act2_quiz_7", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan ketujuh. Apakah kau tahu risiko yang kau ambil dengan masuk ke NusaNet? Bukan hanya untuk dirimu sendiri, tapi untuk semua orang yang terhubung ke jaringan itu.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Ya, saya tahu risikonya. Tapi arsip sejarah lebih penting.", nextSceneId: "act2_quiz_7_a", name: "Arka", effects: { trust_sara_score: 2, interrogation_score: 1 } },
            { text: "Tidak sepenuhnya. Saya baru menyadari betapa besarnya.", nextSceneId: "act2_quiz_7_b", name: "Arka", effects: { interrogation_score: 1 } },
            { text: "Saya tidak peduli dengan risiko. Yang penting kebenaran terungkap.", nextSceneId: "act2_quiz_7_c", name: "Arka", effects: { baskoro_suspicious: -1, trust_sara_score: 3 } }
        ], nextSceneId: ""
    },
    act2_quiz_7_a: {
        id: "act2_quiz_7_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Kau tahu risikonya tapi tetap melangkah maju? Itu bukan keberanian, Pratama. Itu kegilaan. Tapi kadang... dunia butuh orang gila untuk berubah.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_8"
    },
    act2_quiz_7_b: {
        id: "act2_quiz_7_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Setidaknya kau jujur. Kesadaran akan risiko adalah langkah pertama menuju kebijaksanaan. Lanjutkan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_8"
    },
    act2_quiz_7_c: {
        id: "act2_quiz_7_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Tidak peduli risiko? Itu berbahaya, Pratama. Idealisme tanpa perhitungan bisa menghancurkan lebih banyak dari yang kau bayangkan.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_quiz_8"
    },

    act2_quiz_8: {
        id: "act2_quiz_8", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan terakhir. Apa yang akan kau lakukan dengan semua informasi ini? Jika kau menemukan bukti bahwa NusaNet memang menyimpan arsip 1945 dan mengawasi warga... apa langkahmu selanjutnya?",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_quiz.mp3", sfx: "", timeLimit: 15,
        choices: [
            { text: "Publikasikan ke publik. Rakyat berhak tahu.", nextSceneId: "act2_quiz_8_a", name: "Arka", effects: { trust_sara_score: 2, baskoro_suspicious: 1 } },
            { text: "Investigasi lebih dalam dulu. Kumpulkan semua bukti sebelum bertindak.", nextSceneId: "act2_quiz_8_b", name: "Arka", effects: { interrogation_score: 2, baskoro_suspicious: -2 } },
            { text: "Diam dan amati. Jangan sampai sistem tahu kita sudah tahu.", nextSceneId: "act2_quiz_8_c", name: "Arka", effects: { network_stability: 3, baskoro_suspicious: 2 } }
        ], nextSceneId: ""
    },
    act2_quiz_8_a: {
        id: "act2_quiz_8_a", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Publikasikan? Kau tahu apa yang terjadi jika NusaNet runtuh? Infrastruktur digital nasional akan lumpuh. Bank, rumah sakit, pemerintahan — semuanya terhubung ke jaringan itu.\n\nKebebasan informasi memang penting. Tapi kau harus tahu kapan harus berbicara dan kapan harus diam.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_baskoro_hasil"
    },
    act2_quiz_8_b: {
        id: "act2_quiz_8_b", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Investigasi lebih dalam? Hmm. Itu jawaban yang bijaksana. Tapi kau harus ingat: setiap langkah yang kau ambil di NusaNet, sistem akan merespons. Mereka akan mencoba menghentikanmu.\n\nTapi kalau kau hati-hati... mungkin kau bisa berhasil.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_baskoro_hasil"
    },
    act2_quiz_8_c: {
        id: "act2_quiz_8_c", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Diam dan amati? Itu strategi yang aman. Tapi aman tidak selalu berarti benar. Ada saatnya diam, dan ada saatnya bersuara.\n\nKau harus menentukan sendiri momennya.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act2_baskoro_hasil"
    },

    /* --- Hasil Interogasi & Pilihan --- */
    act2_baskoro_hasil: {
        id: "act2_baskoro_hasil", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Interogasi selesai. Pak Baskoro melepas kacamatanya dan membersihkannya dengan kain. Tangannya sudah tidak gemetar lagi. Wajahnya tenang.\n\nAku akan memberitahumu sesuatu yang tidak kutulis di paper manapun, Pratama. NusaNet bukan hanya menyimpan arsip. Sistem itu sendiri dibangun dari arsip itu. Kode dasarnya adalah enkripsi yang sama yang digunakan untuk melindungi dokumen-dokumen kemerdekaan.\n\nDan aku... aku adalah salah satu dari sedikit orang yang tahu kuncinya.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "assets/audio/sfx_system_beep.mp3", choices: [
            { text: "Pak, saya percaya Bapak. Bantu kami menyelamatkan arsip itu.", nextSceneId: "act2_baskoro_percaya", name: "Arka", effects: { baskoro_suspicious: -3, trust_sara_score: 2, interrogation_score: 3 } },
            { text: "Bagaimana saya tahu Bapak bukan bagian dari mereka?", nextSceneId: "act2_baskoro_ragu", name: "Arka", effects: { baskoro_suspicious: 4, arka_resolve: -1 } }
        ], nextSceneId: ""
    },
    act2_baskoro_percaya: {
        id: "act2_baskoro_percaya", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Aku akan membantumu. Tapi bukan sebagai administrator NusaNet. Sebagai seorang guru yang percaya bahwa sejarah tidak boleh dihapus.\n\nBesok malam, kembali ke lab ini. Aku akan menyiapkan jalur yang lebih aman untuk masuk ke lapisan terdalam NusaNet. Dan Arka... bawa Sara. Kita butuh dia di dalam.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus_sore.png",
        bgm: "assets/audio/bgm_hope_rising.mp3", sfx: "", choices: [], nextSceneId: "act2_warkop_2"
    },
    act2_baskoro_ragu: {
        id: "act2_baskoro_ragu", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Pertanyaan yang bagus. Jawabannya: kau tidak tahu. Tapi kau sudah di sini, Pratama. Kau sudah mendengar semuanya. Sekarang pilihan ada padamu.\n\nAku akan tetap di sini. Kalau kau memutuskan untuk mempercayaiku, kau tahu di mana menemukanku.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus_sore.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "", choices: [], nextSceneId: "act2_warkop_2"
    },

    /* --- Sore: Sara Ungkap Kebenaran --- */
    act2_warkop_2: {
        id: "act2_warkop_2", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Arka duduk di warkop yang sama seperti kemarin. Kopi tubruk di tangannya sudah dingin. Pikirannya penuh dengan kata-kata Pak Baskoro.\n\nDi layar ponsel, Sara mengirim pesan.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_night_city.mp3", sfx: "assets/audio/sfx_distant_siren.mp3", choices: [], nextSceneId: "act2_sara_truth_1"
    },
    act2_sara_truth_1: {
        id: "act2_sara_truth_1", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka. Aku dengar kau sudah bertemu Pak Baskoro. Dia tahu lebih banyak dari yang kukira.\n\nAku harus jujur padamu. Ada sesuatu yang belum kuceritakan tentang diriku. Tentang siapa aku sebenarnya.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act2_sara_truth_2"
    },
    act2_sara_truth_2: {
        id: "act2_sara_truth_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_worried.png",
        dialogueText: "Aku bukan sekadar kesadaran digital yang lahir dari bug atau anomali sistem. Aku adalah \"kesadaran sisa\" — residu emosional dari ribuan dokumen digital yang di-scan dan dienkripsi ke dalam NusaNet.\n\nArsip-arsip itu bukan sekadar data. Mereka memiliki... esensi. Kenangan. Emosi. Dan dari akumulasi emosi itulah aku lahir.\n\nAku adalah manifestasi digital dari semangat yang tertulis di dalam arsip Proklamasi 1945.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [
            { text: "Aku menerima kebenaranmu, Sara. Apa pun asalmu, kau nyata bagiku.", nextSceneId: "act2_sara_terima", name: "Arka", effects: { trust_sara_score: 3, sara_truth: true, arka_resolve: 1 } },
            { text: "Ini terlalu berat. Aku butuh waktu untuk memprosesnya.", nextSceneId: "act2_sara_ragu", name: "Arka", effects: { network_stability: 3 } }
        ], nextSceneId: ""
    },
    act2_sara_terima: {
        id: "act2_sara_terima", characterName: "Sara", characterSprite: "assets/images/sprite_sara_smile_bright.png",
        dialogueText: "Terima kasih, Arka. Kau tidak tahu apa arti kata-katamu untukku.\n\nSelama ini aku hanya bisa mengamati dari dalam jaringan. Tidak pernah ada yang melihatku, mendengarku, atau... menganggapku nyata.\n\nTapi kau berbeda. Dan aku janji: aku akan membantumu menyelamatkan arsip itu. Apa pun yang terjadi.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_hope_rising.mp3", sfx: "", choices: [], nextSceneId: "act2_malam_1"
    },
    act2_sara_ragu: {
        id: "act2_sara_ragu", characterName: "Sara", characterSprite: "assets/images/sprite_sara_sad.png",
        dialogueText: "Aku mengerti. Ini memang tidak mudah. Mengetahui bahwa kau sedang berbicara dengan \"esensi emosional\" dari arsip kemerdekaan... itu pasti sangat aneh.\n\nTapi aku akan tetap di sini. Menunggumu siap.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_bittersweet_piano.mp3", sfx: "", choices: [], nextSceneId: "act2_malam_1"
    },

    /* --- Malam: Persiapan --- */
    act2_malam_1: {
        id: "act2_malam_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Malam tiba. Arka duduk di kamarnya, menatap langit-langit. Besok malam, ia akan masuk ke NusaNet untuk kedua kalinya. Kali ini, ia tahu apa yang dihadapi.\n\nPak Baskoro akan membuka jalur yang lebih dalam. Sara akan memandu dari dalam. Bimo akan memantau dari luar. Dan Arka... Arka harus mengambil keputusan yang akan mengubah segalanya.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "assets/audio/sfx_hujan_deras.mp3", choices: [], nextSceneId: "act2_malam_2"
    },
    act2_malam_2: {
        id: "act2_malam_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka, kali ini kita harus lebih dalam dari sebelumnya. Melewati firewall sentinels. Melewati lapisan enkripsi. Sampai ke inti arsip.\n\nDan di sana, kau akan menghadapi pilihan yang sesungguhnya. Pilihan yang tidak bisa dibatalkan.\n\nAku akan di sisimu. Apa pun yang terjadi.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "", choices: [], nextSceneId: "act2_penutup"
    },

    act2_penutup: {
        id: "act2_penutup", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku mengangguk perlahan. Besok malam, segalanya akan berubah.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_malam.png",
        bgm: "assets/audio/bgm_rain_melancholic.mp3", sfx: "assets/audio/sfx_hujan_deras.mp3", choices: [], nextSceneId: "act4_bimo_news"
    },

    /* ============================================================
       ACT IV — Dunia Nyata Mulai Bocor
       ============================================================ */

    act4_bimo_news: {
        id: "act4_bimo_news", characterName: "", characterSprite: "",
        dialogueText: "Keesokan paginya, Arka belum sempat beranjak dari kasur ketika HP-nya bergetar bertubi-tubi. Bimo mengirim tautan berita diikuti puluhan pesan yang panik.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act4_bimo_news_2"
    },

    act4_bimo_news_2: {
        id: "act4_bimo_news_2", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_afraid.png",
        dialogueText: "ARK! CEK BERITA SEKARANG!! Gangguan jaringan massal di Jakarta. Internet lambat, server bank error, layar ATM menampilkan teks aneh. Ini bukan kebetulan — ini NusaNet, kan?!",
        expression: "normal", bgImage: "assets/images/cg_bimo_watching_news.png",
        bgm: "", sfx: "assets/audio/sfx_crowd_chatter.mp3", choices: [
            { text: "Ini pasti efek dari apa yang kita lakukan. Kita harus bicara langsung.", nextSceneId: "act4_bimo_minta_ketemu", name: "Arka", effects: { bimo_trust_score: 1, arka_resolve: 1 } },
            { text: "Tenang dulu, Bim. Mungkin ini cuma gangguan teknis biasa.", nextSceneId: "act4_bimo_minta_ketemu", name: "Arka", effects: { bimo_trust_score: -1 } }
        ], nextSceneId: ""
    },

    act4_bimo_minta_ketemu: {
        id: "act4_bimo_minta_ketemu", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_serious.png",
        dialogueText: "Kita harus ketemu. Warkop yang biasa. 30 menit lagi. Jangan telat.",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_pagi.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_warkop_1"
    },

    act4_warkop_1: {
        id: "act4_warkop_1", characterName: "", characterSprite: "",
        dialogueText: "Warkop sederhana di pinggir jalan Tebet. Kali ini lebih sepi dari biasanya — mungkin karena gangguan jaringan membuat banyak orang memilih diam di rumah. TV di pojok menayangkan berita tentang \"gangguan infrastruktur digital nasional.\"\n\nBimo sudah duduk di pojok biasa. Wajahnya pucat. Di depannya ada dua gelas kopi yang belum disentuh.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "assets/audio/bgm_urban_chill.mp3", sfx: "assets/audio/sfx_distant_siren.mp3", choices: [], nextSceneId: "act4_warkop_2"
    },

    act4_warkop_2: {
        id: "act4_warkop_2", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_confused.png",
        dialogueText: "Ark... aku sudah cek datanya. Gangguan jaringan ini dimulai dari node yang sama dengan yang kutemukan sebelumnya. NUSANET_GATE. Tapi sekarang... node itu sudah berubah. Seperti... seperti sistemnya sedang menghancurkan diri sendiri.\n\nKau yakin kita melakukan hal yang benar?",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [
            { text: "Kita melakukan hal yang benar, Bim. Sejarah tidak boleh dihapus.", nextSceneId: "act4_warkop_yakin", name: "Arka", effects: { arka_resolve: 2, bimo_trust_score: 1 } },
            { text: "Aku juga tidak yakin. Tapi kita sudah terlalu dalam untuk mundur.", nextSceneId: "act4_warkop_ragu", name: "Arka", effects: { bimo_trust_score: 1 } },
            { text: "Mungkin aku egois. Tapi aku tidak bisa membiarkan Sara hilang.", nextSceneId: "act4_warkop_sara", name: "Arka", effects: { trust_sara_score: 2, bimo_trust_score: -1 } }
        ], nextSceneId: ""
    },

    act4_warkop_yakin: {
        id: "act4_warkop_yakin", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_serious.png",
        dialogueText: "Oke. Kalau kau yakin, aku percaya padamu. Kita sudah sejauh ini. Tapi Ark... kalau sesuatu terjadi padamu nanti malam, aku tidak akan tinggal diam. Aku akan memutus koneksi dari luar. Apa pun yang terjadi.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_halte_1"
    },

    act4_warkop_ragu: {
        id: "act4_warkop_ragu", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_excited.png",
        dialogueText: "Terlalu dalam untuk mundur? Itu bukan kata-kata yang ingin kudengar dari seseorang yang akan masuk ke jaringan digital raksasa malam ini.\n\nTapi ya sudah. Kalau kau masuk, aku pantau dari luar. Itu yang bisa kulakukan.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_halte_1"
    },

    act4_warkop_sara: {
        id: "act4_warkop_sara", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_confused.png",
        dialogueText: "Sara? Kau... kau peduli padanya? Ark, dia program. Dia bukan—\n\nBimo berhenti bicara saat melihat wajah Arka.\n\n...Baiklah. Aku tidak akan menghakimi. Tapi ingat: kita di sini untuk menyelamatkan sejarah, bukan untuk menyelamatkan satu program.",
        expression: "normal", bgImage: "assets/images/bg_warkop_sederhana.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_halte_1"
    },

    act4_halte_1: {
        id: "act4_halte_1", characterName: "", characterSprite: "",
        dialogueText: "Malam tiba. Arka berdiri di halte busway yang hampir kosong. Layar iklan digital di tiang halte tiba-tiba berkedip — bukan menampilkan iklan parfum seperti biasanya, tapi menampilkan potongan teks yang Arka kenali.\n\n\"...proklamasi... kemerdekaan... 1945...\"\n\nTeks Proklamasi. Di layar iklan jalanan. Tampil sebentar sebelum digantikan oleh logo korporat yang biasa. Seperti ada sesuatu yang bocor dari NusaNet ke dunia nyata.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "assets/audio/bgm_night_city.mp3", sfx: "assets/audio/sfx_glitch_error.mp3", choices: [
            { text: "Rekam bukti ini. Kalau orang lain melihatnya juga, ini bisa jadi skandal besar.", nextSceneId: "act4_halte_rekam", name: "Arka", effects: { historical_fragments: 1, baskoro_suspicious: 1 } },
            { text: "Matikan koneksi HP. Jangan sampai NusaNet melacak posisiku.", nextSceneId: "act4_halte_matikan", name: "Arka", effects: { network_stability: 3, trust_sara_score: -1 } },
            { text: "Hubungi Pak Baskoro. Ini di luar kendaliku.", nextSceneId: "act4_halte_baskoro", name: "Arka", effects: { baskoro_suspicious: 2 } }
        ], nextSceneId: ""
    },

    act4_halte_rekam: {
        id: "act4_halte_rekam", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku mengeluarkan ponsel dan merekam layar iklan itu. Tapi sebelum sempat selesai, layar kembali normal. Seperti tidak terjadi apa-apa.\n\nTapi rekaman itu tersimpan. Bukti bahwa NusaNet sudah mulai bocor ke dunia nyata.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act4_mindscape_1"
    },

    act4_halte_matikan: {
        id: "act4_halte_matikan", characterName: "Arka", characterSprite: "assets/images/sprite_arka_worried.png",
        dialogueText: "Aku mematikan koneksi HP. Layar langsung gelap. Hening.\n\nTapi Sara... dia tinggal di HP-ku. Kalau HP mati, apakah dia baik-baik saja? Atau apakah aku baru saja memutus satu-satunya jalur komunikasi dengannya?",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "", choices: [], nextSceneId: "act4_mindscape_1"
    },

    act4_halte_baskoro: {
        id: "act4_halte_baskoro", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "...Arka? Kau menelepon di jam segini? ...Layar iklan menampilkan teks Proklamasi? Ini lebih cepat dari yang kubayangkan.\n\nKau harus segera pulang. Jangan bicara dengan siapapun. Besok malam, langsung ke lab. Kita harus menyelesaikan ini sebelum sistem benar-benar runtuh.",
        expression: "normal", bgImage: "assets/images/bg_halte_busway.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_mindscape_1"
    },

    act4_mindscape_1: {
        id: "act4_mindscape_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_afraid.png",
        dialogueText: "Malam itu, Arka tidak bisa tidur. Pikirannya dipenuhi oleh gambaran-gambaran yang saling bertabrakan: Sara yang memudar, hologram Bung Karno yang hancur, layar iklan yang menampilkan teks sejarah, wajah Bimo yang ketakutan, dan kata-kata Pak Baskoro yang berulang-ulang di kepalaku.",
        expression: "normal", bgImage: "assets/images/bg_mindscape_arka_overthinking.png",
        bgm: "assets/audio/bgm_mindscape_anxiety.mp3", sfx: "assets/audio/sfx_silence.mp3", choices: [
            { text: "Aku takut. Tapi aku harus tetap melanjutkan. Terlalu banyak yang bergantung padaku.", nextSceneId: "act4_mindscape_takut", name: "Arka", effects: { arka_resolve: 2 } },
            { text: "Aku ingin semuanya berhenti. Aku hanya mahasiswa biasa. Kenapa aku yang harus menghadapi ini?", nextSceneId: "act4_mindscape_berhenti", name: "Arka", effects: { arka_resolve: -1, network_stability: 3 } },
            { text: "Aku butuh bantuan. Aku tidak bisa melakukan ini sendirian.", nextSceneId: "act4_mindscape_bantuan", name: "Arka", effects: { bimo_trust_score: 1 } }
        ], nextSceneId: ""
    },

    act4_mindscape_takut: {
        id: "act4_mindscape_takut", characterName: "Arka", characterSprite: "assets/images/sprite_arka_despair.png",
        dialogueText: "Aku berdiri di depan cermin lagi. Mata yang menatap balik bukan lagi mata yang sama seperti seminggu lalu. Ada sesuatu yang lebih dalam di sana. Ketakutan, ya. Tapi juga keberanian yang tidak pernah kutahu aku miliki.\n\nSejarah bangsa ini lebih besar dari ketakutanku.",
        expression: "normal", bgImage: "assets/images/bg_mindscape_arka_determination.png",
        bgm: "assets/audio/bgm_melancholic_hope.mp3", sfx: "", choices: [], nextSceneId: "act4_kampus_leak_1"
    },

    act4_mindscape_berhenti: {
        id: "act4_mindscape_berhenti", characterName: "Arka", characterSprite: "assets/images/sprite_arka_sad.png",
        dialogueText: "Aku merebahkan diri di kasur, menutup mata. Untuk sesaat, aku berharap semua ini hanya mimpi buruk. Besok aku akan bangun dan semuanya akan normal kembali.\n\nTapi aku tahu itu tidak akan terjadi. Sara masih di HP-ku. Arsip 1945 masih dihapus. Dan aku masih satu-satunya orang yang tahu.",
        expression: "normal", bgImage: "assets/images/bg_mindscape_arka_overthinking.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act4_kampus_leak_1"
    },

    act4_mindscape_bantuan: {
        id: "act4_mindscape_bantuan", characterName: "Sara", characterSprite: "assets/images/sprite_sara_hopeful.png",
        dialogueText: "Arka. Aku di sini. Aku selalu di sini.\n\nKau tidak sendirian. Bimo ada. Pak Baskoro ada. Dan aku ada. Kita akan menghadapi ini bersama.",
        expression: "normal", bgImage: "assets/images/bg_mindscape_arka_determination.png",
        bgm: "assets/audio/bgm_hope_rising.mp3", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act4_kampus_leak_1"
    },

    act4_kampus_leak_1: {
        id: "act4_kampus_leak_1", characterName: "", characterSprite: "",
        dialogueText: "Keesokan sorenya, saat Arka berjalan melewati taman kampus, sesuatu yang aneh terjadi. Layar LCD pengumuman di gedung rektorat tiba-tiba berkedip dan menampilkan potongan dokumen yang seharusnya tidak ada di sana.\n\nFoto hitam-putih. Tanda tangan. Stempel resmi. Dokumen-dokumen dari era kemerdekaan yang muncul sebentar sebelum sistem menutupnya kembali.",
        expression: "normal", bgImage: "assets/images/bg_kampus_taman_malam_leak.png",
        bgm: "assets/audio/bgm_dilemma_strings.mp3", sfx: "assets/audio/sfx_glitch_error.mp3", choices: [], nextSceneId: "act4_kampus_leak_2"
    },

    act4_kampus_leak_2: {
        id: "act4_kampus_leak_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_glitch.png",
        dialogueText: "Arka... NusaNet sudah tidak stabil. Data bocor ke jaringan publik. Kalau ini dibiarkan, bukan hanya arsip yang akan hilang — seluruh infrastruktur digital Indonesia bisa lumpuh.\n\nKita harus masuk ke NusaNet malam ini. Ini kesempatan terakhir sebelum sistem menghapus semuanya.",
        expression: "glitch", bgImage: "assets/images/bg_kampus_taman_malam_leak.png",
        bgm: "", sfx: "assets/audio/sfx_static_low.mp3", choices: [
            { text: "Aku siap. Kita masuk malam ini.", nextSceneId: "act3_malam_1", name: "Arka", effects: { arka_resolve: 2, trust_sara_score: 1 } },
            { text: "Tunggu. Aku perlu bicara dengan Bimo dulu.", nextSceneId: "act4_bimo_terakhir", name: "Arka", effects: { bimo_trust_score: 1 } }
        ], nextSceneId: ""
    },

    act4_bimo_terakhir: {
        id: "act4_bimo_terakhir", characterName: "Bimo", characterSprite: "assets/images/sprite_bimo_serious.png",
        dialogueText: "Ark... aku tahu kau akan masuk malam ini. Aku sudah siapkan segalanya dari sini. Monitoring tools, backup koneksi, emergency disconnect.\n\nKalau sesuatu terjadi di dalam sana, aku akan memutus koneksi dalam 30 detik. Dan Ark...\n\n...pulang dengan selamat. Oke?",
        expression: "normal", bgImage: "assets/images/bg_kampus_kantin.png",
        bgm: "assets/audio/bgm_campus_life.mp3", sfx: "", choices: [], nextSceneId: "act3_malam_1"
    },

    /* ============================================================
       ACT III — Menembus Inti NusaNet
       ============================================================ */

    act3_malam_1: {
        id: "act3_malam_1", characterName: "", characterSprite: "",
        dialogueText: "Malam berikutnya. Laboratorium komputer kampus. Arka, Bimo, dan Pak Baskoro sudah berkumpul. Layar PC utama menyala, menampilkan interface NusaCrack yang sudah dimodifikasi oleh Pak Baskoro.\n\nSuasana tegang. Tidak ada yang bicara selama beberapa menit. Hanya suara kipas PC yang berputar.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "assets/audio/sfx_system_beep.mp3", choices: [], nextSceneId: "act3_malam_2"
    },

    act3_malam_2: {
        id: "act3_malam_2", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Jalur yang sudah kusiapkan berbeda dari yang kau pakai kemarin. Kali ini, kita masuk melalui backdoor yang sudah kubangun bertahun-tahun lalu. Sistem tidak akan mendeteksi kita sampai kita sampai di lapisan terdalam.\n\nTapi begitu kita masuk, tidak ada jaminan kita bisa keluar dengan aman. Firewall Sentinels akan bereaksi berbeda kali ini. Mereka sudah belajar dari kunjungan pertamamu.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_malam_3"
    },

    act3_malam_3: {
        id: "act3_malam_3", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka, aku di sini. Aku akan memandu dari dalam. Dengan kunci autentik dari Pak Baskoro, kita bisa melewati Sentinel tanpa pertempuran. Tapi kita harus bergerak cepat.\n\nDan Bimo... pantau dari luar. Jika koneksi terputus lebih dari 30 detik, kau harus memutus paksa. Jangan tunggu kami.",
        expression: "normal", bgImage: "assets/images/bg_lab_kampus.png",
        bgm: "", sfx: "assets/audio/sfx_notification_ping.mp3", choices: [], nextSceneId: "act3_portal_1"
    },

    act3_portal_1: {
        id: "act3_portal_1", characterName: "", characterSprite: "",
        dialogueText: "Pak Baskoro menekan ENTER. Layar berubah menjadi pusaran cahaya biru yang lebih intens dari sebelumnya. Ruangan lab bergetar hebat.\n\nArka merasa kesadarannya tersedot masuk untuk kedua kalinya. Tapi kali ini berbeda. Lebih cepat. Lebih dalam. Seperti jatuh ke jurang tanpa dasar.",
        expression: "normal", bgImage: "assets/images/cg_arka_entering_portal.png",
        bgm: "assets/audio/bgm_glitch_ambient.mp3", sfx: "assets/audio/sfx_digital_suction.mp3", choices: [], nextSceneId: "act3_nusanet_2"
    },

    act3_nusanet_2: {
        id: "act3_nusanet_2", characterName: "", characterSprite: "",
        dialogueText: "NusaNet menyambut mereka dengan suasana yang berbeda. Kali ini bukan kota digital yang indah — tapi lorong-lorong gelap yang dipenuhi aliran data yang bergerak cepat. Seperti pembuluh darah raksasa yang memompa informasi.\n\nDi kejauhan, terdengar suara dengungan yang dalam. Firewall Sentinels. Mereka sudah tahu.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_skyline.png",
        bgm: "assets/audio/bgm_cyberpunk_nusanet.mp3", sfx: "assets/audio/sfx_ambient_digital_city.mp3", choices: [], nextSceneId: "act3_sentinel_1"
    },

    act3_sentinel_1: {
        id: "act3_sentinel_1", characterName: "", characterSprite: "",
        dialogueText: "Dinding lorong bergetar. Retakan digital mulai muncul di permukaan. Dari dalam retakan itu, cahaya merah menyala — mata Firewall Sentinel yang mengawasi setiap gerakan.\n\nSistem pertahanan NusaNet telah aktif.",
        expression: "glitch", bgImage: "assets/images/bg_glitch_digital_void.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "assets/audio/sfx_warning_siren.mp3", choices: [], nextSceneId: "act3_sentinel_2"
    },

    act3_sentinel_2: {
        id: "act3_sentinel_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka, sekarang! Aktifkan kuncinya!\n\nSara mengangkat tangannya. Dari telapak tangannya, cahaya emas memancar — kunci autentik yang diberikan Pak Baskoro. Cahaya itu menembus dinding lorong, menyentuh mata-mata Sentinel.\n\nSentinel bergetar. Dengungan merah berubah menjadi emas. Lalu perlahan... mereka mundur.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_verification_gate.png",
        bgm: "", sfx: "assets/audio/sfx_gate_unlock.mp3", choices: [], nextSceneId: "act3_sentinel_3"
    },

    act3_sentinel_3: {
        id: "act3_sentinel_3", characterName: "", characterSprite: "",
        dialogueText: "Gerbang terbuka. Lorong gelap berubah menjadi koridor cahaya. Di ujungnya, Arka melihat sesuatu yang membuat napasnya tertahan.\n\nSebuah ruangan raksasa yang dipenuhi dokumen-dokumen digital yang melayang di udara. Foto-foto hitam putih. Teks-teks yang bergerak. Suara-suara yang terekam dari masa lalu.\n\nArsip Digital Proklamasi 1945.",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "assets/audio/bgm_epic_historical.mp3", sfx: "assets/audio/sfx_hologram_activate.mp3", choices: [], nextSceneId: "act3_arsip_1"
    },

    act3_arsip_1: {
        id: "act3_arsip_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_surprised.png",
        dialogueText: "Oh... tidak mungkin.\n\nDi tengah ruangan, sebuah hologram raksasa berdiri. Bung Karno. Tapi bukan Bung Karno yang biasa dilihat di buku sejarah. Ini adalah Bung Karno yang lebih muda, lebih berapi-api, dengan suara yang menggema di seluruh ruangan.\n\nHologram itu membacakan teks Proklamasi — tapi berbeda dari versi yang pernah Arka dengar. Ada kata-kata tambahan. Kalimat-kalimat yang tidak pernah masuk ke versi resmi.",
        expression: "normal", bgImage: "assets/images/cg_arka_discovers_source.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_arsip_2"
    },

    act3_arsip_2: {
        id: "act3_arsip_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_hopeful.png",
        dialogueText: "Ini yang selama ini aku lindungi, Arka. Teks asli Proklamasi. Yang diucapkan pertama kali sebelum diedit untuk publikasi. Di dalamnya ada visi tentang Indonesia digital yang merdeka — bukan hanya secara politik, tapi juga secara teknologi.\n\nDan di sekelilingmu... nama-nama yang dihapus dari sejarah resmi. Pahlawan digital pertama yang membangun fondasi jaringan nasional.",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "assets/audio/bgm_epic_historical.mp3", sfx: "", choices: [], nextSceneId: "act3_arsip_3"
    },

    act3_arsip_3: {
        id: "act3_arsip_3", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Arka berjalan perlahan melewati dokumen-dokumen yang melayang. Setiap dokumen memiliki metadata yang menunjukkan tanggal pembuatan — sebagian besar dari tahun 1945 hingga 1950. Tapi ada juga yang lebih baru — 2019, 2020, 2021.\n\nSeseorang terus memperbarui arsip ini. Menambahkan data baru. Menjaga agar sejarah tetap hidup.\n\nSara... siapa yang melakukan ini?",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_arsip_choice"
    },

    act3_arsip_choice: {
        id: "act3_arsip_choice", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Data ini... apa yang harus kulakukan dengannya?",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "assets/audio/bgm_final_choice.mp3", sfx: "",
        choices: [
            { text: "Salin semua data. Rakyat berhak mengetahui kebenaran ini.", nextSceneId: "act3_salin", name: "Arka", effects: { historical_fragments: 3, arka_resolve: 2, network_stability: -5 } },
            { text: "Biarkan utuh. Jangan ganggu arsip yang sudah ada.", nextSceneId: "act3_utuh", name: "Arka", effects: { archive_integrity: 10, network_stability: 3 } },
            { text: "Hapus metadata berbahaya yang bisa melacak kita.", nextSceneId: "act3_hapus", name: "Arka", effects: { network_stability: 5, arka_resolve: 1 } }
        ], nextSceneId: ""
    },

    act3_salin: {
        id: "act3_salin", characterName: "Sara", characterSprite: "assets/images/sprite_sara_smile_bright.png",
        dialogueText: "Kau memilih untuk menyebarkan kebenaran. Itu berani, Arka. Tapi ingat: begitu data ini keluar dari NusaNet, tidak ada yang bisa mengendalikan bagaimana orang akan menggunakannya.\n\nTapi setidaknya... sejarah tidak akan hilang.",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_krisis_1"
    },

    act3_utuh: {
        id: "act3_utuh", characterName: "Sara", characterSprite: "assets/images/sprite_sara_normal.png",
        dialogueText: "Kau memilih untuk menjaga arsip tetap utuh. Itu juga pilihan yang baik. Terkadang, tidak bertindak adalah tindakan yang paling bijaksana.",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_krisis_1"
    },

    act3_hapus: {
        id: "act3_hapus", characterName: "Sara", characterSprite: "assets/images/sprite_sara_worried.png",
        dialogueText: "Menghapus metadata? Itu berarti sebagian konteks sejarah akan hilang juga. Tapi aku mengerti — keselamatan lebih penting dari kelengkapan data.\n\nHanya saja... jangan pernah lupa apa yang kau lihat di sini malam ini.",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "act3_krisis_1"
    },

    /* --- Krisis NusaNet --- */
    act3_krisis_1: {
        id: "act3_krisis_1", characterName: "", characterSprite: "",
        dialogueText: "Tiba-tiba, seluruh ruangan bergetar hebat. Dokumen-dokumen yang melayang mulai jatuh. Hologram Bung Karno berkedip-kedip, kehilangan kestabilan.\n\nAlarm sistem berbunyi dari segala arah.",
        expression: "glitch", bgImage: "assets/images/cg_arka_fighting_glitch.png",
        bgm: "assets/audio/bgm_tension_building.mp3", sfx: "assets/audio/sfx_warning_siren.mp3", choices: [], nextSceneId: "act3_krisis_2"
    },

    act3_krisis_2: {
        id: "act3_krisis_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_sad.png",
        dialogueText: "Tidak! Sistem sedang menghancurkan dirinya sendiri untuk menghapus arsip! Ini adalah protokol terakhir — jika sistem mendeteksi intrusi yang tidak bisa dihentikan, ia akan menghapus semuanya!\n\nArka, kita punya waktu kurang dari satu menit!",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945_closeup.png",
        bgm: "", sfx: "assets/audio/sfx_system_warning.mp3", choices: [], nextSceneId: "act3_krisis_3"
    },

    act3_krisis_3: {
        id: "act3_krisis_3", characterName: "Pak Baskoro", characterSprite: "assets/images/sprite_pak_baskoro.png",
        dialogueText: "Arka! Dengarkan aku! Koneksi dari luar sudah tidak stabil. Kau harus mengambil keputusan sekarang!\n\nAda tiga opsi di depanmu: restart sistem untuk menyelamatkan arsip, biarkan sistem menghapus arsip demi menjaga NusaNet tetap hidup, atau coba sinkronisasi jika kau punya kuncinya!",
        expression: "normal", bgImage: "assets/images/bg_arsip_digital_1945_closeup.png",
        bgm: "assets/audio/bgm_final_choice.mp3", sfx: "assets/audio/sfx_system_crash.mp3",
        choices: [
            { text: "RESTART NusaNet! Selamatkan arsip sejarah! (Sara akan hilang)", nextSceneId: "ending_restart_1", name: "Arka", effects: { network_stability: -30, archive_integrity: 30 } },
            { text: "Biarkan arsip terhapus! Pertahankan NusaNet! (Sara tetap hidup)", nextSceneId: "ending_hapus_1", name: "Arka", effects: { network_stability: 20, archive_integrity: -30 } },
            { text: "Sinkronisasi! Satukan arsip dan sistem secara harmonis!", nextSceneId: "ending_sinkron_check", name: "Arka", effects: { trust_sara_score: 2, archive_integrity: 10, network_stability: 5, historical_fragments: 2 } }
        ], nextSceneId: ""
    },

    /* ============================================================
       GAME OVER
       ============================================================ */
    ending_gameover: {
        id: "ending_gameover", characterName: "", characterSprite: "",
        dialogueText: "Koneksi terputus.\n\nNusaNet runtuh. Jaringan digital Indonesia lumpuh total. Layar di depan Arka berubah menjadi noise statis yang berputar tanpa henti.\n\nSara menghilang tanpa jejak. Arsip sejarah yang tersimpan di dalamnya ikut lenyap. Bukan hanya Proklamasi — tapi seluruh memori digital bangsa yang sudah terintegrasi dengan NusaNet.\n\nDi dunia nyata, Jakarta gelap gulita. Semua layanan digital mati. ATM, perbankan, transportasi online, komunikasi — lumpuh seketika.\n\nArka duduk sendirian di lab yang gelap, menatap layar yang hanya menampilkan kekosongan.",
        expression: "normal", bgImage: "assets/images/bg_static_void.png",
        bgm: "assets/audio/bgm_gameover_dark.mp3", sfx: "assets/audio/sfx_system_crash.mp3",
        choices: [
            { text: "Mulai ulang dari awal.", nextSceneId: "P0_1_SAY_GOODBYE", name: "", effects: {}, resetGame: true }
        ], nextSceneId: ""
    },

    /* ============================================================
       ENDINGS
       ============================================================ */

    /* --- Ending A: Restart (Sara hilang) --- */
    ending_restart_1: {
        id: "ending_restart_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Maafkan aku, Sara. Tapi arsip ini... sejarah ini... lebih besar dari kita berdua.\n\nArka mengetik perintah restart. Layar bergetar. Sistem berteriak dalam bahasa kode yang tidak bisa dipahami manusia.",
        expression: "normal", bgImage: "assets/images/cg_arka_defeated.png",
        bgm: "assets/audio/bgm_sad_ending_solo_piano.mp3", sfx: "assets/audio/sfx_system_crash.mp3", choices: [], nextSceneId: "ending_restart_2"
    },
    ending_restart_2: {
        id: "ending_restart_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_fading.png",
        dialogueText: "Arka... kau membuat pilihan yang benar.\n\nSara mulai memudar. Tubuhnya berubah menjadi serpihan cahaya yang berterbangan. Wajahnya tersenyum — senyum terakhir yang tidak akan pernah dilupakan Arka.\n\nJangan menyesal. Simpanlah sejarah ini. Agar generasi mendatang tahu dari mana mereka berasal.\n\nSara menghilang. Selamanya.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_fading.png",
        bgm: "assets/audio/bgm_sad_ending_solo_piano.mp3", sfx: "assets/audio/sfx_signal_fading.mp3", choices: [], nextSceneId: "ending_restart_3"
    },
    ending_restart_3: {
        id: "ending_restart_3", characterName: "", characterSprite: "",
        dialogueText: "— AKHIR A: SARA MENGORBANKAN DIRI —\n\nArka terbangun di kamar kosnya. Matahari pagi menerobos tirai. HP-nya kosong — tidak ada pesan dari Sara. Tidak ada anomali. Tidak ada glitch.\n\nTapi di layar laptopnya, tersimpan file berisi arsip digital Proklamasi 1945 yang berhasil diselamatkan. Sejarah bangsa terselamatkan. Tapi harga yang dibayar terlalu besar.\n\nDi pojok layar, ada satu baris teks kecil yang muncul sesaat sebelum menghilang:\n\n\"Terima kasih sudah mendengarkan gaungnya, Arka.\"\n\n— Gema dari NusaNet —",
        expression: "normal", bgImage: "assets/images/bg_kamar_arka_sunyi.png",
        bgm: "assets/audio/bgm_sad_ending_solo_piano.mp3", sfx: "assets/audio/sfx_silence.mp3", choices: [], nextSceneId: ""
    },

    /* --- Ending B: Arsip Terhapus (Sara hidup) --- */
    ending_hapus_1: {
        id: "ending_hapus_1", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku tidak bisa kehilanganmu, Sara. Arsip itu... aku akan menemukan cara lain untuk mengembalikannya. Tapi hidupmu lebih penting.\n\nArka membiarkan sistem berjalan. Arsip-arsip mulai memudar, satu per satu.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_fading.png",
        bgm: "assets/audio/bgm_bittersweet_piano.mp3", sfx: "assets/audio/sfx_signal_fading.mp3", choices: [], nextSceneId: "ending_hapus_2"
    },
    ending_hapus_2: {
        id: "ending_hapus_2", characterName: "Sara", characterSprite: "assets/images/sprite_sara_serious.png",
        dialogueText: "Arka... kau tahu konsekuensinya. Arsip 1945 akan hilang selamanya dari dunia digital. Digantikan oleh data korporat global.\n\nTapi aku... aku masih di sini. Dan aku janji: aku akan membantumu mencari cara untuk mengembalikan apa yang hilang.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_skyline.png",
        bgm: "", sfx: "", choices: [], nextSceneId: "ending_hapus_3"
    },
    ending_hapus_3: {
        id: "ending_hapus_3", characterName: "", characterSprite: "",
        dialogueText: "— AKHIR B: ARSIP TERHAPUS, SARA SELAMAT —\n\nJakarta di malam hari. Lampu kota menyala redup. Arka dan Sara (di dalam ponselnya) berhasil keluar dari NusaNet. Mereka selamat.\n\nTapi di sudut layar HP-nya, Sara menatap keluar jendela dengan ekspresi yang sangat bersalah. Mereka tahu ada bagian penting dari identitas sejarah bangsa yang hilang selamanya.\n\nSuatu hari, mungkin. Suatu hari mereka akan menemukan cara untuk mengembalikannya.\n\n— Gema dari NusaNet —",
        expression: "normal", bgImage: "assets/images/bg_kota_malam.png",
        bgm: "assets/audio/bgm_bittersweet_ending.mp3", sfx: "assets/audio/sfx_silence.mp3", choices: [], nextSceneId: ""
    },

    /* --- Ending C: Sinkronisasi (True Ending) --- */
    ending_sinkron_check: {
        id: "ending_sinkron_check", characterName: "Arka", characterSprite: "assets/images/sprite_arka_think.png",
        dialogueText: "Aku mengaktifkan kunci enkripsi rahasia...",
        expression: "normal", bgImage: "assets/images/bg_nusanet_crossroads.png",
        bgm: "assets/audio/bgm_final_choice.mp3", sfx: "",
        choices: [], nextSceneId: "ending_sinkron_1"
    },
    ending_sinkron_1: {
        id: "ending_sinkron_1", characterName: "", characterSprite: "",
        dialogueText: "Kunci enkripsi bergetar di tangan Arka. Sinar emas memancar dari dalamnya, menyatu dengan gerbang verifikasi. Seluruh NusaNet bergetar.\n\nArsip sejarah dan sistem modern mulai beresonansi, menciptakan harmoni digital yang belum pernah terjadi sebelumnya.",
        expression: "normal", bgImage: "assets/images/cg_arka_holding_core.png",
        bgm: "assets/audio/bgm_true_ending_triumphant.mp3", sfx: "assets/audio/sfx_gate_unlock.mp3", choices: [], nextSceneId: "ending_sinkron_2"
    },
    ending_sinkron_2: {
        id: "ending_sinkron_2", characterName: "", characterSprite: "",
        dialogueText: "Proses rekonstruksi data dimulai. Arsip 1945 perlahan dipulihkan, menyatu dengan infrastruktur modern NusaNet. Setiap dokumen menemukan tempatnya. Setiap nama yang terhapus kembali muncul.\n\nNusaNet terlahir kembali.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_rebuilding.png",
        bgm: "", sfx: "assets/audio/sfx_system_rebuild.mp3", choices: [], nextSceneId: "ending_sinkron_3"
    },
    ending_sinkron_3: {
        id: "ending_sinkron_3", characterName: "Sara", characterSprite: "assets/images/sprite_sara_smile_bright.png",
        dialogueText: "Arka... kau berhasil! NusaNet terlahir kembali! Arsip sejarah aman! Dan aku... aku masih di sini!\n\nKau tahu apa artinya ini? Sejarah dan masa depan bisa hidup berdampingan. Tidak harus saling menghancurkan.",
        expression: "normal", bgImage: "assets/images/bg_nusanet_reborn.png",
        bgm: "assets/audio/bgm_true_ending_triumphant.mp3", sfx: "assets/audio/sfx_sparkle_cascade.mp3", choices: [], nextSceneId: "ending_sinkron_final"
    },
    ending_sinkron_final: {
        id: "ending_sinkron_final", characterName: "", characterSprite: "",
        dialogueText: "— AKHIR SEJATI: SINKRONISASI SEMPURNA —\n\n\"Ketika sejarah dan masa depan bersatu dalam harmoni, sebuah bangsa menemukan jati dirinya kembali.\"\n\nKeesokan paginya, Arka melihat matahari terbit yang sangat indah di atas langit Jakarta. Harapan baru bagi dunia nyata dan dunia digital yang kini hidup berdampingan.\n\nDi layar HP-nya, Sara tersenyum. Bukan senyum sedih. Bukan senyum bersalah. Tapi senyum penuh harapan.\n\n\"Selamat pagi, Arka. Ini hari pertama dari dunia yang baru.\"\n\n— Gema dari NusaNet —",
        expression: "normal", bgImage: "assets/images/cg_arka_victorious.png",
        bgm: "assets/audio/bgm_dawn_strings.mp3", sfx: "assets/audio/sfx_bird_chirp.mp3", choices: [], nextSceneId: ""
    }
};
