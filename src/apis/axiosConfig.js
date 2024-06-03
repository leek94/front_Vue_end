// 통신할 때 필요한 공통 내용 정의 하는 곳
import axios from "axios";

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// AccessToken을 받고 나서 다음 함수 실행시 헤더에 실어서 전달할 수 있도록 헤더에 추가
// 로그인 성공 시 호출됨
function addAuthHeader(accessToken) {
    // common 객체에 동적 속성으로 Authorization을 추가
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

// 공통 요청 헤더에서 Authorization 헤더 삭제
// 로그아웃시 호출됨
function removeAuthHeader() {
    // common 객체의 Authorizartion 속성을 삭제
    // delete 타입
    delete axios.defaults.headers.common[""]
}

// 로컬 스토리지에 AccessToken을 저장
function saveAccessToken(accessToken) {
    // 로컬 스토리지에 AccessToken를 저장
    localStorage.setItem("accessToken", accessToken);
}

// 로컬 스토리지에서 있는 AcceessToken을 읽고 공통 헤더에 추가
function loadAccessToken() {
    // accessToken이 갚이 있으면 갚이 들어가고, 앞의 내용이 null이면 ""으로 초기화
    const accessToken = localStorage.getItem("accessToken") || "" ; 
    return accessToken; // 이렇게 리턴 값을 줄 경우에는 나중에 헤더에 넣어 줘야함

    // if(accessToken != "") { // 공통 헤더에 여기서 추가할 수도 있음
    //     addAuthHeader(accessToken); 
    // }
}

export default {
    addAuthHeader,
    removeAuthHeader,
    saveAccessToken,
    loadAccessToken
}

