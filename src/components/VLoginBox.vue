<script setup>

</script>

<template>
  <div class="loginBox-container">
    <p id="loginBox-title">Sign in</p>
    <input type="text" name="" id="" placeholder="Enter email or user name">
    <input type="text" name="" id="" placeholder="Password">
    <div id="fp-box">
    <p>Forgot password?</p>

    </div>
    <input type="button" value="Login" id="login-btn">
    <p id="continue-text">or continue with</p>

    <div id="icons">
        <img src="../assets/img/loginIcon/kakao.svg" alt="kakaoIcon" srcset="">
        <img src="../assets/img/loginIcon/naver.svg" alt="naverIcon" srcset="">
        <img src="../assets/img/loginIcon/google.svg" alt="googleIcon" srcset="">
    </div>
  </div>
</template>

<style scoped>
.loginBox-container{
    height: calc(100vh - 15rem);
    width: 23.0625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
}

#loginBox-title{
    color: #333;
    font-family: Poppins;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px !important;
}

input{
    width: 23.0625rem;
    height: 3.875rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background-color: #E6EFFF;
    border: none;
    padding: 15px;
    margin-bottom: 20px;
}

input::placeholder{
    /*  text style  */
    color: #8AB4FF;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.loginBox-container p{
    color: #B0B0B0;
    font-family: Poppins;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#fp-box{
    display: flex;
    width: 100%;
    justify-content: end;
    padding-right: 10px;
}

#continue-text{
    color: #B5B5B5;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

#login-btn{
    border-radius: 0.5625rem;
    background: #8AB4FF;
    box-shadow: 0px 4px 61px 0px rgba(138, 180, 255, 0.40);

    color: #fff;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 30px 0;
}

#icons{
    margin: 20px 0;
}

#icons img{
    margin: 7px;
}
</style>