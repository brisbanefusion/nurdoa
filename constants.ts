
import { Dua } from './types';

export const COMMON_DUAS: Dua[] = [
  // HADIS 40 (ARBA'IN NAWAWI)
  {
    id: 'hadis1',
    title: 'Hadis 1: Niat & Ikhlas',
    category: 'Hadis',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَو امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
    translation: 'Sesungguhnya amal itu bergantung pada niat, dan setiap orang hanya akan mendapat apa yang dia niatkan. Sesiapa yang hijrahnya kerana Allah dan Rasul-Nya, maka hijrahnya itu kepada Allah dan Rasul-Nya. Sesiapa yang hijrahnya kerana habuan dunia atau untuk mengahwini wanita, maka hijrahnya adalah kepada apa yang dia tuju.',
    benefit: 'Paksi keikhlasan dalam setiap perbuatan.'
  },
  {
    id: 'hadis2',
    title: 'Hadis 2: Islam, Iman & Ihsan',
    category: 'Hadis',
    arabic: 'فَأَخْبِرْنِي عَنِ الإِيمَانِ، قَالَ: أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ',
    translation: 'Khabarkan kepadaku tentang Iman. Baginda menjawab: Bahawa kamu beriman kepada Allah, malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari kiamat, dan kamu beriman kepada takdir yang baik dan yang buruk.',
    benefit: 'Rumusan seluruh intipati ajaran Islam.'
  },
  {
    id: 'hadis3',
    title: 'Hadis 3: Rukun Islam',
    category: 'Hadis',
    arabic: 'بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ',
    translation: 'Islam dibina atas lima perkara: Syahadah, Solat, Zakat, Haji, dan Puasa Ramadan.',
    benefit: 'Asas praktikal identiti seorang Muslim.'
  },
  {
    id: 'hadis4',
    title: 'Hadis 4: Penciptaan Manusia',
    category: 'Hadis',
    arabic: 'إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ',
    translation: 'Sesungguhnya setiap kamu dikumpulkan penciptaannya dalam perut ibunya selama 40 hari sebagai nutfah (air mani), kemudian menjadi segumpal darah selama tempoh yang sama, kemudian menjadi segumpal daging selama tempoh yang sama, kemudian diutuskan kepadanya malaikat lalu ditiupkan roh padanya, dan diperintahkan dengan empat ketetapan: rezekinya, ajalnya, amalannya, dan sama ada dia celaka atau bahagia.',
    benefit: 'Mengenal proses kehidupan dan ketetapan takdir Allah.'
  },
  {
    id: 'hadis5',
    title: 'Hadis 5: Larangan Perkara Baru (Bid’ah)',
    category: 'Hadis',
    arabic: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ',
    translation: 'Sesiapa yang mengadakan perkara baru dalam urusan agama kami ini yang bukan daripadanya, maka ia tertolak.',
    benefit: 'Kepentingan mengikut sunnah yang sahih.'
  },
  {
    id: 'hadis6',
    title: 'Hadis 6: Meninggalkan Syubhat',
    category: 'Hadis',
    arabic: 'إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ...',
    translation: 'Sesungguhnya yang halal itu jelas dan yang haram itu jelas. Antara keduanya terdapat perkara-perkara syubhat yang tidak diketahui oleh orang ramai. Sesiapa mengelak syubhat, dia menyelamatkan agama dan kehormatannya. Sesiapa yang jatuh ke dalam syubhat, seumpama pengembala di pinggir kawasan larangan...',
    benefit: 'Menjaga kesucian hati dan agama dengan menjauhi keraguan.'
  },
  {
    id: 'hadis7',
    title: 'Hadis 7: Agama Itu Nasihat',
    category: 'Hadis',
    arabic: 'الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ',
    translation: 'Agama itu adalah nasihat. Kami bertanya: Untuk siapa? Baginda menjawab: Untuk Allah, Kitab-Nya, Rasul-Nya, para pemimpin umat Islam, dan umat Islam seluruhnya.',
    benefit: 'Kepentingan saling menasihati demi kebaikan ummah.'
  },
  {
    id: 'hadis8',
    title: 'Hadis 8: Kehormatan Muslim',
    category: 'Hadis',
    arabic: 'أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى',
    translation: 'Aku diperintahkan memerangi manusia sehingga mereka bersaksi tiada tuhan melainkan Allah dan Muhammad utusan Allah, mendirikan solat, dan mengeluarkan zakat. Jika mereka melakukannya, darah dan harta mereka terpelihara dariku, melainkan hak Islam, dan hisab mereka terserah kepada Allah.',
    benefit: 'Menjaga darah dan harta seorang Muslim yang beriman.'
  },
  {
    id: 'hadis9',
    title: 'Hadis 9: Melaksanakan Mengikut Kemampuan',
    category: 'Hadis',
    arabic: 'مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ',
    translation: 'Apa yang aku larang, jauhilah ia. Apa yang aku suruh, lakukanlah sekadar kemampuanmu. Sesungguhnya apa yang membinasakan umat sebelum kamu adalah kerana mereka banyak bertanya dan menyalahi nabi-nabi mereka.',
    benefit: 'Islam tidak membebankan umatnya di luar kemampuan.'
  },
  {
    id: 'hadis10',
    title: 'Hadis 10: Rezeki Yang Halal',
    category: 'Hadis',
    arabic: 'إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ، فَقَالَ تَعَالَى: يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا',
    translation: 'Sesungguhnya Allah itu baik, Dia tidak menerima melainkan yang baik. Sesungguhnya Allah memerintahkan orang beriman sama seperti apa yang Dia perintahkan kepada para rasul. Firman-Nya: Wahai para rasul, makanlah dari yang baik-baik dan beramallah dengan soleh.',
    benefit: 'Rezeki yang halal menjadi syarat doa dimakbulkan.'
  },
  {
    id: 'hadis11',
    title: 'Hadis 11: Tinggalkan Keraguan',
    category: 'Hadis',
    arabic: 'دَعْ مَا يَرِيبُكَ إِلَى مَا لا يَرِيبُكَ',
    translation: 'Tinggalkanlah apa yang meragukanmu kepada apa yang tidak meragukanmu.',
    benefit: 'Mencapai ketenangan dengan kepastian hukum.'
  },
  {
    id: 'hadis12',
    title: 'Hadis 12: Meninggalkan Yang Sia-sia',
    category: 'Hadis',
    arabic: 'مِنْ حُسْنِ إِسْلامِ الْمَرْءِ تَرْكُهُ مَا لا يَعْنِيهِ',
    translation: 'Antara tanda keelokan Islam seseorang itu ialah dia meninggalkan apa yang tidak berkaitan dengannya.',
    benefit: 'Fokus kepada perkara yang memberi manfaat dunia dan akhirat.'
  },
  {
    id: 'hadis13',
    title: 'Hadis 13: Mencintai Saudara',
    category: 'Hadis',
    arabic: 'لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    translation: 'Tidak beriman (sempurna) seseorang kamu sehingga dia mencintai saudaranya seperti dia mencintai dirinya sendiri.',
    benefit: 'Asas persaudaraan dan kasih sayang dalam Islam.'
  },
  {
    id: 'hadis14',
    title: 'Hadis 14: Larangan Menumpahkan Darah',
    category: 'Hadis',
    arabic: 'لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ',
    translation: 'Tidak halal darah seorang Muslim yang bersaksi bahawa tiada tuhan melainkan Allah dan aku pesuruh Allah melainkan dengan salah satu dari tiga sebab: Penzina yang pernah berkahwin, nyawa dibalas nyawa (qisas), dan orang yang meninggalkan agamanya lalu memisahkan diri dari jemaah umat Islam.',
    benefit: 'Ketinggian nilai nyawa seorang Muslim.'
  },
  {
    id: 'hadis15',
    title: 'Hadis 15: Berkata Baik atau Diam',
    category: 'Hadis',
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ',
    translation: 'Sesiapa yang beriman kepada Allah dan hari akhirat, berkatalah yang baik atau diam. Sesiapa yang beriman kepada Allah dan hari akhirat, muliakanlah jirannya. Sesiapa yang beriman kepada Allah dan hari akhirat, muliakanlah tetamunya.',
    benefit: 'Adab lidah dan memuliakan tetamu serta jiran.'
  },
  {
    id: 'hadis16',
    title: 'Hadis 16: Jangan Marah',
    category: 'Hadis',
    arabic: 'لا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لا تَغْضَبْ',
    translation: 'Janganlah kamu marah. Baginda mengulangi pesanan itu berkali-kali: Jangan marah.',
    benefit: 'Kawalan emosi adalah kunci akhlak yang mulia.'
  },
  {
    id: 'hadis17',
    title: 'Hadis 17: Berbuat Ihsan (Terbaik)',
    category: 'Hadis',
    arabic: 'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ',
    translation: 'Sesungguhnya Allah mewajibkan ihsan dalam semua perkara. Jika kamu membunuh, bunuhlah dengan cara yang paling baik. Jika kamu menyembelih, sembelihlah dengan cara yang paling baik. Hendaklah setiap kamu menajamkan pisaunya dan merehatkan sembelihannya.',
    benefit: 'Melakukan tugasan dengan kualiti terbaik, termasuk saat menyembelih haiwan.'
  },
  {
    id: 'hadis18',
    title: 'Hadis 18: Bertakwa Di Mana Sahaja',
    category: 'Hadis',
    arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
    translation: 'Bertakwalah kepada Allah di mana sahaja kamu berada, iringilah kejahatan dengan kebaikan nescaya kebaikan itu akan memadamkannya, dan bergaullah sesama manusia dengan akhlak yang mulia.',
    benefit: 'Kebaikan dapat menghapuskan dosa-dosa kecil.'
  },
  {
    id: 'hadis19',
    title: 'Hadis 19: Pesanan Kepada Ibnu Abbas',
    category: 'Hadis',
    arabic: 'يَا غُلَامُ، إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ',
    translation: 'Wahai budak, aku ajarkan kepadamu beberapa kalimat: Jagalah (hak) Allah, nescaya Allah akan menjagamu. Jagalah (hak) Allah, nescaya engkau mendapati-Nya di hadapanmu. Jika engkau meminta, mintalah kepada Allah. Jika engkau memohon pertolongan, mohonlah pertolongan kepada Allah.',
    benefit: 'Tawakal total hanya kepada Allah SWT.'
  },
  {
    id: 'hadis20',
    title: 'Hadis 20: Malu Sebahagian Iman',
    category: 'Hadis',
    arabic: 'إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ',
    translation: 'Jika kamu tidak malu, maka lakukanlah apa sahaja yang kamu mahu.',
    benefit: 'Sifat malu menghalang seseorang daripada melakukan maksiat.'
  },
  {
    id: 'hadis21',
    title: 'Hadis 21: Istiqamah',
    category: 'Hadis',
    arabic: 'قُلْ: آمَنْتُ بِاللَّهِ، ثُمَّ اسْتَقِمْ',
    translation: 'Katakanlah: Aku beriman kepada Allah, kemudian tetaplah teguh (istiqamah).',
    benefit: 'Kunci kejayaan iman adalah ketetapan hati.'
  },
  {
    id: 'hadis22',
    title: 'Hadis 22: Jalan Ke Syurga',
    category: 'Hadis',
    arabic: 'أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ',
    translation: 'Bagaimana pendapatmu jika aku menunaikan solat-solat fardu, berpuasa pada bulan Ramadan, menghalalkan yang halal, mengharamkan yang haram, dan aku tidak menambah sedikit pun atas hal itu, adakah aku akan masuk ke dalam syurga? Baginda menjawab: Ya.',
    benefit: 'Cukup dengan melaksanakan kewajipan untuk mendapat reda Allah.'
  },
  {
    id: 'hadis23',
    title: 'Hadis 23: Kesucian & Solat',
    category: 'Hadis',
    arabic: 'الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآَنِ أَوْ تَمْلَأُ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ',
    translation: 'Bersuci itu separuh daripada iman, Alhamdulillah memenuhi timbangan (amal), Subhanallah dan Alhamdulillah kedua-duanya memenuhi ruang antara langit dan bumi. Solat itu cahaya, sedekah itu bukti, kesabaran itu sinaran.',
    benefit: 'Ganjaran zikir dan sabar dalam kehidupan.'
  },
  {
    id: 'hadis24',
    title: 'Hadis 24: Larangan Zalim',
    category: 'Hadis',
    arabic: 'يَا عِبَادِي، إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي، وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا، فَلَا تَظَالَمُوا',
    translation: 'Wahai hamba-hamba-Ku! Sesungguhnya Aku telah mengharamkan kezaliman ke atas diri-Ku, dan Aku telah menjadikannya haram di antara kamu, maka janganlah kamu saling menzalimi.',
    benefit: 'Allah Maha Adil dan benci akan kezaliman.'
  },
  {
    id: 'hadis25',
    title: 'Hadis 25: Keutamaan Zikir',
    category: 'Hadis',
    arabic: 'إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً، وَأَمْرٌ بِالْمَعْرُوفِ صَدَقَةٌ، وَنَهْيٌ عَنْ مُنْكَرٍ صَدَقَةٌ، وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ',
    translation: 'Sesungguhnya pada setiap tasbih (Subhanallah) itu sedekah, setiap takbir (Allahu Akbar) itu sedekah, setiap tahmid (Alhamdulillah) itu sedekah, setiap tahlil (La ilaha illallah) itu sedekah, menyuruh kepada kebaikan itu sedekah, mencegah kemungkaran itu sedekah, dan persetubuhan salah seorang daripada kamu (dengan isteri yang sah) juga sedekah.',
    benefit: 'Peluang mendapat pahala sedekah tanpa harta.'
  },
  {
    id: 'hadis26',
    title: 'Hadis 26: Sedekah Anggota Tubuh',
    category: 'Hadis',
    arabic: 'كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ، كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ: تَعْدِلُ بَيْنَ الِاثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيطُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ',
    translation: 'Setiap sendi manusia wajib bersedekah setiap hari matahari terbit: Mendamaikan dua orang yang bertelingkah adalah sedekah. Membantu seseorang menaiki kenderaannya atau mengangkatkan barangannya ke atas kenderaan adalah sedekah. Perkataan yang baik adalah sedekah. Setiap langkah ke tempat solat adalah sedekah. Membuang halangan dari jalan raya adalah sedekah.',
    benefit: 'Mendamaikan orang yang bertelingkah adalah sedekah.'
  },
  {
    id: 'hadis27',
    title: 'Hadis 27: Definisi Dosa',
    category: 'Hadis',
    arabic: 'الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ',
    translation: 'Kebaikan itu adalah akhlak yang mulia, dan dosa itu adalah apa yang meresahkan jiwamu dan engkau benci jika ia diketahui oleh manusia.',
    benefit: 'Hati nurani sebagai kompas kebenaran.'
  },
  {
    id: 'hadis28',
    title: 'Hadis 28: Berpegang Kepada Sunnah',
    category: 'Hadis',
    arabic: 'فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُورِ، فَإِنَّ كُلَّ بِدْعَةٍ ضَلَالَةٌ',
    translation: 'Hendaklah kamu berpegang teguh dengan sunnahku dan sunnah Khulafa ar-Rasyidin yang mendapat petunjuk. Gigitlah padanya dengan gigi gerahammu. Dan jauhilah perkara-perkara baru yang direka-reka (dalam agama), kerana setiap bid’ah itu adalah kesesatan.',
    benefit: 'Pedoman menghadapi perselisihan akhir zaman.'
  },
  {
    id: 'hadis29',
    title: 'Hadis 29: Pintu Kebaikan',
    category: 'Hadis',
    arabic: 'أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ مِنْ جَوْفِ اللَّيْلِ ثُمَّ تَلَا: تَتَجَافَى جُنُوبُهُمْ عَنِ الْمَضَاجِعِ',
    translation: 'Mahukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa itu adalah perisai. Sedekah itu memadamkan dosa seperti air yang memadamkan api. Dan solat seseorang pada pertengahan malam. Kemudian Baginda membaca firman Allah: "(Mereka yang bangun awal) lambung mereka jauh dari tempat tidur..."',
    benefit: 'Solat malam sebagai cahaya bagi mukmin.'
  },
  {
    id: 'hadis30',
    title: 'Hadis 30: Menjaga Hak Allah',
    category: 'Hadis',
    arabic: 'إِنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوا عَنْهَا',
    translation: 'Sesungguhnya Allah Taala telah mewajibkan fardu-fardu, maka janganlah kamu mensia-siakannya. Dia telah menetapkan batasan-batasan, maka janganlah kamu melampauinya. Dia telah mengharamkan beberapa perkara, maka janganlah kamu melanggarnya. Dan Dia mendiamkan (tidak menetapkan hukum) atas beberapa perkara, sebagai rahmat bagi kamu dan bukan kerana lupa, maka janganlah kamu mengkaji mengenainya.',
    benefit: 'Disiplin syariat dalam kehidupan.'
  },
  {
    id: 'hadis31',
    title: 'Hadis 31: Zuhud',
    category: 'Hadis',
    arabic: 'ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ',
    translation: 'Zuhudlah di dunia nescaya Allah mencintaimu, zuhudlah pada apa yang dimiliki manusia nescaya manusia mencintaimu.',
    benefit: 'Mencari reda Allah tanpa mengabaikan dunia.'
  },
  {
    id: 'hadis32',
    title: 'Hadis 32: Jangan Memudaratkan',
    category: 'Hadis',
    arabic: 'لا ضَرَرَ وَلا ضِرَارَ',
    translation: 'Tidak boleh memudaratkan diri sendiri dan tidak boleh memudaratkan orang lain.',
    benefit: 'Prinsip asas keselamatan dan harmoni sosial.'
  },
  {
    id: 'hadis33',
    title: 'Hadis 33: Bukti Bagi Pendakwa',
    category: 'Hadis',
    arabic: 'الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ',
    translation: 'Bukti wajib bagi yang mendakwa, dan sumpah bagi yang mengingkari.',
    benefit: 'Keadilan dalam perundangan Islam.'
  },
  {
    id: 'hadis34',
    title: 'Hadis 34: Mencegah Kemungkaran',
    category: 'Hadis',
    arabic: 'مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الإِيمَانِ',
    translation: 'Sesiapa di antara kalian yang melihat kemungkaran, hendaklah dia merubahnya dengan tangannya. Jika dia tidak mampu, maka dengan lisannya. Jika dia tidak mampu, maka dengan hatinya. Dan itu adalah selemah-lemah iman.',
    benefit: 'Tanggungjawab sosial setiap individu Muslim.'
  },
  {
    id: 'hadis35',
    title: 'Hadis 35: Hak Sesama Muslim',
    category: 'Hadis',
    arabic: 'لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا، وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا. الْمُسْلِمُ أَخُو الْمُسْلِمِ: لَا يَظْلِمُهُ، وَلَا يَخْذُلُهُ، وَلَا يَكْذِبُهُ، وَلَا يَحْقِرُهُ. التَّقْوَى هَاهُنَا – وَيُشِيرُ إِلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ – بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ. كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ، وَمَالُهُ، وَعِرْضُهُ',
    translation: 'Janganlah kamu saling mendengki, jangan saling menipu (dalam tawaran harga), jangan saling membenci, jangan saling membelakangi, dan janganlah sebahagian kamu berjual beli di atas jualan sebahagian yang lain. Jadilah kamu hamba-hamba Allah yang bersaudara. Seorang Muslim adalah saudara bagi Muslim yang lain: Dia tidak menzaliminya, tidak membiarkannya (tanpa pertolongan), tidak mendustainya, dan tidak merendah-rendahkannya. Takwa itu di sini – sambil Baginda menunjuk ke dadanya tiga kali – Cukuplah seseorang itu melakukan kejahatan apabila dia merendah-rendahkan saudaranya yang Muslim. Terhadap setiap Muslim, haram darahnya, hartanya, dan kehormatannya.',
    benefit: 'Muslim itu saudara bagi Muslim yang lain.'
  },
  {
    id: 'hadis36',
    title: 'Hadis 36: Membantu Kesulitan Saudara',
    category: 'Hadis',
    arabic: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ، يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا، سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ. وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ',
    translation: 'Sesiapa yang melepaskan satu kesusahan (kesedihan) seorang Mukmin di dunia, Allah akan melepaskan kesusahannya pada hari Kiamat. Sesiapa yang memudahkan urusan orang yang dalam kesukaran, Allah akan memudahkan urusannya di dunia dan di akhirat. Sesiapa yang menutup aib seorang Muslim, Allah akan menutup aibnya di dunia dan di akhirat. Dan Allah sentiasa memberikan pertolongan kepada hamba-Nya selagi hamba tersebut menolong saudaranya.',
    benefit: 'Ganjaran menuntut ilmu dan membantu orang lain.'
  },
  {
    id: 'hadis37',
    title: 'Hadis 37: Keadilan Allah',
    category: 'Hadis',
    arabic: 'إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ إِلَى أَضْعَافٍ كَثِيرَةٍ، وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً',
    translation: 'Sesungguhnya Allah telah menetapkan (menulis) kebaikan-kebaikan dan kejahatan-kejahatan, kemudian menerangkannya. Maka sesiapa yang berniat untuk melakukan satu kebaikan lalu dia tidak melakukannya, Allah menetapkan niat itu di sisi-Nya sebagai satu kebaikan yang sempurna. Dan jika dia berniat lalu dia melakukannya, Allah menetapkannya di sisi-Nya sebanyak sepuluh kebaikan, hingga tujuh ratus kali ganda, hingga gandaan yang banyak. Dan jika dia berniat untuk melakukan satu kejahatan lalu dia tidak melakukannya, Allah menetapkannya di sisi-Nya sebagai satu kebaikan yang sempurna. Dan jika dia berniat lalu melakukannya, Allah menetapkannya sebagai satu kejahatan sahaja.',
    benefit: 'Allah melipatgandakan pahala niat yang baik.'
  },
  {
    id: 'hadis38',
    title: 'Hadis 38: Wali Allah',
    category: 'Hadis',
    arabic: 'مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ، وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَإِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنِ اسْتَعَاذَنِي لَأُعِيذَنَّهُ',
    translation: 'Sesiapa yang memusuhi wali-Ku, maka Aku mengisytiharkan perang kepadanya. Tidak sanya hamba-Ku mendekatkan diri kepada-Ku dengan sesuatu yang lebih Aku cintai daripada apa yang Aku fardukan ke atasnya. Dan hamba-Ku terus-menerus mendekatkan diri kepada-Ku dengan amalan sunat sehingga Aku mencintainya. Apabila Aku mencintainya, jadilah Aku pendengaran yang dia gunakan untuk mendengar, penglihatan yang dia gunakan untuk melihat, tangan yang dia gunakan untuk memukul, dan kaki yang dia gunakan untuk berjalan. Jika dia meminta kepada-Ku, pasti Aku memberikannya. Jika dia memohon perlindungan-Ku, pasti Aku melindunginya.',
    benefit: 'Mendekatkan diri dengan ibadah nawafil (sunat).'
  },
  {
    id: 'hadis39',
    title: 'Hadis 39: Kemaafan Allah',
    category: 'Hadis',
    arabic: 'إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ، وَالنِّسْيَانَ، وَمَا اسْتُكْرِهُوا عَلَيْهِ',
    translation: 'Sesungguhnya Allah melampaui (memaafkan) bagi pihakku, dari umatku: Kesalahan (tidak sengaja), terlupa, dan apa yang dipaksa ke atas mereka.',
    benefit: 'Rahmat Allah yang luas dalam hukum-hakam.'
  },
  {
    id: 'hadis40',
    title: 'Hadis 40: Hiduplah Seperti Pengembara',
    category: 'Hadis',
    arabic: 'أَخَذَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِمَنْكِبِي فَقَالَ: كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',
    translation: 'Rasulullah SAW memegang bahuku lalu bersabda: "Hiduplah kamu di dunia ini seolah-olah kamu seorang perantau atau pengembara yang singgah dalam perjalanan (singgah sebentar sahaja).',
    benefit: 'Persediaan menghadapi kematian dan hari akhirat.'
  },

  // WAJIB & SUNAT (PRESERVED)
  {
    id: '1',
    title: 'Pembukaan Doa (Tahmid & Selawat)',
    category: 'Wajib',
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ. اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ.',
    translation: 'Segala puji bagi Allah Tuhan sekalian alam, pujian yang mensyukuri nikmat-Nya dan menandingi kelebihan-Nya. Wahai Tuhan kami, bagi-Mu segala kepujian sebagaimana selayaknya bagi kebesaran zat-Mu dan keagungan kekuasaan-Mu. Ya Allah, selawat dan salam ke atas junjungan kami Nabi Muhammad serta ke atas keluarga Baginda.',
    benefit: 'Adab memulakan doa.'
  },
  {
    id: 'parent1',
    title: 'Doa Untuk Ibu Bapa',
    category: 'Wajib',
    arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    translation: 'Wahai Tuhanku! Ampunilah dosaku dan dosa kedua ibu bapaku, dan kasihanilah mereka sebagaimana mereka mengasuhku ketika aku kecil.',
    benefit: 'Kewajipan berbakti kepada orang tua.'
  },
  {
    id: 'heart1',
    title: 'Doa Ketetapan Hati (Ya Muqallibal Qulub)',
    category: 'Sunat',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    translation: 'Wahai Tuhan yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.',
    benefit: 'Memohon istiqamah dalam iman.'
  },
  {
    id: 'shifa1',
    title: 'Doa Memohon Kesembuhan (Syifa)',
    category: 'Sunat',
    arabic: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
    translation: 'Hilangkanlah kesakitan wahai Tuhan manusia, sembuhkanlah kerana Engkaulah Maha Penyembuh, tiada kesembuhan melainkan kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan sebarang penyakit.',
    benefit: 'Dibaca untuk kesembuhan penyakit.'
  },
  {
    id: 'debt1',
    title: 'Doa Elak Hutang & Kesedihan',
    category: 'Sunat',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْبُخْلِ وَالْجُبْنِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    translation: 'Ya Allah, aku berlindung dengan-Mu dari keluh kesah dan kesedihan, dan aku berlindung dengan-Mu dari kelemahan dan sifat malas, dan aku berlindung dengan-Mu dari sifat bakhil dan pengecut, dan aku berlindung dengan-Mu dari cengkaman hutang dan penindasan manusia.',
    benefit: 'Memudahkan urusan rezeki dan kelapangan dada.'
  },
  {
    id: 'light1',
    title: 'Doa Penerang Hati (Rabbi Syrahli)',
    category: 'Sunat',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
    translation: 'Wahai Tuhanku, lapangkanlah bagiku dadaku, dan mudahkanlah bagiku urusanku, dan rungkaikanlah kekakuan dari lidahku, supaya mereka faham perkataanku.',
    benefit: 'Kekuatan dalam berhujah dan peperiksaan.'
  },
  {
    id: 'r3',
    title: 'Doa Taubat (Rabbana Dhalamma)',
    category: 'Wajib',
    arabic: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    translation: 'Wahai Tuhan kami, kami telah menganiaya diri kami sendiri, dan kalau Engkau tidak mengampunkan kami dan memberi rahmat kepada kami, nescaya menjadilah kami dari orang-orang yang rugi.',
    benefit: 'Asas permohonan ampun kepada Allah.'
  },
  {
    id: '3',
    title: 'Doa Kebaikan Dunia & Akhirat (Rabbana Atina)',
    category: 'Wajib',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translation: 'Wahai Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami daripada azab api neraka.',
    benefit: 'Doa sapujagat paling lengkap.'
  },

  // PAGI
  {
    id: 'p1',
    title: 'Doa Perlindungan Pagi (Bismillahilladhi)',
    category: 'Pagi',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translation: 'Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang dapat memberi kemudaratan di bumi mahupun di langit, dan Dialah Yang Maha Mendengar lagi Maha Mengetahui.',
    benefit: 'Pelindung dari bahaya pagi dan petang.'
  },
  {
    id: 'p2',
    title: 'Doa Memohon Rezeki & Ilmu (Pagi)',
    category: 'Pagi',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا...',
    translation: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat...',
    benefit: 'Permulaan hari yang berkat.'
  },
  {
    id: 'p3',
    title: 'Sayyidul Istighfar (Penghulu Istighfar)',
    category: 'Pagi',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ...',
    translation: 'Ya Allah, Engkau Tuhanku, tiada Tuhan melainkan Engkau...',
    benefit: 'Jaminan syurga bagi yang membacanya dengan yakin.'
  },

  // HARIAN
  {
    id: 'h1',
    title: 'Doa Bangun Tidur',
    category: 'Harian',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    translation: 'Segala puji bagi Allah yang telah menghidupkan kami selepas mematikan (menidurkan) kami, dan kepada-Nya lah tempat kembali.',
    benefit: 'Syukur atas peluang hidup baru.'
  },
  {
    id: 'eat1',
    title: 'Doa Sebelum Makan',
    category: 'Harian',
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
    translation: 'Ya Allah, berkatilah kami pada apa yang Engkau rezekikan kepada kami, dan peliharalah kami dari azab neraka.',
    benefit: 'Keberkatan dalam makanan.'
  },
  {
    id: 'eat2',
    title: 'Doa Selepas Makan',
    category: 'Harian',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    translation: 'Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami dari kalangan orang-orang Islam.',
    benefit: 'Syukur nikmat kenyang.'
  },
  {
    id: 'h7',
    title: 'Doa Keluar Rumah',
    category: 'Harian',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    translation: 'Dengan nama Allah, aku bertawakal kepada Allah, dan tiada daya serta kekuatan melainkan dengan pertolongan Allah.',
    benefit: 'Perlindungan luar rumah.'
  },
  {
    id: 'travel1',
    title: 'Doa Naik Kenderaan',
    category: 'Harian',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    translation: 'Maha Suci Tuhan yang telah memudahkan kenderaan ini bagi kami, sedang kami sebelum ini tidak terdaya menguasainya, dan sesungguhnya kepada Tuhan kamilah, kami akan kembali.',
    benefit: 'Keselamatan dalam perjalanan.'
  },
  {
    id: 'dress1',
    title: 'Doa Memakai Pakaian',
    category: 'Harian',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    translation: 'Segala puji bagi Allah yang telah memakaikan aku pakaian ini dan merezekikannya kepadaku tanpa sebarang daya dan kekuatan dariku.',
    benefit: 'Menutup aurat dengan syukur.'
  },
  {
    id: 'masjid1',
    title: 'Doa Masuk Masjid',
    category: 'Harian',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    translation: 'Ya Allah, bukakanlah bagiku pintu-pintu rahmat-Mu.',
    benefit: 'Memasuki rumah Allah.'
  },
  {
    id: 'masjid2',
    title: 'Doa Keluar Masjid',
    category: 'Harian',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    translation: 'Ya Allah, sesungguhnya aku memohon kepada-Mu kurniaan-Mu.',
    benefit: 'Kembali ke urusan dunia.'
  },
  {
    id: 'toilet1',
    title: 'Doa Masuk Tandas',
    category: 'Harian',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    translation: 'Ya Allah, aku berlindung daripada syaitan jantan dan betina.',
    benefit: 'Perlindungan tempat kotor.'
  },
  {
    id: 'toilet2',
    title: 'Doa Keluar Tandas',
    category: 'Harian',
    arabic: 'غُفْرَانَكَ. الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي',
    translation: 'Aku memohon keampunan-Mu. Segala puji bagi Allah yang menghilangkan kotoran (penyakit) daripadaku dan menyelamatkanku.',
    benefit: 'Syukur atas kesihatan tubuh.'
  },
  {
    id: 'azan1',
    title: 'Doa Selepas Azan',
    category: 'Harian',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ...',
    translation: 'Ya Allah, Tuhan bagi seruan yang sempurna ini...',
    benefit: 'Mendapat syafaat Nabi SAW.'
  },

  // RAMADAN
  {
    id: 'ram0',
    title: 'Niat Puasa Ramadan',
    category: 'Ramadan',
    arabic: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى',
    translation: 'Sahaja aku puasa esok hari bagi menunaikan fardu Ramadan tahun ini kerana Allah Taala.',
    benefit: 'Rukun puasa utama.'
  },
  {
    id: 'ram3',
    title: 'Doa Berbuka Puasa',
    category: 'Ramadan',
    arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ',
    translation: 'Ya Allah, bagi-Mu aku berpuasa, dan dengan-Mu aku beriman, dan atas rezeki-Mu aku berbuka puasa, dengan rahmat-Mu wahai Yang Maha Pengasih lagi Maha Penyayang.',
    benefit: 'Waktu mustajab doa.'
  },
  {
    id: 'ram_tarawih',
    title: 'Doa Kamilin (Selepas Solat Tarawih)',
    category: 'Ramadan',
    arabic: 'اللَّهُمَّ اجْعَلْنَا بِالْإِيمَانِ كَامِلِينَ...',
    translation: 'Ya Allah, jadikanlah kami orang yang sempurna imannya...',
    benefit: 'Penyempurna ibadah malam Ramadan.'
  },
  {
    id: 'ram_witir',
    title: 'Doa Selepas Solat Witir',
    category: 'Ramadan',
    arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ إِيمَانًا دَائِمًا...',
    translation: 'Ya Allah, kami memohon kepada-Mu iman yang berkekalan...',
    benefit: 'Ketenangan selepas solat penutup.'
  },

  // ZIKIR
  {
    id: 'z1',
    title: 'Zikir Subhanallah',
    category: 'Zikir',
    arabic: 'سُبْحَانَ اللَّهِ',
    translation: 'Maha Suci Allah.',
    benefit: 'Pembersih dosa seluas lautan.'
  },
  {
    id: 'z2',
    title: 'Zikir Alhamdulillah',
    category: 'Zikir',
    arabic: 'الْحَمْدُ لِلَّهِ',
    translation: 'Segala puji bagi Allah.',
    benefit: 'Memenuhi timbangan amal.'
  },
  {
    id: 'z4',
    title: 'Zikir Lailahaillallah',
    category: 'Zikir',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ',
    translation: 'Tiada Tuhan melainkan Allah.',
    benefit: 'Kunci syurga.'
  }
];
