import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container bg-light mt-3 rounded-3 mx-auto p-4">
          <h3 className="fw-bold">學習系統</h3>
          <p className="col-md-8">
            本系統使用 React.js 作為前端框架，Node.js、MongoDB
            作為後端服務器。這種項目稱為 MERN
            項目，它是創建現代網站的最流行的方式之一。
          </p>
          <button className="btn btn-primary">看看他怎麼運作</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-3">
          <div className="container bg-dark  rounded-3  p-4">
            <h3 className="fw-bold text-light">作為一個學生</h3>
            <p className="col-md-8 text-light">
              學生可以註冊他們喜歡的課程。本網站僅供練習之用，請勿提供任何個人資料，例如信用卡號碼。
            </p>
            <button className="btn btn-outline-light">登入會員，或者註冊一個帳號</button>
          </div>
        </div>
        
        <div className="col-6 p-3">
          <div className="container bg-light rounded-3 ml-1 p-4">
            <h3 className="fw-bold">作為一個導師</h3>
            <p className="col-md-8">
              您可以通過註冊成為一名講師，並開始製作在線課程。本網站僅供練習之用，請勿提供任何個人資料，例如信用卡號碼。
            </p>
            <button className="btn btn-outline-dark">開始開設課程</button>
          </div>
        </div>
        
      </div>

    </div>
    
    
  );
};

export default Home;
