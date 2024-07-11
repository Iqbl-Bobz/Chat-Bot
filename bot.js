const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0;

const botSay = (data) => {
    return [

        "Halo, Perkenalkan saya Chat Bot, anda siapa ?",
        `Haloo ${data?.nama}, usia ${data?.nama} berapa yaa ?`,
        `Owhhh ${data?.usia} sama dong, emang lahir bulan apa? `,
        `Owhh bulan ${data?.bulan}, kalau Hobi Kamu apa yaa? `,
        `Wawww sama jugaa, aku juga hobinya ${data?.hobi}. Cita cita Kamu apa ?`,
        `Owhh pengen jadi ${data?.cita}. Kalo udah lulus sekolah kira kira mau kemana, 
        kuliah atau kerja atau nganggur atau ngapain ?`,
        `Owhhh ${data?.lulus}, Ngomong-ngomong Kamu punya mantan berapa ? `,
        `Widihh punya ${data?.mantan},lumayann banyakk juga yaa😁. Ywdh, kalau gitu udahan dulu yaa😗`,

    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("ISI JAWABAN DULU")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ bulan: jawaban.value })
    } else if (init === 4) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 5) {
        botDelay({ cita: jawaban.value })
    } else if (init === 6) {
        botDelay({ lulus: jawaban.value })
    } else if (init === 7) {
        botDelay({ mantan: jawaban.value })
    } else if (init === 8) {
        finsihing()
    }
    else {
        botEnd()

    }

}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(10px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finsihing() {
    pertanyaan.innerHTML = `Makasih banyakk yaa ${userData[0]} udah ngejawab 😄, lain kali kita ${userData[3]} bareng yaa🤗!`
    jawaban.value = "Iyaa sama-samaa, okeee😙"
}

function botEnd() {
    alert(`Makasihh ${userData[0]} udah ngejawabb, sekarang ${userData[0]} akan diarahkan ke halaman utama lagi, Dadahhhhh👋`)
    window.location.reload()

}

