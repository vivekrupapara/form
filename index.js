// submit button
const submitBtn = document.getElementById("submit-btn");

// show button
const showBtn=document.getElementById("show-btn");

// form feild
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const bdate=document.getElementById("bdate");
const mono=document.getElementById("mono");
const emailid=document.getElementById("emailid");

// show data on screen
const showData=document.getElementById("showData");


// when click on submit btn
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // local Storage
    let storage=localStorage.getItem("data");
  
    if(fname.value!='' && lname.value!='' && bdate.value!='' && mono.value!='' && emailid.value!=''){

        const person={
            fname:fname.value,
            lname:lname.value,
            bdate:bdate.value,
            mono:mono.value,
            emailid:emailid.value
        }
        
        if(storage==null){
            dataObj=[]
        }else{
            dataObj=JSON.parse(storage);
        }
        
        dataObj.push(person);
        
        localStorage.setItem("data",JSON.stringify(dataObj))
    }
    
    fname.value="";
    lname.value="";
    bdate.value="";
    mono.value="";
    emailid.value="";
})


showBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let storage=localStorage.getItem("data");
    
    dataObj=JSON.parse(storage)

    let html="";

    dataObj.map((item)=>{
        html=html+`
        <div>
        <p>First-Name : ${item.fname}</p>
        <p>Last-Name : ${item.lname}</p>
        <p>Birth-Date : ${item.bdate}</p>
        <p>Mobile Number : ${item.mono}</p>
        <p>E-mail Id : ${item.emailid}</p>
        </div>  `
    })

    showData.innerHTML=html;
})



