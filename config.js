/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
    // ── 1. 초대장 열기 ──
    useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

    // ── 2. 메인 (히어로) ──
    groom: {
        name: "호연",
        nameEn: "Groom",
        father: "최성안",
        mother: "조미정",
        fatherDeceased: false,
        motherDeceased: false
    },

    bride: {
        name: "주연",
        nameEn: "Bride",
        father: "이상보",
        mother: "김은진",
        fatherDeceased: false,
        motherDeceased: false
    },

    wedding: {
        date: "2026-05-09",
        time: "12:00",
        venue: "메리빌리아 더 프레스티지",
        hall: "Convention Hall",
        address: "경기 수원시 권선구 세화로 116 메리빌리아더프레스티지 웨딩홀",
        tel: "0507-1447-5612"
    },

    // ── 3. 인사말 ──
    greeting: {
        title: "소중한 분들을 초대합니다",
        content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
    },

    // ── 4. 우리의 이야기 ──
    story: {
        title: "우리의 이야기",
        content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
    },

    // ── 5. 오시는 길 ──
    mapLinks: {
        kakao: "https://place.map.kakao.com/871976307",
        naver: "https://naver.me/5apDP7nI"
    },

    // ── 6. 마음 전하실 곳 ──
    accounts: {
        groom: [
            { role: "신랑", name: "최호연", bank: "신한은행", number: "110-123-456789" },
            { role: "아버지", name: "최성안", bank: "국민은행", number: "123-45-6789012" },
            { role: "어머니", name: "조미정", bank: "우리은행", number: "1002-345-678901" },
        ],
        bride: [
            { role: "신부", name: "이주연", bank: "하나은행", number: "234-56-7890123" },
            { role: "아버지", name: "이상보", bank: "농협", number: "301-0123-4567-01" },
            { role: "어머니", name: "김은진", bank: "기업은행", number: "012-345678-01-012" },
        ]
    },

    // ── 링크 공유 시 나타나는 문구 ──
    meta: {
        title: "최호연 ♥ 이주연 결혼합니다",
        description: "2026년 9월 19일, 소중한 분들을 초대합니다."
    }
};
