// let nbre1 = parseFloat(prompt ("entrez un chiffre"))
// ;
// let nbre2 = parseFloat(prompt ("entrez un  deuxieme chiffre"));
// let operateur = prompt("entrez un opérateur + ,- ,x,/");
// if (isNaN(nbre1)==true || isNaN(nbre2)==true){
    // alert("c'est pas un nombre");
// }else{
// if(operateur=="+"){
    // console.log(nbre1+nbre2);
// }
// else if(operateur=="-"){
    // console.log(nbre1-nbre2);
// }
// else if(operateur=="*"){
    // console.log(nbre1*nbre2);
// }
// else if(operateur=="/"){
    
    // nbre2 > 0 ? console.log(nbre1/nbre2) : alert("division par zéro impossible");
// }else{
    // alert("erreur d'opérateur");
// }
// }
// let total = nbre1/nbre2;


// console.log(total);
// let confirmation = confirm("appuyez ");
// console.log(confirmation);

// console.log(confirm("appuyez sur le bouton"));

// if(confirmation){
    // alert("merci de votre visite");
// }else{
    // alert("merci de rester");


// {
//     if(i<=9){
//         document.write(" 0"+i);
//     }else{
//         document.write(" "+ i);
//     }
//     if(i%10==0){
//         document.write("<br>");
//     }
// }
let nbre1 = parseFloat(prompt ("entrez un nombre entre 1 et 10"));
for( i=0;i<=10;i++){
    document.write(nbre1+"x"+i+"="+nbre1*i+"<br>");
}