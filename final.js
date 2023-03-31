let isStarted = false;

const changefocus1 = () => {
  
  let phone1 = document.getElementById("p1").value
  if(phone1.length === 3) {
    document.getElementById("p2").focus()
  }
}

const changefocus2 = () => {
  
  let phone2 = document.getElementById("p2").value
  if(phone2.length === 4) {
    document.getElementById("p3").focus()
  }
}

const changefocus3 = () => {
  
  let phone3 = document.getElementById("p3").value

  if(phone3.length === 4) {
    document.getElementById("authnumberbox").disabled = false 
    document.getElementById("authnumberbox").style.cursor = "pointer"
    document.getElementById("authnumberbox").style.color = "#0068FF"
    document.getElementById("authnumberbox").style.backgroundColor = "#FFFFFF"
  }
}

const auth = () => {

  let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("authnumber").innerText = token;

  if(isStarted === false) {

    isStarted = true;
    document.getElementById("authcomp").disabled = false;
    document.getElementById("authcomp").style.backgroundColor = "#0068FF";
    document.getElementById("authcomp").style.color = "#FFFFFF";
    document.getElementById("authcomp").style.cursor = "pointer";
    
    let starttime = 180;

    setInterval(function(){
      
      if(starttime >= 0){

        let min = Math.floor( starttime / 60 ) ;
        let sec = String(starttime % 60).padStart(2, "0") ;
        let timer = `${min}:${sec}`

        document.getElementById("timer").innerText = timer;
        starttime = starttime - 1;

        if(document.getElementById("authcomp").innerText === "인증완료") {
          document.getElementById("timer").innerText = "3:00"
        }

        if(parseInt(min) === 0 && parseInt(sec) === 0) {
          isStarted = false;
          document.getElementById("authcomp").disabled = true;
          document.getElementById("authcomp").style.backgroundColor = "#d2d2d2"
          document.getElementById("authcomp").style.color = "#797979"
          document.getElementById("authcomp").style.cursor = "none"
          document.getElementById("authnumber").innerText = "000000"
          document.getElementById("timer").innerText = "3:00"
          
        }
      }
    },1000)
  } else {

  }
}

const authcomp = () => {
  alert("인증이 완료되었습니다.");
  document.getElementById("authcomp").disabled = true;
  document.getElementById("authcomp").style.backgroundColor = "#d2d2d2"
  document.getElementById("authcomp").style.color = "#797979"
  document.getElementById("authcomp").style.cursor = "none"
  document.getElementById("authcomp").innerText = "인증완료"
  
  document.getElementById("authnumberbox").disabled = true;
  document.getElementById("authnumberbox").style.backgroundColor = "#d2d2d2"
  document.getElementById("authnumberbox").style.color = "#797979"
  document.getElementById("authnumberbox").style.cursor = "none"
  
  document.getElementById("authnumber").innerText = "000000"

  document.getElementById("join").disabled = false;
  document.getElementById("join").style.backgroundColor = "#FFFFFF"
  document.getElementById("join").style.color = "#0068FF"
  document.getElementById("join").style.border = "1px solid #0068FF"
  document.getElementById("join").style.cursor = "pointer"
}

const joining = () => {

  let email = document.getElementById("email").value ;
  let myname = document.getElementById("myname").value ;
  let pw1 = document.getElementById("pw1").value ;
  let pw2 = document.getElementById("pw2").value ;
  let region = document.getElementById("third__region").value ;
  
  if(email === ""){
    document.getElementById("emailerror").innerText = "이메일이 올바르지 않습니다."
  } else if(email.includes("@") === false) {
    document.getElementById("emailerror").innerText = "@가 포함되어야 합니다."
  } else {
    document.getElementById("emailerror").innerText = ""
  }

  if(myname === ""){
    document.getElementById("mynameerror").innerText = "이름이 올바르지 않습니다."
  } else {
    document.getElementById("mynameerror").innerText = ""
  }

  if(pw1 === ""){
    document.getElementById("pw1error").innerText = "비밀번호를 입력해 주세요."
  } else if(pw2 === "") {
    document.getElementById("pw2error").innerText = "비밀번호를 입력해 주세요."
  } else if(!(pw1 === pw2)){
    document.getElementById("pw1error").innerText = "비밀번호1과 비밀번호2가 동일해야합니다."
    document.getElementById("pw2error").innerText = "비밀번호1과 비밀번호2가 동일해야합니다."
  } else {
    document.getElementById("pw1error").innerText = ""
    document.getElementById("pw2error").innerText = ""
  }

  if(region == "지역을 선택하세요."){
    document.getElementById("regionerror").innerText = "지역을 선택해 주세요."
  } else {
    document.getElementById("regionerror").innerText = ""
  }

  if(document.getElementById("woman").checked === false && document.getElementById("man").checked === false){
    document.getElementById("gendererror").innerText = "성별을 선택해 주세요."
  } else {
    document.getElementById("gendererror").innerText = ""
  }

  if(document.getElementById("emailerror").innerText === "" && document.getElementById("mynameerror").innerText === "" && document.getElementById("pw1error").innerText === "" && document.getElementById("pw2error").innerText === "" && document.getElementById("regionerror").innerText === "" && document.getElementById("gendererror").innerText === "") {
    alert("코드캠프 가입을 축하합니다.");
  }
}