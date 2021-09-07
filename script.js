const supper=80;
const contract =100
const grant =150
const height =200



let forName = prompt('Ism va familiyangizni kiriting kiriting', String('name')) ; 
if(forName){


let score = prompt('balingizni kiriting', 0) -0;}

let elTitle =document.querySelector('#title');

if(score>height){
   elTitle.textContent = (forName +" noto'gri ball kiritdingiz eng yuqori ball 200 😂")
}

else if (score>grant && score <=height){
    elTitle.textContent = (forName +" grant asosida o'qishga qabul qilindingiz 😍 ")
}

else if (score>contract && score<=grant){
    elTitle.textContent =(forName + " sizning balingiz katrakt asosida o'qishga yetarli😊")


}

else if (score>supper && score<=contract){

    let userConfirm = confirm( forName + " to'plagan ball super kantrakt uchun yetarli, tasdiqlash tugmasini bosing va super kantrakt haqida  koproq malumot oling 🤦‍♀️🤦‍♂️")


    if (userConfirm){
   

    let secondconfirm =confirm ( "Supet kantrak bu oshirilgan kantrak bo'lib abuturient bunda to'plagan bali asosida kantrakning malum darajada oshirilgan miqdorini to'lab o'qishga qabul qilinish imkiniyati, bunda  abiturientni  400$  oshirilgan kantarak to'lab o'qishga qabul qilish tasdiqlangan To'lov uchun tasdiqlash tugmasini bosing")
     if(secondconfirm){

     
    let price=+prompt("mablag'ingizni kiriting" ,1);

    if (price>=400){
        elTitle.textContent="Siz o'qishga qabul qilindingiz"
    }else{
         elTitle.textContent="Afsuski mablag'ingiz yetarlimas"
    }

}}}

else{
    elTitle.textContent=( forName + " o'qishga kira olmadingiz, yaxshiroq o'qing 😢")
}


