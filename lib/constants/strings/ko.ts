import { Strings } from "@/lib/constants/strings/types";

export const STRINGS: Strings = {
  COMMON: {
    LOADING: "로딩 중...",
    SAVE: "저장",
    CANCEL: "취소",
  },
  AUTH: {
    LOGIN_SUCCESS: "로그인 되었습니다.",
    LOGOUT_SUCCESS: "로그아웃 되었습니다.",
    LOGIN_REQUEST: "로그인이 필요합니다.",
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
  },
} as const;
