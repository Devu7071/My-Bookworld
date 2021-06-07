var firebaseConfig = {
    apiKey: "AIzaSyBt6EinejY78Lnk18lZvzEzhN0tMcxoogw",
    authDomain: "bookstore-9935b.firebaseapp.com",
    projectId: "bookstore-9935b",
    storageBucket: "bookstore-9935b.appspot.com",
    messagingSenderId: "485804356168",
    appId: "1:485804356168:web:0c4e01c9a7954c3c9b9e7d",
    measurementId: "G-4BP4968C3D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let cards = document.getElementById("cardss");

let bookdetails;

body = document.body;

db.collection("BooksStore").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        bookdetails = doc.data();

        let c1 = document.createElement("div");
        let c2 = document.createElement("div");
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let a = document.createElement("a");


        c1.className = "card";
        c1.style.width = "18rem";
        c2.className = "card-body";
        h5.className = "card-title";
        h5.innerHTML = bookdetails.title;
        p.className = "card-text";
        // p.innerHTML=bookdetails.link;
        a.className = "btn btn-primary";
        a.innerHTML = "Open Book";
        a.href = bookdetails.link;


        c2.append(h5);
        c2.append(p);
        c2.append(a);
        c1.append(c2);

        cards.append(c1);

        cards.style.display = "flex";
        cards.style.flexDirection = "column";
        cards.style.justifyContent = "center";
        cards.style.alignItems = "center";

        // for(i;i<bookdetails.)
    });
});