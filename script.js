const gombalanList = [
    "Kamu masih ingat nggak awal awal kita jalan,saat itu aku habis jatuh dari motor.",
    "dulu saat ujian kita sharing sharing jawaban,kamu masih ingat nggak.",
    "kamu masih ingat nggak kejadian di kaliwiro sehabis kamu nyoba menyetir motor.",
    "aku harap kamu tidak melupakanku saat sudah bekerja nanti.",
    "sebenernya aku lagi kangen kamu hehe :)."
];

document.getElementById('gombalan-btn').addEventListener('click', function() {
    // Ambil gombalan secara acak dari array
    const randomGombal = gombalanList[Math.floor(Math.random() * gombalanList.length)];

    const gombalOutput = document.getElementById('gombalOutput');
    gombalOutput.textContent = randomGombal;

    // Tampilkan gombalan dengan efek transisi
    gombalOutput.classList.add('visible');
});
