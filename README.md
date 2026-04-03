# eunhak.dev

### Aboutme 페이지

## 구조

```
eunhak.dev/
├── index.html          # 홈 (자기소개)
├── experience.html     # 경험 (work / activity / awards)
├── projects.html       # 프로젝트 (연도별 마스터-디테일)
├── blog.html           # 블로그 (준비중)
├── style.css           # 공통 스타일
├── assets/
│   ├── img/
│   │   ├── profile.jpg         # 프로필 사진
│   │   └── projects/           # 프로젝트 스크린샷
│   └── fonts/                  # 로컬 폰트 (필요시)
├── js/
│   └── main.js                 # 공통 JS
└── README.md
```

## 배포 구조

```
GitHub (eunhak.dev)
    ↓ git pull
KT Cloud 서버
    ↓ Nginx
eunhak.dev
```

## 버전 관리

```bash
# 새 버전 배포
cd /var/www/html/aboutme
mkdir git_eunhak.dev_YYMMDD
cd git_eunhak.dev_YYMMDD
git clone https://github.com/eunhak11/eunhak.dev.git .

# 심링크 교체
ln -sfn git_eunhak.dev_YYMMDD/eunhak.dev working

# 롤백
ln -sfn git_eunhak.dev_이전날짜/eunhak.dev working
```

## 연관 레포

- [eunhak-api](https://github.com/eunhak11/eunhak-api) — Spring Boot API 서버 (예정)

## 스택

- Frontend: HTML / CSS / JavaScript (Vanilla)
- Server: Nginx (KT Cloud, Debian)
- DNS/SSL: Cloudflare
