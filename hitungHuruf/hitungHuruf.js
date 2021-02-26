const countFrequent = (data) => {
  let newData = data.split("\n").join()

  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  }

  for(let i = 0; i < newData.length; i++) {
    obj[newData[i].toLowerCase()]++
  }
  return obj
}

let data = `Inspira(k)si, Kemilau Perayaan HUT ke-50 Kompas
Perjalanan penuh kisah milik bangsa Indonesia dan dunia dalam kurun waktu setengah abad ini telah terabadikan. Pada 28 Juni 2015, usia 50 tahun dicapai oleh harian umum yang didirikan PK Ojong (1920â€“1980) dan Jakob Oetama ini. Usia emas menjadi pertanda harian ini mampu terus hadir menemani langkah-langkah Indonesia untuk terus menginspirasi dan menjadi Amanat Hati Nurani Rakyat.
Dalam rangka merayakan usia 50 tahun ini, Kompas mengadakan acara Inspira(k)si. Acara ini mencakup berbagai macam program, yaitu Inspi Baca, Inspi Kendara, Inspi Sinema, Inspi Rasa, Inspi Rehat, dan Inspi Vision. Untuk dapat turut serta dalam program-program tersebut, pembaca Kompas bisa memanfaatkan kupon-kupon yang ada di koran ini pada edisi 28 Juni.
Berbagai promosi menarik di tiap Inspi dapat dinikmati dengan menyertakan koran Kompas dan memiliki kartu Flazz BCA atau Mandiri e-money. Inspi Baca mempersembahkan potongan harga senilai Rp 50.000. Inspi Rasa, Inspi Rehat, dan Inspi Vision menghadirkan diskon 50 persen. Sementara itu, pembaca Kompas juga dapat menikmati Inspi Kendara naik Transjakarta serta Inspi Cinema dengan menonton film Terminator dan Minions di beberapa studio Bioskop XXI hanya dengan Rp 50.
Puncak acara Inspira(k)si digelar di Plaza Selatan, Gelora Bung Karno, Jakarta, melalui Inspi Rasa. Mulai Pasar Subuh yang berlangsung pukul 05.00-10.00, dilanjutkan pada pukul 10.00â€“22.00 dengan bazar kuliner untuk berbuka puasa dan produk-produk industri kreatif. Acara makin meriah dengan gelaran Ramadhan Jazz yang menghadirkan musisi Jazz Tanah Air, yaitu Tompi, MawarDirie (Iga Mawarni, Dian HP, Rieka Roslan, dan Troubadours Band), Endah n Resha, Iwan Abdhi, The Groove, dan Kunto Aji.
Rieka menyampaikan harapannya untuk Kompas, â€œSemoga Kompas dapat terus menjadi surat kabar yang memberikan inspirasi. Karena dari aku kecil, ayahku sering menyuruh aku untuk baca Kompas. Hingga akhirnya menjadi terbiasa sampai aku dewasa. Kata bapakku, baca Kompas agar kamu bisa menjadi musisi yang tidak sekadar bisa menyanyi. Aku merasakan manfaatnya, misalnya saja ketika berada di panggung pun aku jadi punya bahan untuk di-obrolin karena aku mengikuti perkembangan dunia ekonomi, politik, dan sosial yang terjadi. Di mana hal ini penting.â€
Ia menambahkan, Kompas menjadi media yang konsisten dan memberikan lahan yang cukup besar untuk menginformasikan budaya Indonesia. â€œIni bagus karena dapat memberikan inspirasi bagi masyarakat Indonesia, khususnya generasi muda untuk makin mencintai Indonesia. Tanpa budaya, saya kira kita bukan apa-apa.â€
Lintas generasi
Sebagai harian umum yang telah berusia 50 tahun, Kompas tetap berupaya agar generasi muda juga dapat terus mengenal dan membaca Kompas. Penyanyi Kunto Aji mengapresiasi acara yang dihelat Kompas ini.
Ini merupakan acara yang bagus dan menarik sekali. Saya mengucapkan selamat ulang tahun, Kompas. Semoga dengan usia 50, Kompas semakin emas di industri media. Terus menjadi media yang obyektif, netral, jadi acuan bagi para pembaca, dan tepercaya,â€ ujar Kunto yang terkenal dengan lagu â€œTerlalu Lama Sendiriâ€.
Para pengunjung Inspi Rasa, contohnya Ana (60) dari Rawamangun, mengatakan, dirinya memang sudah merencanakan jauh-jauh hari untuk ikut serta memeriahkan ulang tahun Kompas. Saya datang ke area Inspi Rasa bersama keluarga. Dapat informasi tentang acara ini dari iklan di Kompas. Setelah pulang dari beribadah pukul 10, langsung meluncur ke sini. Saya sudah lama berlangganan koran ini. Kompas memberikan informasi berita yang berkualitas dan dapat menjadi referensi yang bagus.
Selain Ana, kemeriahan ulang tahun Kompas juga dirasakan oleh Kartika (21) dan Tari (20), warga Kebon Jeruk, Jakarta. Menurut mereka, perayaan pesta emas Kompas terasa sangat menyenangkan.
Di Inspi Rasa, mereka sangat menantikan penampilan Endah n Resha dan Kunto Aji. Mereka berharap agar Kompas dapat terus hadir menemani Indonesia dan memberikan inspirasi bagi generasi muda untuk berprestasi.`


console.log(countFrequent(data))
