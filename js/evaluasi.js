//inisiasi soal dalam quiz
const questions = [
    {
        question: "Perhatikan proses dalam gametogenesis berikut ! <br>1) Spermatosit primer membelah menjadi spermatosit sekunder. <br>2) Spermatogonium menjadi spermatosit primer. <br>3) Terbentuk badan kutub primer dari oosit primer. <br>4) Oosit primer membelah menjadi oosit sekunder. <br>5) Ongonium menjadi oosit primer. <br> Proses pembelahan sel yang terjadi secara mitosis ditunjukkan oleh angka. . . . ",
        optionA: "1) dan 2)",
        optionB: "1) dan 3)",
        optionC: "3) dan 4)",
        optionD: "2) dan 5)",
        correctOption: "optionD"
    },

    {
        question: "Sebuah sel yang terdapat di testis memiliki jumish kromosom setengah dan jumlah kromosom (n) sel induknya dan masing-masing kromosom terdiri atas empat lengan. Sel tersebut adalah . . . . ",
        optionA: "Spermatid",
        optionB: "Spermatosit",
        optionC: "Spermatozoa",
        optionD: "Spermatosit sekunder",
        correctOption: "optionD"
    },

    {
        question: "Jika terdapat 20 sel induk mikrospora yang mengalami pembelahan meiosis, serbuk sari yang dihasilkan sebanyak. . . . .",
        optionA: "80 butir",
        optionB: "60 butir",
        optionC: "40 butir",
        optionD: "20 butir",
        correctOption: "optionA"
    },

    {
        question: "Pernyataan yang benar sehubungan dengan oogenesis yaitu. . . .",
        optionA: "Ootid adalah sel induk ovum",
        optionB: "Oosit sekunder bersifat haploid",
        optionC: "Oogonium tumbuh membesar membentuk ootid",
        optionD: "Ovum merupakan hasil perkembangan oosit primer",
        correctOption: "optionB"
    },

    {
        question: "Pada proses spermatogenesis, sel yang bersifat diploid adalah. . . . . ",
        optionA: "Spermatogonium dan spermatid",
        optionB: "Spermatosit primer dan spermatid",
        optionC: "Spermatogonium dan spermatosit primer",
        optionD: "Spermatosit sekunder dan spermatid",
        correctOption: "optionC"
    },

    {
        question: "Hasil pembelahan meiosis I oogenesis berupa. . . . .",
        optionA: "4 pet telur yang identik",
        optionB: "1 oosit sekunder dan 1 badan kutub",
        optionC: "1 sel telur dan 3 badan kutub",
        optionD: "1 oosit primer dan 1 badan kutub",
        correctOption: "optionB"
    },

    {
        question: "Meiosis pada tumbuhan lumut dan tumbuhan paku terjadi pada. . . . .",
        optionA: "Pembentukan zigot",
        optionB: "Pembentukan daun",
        optionC: "Pembentukan spora",
        optionD: "Pembentukan gamet",
        correctOption: "optionD"
    },

    {
        question: "Perbedaan antara spermatogenesis dengan oogenesis terletak pada . . . . .",
        optionA: "Tahap-tahap pembelahan",
        optionB: "Jumlah sel kelamin yang fungsional",
        optionC: "Jumlah kromosom pada sperma dan ovum",
        optionD: "Jaringan tempat terjadinya proses pola pemisahan kromosom pada tiap fase",
        correctOption: "optionB"
    },

    {
        question: "Setelah oogonium membelah secara mitosis berkali-kali akan menghasilkan ...............setelah itu baru membelah secara meiosis",
        optionA: "oosit sekunder diploid",
        optionB: "oosit primer diploid",
        optionC: "polosit sekunder",
        optionD: "polosit primer",
        correctOption: "optionB"
    },

    {
        question: "Meiosis pada tumbuhan lumut dan tumbuhan paku terjadi pada. . . . .",
        optionA: "2 mikrospora haploid",
        optionB: "4 mikrospora diploid",
        optionC: "2 mikrospora diploid",
        optionD: "4 mikrospora haploid",
        correctOption: "optionD"
    }
]

let shuffledQuestions = [] //array kosong untuk menampung pertanyaan yang dipilih secara acak

function handleQuestions() { 
    //berfungsi untuk mengacak dan mendorong 5 pertanyaan ke array shuffledQuestions
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //mendapat Pertanyaan saat ini
    const currentQuestionAnswer = currentQuestion.correctOption //mendapat jawaban Pertanyaan saat ini
    const options = document.getElementsByName("option"); //dapatkan semua elemen di dom dengan nama 'opsi' (dalam hal ini input radio)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //dapatkan input radio yang benar dengan jawaban yang benar
            correctOption = option.labels[0].id
        }
    })
   
    //memeriksa untuk memastikan input radio telah diperiksa atau opsi yang dipilih
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //memeriksa apakah tombol radio yang dicentang sama dengan jawaban
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //atur untuk menunda nomor pertanyaan sampai saat pertanyaan berikutnya dimuat
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //atur untuk menunda nomor pertanyaan sampai saat pertanyaan berikutnya dimuat
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}


//dipanggil ketika tombol berikutnya dipanggil
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //menunda pertanyaan berikutnya yang ditampilkan sebentar
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//setel latar belakang opsi kembali ke nol setelah menampilkan warna yang benar/salah
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// hapus centang semua tombol radio untuk pertanyaan berikutnya (dapat dilakukan dengan peta atau foreach loop juga)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// berfungsi ketika semua pertanyaan dijawab
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // cek kondisi untuk komentar pemain dan warna komentar
    if (playerScore <= 7) {
        remark = "Jangan Menyerah, Teruslah Berusaha."
        remarkColor = "red"
    }
    else if (playerScore >= 7 && playerScore < 9) {
        remark = "Sudah Bagus, Tingkatkan Lagi"
        remarkColor = "orange"
    }
    else if (playerScore >= 9) {
        remark = "Luar Biasa Bagus"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data untuk ditampilkan ke papan skor
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}