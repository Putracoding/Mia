export interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
  category: 'hati' | 'kehidupan' | 'motivasi';
  image: string;
}

export const poems: Poem[] = [
  {
    id: '1',
    title: 'Gema di Relung Hati',
    author: 'Antologi',
    category: 'hati',
    image: 'https://picsum.photos/seed/warm-heart/800/600',
    content: `Di kedalaman sunyi, namamu berbisik,
Bagaikan embun yang menyentuh kelopak mawar.
Bukan sekadar kata, namun getaran yang pelik,
Membawa rindu yang tak kunjung memudar.

Aku adalah sajak yang kehilangan rima,
Hingga senyummu datang memberi makna.
Cukup satu tatapan, dunia terasa berbeda,
Dalam dekap hangat yang tak berujung fana.`
  },
  {
    id: '2',
    title: 'Liku Jejak Kehidupan',
    author: 'Antologi',
    category: 'kehidupan',
    image: 'https://picsum.photos/seed/nature-life/800/600',
    content: `Kehidupan adalah sungai yang mengalir deras,
Melintasi bebatuan tajam dan lembah yang luas.
Kadang bening mencerminkan langit yang cerah,
Kadang keruh membawa lelah dan amarah.

Namun lihatlah pohon yang tegak berdiri,
Ia tak mengeluh pada badai yang menghampiri.
Akar yang kuat adalah bukti dari kesabaran,
Bahwa tumbuh memerlukan waktu dan pengorbanan.`
  },
  {
    id: '3',
    title: 'Bangkit dari Debu',
    author: 'Antologi',
    category: 'motivasi',
    image: 'https://picsum.photos/seed/sunrise-climb/800/600',
    content: `Jangan berhenti saat kakimu mulai letih,
Lihatlah mentari yang tak pernah ingkar janji.
Kegelapan hanyalah tirai sebelum benderang,
Dan kegagalan adalah guru bagi sang pemenang.

Kepakkan sayapmu meski diterpa angin kencang,
Sebab langit milik mereka yang berani terbang.
Setiap tetes keringat adalah benih kejayaan,
Yang kelak akan kau tuai dalam senyum kemenangan.`
  },
  {
    id: '4',
    title: 'Surat Untuk Diri',
    author: 'Antologi',
    category: 'kehidupan',
    image: 'https://picsum.photos/seed/old-paper/800/600',
    content: `Wahai jiwa yang seringkali ragu,
Dunia ini memang tempat yang tak menentu.
Jangan biarkan bisingnya orang luar,
Membuat nyala apimu perlahan memudar.

Kau adalah mahakarya yang sedang dipahat,
Melalui setiap duka dan tawa yang lekat.
Beristirahatlah jika lelah, namun jangan menyerah,
Eksistensimu adalah keindahan yang paling megah.`
  },
  {
    id: '5',
    title: 'Rindu yang Menetap',
    author: 'Antologi',
    category: 'hati',
    image: 'https://picsum.photos/seed/soft-flowers/800/600',
    content: `Ada rindu yang tak sempat terucap,
Hanya bersembunyi di balik kelopak mata yang lelap.
Ia seperti aroma tanah setelah hujan turun,
Menenangkan sekaligus menyisakan jejak yang beruntun.

Jika jarak adalah penjara bagi raga kita,
Maka doa adalah sayap bagi jiwa yang bercinta.
Bertemu dalam mimpi, bersatu dalam rasa,
Hingga waktu mempertemukan kita lebih selamanya.`
  }
];
