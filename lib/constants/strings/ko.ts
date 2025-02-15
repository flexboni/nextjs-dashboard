import { Strings } from "@/lib/types/strings";

export const STRINGS: Strings = {
  COMMON: {
    LOADING: "로딩 중...",
    SAVE: "저장",
    CANCEL: "취소",
    EMAIL: "이메일",
    PASSWORD: "비밀번호",
    PASSWORD_CONFIRM: "비밀번호 확인",
    SIGNUP: "회원가입",
    DISPLAY_NAME: "이름",
  },
  PLACEHOLDER: {
    EMAIL: "pado@codewave.com",
  },
  AUTH: {
    LOGIN_SUCCESS: "로그인 되었습니다.",
    LOGOUT_SUCCESS: "로그아웃 되었습니다.",
    LOGIN_REQUEST: "로그인이 필요합니다.",
    SIGNUP_TITLE: "회원가입을 진행해주세요.",
  },
  ERRORS: {
    GENERAL: "오류가 발생했습니다",
    SERVER_ERROR: "서버 오류가 발생했습니다",
    SIGNOUT: "로그아웃 실패",
    GET_DOCUMENT: "문서 가져오는 중 오류 발생",
    LISTING_DOCUMENT: "문서 리스팅 중 오류 발생",
    UPDATING_DOCUMENT: "문서 업데이트 중 오류 발생",
    DELETE_DOCUMENT: "문서 삭제 중 오류 발생",
    INVALID_CREDENTIALS: "이메일 또는 비밀번호가 올바르지 않습니다",
    CREATE_ACCOUNT: "계정 생성 실패",
    PASSWORD_NOT_MATCH: "비밀번호가 일치하지 않습니다.",
  },
} as const;
